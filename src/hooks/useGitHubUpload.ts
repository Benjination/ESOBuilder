import { useState, useCallback } from 'react'
import { createGitHubStorage, UploadResult, UploadOptions } from '../services/githubStorage'
import { useAuth } from '../contexts/AuthContext'

export interface UseGitHubUploadOptions {
  onSuccess?: (result: UploadResult) => void
  onError?: (error: Error) => void
  onProgress?: (progress: number) => void
}

export interface UploadState {
  isUploading: boolean
  progress: number
  error: string | null
  result: UploadResult | null
}

export const useGitHubUpload = (options: UseGitHubUploadOptions = {}) => {
  const { user } = useAuth()
  const [uploadState, setUploadState] = useState<UploadState>({
    isUploading: false,
    progress: 0,
    error: null,
    result: null
  })

  const githubStorage = createGitHubStorage()

  const uploadFile = useCallback(async (
    file: File,
    uploadOptions: Partial<UploadOptions> = {}
  ) => {
    if (!user) {
      const error = new Error('User must be logged in to upload files')
      setUploadState(prev => ({ ...prev, error: error.message }))
      options.onError?.(error)
      return
    }

    setUploadState({
      isUploading: true,
      progress: 0,
      error: null,
      result: null
    })

    try {
      options.onProgress?.(25)
      setUploadState(prev => ({ ...prev, progress: 25 }))

      // Generate filename if not provided
      const timestamp = Date.now()
      const filename = uploadOptions.path || `${timestamp}-${file.name}`
      
      options.onProgress?.(50)
      setUploadState(prev => ({ ...prev, progress: 50 }))

      const result = await githubStorage.uploadImage(file, {
        filename,
        userId: user.uid,
        category: 'gallery',
        ...uploadOptions
      })

      options.onProgress?.(100)
      setUploadState({
        isUploading: false,
        progress: 100,
        error: null,
        result
      })

      options.onSuccess?.(result)
      return result

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Upload failed'
      setUploadState({
        isUploading: false,
        progress: 0,
        error: errorMessage,
        result: null
      })
      options.onError?.(error instanceof Error ? error : new Error(errorMessage))
    }
  }, [user, githubStorage, options])

  const uploadMultipleFiles = useCallback(async (
    files: File[],
    uploadOptions: Partial<UploadOptions> = {}
  ) => {
    const results: UploadResult[] = []
    const errors: Error[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileProgress = (i / files.length) * 100
      
      try {
        options.onProgress?.(fileProgress)
        setUploadState(prev => ({ ...prev, progress: fileProgress }))

        const result = await uploadFile(file, uploadOptions)
        if (result) {
          results.push(result)
        }
      } catch (error) {
        errors.push(error instanceof Error ? error : new Error('Upload failed'))
      }
    }

    if (errors.length > 0) {
      const combinedError = new Error(`${errors.length} uploads failed: ${errors.map(e => e.message).join(', ')}`)
      options.onError?.(combinedError)
    }

    return { results, errors }
  }, [uploadFile, options])

  const resetUploadState = useCallback(() => {
    setUploadState({
      isUploading: false,
      progress: 0,
      error: null,
      result: null
    })
  }, [])

  return {
    uploadState,
    uploadFile,
    uploadMultipleFiles,
    resetUploadState,
    canUpload: !!user && !uploadState.isUploading
  }
}

export const useUserGallery = () => {
  const { user } = useAuth()
  const [gallery, setGallery] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const githubStorage = createGitHubStorage()

  const loadUserGallery = useCallback(async () => {
    if (!user) {
      setGallery([])
      return
    }

    setLoading(true)
    setError(null)

    try {
      const files = await githubStorage.getUserGallery(user.uid)
      
      // Filter only image files
      const imageFiles = files.filter((file: any) => 
        file.type === 'file' && 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
      )

      setGallery(imageFiles)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load gallery'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [user, githubStorage])

  const deleteImage = useCallback(async (path: string, sha: string) => {
    if (!user) return

    try {
      await githubStorage.deleteFile(`user-galleries/${user.uid}/${path}`, sha, `Delete image: ${path}`)
      
      // Remove from local gallery state
      setGallery(prev => prev.filter(item => item.sha !== sha))
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to delete image'
      setError(errorMessage)
      throw err
    }
  }, [user, githubStorage])

  return {
    gallery,
    loading,
    error,
    loadUserGallery,
    deleteImage
  }
}

import React, { useCallback, useState } from 'react'
import { Upload, X, AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { useGitHubUpload } from '../hooks/useGitHubUpload'
import { useAuth } from '../contexts/AuthContext'

interface ImageUploadProps {
  onUploadComplete?: (urls: string[]) => void
  onUploadError?: (error: Error) => void
  maxFiles?: number
  accept?: string
  className?: string
  multiple?: boolean
  category?: 'gallery' | 'avatar' | 'build-screenshot' | 'community'
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onUploadComplete,
  onUploadError,
  maxFiles = 10,
  accept = 'image/*',
  className = '',
  multiple = true,
  category = 'gallery'
}) => {
  const { user } = useAuth()
  const [isDragOver, setIsDragOver] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])

  const { uploadState, uploadFile, uploadMultipleFiles, resetUploadState, canUpload } = useGitHubUpload({
    onSuccess: (result) => {
      onUploadComplete?.([result.downloadUrl])
    },
    onError: (error) => {
      onUploadError?.(error)
    }
  })

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    handleFileSelection(files)
  }, [])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFileSelection(files)
  }, [])

  const handleFileSelection = useCallback((files: File[]) => {
    if (!canUpload) return

    // Filter only image files
    const imageFiles = files.filter(file => file.type.startsWith('image/'))
    
    if (imageFiles.length === 0) {
      onUploadError?.(new Error('Please select valid image files'))
      return
    }

    // Limit number of files
    const limitedFiles = imageFiles.slice(0, maxFiles)
    setSelectedFiles(limitedFiles)

    // Generate previews
    const newPreviews: string[] = []
    limitedFiles.forEach(file => {
      const url = URL.createObjectURL(file)
      newPreviews.push(url)
    })
    setPreviews(newPreviews)
  }, [canUpload, maxFiles, onUploadError])

  const removeFile = useCallback((index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
    setPreviews(prev => {
      const newPreviews = prev.filter((_, i) => i !== index)
      // Revoke the removed URL to prevent memory leaks
      URL.revokeObjectURL(prev[index])
      return newPreviews
    })
  }, [])

  const handleUpload = useCallback(async () => {
    if (selectedFiles.length === 0 || !canUpload) return

    try {
      if (selectedFiles.length === 1) {
        await uploadFile(selectedFiles[0], { category })
      } else {
        const { results, errors } = await uploadMultipleFiles(selectedFiles, { category })
        
        if (results.length > 0) {
          const urls = results.map(r => r.downloadUrl)
          onUploadComplete?.(urls)
        }
        
        if (errors.length > 0) {
          onUploadError?.(errors[0])
        }
      }

      // Clear selections on success
      if (!uploadState.error) {
        setSelectedFiles([])
        previews.forEach(url => URL.revokeObjectURL(url))
        setPreviews([])
      }
    } catch (error) {
      onUploadError?.(error instanceof Error ? error : new Error('Upload failed'))
    }
  }, [selectedFiles, canUpload, uploadFile, uploadMultipleFiles, category, onUploadComplete, onUploadError, uploadState.error, previews])

  const clearAll = useCallback(() => {
    setSelectedFiles([])
    previews.forEach(url => URL.revokeObjectURL(url))
    setPreviews([])
    resetUploadState()
  }, [previews, resetUploadState])

  if (!user) {
    return (
      <div className="text-center p-8 border-2 border-dashed border-gray-600 rounded-lg">
        <AlertCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-400">Please sign in to upload images</p>
      </div>
    )
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div
        className={`
          border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${isDragOver 
            ? 'border-yellow-400 bg-yellow-400/10' 
            : 'border-gray-600 hover:border-gray-500'
          }
          ${!canUpload ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => {
          if (canUpload) {
            document.getElementById('file-input')?.click()
          }
        }}
      >
        <input
          id="file-input"
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
          disabled={!canUpload}
        />

        {uploadState.isUploading ? (
          <div className="space-y-4">
            <Loader2 className="mx-auto h-12 w-12 text-yellow-400 animate-spin" />
            <div className="space-y-2">
              <p className="text-gray-300">Uploading images...</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadState.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-400">{uploadState.progress}% complete</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div>
              <p className="text-lg font-medium text-gray-300 mb-2">
                Drop images here or click to select
              </p>
              <p className="text-sm text-gray-400">
                {multiple ? `Upload up to ${maxFiles} images` : 'Upload one image'}
                <br />
                Supports PNG, JPG, GIF, WebP
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Error Display */}
      {uploadState.error && (
        <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
          <div>
            <p className="font-medium text-red-300">Upload Failed</p>
            <p className="text-sm text-red-200">{uploadState.error}</p>
          </div>
          <button
            onClick={resetUploadState}
            className="ml-auto p-1 hover:bg-red-800 rounded"
          >
            <X className="h-4 w-4 text-red-400" />
          </button>
        </div>
      )}

      {/* Success Display */}
      {uploadState.result && (
        <div className="bg-green-900/50 border border-green-500 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
          <div>
            <p className="font-medium text-green-300">Upload Successful!</p>
            <p className="text-sm text-green-200">Image uploaded to your gallery</p>
          </div>
        </div>
      )}

      {/* File Previews */}
      {selectedFiles.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-300">
              Selected Images ({selectedFiles.length})
            </h4>
            <button
              onClick={clearAll}
              className="text-sm text-gray-400 hover:text-gray-300"
            >
              Clear All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-xs text-white bg-black/50 rounded px-2 py-1 truncate">
                    {selectedFiles[index].name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleUpload}
            disabled={!canUpload || uploadState.isUploading}
            className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            {uploadState.isUploading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Uploading...
              </span>
            ) : (
              `Upload ${selectedFiles.length} Image${selectedFiles.length > 1 ? 's' : ''}`
            )}
          </button>
        </div>
      )}
    </div>
  )
}

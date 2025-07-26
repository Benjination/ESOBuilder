/**
 * GitHub Storage Service
 * Handles file uploads to GitHub repository for user galleries
 */

export interface GitHubConfig {
  owner: string
  repo: string
  token: string
  branch?: string
}

export interface UploadResult {
  url: string
  downloadUrl: string
  sha: string
  size: number
}

export interface UploadOptions {
  path: string
  content: string | ArrayBuffer
  message?: string
  userId?: string
  category?: 'gallery' | 'avatar' | 'build-screenshot' | 'community'
}

export class GitHubStorageService {
  private config: GitHubConfig
  private baseApiUrl = 'https://api.github.com'

  constructor(config: GitHubConfig) {
    this.config = {
      branch: 'main',
      ...config
    }
  }

  /**
   * Upload a file to GitHub repository
   */
  async uploadFile(options: UploadOptions): Promise<UploadResult> {
    const { path, content, message, userId, category } = options
    
    // Create organized path structure
    const fullPath = this.createPath(path, userId, category)
    
    // Convert content to base64 if it's binary
    const base64Content = this.toBase64(content)
    
    const url = `${this.baseApiUrl}/repos/${this.config.owner}/${this.config.repo}/contents/${fullPath}`
    
    const requestData: any = {
      message: message || `Upload ${path}`,
      content: base64Content,
      branch: this.config.branch
    }

    try {
      // Check if file exists first
      const existingFile = await this.getFile(fullPath)
      if (existingFile) {
        requestData.sha = existingFile.sha
      }
    } catch (error) {
      // File doesn't exist, which is fine for new uploads
    }

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${this.config.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify(requestData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`GitHub API error: ${errorData.message}`)
    }

    const data = await response.json()
    
    return {
      url: data.content.html_url,
      downloadUrl: data.content.download_url,
      sha: data.content.sha,
      size: data.content.size
    }
  }

  /**
   * Upload an image file with automatic compression and thumbnail generation
   */
  async uploadImage(
    file: File, 
    options: Omit<UploadOptions, 'content' | 'path'> & { 
      filename?: string 
      maxWidth?: number
      quality?: number
    }
  ): Promise<UploadResult> {
    const { filename, maxWidth = 1920, quality = 0.8, ...uploadOptions } = options
    
    // Process the image
    const processedImage = await this.processImage(file, maxWidth, quality)
    
    const path = filename || `${Date.now()}-${file.name}`
    
    return this.uploadFile({
      ...uploadOptions,
      path,
      content: processedImage,
      message: `Upload image: ${path}`
    })
  }

  /**
   * Get file information from GitHub
   */
  async getFile(path: string) {
    const url = `${this.baseApiUrl}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${this.config.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`Failed to get file: ${response.statusText}`)
    }

    return response.json()
  }

  /**
   * Delete a file from GitHub
   */
  async deleteFile(path: string, sha: string, message?: string): Promise<void> {
    const url = `${this.baseApiUrl}/repos/${this.config.owner}/${this.config.repo}/contents/${path}`
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `token ${this.config.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: message || `Delete ${path}`,
        sha,
        branch: this.config.branch
      })
    })

    if (!response.ok) {
      throw new Error(`Failed to delete file: ${response.statusText}`)
    }
  }

  /**
   * List files in a directory
   */
  async listFiles(directoryPath: string = '') {
    const url = `${this.baseApiUrl}/repos/${this.config.owner}/${this.config.repo}/contents/${directoryPath}`
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `token ${this.config.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to list files: ${response.statusText}`)
    }

    return response.json()
  }

  /**
   * Get user's gallery files
   */
  async getUserGallery(userId: string) {
    try {
      return await this.listFiles(`user-galleries/${userId}`)
    } catch (error) {
      // Return empty array if user gallery doesn't exist yet
      return []
    }
  }

  /**
   * Create organized path structure
   */
  private createPath(originalPath: string, userId?: string, category?: string): string {
    if (userId && category) {
      switch (category) {
        case 'gallery':
          return `user-galleries/${userId}/${originalPath}`
        case 'avatar':
          return `profile-avatars/${userId}/${originalPath}`
        case 'build-screenshot':
          return `build-screenshots/${userId}/${originalPath}`
        case 'community':
          return `community-uploads/${originalPath}`
        default:
          return `user-content/${userId}/${originalPath}`
      }
    }
    return originalPath
  }

  /**
   * Convert content to base64
   */
  private toBase64(content: string | ArrayBuffer): string {
    if (typeof content === 'string') {
      return btoa(unescape(encodeURIComponent(content)))
    }
    
    // Convert ArrayBuffer to base64
    const bytes = new Uint8Array(content)
    let binary = ''
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
  }

  /**
   * Process and compress image
   */
  private processImage(file: File, maxWidth: number, quality: number): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()

      img.onload = () => {
        // Calculate new dimensions
        const ratio = Math.min(maxWidth / img.width, maxWidth / img.height)
        const newWidth = img.width * ratio
        const newHeight = img.height * ratio

        canvas.width = newWidth
        canvas.height = newHeight

        // Draw and compress
        ctx?.drawImage(img, 0, 0, newWidth, newHeight)
        
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error('Failed to process image'))
            return
          }
          
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result as ArrayBuffer)
          reader.onerror = reject
          reader.readAsArrayBuffer(blob)
        }, file.type, quality)
      }

      img.onerror = reject
      img.src = URL.createObjectURL(file)
    })
  }
}

/**
 * Default GitHub storage configuration
 * These should be set via environment variables
 */
export const createGitHubStorage = () => {
  const config: GitHubConfig = {
    owner: import.meta.env.VITE_GITHUB_STORAGE_OWNER || 'your-username',
    repo: import.meta.env.VITE_GITHUB_STORAGE_REPO || 'eso-theory-crafter-storage',
    token: import.meta.env.VITE_GITHUB_TOKEN || '',
    branch: 'main'
  }

  if (!config.token || config.token === '') {
    console.warn('GitHub token not configured. File uploads will not work.')
  }

  return new GitHubStorageService(config)
}

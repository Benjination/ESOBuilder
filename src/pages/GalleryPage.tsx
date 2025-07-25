import { useState } from 'react'
import { Upload, Search, EyeOff, Eye, Image, Plus } from 'lucide-react'
import { bennysGalleryData } from '../../data/gallery'

export const GalleryPage = () => {
  const [showBennysGallery, setShowBennysGallery] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDragOver, setIsDragOver] = useState(false)

  // Placeholder for user authentication status - will be implemented in Phase 2
  const isLoggedIn = false // This will be replaced with actual auth state

  // Benny's Gallery data - imported from data file
  const bennysGalleryImages = bennysGalleryData

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    // TODO: Handle file upload when authentication is implemented
    console.log('File drop detected - will implement with user accounts')
  }

  const handleFileSelect = (_e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Handle file selection when authentication is implemented
    console.log('File selection detected - will implement with user accounts')
  }

  return (
    <div className="min-h-screen p-6 space-y-12">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="hero-title text-4xl md:text-5xl mb-4">
          Gallery
        </h1>
        <p className="hero-subtitle text-lg md:text-xl max-w-3xl mx-auto">
          Discover amazing ESO builds, screenshots, and community creations. Share your own adventures and inspire others.
        </p>
      </div>

      {/* My Gallery Section */}
      <div className="magical-border">
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-eso font-bold glowing-text">
              My Gallery
            </h2>
            <div className="flex items-center space-x-2 text-eso-gold">
              <Image className="w-5 h-5" />
              <span className="text-sm">0 images</span>
            </div>
          </div>

          {!isLoggedIn ? (
            // Not logged in state
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-eso-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-eso-darker" />
              </div>
              <h3 className="text-xl font-eso text-eso-gold">Create an Account to Upload</h3>
              <p className="text-gray-300 max-w-md mx-auto">
                Sign up to upload your own ESO screenshots, build showcases, and share your adventures with the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button className="btn-primary">
                  Create Account
                </button>
                <button className="btn-secondary">
                  Sign In
                </button>
              </div>
            </div>
          ) : (
            // Logged in state (will be shown when auth is implemented)
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-eso-gold focus:outline-none"
                />
              </div>

              {/* Upload Area */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                  isDragOver
                    ? 'border-eso-gold bg-eso-gold/5'
                    : 'border-gray-600 hover:border-eso-gold/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-eso-blue to-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-eso-gold">
                      Drag and drop images here
                    </p>
                    <p className="text-gray-400 mt-1">
                      or click to browse files
                    </p>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="btn-secondary inline-flex items-center space-x-2 cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Choose Files</span>
                  </label>
                </div>
              </div>

              {/* User's Images Grid (empty for now) */}
              <div className="text-center py-8 text-gray-400">
                <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>No images uploaded yet. Start building your gallery!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Benny's Gallery Section */}
      <div className="magical-border">
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-eso font-bold glowing-text">
              Benny's Gallery
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-eso-gold">
                <Image className="w-5 h-5" />
                <span className="text-sm">{bennysGalleryImages.length} images</span>
              </div>
              <button
                onClick={() => setShowBennysGallery(!showBennysGallery)}
                className="flex items-center space-x-2 text-gray-400 hover:text-eso-gold transition-colors duration-200"
              >
                {showBennysGallery ? (
                  <>
                    <EyeOff className="w-5 h-5" />
                    <span>Hide Gallery</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-5 h-5" />
                    <span>Show Gallery</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {showBennysGallery && (
            <div className="space-y-6">
              <p className="text-gray-300 text-center">
                Curated images and builds by the site creator. Check back for new additions!
              </p>
              
              {bennysGalleryImages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {bennysGalleryImages.map((image) => (
                    <div
                      key={image.id}
                      className="group relative bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 cursor-pointer"
                    >
                      <div className="aspect-square bg-gray-700 flex items-center justify-center">
                        <Image className="w-12 h-12 text-gray-500" />
                        <span className="absolute bottom-2 left-2 text-xs text-gray-400">
                          Placeholder
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-1 group-hover:text-eso-gold transition-colors">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {image.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs px-2 py-1 bg-eso-blue/20 text-eso-blue rounded">
                            {image.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(image.uploadDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Gallery coming soon! Images will be added shortly.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

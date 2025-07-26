import { useState, useEffect } from 'react'
import { Upload, Search, EyeOff, Eye, Image, Plus, X } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { AuthModal } from '../components/AuthModal'
import { bennysGalleryData } from '../../data/auto-gallery'

export const GalleryPage = () => {
  const { user } = useAuth()
  const [showBennysGallery, setShowBennysGallery] = useState(false) // Default to hidden
  const [searchTerm, setSearchTerm] = useState('')
  const [isDragOver, setIsDragOver] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof bennysGalleryData[0] | null>(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')

  // Placeholder for user authentication status - will be implemented in Phase 2
  const isLoggedIn = !!user // This will be replaced with actual auth state

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

  // Handle ESC key to close lightbox and body scroll
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        setSelectedImage(null)
      }
    }

    // Prevent body scroll when lightbox is open
    if (selectedImage) {
      document.body.classList.add('lightbox-open')
    } else {
      document.body.classList.remove('lightbox-open')
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('lightbox-open')
    }
  }, [selectedImage])

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
                <button 
                  className="btn-primary"
                  onClick={() => {
                    setAuthMode('signup')
                    setShowAuthModal(true)
                  }}
                >
                  Create Account
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => {
                    setAuthMode('login')
                    setShowAuthModal(true)
                  }}
                >
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
          {showBennysGallery ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-eso font-bold glowing-text">
                    Benny's Gallery
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Admin curated collection • Images managed by site owner
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-eso-gold">
                    <Image className="w-5 h-5" />
                    <span className="text-sm">{bennysGalleryData.length} images</span>
                  </div>
                  
                  {/* Fixed Hide Gallery button using div instead of button */}
                  <div
                    onClick={() => {
                      console.log('Hide Gallery clicked');
                      setShowBennysGallery(false);
                    }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-eso-gold transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 rounded-lg px-3 py-2 hover:bg-gray-800/30"
                    style={{ zIndex: 99999, position: 'relative' }}
                  >
                    <EyeOff className="w-5 h-5" />
                    <span className="font-medium">Hide Gallery</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div 
              className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-800/50 rounded-lg transition-all duration-200 group"
              onClick={() => {
                console.log('Show Gallery clicked');
                setShowBennysGallery(true);
              }}
              style={{ zIndex: 99999, position: 'relative' }}
            >
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-eso font-bold text-gray-400 group-hover:text-eso-gold transition-colors duration-200">
                  Benny's Gallery
                </h2>
                <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                  ({bennysGalleryData.length} images)
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 group-hover:text-eso-gold transition-colors duration-200">
                <Eye className="w-5 h-5" />
                <span className="text-sm">Click to show</span>
              </div>
            </div>
          )}

          {showBennysGallery && (
            <div className="space-y-6">
              <p className="text-gray-300 text-center">
                Curated collection of ESO screenshots and builds by the site creator. 
                <br />
                <span className="text-sm text-gray-400">Note: Only the site admin can add images to this gallery</span>
              </p>
              
              {bennysGalleryData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {bennysGalleryData.map((image) => (
                    <div
                      key={image.id}
                      className="group relative bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={image.thumbnail}
                          alt={image.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full bg-gray-700 flex items-center justify-center">
                                  <div class="text-center">
                                    <svg class="w-12 h-12 text-gray-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span class="text-xs text-gray-400">Image loading...</span>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-1 group-hover:text-eso-gold transition-colors">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {image.description}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className={`text-xs px-2 py-1 rounded ${
                            image.category === 'builds' ? 'bg-eso-gold/20 text-eso-gold' :
                            image.category === 'screenshots' ? 'bg-eso-blue/20 text-eso-blue' :
                            image.category === 'art' ? 'bg-purple-500/20 text-purple-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {image.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(image.uploadDate).toLocaleDateString()}
                          </span>
                        </div>
                        {image.tags && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {image.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-1.5 py-0.5 bg-gray-700 text-gray-300 rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                            {image.tags.length > 3 && (
                              <span className="text-xs text-gray-500">
                                +{image.tags.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
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

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 lightbox-backdrop flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center lightbox-content">
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image container */}
            <div 
              className="relative max-w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main image */}
              <img
                src={selectedImage.fullSize}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg lightbox-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = selectedImage.thumbnail;
                }}
              />

              {/* Image info */}
              <div className="bg-gray-900 bg-opacity-95 rounded-lg p-4 mt-4 max-w-lg">
                <h3 className="text-xl font-eso font-bold text-eso-gold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {selectedImage.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded ${
                    selectedImage.category === 'builds' ? 'bg-eso-gold/20 text-eso-gold' :
                    selectedImage.category === 'screenshots' ? 'bg-eso-blue/20 text-eso-blue' :
                    selectedImage.category === 'art' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {selectedImage.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(selectedImage.uploadDate).toLocaleDateString()}
                  </span>
                </div>

                {selectedImage.tags && (
                  <div className="flex flex-wrap gap-1">
                    {selectedImage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation hints */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-white text-sm opacity-75">
                Click outside image or press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Authentication Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </div>
  )
}

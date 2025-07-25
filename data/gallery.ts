export interface GalleryItem {
  id: number
  title: string
  description: string
  thumbnail: string
  fullSize: string
  category: 'builds' | 'screenshots' | 'art' | 'events'
  uploadDate: string
  tags?: string[]
}

export const bennysGalleryData: GalleryItem[] = [
  // Add your images here as you upload them
  // Example:
  // {
  //   id: 1,
  //   title: 'Epic Dragon Knight Tank Build',
  //   description: 'Showcasing my Nord DK tank build in Craglorn trials',
  //   thumbnail: '/images/gallery/bennys-gallery/builds/dk-tank-thumb.jpg',
  //   fullSize: '/images/gallery/bennys-gallery/builds/dk-tank-full.jpg',
  //   category: 'builds',
  //   uploadDate: '2025-01-20',
  //   tags: ['dragonknight', 'tank', 'trials', 'craglorn']
  // }
]

// Helper function to get images by category
export const getImagesByCategory = (category: GalleryItem['category']): GalleryItem[] => {
  return bennysGalleryData.filter(item => item.category === category)
}

// Helper function to search images
export const searchImages = (query: string): GalleryItem[] => {
  const lowercaseQuery = query.toLowerCase()
  return bennysGalleryData.filter(item => 
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.description.toLowerCase().includes(lowercaseQuery) ||
    item.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

// Categories for filtering
export const galleryCategories = [
  { id: 'all', label: 'All Images', icon: '🖼️' },
  { id: 'builds', label: 'Build Showcases', icon: '⚔️' },
  { id: 'screenshots', label: 'Screenshots', icon: '📸' },
  { id: 'art', label: 'Artwork', icon: '🎨' },
  { id: 'events', label: 'Events', icon: '🎉' }
] as const

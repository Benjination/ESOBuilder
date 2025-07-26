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

// Auto-generate gallery data from images in the public folder
// This will be populated by the component when it mounts
export let bennysGalleryData: GalleryItem[] = []

// Function to discover images from the public folder (called from component)
export const discoverGalleryImages = (): GalleryItem[] => {
  // Fallback data for when auto-discovery is not available
  return [
    {
      id: 1,
      title: 'Abbey - Stunning Cathedral Screenshot',
      description: 'Beautiful architectural screenshot showcasing ESO\'s incredible cathedral design and lighting.',
      thumbnail: '/images/gallery/bennys-gallery/Abbey copy.png',
      fullSize: '/images/gallery/bennys-gallery/Abbey copy.png',
      category: 'screenshots',
      uploadDate: '2025-01-18',
      tags: ['architecture', 'cathedral', 'lighting', 'scenery', 'abbey']
    },
    {
      id: 2,
      title: 'Benny - Character Portrait',
      description: 'Character showcase featuring detailed armor and ESO\'s amazing character customization.',
      thumbnail: '/images/gallery/bennys-gallery/Benny copy.png',
      fullSize: '/images/gallery/bennys-gallery/Benny copy.png',
      category: 'screenshots',
      uploadDate: '2025-01-17',
      tags: ['character', 'portrait', 'armor', 'customization', 'benny']
    },
    {
      id: 3,
      title: 'Speaks-In-Graveyards - Necromancer Character',
      description: 'Atmospheric character shot of a necromancer in their natural environment.',
      thumbnail: '/images/gallery/bennys-gallery/Speaks-In-Graveyards copy.png',
      fullSize: '/images/gallery/bennys-gallery/Speaks-In-Graveyards copy.png',
      category: 'screenshots',
      uploadDate: '2025-01-16',
      tags: ['necromancer', 'character', 'atmospheric', 'graveyard', 'dark']
    },
    {
      id: 4,
      title: 'Zeke Zeddicus - Character Showcase',
      description: 'Character portrait showing off unique styling and gear combinations.',
      thumbnail: '/images/gallery/bennys-gallery/Zeke Zeddicus copy.png',
      fullSize: '/images/gallery/bennys-gallery/Zeke Zeddicus copy.png',
      category: 'screenshots',
      uploadDate: '2025-01-15',
      tags: ['character', 'gear', 'styling', 'portrait', 'zeke']
    },
    {
      id: 5,
      title: 'Character Background Scene',
      description: 'Epic background scene perfect for character showcases and portraits.',
      thumbnail: '/images/gallery/bennys-gallery/char_bg copy.png',
      fullSize: '/images/gallery/bennys-gallery/char_bg copy.png',
      category: 'screenshots',
      uploadDate: '2025-01-14',
      tags: ['background', 'scene', 'landscape', 'epic', 'character']
    }
  ]
}

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

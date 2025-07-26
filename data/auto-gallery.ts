// Auto-generated gallery data - DO NOT EDIT MANUALLY
// Run 'npm run generate-gallery' to regenerate this file

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
  {
    id: 1,
    title: 'Abbey',
    description: 'ESO content: Abbey - Beautiful architecture screenshot',
    thumbnail: '/images/gallery/bennys-gallery/Abbey.png',
    fullSize: '/images/gallery/bennys-gallery/Abbey.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'architecture', 'cathedral']
  },
  {
    id: 2,
    title: 'Benny',
    description: 'ESO content: Benny - Character showcase',
    thumbnail: '/images/gallery/bennys-gallery/Benny.png',
    fullSize: '/images/gallery/bennys-gallery/Benny.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'character', 'portrait']
  },
  {
    id: 3,
    title: 'Speaks In Graveyards',
    description: 'ESO content: Speaks In Graveyards - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/Speaks-In-Graveyards.png',
    fullSize: '/images/gallery/bennys-gallery/Speaks-In-Graveyards.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'necromancer']
  },
  {
    id: 4,
    title: 'Zeke Zeddicus',
    description: 'ESO content: Zeke Zeddicus - Character showcase',
    thumbnail: '/images/gallery/bennys-gallery/Zeke Zeddicus.png',
    fullSize: '/images/gallery/bennys-gallery/Zeke Zeddicus.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'character', 'portrait']
  },
  {
    id: 5,
    title: 'Char Bg',
    description: 'ESO content: Char Bg - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/char_bg.png',
    fullSize: '/images/gallery/bennys-gallery/char_bg.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'landscape', 'scenery']
  }
];

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

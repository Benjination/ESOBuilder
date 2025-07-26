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
    thumbnail: '/images/gallery/bennys-gallery/Abbey copy.png',
    fullSize: '/images/gallery/bennys-gallery/Abbey copy.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'architecture', 'cathedral']
  },
  {
    id: 2,
    title: 'Benny',
    description: 'ESO content: Benny - Character showcase',
    thumbnail: '/images/gallery/bennys-gallery/Benny copy.png',
    fullSize: '/images/gallery/bennys-gallery/Benny copy.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'character', 'portrait']
  },
  {
    id: 3,
    title: 'Speaks In Graveyards',
    description: 'ESO content: Speaks In Graveyards - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/Speaks-In-Graveyards copy.png',
    fullSize: '/images/gallery/bennys-gallery/Speaks-In-Graveyards copy.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'necromancer']
  },
  {
    id: 4,
    title: 'Zeke Zeddicus',
    description: 'ESO content: Zeke Zeddicus - Character showcase',
    thumbnail: '/images/gallery/bennys-gallery/Zeke Zeddicus copy.png',
    fullSize: '/images/gallery/bennys-gallery/Zeke Zeddicus copy.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'character', 'portrait']
  },
  {
    id: 5,
    title: 'Char Bg',
    description: 'ESO content: Char Bg - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/char_bg copy.png',
    fullSize: '/images/gallery/bennys-gallery/char_bg copy.png',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'landscape', 'scenery']
  },
  {
    id: 6,
    title: 'Cyrodiil Battle',
    description: 'ESO content: Cyrodiil Battle - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/cyrodiil-battle.jpg',
    fullSize: '/images/gallery/bennys-gallery/cyrodiil-battle.jpg',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'cyrodiil', 'pvp']
  },
  {
    id: 7,
    title: 'Dragon Attack',
    description: 'ESO content: Dragon Attack - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/dragon-attack.jpg',
    fullSize: '/images/gallery/bennys-gallery/dragon-attack.jpg',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso']
  },
  {
    id: 8,
    title: 'Necro Build 1',
    description: 'ESO content: Necro Build 1 - Build showcase',
    thumbnail: '/images/gallery/bennys-gallery/necro-build-1.jpg',
    fullSize: '/images/gallery/bennys-gallery/necro-build-1.jpg',
    category: 'builds',
    uploadDate: '2025-07-26',
    tags: ['build', 'gear', 'necromancer']
  },
  {
    id: 9,
    title: 'Nightblade Assassin',
    description: 'ESO content: Nightblade Assassin - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/nightblade-assassin.jpg',
    fullSize: '/images/gallery/bennys-gallery/nightblade-assassin.jpg',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'nightblade']
  },
  {
    id: 10,
    title: 'Sorcerer Lightning',
    description: 'ESO content: Sorcerer Lightning - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/sorcerer-lightning.jpg',
    fullSize: '/images/gallery/bennys-gallery/sorcerer-lightning.jpg',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'sorcerer']
  },
  {
    id: 11,
    title: 'Summerset Sunset',
    description: 'ESO content: Summerset Sunset - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/summerset-sunset.jpg',
    fullSize: '/images/gallery/bennys-gallery/summerset-sunset.jpg',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso']
  },
  {
    id: 12,
    title: 'Templar Healer',
    description: 'ESO content: Templar Healer - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/templar-healer.jpg',
    fullSize: '/images/gallery/bennys-gallery/templar-healer.jpg',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'templar']
  },
  {
    id: 13,
    title: 'Warden Tank',
    description: 'ESO content: Warden Tank - Screenshot',
    thumbnail: '/images/gallery/bennys-gallery/warden-tank.jpg',
    fullSize: '/images/gallery/bennys-gallery/warden-tank.jpg',
    category: 'screenshots',
    uploadDate: '2025-07-26',
    tags: ['screenshot', 'eso', 'warden']
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

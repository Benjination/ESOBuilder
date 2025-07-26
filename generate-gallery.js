#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing the images
const galleryDir = path.join(__dirname, 'public/images/gallery/bennys-gallery');
const outputFile = path.join(__dirname, 'data/auto-gallery.ts');

// Function to generate gallery item from filename
function generateGalleryItem(filename, index) {
  // Remove file extension and clean up the name for title
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
  const cleanName = nameWithoutExt.replace(/\s+copy$/i, '').replace(/[-_]/g, ' ').trim();
  
  // Generate title from filename
  const title = cleanName.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
  
  // Auto-categorize based on filename patterns
  let category = 'screenshots';
  let tags = [];
  
  const lowerName = cleanName.toLowerCase();
  
  if (lowerName.includes('build') || lowerName.includes('setup') || lowerName.includes('gear')) {
    category = 'builds';
    tags.push('build', 'gear');
  } else if (lowerName.includes('art') || lowerName.includes('drawing') || lowerName.includes('painting')) {
    category = 'art';
    tags.push('artwork', 'creative');
  } else if (lowerName.includes('event') || lowerName.includes('party') || lowerName.includes('gathering')) {
    category = 'events';
    tags.push('event', 'community');
  } else {
    // Default to screenshots
    tags.push('screenshot', 'eso');
  }
  
  // Add character-specific tags
  if (lowerName.includes('necromancer') || lowerName.includes('necro') || lowerName.includes('speaks')) tags.push('necromancer');
  if (lowerName.includes('templar')) tags.push('templar');
  if (lowerName.includes('nightblade')) tags.push('nightblade');
  if (lowerName.includes('sorcerer') || lowerName.includes('sorc')) tags.push('sorcerer');
  if (lowerName.includes('warden')) tags.push('warden');
  if (lowerName.includes('dragonknight') || lowerName.includes('dk')) tags.push('dragonknight');
  
  // Add location/theme tags
  if (lowerName.includes('cyrodiil')) tags.push('cyrodiil', 'pvp');
  if (lowerName.includes('dungeon')) tags.push('dungeon', 'pve');
  if (lowerName.includes('trial')) tags.push('trial', 'endgame');
  if (lowerName.includes('character') || lowerName.includes('benny') || lowerName.includes('zeke')) tags.push('character', 'portrait');
  if (lowerName.includes('landscape') || lowerName.includes('scenery') || lowerName.includes('bg')) tags.push('landscape', 'scenery');
  if (lowerName.includes('abbey')) tags.push('architecture', 'cathedral');
  
  return {
    id: index + 1,
    title: title || `ESO Image ${index + 1}`,
    description: `ESO content: ${title}${lowerName.includes('character') || lowerName.includes('benny') || lowerName.includes('zeke') ? ' - Character showcase' : lowerName.includes('build') ? ' - Build showcase' : lowerName.includes('abbey') ? ' - Beautiful architecture screenshot' : ' - Screenshot'}`,
    thumbnail: `/images/gallery/bennys-gallery/${filename}`,
    fullSize: `/images/gallery/bennys-gallery/${filename}`,
    category: `'${category}'`,
    uploadDate: new Date().toISOString().split('T')[0],
    tags: tags.length > 0 ? tags.map(t => `'${t}'`) : ['\'eso\'', '\'screenshot\'']
  };
}

// Read the directory and generate gallery data
try {
  if (!fs.existsSync(galleryDir)) {
    console.error('Gallery directory does not exist:', galleryDir);
    process.exit(1);
  }

  const files = fs.readdirSync(galleryDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext) &&
           !file.startsWith('.') &&
           !file.toLowerCase().includes('readme');
  });

  console.log('Found images:', imageFiles);

  const galleryItems = imageFiles.map(generateGalleryItem);

  const tsContent = `// Auto-generated gallery data - DO NOT EDIT MANUALLY
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
${galleryItems.map(item => `  {
    id: ${item.id},
    title: '${item.title}',
    description: '${item.description}',
    thumbnail: '${item.thumbnail}',
    fullSize: '${item.fullSize}',
    category: ${item.category},
    uploadDate: '${item.uploadDate}',
    tags: [${item.tags.join(', ')}]
  }`).join(',\n')}
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
`;

  fs.writeFileSync(outputFile, tsContent);
  console.log(`✅ Generated gallery data for ${galleryItems.length} images`);
  console.log('📝 Gallery data written to:', outputFile);
  
} catch (error) {
  console.error('❌ Error generating gallery data:', error);
  process.exit(1);
}

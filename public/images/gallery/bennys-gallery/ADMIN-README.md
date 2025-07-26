# Benny's Gallery - Admin Only

This folder contains curated images managed exclusively by the site administrator.

## How It Works
- **Auto-Discovery**: Any image file placed in this folder automatically appears in the gallery
- **Supported Formats**: .png, .jpg, .jpeg, .gif, .webp
- **Smart Naming**: Filenames are automatically converted to readable titles
- **Auto-Categorization**: Images are categorized based on filename patterns
- **Auto-Tagging**: Intelligent tagging based on content keywords
- **Lightbox Viewer**: Click any image to view full-size with details and metadata

## Admin Instructions
1. Add any ESO screenshot or image to this folder
2. Run `npm run generate-gallery` to update the gallery data
3. The system will automatically:
   - Generate a title from the filename
   - Categorize as screenshots, builds, art, or events
   - Add relevant tags (class names, locations, themes)
   - Display in the gallery with proper metadata

## Examples
- `necromancer-build.png` → "Necromancer Build" (Category: builds, Tags: necromancer, build)
- `cyrodiil-pvp-battle.jpg` → "Cyrodiil Pvp Battle" (Category: screenshots, Tags: cyrodiil, pvp)
- `character-portrait.png` → "Character Portrait" (Category: screenshots, Tags: character, portrait)

## Current Images
- Abbey.png - Cathedral architecture screenshot
- Benny.png - Character portrait showcase
- Speaks-In-Graveyards.png - Necromancer character
- Zeke Zeddicus.png - Character styling showcase
- char_bg.png - Epic background scene

## Note
Only the site administrator should add images to this folder. Regular users will have their own "My Gallery" section once user authentication is implemented.

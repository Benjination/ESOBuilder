# ESO Build Helper - Custom Imagery Guide

## Directory Structure

Your images should be placed in the following directories:

```
public/
├── images/
    ├── backgrounds/     # Hero and page backgrounds
    ├── classes/         # Class-specific images and icons
    ├── skills/          # Skill line and ability icons
    └── icons/           # General UI icons and decorative elements
```

## Recommended Image Formats & Sizes

### Background Images
- **Format**: JPG or WebP (for better compression)
- **Hero Background**: 1920x1080px or larger
- **Class Backgrounds**: 1200x800px minimum
- **Skill Card Backgrounds**: 400x300px

### Icons & Skill Images
- **Format**: PNG (for transparency) or SVG
- **Class Icons**: 64x64px or 128x128px
- **Skill Icons**: 48x48px or 64x64px
- **UI Icons**: 24x24px or 32x32px

## Current Image Locations to Replace

### 1. HomePage Hero Background
**Current**: Unsplash placeholder
**File to edit**: `src/pages/HomePage.tsx`
**Location**: Line with `backgroundImage: 'url("https://images.unsplash.com/...")'`

Replace with:
```tsx
backgroundImage: 'url("/images/backgrounds/hero-background.jpg")'
```

### 2. Class Card Backgrounds
**Current**: Unsplash placeholders
**File to edit**: `src/pages/HomePage.tsx`
**Classes**: Nightblade, Necromancer, Sorcerer, Templar, Warden

Replace URLs like:
```tsx
// From:
backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96")'

// To:
backgroundImage: 'url("/images/classes/nightblade-background.jpg")'
```

### 3. SubclassPage Backgrounds
**Current**: Unsplash placeholders
**File to edit**: `src/pages/SubclassPage.tsx`
**Location**: Background image assignments per class

### 4. Skill Card Backgrounds
**Current**: CSS gradient backgrounds
**File to edit**: `src/index.css`
**Classes**: `.ultimate-skill`, `.active-skill`, `.passive-skill`

## Step-by-Step Image Replacement

### Step 1: Add Your Images
1. Copy your images to the appropriate folders in `public/images/`
2. Use descriptive names like:
   - `hero-background.jpg`
   - `nightblade-background.jpg`
   - `assassination-skill-line.png`
   - `teleport-strike-icon.png`

### Step 2: Update HomePage.tsx
Replace the hero background:
```tsx
// Find this line (around line 20):
backgroundImage: 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96")',

// Replace with:
backgroundImage: 'url("/images/backgrounds/hero-background.jpg")',
```

Replace class card backgrounds:
```tsx
// Nightblade
backgroundImage: 'url("/images/classes/nightblade.jpg")'

// Necromancer  
backgroundImage: 'url("/images/classes/necromancer.jpg")'

// Sorcerer
backgroundImage: 'url("/images/classes/sorcerer.jpg")'

// Templar
backgroundImage: 'url("/images/classes/templar.jpg")'

// Warden
backgroundImage: 'url("/images/classes/warden.jpg")'
```

### Step 3: Update SubclassPage.tsx
Replace the background assignments in the `getBackgroundImage` function:
```tsx
const getBackgroundImage = (className: string, subclassName: string) => {
  switch (className.toLowerCase()) {
    case 'nightblade':
      return '/images/classes/nightblade-subclass.jpg';
    case 'necromancer':
      return '/images/classes/necromancer-subclass.jpg';
    // ... etc
  }
};
```

### Step 4: Add Skill Icons (Optional)
You can add skill icons to individual skills by modifying the skill data files in the `data/` directory:
```typescript
{
  name: "Teleport Strike",
  icon: "/images/skills/teleport-strike.png", // Add this property
  description: "...",
  // ... rest of skill data
}
```

Then update the skill card component to display the icon.

### Step 5: Update CSS Backgrounds (Optional)
In `src/index.css`, you can replace gradient backgrounds with image backgrounds:
```css
.ultimate-skill {
  background-image: url('/images/backgrounds/ultimate-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

## Testing Your Images

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Check the browser console** for any 404 errors indicating missing images

3. **Verify image loading** by right-clicking and "Inspect Element" on images

## Image Optimization Tips

1. **Compress images** before adding them (use tools like TinyPNG)
2. **Use WebP format** for better compression when possible
3. **Consider using smaller images** for mobile devices
4. **Test loading times** especially for background images

## Fallback Strategy

Always keep a fallback for missing images:
```tsx
backgroundImage: `url("/images/classes/${className}.jpg"), url("${fallbackUnsplashUrl}")`
```

## Common Image Paths

- Hero background: `/images/backgrounds/hero-background.jpg`
- Class backgrounds: `/images/classes/{classname}-background.jpg`
- Skill icons: `/images/skills/{skillname}-icon.png`
- UI icons: `/images/icons/{iconname}.png`

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify image file paths and names match exactly
3. Ensure images are in the correct `public/images/` subdirectories
4. Test with a simple image first before replacing all images

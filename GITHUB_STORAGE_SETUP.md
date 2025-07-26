# GitHub Storage Setup Guide

This guide will help you set up GitHub as a storage backend for user-uploaded images in the ESO Theory Crafter application.

## Why GitHub Storage?

✅ **Completely Free** - No storage costs, unlimited for public repos  
✅ **CDN Included** - Fast global delivery via GitHub's CDN  
✅ **Version Control** - All uploads are tracked and versioned  
✅ **No Vendor Lock-in** - Images are always accessible via GitHub  
✅ **Simple Integration** - Uses standard GitHub API  

## Setup Steps

### 1. Create a Storage Repository

You have two options:

**Option A: Separate Storage Repository (Recommended)**
```bash
# Create a new repository called "eso-theory-crafter-storage"
# This keeps user uploads separate from your main code
```

**Option B: Use Main Repository**
```bash
# Use your existing repository with a /storage folder
# Simpler setup, but mixes code and user content
```

### 2. Create a GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name: "ESO Theory Crafter Storage"
4. Set expiration (recommend 1 year)
5. Select scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `public_repo` (Access public repositories) - if using public repo only

6. Click "Generate token"
7. **Copy the token immediately** - you won't see it again!

### 3. Configure Environment Variables

Update your `.env` file:

```env
# GitHub Storage Configuration
VITE_GITHUB_STORAGE_OWNER=your-github-username
VITE_GITHUB_STORAGE_REPO=eso-theory-crafter-storage
VITE_GITHUB_TOKEN=ghp_your-personal-access-token-here
```

**For Production (GitHub Pages, Netlify, etc.):**
- Set these as environment variables in your hosting platform
- Never commit the actual token to your repository
- Use the `.env.example` file for documentation

### 4. Repository Structure

The system will automatically create this folder structure:

```
your-storage-repo/
├── user-galleries/
│   ├── user123/
│   │   ├── image1.jpg
│   │   └── image2.png
│   └── user456/
│       └── screenshot.jpg
├── profile-avatars/
│   ├── user123/
│   │   └── avatar.jpg
│   └── user456/
│       └── profile.png
├── build-screenshots/
│   ├── user123/
│   │   ├── build1-screenshot.jpg
│   │   └── build2-screenshot.png
│   └── user456/
│       └── dps-build.jpg
└── community-uploads/
    ├── contest-entries/
    └── featured-content/
```

## How It Works

### Image Upload Process

1. **User selects images** → Images are processed and compressed
2. **Upload to GitHub** → Files are committed to your storage repository
3. **Get CDN URLs** → GitHub provides `raw.githubusercontent.com` URLs
4. **Store in Firestore** → URLs and metadata saved to user's profile
5. **Display in gallery** → Images loaded from GitHub's CDN

### Automatic Features

- **Image Compression** - Reduces file sizes before upload
- **Organized Storage** - Files sorted by user and category
- **Unique Naming** - Prevents filename conflicts
- **Error Handling** - Graceful handling of API limits and errors
- **Progress Tracking** - Upload progress indicators for users

## API Limits & Considerations

### GitHub API Rate Limits
- **Authenticated requests**: 5,000 per hour
- **File size limit**: 100 MB per file (25 MB recommended)
- **Repository size**: Unlimited for public repos

### Best Practices
- Images are automatically compressed to 1920px max width
- JPEG quality set to 80% for optimal size/quality balance
- Only authenticated users can upload
- Users can delete their own images

## Security Features

- Personal access tokens are environment-specific
- Users can only upload to their own folders
- File uploads require authentication
- Malicious file detection (image format validation)

## Testing Your Setup

1. Sign in to your application
2. Go to the Gallery page
3. Try uploading an image
4. Check your GitHub repository for the new file
5. Verify the image displays in your gallery

If uploads fail, check:
- Your GitHub token has the correct permissions
- The repository name and owner are correct
- Your repository exists and is accessible
- You haven't hit GitHub API rate limits

## Troubleshooting

### "GitHub API error: Bad credentials"
- Your token is incorrect or expired
- Check the `VITE_GITHUB_TOKEN` environment variable
- Generate a new token if needed

### "Repository not found"
- Check `VITE_GITHUB_STORAGE_OWNER` and `VITE_GITHUB_STORAGE_REPO`
- Ensure the repository exists and you have access
- For private repos, ensure your token has `repo` scope

### "Upload failed"
- Check GitHub API rate limits (5,000 requests/hour)
- Verify image file size (under 25 MB recommended)
- Check network connectivity

### Images not displaying
- Verify the GitHub URLs are accessible
- Check if the repository is public (for public CDN access)
- Clear browser cache and reload

## Next Steps

Once GitHub storage is working:

1. **Add metadata** - Store image titles, descriptions, tags
2. **Image editing** - Add crop, resize, filter options
3. **Gallery organization** - Folders, albums, sorting
4. **Sharing features** - Public links, embed codes
5. **Moderation tools** - Report content, admin controls

## Cost Comparison

| Service | Free Tier | Paid Tier |
|---------|-----------|-----------|
| **GitHub Storage** | ✅ Unlimited (public repos) | N/A |
| Firebase Storage | 1 GB | $0.026/GB/month |
| AWS S3 | 5 GB | $0.023/GB/month |
| Cloudinary | 25 credits/month | $89/month |

GitHub storage provides the best value for open-source projects! 🎉

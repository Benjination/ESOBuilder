# Firebase Setup Instructions

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `eso-theory-crafter` (or your preferred name)
4. Enable Google Analytics (optional but recommended)
5. Click "Create project"

## 2. Enable Authentication

1. In your Firebase console, click "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable the following providers:

### Email/Password
- Click "Email/Password"
- Enable "Email/Password" (first option)
- Save

### Google
- Click "Google"
- Enable the toggle
- Enter your project support email
- Save

### GitHub (Optional but recommended for developers)
- Click "GitHub"
- Enable the toggle
- You'll need to create a GitHub OAuth App:
  - Go to GitHub Settings > Developer settings > OAuth Apps
  - Click "New OAuth App"
  - Application name: `ESO Theory Crafter`
  - Homepage URL: `http://localhost:3002` (for development)
  - Authorization callback URL: `https://your-project-id.firebaseapp.com/__/auth/handler`
  - Copy the Client ID and Client Secret to Firebase

## 3. Set up Firestore Database

1. Click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

## 4. Set up Storage

1. Click "Storage" in the left sidebar
2. Click "Get started"
3. Review security rules (start in test mode for development)
4. Select the same location as your Firestore database
5. Click "Done"

## 5. Get Firebase Configuration

1. Click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon `</>`
5. Register your app with name: `ESO Theory Crafter`
6. Copy the configuration object

## 6. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder values with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your-actual-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

3. **Important:** Never commit your `.env` file to git! It's already added to `.gitignore`.

## 7. Update Firebase Config

The Firebase configuration in `src/config/firebase.ts` automatically reads from environment variables. No manual editing needed!

## 8. Authentication Features Included

✅ **Social Logins:**
- Google (most popular for gaming communities)
- GitHub (great for developers and tech-savvy gamers)

✅ **Email/Password:**
- Traditional signup/login
- Password requirements and validation

✅ **User Profiles:**
- Automatic profile creation
- Display name and avatar support
- Join date and last login tracking
- Ready for ESO-specific fields (platform, server, favorite class)

✅ **UI Components:**
- Beautiful authentication modal with ESO theming
- User profile dropdown with stats
- Responsive design for all screen sizes
- Gaming-focused visual design

## 9. Production Deployment

When deploying to production:

1. Update Firebase security rules for production
2. Add your production domain to Firebase authorized domains
3. Update OAuth provider callback URLs
4. Set proper CORS settings
5. Enable Firebase Hosting (optional)

## 10. Future Enhancements Ready

The authentication system is designed to easily support:
- User-generated content (gallery uploads)
- Build sharing and favoriting  
- Community features (comments, ratings)
- User profiles with ESO game data
- Role-based permissions (admin features)

## 11. Security Features

- Automatic user profile creation
- Protected routes
- Secure file uploads (when implemented)
- Firebase security rules
- Cross-platform authentication state management

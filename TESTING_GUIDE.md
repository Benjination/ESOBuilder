# Authentication Testing Guide

This guide helps you test the Firebase authentication system in the ESO Theory Crafter website.

## Pre-Testing Setup

1. **Ensure Development Server is Running**:
   ```bash
   npm run dev
   ```
   The server should be available at `http://localhost:3001/` (or similar port).

2. **Check Firebase Configuration**:
   - Make sure you have a `.env` file with your Firebase config
   - If testing without real Firebase, you'll see configuration warnings in console
   - See `FIREBASE_SETUP.md` for complete Firebase setup

## Testing Scenarios

### 🔍 Visual Components Test

1. **Navbar Authentication Elements**:
   - [ ] "Sign In" button visible when not logged in
   - [ ] "Join Guild" button visible when not logged in
   - [ ] Buttons have proper ESO theming and hover effects

2. **AuthModal Display**:
   - [ ] Click "Sign In" opens authentication modal
   - [ ] Modal is centered and responsive
   - [ ] Modal has ESO theming (gold accents, dark background)
   - [ ] Close button (X) works
   - [ ] ESC key closes modal
   - [ ] Clicking backdrop closes modal

3. **AuthModal Content**:
   - [ ] "Welcome Back, Adventurer!" header for login
   - [ ] Google sign-in button with Chrome icon
   - [ ] GitHub sign-in button with GitHub icon
   - [ ] Email/password form with proper labels
   - [ ] "Or continue with email" divider
   - [ ] Toggle between "Sign In" and "Join Guild" modes

### 🔐 Authentication Flow Test (With Firebase Config)

4. **Google Authentication**:
   - [ ] Click "Continue with Google"
   - [ ] Google popup opens
   - [ ] After successful login, modal closes
   - [ ] User profile appears in navbar
   - [ ] Navbar shows user avatar/initial and name

5. **GitHub Authentication**:
   - [ ] Click "Continue with GitHub"
   - [ ] GitHub popup opens
   - [ ] After successful login, modal closes
   - [ ] User profile appears in navbar

6. **Email/Password Authentication**:
   - [ ] Switch to "Join Guild" mode
   - [ ] Fill display name, email, password
   - [ ] Click "Create Account"
   - [ ] Account creation successful
   - [ ] Switch back to "Sign In" mode
   - [ ] Login with same credentials works

7. **User Profile Dropdown**:
   - [ ] Click user avatar in navbar
   - [ ] Dropdown shows user info (name, email, join date)
   - [ ] "Sign Out" button works
   - [ ] After logout, navbar shows sign-in buttons again

### 📱 Mobile Responsiveness Test

8. **Mobile View**:
   - [ ] Resize browser to mobile width (375px)
   - [ ] Navbar collapses appropriately
   - [ ] Auth buttons remain accessible
   - [ ] AuthModal fits in mobile viewport
   - [ ] User profile dropdown positions correctly

### 🚫 Error Handling Test

9. **No Firebase Config**:
   - [ ] Console shows configuration warnings
   - [ ] Auth buttons still display properly
   - [ ] Clicking auth buttons shows helpful error messages
   - [ ] App doesn't crash without Firebase config

10. **Invalid Credentials**:
    - [ ] Try logging in with invalid email/password
    - [ ] Error message displays in modal
    - [ ] Modal remains open for retry
    - [ ] Error styling matches ESO theme

## Gallery Integration Test

11. **Gallery Page Authentication**:
    - [ ] Navigate to Gallery page
    - [ ] "My Gallery" section shows "Sign in to upload" when not logged in
    - [ ] After login, "My Gallery" shows upload interface
    - [ ] "Benny's Gallery" works regardless of auth state

## Performance Test

12. **Authentication Performance**:
    - [ ] Auth modal opens quickly (<100ms)
    - [ ] User profile loads efficiently
    - [ ] No memory leaks on login/logout cycles
    - [ ] Smooth animations and transitions

## Browser Compatibility

13. **Cross-Browser Test**:
    - [ ] Chrome: All features work
    - [ ] Firefox: All features work
    - [ ] Safari: All features work
    - [ ] Edge: All features work

## Development Notes

### Expected Console Messages (Normal):
- Firebase configuration warnings if using demo config
- Firebase SDK initialization messages
- Authentication state change logs

### Red Flags (Fix Required):
- JavaScript errors in console
- Modal not displaying properly
- Authentication failures with valid config
- Broken responsive design
- Memory leaks or performance issues

## Quick Test Checklist

For rapid testing, focus on these key items:

✅ **Core Authentication**:
- [ ] Sign In button opens modal
- [ ] Modal displays correctly with ESO theming
- [ ] Modal closes with X, ESC, or backdrop click
- [ ] Login/signup mode toggle works
- [ ] User profile appears after successful login
- [ ] Sign out works properly

✅ **Responsive Design**:
- [ ] Mobile view works correctly
- [ ] Modal stays within viewport
- [ ] User dropdown positions correctly

✅ **Error Handling**:
- [ ] Graceful handling of missing Firebase config
- [ ] Proper error messages for invalid credentials
- [ ] No crashes or broken states

## Troubleshooting

### Common Issues:

1. **Modal won't close**: Check z-index and click handlers
2. **Auth buttons not working**: Verify Firebase config
3. **Mobile layout broken**: Check Tailwind responsive classes
4. **User dropdown cut off**: Check positioning logic
5. **Performance issues**: Check for memory leaks in useEffect

### Debug Tools:

- Browser DevTools Network tab (for auth requests)
- Browser DevTools Console (for Firebase logs)
- React DevTools (for component state)
- Responsive design mode (for mobile testing)

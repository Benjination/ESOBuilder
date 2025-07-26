import React, { createContext, useContext, useEffect, useState } from 'react'
import { 
  User,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, googleProvider, githubProvider, db } from '../config/firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signInWithGithub: () => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (email: string, password: string, displayName: string) => Promise<void>
  logout: () => Promise<void>
  userProfile: UserProfile | null
}

export interface UserProfile {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  platform?: string
  server?: string
  favoriteClass?: string
  joinedAt: Date
  lastLogin: Date
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  const createUserProfile = async (user: User) => {
    const userDocRef = doc(db, 'users', user.uid)
    const userDoc = await getDoc(userDocRef)

    if (!userDoc.exists()) {
      const profile: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || 'Anonymous Adventurer',
        photoURL: user.photoURL || undefined,
        joinedAt: new Date(),
        lastLogin: new Date()
      }

      await setDoc(userDocRef, profile)
      setUserProfile(profile)
    } else {
      const profile = userDoc.data() as UserProfile
      // Update last login
      const updatedProfile = { ...profile, lastLogin: new Date() }
      await setDoc(userDocRef, updatedProfile, { merge: true })
      setUserProfile(updatedProfile)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true)
      if (user) {
        setUser(user)
        await createUserProfile(user)
      } else {
        setUser(null)
        setUserProfile(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    // Check if we're in demo mode
    const isDemoConfig = !import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY === "demo-api-key"
    if (isDemoConfig) {
      throw new Error('Authentication is not configured. This is a demo version of the site. Sign-in features will be available once Firebase is properly configured.')
    }

    try {
      const result = await signInWithPopup(auth, googleProvider)
      await createUserProfile(result.user)
    } catch (error: any) {
      console.error('Error signing in with Google:', error)
      if (error.code === 'auth/configuration-not-found') {
        throw new Error('Firebase is not configured. Please check your environment variables.')
      }
      throw error
    }
  }

  const signInWithGithub = async () => {
    // Check if we're in demo mode
    const isDemoConfig = !import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY === "demo-api-key"
    if (isDemoConfig) {
      throw new Error('Authentication is not configured. This is a demo version of the site. Sign-in features will be available once Firebase is properly configured.')
    }

    try {
      const result = await signInWithPopup(auth, githubProvider)
      await createUserProfile(result.user)
    } catch (error: any) {
      console.error('Error signing in with GitHub:', error)
      if (error.code === 'auth/configuration-not-found') {
        throw new Error('Firebase is not configured. Please check your environment variables.')
      }
      throw error
    }
  }

  const signInWithEmail = async (email: string, password: string) => {
    // Check if we're in demo mode
    const isDemoConfig = !import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY === "demo-api-key"
    if (isDemoConfig) {
      throw new Error('Authentication is not configured. This is a demo version of the site. Sign-in features will be available once Firebase is properly configured.')
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      await createUserProfile(result.user)
    } catch (error: any) {
      console.error('Error signing in with email:', error)
      if (error.code === 'auth/configuration-not-found') {
        throw new Error('Firebase is not configured. Please check your environment variables.')
      }
      throw error
    }
  }

  const signUpWithEmail = async (email: string, password: string, displayName: string) => {
    // Check if we're in demo mode
    const isDemoConfig = !import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY === "demo-api-key"
    if (isDemoConfig) {
      throw new Error('Authentication is not configured. This is a demo version of the site. Sign-in features will be available once Firebase is properly configured.')
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(result.user, { displayName })
      await createUserProfile(result.user)
    } catch (error: any) {
      console.error('Error signing up with email:', error)
      if (error.code === 'auth/configuration-not-found') {
        throw new Error('Firebase is not configured. Please check your environment variables.')
      }
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      setUserProfile(null)
    } catch (error) {
      console.error('Error signing out:', error)
      throw error
    }
  }

  const value: AuthContextType = {
    user,
    userProfile,
    loading,
    signInWithGoogle,
    signInWithGithub,
    signInWithEmail,
    signUpWithEmail,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

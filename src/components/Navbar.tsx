import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { UserProfile } from './UserProfile'
import { AuthModal } from './AuthModal'

export const Navbar = () => {
  const { user, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  return (
    <>
      <nav className="bg-eso-dark border-b border-eso-gold relative z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/images/icons/esotc-logo.png" 
                alt="ESO Theory Crafter Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-eso font-bold text-eso-gold">
                ESO Theory Crafter
              </span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-white hover:text-eso-gold transition-colors font-medium"
              >
                Classes
              </Link>
              <Link 
                to="/buffs" 
                className="text-white hover:text-eso-gold transition-colors font-medium"
              >
                Buffs & Debuffs
              </Link>
              <Link 
                to="/buffs" 
                className="text-white hover:text-eso-gold transition-colors font-medium"
              >
                Buffs & Debuffs
              </Link>
              <Link 
                to="/gallery" 
                className="text-white hover:text-eso-gold transition-colors font-medium"
              >
                Gallery
              </Link>
              <Link 
                to="/builder" 
                className="text-white hover:text-eso-gold transition-colors font-medium"
              >
                Build Creator
              </Link>

              {/* Authentication Section */}
              {loading ? (
                <div className="w-8 h-8 border-2 border-eso-gold border-t-transparent rounded-full animate-spin"></div>
              ) : user ? (
                <UserProfile />
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="text-white hover:text-eso-gold transition-colors font-medium"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="bg-gradient-to-r from-eso-gold to-yellow-500 text-eso-darker font-semibold py-2 px-4 rounded-lg hover:from-yellow-500 hover:to-eso-gold transition-all duration-300 hover:scale-105"
                  >
                    Join Guild
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  )
}

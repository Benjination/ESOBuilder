import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { UserProfile } from './UserProfile'
import { AuthModal } from './AuthModal'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const { user, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setShowAuthModal(true)
    setIsMobileMenuOpen(false) // Close mobile menu when opening auth modal
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="bg-eso-dark border-b border-eso-gold relative z-30">
        <div className="container mx-auto px-4">
          {/* Main Navbar - Desktop and Mobile Header */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
              <img 
                src="/images/icons/esotc-logo.png" 
                alt="ESO Theory Crafter Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="navbar-logo-text">
                ESO Theory Crafter
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
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

              {/* Desktop Authentication Section */}
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

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Mobile Authentication */}
              {loading ? (
                <div className="w-6 h-6 border-2 border-eso-gold border-t-transparent rounded-full animate-spin"></div>
              ) : user ? (
                <UserProfile />
              ) : (
                <button
                  onClick={() => handleAuthClick('login')}
                  className="text-eso-gold hover:text-yellow-500 transition-colors font-medium text-sm"
                >
                  Sign In
                </button>
              )}
              
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-eso-gold transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-eso-dark border-t border-eso-gold/30">
              <div className="py-4 space-y-3">
                <Link 
                  to="/" 
                  className="block text-white hover:text-eso-gold transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Classes
                </Link>
                <Link 
                  to="/buffs" 
                  className="block text-white hover:text-eso-gold transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Buffs & Debuffs
                </Link>
                <Link 
                  to="/gallery" 
                  className="block text-white hover:text-eso-gold transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>
                <Link 
                  to="/builder" 
                  className="block text-white hover:text-eso-gold transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Build Creator
                </Link>
                
                {/* Mobile Authentication Section */}
                {!loading && !user && (
                  <div className="pt-3 border-t border-eso-gold/30 space-y-3">
                    <button
                      onClick={() => handleAuthClick('signup')}
                      className="w-full bg-gradient-to-r from-eso-gold to-yellow-500 text-eso-darker font-semibold py-3 px-4 rounded-lg hover:from-yellow-500 hover:to-eso-gold transition-all duration-300"
                    >
                      Join Guild
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
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

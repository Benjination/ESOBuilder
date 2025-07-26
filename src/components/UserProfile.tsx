import React, { useState, useRef, useEffect } from 'react'
import { User, LogOut, Settings, Camera, Shield, Swords, X } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export const UserProfile: React.FC = () => {
  const { user, userProfile, logout } = useAuth()
  const [showDropdown, setShowDropdown] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState<'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'>('bottom-right')
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Calculate dropdown position to ensure it stays within viewport
  useEffect(() => {
    if (showDropdown && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const dropdownWidth = 256 // w-64 = 16rem = 256px
      const dropdownHeight = 400 // approximate height
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      
      let position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' = 'bottom-right'
      
      // Check horizontal position
      const preferLeft = buttonRect.right < dropdownWidth || 
                        (buttonRect.left + dropdownWidth > viewportWidth)
      
      // Check vertical position  
      const preferTop = buttonRect.bottom + dropdownHeight > viewportHeight &&
                       buttonRect.top > dropdownHeight
      
      if (preferTop && preferLeft) {
        position = 'top-left'
      } else if (preferTop) {
        position = 'top-right'
      } else if (preferLeft) {
        position = 'bottom-left'
      } else {
        position = 'bottom-right'
      }
      
      setDropdownPosition(position)
    }
  }, [showDropdown])

  // Close dropdown when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDropdown(false)
      }
    }

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [showDropdown])

  if (!user) return null

  const handleLogout = async () => {
    try {
      await logout()
      setShowDropdown(false)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const getDisplayName = () => {
    return userProfile?.displayName || user.displayName || user.email?.split('@')[0] || 'Adventurer'
  }

  const getAvatarUrl = () => {
    return userProfile?.photoURL || user.photoURL || undefined
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-3 bg-gradient-to-r from-eso-gold/20 to-yellow-500/20 hover:from-eso-gold/30 hover:to-yellow-500/30 rounded-lg p-2 transition-all duration-200 hover:scale-105 border border-eso-gold/30"
      >
        <div className="relative">
          {getAvatarUrl() ? (
            <img
              src={getAvatarUrl()}
              alt={getDisplayName()}
              className="w-8 h-8 rounded-full border-2 border-eso-gold"
            />
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-eso-gold to-yellow-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-eso-darker" />
            </div>
          )}
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-eso-dark"></div>
        </div>
        <span className="text-white font-medium hidden sm:block">
          {getDisplayName()}
        </span>
      </button>

      {showDropdown && (
        <>
          {/* Mobile backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[59] sm:hidden"></div>
          
          {/* Dropdown */}
          <div className={`absolute w-64 bg-gradient-to-br from-eso-dark to-gray-900 rounded-lg border border-eso-gold/30 shadow-2xl z-[60] max-h-[calc(100vh-5rem)] overflow-y-auto transform transition-all duration-200 
            ${dropdownPosition.includes('bottom') ? 'top-full mt-2' : 'bottom-full mb-2'} 
            ${dropdownPosition.includes('right') ? 'right-0' : 'left-0'}
            max-sm:fixed max-sm:top-16 max-sm:right-2 max-sm:left-2 max-sm:w-auto max-sm:max-h-[calc(100vh-6rem)]
          `}>
            {/* Header */}
            <div className="p-4 border-b border-eso-gold/20 relative">
              <button
                onClick={() => setShowDropdown(false)}
                className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors sm:hidden"
                aria-label="Close menu"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
              <div className="flex items-center space-x-3 pr-8 sm:pr-0">
                <div className="relative">
                  {getAvatarUrl() ? (
                    <img
                      src={getAvatarUrl()}
                      alt={getDisplayName()}
                      className="w-12 h-12 rounded-full border-2 border-eso-gold"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-eso-gold to-yellow-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-eso-darker" />
                    </div>
                  )}
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-eso-blue hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                    <Camera className="w-3 h-3 text-white" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white truncate">
                    {getDisplayName()}
                  </h3>
                  <p className="text-sm text-gray-400 truncate">
                    {user.email}
                  </p>
                  {userProfile?.joinedAt && (
                    <p className="text-xs text-gray-500">
                      Joined {new Date(userProfile.joinedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="p-4 border-b border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Swords className="w-4 h-4 text-eso-gold mr-1" />
                    <span className="text-lg font-bold text-white">0</span>
                  </div>
                  <p className="text-xs text-gray-400">Builds Created</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Shield className="w-4 h-4 text-eso-blue mr-1" />
                    <span className="text-lg font-bold text-white">0</span>
                  </div>
                  <p className="text-xs text-gray-400">Images Shared</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                <span>Account Settings</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>

            {/* Footer */}
            <div className="p-3 bg-gradient-to-r from-eso-gold/10 to-eso-blue/10 rounded-b-lg border-t border-eso-gold/20">
              <p className="text-xs text-center text-gray-400">
                ESO Theory Crafter Community
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

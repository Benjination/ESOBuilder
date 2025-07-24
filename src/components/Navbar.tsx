import { Link } from 'react-router-dom'
import { Sword } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="bg-eso-dark border-b border-eso-gold">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sword className="h-8 w-8 text-eso-gold" />
            <span className="text-xl font-eso font-bold text-eso-gold">
              ESO Build Helper
            </span>
          </Link>
          
          <div className="flex space-x-6">
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
              to="/builder" 
              className="text-white hover:text-eso-gold transition-colors font-medium"
            >
              Build Creator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-eso-dark border-b border-eso-gold">
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

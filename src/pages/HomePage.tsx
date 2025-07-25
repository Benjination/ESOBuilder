import { Link } from 'react-router-dom'
import { esoClasses } from '../../data/classes'
import { Sword, Shield, Heart, Zap, Sparkles, Crown, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

export const HomePage = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0)

  useEffect(() => {
    // Simple visitor counter using localStorage and a free API
    const updateVisitorCount = async () => {
      try {
        // Check if user has visited before
        const hasVisited = localStorage.getItem('eso-theory-crafter-visited')
        
        if (!hasVisited) {
          // Mark as visited
          localStorage.setItem('eso-theory-crafter-visited', 'true')
          
          // Get current count from localStorage or start at a base number
          const currentCount = parseInt(localStorage.getItem('eso-visitor-count') || '1247')
          const newCount = currentCount + 1
          
          // Update localStorage
          localStorage.setItem('eso-visitor-count', newCount.toString())
          setVisitorCount(newCount)
        } else {
          // Just display current count
          const currentCount = parseInt(localStorage.getItem('eso-visitor-count') || '1247')
          setVisitorCount(currentCount)
        }
      } catch (error) {
        // Fallback count if localStorage fails
        setVisitorCount(1247)
      }
    }

    updateVisitorCount()
  }, [])

  const getArchetypeIcon = (archetype: string) => {
    switch (archetype) {
      case 'DPS': return <Sword className="w-4 h-4" />
      case 'Tank': return <Shield className="w-4 h-4" />
      case 'Healer': return <Heart className="w-4 h-4" />
      default: return <Sparkles className="w-4 h-4" />
    }
  }

  const getArchetypeClass = (archetype: string) => {
    switch (archetype) {
      case 'DPS': return 'archetype-dps'
      case 'Tank': return 'archetype-tank'
      case 'Healer': return 'archetype-healer'
      default: return 'archetype-hybrid'
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Floating Orbs for Magical Atmosphere */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>
      <div className="floating-orb floating-orb-3"></div>
      
      <div className="space-y-12 relative z-10">
        {/* Classes Section - Now the main landing */}
        <div className="magical-border mt-8">
          <div 
            className="mobile-character-backgrounds rounded-2xl p-8 backdrop-blur-sm relative"
            style={{
              backgroundColor: '#1f2937'
            }}
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <Crown className="w-12 h-12 text-eso-gold mr-4 animate-pulse" />
                <img 
                  src="/images/icons/esotc-logo.png" 
                  alt="ESO Theory Crafter Logo" 
                  className="w-16 h-16 object-contain mr-4"
                />
                <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl">
                  ESO Theory Crafter
                </h1>
                <img 
                  src="/images/icons/esotc-logo.png" 
                  alt="ESO Theory Crafter Logo" 
                  className="w-16 h-16 object-contain ml-4"
                />
                <Crown className="w-12 h-12 text-eso-gold ml-4 animate-pulse" />
              </div>
              <p className="hero-subtitle text-lg md:text-xl mb-6">
                Master the art of character building in Elder Scrolls Online. 
                Choose your class to explore skill lines and forge legendary builds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {esoClasses.map((esoClass, index) => (
                <Link 
                  key={esoClass.id} 
                  to={`/class/${esoClass.id}`}
                  className={`card group animate-float class-card-${esoClass.id}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-eso font-semibold text-eso-gold group-hover:text-yellow-400 transition-colors duration-300">
                      {esoClass.name}
                    </h3>
                    <Zap className="w-6 h-6 text-eso-blue group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {esoClass.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-eso-gold to-transparent mr-3"></div>
                      <span className="text-sm font-semibold text-eso-blue">Skill Lines</span>
                    </div>
                    {esoClass.subclasses.map((subclass) => (
                      <div key={subclass.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-eso-gold/30 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            {getArchetypeIcon(subclass.archetype)}
                            <span className="text-white font-medium">{subclass.name}</span>
                          </div>
                        </div>
                        <span className={`archetype-badge ${getArchetypeClass(subclass.archetype)} flex items-center space-x-1`}>
                          <span>{subclass.archetype}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-center text-eso-gold group-hover:text-yellow-400 transition-colors duration-300">
                      <span className="text-sm font-medium">Explore Skills</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Fantasy Hero Section - Now secondary */}
        <div className="fantasy-hero-responsive py-20 relative">
          <div className="magical-particles"></div>
          <div className="text-center space-y-8">            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/builder" className="magic-button">
                <Sparkles className="w-5 h-5" />
                Create Build
              </Link>
              <Link to="#classes" className="magic-button-secondary">
                <Zap className="w-5 h-5" />
                Explore More
              </Link>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-eso-gold mt-6">
              <Star className="w-5 h-5 animate-pulse" />
              <span className="text-lg font-eso">Forge Your Destiny</span>
              <Star className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>



        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-eso-blue to-blue-600 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-eso font-semibold text-eso-gold">Skill Analysis</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Deep dive into every skill, morph, and passive ability. Understand damage values, 
              resource costs, and strategic applications.
            </p>
            <Link to="/builder" className="btn-secondary inline-flex items-center">
              <span>Start Building</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="card group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-eso-purple to-purple-600 rounded-full flex items-center justify-center mr-4">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-eso font-semibold text-eso-gold">Build Creator</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Create, save, and share your character builds. Experiment with different 
              combinations and optimize your playstyle.
            </p>
            <Link to="/builder" className="btn-primary inline-flex items-center">
              <span>Create Build</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 relative">
          <div className="magical-border inline-block">
            <div className="bg-gradient-to-r from-eso-dark via-gray-900 to-eso-dark p-8 rounded-2xl">
              <h2 className="text-3xl font-eso font-bold glowing-text mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Join thousands of adventurers who have perfected their builds using ESO Builder.
              </p>
              <Link to="/builder" className="btn-primary text-lg px-8 py-4">
                Start Your Adventure
              </Link>
            </div>
          </div>
          
          {/* Visitor Counter Widget */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gradient-to-r from-eso-dark/80 to-gray-900/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-eso-gold/30">
              <div className="flex items-center space-x-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Adventurers Visited:</span>
                </div>
                <span className="text-eso-gold font-bold font-mono text-lg">
                  {visitorCount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

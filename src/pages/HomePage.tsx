import { Link } from 'react-router-dom'
import { esoClasses } from '../../data/classes'

export const HomePage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-eso font-bold text-eso-gold mb-4">
          Elder Scrolls Online Build Helper
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore classes, analyze skills, understand buffs and debuffs, and create powerful builds 
          for your ESO adventures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {esoClasses.map((esoClass) => (
          <Link 
            key={esoClass.id} 
            to={`/class/${esoClass.id}`}
            className="card hover:border-eso-gold transition-colors group"
          >
            <h3 className="text-xl font-eso font-semibold text-eso-gold group-hover:text-yellow-400 mb-2">
              {esoClass.name}
            </h3>
            <p className="text-gray-300 mb-4">
              {esoClass.description}
            </p>
            <div className="space-y-1">
              <p className="text-sm text-gray-400">Subclasses:</p>
              {esoClass.subclasses.map((subclass) => (
                <div key={subclass.id} className="flex items-center justify-between">
                  <span className="text-sm text-white">{subclass.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    subclass.archetype === 'DPS' ? 'bg-red-600 text-white' :
                    subclass.archetype === 'Healer' ? 'bg-green-600 text-white' :
                    subclass.archetype === 'Tank' ? 'bg-blue-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {subclass.archetype}
                  </span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Link to="/buffs" className="card hover:border-eso-blue transition-colors group">
          <h3 className="text-xl font-eso font-semibold text-eso-blue group-hover:text-blue-400 mb-2">
            Buffs & Debuffs Glossary
          </h3>
          <p className="text-gray-300">
            Complete reference for all buffs and debuffs in ESO, including their effects, 
            stacking rules, and which skills apply them.
          </p>
        </Link>
        
        <Link to="/builder" className="card hover:border-eso-green transition-colors group">
          <h3 className="text-xl font-eso font-semibold text-eso-green group-hover:text-green-400 mb-2">
            Build Creator
          </h3>
          <p className="text-gray-300">
            Create, customize, and share your ESO builds. Calculate DPS, analyze synergies, 
            and optimize your character setup.
          </p>
        </Link>
      </div>
    </div>
  )
}

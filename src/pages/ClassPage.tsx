import { useParams, Link } from 'react-router-dom'
import { esoClasses } from '../../data/classes'

export const ClassPage = () => {
  const { classId } = useParams<{ classId: string }>()
  const esoClass = esoClasses.find(c => c.id === classId)

  if (!esoClass) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-eso text-red-500">Class not found</h1>
        <Link to="/" className="btn-primary mt-4 inline-block">
          Back to Classes
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-eso font-bold text-eso-gold mb-4">
          {esoClass.name}
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {esoClass.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {esoClass.subclasses.map((subclass) => (
          <Link 
            key={subclass.id} 
            to={`/class/${classId}/${subclass.id}`}
            className="card hover:border-eso-gold transition-colors group"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-eso font-semibold text-eso-gold group-hover:text-yellow-400">
                {subclass.name}
              </h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                subclass.archetype === 'DPS' ? 'bg-red-600 text-white' :
                subclass.archetype === 'Healer' ? 'bg-green-600 text-white' :
                subclass.archetype === 'Tank' ? 'bg-blue-600 text-white' :
                'bg-purple-600 text-white'
              }`}>
                {subclass.archetype}
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              {subclass.description}
            </p>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-eso-blue">Passive Bonuses:</h4>
              {subclass.passiveBonuses.slice(0, 2).map((bonus) => (
                <div key={bonus.id} className="text-sm">
                  <span className="text-white font-medium">{bonus.name}:</span>
                  <span className="text-gray-300 ml-1">{bonus.effect}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

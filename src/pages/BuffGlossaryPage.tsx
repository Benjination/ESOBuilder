import { buffs, debuffs } from '../../data/skills'

export const BuffGlossaryPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-eso font-bold text-eso-gold mb-4">
          Buffs & Debuffs Glossary
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Complete reference for all buffs and debuffs in Elder Scrolls Online.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-eso font-semibold text-eso-green mb-4">
            Buffs
          </h2>
          <div className="space-y-4">
            {buffs.map((buff) => (
              <div key={buff.id} className="card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-eso-green">
                    {buff.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    buff.type === 'major' ? 'bg-orange-600 text-white' :
                    buff.type === 'minor' ? 'bg-blue-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {buff.type.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">{buff.description}</p>
                <div className="space-y-1">
                  {buff.effects.map((effect, index) => (
                    <div key={index} className="text-sm text-gray-400">
                      {effect.description}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-eso font-semibold text-eso-red mb-4">
            Debuffs
          </h2>
          <div className="space-y-4">
            {debuffs.map((debuff) => (
              <div key={debuff.id} className="card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-eso-red">
                    {debuff.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    debuff.type === 'major' ? 'bg-orange-600 text-white' :
                    debuff.type === 'minor' ? 'bg-blue-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {debuff.type.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">{debuff.description}</p>
                <div className="space-y-1">
                  {debuff.effects.map((effect, index) => (
                    <div key={index} className="text-sm text-gray-400">
                      {effect.description}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

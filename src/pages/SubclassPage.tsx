import { useParams, Link } from 'react-router-dom'
import { esoClasses } from '../../data/classes'
import { dragonknightSkills } from '../../data/dragonknight-skills'
import { sorcererSkills } from '../../data/sorcerer-skills'
import { nightbladeSkills } from '../../data/nightblade-skills'
import { templarSkills } from '../../data/templar-skills'
import { necromancerSkills } from '../../data/necromancer-skills'
import { wardenSkills } from '../../data/warden-skills'
import { arcanistSkills } from '../../data/arcanist-skills'
import { Skill } from '../../data/skills'

// Map of all class skills
const allClassSkills = {
  dragonknight: dragonknightSkills,
  sorcerer: sorcererSkills,
  nightblade: nightbladeSkills,
  templar: templarSkills,
  necromancer: necromancerSkills,
  warden: wardenSkills,
  arcanist: arcanistSkills
}

// Map subclass IDs to skill line keys
const subclassToSkillLineMap: { [key: string]: { [key: string]: string } } = {
  dragonknight: {
    'ardent-flame': 'ardentFlame',
    'draconic-power': 'draconicPower',
    'earthen-heart': 'earthenHeart'
  },
  sorcerer: {
    'dark-magic': 'darkMagic',
    'daedric-summoning': 'daedricSummoning',
    'storm-calling': 'stormCalling'
  },
  nightblade: {
    'assassination': 'assassination',
    'shadow': 'shadow',
    'siphoning': 'siphoning'
  },
  templar: {
    'aedric-spear': 'aedricSpear',
    'dawns-wrath': 'dawnsWrath',
    'restoring-light': 'restoringLight'
  },
  necromancer: {
    'grave-lord': 'graveLord',
    'bone-tyrant': 'boneTyrant',
    'living-death': 'livingDeath'
  },
  warden: {
    'animal-companions': 'animalCompanions',
    'green-balance': 'greenBalance',
    'winters-embrace': 'wintersEmbrace'
  },
  arcanist: {
    'herald-of-the-tome': 'heraldOfTheTome',
    'soldier-of-apocrypha': 'soldierOfApocrypha',
    'curative-runeforms': 'curativeRuneforms'
  }
}

interface SkillCardProps {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const getResourceColor = (type: string) => {
    switch (type) {
      case 'magicka': return 'text-blue-400'
      case 'stamina': return 'text-green-400'
      case 'ultimate': return 'text-yellow-400'
      default: return 'text-gray-400'
    }
  }

  const getSkillTypeColor = (type: string) => {
    switch (type) {
      case 'ultimate': return 'bg-yellow-600'
      case 'active': return 'bg-blue-600'
      case 'passive': return 'bg-purple-600'
      default: return 'bg-gray-600'
    }
  }

  const getDamageTypeColor = (type: string) => {
    switch (type) {
      case 'fire': return 'text-red-400'
      case 'frost': return 'text-cyan-400'
      case 'shock': return 'text-purple-400'
      case 'magic': return 'text-blue-400'
      case 'physical': return 'text-gray-300'
      case 'poison': return 'text-green-400'
      case 'disease': return 'text-yellow-600'
      case 'bleed': return 'text-red-600'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="card hover:border-eso-gold transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-eso font-semibold text-eso-gold">
          {skill.name}
        </h3>
        <span className={`text-xs px-2 py-1 rounded-full text-white ${getSkillTypeColor(skill.type)}`}>
          {skill.type.toUpperCase()}
        </span>
      </div>

      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {skill.description}
      </p>

      {/* Resource Cost */}
      {skill.resourceCost && (
        <div className="mb-3">
          <span className="text-xs text-gray-400">Cost: </span>
          <span className={`font-medium ${getResourceColor(skill.resourceCost.type)}`}>
            {skill.resourceCost.amount} {skill.resourceCost.type.charAt(0).toUpperCase() + skill.resourceCost.type.slice(1)}
          </span>
        </div>
      )}

      {/* Damage/Healing Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        {skill.damage && (
          <div className="text-sm">
            <span className="text-gray-400">Damage: </span>
            <span className={`font-medium ${getDamageTypeColor(skill.damage.damageType)}`}>
              {skill.damage.baseDamage} {skill.damage.damageType}
            </span>
          </div>
        )}
        {skill.healing && (
          <div className="text-sm">
            <span className="text-gray-400">Healing: </span>
            <span className="font-medium text-green-400">
              {skill.healing.baseHealing}
            </span>
          </div>
        )}
        {skill.range && (
          <div className="text-sm">
            <span className="text-gray-400">Range: </span>
            <span className="text-white">{skill.range}m</span>
          </div>
        )}
        {skill.duration && (
          <div className="text-sm">
            <span className="text-gray-400">Duration: </span>
            <span className="text-white">{skill.duration}s</span>
          </div>
        )}
      </div>

      {/* Buffs/Debuffs */}
      {(skill.buffsApplied?.length > 0 || skill.debuffsApplied?.length > 0) && (
        <div className="mb-4 space-y-2">
          {skill.buffsApplied?.length > 0 && (
            <div className="text-sm">
              <span className="text-gray-400">Buffs: </span>
              <span className="text-green-400">
                {skill.buffsApplied.map(buff => buff.replace(/_/g, ' ')).join(', ')}
              </span>
            </div>
          )}
          {skill.debuffsApplied?.length > 0 && (
            <div className="text-sm">
              <span className="text-gray-400">Debuffs: </span>
              <span className="text-red-400">
                {skill.debuffsApplied.map(debuff => debuff.replace(/_/g, ' ')).join(', ')}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Morphs */}
      {skill.morphs && skill.morphs.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-eso-blue">Morphs:</h4>
          {skill.morphs.map((morph) => (
            <div key={morph.id} className="bg-gray-800 p-3 rounded border border-gray-700">
              <h5 className="font-medium text-eso-gold mb-1">{morph.name}</h5>
              <p className="text-xs text-gray-300 mb-2">{morph.description}</p>
              <p className="text-xs text-eso-blue italic">{morph.changes}</p>
            </div>
          ))}
        </div>
      )}

      {/* Effects */}
      {skill.effects && skill.effects.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-700">
          <h4 className="text-xs font-semibold text-gray-400 mb-2">Effects:</h4>
          <div className="space-y-1">
            {skill.effects.slice(0, 3).map((effect) => (
              <div key={effect.id} className="text-xs text-gray-300">
                • {effect.description}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export const SubclassPage = () => {
  const { classId, subclassId } = useParams<{ classId: string; subclassId: string }>()
  
  const esoClass = esoClasses.find(c => c.id === classId)
  const subclass = esoClass?.subclasses.find(s => s.id === subclassId)

  if (!esoClass || !subclass) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-eso text-red-500">Subclass not found</h1>
        <Link to="/" className="btn-primary mt-4 inline-block">
          Back to Classes
        </Link>
      </div>
    )
  }

  // Get the skills for this subclass
  const classSkills = allClassSkills[classId as keyof typeof allClassSkills]
  const skillLineKey = classId && subclassId ? subclassToSkillLineMap[classId]?.[subclassId] : undefined
  const skills: Skill[] = skillLineKey ? classSkills?.[skillLineKey as keyof typeof classSkills] || [] : []

  // Separate skills by type
  const ultimates = skills.filter(skill => skill.type === 'ultimate')
  const actives = skills.filter(skill => skill.type === 'active')
  const passives = skills.filter(skill => skill.type === 'passive')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <nav className="text-sm text-gray-400 mb-4">
          <Link to="/" className="hover:text-eso-gold">Classes</Link>
          <span className="mx-2">›</span>
          <Link to={`/class/${classId}`} className="hover:text-eso-gold">{esoClass.name}</Link>
          <span className="mx-2">›</span>
          <span className="text-eso-gold">{subclass.name}</span>
        </nav>
        
        <h1 className="text-4xl font-eso font-bold text-eso-gold mb-4">
          {subclass.name}
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
          {subclass.description}
        </p>
        
        <span className={`inline-block text-sm px-3 py-1 rounded-full ${
          subclass.archetype === 'DPS' ? 'bg-red-600 text-white' :
          subclass.archetype === 'Healer' ? 'bg-green-600 text-white' :
          subclass.archetype === 'Tank' ? 'bg-blue-600 text-white' :
          'bg-purple-600 text-white'
        }`}>
          {subclass.archetype}
        </span>
      </div>

      {/* Passive Bonuses */}
      {subclass.passiveBonuses && subclass.passiveBonuses.length > 0 && (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-eso font-semibold text-eso-blue mb-4">Passive Bonuses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subclass.passiveBonuses.map((bonus) => (
              <div key={bonus.id} className="space-y-1">
                <h3 className="font-medium text-eso-gold">{bonus.name}</h3>
                <p className="text-sm text-gray-300">{bonus.description}</p>
                <p className="text-xs text-eso-blue">{bonus.effect}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ultimate Abilities */}
      {ultimates.length > 0 && (
        <div>
          <h2 className="text-2xl font-eso font-semibold text-eso-blue mb-6">Ultimate Abilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ultimates.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      )}

      {/* Active Abilities */}
      {actives.length > 0 && (
        <div>
          <h2 className="text-2xl font-eso font-semibold text-eso-blue mb-6">Active Abilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {actives.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      )}

      {/* Passive Abilities */}
      {passives.length > 0 && (
        <div>
          <h2 className="text-2xl font-eso font-semibold text-eso-blue mb-6">Passive Abilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {passives.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      )}

      {/* No Skills Message */}
      {skills.length === 0 && (
        <div className="text-center">
          <p className="text-gray-400">No skills found for this subclass.</p>
          <p className="text-sm text-gray-500 mt-2">
            Skills data may not be available yet.
          </p>
        </div>
      )}
    </div>
  )
}

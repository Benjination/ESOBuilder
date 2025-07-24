// Templar Skills - The holy warrior class
import { Skill } from './skills';

// Aedric Spear Skills
const aedricSpearSkills: Skill[] = [
  {
    id: 'puncturing-strikes',
    name: 'Puncturing Strikes',
    description: 'Launch a relentless assault, striking enemies in front of you four times.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 8,
    morphs: [
      {
        id: 'biting-jabs',
        name: 'Biting Jabs',
        description: 'Converts to stamina and deals physical damage with bleeding.',
        changes: 'Uses stamina, deals physical damage, final hit applies bleeding.'
      },
      {
        id: 'puncturing-sweep',
        name: 'Puncturing Sweep',
        description: 'Heals you for a percentage of damage dealt.',
        changes: 'Heals you for 40% of damage dealt to nearby enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 116,
      scalingFactor: 0.1
    },
    effects: [
      {
        id: 'multi-strike',
        type: 'other',
        description: 'Four consecutive strikes that increase in damage'
      }
    ]
  },
  {
    id: 'piercing-javelin',
    name: 'Piercing Javelin',
    description: 'Hurl a javelin of divine light that knocks down and stuns the enemy.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    range: 28,
    morphs: [
      {
        id: 'aurora-javelin',
        name: 'Aurora Javelin',
        description: 'Deals more damage based on distance traveled.',
        changes: 'Damage increases up to 100% based on distance to target.'
      },
      {
        id: 'binding-javelin',
        name: 'Binding Javelin',
        description: 'Immobilizes the target instead of knocking them down.',
        changes: 'Applies immobilization for 8 seconds instead of knockdown.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun', 'knockdown'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'projectile-cc',
        type: 'crowd_control',
        description: 'Ranged projectile with knockdown and stun',
        duration: 3
      }
    ]
  },
  {
    id: 'focused-charge',
    name: 'Focused Charge',
    description: 'Charge with divine purpose to an enemy, dealing damage and stunning them.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 3780
    },
    range: 22,
    morphs: [
      {
        id: 'explosive-charge',
        name: 'Explosive Charge',
        description: 'Deals area damage around the target.',
        changes: 'Explodes on impact, dealing damage to nearby enemies.'
      },
      {
        id: 'toppling-charge',
        name: 'Toppling Charge',
        description: 'Knocks down multiple enemies and grants spell resistance.',
        changes: 'Knocks down all enemies near target, grants Major Spell Resistance.'
      }
    ],
    buffsApplied: ['major_spell_resistance'],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'gap-closer-stun',
        type: 'other',
        description: 'Gap closer that stuns target on arrival'
      }
    ]
  },
  {
    id: 'spear-shards',
    name: 'Spear Shards',
    description: 'Summon spears from the ground that deal damage over time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    duration: 10,
    morphs: [
      {
        id: 'luminous-shards',
        name: 'Luminous Shards',
        description: 'Allies can activate shards to restore resources.',
        changes: 'Allies can activate for Magicka and Stamina restoration.'
      },
      {
        id: 'blazing-spear',
        name: 'Blazing Spear',
        description: 'Deals more damage and applies burning.',
        changes: 'Higher damage and applies burning status effect.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['burning'],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 10
    },
    effects: [
      {
        id: 'ground-spears',
        type: 'other',
        description: 'Creates area of damaging spears over time',
        duration: 10
      }
    ]
  },
  {
    id: 'radial-sweep',
    name: 'Radial Sweep',
    description: 'Spin around with divine energy, hitting all nearby enemies.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 100
    },
    radius: 8,
    morphs: [
      {
        id: 'empowering-sweep',
        name: 'Empowering Sweep',
        description: 'Increases your damage done for each enemy hit.',
        changes: 'Grants 6% damage done for each enemy hit for 30 seconds.'
      },
      {
        id: 'crescent-sweep',
        name: 'Crescent Sweep',
        description: 'Increases damage and reduces cost based on enemies hit.',
        changes: 'Costs less and deals more damage for each enemy hit.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'radial-attack',
        type: 'other',
        description: 'Area attack that hits all nearby enemies'
      }
    ]
  },
  {
    id: 'aurora-javelin',
    name: 'Aurora Javelin',
    description: 'Hurl a spear of pure light that pierces through enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'piercing-javelin',
        name: 'Piercing Javelin',
        description: 'Knocks down enemies and deals more damage at range.',
        changes: 'Knockdown on hit, damage increases with distance.'
      },
      {
        id: 'binding-javelin',
        name: 'Binding Javelin',
        description: 'Immobilizes target and spreads damage to nearby enemies.',
        changes: 'Immobilizes for 3 seconds, damage spreads to enemies within 8 meters.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['knockdown', 'immobilize'],
    damage: {
      baseDamage: 1548,
      scalingFactor: 1.3,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'piercing-light',
        type: 'other',
        description: 'Pierces through all enemies in line'
      }
    ]
  },
  {
    id: 'radial-sweep',
    name: 'Radial Sweep',
    description: 'Spin around with your spear extended, damaging nearby enemies.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 125
    },
    radius: 8,
    morphs: [
      {
        id: 'empowering-sweep',
        name: 'Empowering Sweep',
        description: 'Grants Empower and reduces enemy damage for each enemy hit.',
        changes: 'Grants Empower for 8 seconds, enemies deal 15% less damage.'
      },
      {
        id: 'crescent-sweep',
        name: 'Crescent Sweep',
        description: 'Larger area and applies burning to enemies.',
        changes: '12 meter radius, applies burning for 10 seconds.'
      }
    ],
    buffsApplied: ['empower'],
    debuffsApplied: ['burning'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'spinning-sweep',
        type: 'other',
        description: 'Hits all enemies within range around you'
      }
    ]
  },
  // Passive Skills
  {
    id: 'balanced-warrior',
    name: 'Balanced Warrior',
    description: 'Increases weapon and spell damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-bonus',
        type: 'stat_increase',
        description: 'Weapon and Spell Damage increased by 129',
        value: 129
      }
    ]
  },
  {
    id: 'piercing-spear',
    name: 'Piercing Spear',
    description: 'Increases critical strike chance and critical damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-chance',
        type: 'stat_increase',
        description: 'Weapon and Spell Critical increased by 657',
        value: 657
      },
      {
        id: 'critical-damage',
        type: 'stat_increase',
        description: 'Critical Strike Damage increased by 10%',
        value: 10,
        percentage: true
      }
    ]
  },
  {
    id: 'spear-wall',
    name: 'Spear Wall',
    description: 'Blocking with Aedric Spear abilities active grants damage reduction.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'block-bonus',
        type: 'stat_increase',
        description: 'Damage reduction increased by 10% when blocking with Aedric Spear abilities active',
        value: 10,
        percentage: true
      }
    ]
  },
  {
    id: 'burning-light',
    name: 'Burning Light',
    description: 'Aedric Spear abilities have a chance to trigger additional damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'bonus-damage',
        type: 'other',
        description: '35% chance for Aedric Spear abilities to deal 581 additional magic damage'
      }
    ]
  },
  {
    id: 'aedric-mastery',
    name: 'Aedric Mastery',
    description: 'Increases max stamina for each Aedric Spear ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Maximum Stamina increased by 8% per Aedric Spear ability slotted',
        value: 8,
        percentage: true
      }
    ]
  }
];

// Dawn's Wrath Skills
const dawnsWrathSkills: Skill[] = [
  {
    id: 'sun-fire',
    name: 'Sun Fire',
    description: 'Blast an enemy with solar energy, dealing immediate and damage over time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 28,
    duration: 10,
    morphs: [
      {
        id: 'vampire-bane',
        name: 'Vampire\'s Bane',
        description: 'Deals bonus damage to vampires and werewolves.',
        changes: '+50% damage to vampires/werewolves, spreads on death.'
      },
      {
        id: 'reflective-light',
        name: 'Reflective Light',
        description: 'Bounces to additional nearby enemies.',
        changes: 'Bounces to up to 2 additional enemies within 8 meters.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['burning'],
    damage: {
      baseDamage: 580,
      scalingFactor: 0.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'solar-dot',
        type: 'other',
        description: 'Solar damage with burning over time',
        duration: 10
      }
    ]
  },
  {
    id: 'solar-flare',
    name: 'Solar Flare',
    description: 'Channel to build up solar energy and release a devastating blast.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    morphs: [
      {
        id: 'dark-flare',
        name: 'Dark Flare',
        description: 'Applies Major Defile, reducing enemy healing.',
        changes: 'Applies Major Defile for 4 seconds, reducing healing by 30%.'
      },
      {
        id: 'solar-barrage',
        name: 'Solar Barrage',
        description: 'Instant cast that hits multiple enemies.',
        changes: 'Instant cast, hits up to 3 enemies in area.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_defile'],
    damage: {
      baseDamage: 2030,
      scalingFactor: 1.75,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'charged-blast',
        type: 'other',
        description: 'Channeled ability that builds up damage'
      }
    ]
  },
  {
    id: 'backlash',
    name: 'Backlash',
    description: 'Mark an enemy to store damage dealt to them, then release it.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    range: 28,
    duration: 6,
    morphs: [
      {
        id: 'purifying-light',
        name: 'Purifying Light',
        description: 'Heals nearby allies when it explodes.',
        changes: 'Explosion heals you and nearby allies for 50% of stored damage.'
      },
      {
        id: 'power-of-the-light',
        name: 'Power of the Light',
        description: 'Deals more damage and applies Minor Fracture.',
        changes: 'Higher damage cap and applies Minor Fracture for 10 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_fracture'],
    damage: {
      baseDamage: 2323,
      scalingFactor: 2.0,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'damage-storage',
        type: 'other',
        description: 'Stores damage dealt to enemy and releases as explosion',
        duration: 6
      }
    ]
  },
  {
    id: 'eclipse',
    name: 'Eclipse',
    description: 'Blind an enemy, stunning them and reflecting their spells.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    range: 28,
    duration: 4,
    morphs: [
      {
        id: 'total-dark',
        name: 'Total Dark',
        description: 'Reflects more spells and damages nearby enemies.',
        changes: 'Reflects 4 spells and damages nearby enemies when they end.'
      },
      {
        id: 'unstable-core',
        name: 'Unstable Core',
        description: 'Explodes when it ends, dealing area damage.',
        changes: 'Explodes for area damage when duration expires.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'spell-reflect-stun',
        type: 'crowd_control',
        description: 'Stuns enemy and reflects their spells back',
        duration: 4
      }
    ]
  },
  {
    id: 'nova',
    name: 'Nova',
    description: 'Call down a solar fragment that creates a field of gravity.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    range: 28,
    radius: 8,
    duration: 8,
    morphs: [
      {
        id: 'solar-prison',
        name: 'Solar Prison',
        description: 'Synergy allows ally to activate for area stun.',
        changes: 'Allies can activate for AoE stun and damage.'
      },
      {
        id: 'solar-disturbance',
        name: 'Solar Disturbance',
        description: 'Increases radius and applies Minor Maim.',
        changes: 'Larger area and applies Minor Maim, reducing enemy damage.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim'],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 8
    },
    effects: [
      {
        id: 'gravity-field',
        type: 'other',
        description: 'Creates area that slows and damages enemies',
        duration: 8
      }
    ]
  },
  {
    id: 'eclipse',
    name: 'Eclipse',
    description: 'Envelop an enemy in darkness, stunning them and reflecting spells.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    range: 28,
    duration: 4,
    morphs: [
      {
        id: 'total-dark',
        name: 'Total Dark',
        description: 'Also blinds enemy and spreads to nearby foes when it ends.',
        changes: 'Applies blind, spreads to up to 3 nearby enemies when expiring.'
      },
      {
        id: 'unstable-core',
        name: 'Unstable Core',
        description: 'Enemy explodes when effect ends, damaging nearby foes.',
        changes: 'Explodes for area damage when effect expires or is purged.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun', 'blind'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'spell-reflection',
        type: 'other',
        description: 'Reflects spells back at caster',
        duration: 4
      }
    ]
  },
  // Passive Skills
  {
    id: 'enduring-rays',
    name: 'Enduring Rays',
    description: 'Dawn\'s Wrath abilities last longer and cost less.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'duration-increase',
        type: 'stat_increase',
        description: 'Dawn\'s Wrath ability durations increased by 15%',
        value: 15,
        percentage: true
      },
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Dawn\'s Wrath ability costs reduced by 8%',
        value: 8,
        percentage: true
      }
    ]
  },
  {
    id: 'prism',
    name: 'Prism',
    description: 'Increases spell damage and critical chance.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'spell-damage',
        type: 'stat_increase',
        description: 'Spell Damage increased by 258',
        value: 258
      },
      {
        id: 'critical-chance',
        type: 'stat_increase',
        description: 'Spell Critical increased by 657',
        value: 657
      }
    ]
  },
  {
    id: 'illuminate',
    name: 'Illuminate',
    description: 'Increases magicka recovery and reduces enemy spell resistance.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'magicka-recovery',
        type: 'stat_increase',
        description: 'Magicka Recovery increased by 129',
        value: 129
      },
      {
        id: 'spell-penetration',
        type: 'stat_increase',
        description: 'Spell Penetration increased by 1320',
        value: 1320
      }
    ]
  },
  {
    id: 'balanced-light',
    name: 'Balanced Light',
    description: 'Dawn\'s Wrath abilities restore magicka when they deal damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'magicka-return',
        type: 'other',
        description: 'Dawn\'s Wrath abilities restore 300 Magicka when dealing damage'
      }
    ]
  },
  {
    id: 'restoring-spirit',
    name: 'Restoring Spirit',
    description: 'Increases max magicka for each Dawn\'s Wrath ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Maximum Magicka increased by 8% per Dawn\'s Wrath ability slotted',
        value: 8,
        percentage: true
      }
    ]
  }
];

// Restoring Light Skills
const restoringLightSkills: Skill[] = [
  {
    id: 'rushed-ceremony',
    name: 'Rushed Ceremony',
    description: 'Instantly heal yourself or a nearby ally.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    range: 28,
    morphs: [
      {
        id: 'breath-of-life',
        name: 'Breath of Life',
        description: 'Heals two additional nearby allies.',
        changes: 'Smart heals up to 3 targets, prioritizing lowest health.'
      },
      {
        id: 'honor-the-dead',
        name: 'Honor the Dead',
        description: 'Returns Magicka if target is below 75% health.',
        changes: 'Refunds 15% of cost if target was below 75% health.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 1742,
      scalingFactor: 1.5
    },
    effects: [
      {
        id: 'burst-heal',
        type: 'other',
        description: 'Powerful instant heal ability'
      }
    ]
  },
  {
    id: 'healing-ritual',
    name: 'Healing Ritual',
    description: 'Channel to heal yourself and nearby allies over time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 5130
    },
    radius: 12,
    duration: 2,
    morphs: [
      {
        id: 'ritual-of-rebirth',
        name: 'Ritual of Rebirth',
        description: 'Resurrects allies if they die during the channel.',
        changes: 'Automatically resurrects allies who die while channeling.'
      },
      {
        id: 'lingering-ritual',
        name: 'Lingering Ritual',
        description: 'Continues healing after channel ends.',
        changes: 'Leaves healing area that lasts 8 seconds after channel.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 580,
      scalingFactor: 0.5,
      isHoT: true,
      hotTicks: 2
    },
    effects: [
      {
        id: 'group-channel-heal',
        type: 'other',
        description: 'Channeled group healing over time',
        duration: 2
      }
    ]
  },
  {
    id: 'restoring-aura',
    name: 'Restoring Aura',
    description: 'Share your stamina and magicka recovery with nearby allies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 5994
    },
    radius: 12,
    duration: 30,
    morphs: [
      {
        id: 'radiant-aura',
        name: 'Radiant Aura',
        description: 'Also increases spell and weapon damage.',
        changes: 'Grants Minor Intellect and Minor Endurance to group.'
      },
      {
        id: 'repentance',
        name: 'Repentance',
        description: 'Consumes corpses to restore health and stamina.',
        changes: 'Uses corpses to restore health/stamina, grants Ultimate.'
      }
    ],
    buffsApplied: ['minor_intellect', 'minor_endurance'],
    debuffsApplied: [],
    effects: [
      {
        id: 'group-recovery',
        type: 'stat_increase',
        description: 'Increases resource recovery for nearby allies',
        value: 15,
        percentage: true,
        duration: 30
      }
    ]
  },
  {
    id: 'cleansing-ritual',
    name: 'Cleansing Ritual',
    description: 'Remove negative effects from yourself and nearby allies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    radius: 12,
    morphs: [
      {
        id: 'ritual-of-retribution',
        name: 'Ritual of Retribution',
        description: 'Creates area that damages enemies and heals allies.',
        changes: 'Creates 8 second area that pulses damage and healing.'
      },
      {
        id: 'extended-ritual',
        name: 'Extended Ritual',
        description: 'Increases radius and adds healing over time.',
        changes: 'Larger radius and grants healing over time to cleansed allies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 580,
      scalingFactor: 0.5,
      isHoT: true,
      hotTicks: 8
    },
    effects: [
      {
        id: 'cleanse-effects',
        type: 'other',
        description: 'Removes negative effects from allies'
      }
    ]
  },
  {
    id: 'rite-of-passage',
    name: 'Rite of Passage',
    description: 'Channel to become immune to damage and heal nearby allies.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 300
    },
    radius: 12,
    duration: 8,
    morphs: [
      {
        id: 'remembrance',
        name: 'Remembrance',
        description: 'Heals more and grants damage reduction to allies.',
        changes: 'Stronger healing and allies take 30% less damage.'
      },
      {
        id: 'practiced-incantation',
        name: 'Practiced Incantation',
        description: 'Costs less and increases movement speed.',
        changes: 'Lower cost and grants Major Expedition while channeling.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: [],
    healing: {
      baseHealing: 870,
      scalingFactor: 0.75,
      isHoT: true,
      hotTicks: 8
    },
    effects: [
      {
        id: 'immunity-channel',
        type: 'other',
        description: 'Immunity to damage while channeling group heal',
        duration: 8
      }
    ]
  },
  {
    id: 'cleansing-ritual',
    name: 'Cleansing Ritual',
    description: 'Cleanse yourself and nearby allies of negative effects and grant damage reduction.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    radius: 12,
    morphs: [
      {
        id: 'ritual-of-retribution',
        name: 'Ritual of Retribution',
        description: 'Also damages enemies in the area over time.',
        changes: 'Deals 348 magic damage per second to enemies in area for 20 seconds.'
      },
      {
        id: 'extended-ritual',
        name: 'Extended Ritual',
        description: 'Larger area and can be activated again to cleanse more effects.',
        changes: '18 meter radius, can activate again within 20 seconds for additional cleanse.'
      }
    ],
    buffsApplied: ['minor_mending'],
    debuffsApplied: [],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'cleanse-effects',
        type: 'other',
        description: 'Removes up to 5 negative effects from allies in area'
      }
    ]
  },
  {
    id: 'rite-of-passage',
    name: 'Rite of Passage',
    description: 'Channel to become immune to control effects and heal nearby allies.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 150
    },
    radius: 12,
    duration: 4,
    morphs: [
      {
        id: 'remembrance',
        name: 'Remembrance',
        description: 'Heals for more and grants damage reduction to allies.',
        changes: 'Increased healing and allies take 20% less damage for 8 seconds.'
      },
      {
        id: 'practiced-incantation',
        name: 'Practiced Incantation',
        description: 'Shorter channel time and restores magicka.',
        changes: '2 second channel, restores 15% max Magicka to affected allies.'
      }
    ],
    buffsApplied: ['minor_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0,
      isHoT: true,
      hotTicks: 4
    },
    effects: [
      {
        id: 'immunity-channel',
        type: 'other',
        description: 'Immune to control effects while channeling',
        duration: 4
      }
    ]
  },
  // Passive Skills
  {
    id: 'mending',
    name: 'Mending',
    description: 'Increases healing done and received.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-done',
        type: 'stat_increase',
        description: 'Healing Done increased by 12%',
        value: 12,
        percentage: true
      },
      {
        id: 'healing-received',
        type: 'stat_increase',
        description: 'Healing Received increased by 8%',
        value: 8,
        percentage: true
      }
    ]
  },
  {
    id: 'focused-healing',
    name: 'Focused Healing',
    description: 'Increases critical healing chance and magicka recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-healing',
        type: 'stat_increase',
        description: 'Critical Healing increased by 12%',
        value: 12,
        percentage: true
      },
      {
        id: 'magicka-recovery',
        type: 'stat_increase',
        description: 'Magicka Recovery increased by 129',
        value: 129
      }
    ]
  },
  {
    id: 'light-weaver',
    name: 'Light Weaver',
    description: 'Restoring Light abilities cost less and restore stamina.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Restoring Light ability costs reduced by 8%',
        value: 8,
        percentage: true
      },
      {
        id: 'stamina-return',
        type: 'other',
        description: 'Restoring Light abilities restore 200 Stamina when cast'
      }
    ]
  },
  {
    id: 'sacred-ground',
    name: 'Sacred Ground',
    description: 'Increases healing and reduces damage taken in Restoring Light areas.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'area-bonus',
        type: 'stat_increase',
        description: 'Healing Done increased by 25% and damage taken reduced by 6% in Restoring Light areas',
        value: 25,
        percentage: true
      }
    ]
  },
  {
    id: 'master-ritualist',
    name: 'Master Ritualist',
    description: 'Increases max magicka for each Restoring Light ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Maximum Magicka increased by 8% per Restoring Light ability slotted',
        value: 8,
        percentage: true
      }
    ]
  }
];

// Export Templar Skills
export const templarSkills = {
  aedricSpear: aedricSpearSkills,
  dawnsWrath: dawnsWrathSkills,
  restoringLight: restoringLightSkills
};

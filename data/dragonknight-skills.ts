// Dragonknight Class Skills
import { Skill } from './skills';

// Ardent Flame Skill Line
export const ardentFlameSkills: Skill[] = [
  {
    id: 'lava-whip',
    name: 'Lava Whip',
    description: 'Strike an enemy with your flame lash, dealing fire damage. Deals increased damage to enemies who are Burning.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 8,
    morphs: [
      {
        id: 'molten-whip',
        name: 'Molten Whip',
        description: 'Strike an enemy with your flame lash, dealing fire damage. Deals increased damage to enemies who are Burning. Generates Seething Fury when cast.',
        changes: 'Generates Seething Fury, increasing damage of next Molten Whip cast.'
      },
      {
        id: 'flame-lash',
        name: 'Flame Lash',
        description: 'Strike an enemy with your flame lash, dealing fire damage. Deals increased damage to enemies who are Burning. Heals you if target is nearby.',
        changes: 'Heals you for a portion of damage dealt if enemy is within 7 meters.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['burning'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'burning-bonus',
        type: 'other',
        description: '+40% damage to Burning enemies',
        value: 40,
        percentage: true
      }
    ]
  },
  {
    id: 'searing-strike',
    name: 'Searing Strike',
    description: 'Blast an enemy with fire, dealing immediate fire damage and additional fire damage over 8.5 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 28,
    duration: 8.5,
    morphs: [
      {
        id: 'venomous-claw',
        name: 'Venomous Claw',
        description: 'Blast an enemy, dealing poison damage immediately and over time. Poisoned enemies take additional damage from your attacks.',
        changes: 'Converts to poison damage, adds damage bonus to poisoned enemies.'
      },
      {
        id: 'burning-embers',
        name: 'Burning Embers',
        description: 'Blast an enemy with fire, dealing damage immediately and over time. When effect ends, heals you based on damage dealt.',
        changes: 'Heals you when effect expires based on total damage dealt.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['burning'],
    damage: {
      baseDamage: 870,
      scalingFactor: 0.75,
      damageType: 'fire',
      isDoT: true,
      dotTicks: 4
    },
    effects: [
      {
        id: 'initial-damage',
        type: 'other',
        description: 'Immediate fire damage',
        value: 870
      },
      {
        id: 'dot-damage',
        type: 'other',
        description: 'Fire damage over time',
        value: 580,
        duration: 8.5
      }
    ]
  },
  {
    id: 'fiery-breath',
    name: 'Fiery Breath',
    description: 'Exhale a cone of fire, dealing fire damage to all enemies in front of you.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    range: 10,
    radius: 60, // degrees
    morphs: [
      {
        id: 'noxious-breath',
        name: 'Noxious Breath',
        description: 'Exhale a cone of poison, dealing poison damage and applying Major Breach to enemies.',
        changes: 'Converts to poison damage, applies Major Breach debuff.'
      },
      {
        id: 'engulfing-flames',
        name: 'Engulfing Flames',
        description: 'Exhale a cone of fire that grows stronger over time, dealing increasing fire damage.',
        changes: 'Damage increases based on how long enemies remain in the fire.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_breach'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'cone-damage',
        type: 'other',
        description: 'Fire damage in cone area',
        value: 1161
      }
    ]
  },
  {
    id: 'dragonknight-standard',
    name: 'Dragonknight Standard',
    description: 'Call down a Dragonknight Standard, dealing fire damage to enemies and reducing their damage done.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    range: 28,
    radius: 8,
    duration: 18,
    morphs: [
      {
        id: 'standard-of-might',
        name: 'Standard of Might',
        description: 'Standard increases your damage done and reduces enemy damage done in the area.',
        changes: 'Increases caster damage done while in the area.'
      },
      {
        id: 'shifting-standard',
        name: 'Shifting Standard',
        description: 'Standard can be moved to a new location by recasting the ability.',
        changes: 'Can recast to move the standard to a new location.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'fire',
      isDoT: true,
      dotTicks: 18
    },
    effects: [
      {
        id: 'standard-damage',
        type: 'other',
        description: 'Fire damage over time in area',
        value: 1742,
        duration: 18
      },
      {
        id: 'damage-reduction',
        type: 'stat_decrease',
        description: 'Reduces enemy damage done',
        value: 30,
        percentage: true,
        duration: 18
      }
    ]
  },
  {
    id: 'inferno',
    name: 'Inferno',
    description: 'Summon a meteor shower of fireballs at target location, dealing fire damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    range: 28,
    radius: 8,
    morphs: [
      {
        id: 'flames-of-oblivion',
        name: 'Flames of Oblivion',
        description: 'Creates orbiting flames that automatically attack nearby enemies.',
        changes: 'Creates orbiting flames that deal damage to nearby enemies over time.'
      },
      {
        id: 'cauterize',
        name: 'Cauterize',
        description: 'Heals you and nearby allies when the inferno expires.',
        changes: 'Provides healing to you and allies in the area when effect ends.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['burning'],
    damage: {
      baseDamage: 1548,
      scalingFactor: 1.33,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'meteor-shower',
        type: 'other',
        description: 'Multiple fireballs rain down on target area'
      }
    ]
  },
  {
    id: 'flame-cloak',
    name: 'Flame Cloak',
    description: 'Envelop yourself in fire, dealing fire damage to nearby enemies over time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    radius: 6,
    duration: 20,
    morphs: [
      {
        id: 'volatile-armor',
        name: 'Volatile Armor',
        description: 'Increases damage dealt and explodes when effect ends.',
        changes: 'Increases spell damage and creates explosion on expiration.'
      },
      {
        id: 'immolation',
        name: 'Immolation',
        description: 'Reduces damage taken and applies burning to attackers.',
        changes: 'Provides damage reduction and applies burning to melee attackers.'
      }
    ],
    buffsApplied: ['minor_sorcery'],
    debuffsApplied: ['burning'],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'fire',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'flame-aura',
        type: 'other',
        description: 'Fire aura that damages nearby enemies',
        duration: 20
      }
    ]
  },
  // Passive Skills
  {
    id: 'combustion',
    name: 'Combustion',
    description: 'Increases fire damage and spell critical rating.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'fire-damage',
        type: 'stat_increase',
        description: 'Fire Damage increased by 6%',
        value: 6,
        percentage: true
      },
      {
        id: 'spell-critical',
        type: 'stat_increase',
        description: 'Spell Critical increased by 657',
        value: 657
      }
    ]
  },
  {
    id: 'spell-power-cure',
    name: 'Spell Power Cure',
    description: 'Increases spell damage and reduces ability costs.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'spell-damage',
        type: 'stat_increase',
        description: 'Spell Damage increased by 129',
        value: 129
      },
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Ardent Flame ability costs reduced by 8%',
        value: 8,
        percentage: true
      }
    ]
  },
  {
    id: 'warmth',
    name: 'Warmth',
    description: 'Increases fire resistance and Health recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'fire-resistance',
        type: 'stat_increase',
        description: 'Fire Resistance increased by 2310',
        value: 2310
      },
      {
        id: 'health-recovery',
        type: 'stat_increase',
        description: 'Health Recovery increased by 129',
        value: 129
      }
    ]
  },
  {
    id: 'world-in-ruin',
    name: 'World in Ruin',
    description: 'Increases duration of fire effects and grants Ultimate when enemies die.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'effect-duration',
        type: 'stat_increase',
        description: 'Fire effect duration increased by 2 seconds',
        value: 2
      },
      {
        id: 'ultimate-generation',
        type: 'other',
        description: 'Generate 3 Ultimate when enemy dies within 6 seconds of being damaged by you',
        value: 3
      }
    ]
  },
  {
    id: 'kindle',
    name: 'Kindle',
    description: 'Increases maximum Magicka and grants chance to restore Magicka.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-magicka',
        type: 'stat_increase',
        description: 'Maximum Magicka increased by 8%',
        value: 8,
        percentage: true
      },
      {
        id: 'magicka-restore',
        type: 'other',
        description: '10% chance to restore 950 Magicka when dealing fire damage',
        value: 10,
        percentage: true
      }
    ]
  }
];

// Draconic Power Skill Line
export const draconicPowerSkills: Skill[] = [
  {
    id: 'dragon-blood',
    name: 'Dragon Blood',
    description: 'Draw on your draconic blood to heal your wounds, restoring Health based on your missing Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    morphs: [
      {
        id: 'green-dragon-blood',
        name: 'Green Dragon Blood',
        description: 'Heal and gain Major Fortitude, increasing Health Recovery.',
        changes: 'Adds Major Fortitude buff for increased Health Recovery.'
      },
      {
        id: 'coagulating-blood',
        name: 'Coagulating Blood',
        description: 'Heal based on missing Health and gain damage reduction.',
        changes: 'Grants damage reduction for a short time after casting.'
      }
    ],
    buffsApplied: ['major_fortitude'],
    debuffsApplied: [],
    healing: {
      baseHealing: 3600,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'missing-health-scaling',
        type: 'other',
        description: 'Healing increases based on missing Health',
        value: 33,
        percentage: true
      }
    ]
  },
  {
    id: 'reflective-scale',
    name: 'Reflective Scale',
    description: 'Surround yourself with a protective aura, reflecting the next 4 projectiles back at attackers.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    duration: 4,
    morphs: [
      {
        id: 'dragon-fire-scale',
        name: 'Dragon Fire Scale',
        description: 'Reflect projectiles and deal fire damage to nearby enemies when you reflect.',
        changes: 'Deals fire damage to nearby enemies when reflecting projectiles.'
      },
      {
        id: 'reflective-plate',
        name: 'Reflective Plate',
        description: 'Reflect more projectiles and gain Major Heroism.',
        changes: 'Reflects 6 projectiles instead of 4, grants Major Heroism.'
      }
    ],
    buffsApplied: ['major_heroism'],
    debuffsApplied: [],
    effects: [
      {
        id: 'projectile-reflection',
        type: 'other',
        description: 'Reflects next 4 projectiles back at attackers',
        value: 4
      }
    ]
  },
  {
    id: 'spike-armor',
    name: 'Spike Armor',
    description: 'Grow spikes on your armor, gaining Major Resolve and dealing damage to nearby attackers.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    duration: 23,
    morphs: [
      {
        id: 'hardened-armor',
        name: 'Hardened Armor',
        description: 'Gain Major Resolve and a damage shield.',
        changes: 'Adds a damage shield that absorbs incoming damage.'
      },
      {
        id: 'volatile-armor',
        name: 'Volatile Armor',
        description: 'Gain Major Resolve and deal more damage to nearby attackers.',
        changes: 'Increases damage dealt to nearby enemies who attack you.'
      }
    ],
    buffsApplied: ['major_resolve'],
    debuffsApplied: [],
    effects: [
      {
        id: 'thorns-damage',
        type: 'other',
        description: 'Deals damage to attackers within 8 meters',
        value: 644
      },
      {
        id: 'damage-shield',
        type: 'shield',
        description: 'Absorbs incoming damage',
        value: 4800
      }
    ]
  },
  {
    id: 'dragon-leap',
    name: 'Dragon Leap',
    description: 'Leap to target location, dealing damage to enemies and gaining crowd control immunity.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 3780
    },
    range: 22,
    morphs: [
      {
        id: 'take-flight',
        name: 'Take Flight',
        description: 'Leap and knock down enemies, then gain Major Expedition.',
        changes: 'Knocks down enemies and grants Major Expedition for 4 seconds.'
      },
      {
        id: 'chains',
        name: 'Chains',
        description: 'Pull enemies to you instead of leaping to them.',
        changes: 'Pulls all enemies in area to your location instead of leaping.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: ['knockdown'],
    damage: {
      baseDamage: 1548,
      scalingFactor: 1.33,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'leap-attack',
        type: 'other',
        description: 'Gap closer that provides crowd control immunity during leap'
      }
    ]
  },
  {
    id: 'inhale',
    name: 'Inhale',
    description: 'Draw in nearby enemies, dealing damage and healing yourself.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    radius: 8,
    morphs: [
      {
        id: 'deep-breath',
        name: 'Deep Breath',
        description: 'Deals more damage based on number of enemies hit.',
        changes: 'Damage increases by 33% per enemy beyond the first.'
      },
      {
        id: 'draw-essence',
        name: 'Draw Essence',
        description: 'Heals you more and restores Magicka based on enemies hit.',
        changes: 'Increases healing and restores Magicka per enemy hit.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'enemy-pull',
        type: 'other',
        description: 'Pulls enemies toward you while dealing damage and healing'
      }
    ]
  },
  // Passive Skills
  {
    id: 'iron-skin',
    name: 'Iron Skin',
    description: 'Increases physical and spell resistance.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'physical-resistance',
        type: 'stat_increase',
        description: 'Physical Resistance increased by 1320',
        value: 1320
      },
      {
        id: 'spell-resistance',
        type: 'stat_increase',
        description: 'Spell Resistance increased by 1320',
        value: 1320
      }
    ]
  },
  {
    id: 'burning-heart',
    name: 'Burning Heart',
    description: 'Increases maximum Health and Health recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-health',
        type: 'stat_increase',
        description: 'Maximum Health increased by 8%',
        value: 8,
        percentage: true
      },
      {
        id: 'health-recovery',
        type: 'stat_increase',
        description: 'Health Recovery increased by 129',
        value: 129
      }
    ]
  },
  {
    id: 'dragon-blood-mastery',
    name: 'Dragon Blood Mastery',
    description: 'Reduces cost of Draconic Power abilities and increases healing received.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Draconic Power ability costs reduced by 8%',
        value: 8,
        percentage: true
      },
      {
        id: 'healing-received',
        type: 'stat_increase',
        description: 'Healing received increased by 12%',
        value: 12,
        percentage: true
      }
    ]
  },
  {
    id: 'scaled-armor',
    name: 'Scaled Armor',
    description: 'Increases block effectiveness and grants spell damage when blocking.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'block-effectiveness',
        type: 'stat_increase',
        description: 'Block effectiveness increased by 15%',
        value: 15,
        percentage: true
      },
      {
        id: 'spell-damage-block',
        type: 'other',
        description: 'Gain 129 Spell Damage for 5 seconds after blocking an attack',
        value: 129
      }
    ]
  },
  {
    id: 'elder-dragon',
    name: 'Elder Dragon',
    description: 'Increases Ultimate generation and reduces Ultimate costs.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-generation',
        type: 'stat_increase',
        description: 'Ultimate generation increased by 15%',
        value: 15,
        percentage: true
      },
      {
        id: 'ultimate-cost',
        type: 'stat_increase',
        description: 'Ultimate ability costs reduced by 8%',
        value: 8,
        percentage: true
      }
    ]
  }
];

// Earthen Heart Skill Line
export const earthenHeartSkills: Skill[] = [
  {
    id: 'stonefist',
    name: 'Stonefist',
    description: 'Launch a boulder at an enemy, dealing damage and stunning them.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    morphs: [
      {
        id: 'obsidian-shard',
        name: 'Obsidian Shard',
        description: 'Launch a shard that deals more damage and reduces enemy healing.',
        changes: 'Increases damage and applies healing reduction to target.'
      },
      {
        id: 'stone-giant',
        name: 'Stone Giant',
        description: 'Launch a boulder that grows larger and deals area damage.',
        changes: 'Projectile grows in size and deals area damage on impact.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'stun',
        type: 'crowd_control',
        description: 'Stuns target for 3 seconds',
        value: 3,
        duration: 3
      }
    ]
  },
  {
    id: 'molten-weapons',
    name: 'Molten Weapons',
    description: 'Imbue your weapons with fire, increasing Heavy Attack damage and adding burning damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2160
    },
    duration: 30,
    morphs: [
      {
        id: 'molten-armaments',
        name: 'Molten Armaments',
        description: 'Imbue weapons with fire and increase Light Attack damage.',
        changes: 'Also increases Light Attack damage and applies to group members.'
      },
      {
        id: 'igneous-weapons',
        name: 'Igneous Weapons',
        description: 'Imbue weapons and grant Major Brutality to group.',
        changes: 'Grants Major Brutality to you and nearby group members.'
      }
    ],
    buffsApplied: ['major_brutality'],
    debuffsApplied: [],
    effects: [
      {
        id: 'heavy-attack-bonus',
        type: 'stat_increase',
        description: '+40% Heavy Attack damage',
        value: 40,
        percentage: true,
        duration: 30
      },
      {
        id: 'burning-damage',
        type: 'other',
        description: 'Heavy Attacks apply burning damage',
        value: 600,
        duration: 4
      }
    ]
  },
  {
    id: 'magma-armor',
    name: 'Magma Armor',
    description: 'Encase yourself in molten rock, gaining a massive damage shield and immunity to most effects.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 9.5,
    morphs: [
      {
        id: 'corrosive-armor',
        name: 'Corrosive Armor',
        description: 'Gain immunity and your attacks ignore resistances.',
        changes: 'Your attacks ignore enemy resistances and deal additional damage.'
      },
      {
        id: 'magma-shell',
        name: 'Magma Shell',
        description: 'Gain a damage shield and nearby allies gain shields too.',
        changes: 'Grants damage shields to nearby group members as well.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'massive-shield',
        type: 'shield',
        description: 'Absorbs massive amounts of damage',
        value: 30000
      },
      {
        id: 'cc-immunity',
        type: 'other',
        description: 'Immunity to most crowd control effects',
        duration: 9.5
      },
      {
        id: 'resistance-ignore',
        type: 'other',
        description: 'Attacks ignore enemy resistances',
        duration: 9.5
      }
    ]
  },
  {
    id: 'petrify',
    name: 'Petrify',
    description: 'Encase an enemy in stone, stunning them and making them take more damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    range: 28,
    duration: 3,
    morphs: [
      {
        id: 'fossilize',
        name: 'Fossilize',
        description: 'Stun the enemy and apply Major Breach for longer duration.',
        changes: 'Applies Major Breach and increases stun duration to 4 seconds.'
      },
      {
        id: 'shattering-rocks',
        name: 'Shattering Rocks',
        description: 'When stun ends, enemy explodes dealing damage to nearby foes.',
        changes: 'Target explodes when stun ends, damaging nearby enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_breach'],
    effects: [
      {
        id: 'stun',
        type: 'crowd_control',
        description: 'Stuns target and increases damage they take',
        duration: 3
      },
      {
        id: 'vulnerability',
        type: 'stat_decrease',
        description: '+40% damage taken while stunned',
        value: 40,
        percentage: true
      }
    ]
  },
  {
    id: 'obsidian-shield',
    name: 'Obsidian Shield',
    description: 'Create a shield of volcanic glass that reflects damage and grants armor.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 30,
    morphs: [
      {
        id: 'igneous-shield',
        name: 'Igneous Shield',
        description: 'Shield also grants Major Mending to you and nearby group members.',
        changes: 'Provides Major Mending to you and nearby allies for 30 seconds.'
      },
      {
        id: 'fragmented-shield',
        name: 'Fragmented Shield',
        description: 'When shield is depleted, it explodes dealing area damage.',
        changes: 'Explodes when depleted, dealing damage to nearby enemies.'
      }
    ],
    buffsApplied: ['major_mending'],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-shield',
        type: 'shield',
        description: 'Absorbs damage and reflects some back to attackers',
        value: 2400
      },
      {
        id: 'armor-bonus',
        type: 'stat_increase',
        description: '+20% physical and spell resistance while active',
        value: 20,
        percentage: true
      }
    ]
  },
  {
    id: 'ash-cloud',
    name: 'Ash Cloud',
    description: 'Create a cloud of volcanic ash that blinds and damages enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    range: 28,
    radius: 8,
    duration: 15,
    morphs: [
      {
        id: 'cinder-storm',
        name: 'Cinder Storm',
        description: 'Cloud deals fire damage over time to enemies within.',
        changes: 'Adds fire damage over time to enemies in the area.'
      },
      {
        id: 'eruption',
        name: 'Eruption',
        description: 'Cloud periodically erupts, dealing burst damage.',
        changes: 'Erupts every 3 seconds dealing burst damage to enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim'],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'fire',
      isDoT: true,
      dotTicks: 15
    },
    effects: [
      {
        id: 'blind',
        type: 'crowd_control',
        description: 'Reduces enemy accuracy by 70%',
        value: 70,
        percentage: true,
        duration: 15
      }
    ]
  },
  {
    id: 'molten-weapons',
    name: 'Molten Weapons',
    description: 'Imbue your weapons with molten lava, increasing weapon damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    duration: 60,
    morphs: [
      {
        id: 'igneous-weapons',
        name: 'Igneous Weapons',
        description: 'Also grants Major Brutality and Major Sorcery to group members.',
        changes: 'Provides weapon and spell damage buffs to nearby group members.'
      },
      {
        id: 'molten-armaments',
        name: 'Molten Armaments',
        description: 'Heavy attacks deal additional fire damage and restore resources.',
        changes: 'Heavy attacks deal bonus fire damage and restore Stamina/Magicka.'
      }
    ],
    buffsApplied: ['major_brutality', 'major_sorcery'],
    debuffsApplied: [],
    effects: [
      {
        id: 'weapon-damage',
        type: 'stat_increase',
        description: 'Weapon Damage increased by 20%',
        value: 20,
        percentage: true,
        duration: 60
      },
      {
        id: 'fire-enchant',
        type: 'other',
        description: 'Weapon attacks have chance to apply burning',
        value: 25,
        percentage: true
      }
    ]
  },
  // Passive Skills
  {
    id: 'eternal-mountain',
    name: 'Eternal Mountain',
    description: 'Increases physical damage and reduces fall damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'physical-damage',
        type: 'stat_increase',
        description: 'Physical Damage increased by 6%',
        value: 6,
        percentage: true
      },
      {
        id: 'fall-damage',
        type: 'stat_increase',
        description: 'Fall damage reduced by 100%',
        value: 100,
        percentage: true
      }
    ]
  },
  {
    id: 'mountain-blessing',
    name: 'Mountain Blessing',
    description: 'Increases maximum Health and Stamina recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-health',
        type: 'stat_increase',
        description: 'Maximum Health increased by 6%',
        value: 6,
        percentage: true
      },
      {
        id: 'stamina-recovery',
        type: 'stat_increase',
        description: 'Stamina Recovery increased by 129',
        value: 129
      }
    ]
  },
  {
    id: 'stoneheart',
    name: 'Stoneheart',
    description: 'Reduces cost of Earthen Heart abilities and increases healing done.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Earthen Heart ability costs reduced by 8%',
        value: 8,
        percentage: true
      },
      {
        id: 'healing-done',
        type: 'stat_increase',
        description: 'Healing done increased by 12%',
        value: 12,
        percentage: true
      }
    ]
  },
  {
    id: 'molten-core',
    name: 'Molten Core',
    description: 'Grants chance to generate Ultimate when taking damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-generation',
        type: 'other',
        description: '6% chance to generate 1 Ultimate when taking damage',
        value: 6,
        percentage: true
      }
    ]
  },
  {
    id: 'helping-hands',
    name: 'Helping Hands',
    description: 'Increases block effectiveness and restores resources when blocking.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'block-effectiveness',
        type: 'stat_increase',
        description: 'Block effectiveness increased by 15%',
        value: 15,
        percentage: true
      },
      {
        id: 'resource-restore',
        type: 'other',
        description: 'Restore 108 Stamina and Magicka when blocking an attack',
        value: 108
      }
    ]
  }
];

// Export all Dragonknight skills organized by skill line
export const dragonknightSkills = {
  ardentFlame: ardentFlameSkills,
  draconicPower: draconicPowerSkills,
  earthenHeart: earthenHeartSkills
};

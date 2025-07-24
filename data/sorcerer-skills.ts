// Sorcerer Class Skills
import { Skill } from './skills';

// Dark Magic Skill Line
export const darkMagicSkills: Skill[] = [
  {
    id: 'crystal-shard',
    name: 'Crystal Shard',
    description: 'Conjure dark crystals to bombard an enemy, dealing magic damage. Has a chance to deal increased damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    morphs: [
      {
        id: 'crystal-fragments',
        name: 'Crystal Fragments',
        description: 'Has a chance to become instant cast and deal increased damage.',
        changes: 'Casting other abilities has a chance to make this instant and more powerful.'
      },
      {
        id: 'crystal-blast',
        name: 'Crystal Blast',
        description: 'Deals damage to the target and nearby enemies.',
        changes: 'Explosion deals damage to enemies near the target.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'proc-chance',
        type: 'other',
        description: '35% chance to proc for increased damage',
        value: 35,
        percentage: true
      }
    ]
  },
  {
    id: 'encase',
    name: 'Encase',
    description: 'Bind enemies in place with dark magic, immobilizing them and dealing damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    range: 28,
    radius: 8,
    duration: 8,
    morphs: [
      {
        id: 'restraining-prison',
        name: 'Restraining Prison',
        description: 'Enemies take more damage while immobilized.',
        changes: 'Immobilized enemies take additional damage from all sources.'
      },
      {
        id: 'shattering-prison',
        name: 'Shattering Prison',
        description: 'When effect ends, deals damage to the target.',
        changes: 'Explodes when duration ends, dealing damage to target.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim'],
    damage: {
      baseDamage: 435,
      scalingFactor: 0.375,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'immobilize',
        type: 'crowd_control',
        description: 'Immobilizes enemies for 8 seconds',
        duration: 8
      }
    ]
  },
  {
    id: 'rune-prison',
    name: 'Rune Prison',
    description: 'Trap an enemy in a runic prison, stunning them but making them immune to other effects.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    range: 28,
    duration: 8,
    morphs: [
      {
        id: 'rune-cage',
        name: 'Rune Cage',
        description: 'Target takes damage when the effect ends.',
        changes: 'Deals damage to target when stun expires or is broken.'
      },
      {
        id: 'defensive-rune',
        name: 'Defensive Rune',
        description: 'Place a rune on the ground that stuns enemies who trigger it.',
        changes: 'Places a ground rune that activates when enemies approach.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'stun',
        type: 'crowd_control',
        description: 'Stuns target but makes them immune to other effects',
        duration: 8
      }
    ]
  },
  {
    id: 'negate-magic',
    name: 'Negate Magic',
    description: 'Dispel enemy magic in a large area, removing their buffs and preventing casting.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    range: 28,
    radius: 12,
    duration: 12,
    morphs: [
      {
        id: 'suppression-field',
        name: 'Suppression Field',
        description: 'Enemies in the area take damage over time.',
        changes: 'Adds damage over time to enemies within the field.'
      },
      {
        id: 'absorption-field',
        name: 'Absorption Field',
        description: 'You gain Magicka when enemies are damaged in the field.',
        changes: 'Restores Magicka when enemies take damage in the area.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 12
    },
    effects: [
      {
        id: 'silence',
        type: 'crowd_control',
        description: 'Prevents enemies from casting abilities',
        duration: 12
      },
      {
        id: 'dispel',
        type: 'other',
        description: 'Removes buffs from enemies in area'
      }
    ]
  },
  {
    id: 'dark-exchange',
    name: 'Dark Exchange',
    description: 'Channel to exchange stamina and health for magicka.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 5130
    },
    duration: 4,
    morphs: [
      {
        id: 'dark-deal',
        name: 'Dark Deal',
        description: 'Faster channel and also restores health.',
        changes: '1 second channel, also restores health equal to magicka gained.'
      },
      {
        id: 'dark-conversion',
        name: 'Dark Conversion',
        description: 'No stamina cost but converts health to magicka and stamina.',
        changes: 'Costs health instead, restores both magicka and stamina.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-exchange',
        type: 'other',
        description: 'Channel to exchange stamina for magicka',
        duration: 4
      }
    ]
  },
  {
    id: 'rune-prison',
    name: 'Rune Prison',
    description: 'Bind enemy in a rune prison, stunning them and dealing damage over time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    range: 28,
    duration: 8,
    morphs: [
      {
        id: 'rune-cage',
        name: 'Rune Cage',
        description: 'Also affects nearby enemies when it expires.',
        changes: 'Explodes when ending, stunning enemies within 8 meters.'
      },
      {
        id: 'defensive-rune',
        name: 'Defensive Rune',
        description: 'Can be cast on allies to grant damage shield.',
        changes: 'Can target allies, grants damage shield instead of stunning.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 8
    },
    effects: [
      {
        id: 'rune-bind',
        type: 'crowd_control',
        description: 'Magical binding that stuns and damages',
        duration: 8
      }
    ]
  },
  {
    id: 'negate-magic',
    name: 'Negate Magic',
    description: 'Create a globe of magic suppression that silences enemies and dispels effects.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    range: 28,
    radius: 8,
    duration: 12,
    morphs: [
      {
        id: 'suppression-field',
        name: 'Suppression Field',
        description: 'Larger area and moves with you.',
        changes: '12 meter radius, follows your position.'
      },
      {
        id: 'absorption-field',
        name: 'Absorption Field',
        description: 'Heals allies inside the field.',
        changes: 'Heals allies for 348 health per second while inside.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['silence'],
    healing: {
      baseHealing: 348,
      scalingFactor: 0.3,
      isHoT: true,
      hotTicks: 12
    },
    effects: [
      {
        id: 'magic-suppression',
        type: 'other',
        description: 'Suppresses magic abilities and dispels effects',
        duration: 12
      }
    ]
  },
  // Passive Skills
  {
    id: 'blood-magic',
    name: 'Blood Magic',
    description: 'Dark Magic abilities heal you when cast.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'heal-on-cast',
        type: 'other',
        description: 'Dark Magic abilities heal you for 600 health when cast'
      }
    ]
  },
  {
    id: 'unholy-knowledge',
    name: 'Unholy Knowledge',
    description: 'Increases max magicka for each Dark Magic ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Maximum Magicka increased by 8% per Dark Magic ability slotted',
        value: 8,
        percentage: true
      }
    ]
  },
  {
    id: 'persistence',
    name: 'Persistence',
    description: 'Reduces the cost of Dark Magic abilities and increases duration.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Dark Magic ability costs reduced by 8%',
        value: 8,
        percentage: true
      },
      {
        id: 'duration-increase',
        type: 'stat_increase',
        description: 'Dark Magic ability durations increased by 15%',
        value: 15,
        percentage: true
      }
    ]
  },
  {
    id: 'exploitation',
    name: 'Exploitation',
    description: 'Increases spell damage based on enemies affected by Dark Magic.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-bonus',
        type: 'stat_increase',
        description: 'Spell Damage increased by 65 per enemy affected by Dark Magic (max 5)',
        value: 65
      }
    ]
  },
  {
    id: 'arcane-knowledge',
    name: 'Arcane Knowledge',
    description: 'Increases spell critical chance and magicka recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-chance',
        type: 'stat_increase',
        description: 'Spell Critical increased by 657',
        value: 657
      },
      {
        id: 'magicka-recovery',
        type: 'stat_increase',
        description: 'Magicka Recovery increased by 129',
        value: 129
      }
    ]
  }
];

// Daedric Summoning Skill Line
export const daedricSummoningSkills: Skill[] = [
  {
    id: 'summon-familiar',
    name: 'Summon Familiar',
    description: 'Summon a Daedric familiar to fight beside you, dealing shock damage to enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    morphs: [
      {
        id: 'unstable-familiar',
        name: 'Unstable Familiar',
        description: 'Familiar can be commanded to explode, dealing area damage.',
        changes: 'Can activate to make familiar explode for area damage.'
      },
      {
        id: 'volatile-familiar',
        name: 'Volatile Familiar',
        description: 'Familiar deals more damage and has a chance to stun.',
        changes: 'Familiar attacks have a chance to stun enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'pet-summon',
        type: 'other',
        description: 'Summons a permanent Daedric familiar'
      }
    ]
  },
  {
    id: 'summon-twilight-matriarch',
    name: 'Summon Twilight Matriarch',
    description: 'Summon a Twilight Matriarch to aid you in battle. The matriarch can heal you and your allies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    morphs: [
      {
        id: 'twilight-matriarch',
        name: 'Twilight Matriarch',
        description: 'Matriarch can be commanded to heal you or an ally.',
        changes: 'Can activate to command matriarch to cast a heal.'
      },
      {
        id: 'twilight-tormentor',
        name: 'Twilight Tormentor',
        description: 'Matriarch deals more damage and applies a debuff to enemies.',
        changes: 'Matriarch attacks apply Minor Vulnerability to enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_vulnerability'],
    damage: {
      baseDamage: 435,
      scalingFactor: 0.375,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'pet-summon-healer',
        type: 'other',
        description: 'Summons a permanent Twilight Matriarch that can heal'
      }
    ]
  },
  {
    id: 'daedric-curse',
    name: 'Daedric Curse',
    description: 'Curse an enemy with dark magic, dealing damage after a delay and spreading to nearby enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    duration: 6,
    morphs: [
      {
        id: 'daedric-prey',
        name: 'Daedric Prey',
        description: 'Curse deals more damage and your pets deal increased damage to cursed target.',
        changes: 'Increases pet damage against cursed target by 45%.'
      },
      {
        id: 'velocious-curse',
        name: 'Velocious Curse',
        description: 'Curse explodes twice, dealing damage after 3.5 seconds and 8.5 seconds.',
        changes: 'Creates two explosions at different timings.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'delay-explosion',
        type: 'other',
        description: 'Explodes after 6 seconds, spreading to nearby enemies',
        duration: 6
      }
    ]
  },
  {
    id: 'conjured-ward',
    name: 'Conjured Ward',
    description: 'Conjure a protective barrier that absorbs damage, with strength based on Maximum Magicka.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    morphs: [
      {
        id: 'hardened-ward',
        name: 'Hardened Ward',
        description: 'Shield is stronger and lasts longer.',
        changes: 'Increases shield strength by 30% and duration.'
      },
      {
        id: 'empowered-ward',
        name: 'Empowered Ward',
        description: 'Shield also affects a nearby ally.',
        changes: 'Grants a shield to the nearest ally as well.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'magicka-shield',
        type: 'shield',
        description: 'Absorbs damage based on Maximum Magicka',
        value: 30,
        percentage: true
      }
    ]
  },
  {
    id: 'summon-storm-atronach',
    name: 'Summon Storm Atronach',
    description: 'Summon a Storm Atronach at target location that attacks enemies with lightning.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    range: 28,
    duration: 15,
    morphs: [
      {
        id: 'greater-storm-atronach',
        name: 'Greater Storm Atronach',
        description: 'Atronach is stronger and attacks faster.',
        changes: 'Increases Atronach health and attack speed by 50%.'
      },
      {
        id: 'charged-atronach',
        name: 'Charged Atronach',
        description: 'Atronach grants you and allies Major Berserk.',
        changes: 'You and nearby allies gain Major Berserk while active.'
      }
    ],
    buffsApplied: ['major_berserk'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'atronach-summon',
        type: 'other',
        description: 'Summons Storm Atronach for 15 seconds',
        duration: 15
      }
    ]
  },
  {
    id: 'bound-aegis',
    name: 'Bound Aegis',
    description: 'Bind protective Daedric spirits to yourself, gaining damage reduction.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 60,
    morphs: [
      {
        id: 'bound-armor',
        name: 'Bound Armor',
        description: 'Also increases max health and provides spell resistance.',
        changes: 'Increases max Health by 8% and grants Major Ward.'
      },
      {
        id: 'bound-aegis-morph',
        name: 'Bound Aegis',
        description: 'Reflects damage back to attackers.',
        changes: 'Reflects 15% of damage taken back to attackers.'
      }
    ],
    buffsApplied: ['major_ward'],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-reduction',
        type: 'stat_increase',
        description: 'Damage taken reduced by 8%',
        value: 8,
        percentage: true,
        duration: 60
      }
    ]
  },
  {
    id: 'summon-storm-atronach',
    name: 'Summon Storm Atronach',
    description: 'Summon a Storm Atronach that casts lightning spells at enemies.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    duration: 30,
    morphs: [
      {
        id: 'greater-storm-atronach',
        name: 'Greater Storm Atronach',
        description: 'Stronger atronach that lasts longer and has more health.',
        changes: '45 second duration, double health and damage.'
      },
      {
        id: 'charged-atronach',
        name: 'Charged Atronach',
        description: 'Applies concussion and grants you spell power.',
        changes: 'Atronach attacks apply concussion, grants you Minor Sorcery.'
      }
    ],
    buffsApplied: ['minor_sorcery'],
    debuffsApplied: ['concussion'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'atronach-summon',
        type: 'other',
        description: 'Powerful Storm Atronach fights independently',
        duration: 30
      }
    ]
  },
  // Passive Skills
  {
    id: 'rebate',
    name: 'Rebate',
    description: 'Daedric Summoning abilities have a chance to restore magicka.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'magicka-return',
        type: 'other',
        description: '15% chance for Daedric Summoning abilities to restore 600 Magicka'
      }
    ]
  },
  {
    id: 'power-stone',
    name: 'Power Stone',
    description: 'Increases max magicka and reduces ultimate cost.',
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
        id: 'ultimate-cost',
        type: 'stat_increase',
        description: 'Ultimate cost reduced by 15%',
        value: 15,
        percentage: true
      }
    ]
  },
  {
    id: 'daedric-protection',
    name: 'Daedric Protection',
    description: 'Increases health and provides spell resistance.',
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
        id: 'spell-resistance',
        type: 'stat_increase',
        description: 'Spell Resistance increased by 1320',
        value: 1320
      }
    ]
  },
  {
    id: 'expert-summoner',
    name: 'Expert Summoner',
    description: 'Increases duration and damage of summoned creatures.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'summon-duration',
        type: 'stat_increase',
        description: 'Summoned creature duration increased by 50%',
        value: 50,
        percentage: true
      },
      {
        id: 'summon-damage',
        type: 'stat_increase',
        description: 'Summoned creature damage increased by 15%',
        value: 15,
        percentage: true
      }
    ]
  },
  {
    id: 'daedric-prey',
    name: 'Daedric Prey',
    description: 'Increases spell damage for each Daedric Summoning ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Spell Damage increased by 129 per Daedric Summoning ability slotted',
        value: 129
      }
    ]
  }
];

// Storm Calling Skill Line
export const stormCallingSkills: Skill[] = [
  {
    id: 'lightning-form',
    name: 'Lightning Form',
    description: 'Transform into lightning, gaining Major Expedition and dealing shock damage to nearby enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    duration: 15,
    morphs: [
      {
        id: 'boundless-storm',
        name: 'Boundless Storm',
        description: 'Increases duration and size of lightning aura.',
        changes: 'Duration increased to 20 seconds, larger damage radius.'
      },
      {
        id: 'hurricane',
        name: 'Hurricane',
        description: 'Converts to Stamina cost and increases damage over time.',
        changes: 'Uses Stamina, damage increases the longer it remains active.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: [],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'shock',
      isDoT: true,
      dotTicks: 15
    },
    effects: [
      {
        id: 'movement-speed',
        type: 'stat_increase',
        description: '+30% movement speed',
        value: 30,
        percentage: true,
        duration: 15
      }
    ]
  },
  {
    id: 'mages-fury',
    name: "Mage's Fury",
    description: 'Call down lightning to strike an enemy. Deals additional damage if target is low on Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    morphs: [
      {
        id: 'mages-wrath',
        name: "Mage's Wrath",
        description: 'Target explodes when killed, dealing damage to nearby enemies.',
        changes: 'Killing target causes explosion damaging nearby enemies.'
      },
      {
        id: 'endless-fury',
        name: 'Endless Fury',
        description: 'Refunds Magicka if target dies within 4 seconds.',
        changes: 'Returns full Magicka cost if target dies shortly after.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'execute-bonus',
        type: 'other',
        description: '+300% damage to enemies below 20% Health',
        value: 300,
        percentage: true
      }
    ]
  },
  {
    id: 'streak',
    name: 'Streak',
    description: 'Transform into lightning and streak forward, dealing damage and stunning enemies in your path.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    range: 15,
    morphs: [
      {
        id: 'ball-of-lightning',
        name: 'Ball of Lightning',
        description: 'Become immune to damage while streaking and gain a damage shield.',
        changes: 'Grants damage immunity during cast and shield after.'
      },
      {
        id: 'critical-surge',
        name: 'Critical Surge',
        description: 'Does not move you but deals more damage and heals you.',
        changes: 'No movement, increased damage, heals based on damage dealt.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'teleport',
        type: 'other',
        description: 'Teleports you 15 meters forward'
      },
      {
        id: 'stun',
        type: 'crowd_control',
        description: 'Stuns enemies in path for 3 seconds',
        duration: 3
      }
    ]
  },
  {
    id: 'overload',
    name: 'Overload',
    description: 'Charge your weapons with power, replacing Light Attacks with lightning projectiles.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 150
    },
    duration: 40,
    morphs: [
      {
        id: 'energy-overload',
        name: 'Energy Overload',
        description: 'Attacks restore Magicka and deal splash damage.',
        changes: 'Light attacks restore Magicka and hit multiple enemies.'
      },
      {
        id: 'power-overload',
        name: 'Power Overload',
        description: 'Attacks deal significantly more damage.',
        changes: 'Light attacks deal 125% more damage.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'weapon-transform',
        type: 'other',
        description: 'Replaces Light Attacks with lightning projectiles',
        duration: 40
      }
    ]
  },
  {
    id: 'lightning-splash',
    name: 'Lightning Splash',
    description: 'Create a pool of lightning at target location that damages enemies standing in it.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    radius: 4,
    duration: 10,
    morphs: [
      {
        id: 'liquid-lightning',
        name: 'Liquid Lightning',
        description: 'Increases area and applies concussion to enemies.',
        changes: 'Larger radius and applies Minor Vulnerability to enemies.'
      },
      {
        id: 'lightning-flood',
        name: 'Lightning Flood',
        description: 'Increases duration and damage.',
        changes: 'Lasts longer and deals increased damage over time.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_vulnerability'],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'shock',
      isDoT: true,
      dotTicks: 10
    },
    effects: [
      {
        id: 'ground-aoe',
        type: 'other',
        description: 'Creates persistent lightning pool for 10 seconds',
        duration: 10
      }
    ]
  },
  {
    id: 'power-surge',
    name: 'Power Surge',
    description: 'Increase your Weapon and Spell Damage. Critical hits heal you.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 33,
    morphs: [
      {
        id: 'critical-surge',
        name: 'Critical Surge',
        description: 'Heals for more and increases critical chance.',
        changes: 'Improved healing and grants Minor Prophecy.'
      },
      {
        id: 'power-extraction',
        name: 'Power Extraction',
        description: 'Also restores Magicka when you deal critical damage.',
        changes: 'Critical hits restore Magicka as well as healing.'
      }
    ],
    buffsApplied: ['major_sorcery', 'minor_prophecy'],
    debuffsApplied: [],
    healing: {
      baseHealing: 1044,
      scalingFactor: 0.9
    },
    effects: [
      {
        id: 'weapon-spell-damage',
        type: 'stat_increase',
        description: 'Increases Weapon and Spell Damage by 20%',
        value: 20,
        percentage: true,
        duration: 33
      },
      {
        id: 'critical-heal',
        type: 'other',
        description: 'Critical hits heal you',
        duration: 33
      }
    ]
  },
  {
    id: 'overload',
    name: 'Overload',
    description: 'Overcharge your attacks with electricity, replacing light and heavy attacks.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 150
    },
    duration: 40,
    morphs: [
      {
        id: 'energy-overload',
        name: 'Energy Overload',
        description: 'Light attacks restore magicka, heavy attacks splash.',
        changes: 'Light attacks restore 300 Magicka, heavy attacks hit multiple enemies.'
      },
      {
        id: 'power-overload',
        name: 'Power Overload',
        description: 'Increases damage and attack speed.',
        changes: 'Attacks deal 50% more damage and are 25% faster.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'overcharged-attacks',
        type: 'other',
        description: 'Replaces light and heavy attacks with lightning',
        duration: 40
      }
    ]
  },
  // Passive Skills
  {
    id: 'capacitor',
    name: 'Capacitor',
    description: 'Storm Calling abilities restore magicka when cast.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'magicka-return',
        type: 'other',
        description: 'Storm Calling abilities restore 400 Magicka when cast'
      }
    ]
  },
  {
    id: 'amplitude',
    name: 'Amplitude',
    description: 'Increases shock damage and reduces shock ability costs.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'shock-damage',
        type: 'stat_increase',
        description: 'Shock Damage increased by 15%',
        value: 15,
        percentage: true
      },
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Storm Calling ability costs reduced by 8%',
        value: 8,
        percentage: true
      }
    ]
  },
  {
    id: 'conductivity',
    name: 'Conductivity',
    description: 'Critical strikes with Storm Calling abilities restore magicka.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'crit-return',
        type: 'other',
        description: 'Critical strikes with Storm Calling abilities restore 600 Magicka'
      }
    ]
  },
  {
    id: 'energized',
    name: 'Energized',
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
    id: 'expert-mage',
    name: 'Expert Mage',
    description: 'Increases max magicka for each Storm Calling ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Maximum Magicka increased by 8% per Storm Calling ability slotted',
        value: 8,
        percentage: true
      }
    ]
  }
];

// Export all Sorcerer skills organized by skill line
export const sorcererSkills = {
  darkMagic: darkMagicSkills,
  daedricSummoning: daedricSummoningSkills,
  stormCalling: stormCallingSkills
};

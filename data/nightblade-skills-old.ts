// Nightblade Class Skills
import { Skill } from './skills';

// Assassination Skill Line
export const assassinationSkills: Skill[] = [
  {
    id: 'assassinate',
    name: 'Assassinate',
    description: 'Strike an enemy from the shadows, dealing massive damage. Deals more damage from stealth or invisibility.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 8,
    morphs: [
      {
        id: 'killer-blade',
        name: 'Killer Blade',
        description: 'Deals more damage and heals you if target dies within 2 seconds.',
        changes: 'Increased damage and heals if target dies shortly after.'
      },
      {
        id: 'impale',
        name: 'Impale',
        description: 'Deals more damage based on target missing Health.',
        changes: 'Damage increases based on how much Health target is missing.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 2323,
      scalingFactor: 2.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'stealth-bonus',
        type: 'other',
        description: '+300% damage from stealth or invisibility',
        value: 300,
        percentage: true
      }
    ]
  },
  {
    id: 'teleport-strike',
    name: 'Teleport Strike',
    description: 'Flash through the shadows and strike an enemy, dealing damage and stunning them.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 3780
    },
    range: 22,
    morphs: [
      {
        id: 'ambush',
        name: 'Ambush',
        description: 'Increases your damage done for 5 seconds after teleporting.',
        changes: 'Grants Major Berserk for 5 seconds after teleporting.'
      },
      {
        id: 'lotus-fan',
        name: 'Lotus Fan',
        description: 'Teleports you behind the target and deals area damage.',
        changes: 'Moves you behind target and damages nearby enemies.'
      }
    ],
    buffsApplied: ['major_berserk'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'teleport',
        type: 'other',
        description: 'Teleports you to target location'
      },
      {
        id: 'stun',
        type: 'crowd_control',
        description: 'Stuns target for 2.5 seconds',
        duration: 2.5
      }
    ]
  },
  {
    id: 'mark-target',
    name: 'Mark Target',
    description: 'Mark an enemy, revealing them and increasing your damage against them.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2160
    },
    range: 28,
    duration: 60,
    morphs: [
      {
        id: 'piercing-mark',
        name: 'Piercing Mark',
        description: 'Mark ignores armor and reveals target even when stealthed.',
        changes: 'Damage ignores target armor and reveals stealth enemies.'
      },
      {
        id: 'reapers-mark',
        name: "Reaper's Mark",
        description: 'Killing marked target heals you and nearby allies.',
        changes: 'Killing target heals you and nearby group members.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_breach'],
    effects: [
      {
        id: 'damage-bonus',
        type: 'stat_increase',
        description: '+20% damage against marked target',
        value: 20,
        percentage: true,
        duration: 60
      },
      {
        id: 'reveal',
        type: 'other',
        description: 'Reveals target location',
        duration: 60
      }
    ]
  },
  {
    id: 'death-stroke',
    name: 'Death Stroke',
    description: 'Perform a devastating finishing move that deals more damage based on target missing Health.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 120
    },
    range: 8,
    morphs: [
      {
        id: 'incapacitating-strike',
        name: 'Incapacitating Strike',
        description: 'Stuns target and applies Major Defile, reducing their healing.',
        changes: 'Adds stun and Major Defile effects to target.'
      },
      {
        id: 'soul-harvest',
        name: 'Soul Harvest',
        description: 'Gains Ultimate for each nearby enemy when cast.',
        changes: 'Generates Ultimate based on number of nearby enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_defile'],
    damage: {
      baseDamage: 1200,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'execute-scaling',
        type: 'other',
        description: 'Damage increases based on target missing Health',
        value: 300,
        percentage: true
      }
    ]
  },
  {
    id: 'blade-cloak',
    name: 'Blade Cloak',
    description: 'Surround yourself with spinning blades that damage nearby enemies.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 3780
    },
    radius: 8,
    duration: 20,
    morphs: [
      {
        id: 'deadly-cloak',
        name: 'Deadly Cloak',
        description: 'Increases damage and grants Major Expedition when hitting enemies.',
        changes: 'Higher damage and grants Major Expedition for 4 seconds when dealing damage.'
      },
      {
        id: 'razor-cloak',
        name: 'Razor Cloak',
        description: 'Also grants damage shield and reflects projectiles.',
        changes: 'Grants damage shield and reflects projectiles back at attackers.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: [],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'physical',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'spinning-blades',
        type: 'other',
        description: 'Spinning blades that damage enemies every second',
        duration: 20
      }
    ]
  },
  {
    id: 'flying-blade',
    name: 'Flying Blade',
    description: 'Hurl a blade that bounces between enemies, dealing damage.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'lethal-arrow',
        name: 'Lethal Arrow',
        description: 'Bounces more times and applies poison.',
        changes: 'Bounces up to 6 times and applies poisoned for 10 seconds.'
      },
      {
        id: 'focused-aim',
        name: 'Focused Aim',
        description: 'Pierces through enemies and increases critical chance.',
        changes: 'Pierces all enemies in line and grants +50% critical chance.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['poisoned'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'bouncing-blade',
        type: 'other',
        description: 'Blade bounces between up to 3 nearby enemies'
      }
    ]
  },
  // Passive Skills
  {
    id: 'master-assassin',
    name: 'Master Assassin',
    description: 'Increases critical strike damage and stealth movement speed.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-damage',
        type: 'stat_increase',
        description: 'Critical Strike Damage increased by 15%',
        value: 15,
        percentage: true
      },
      {
        id: 'stealth-speed',
        type: 'stat_increase',
        description: 'Movement speed while stealthed increased by 25%',
        value: 25,
        percentage: true
      }
    ]
  },
  {
    id: 'executioner',
    name: 'Executioner',
    description: 'Deal more damage to low health enemies.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'execute-damage',
        type: 'stat_increase',
        description: 'Damage increased by 20% against enemies below 25% Health',
        value: 20,
        percentage: true
      }
    ]
  },
  {
    id: 'hemorrhage',
    name: 'Hemorrhage',
    description: 'Critical strikes cause bleeding damage over time.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'bleed-on-crit',
        type: 'other',
        description: 'Critical strikes apply bleeding for 348 damage over 10 seconds'
      }
    ]
  },
  {
    id: 'pressure-points',
    name: 'Pressure Points',
    description: 'Increases critical strike chance and weapon damage.',
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
        id: 'weapon-damage',
        type: 'stat_increase',
        description: 'Weapon Damage increased by 129',
        value: 129
      }
    ]
  },
  {
    id: 'lethality',
    name: 'Lethality',
    description: 'Increases weapon and spell damage for each assassination ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Weapon and Spell Damage increased by 129 per Assassination ability slotted',
        value: 129
      }
    ]
  }
];

// Shadow Skill Line
export const shadowSkills: Skill[] = [
  {
    id: 'shadow-cloak',
    name: 'Shadow Cloak',
    description: 'Become invisible for 3 seconds, gaining Major Resolve and movement speed.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    duration: 3,
    morphs: [
      {
        id: 'shadowy-disguise',
        name: 'Shadowy Disguise',
        description: 'Your next attack from stealth will critically strike.',
        changes: 'Guarantees critical strike on next attack from stealth.'
      },
      {
        id: 'dark-cloak',
        name: 'Dark Cloak',
        description: 'Removes damage over time effects and heals you.',
        changes: 'Cleanses DoT effects and provides healing over time.'
      }
    ],
    buffsApplied: ['major_resolve'],
    debuffsApplied: [],
    effects: [
      {
        id: 'invisibility',
        type: 'other',
        description: 'Become invisible for 3 seconds',
        duration: 3
      },
      {
        id: 'speed-boost',
        type: 'stat_increase',
        description: '+25% movement speed while invisible',
        value: 25,
        percentage: true,
        duration: 3
      }
    ]
  },
  {
    id: 'veiled-strike',
    name: 'Veiled Strike',
    description: 'Strike from the shadows, dealing damage and stunning target. More effective from stealth.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 8,
    morphs: [
      {
        id: 'surprise-attack',
        name: 'Surprise Attack',
        description: 'Ignores armor and applies Major Fracture to target.',
        changes: 'Damage ignores armor and reduces target physical resistance.'
      },
      {
        id: 'concealed-weapon',
        name: 'Concealed Weapon',
        description: 'Increases your movement speed and weapon damage while slotted.',
        changes: 'Passive bonuses to speed and damage while on action bar.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_fracture'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'stun',
        type: 'crowd_control',
        description: 'Stuns target for 4 seconds from stealth',
        duration: 4
      },
      {
        id: 'armor-ignore',
        type: 'other',
        description: 'Ignores target armor'
      }
    ]
  },
  {
    id: 'path-of-darkness',
    name: 'Path of Darkness',
    description: 'Create a path of shadows that grants movement speed and invisibility to allies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 10,
    morphs: [
      {
        id: 'twisting-path',
        name: 'Twisting Path',
        description: 'Path deals damage to enemies and heals allies.',
        changes: 'Damages enemies and heals allies who walk through it.'
      },
      {
        id: 'refreshing-path',
        name: 'Refreshing Path',
        description: 'Path restores Magicka and Stamina to allies.',
        changes: 'Restores resources to allies who use the path.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: [],
    healing: {
      baseHealing: 290,
      scalingFactor: 0.25,
      isHoT: true,
      hotTicks: 10
    },
    effects: [
      {
        id: 'shadow-path',
        type: 'other',
        description: 'Creates a path granting 70% movement speed',
        duration: 10
      },
      {
        id: 'minor-invisibility',
        type: 'other',
        description: 'Grants brief invisibility when entering path',
        duration: 2
      }
    ]
  },
  {
    id: 'consuming-darkness',
    name: 'Consuming Darkness',
    description: 'Create a veil of shadows that reduces enemy accuracy and grants you damage reduction.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    radius: 8,
    duration: 13,
    morphs: [
      {
        id: 'bolstering-darkness',
        name: 'Bolstering Darkness',
        description: 'You and allies gain damage reduction and healing.',
        changes: 'Grants damage reduction and healing over time to allies.'
      },
      {
        id: 'veil-of-blades',
        name: 'Veil of Blades',
        description: 'Deals damage to enemies in the area over time.',
        changes: 'Damages enemies within the shadow area continuously.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim'],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 13
    },
    effects: [
      {
        id: 'miss-chance',
        type: 'other',
        description: 'Enemies have 70% chance to miss attacks',
        value: 70,
        percentage: true,
        duration: 13
      },
      {
        id: 'damage-reduction',
        type: 'stat_increase',
        description: '+30% damage reduction for you',
        value: 30,
        percentage: true,
        duration: 13
      }
    ]
  },
  {
    id: 'aspect-of-terror',
    name: 'Aspect of Terror',
    description: 'Invoke a dark spirit to fear nearby enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    radius: 8,
    duration: 4,
    morphs: [
      {
        id: 'mass-hysteria',
        name: 'Mass Hysteria',
        description: 'Affects more enemies and applies Minor Maim.',
        changes: 'Fears up to 6 enemies and applies Minor Maim for 4 seconds.'
      },
      {
        id: 'manifestation-of-terror',
        name: 'Manifestation of Terror',
        description: 'Also immobilizes enemies when fear ends.',
        changes: 'Enemies are immobilized for 3 seconds when fear effect ends.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['fear', 'minor_maim', 'immobilize'],
    effects: [
      {
        id: 'fear-aoe',
        type: 'crowd_control',
        description: 'Fears all enemies within 8 meters',
        duration: 4
      }
    ]
  },
  {
    id: 'shadow-image',
    name: 'Shadow Image',
    description: 'Create a shadow copy that you can teleport to and grants buffs.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    range: 15,
    duration: 15,
    morphs: [
      {
        id: 'shadow-proxy',
        name: 'Shadow Proxy',
        description: 'Image explodes when you teleport, dealing damage.',
        changes: 'Explodes for area damage when you teleport to it.'
      },
      {
        id: 'summon-shade',
        name: 'Summon Shade',
        description: 'Image fights enemies and grants you buffs.',
        changes: 'Image attacks enemies and grants Minor Berserk when active.'
      }
    ],
    buffsApplied: ['minor_berserk'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'shadow-teleport',
        type: 'other',
        description: 'Can teleport to shadow image location',
        duration: 15
      }
    ]
  },
  // Passive Skills
  {
    id: 'refreshing-shadows',
    name: 'Refreshing Shadows',
    description: 'Shadow abilities restore magicka and stamina.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-return',
        type: 'other',
        description: 'Shadow abilities restore 200 Magicka and Stamina'
      }
    ]
  },
  {
    id: 'shadow-barrier',
    name: 'Shadow Barrier',
    description: 'Grants damage shield when casting Shadow abilities.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'shield-on-cast',
        type: 'shield',
        description: 'Casting Shadow abilities grants damage shield worth 10% max Health',
        value: 10,
        percentage: true
      }
    ]
  },
  {
    id: 'shadow-cloak-mastery',
    name: 'Shadow Cloak',
    description: 'Increases stealth detection reduction and movement speed while stealthed.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'stealth-detection',
        type: 'stat_increase',
        description: 'Stealth detection radius reduced by 50%',
        value: 50,
        percentage: true
      },
      {
        id: 'stealth-speed',
        type: 'stat_increase',
        description: 'Movement speed while stealthed increased by 25%',
        value: 25,
        percentage: true
      }
    ]
  },
  {
    id: 'dark-vigor',
    name: 'Dark Vigor',
    description: 'Increases health and magicka recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'health-recovery',
        type: 'stat_increase',
        description: 'Health Recovery increased by 129',
        value: 129
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
    id: 'shadow-ward',
    name: 'Shadow Ward',
    description: 'Increases max magicka for each Shadow ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Maximum Magicka increased by 8% per Shadow ability slotted',
        value: 8,
        percentage: true
      }
    ]
  }
];

// Siphoning Skill Line
export const siphoningSkills: Skill[] = [
  {
    id: 'strife',
    name: 'Strife',
    description: 'Steal enemy life force, dealing magic damage over time and healing yourself.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2160
    },
    range: 28,
    duration: 10,
    morphs: [
      {
        id: 'funnel-health',
        name: 'Funnel Health',
        description: 'Also heals a nearby injured ally for each tick.',
        changes: 'Each damage tick also heals the most injured nearby ally.'
      },
      {
        id: 'swallow-soul',
        name: 'Swallow Soul',
        description: 'Heals you for more and increases healing done.',
        changes: 'Increases self-healing and grants Minor Vitality.'
      }
    ],
    buffsApplied: ['minor_vitality'],
    debuffsApplied: [],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 5
    },
    healing: {
      baseHealing: 290,
      scalingFactor: 0.25,
      isHoT: true,
      hotTicks: 5
    },
    effects: [
      {
        id: 'life-steal',
        type: 'other',
        description: 'Heals you for damage dealt over time',
        duration: 10
      }
    ]
  },
  {
    id: 'agony',
    name: 'Agony',
    description: 'Bind an enemy with telekinetic force, stunning them and dealing magic damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    range: 28,
    duration: 3,
    morphs: [
      {
        id: 'prolonged-suffering',
        name: 'Prolonged Suffering',
        description: 'Increases duration and spreads to nearby enemies when it ends.',
        changes: 'Longer duration and spreads to nearby enemies on expiration.'
      },
      {
        id: 'malefic-wreath',
        name: 'Malefic Wreath',
        description: 'Deals more damage and heals you based on damage dealt.',
        changes: 'Increased damage and heals you for percentage of damage.'
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
        id: 'stun',
        type: 'crowd_control',
        description: 'Stuns target for 3 seconds',
        duration: 3
      }
    ]
  },
  {
    id: 'cripple',
    name: 'Cripple',
    description: 'Reduce enemy movement speed and grant yourself Major Expedition.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    duration: 15,
    morphs: [
      {
        id: 'debilitate',
        name: 'Debilitate',
        description: 'Also applies Minor Maim, reducing target damage done.',
        changes: 'Adds Minor Maim debuff to reduce enemy damage output.'
      },
      {
        id: 'crippling-grasp',
        name: 'Crippling Grasp',
        description: 'Immobilizes target and deals damage when effect ends.',
        changes: 'Immobilizes target and explodes for damage on expiration.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: ['minor_maim'],
    effects: [
      {
        id: 'snare',
        type: 'crowd_control',
        description: 'Reduces target movement speed by 50%',
        value: 50,
        percentage: true,
        duration: 15
      },
      {
        id: 'speed-buff',
        type: 'stat_increase',
        description: '+30% movement speed for caster',
        value: 30,
        percentage: true,
        duration: 15
      }
    ]
  },
  {
    id: 'soul-shred',
    name: 'Soul Shred',
    description: 'Steal fragments of enemy souls, dealing damage and healing based on enemies hit.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    range: 28,
    radius: 8,
    morphs: [
      {
        id: 'soul-siphon',
        name: 'Soul Siphon',
        description: 'Channels to deal damage over time and heal you continuously.',
        changes: 'Becomes channeled ability that deals damage and heals over time.'
      },
      {
        id: 'soul-tether',
        name: 'Soul Tether',
        description: 'Tethers souls to you, pulling enemies and dealing more damage.',
        changes: 'Pulls enemies toward you and increases damage based on range.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
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
        id: 'multi-target',
        type: 'other',
        description: 'Hits up to 6 enemies in area'
      },
      {
        id: 'heal-scaling',
        type: 'other',
        description: 'Healing increases based on number of enemies hit'
      }
    ]
  },
  {
    id: 'drain-power',
    name: 'Drain Power',
    description: 'Steal enemy strength, reducing their damage and increasing yours.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    duration: 20,
    morphs: [
      {
        id: 'power-drain',
        name: 'Power Drain',
        description: 'Also drains magicka and stamina from target.',
        changes: 'Steals 200 Magicka and Stamina per second from target.'
      },
      {
        id: 'siphon-strength',
        name: 'Siphon Strength',
        description: 'Affects multiple enemies and grants group buff.',
        changes: 'Affects up to 3 enemies, grants Minor Berserk to nearby allies.'
      }
    ],
    buffsApplied: ['minor_berserk'],
    debuffsApplied: ['minor_maim'],
    effects: [
      {
        id: 'damage-transfer',
        type: 'stat_increase',
        description: 'Reduces enemy damage by 15% and increases your damage by 15%',
        value: 15,
        percentage: true,
        duration: 20
      }
    ]
  },
  {
    id: 'soul-shred',
    name: 'Soul Shred',
    description: 'Tear at enemy soul, dealing damage over time and healing you.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    duration: 10,
    morphs: [
      {
        id: 'soul-tether',
        name: 'Soul Tether',
        description: 'Links to multiple enemies and spreads damage.',
        changes: 'Links to up to 3 enemies, damage spreads between linked targets.'
      },
      {
        id: 'malevolent-offering',
        name: 'Malevolent Offering',
        description: 'Heals allies based on damage dealt.',
        changes: 'Heals nearby allies for 50% of damage dealt to primary target.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 10
    },
    healing: {
      baseHealing: 174,
      scalingFactor: 0.15,
      isHoT: true,
      hotTicks: 10
    },
    effects: [
      {
        id: 'soul-link',
        type: 'other',
        description: 'Damages enemy and heals you over time',
        duration: 10
      }
    ]
  },
  // Passive Skills
  {
    id: 'magicka-flood',
    name: 'Magicka Flood',
    description: 'Siphoning abilities restore magicka when they deal damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'magicka-return',
        type: 'other',
        description: 'Siphoning abilities restore 200 Magicka when dealing damage'
      }
    ]
  },
  {
    id: 'soul-siphoner',
    name: 'Soul Siphoner',
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
    id: 'catalyst',
    name: 'Catalyst',
    description: 'Increases critical strike chance with Siphoning abilities.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-chance',
        type: 'stat_increase',
        description: 'Critical Strike Chance with Siphoning abilities increased by 15%',
        value: 15,
        percentage: true
      }
    ]
  },
  {
    id: 'soul-barrier',
    name: 'Soul Barrier',
    description: 'Reduces damage taken and increases max health.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-reduction',
        type: 'stat_increase',
        description: 'Damage taken reduced by 6%',
        value: 6,
        percentage: true
      },
      {
        id: 'max-health',
        type: 'stat_increase',
        description: 'Maximum Health increased by 8%',
        value: 8,
        percentage: true
      }
    ]
  },
  {
    id: 'transfer',
    name: 'Transfer',
    description: 'Increases weapon and spell damage for each Siphoning ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Weapon and Spell Damage increased by 129 per Siphoning ability slotted',
        value: 129
      }
    ]
  }
];

// Export all Nightblade skills organized by skill line
export const nightbladeSkills = {
  assassination: assassinationSkills,
  shadow: shadowSkills,
  siphoning: siphoningSkills
};

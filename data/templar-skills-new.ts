// Templar Skills - The holy warrior class
import { Skill } from './skills';

// AEDRIC SPEAR SKILL LINE
const aedricSpearSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'radial-sweep',
    name: 'Radial Sweep',
    description: 'Swing your Aedric spear around with holy vengeance, dealing 2323 Magic Damage to all nearby enemies and an additional 1161 Magic Damage every 2 seconds for 6 seconds.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 125
    },
    duration: 6,
    morphs: [
      {
        id: 'crescent-sweep',
        name: 'Crescent Sweep',
        description: 'Swing your Aedric spear around with holy vengeance, dealing 2399 Magic Damage to all nearby enemies and an additional 1161 Magic Damage every 2 seconds for 6 seconds. Enemies in your path will be hit for 60% more damage.',
        changes: 'Deals additional damage to enemies in front of you.'
      },
      {
        id: 'everlasting-sweep',
        name: 'Everlasting Sweep',
        description: 'Swing your Aedric spear around with holy vengeance, dealing 2399 Physical Damage to all nearby enemies and an additional 1161 Physical Damage every 2 seconds for 10 seconds. The duration is extended by 2 seconds for each enemy hit.',
        changes: 'Deals Physical Damage and increases the duration, which further increases for each enemy hit.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 2323,
      scalingFactor: 2.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'duration-extension',
        type: 'other',
        description: 'Duration extends for each enemy hit'
      }
    ]
  },

  // Active abilities
  {
    id: 'puncturing-strikes',
    name: 'Puncturing Strikes',
    description: 'Launch a relentless assault, striking up to 6 enemies in front of you three times with your Aedric spear. The spear deals 889 Magic Damage per strike and reduces enemy Movement Speed by 40% for 0.5 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 8,
    morphs: [
      {
        id: 'biting-jabs',
        name: 'Biting Jabs',
        description: 'Launch a relentless assault, striking up to 6 enemies in front of you three times with your Aedric spear. The spear deals 919 Physical Damage per strike and reduces enemy Movement Speed by 40% for 0.5 seconds. Each strike has a 10% chance of applying the Sundered status effect. Activating this ability grants you Major Brutality and Major Sorcery, increasing your Weapon and Spell Damage by 20% for 10 seconds.',
        changes: 'Converts into a Stamina ability and deals Physical Damage. Grants you Major Brutality and Sorcery after casting and has a higher chance of applying the Sundered status effect.'
      },
      {
        id: 'puncturing-sweep',
        name: 'Puncturing Sweep',
        description: 'Launch a relentless assault, striking up to 6 enemies in front of you three times with your Aedric spear. The spear deals 919 Magic Damage per strike and reduces enemy Movement Speed by 40% for 0.5 seconds. You heal for 25% of the damage done with this ability.',
        changes: 'You heal for a percentage of the damage done.'
      }
    ],
    buffsApplied: ['major_brutality', 'major_sorcery'],
    debuffsApplied: ['sundered'],
    damage: {
      baseDamage: 889,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'multi-strike',
        type: 'other',
        description: 'Three consecutive strikes'
      },
      {
        id: 'movement-speed-reduction',
        type: 'crowd_control',
        description: 'Reduces enemy movement speed by 40%',
        value: 40,
        percentage: true
      }
    ]
  },

  {
    id: 'piercing-javelin',
    name: 'Piercing Javelin',
    description: 'Hurl your spear at an enemy with godlike strength, dealing 1392 Magic Damage and knocking them back 8 meters. This ability ignores the enemy\'s Resistances and cannot be blocked.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 22,
    morphs: [
      {
        id: 'aurora-javelin',
        name: 'Aurora Javelin',
        description: 'Hurl your spear at an enemy with godlike strength, dealing 1438 Magic Damage and knocking them back 8 meters. This ability ignores the enemy\'s Resistances and cannot be blocked. The spear deals an additional 2% damage for every 1 meter you are away from the target, up to a maximum of 40%.',
        changes: 'Deals additional damage based on the distance the spear travels.'
      },
      {
        id: 'binding-javelin',
        name: 'Binding Javelin',
        description: 'Hurl your spear at an enemy with godlike strength, dealing 1393 Physical Damage and stunning them for 4 seconds. This ability ignores the enemy\'s Resistances and cannot be blocked.',
        changes: 'Converts into a Stamina ability and deals Physical Damage. Stuns the enemy for longer instead of knocking back.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['knockback', 'stun'],
    damage: {
      baseDamage: 1392,
      scalingFactor: 1.2,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'armor-ignore',
        type: 'other',
        description: 'Ignores enemy resistances and cannot be blocked'
      },
      {
        id: 'distance-bonus',
        type: 'other',
        description: 'Additional damage based on distance',
        value: 40,
        percentage: true
      }
    ]
  },

  {
    id: 'focused-charge',
    name: 'Focused Charge',
    description: 'Charge with your divine lance to impale an enemy, dealing 1392 Magic Damage while taunting them to attack you for 15 seconds. If the enemy hit was casting, they are interrupted, set Off Balance, and stunned for 3 seconds. You also gain Major Protection for 7 seconds, reducing your damage taken by 10%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    range: 22,
    duration: 15,
    morphs: [
      {
        id: 'explosive-charge',
        name: 'Explosive Charge',
        description: 'Charge with your divine lance to impale all enemies in the area, dealing 1799 Magic Damage while taunting the first enemy hit to attack you for 15 seconds. Any enemy hit that was casting is interrupted, set Off Balance, and stunned for 3 seconds. You also gain Major Protection for 15 seconds, reducing your damage taken by 10%.',
        changes: 'Deals increased damage and interrupts all enemies near the point of impact. Increases duration of Major Protection.'
      },
      {
        id: 'toppling-charge',
        name: 'Toppling Charge',
        description: 'Charge with your divine lance to impale an enemy, dealing 1393 Magic Damage while taunting them to attack you for 15 seconds. The enemy hit is stunned for 3 seconds, set Off Balance, and if they were casting, they are interrupted. You also gain Major Protection for 7 seconds, reducing your damage taken by 10%.',
        changes: 'Always stuns the enemy and sets them Off Balance, regardless if they are casting. Reduces cost as the ability ranks up.'
      }
    ],
    buffsApplied: ['major_protection'],
    debuffsApplied: ['taunt', 'stun', 'off_balance'],
    damage: {
      baseDamage: 1392,
      scalingFactor: 1.2,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'charge',
        type: 'other',
        description: 'Charges to target location'
      },
      {
        id: 'interrupt',
        type: 'crowd_control',
        description: 'Interrupts casting enemies'
      }
    ]
  },

  {
    id: 'spear-shards',
    name: 'Spear Shards',
    description: 'Send your spear into the heavens to bring down a shower of divine wrath, dealing 1742 Magic Damage to enemies in the area and an additional 166 Magic Damage every 1 second for 10 seconds. An ally near the spear can activate the Blessed Shards synergy, restoring 3960 Magicka or Stamina, whichever maximum is higher.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    duration: 10,
    morphs: [
      {
        id: 'blazing-spear',
        name: 'Blazing Spear',
        description: 'Send your spear into the heavens to bring down a shower of divine wrath, dealing 1742 Magic Damage to enemies in the area and an additional 276 Magic Damage every 1 second for 10 seconds. Enemies hit by the initial hit are immobilized for 4 seconds. An ally near the spear can activate the Blessed Shards synergy, restoring 3960 Magicka or Stamina, whichever maximum is higher.',
        changes: 'Increases damage dealt of the residual effect. Initial hit immobilizes enemies.'
      },
      {
        id: 'luminous-shards',
        name: 'Luminous Shards',
        description: 'Send your spear into the heavens to bring down a shower of divine wrath, dealing 1742 Magic Damage to enemies in the area and an additional 165 Magic Damage every 1 second for 10 seconds. You or an ally near the spear can activate the Holy Shards synergy, which restores 3960 Magicka and Stamina.',
        changes: 'The synergy grants both Magicka and Stamina instead of whichever is lowest and you can use your own synergy. Reduces cost as the ability ranks up.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.3,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'synergy',
        type: 'other',
        description: 'Allies can activate Blessed Shards synergy'
      },
      {
        id: 'dot',
        type: 'other',
        description: 'Deals damage over time',
        value: 166
      }
    ]
  },

  {
    id: 'sun-shield',
    name: 'Sun Shield',
    description: 'Surround yourself with solar rays, dealing 1742 Magic Damage to nearby enemies and applying Minor Maim to them for 10 seconds, reducing their damage done by 5%. The rays then protect you, granting a damage shield that absorbs up to 4800 damage for 6 seconds, increasing by 10% for each enemy hit, up to 60%. This portion of the ability scales off your Max Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 6,
    morphs: [
      {
        id: 'blazing-shield',
        name: 'Blazing Shield',
        description: 'Surround yourself with solar rays, applying Minor Maim to nearby enemies for 10 seconds, reducing their damage done by 5%. You gain a damage shield that absorbs up to 4800 damage for 6 seconds, increasing by 10% for each enemy hit, up to 60%. This ability scales off your Max Health. When the shield expires it explodes, dealing 33% of damage absorbed as Magic Damage to nearby enemies.',
        changes: 'No longer deals damage to enemies on activation, instead deals damage when shield expires based on the amount it absorbed, and increases the radius.'
      },
      {
        id: 'radiant-ward',
        name: 'Radiant Ward',
        description: 'Surround yourself with solar rays, dealing 1742 Magic Damage to nearby enemies and applying Minor Maim to them for 10 seconds, reducing their damage done by 5%. The rays then protect you, granting a damage shield that absorbs up to 4958 damage for 6 seconds, increasing by 20% for each enemy hit, up to 120%. This portion of the ability scales off your Max Health.',
        changes: 'Has reduced cost and the shield is strengthened further for each enemy hit.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.2,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'damage-shield',
        type: 'shield',
        description: 'Absorbs damage based on Max Health',
        value: 4800
      },
      {
        id: 'shield-scaling',
        type: 'other',
        description: 'Shield increases by 10% per enemy hit, up to 60%',
        value: 60,
        percentage: true
      }
    ]
  }
];

// Aedric Spear Passives
const aedricSpearPassives: Skill[] = [
  {
    id: 'piercing-spear',
    name: 'Piercing Spear',
    description: 'WITH AN AEDRIC SPEAR ABILITY SLOTTED Increases your Critical Damage by 12%. Increases your damage done to blocking players by 12%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-damage-increase',
        type: 'stat_increase',
        description: 'Critical Damage increased by 12%',
        value: 12,
        percentage: true
      },
      {
        id: 'blocking-damage-increase',
        type: 'stat_increase',
        description: 'Damage to blocking players increased by 12%',
        value: 12,
        percentage: true
      }
    ]
  },

  {
    id: 'spear-wall',
    name: 'Spear Wall',
    description: 'WHEN ACTIVATING AN AEDRIC SPEAR ABILITY Gain Minor Berserk and Minor Protection for 6 seconds, increasing damage done and reducing damage taken by 5%.',
    type: 'passive',
    duration: 6,
    buffsApplied: ['minor_berserk', 'minor_protection'],
    debuffsApplied: [],
    effects: []
  },

  {
    id: 'burning-light',
    name: 'Burning Light',
    description: 'When you deal damage you generate a stack of Burning Light for 3 seconds. After reaching 4 stacks, you deal 500 Magic Damage to your target. This effect can stack once every half second and scales off the higher of your Weapon or Spell Damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 500,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'stacking-damage',
        type: 'other',
        description: 'Deals bonus damage after 4 stacks',
        value: 500
      }
    ]
  },

  {
    id: 'balanced-warrior',
    name: 'Balanced Warrior',
    description: 'Increases your Weapon Damage, Spell Damage, and Armor by 6%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-armor-increase',
        type: 'stat_increase',
        description: 'Weapon Damage, Spell Damage, and Armor increased by 6%',
        value: 6,
        percentage: true
      }
    ]
  }
];

// DAWN'S WRATH SKILL LINE
const dawnsWrathSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'nova',
    name: 'Nova',
    description: 'Call down a fragment of the sun, dealing 1161 Magic Damage every 1 second for 8 seconds to enemies in the area and afflicting them with Major Maim, reducing their damage done by 10%. An ally near the fragment can activate the Supernova synergy, dealing 2607 Magic Damage to all enemies in the area and stunning them for 3 seconds.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 8,
    morphs: [
      {
        id: 'solar-disturbance',
        name: 'Solar Disturbance',
        description: 'Call down a fragment of the sun, dealing 1161 Magic Damage every 1 second for 8 seconds to enemies in the area and applying Major Maim to them for 10 seconds, reducing their damage done by 10%. An ally near the fragment can activate the Supernova synergy, dealing 2607 Magic Damage to all enemies in the area and stunning them for 3 seconds.',
        changes: 'Reduces the cost and Major Maim stays on enemies after leaving the area.'
      },
      {
        id: 'solar-prison',
        name: 'Solar Prison',
        description: 'Call down a fragment of the sun, dealing 1199 Magic Damage every 1 second for 8 seconds to enemies in the area and afflicting them with Major Maim, reducing their damage done by 10%. An ally near the fragment can activate the Gravity Crush synergy, dealing 5215 Magic Damage to all enemies in the area and stunning them for 5 seconds.',
        changes: 'The synergy deals more damage and stuns for longer.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_maim', 'stun'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'synergy',
        type: 'other',
        description: 'Allies can activate Supernova synergy'
      }
    ]
  },

  // Active abilities
  {
    id: 'sun-fire',
    name: 'Sun Fire',
    description: 'Blast an enemy with a charge of radiant heat, dealing 1161 Flame Damage, and an additional 3470 Flame Damage over 20 seconds. Upon activation you gain Major Savagery and Major Prophecy for 20 seconds, increasing your Weapon and Spell Critical rating by 2629.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    duration: 20,
    morphs: [
      {
        id: 'reflective-light',
        name: 'Reflective Light',
        description: 'Blast up to three enemies with a charge of radiant heat, dealing 1199 Flame Damage, an additional 3470 Flame Damage over 20 seconds, and reducing their Movement Speed by 40% for 3 seconds. Upon activation you gain Major Savagery and Major Prophecy for 20 seconds, increasing your Weapon and Spell Critical rating by 2629.',
        changes: 'Splits the projectile, allowing it to affect two additional nearby enemies. Briefly snares enemies hit.'
      },
      {
        id: 'vampires-bane',
        name: 'Vampire\'s Bane',
        description: 'Blast an enemy with a charge of radiant heat, dealing 1161 Flame Damage, and an additional 5370 Flame Damage over 30 seconds. Upon activation you gain Major Savagery and Major Prophecy for 30 seconds, increasing your Weapon and Spell Critical rating by 2629.',
        changes: 'Increases the duration.'
      }
    ],
    buffsApplied: ['major_savagery', 'major_prophecy'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.2,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'dot',
        type: 'other',
        description: 'Deals damage over time',
        value: 3470
      }
    ]
  },

  {
    id: 'solar-flare',
    name: 'Solar Flare',
    description: 'Conjure a ball of solar energy to heave at an enemy, dealing 2404 Magic Damage and increasing your damage done with class abilities by 5% for 10 seconds. Also grants you Empower for 10 seconds, increasing the damage of your Heavy Attacks against monsters by 70%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    duration: 10,
    morphs: [
      {
        id: 'dark-flare',
        name: 'Dark Flare',
        description: 'Conjure a ball of solar energy to heave at an enemy, dealing 2483 Magic Damage and increasing your damage done with class abilities by 5% for 10 seconds. Afflicts the target and enemies within 8 meters with Major Defile, reducing their healing received and damage shield strength by 12% for 4 seconds. Also grants you Empower for 10 seconds, increasing the damage of your Heavy Attacks against monsters by 70%.',
        changes: 'Reduces cost and applies Major Defile to the target and nearby enemies.'
      },
      {
        id: 'solar-barrage',
        name: 'Solar Barrage',
        description: 'Conjure solar energy to blast enemies around you, dealing 435 Magic Damage every 2 seconds and increasing your damage done with class abilities by 5% for 20 seconds. While this ability is active you gain Empower, increasing the damage of your Heavy Attacks against monsters by 70%.',
        changes: 'Deals damage in multiple blasts as damage over time around you instead of at a single enemy.'
      }
    ],
    buffsApplied: ['empower'],
    debuffsApplied: ['major_defile'],
    damage: {
      baseDamage: 2404,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'class-damage-bonus',
        type: 'stat_increase',
        description: 'Class ability damage increased by 5%',
        value: 5,
        percentage: true
      }
    ]
  },

  {
    id: 'backlash',
    name: 'Backlash',
    description: 'Summon an expanding beam of pure sunlight to doom an enemy, dealing 1161 Magic Damage immediately and marking them for 6 seconds. After the duration ends, the sunlight bursts, dealing 1284 Magic Damage to the enemy, which increases based on the amount of damage you dealt to them over the duration, up to 200%. You can have only one Backlash active at a time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    duration: 6,
    morphs: [
      {
        id: 'power-of-the-light',
        name: 'Power of the Light',
        description: 'Summon an expanding beam of pure sunlight to doom an enemy, dealing 1161 Physical Damage immediately and marking them for 6 seconds. After the duration ends, the sunlight bursts, dealing 1285 Physical Damage to the enemy, which increases based on the amount of damage you dealt to them over the duration, up to 200%. You can have only one Power of the Light active at a time, and each hit of the ability applies the Sundered status effect.',
        changes: 'Converts into a Stamina ability, deals Physical Damage, and always applies the Sundered status effect.'
      },
      {
        id: 'purifying-light',
        name: 'Purifying Light',
        description: 'Summon an expanding beam of pure sunlight to doom an enemy, dealing 1161 Magic Damage immediately and marking them for 6 seconds. After the duration ends, the sunlight bursts, dealing 1285 Magic Damage, which increases based on the amount of damage you dealt to them over the duration, up to 200%. Also heals you and nearby allies in the area for 599 Health every 2 seconds, over 10 seconds. You can have only one Purifying Light at a time.',
        changes: 'When the effect ends, a pool of sunlight remains attached to the enemy, healing you and allies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['sundered'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.2,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'delayed-burst',
        type: 'other',
        description: 'Explodes after 6 seconds based on damage dealt',
        value: 200,
        percentage: true
      }
    ]
  },

  {
    id: 'eclipse',
    name: 'Eclipse',
    description: 'Envelop an enemy in a lightless sphere for 4 seconds, that harms them with growing intensity anytime they use a direct damage attack. Limited to one. Their first attack reduces their Movement Speed by 30% for 4 seconds, their second attack immobilizes them for 3 seconds, and their third attack stuns them for 3 seconds. The effects can activate once every 1 second.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 4,
    morphs: [
      {
        id: 'living-dark',
        name: 'Living Dark',
        description: 'Envelop yourself in a lightless sphere for 10 seconds to protect yourself. Anytime you take direct damage, the sphere lashes back at the attacker, reducing their Movement Speed by 40% for 3 seconds and healing you for 2066 Health. These effects can occur once every half second.',
        changes: 'You now apply the ability to yourself, healing when you take direct damage instead. Melee attackers are snared.'
      },
      {
        id: 'unstable-core',
        name: 'Unstable Core',
        description: 'Envelop an enemy in a lightless sphere for 4 seconds, that harms them with growing intensity anytime they deal direct damage. Limited to one. Their first attack reduces their Movement Speed by 30% for 4 seconds and deals 449 Magic Damage, their second attack immobilizes them for 3 seconds and deals 898 Magic Damage, and their third attack stuns them for 3 seconds and deals 1799 Magic Damage. The effects can activate once every 1 second.',
        changes: 'Deals damage to the attacker and anyone near them when they trigger any of the effects.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize', 'stun'],
    damage: {
      baseDamage: 449,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'escalating-punishment',
        type: 'crowd_control',
        description: 'Effects escalate with each attack: snare, immobilize, stun'
      }
    ]
  },

  {
    id: 'radiant-destruction',
    name: 'Radiant Destruction',
    description: 'Burn an enemy with a ray of holy fire, dealing 7248 Magic Damage over 3.8 seconds. Deals up to 500% more damage to enemies below 33% Health. This ability is considered direct damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    duration: 3.8,
    morphs: [
      {
        id: 'radiant-glory',
        name: 'Radiant Glory',
        description: 'Burn an enemy with a ray of holy fire, dealing 7482 Magic Damage over 3.8 seconds. Deals up to 500% more damage to enemies below 33% Health. You heal for 15% of the damage inflicted. This ability is considered direct damage.',
        changes: 'Reduces the cost and you heal for a percentage of the damage inflicted.'
      },
      {
        id: 'radiant-oppression',
        name: 'Radiant Oppression',
        description: 'Burn an enemy with a ray of holy fire, dealing 7482 Magic Damage over 3.8 seconds. Deals up to 500% more damage to enemies below 40% Health. This ability is considered direct damage.',
        changes: 'The bonus damage against low health targets now starts at higher health.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 7248,
      scalingFactor: 2.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'execute-scaling',
        type: 'other',
        description: 'Up to 500% more damage to low health enemies',
        value: 500,
        percentage: true
      },
      {
        id: 'channeled',
        type: 'other',
        description: 'Channeled ability over 3.8 seconds'
      }
    ]
  }
];

// Dawn's Wrath Passives
const dawnsWrathPassives: Skill[] = [
  {
    id: 'enduring-rays',
    name: 'Enduring Rays',
    description: 'Increases the duration of your Sun Fire, Eclipse, Solar Flare, and Nova abilities by 2 seconds.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'duration-increase',
        type: 'other',
        description: 'Increases duration of specific abilities by 2 seconds',
        value: 2
      }
    ]
  },

  {
    id: 'prism',
    name: 'Prism',
    description: 'Casting a Dawn\'s Wrath ability while in combat generates 3 Ultimate. This effect can occur once every 6 seconds.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-generation',
        type: 'resource_restore',
        description: 'Generate 3 Ultimate when casting Dawn\'s Wrath abilities',
        value: 3
      }
    ]
  },

  {
    id: 'illuminate',
    name: 'Illuminate',
    description: 'Casting a Dawn\'s Wrath ability grants Minor Sorcery to you and your group for 20 seconds, increasing your Spell Damage by 10%.',
    type: 'passive',
    duration: 20,
    buffsApplied: ['minor_sorcery'],
    debuffsApplied: [],
    effects: []
  },

  {
    id: 'restoring-spirit',
    name: 'Restoring Spirit',
    description: 'Reduces the Health, Magicka, Stamina, and Ultimate costs of your abilities by 5%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'other',
        description: 'All ability costs reduced by 5%',
        value: 5,
        percentage: true
      }
    ]
  }
];

// RESTORING LIGHT SKILL LINE
const restoringLightSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'rite-of-passage',
    name: 'Rite of Passage',
    description: 'Channel the grace of the gods, healing you and nearby allies for 2787 Health every 1 second for 4 seconds. You cannot move while channeling, but you gain immunity to all disabling effects.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 150
    },
    duration: 4,
    morphs: [
      {
        id: 'practiced-incantation',
        name: 'Practiced Incantation',
        description: 'Channel the grace of the gods, healing you and nearby allies for 2788 Health every 1 second for 8 seconds. While channeling this ability, you gain immunity to all disabling effects.',
        changes: 'Increases the duration of the channel and allows you move at a reduced rate while channeling.'
      },
      {
        id: 'remembrance',
        name: 'Remembrance',
        description: 'Channel the grace of the gods, healing you and nearby allies for 2788 Health every 1 second for 4 seconds. Gain Major Protection, reducing damage you take by 10% for 10 seconds. You cannot move while channeling, but you gain immunity to all disabling effects.',
        changes: 'Gain Major Protection after casting, reducing your damage taken.'
      }
    ],
    buffsApplied: ['major_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 2787,
      scalingFactor: 2.0
    },
    effects: [
      {
        id: 'cc-immunity',
        type: 'other',
        description: 'Immunity to all disabling effects while channeling'
      },
      {
        id: 'channeled',
        type: 'other',
        description: 'Channeled ability'
      }
    ]
  },

  // Active abilities
  {
    id: 'rushed-ceremony',
    name: 'Rushed Ceremony',
    description: 'Beacon your inner light, healing yourself or a wounded ally in front of you for 3486 Health.',
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
        description: 'Beacon your inner light, healing yourself or a wounded ally in front of you for 3485 Health. Also heals one other injured target for 1199 Health.',
        changes: 'Heals a second target for one third the amount.'
      },
      {
        id: 'honor-the-dead',
        name: 'Honor the Dead',
        description: 'Beacon your inner light, healing yourself or a wounded ally in front of you for 3485 Health. Healing anyone who is below 75% Health restores 18% of the ability\'s cost every 2 seconds over 6 seconds as Magicka.',
        changes: 'Refunds part of the ability\'s cost when used to heal an injured target.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 3486,
      scalingFactor: 1.5
    },
    effects: [
      {
        id: 'smart-heal',
        type: 'other',
        description: 'Targets wounded ally in front of you'
      }
    ]
  },

  {
    id: 'healing-ritual',
    name: 'Healing Ritual',
    description: 'Focus your spiritual devotion, healing you and nearby allies for 2613 Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 6480
    },
    morphs: [
      {
        id: 'hasty-prayer',
        name: 'Hasty Prayer',
        description: 'Focus your spiritual devotion, healing you and nearby allies for 2614 Health. Affected targets gain Minor Expedition, increasing their Movement Speed by 15% for 10 seconds.',
        changes: 'Healed allies gain Minor Expedition for a short duration and reduces the cost as the ability ranks up.'
      },
      {
        id: 'ritual-of-rebirth',
        name: 'Ritual of Rebirth',
        description: 'Focus your spiritual devotion, healing you and nearby allies for 2614 Health. You heal a single ally outside this ability\'s radius for an additional 2700 Health.',
        changes: 'You heal a single ally outside the ability\'s radius.'
      }
    ],
    buffsApplied: ['minor_expedition'],
    debuffsApplied: [],
    healing: {
      baseHealing: 2613,
      scalingFactor: 1.2
    },
    effects: [
      {
        id: 'area-heal',
        type: 'other',
        description: 'Heals all nearby allies'
      }
    ]
  },

  {
    id: 'restoring-aura',
    name: 'Restoring Aura',
    description: 'Champion the cause of divine glory to apply Minor Endurance, Minor Fortitude, and Minor Intellect to nearby group members for 20 seconds, increasing Health, Magicka, and Stamina Recovery by 15%. While slotted on either bar you gain these effects.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 6480
    },
    duration: 20,
    morphs: [
      {
        id: 'radiant-aura',
        name: 'Radiant Aura',
        description: 'Champion the cause of divine glory to apply Minor Endurance, Minor Fortitude, and Minor Intellect to you and nearby group members for 1 minute, increasing your Health, Magicka, and Stamina Recovery by 15%. While slotted on either bar you gain these effects.',
        changes: 'Increases the radius and duration.'
      },
      {
        id: 'repentance',
        name: 'Repentance',
        description: 'Consecrate the souls of the fallen, healing you and your allies for 3000 Health and restoring 3000 Stamina to you for each corpse nearby. While slotted on either bar, you gain Minor Fortitude, Minor Endurance, and Minor Intellect, increasing your Health, Stamina, and Magicka Recovery by 15%.',
        changes: 'No longer applies buffs to allies, instead you consume corpses to restore Health and Stamina.'
      }
    ],
    buffsApplied: ['minor_endurance', 'minor_fortitude', 'minor_intellect'],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Gain buffs while slotted on either bar'
      }
    ]
  },

  {
    id: 'cleansing-ritual',
    name: 'Cleansing Ritual',
    description: 'Exalt in the sacred light of the Aedra, cleansing up to 2 harmful effects from yourself immediately and healing you and nearby allies for 843 Health every 2 seconds for 20 seconds. Allies in the area can activate the Purify synergy, cleansing all harmful effects from themselves and healing for 1912 Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 5400
    },
    duration: 20,
    morphs: [
      {
        id: 'extended-ritual',
        name: 'Extended Ritual',
        description: 'Exalt in the sacred light of the Aedra, cleansing up to 5 harmful effects from yourself immediately and healing you and nearby allies for 844 Health every 2 seconds for 30 seconds. Allies in the area can activate the Purify synergy, cleansing all harmful effects from themselves and healing for 1912 Health.',
        changes: 'Increases the duration and the amount of harmful effects cleansed from yourself.'
      },
      {
        id: 'ritual-of-retribution',
        name: 'Ritual of Retribution',
        description: 'Exalt in the sacred light of the Aedra, cleansing up to 2 harmful effects from yourself immediately. While in the area, enemies take 435 Magic Damage every 2 seconds for 20 seconds which increases by 12% per tick. Allies in the area can activate the Purify synergy, cleansing all harmful effects from themselves and healing for 1912 Health.',
        changes: 'The area now harms enemies who enter it, rather than healing allies, and reduces the cost. Damage increases over duration.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 843,
      scalingFactor: 0.8
    },
    damage: {
      baseDamage: 435,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'cleanse',
        type: 'other',
        description: 'Cleanses harmful effects'
      },
      {
        id: 'synergy',
        type: 'other',
        description: 'Allies can activate Purify synergy'
      }
    ]
  },

  {
    id: 'rune-focus',
    name: 'Rune Focus',
    description: 'Create a rune of celestial protection and gain Major Resolve for 20 seconds, increasing your Physical Resistance and Spell Resistance by 5948. While the rune is active you heal for 319 Health every 1 second, scaling off your Max Health. Standing within the rune increases the healing done by 200%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 20,
    morphs: [
      {
        id: 'channeled-focus',
        name: 'Channeled Focus',
        description: 'Create a rune of celestial protection and gain Major Resolve for 25 seconds, increasing your Physical Resistance and Spell Resistance by 5948. You also recover 242 Magicka every 1 second over the duration. While the rune is active you heal for 319 Health every 1 second, scaling off your Max Health. Standing within the rune increases the healing done by 200%.',
        changes: 'Increases the duration and causes you to restore Magicka over the duration.'
      },
      {
        id: 'restoring-focus',
        name: 'Restoring Focus',
        description: 'Create a rune of celestial protection and gain Major Resolve for 20 seconds, increasing your Physical Resistance and Spell Resistance by 5948. You also recover 242 Stamina every 1 second over the duration. While the rune is active you heal for 413 Health every 1 second, scaling off your Max Health. Standing within the rune increases the healing done by 200%.',
        changes: 'Increases the healing done and causes you to restore Stamina over the duration.'
      }
    ],
    buffsApplied: ['major_resolve'],
    debuffsApplied: [],
    healing: {
      baseHealing: 319,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'rune-bonus',
        type: 'other',
        description: 'Standing in rune increases healing by 200%',
        value: 200,
        percentage: true
      },
      {
        id: 'resource-restore',
        type: 'resource_restore',
        description: 'Restores Magicka or Stamina over time',
        value: 242
      }
    ]
  }
];

// Restoring Light Passives
const restoringLightPassives: Skill[] = [
  {
    id: 'mending',
    name: 'Mending',
    description: 'Increases your healing done by up to 13%, in proportion to the severity of the target\'s wounds.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-increase',
        type: 'stat_increase',
        description: 'Healing done increased up to 13% based on target wounds',
        value: 13,
        percentage: true
      }
    ]
  },

  {
    id: 'sacred-ground',
    name: 'Sacred Ground',
    description: 'While standing in your own Cleansing Ritual, Rune Focus, or Rite of Passage area effects and for up to 4 seconds after leaving them you gain Minor Mending, increasing your healing done by 8%. Also increases the amount of damage you can block by 10% for the duration.',
    type: 'passive',
    duration: 4,
    buffsApplied: ['minor_mending'],
    debuffsApplied: [],
    effects: [
      {
        id: 'block-increase',
        type: 'other',
        description: 'Block mitigation increased by 10%',
        value: 10,
        percentage: true
      }
    ]
  },

  {
    id: 'light-weaver',
    name: 'Light Weaver',
    description: 'When you heal an ally under 50% Health with a Restoring Light ability, you grant them 2 Ultimate. Activating an ability with a cast or channel time while in combat causes you to automatically block all attacks at no cost for 2 seconds, up to once every 15 seconds.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-grant',
        type: 'resource_restore',
        description: 'Grant 2 Ultimate to allies healed under 50% Health',
        value: 2
      },
      {
        id: 'auto-block',
        type: 'other',
        description: 'Automatically block for 2 seconds after casting abilities'
      }
    ]
  },

  {
    id: 'master-ritualist',
    name: 'Master Ritualist',
    description: 'Increases resurrection speed by 20%. Resurrected allies return with 100% more Health. Gives you a 50% chance to fill an empty Soul Gem after each successful resurrection.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resurrection-bonus',
        type: 'other',
        description: 'Faster resurrection with more health and soul gem chance',
        value: 20,
        percentage: true
      }
    ]
  }
];

// Export Templar Skills
export const templarSkills = {
  aedricSpear: [...aedricSpearSkills, ...aedricSpearPassives],
  dawnsWrath: [...dawnsWrathSkills, ...dawnsWrathPassives],
  restoringLight: [...restoringLightSkills, ...restoringLightPassives]
};

export default templarSkills;

// Sorcerer Skills - The magic and summoning class
import { Skill } from './skills';

// DARK MAGIC SKILL LINE
const darkMagicSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'negate-magic',
    name: 'Negate Magic',
    description: 'Create a globe of magic suppression for 12 seconds, removing and preventing all enemy area of effect abilities from occurring in the area. Enemies within the globe are stunned, while enemy players will be silenced rather than stunned.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    duration: 12,
    morphs: [
      {
        id: 'absorption-field',
        name: 'Absorption Field',
        description: 'Create a globe of magic suppression for 12 seconds, removing and preventing all enemy area of effect abilities from occurring in the area. Enemies within the globe are stunned, while enemy players will be silenced rather than stunned. The globe also heals you and your allies for 1038 Health every 1 second.',
        changes: 'The globe also heals you and your allies standing inside it.'
      },
      {
        id: 'suppression-field',
        name: 'Suppression Field',
        description: 'Create a globe of magic suppression for 12 seconds, removing and preventing all enemy area of effect abilities from occurring in the area. Enemies within the globe are stunned, while enemy players will be silenced rather than stunned. The globe also damages enemies for 1038 Magic Damage every 1 second.',
        changes: 'The globe also damages enemies standing inside it.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun', 'silence'],
    effects: [
      {
        id: 'aoe-suppression',
        type: 'other',
        description: 'Removes and prevents all enemy AoE abilities in the area'
      }
    ]
  },

  // Active abilities
  {
    id: 'crystal-shard',
    name: 'Crystal Shard',
    description: 'Conjure dark crystals to bombard an enemy, dealing 2404 Magic Damage. Your next non-Ultimate ability cast within 3 seconds costs 10% less.',
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
        description: 'Conjure dark crystals to bombard an enemy, dealing 2483 Magic Damage. Your next non-Ultimate ability cast within 3 seconds costs 10% less. While slotted on either bar, casting a non-Ultimate ability has a 33% chance of causing your next Crystal Fragments to be instant, deal 66% more damage, and cost half as much.',
        changes: 'Casting abilities has a chance to make your next Crystal Fragments instant, deal more damage, and cost less.'
      },
      {
        id: 'crystal-weapon',
        name: 'Crystal Weapon',
        description: 'Encase your weapon in dark crystals for 6 seconds, causing your next two Light or Heavy Attacks to deal additional damage and reduce the target\'s Armor by 1000 for 5 seconds. The first hit deals 2091 Physical Damage and the second deals 836 Physical Damage. After casting, your next non-Ultimate ability used within 3 seconds costs 10% less.',
        changes: 'Converts the ability into an instant cast Stamina ability, which causes your next two Light or Heavy Attacks to deal bonus Physical Damage and reduce the enemy\'s Armor.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 2404,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'cost-reduction',
        type: 'other',
        description: 'Next non-Ultimate ability costs 10% less for 3 seconds'
      }
    ]
  },

  {
    id: 'encase',
    name: 'Encase',
    description: 'Call forth Daedric shards from the earth to immobilize enemies in front of you for 4 seconds. Enemies hit are afflicted with Major Maim, reducing their damage done by 10% for 10 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 4,
    morphs: [
      {
        id: 'shattering-spines',
        name: 'Shattering Spines',
        description: 'Call forth Daedric shards from the earth to encase and immobilize all enemies in front of you for 4 seconds. After the effect ends the shards shatter, dealing 1979 Magic Damage to any enemy that was encased. Enemies hit are afflicted with Major Maim, reducing their damage done by 10% for 10 seconds.',
        changes: 'The ability no longer has a cap of how many targets it can affect, and now deals damage when the effect ends.'
      },
      {
        id: 'vibrant-shroud',
        name: 'Vibrant Shroud',
        description: 'Call forth a Daedric shroud from the Colored Rooms to heal you and your allies and enfeeble foes in front of you. You and allies in the area are healed for 2700 Health and receive Minor Vitality, increasing your healing received and damage shield strength by 6% for 10 seconds. Enemies are afflicted with Major Maim, reducing their damage done by 10% for 10 seconds.',
        changes: 'The area now heals you and allies, rather than immobilizing enemies, but at an increased cost. Healed targets receive Minor Vitality.'
      }
    ],
    buffsApplied: ['minor_vitality'],
    debuffsApplied: ['immobilize', 'major_maim'],
    damage: {
      baseDamage: 1979,
      scalingFactor: 1.2,
      damageType: 'magic'
    },
    effects: []
  },

  {
    id: 'rune-prison',
    name: 'Rune Prison',
    description: 'Imprison an enemy in a constricting sphere of dark magic. After a short duration they are stunned for 3 seconds. This stun cannot be blocked.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3510
    },
    duration: 3,
    morphs: [
      {
        id: 'defensive-rune',
        name: 'Defensive Rune',
        description: 'Place a rune of protection on yourself for 2 minutes. While active, the next enemy to attack you is imprisoned in a constricting sphere of dark magic, stunning them after a short delay for 3 seconds. This stun cannot be blocked.',
        changes: 'Cast spell on self, stunning the next enemy who attacks you.'
      },
      {
        id: 'rune-cage',
        name: 'Rune Cage',
        description: 'Imprison an enemy in a constricting sphere of dark magic. After a short duration they are stunned for 3 seconds. Deals 1799 Magic Damage if the stun lasts the full duration. This stun cannot be blocked.',
        changes: 'Deals damage when effect completes.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 1799,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'unblockable',
        type: 'other',
        description: 'Stun cannot be blocked'
      }
    ]
  },

  {
    id: 'dark-exchange',
    name: 'Dark Exchange',
    description: 'Bargain with darkness to restore 8000 Health and 3600 Magicka instantly, and an additional 2400 Magicka over 20 seconds. The exchange also grants you Minor Berserk for 20 seconds, increasing your damage done by 5%.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 4320
    },
    morphs: [
      {
        id: 'dark-conversion',
        name: 'Dark Conversion',
        description: 'Bargain with darkness to restore 10000 Health and 4500 Magicka instantly, and an additional 3000 Magicka over 20 seconds. The exchange also grants you Minor Berserk for 20 seconds, increasing your damage done by 5%.',
        changes: 'Increases the amount of Health and Magicka restored.'
      },
      {
        id: 'dark-deal',
        name: 'Dark Deal',
        description: 'Bargain with darkness to restore 8000 Health and 3600 Stamina instantly, and an additional 2400 Stamina over 10 seconds. The exchange also grants you Minor Berserk and Minor Force for 10 seconds, increasing your damage done by 5% and Critical Damage by 10%.',
        changes: 'Converts Magicka into Health and Stamina instead. Reduces the cost, the time it takes the ability to restore resources, and the duration of Minor Berserk, but adds Minor Force.'
      }
    ],
    buffsApplied: ['minor_berserk', 'minor_force'],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-restoration',
        type: 'other',
        description: 'Restores Health and Magicka/Stamina over time'
      }
    ]
  },

  {
    id: 'daedric-mines',
    name: 'Daedric Mines',
    description: 'Surprise your foes by placing 3 volatile Daedric mines around you, which take 3 seconds to arm and last for 15 seconds. When a mine is triggered it explodes, dealing 2613 Magic Damage and immobilizing the enemy for 2 seconds. Enemies can only be damaged by your mines once every 2 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 15,
    morphs: [
      {
        id: 'daedric-refuge',
        name: 'Daedric Refuge',
        description: 'Carefully form 5 protective Daedric wards around you, which take 3 seconds to arm and last for 15 seconds. When a Daedric ward is triggered it grants you or the ally a damage shield that absorbs 3591 damage for 6 seconds. Targets can only be shielded by Daedric Refuge once every 2 seconds and the shield is capped at 43% of the target\'s Max Health.',
        changes: 'Converts the mines into protective wards that shield you or allies when they activate.'
      },
      {
        id: 'daedric-tomb',
        name: 'Daedric Tomb',
        description: 'Surprise your foes by placing 3 volatile Daedric mines at a target location, which arm instantly and last for 15 seconds. When a mine is triggered it explodes, dealing 2700 Magic Damage and immobilizing the enemy for 2 seconds. Enemies can only be damaged by your mines once every 2 seconds.',
        changes: 'You place the mines at a target location instead of around you. The mines arm instantly.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize'],
    damage: {
      baseDamage: 2613,
      scalingFactor: 1.3,
      damageType: 'magic'
    },
    effects: []
  }
];

// Dark Magic Passives
const darkMagicPassives: Skill[] = [
  {
    id: 'unholy-knowledge',
    name: 'Unholy Knowledge',
    description: 'Reduces the Health, Magicka, and Stamina costs of your non Core Combat abilities by 6%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'other',
        description: 'Reduces ability costs by 6%',
        value: 6,
        percentage: true
      }
    ]
  },

  {
    id: 'blood-magic',
    name: 'Blood Magic',
    description: 'When you cast a Dark Magic ability with a cost, you heal for 1600. This effect scales off your Max Health.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-on-cast',
        type: 'other',
        description: 'Heal for 1600 when casting Dark Magic abilities',
        value: 1600
      }
    ]
  },

  {
    id: 'persistence',
    name: 'Persistence',
    description: 'After blocking an attack, your next Health, Magicka, or Stamina ability costs 18% less.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'block-cost-reduction',
        type: 'other',
        description: 'Next ability costs 18% less after blocking',
        value: 18,
        percentage: true
      }
    ]
  },

  {
    id: 'exploitation',
    name: 'Exploitation',
    description: 'When you cast a Dark Magic ability you grant Minor Prophecy to you and your group, increasing your Spell Critical rating by 1314 for 20 seconds.',
    type: 'passive',
    buffsApplied: ['minor_prophecy'],
    debuffsApplied: [],
    duration: 20,
    effects: []
  }
];

// DAEDRIC SUMMONING SKILL LINE
const daedricSummoningSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'summon-storm-atronach',
    name: 'Summon Storm Atronach',
    description: 'Summon an immobile storm atronach at the target location. Its arrival deals 2249 Shock Damage and stuns enemies for 3 seconds. The atronach zaps the closest enemy, dealing 1124 Shock Damage every 1 second. An ally near the atronach can activate the Charged Lightning synergy, granting nearby allies Major Berserk for 10 seconds, increasing their damage done by 10%.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 30,
    morphs: [
      {
        id: 'greater-storm-atronach',
        name: 'Greater Storm Atronach',
        description: 'Summon an immobile storm atronach at the target location. Its arrival deals 2249 Shock Damage and stuns enemies for 3 seconds. The atronach zaps the closest enemy, dealing 1509 Shock Damage every 1 second. An ally near the atronach can activate the Charged Lightning synergy, granting nearby allies Major Berserk for 10 seconds, increasing their damage done by 10%.',
        changes: 'Increases the health and damage of the atronach.'
      },
      {
        id: 'summon-charged-atronach',
        name: 'Summon Charged Atronach',
        description: 'Summon an immobile storm atronach at the target location. Its arrival deals 2323 Shock Damage and stuns enemies for 3 seconds. The atronach calls upon a lightning storm every 2 seconds, dealing 2323 Shock Damage to enemies around it. Enemies hit are afflicted with the Concussion status effect. An ally near the atronach can activate the Charged Lightning synergy, granting nearby allies Major Berserk for 10 seconds, increasing their damage done by 10%.',
        changes: 'The atronach now uses a powerful area of effect attack, which always applies Concussion.'
      }
    ],
    buffsApplied: ['major_berserk'],
    debuffsApplied: ['stun', 'concussion'],
    damage: {
      baseDamage: 2249,
      scalingFactor: 2.0,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'synergy',
        type: 'other',
        description: 'Allies can activate Charged Lightning synergy'
      }
    ]
  },

  // Active abilities
  {
    id: 'summon-unstable-familiar',
    name: 'Summon Unstable Familiar',
    description: 'Command the powers of Oblivion to send a Daedric familiar to fight at your side. The familiar\'s attacks deal 347 Shock Damage. Once summoned, you can activate the familiar\'s special ability for 3510 Magicka, dealing 421 Shock Damage every 2 seconds for 20 seconds to enemies near them. The familiar remains until killed or unsummoned.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    morphs: [
      {
        id: 'summon-unstable-clannfear',
        name: 'Summon Unstable Clannfear',
        description: 'Command the powers of Oblivion to send a Daedric clannfear to fight at your side. The clannfear\'s headbutt deals 358 Physical Damage, while its tail spike hits nearby enemies for 358 Physical Damage after 1 second. Once summoned, you can activate the clannfear\'s special ability for 4320 Magicka, healing you for 5121 and the clannfear for 2560. The clannfear remains until killed or unsummoned.',
        changes: 'Summons a clannfear instead of a familiar. Once summoned, you can activate the clannfear\'s special ability to heal you and the clannfear based on your Max Health. The clannfear\'s basic attacks deal Physical Damage.'
      },
      {
        id: 'summon-volatile-familiar',
        name: 'Summon Volatile Familiar',
        description: 'Command the powers of Oblivion to send a Daedric familiar to fight at your side. The familiar\'s attacks deal 358 Shock Damage. Once summoned, you can activate the familiar\'s special ability for 3510 Magicka, dealing 435 Shock Damage every 2 seconds for 20 seconds to enemies near them. The second hit stuns enemies hit for 3 seconds. The familiar remains until killed or unsummoned.',
        changes: 'You summon a volatile familiar. Once summoned, you can activate the familiar\'s special ability to pulse area damage and stun enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 347,
      scalingFactor: 1.0,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'permanent-pet',
        type: 'other',
        description: 'Summons a permanent pet until killed or unsummoned'
      }
    ]
  },

  {
    id: 'daedric-curse',
    name: 'Daedric Curse',
    description: 'Curse an enemy with a destructive rune, dealing 2904 Magic Damage to the target and all other nearby enemies after 6 seconds. You can have only one Daedric Curse active at a time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    duration: 6,
    morphs: [
      {
        id: 'daedric-prey',
        name: 'Daedric Prey',
        description: 'Curse an enemy with a destructive rune, dealing 2904 Magic Damage to the target and all other nearby enemies after 6 seconds. While the curse is active, your Daedric Summoning pets prioritize the target and deal an additional 50% damage to them. You can have only one Daedric Prey active at a time.',
        changes: 'Reduces the cost and your Daedric Summoning pets deal additional damage to the cursed target.'
      },
      {
        id: 'haunting-curse',
        name: 'Haunting Curse',
        description: 'Curse an enemy with a destructive rune, dealing 2999 Magic Damage to the target and all other nearby enemies after 3.5 seconds. The curse will continue to haunt the enemy and explode a second time, dealing 2999 Magic Damage to the target and all other nearby enemies after an additional 8.5 seconds. You can have only one Haunting Curse active at a time.',
        changes: 'The curse will continue to haunt the enemy and explode a second time.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 2904,
      scalingFactor: 1.8,
      damageType: 'magic'
    },
    effects: []
  },

  {
    id: 'summon-winged-twilight',
    name: 'Summon Winged Twilight',
    description: 'Call on Azura to send a winged twilight to fight at your side. The winged twilight\'s zap deals 347 Shock Damage and its kick deals 347 Shock Damage. Once summoned, you can activate the winged twilight\'s special ability for 4590 Magicka, causing it to heal a friendly target for 3486 and itself for 1742. The winged twilight remains until killed or unsummoned.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    morphs: [
      {
        id: 'summon-twilight-matriarch',
        name: 'Summon Twilight Matriarch',
        description: 'Call on Azura to send a twilight matriarch to fight at your side. The twilight matriarch\'s zap deals 347 Shock Damage and its kick deals 347 Shock Damage. Once summoned, you can activate the twilight matriarch\'s special ability for 4590 Magicka, causing it to heal 2 friendly targets for 3600 and itself for 1799. The twilight matriarch remains until killed or unsummoned.',
        changes: 'You summon a twilight matriarch. Once summoned, you can activate the twilight\'s special ability to heal the matriarch and up to 2 other friendly targets.'
      },
      {
        id: 'summon-twilight-tormentor',
        name: 'Summon Twilight Tormentor',
        description: 'Call on Azura to send a twilight tormentor to fight at your side. The twilight tormentor\'s zap deals 478 Shock Damage and its kick deals 478 Shock Damage. Once summoned, you can activate the twilight tormentor\'s special ability for 2700 Magicka, causing it to deal 60% more damage to enemies above 50% Health for 20 seconds. The twilight tormentor remains until killed or unsummoned.',
        changes: 'You summon a twilight tormentor, which deals higher damage. Once summoned, you can activate the twilight\'s special ability to grant it a damage bonus to high health enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 347,
      scalingFactor: 1.0,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'permanent-pet',
        type: 'other',
        description: 'Summons a permanent pet until killed or unsummoned'
      },
      {
        id: 'healing-ability',
        type: 'other',
        description: 'Pet can activate healing ability'
      }
    ]
  },

  {
    id: 'conjured-ward',
    name: 'Conjured Ward',
    description: 'Conjure globes of Daedric energy for protection, granting a damage shield for you and your pets that absorbs 5454 damage for 6 seconds. This ability scales off the higher of your Max Health or Magicka and the shield is capped at 55% of your Max Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 6,
    morphs: [
      {
        id: 'hardened-ward',
        name: 'Hardened Ward',
        description: 'Conjure globes of Daedric energy for protection, granting a damage shield for you and your pets that absorbs 7323 damage for 6 seconds. This ability scales off the higher of your Max Health or Magicka and the shield is capped at 72% of your Max Health.',
        changes: 'Damage shield absorbs more and has a higher capped value.'
      },
      {
        id: 'regenerative-ward',
        name: 'Regenerative Ward',
        description: 'Conjure globes of Daedric energy for protection, granting a damage shield for you and your pets that absorbs 5454 damage for 10 seconds, heals you for 826 Health, and grants Minor Intellect and Minor Endurance to you and nearby allies for 10 seconds. This ability scales off the higher of your Max Health or Magicka and the shield is capped at 55% of your Max Health.',
        changes: 'Reduces the cost, increases the duration of the shield, and also grants you and your allies Minor Intellect and Endurance. This ability now applies a self heal.'
      }
    ],
    buffsApplied: ['minor_intellect', 'minor_endurance'],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-shield',
        type: 'shield',
        description: 'Absorbs damage up to the shield value',
        value: 5454
      }
    ]
  },

  {
    id: 'bound-armor',
    name: 'Bound Armor',
    description: 'Protect yourself with the power of Oblivion, creating a suit of Daedric mail that increases your block mitigation by 36% for 3 seconds. While slotted on either ability bar, your Max Magicka is increased by 8% and you gain Minor Protection, reducing your damage taken by 5%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 3,
    morphs: [
      {
        id: 'bound-aegis',
        name: 'Bound Aegis',
        description: 'Protect yourself with the power of Oblivion, creating a suit of Daedric mail that increases your block mitigation by 40% for 5 seconds. While slotted on either ability bar, your Max Magicka is increased by 8% and you gain Minor Resolve and Minor Protection, increasing your Physical and Spell Resistance by 2974 and reducing your damage taken by 5%.',
        changes: 'Passively grants Minor Resolve while slotted. Increases the potency and duration of the block mitigation.'
      },
      {
        id: 'bound-armaments',
        name: 'Bound Armaments',
        description: 'While slotted on either ability bar, your Light and Heavy Attacks summon a Bound weapon for 10 seconds, up to 8 times. Fully-charged Heavy Attacks grant two stacks. When you have one or more Bound Weapon active, you can activate the ability to arm up to four of the weapons, causing them to strike your target for 863 Physical Damage every 0.3 seconds. While slotted, your Max Stamina is increased by 8%.',
        changes: 'Converts into a Stamina ability. Light and Heavy attacks summon Bound weapons that can be used to attack your current target. No longer grants block mitigation.'
      }
    ],
    buffsApplied: ['minor_protection', 'minor_resolve'],
    debuffsApplied: [],
    effects: [
      {
        id: 'block-mitigation',
        type: 'other',
        description: 'Increases block mitigation by 36-40%',
        value: 36,
        percentage: true
      },
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Max Magicka increased by 8% while slotted',
        value: 8,
        percentage: true
      }
    ]
  }
];

// Daedric Summoning Passives
const daedricSummoningPassives: Skill[] = [
  {
    id: 'rebate',
    name: 'Rebate',
    description: 'You restore 371 Magicka or Stamina when one of your non-Ultimate Daedric Summoning abilities end. The resource returned is dictated by the ability\'s cost.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-return',
        type: 'other',
        description: 'Restore 371 Magicka or Stamina when abilities end',
        value: 371
      }
    ]
  },

  {
    id: 'power-stone',
    name: 'Power Stone',
    description: 'Reduces the cost of your Ultimate abilities by 15%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-cost-reduction',
        type: 'other',
        description: 'Ultimate abilities cost 15% less',
        value: 15,
        percentage: true
      }
    ]
  },

  {
    id: 'daedric-protection',
    name: 'Daedric Protection',
    description: 'Reduce your damage taken by 5% while you have a Daedric Summoning ability active.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-reduction',
        type: 'other',
        description: 'Reduce damage taken by 5% with active Daedric Summoning ability',
        value: 5,
        percentage: true
      }
    ]
  },

  {
    id: 'expert-summoner',
    name: 'Expert Summoner',
    description: 'Increases your Magicka and Stamina by 5%. Increases your Max Health by 5% if you have a permanent pet active.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-increase',
        type: 'stat_increase',
        description: 'Increases Max Magicka and Stamina by 5%',
        value: 5,
        percentage: true
      },
      {
        id: 'health-increase-with-pet',
        type: 'stat_increase',
        description: 'Increases Max Health by 5% with permanent pet active',
        value: 5,
        percentage: true
      }
    ]
  }
];

// STORM CALLING SKILL LINE
const stormCallingSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'overload',
    name: 'Overload',
    description: 'Charge your fists with the power of the storm, replacing your Light and Heavy Attacks with new, stronger abilities. Light Attacks become lightning bolts, dealing 2323 Shock Damage to an enemy up to 28 meters away. Heavy Attacks blast enemies in a 4 x 6 area for 2090 Shock Damage. Attacks deplete Ultimate until you run out, or the ability is toggled off.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 125
    },
    morphs: [
      {
        id: 'energy-overload',
        name: 'Energy Overload',
        description: 'Charge your fists with the power of the storm, replacing your Light and Heavy Attacks with new, stronger abilities. Light Attacks become lightning bolts, dealing 2399 Shock Damage to an enemy up to 28 meters away. Heavy Attacks blast enemies in a 4 x 6 area for 2160 Shock Damage. The attacks restore 1200 Magicka and Stamina, and deplete Ultimate until you run out, or the ability is toggled off.',
        changes: 'While active your Light and Heavy Attacks restore Magicka and Stamina.'
      },
      {
        id: 'power-overload',
        name: 'Power Overload',
        description: 'Charge your fists with the power of the storm, replacing your Light and Heavy Attacks with new, stronger abilities. Light Attacks become lightning bolts, dealing 2640 Shock Damage to an enemy up to 32 meters away. Heavy Attacks blast enemies in a 6 x 8 area for 2375 Shock Damage. Attacks deplete Ultimate until you run out, or the ability is toggled off.',
        changes: 'Increase range of Light Attacks and radius of Heavy Attacks. Increases damage.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 2323,
      scalingFactor: 2.5,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'attack-replacement',
        type: 'other',
        description: 'Replaces Light and Heavy Attacks with enhanced versions'
      }
    ]
  },

  // Active abilities
  {
    id: 'mages-fury',
    name: 'Mages\' Fury',
    description: 'Call down lightning to strike an enemy, dealing 870 Shock Damage. If the enemy falls to or below 20% Health within 2 seconds of being struck, an explosion deals an additional 3195 Shock Damage to them and 695 Shock Damage to other enemies nearby.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    morphs: [
      {
        id: 'endless-fury',
        name: 'Endless Fury',
        description: 'Call down lightning to strike an enemy, dealing 871 Shock Damage. If the enemy falls to or below 20% Health within 2 seconds of being struck, an explosion deals an additional 3195 Shock Damage to them and 696 Shock Damage to other enemies nearby. If any enemy is killed within 5 seconds of being hit with this ability, you restore 4860 Magicka.',
        changes: 'Reduces the cost and restores Magicka if the target dies after this ability dealt damage to them.'
      },
      {
        id: 'mages-wrath',
        name: 'Mages\' Wrath',
        description: 'Call down lightning to strike an enemy, dealing 871 Shock Damage. If the enemy falls to or below 20% Health within 2 seconds of being struck, an explosion deals an additional 3195 Shock Damage to them and all nearby enemies.',
        changes: 'Significantly increases the damage dealt to other enemies nearby.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 870,
      scalingFactor: 1.2,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'execute-explosion',
        type: 'other',
        description: 'Explodes if enemy drops to 20% Health within 2 seconds'
      }
    ]
  },

  {
    id: 'lightning-form',
    name: 'Lightning Form',
    description: 'Manifest yourself as pure lightning, zapping nearby enemies with electricity dealing 462 Shock Damage every 2 seconds for 20 seconds. While in this form you also gain Major Resolve, increasing your Physical Resistance and Spell Resistance by 5948.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 20,
    morphs: [
      {
        id: 'boundless-storm',
        name: 'Boundless Storm',
        description: 'Manifest yourself as pure lightning, zapping nearby enemies with electricity dealing 463 Shock Damage every 2 seconds for 30 seconds. While in this form you also gain Major Resolve, increasing your Physical Resistance and Spell Resistance by 5948. Activating this grants you Major Expedition, increasing your Movement Speed by 30% for 4 seconds.',
        changes: 'Increases the duration, and you gain Major Expedition for brief period after activation, increasing your Movement Speed.'
      },
      {
        id: 'hurricane',
        name: 'Hurricane',
        description: 'Manifest yourself as pure air, buffeting nearby enemies with wind dealing 478 Physical Damage every 2 seconds for 20 seconds. The winds grow in damage and size, increasing up to 120% more damage and up to 9 meters in size. While in this form you gain Major Resolve and Minor Expedition, increasing your Physical and Spell Resistance by 5948 and your Movement Speed by 15%.',
        changes: 'Converts into a Stamina ability and deals Physical Damage. Increases in size and damage the longer it is active. Grants Minor Expedition while active, increasing your Movement Speed.'
      }
    ],
    buffsApplied: ['major_resolve', 'major_expedition', 'minor_expedition'],
    debuffsApplied: [],
    damage: {
      baseDamage: 462,
      scalingFactor: 1.0,
      damageType: 'shock'
    },
    effects: []
  },

  {
    id: 'lightning-splash',
    name: 'Lightning Splash',
    description: 'Create a nexus of storm energy at the target location, dealing 308 Shock Damage to enemies in the area every 1 second for 10 seconds. You or an ally standing within the nexus can activate the Conduit synergy, dealing 2698 Shock Damage to enemies around them.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    duration: 10,
    morphs: [
      {
        id: 'lightning-flood',
        name: 'Lightning Flood',
        description: 'Create a nexus of storm energy at the target location, dealing 415 Shock Damage to enemies in the area every 1 second for 10 seconds. You or an ally standing within the nexus can activate the Conduit synergy, dealing 2698 Shock Damage to enemies around them.',
        changes: 'Increases the radius and damage.'
      },
      {
        id: 'liquid-lightning',
        name: 'Liquid Lightning',
        description: 'Create a nexus of storm energy at the target location, dealing 309 Shock Damage to enemies in the area every 1 second for 15 seconds. You or an ally standing within the nexus can activate the Conduit synergy, dealing 2698 Shock Damage to enemies around them.',
        changes: 'Increases the duration.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 308,
      scalingFactor: 0.8,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'synergy',
        type: 'other',
        description: 'Allies can activate Conduit synergy'
      }
    ]
  },

  {
    id: 'surge',
    name: 'Surge',
    description: 'Invoke Meridia\'s name to gain Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20% for 33 seconds. While active, dealing Critical Damage heals you for 2550 Health. This effect can occur once every 1 second.',
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
        description: 'Invoke Meridia\'s name to gain Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20% for 33 seconds. While active, dealing Critical Damage heals you for 3300 Health. This effect can occur once every 1 second.',
        changes: 'Increases the healing.'
      },
      {
        id: 'power-surge',
        name: 'Power Surge',
        description: 'Invoke Meridia\'s name to gain Major Brutality and Major Sorcery, increasing your Weapon Damage and Spell Damage by 20% for 33 seconds. While active, activating a Critical heal causes the ability to heal you and your allies around you for 2550 Health. This effect can occur once every 3 seconds.',
        changes: 'The heal now heals in an area around you but with a longer cooldown, and only triggers off Critical healing.'
      }
    ],
    buffsApplied: ['major_brutality', 'major_sorcery'],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-heal',
        type: 'other',
        description: 'Heal when dealing critical damage',
        value: 2550
      }
    ]
  },

  {
    id: 'bolt-escape',
    name: 'Bolt Escape',
    description: 'Transform yourself into pure energy and flash forward, stunning enemies near your final location for 3 seconds. This effect cannot be blocked. Casting again within 4 seconds costs 33% more Magicka.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    morphs: [
      {
        id: 'ball-of-lightning',
        name: 'Ball of Lightning',
        description: 'Transform yourself into pure energy and flash forward. After reaching your location, you become immune to snare and immobilize effects for 2 seconds. A ball of lightning is summoned at your end point, which intercepts up to 1 projectile attack made against you every 1 second for 3 seconds. Casting again within 4 seconds costs 33% more Magicka.',
        changes: 'Summons a ball of lightning that protects you from projectiles, but no longer stuns enemies. Grants brief snare and immobilization immunity after casting.'
      },
      {
        id: 'streak',
        name: 'Streak',
        description: 'Transform yourself into pure energy and flash forward, dealing 1438 Shock Damage to enemies in your wake and stunning them for 3 seconds. This effect cannot be blocked. Casting again within 4 seconds costs 33% more Magicka.',
        changes: 'Now deals damage and stuns enemies between your beginning and final location.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 1438,
      scalingFactor: 1.0,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'teleport',
        type: 'other',
        description: 'Teleports forward'
      },
      {
        id: 'ramping-cost',
        type: 'other',
        description: 'Costs 33% more if cast within 4 seconds',
        value: 33,
        percentage: true
      }
    ]
  }
];

// Storm Calling Passives
const stormCallingPassives: Skill[] = [
  {
    id: 'capacitor',
    name: 'Capacitor',
    description: 'Increases your Health, Magicka, and Stamina Recovery by 141.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'recovery-increase',
        type: 'stat_increase',
        description: 'Increases all Recovery by 141',
        value: 141
      }
    ]
  },

  {
    id: 'energized',
    name: 'Energized',
    description: 'Increases your Physical and Shock Damage by 5%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-increase',
        type: 'stat_increase',
        description: 'Increases Physical and Shock Damage by 5%',
        value: 5,
        percentage: true
      }
    ]
  },

  {
    id: 'amplitude',
    name: 'Amplitude',
    description: 'Increases your damage done against enemies by 1% for every 10% current Health they have.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'health-based-damage',
        type: 'other',
        description: 'Damage increases based on enemy current Health',
        value: 1,
        percentage: true
      }
    ]
  },

  {
    id: 'expert-mage',
    name: 'Expert Mage',
    description: 'Increases your Weapon and Spell Damage by 108 for each Sorcerer ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'slotted-damage-bonus',
        type: 'stat_increase',
        description: 'Weapon and Spell Damage +108 per Sorcerer ability slotted',
        value: 108
      }
    ]
  }
];

// Export Sorcerer Skills
export const sorcererSkills = {
  darkMagic: [...darkMagicSkills, ...darkMagicPassives],
  daedricSummoning: [...daedricSummoningSkills, ...daedricSummoningPassives],
  stormCalling: [...stormCallingSkills, ...stormCallingPassives]
};

export default sorcererSkills;

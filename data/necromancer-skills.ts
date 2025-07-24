// Necromancer Skills - The death magic class
import { Skill } from './skills';

// GRAVE LORD SKILL LINE
const graveLordSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'frozen-colossus',
    name: 'Frozen Colossus',
    description: 'CRIMINAL ACT Unleash a frostbitten Flesh Colossus to pulverize enemies in the area. The Colossus smashes the ground three times over 3 seconds, dealing 3096 Frost Damage with each smash. Dealing damage applies Major Vulnerability to any enemy hit for 12 seconds, increasing their damage taken by 10%.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 320
    },
    duration: 3,
    radius: 8,
    morphs: [
      {
        id: 'glacial-colossus',
        name: 'Glacial Colossus',
        description: 'Unleash a frostbitten Flesh Colossus to pulverize enemies in the area. The Colossus smashes the ground three times over 3 seconds, dealing 3098 Frost Damage with each smash. The final smash stuns all enemies hit for 4 seconds. Dealing damage applies Major Vulnerability to any enemy hit for 17 seconds, increasing their damage taken by 10%.',
        changes: 'Increases the duration of Major Vulnerability and the final smash stuns all enemies hit.'
      },
      {
        id: 'pestilent-colossus',
        name: 'Pestilent Colossus',
        description: 'Unleash a pestilent Flesh Colossus to pulverize enemies in the area. The Colossus smashes the ground three times over 3 seconds, dealing 3200 3360, and 3528 Disease Damage with the first, second, and third smash. Dealing damage applies the Diseased status effect and Major Vulnerability to any enemy hit for 12 seconds, increasing their damage taken by 10%.',
        changes: 'Deals Disease Damage. The Colossus deals more damage with each smash and always applies the Diseased status effect.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_vulnerability', 'diseased', 'stun'],
    damage: {
      baseDamage: 3096,
      scalingFactor: 3.0,
      damageType: 'frost'
    },
    effects: [
      {
        id: 'colossus-smash',
        type: 'other',
        description: 'Colossus smashes 3 times over 3 seconds',
        duration: 3
      },
      {
        id: 'criminal-act',
        type: 'other',
        description: 'Criminal act when witnessed'
      }
    ]
  },

  // Active abilities
  {
    id: 'flame-skull',
    name: 'Flame Skull',
    description: 'Lob an explosive skull at an enemy, dealing 2090 Flame Damage. Every third cast of this ability deals 50% increased damage and creates a corpse near the enemy.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'ricochet-skull',
        name: 'Ricochet Skull',
        description: 'Lob an explosive skull at an enemy, dealing 2160 Flame Damage. Every third cast of this ability deals 50% increased damage, creates a corpse near the initial enemy, and will bounce up to 2 times to other nearby enemies.',
        changes: 'The third cast of the skull will bounce to other nearby enemies.'
      },
      {
        id: 'venom-skull',
        name: 'Venom Skull',
        description: 'Lob an explosive skull at an enemy, dealing 2160 Poison Damage. Every third cast of this ability deals 50% increased damage and creates a corpse near the enemy, up to once every 3 seconds. While slotted, casting any Necromancer ability while you are in combat will count towards the third cast.',
        changes: 'Converts into a Stamina ability and deals Poison Damage. Casting any Necromancer ability counts towards the third cast.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['poisoned'],
    damage: {
      baseDamage: 2090,
      scalingFactor: 1.8,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'third-cast-bonus',
        type: 'other',
        description: 'Every third cast deals 50% more damage and creates corpse'
      }
    ]
  },

  {
    id: 'sacrificial-bones',
    name: 'Sacrificial Bones',
    description: 'CRIMINAL ACT Summon a skeleton from the ground after 2.5 seconds. The skeleton leaps to you, sacrificing the fallen soul within and enhancing your necromantic energies for 10 seconds, increasing your damage done with Necromancer abilities and damage over time effects by 15%. Creates a corpse on death if you are in combat.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    duration: 10,
    morphs: [
      {
        id: 'blighted-blastbones',
        name: 'Blighted Blastbones',
        description: 'Summon a decaying skeleton from the ground after 2.5 seconds. The skeleton runs after the target and explodes when it gets close to them, dealing 3600 Disease Damage to all enemies nearby and applying the Diseased status effect and Major Defile to them for 4 seconds, reducing their healing received and damage shield strength by 12%. Creates a corpse on death.',
        changes: 'Converts into a Stamina ability that deals Disease Damage to enemies instead of empowering you. Applies Major Defile and the Diseased status effect to enemies hit.'
      },
      {
        id: 'grave-lords-sacrifice',
        name: 'Grave Lord\'s Sacrifice',
        description: 'Summon a skeleton from the ground after 2.5 seconds. The skeleton leaps to you, sacrificing the fallen soul within and mastering your necromantic energies for 20 seconds, increasing your damage done with Necromancer abilities and damage over time effects by 15%. While active, your third cast of Flame Skull damages in an 6 meter area. Creates a corpse on death if you are in combat.',
        changes: 'Increases the duration. While active, your third Flame Skull deals damage in an area.'
      }
    ],
    buffsApplied: ['necromancer_mastery'],
    debuffsApplied: ['major_defile', 'diseased'],
    damage: {
      baseDamage: 3600,
      scalingFactor: 3.2,
      damageType: 'disease'
    },
    effects: [
      {
        id: 'skeleton-summon',
        type: 'other',
        description: 'Summons skeleton after 2.5 second delay, creates corpse on death'
      },
      {
        id: 'criminal-act',
        type: 'other',
        description: 'Criminal act when witnessed'
      },
      {
        id: 'necromantic-empowerment',
        type: 'other',
        description: '+15% damage with Necromancer abilities and DoTs',
        duration: 10
      }
    ]
  },

  {
    id: 'boneyard',
    name: 'Boneyard',
    description: 'Desecrate the ground at the target location, dealing 3080 Frost Damage over 10 seconds to enemies inside and applying Minor Vulnerability, increasing their damage taken by 5%. Consumes a corpse on cast to deal 30% more damage. An ally in the area can activate the Grave Robber synergy, dealing 2249 Frost Damage to nearby enemies and healing for the damage done.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    range: 28,
    radius: 6,
    duration: 10,
    morphs: [
      {
        id: 'avid-boneyard',
        name: 'Avid Boneyard',
        description: 'Desecrate the ground at the target location, dealing 3190 Frost Damage over 10 seconds to enemies inside and applying Minor Vulnerability, increasing their damage taken by 5%. Consumes a corpse on cast to deal 30% more damage. You or an ally in the area can activate the Grave Robber synergy, dealing 2249 Frost Damage to enemies and healing for the damage done.',
        changes: 'You can use your own synergy.'
      },
      {
        id: 'unnerving-boneyard',
        name: 'Unnerving Boneyard',
        description: 'Desecrate the ground at the target location, dealing 3190 Frost Damage over 10 seconds to enemies inside and applying Major Breach and Minor Vulnerability, reducing Physical and Spell Resistance by 5948 and increasing damage taken by 5% for 4.1 seconds each tick. Consumes a corpse on cast to deal 30% more damage. An ally in the area can activate the Grave Robber synergy, dealing 2249 Frost Damage to nearby enemies and healing for the damage done.',
        changes: 'Applies Major Breach and Minor Vulnerability each tick, persisting for a duration when enemies leave the area.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_vulnerability', 'major_breach'],
    damage: {
      baseDamage: 3080,
      scalingFactor: 2.8,
      damageType: 'frost',
      isDoT: true,
      dotTicks: 10
    },
    effects: [
      {
        id: 'corpse-consumption',
        type: 'other',
        description: 'Consumes corpse on cast for 30% more damage'
      },
      {
        id: 'grave-robber-synergy',
        type: 'other',
        description: 'Ally synergy deals 2249 Frost damage and heals for damage done'
      }
    ]
  },

  {
    id: 'skeletal-mage',
    name: 'Skeletal Mage',
    description: 'CRIMINAL ACT Unearth a skeletal mage from the dirt to fight by your side for 20 seconds, while granting you Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20%. The mage attacks the closest enemy every 2 seconds, dealing 462 Shock Damage. Creates a corpse on death if you are in combat.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 20,
    morphs: [
      {
        id: 'skeletal-arcanist',
        name: 'Skeletal Arcanist',
        description: 'Unearth a skeletal mage from the dirt to fight by your side for 20 seconds, while granting you Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20%. The mage attacks the closest enemy every 2 seconds, dealing 478 Shock Damage to them and all other enemies nearby. Creates a corpse on death if you are in combat.',
        changes: 'The mage deals damage to all enemies around the initial target.'
      },
      {
        id: 'skeletal-archer',
        name: 'Skeletal Archer',
        description: 'Unearth a skeletal archer from the dirt to fight by your side for 20 seconds, while granting you Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20%. The archer attacks the closest enemy every 2 seconds, dealing 463 Physical Damage. Each time the archer deals damage, it deals 15% more damage than the previous attack. Creates a corpse on death if you are in combat.',
        changes: 'Converts into a Stamina ability and deals Physical Damage. The archer deals more damage with each attack.'
      }
    ],
    buffsApplied: ['major_brutality', 'major_sorcery'],
    debuffsApplied: [],
    damage: {
      baseDamage: 462,
      scalingFactor: 0.4,
      damageType: 'shock'
    },
    effects: [
      {
        id: 'skeletal-pet',
        type: 'other',
        description: 'Summons skeletal mage for 20 seconds, creates corpse on death'
      },
      {
        id: 'criminal-act',
        type: 'other',
        description: 'Criminal act when witnessed'
      }
    ]
  },

  {
    id: 'shocking-siphon',
    name: 'Shocking Siphon',
    description: 'Violently drain the last spark of life from a corpse, dealing 6150 Shock Damage over 20 seconds to all enemies around the corpse and between you and the corpse. You also gain Major Savagery and Prophecy for 20 seconds, increasing your Weapon and Spell Critical rating by 2629. While slotted, your damage done is increased by 3%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3510
    },
    duration: 20,
    morphs: [
      {
        id: 'detonating-siphon',
        name: 'Detonating Siphon',
        description: 'Violently drain the last spark of life from a corpse, dealing 6180 Disease Damage over 20 seconds to all enemies around the corpse and between you and the corpse. You also gain Major Savagery and Prophecy for 20 seconds, increasing your Weapon and Spell Critical rating by 2629. When the siphon ends the corpse explodes, dealing an additional 1799 Disease Damage to all enemies nearby. While slotted, your damage done is increased by 3%.',
        changes: 'Ability now deals Disease Damage. The corpse explodes at the end of the siphon, dealing additional damage.'
      },
      {
        id: 'mystic-siphon',
        name: 'Mystic Siphon',
        description: 'Violently drain the last spark of life from a corpse, dealing 6180 Shock Damage over 20 seconds to all enemies around the corpse and between you and the corpse. You also gain Major Savagery and Prophecy for 20 seconds, increasing your Weapon and Spell Critical rating by 2629. While siphoning the corpse you gain 150 Health, Magicka, and Stamina Recovery. While slotted, your damage done is increased by 3%.',
        changes: 'Your Health, Magicka, and Stamina Recovery increases while siphoning the corpse.'
      }
    ],
    buffsApplied: ['major_savagery', 'major_prophecy'],
    debuffsApplied: ['diseased'],
    damage: {
      baseDamage: 6150,
      scalingFactor: 5.5,
      damageType: 'shock',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'corpse-siphon',
        type: 'other',
        description: 'Requires corpse to target, deals damage over 20 seconds'
      },
      {
        id: 'passive-damage-bonus',
        type: 'other',
        description: 'While slotted, damage done increased by 3%'
      }
    ]
  }
];

// Grave Lord Passive Skills
const graveLordPassives: Skill[] = [
  {
    id: 'reusable-parts',
    name: 'Reusable Parts',
    description: 'When your Sacrificial Bones, Skeletal Mage, or Spirit Mender dies, the cost of your next Sacrificial Bones, Skeletal Mage, or Spirit Mender is reduced by 66%.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'other',
        description: 'Reduces cost of next summon ability by 66% when previous summon dies'
      }
    ]
  },

  {
    id: 'death-knell',
    name: 'Death Knell',
    description: 'WITH A GRAVE LORD ABILITY SLOTTED Increases your Critical Strike Chance against enemies under 33% Health by 20%.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'execute-crit',
        type: 'other',
        description: '+20% critical chance vs enemies under 33% health'
      }
    ]
  },

  {
    id: 'dismember',
    name: 'Dismember',
    description: 'While a Grave Lord ability is active, your Spell and Physical Penetration are increased by 3271.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'penetration-bonus',
        type: 'other',
        description: '+3271 Spell and Physical Penetration while Grave Lord ability active'
      }
    ]
  },

  {
    id: 'rapid-rot',
    name: 'Rapid Rot',
    description: 'Increases your damage done with damage over time effects by 10%.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'dot-damage-bonus',
        type: 'other',
        description: '+10% damage with damage over time effects'
      }
    ]
  }
];

// BONE TYRANT SKILL LINE
const boneTyrantSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'bone-goliath-transformation',
    name: 'Bone Goliath Transformation',
    description: 'CRIMINAL ACT Become a horrific Bone Goliath, increasing your Max Health by 30000 for 20 seconds and immediately restoring 30000 Health. While transformed, your damaging Light Attacks restore 319 Health and your fully-charged Heavy Attacks restore 800 Health. This ability scales off your Max Health.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 20,
    morphs: [
      {
        id: 'pummeling-goliath',
        name: 'Pummeling Goliath',
        description: 'Become a destructive Pummeling Goliath, increasing your Max Health by 30000 for 20 seconds and immediately restoring 30000 Health. While transformed, your damaging Light Attacks restore 319 Health and your fully-charged Heavy Attacks restore 800 Health. This ability scales off your Max Health. Your Bash attacks can hit multiple targets in front of you and deal 1799 Physical Damage.',
        changes: 'While transformed your Bash attack now scales off your offensive stats and deals damage in a cone in front of you.'
      },
      {
        id: 'ravenous-goliath',
        name: 'Ravenous Goliath',
        description: 'Become a horrific Ravenous Goliath, increasing your Max Health by 30000 for 20 seconds and immediately restoring 30000 Health. While transformed, your damaging Light Attacks restore 319 Health and your fully-charged Heavy Attacks restore 800 Health. You deal 826 Magic Damage to nearby enemies every second and heal for that amount. These abilities scale off your Max Health.',
        changes: 'Adds damage in an area around you that damages enemies and heals you while transformed.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 30000,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'goliath-transformation',
        type: 'other',
        description: '+30000 Max Health for 20 seconds, light/heavy attacks restore health'
      },
      {
        id: 'criminal-act',
        type: 'other',
        description: 'Criminal act when witnessed'
      }
    ]
  },

  // Active abilities
  {
    id: 'death-scythe',
    name: 'Death Scythe',
    description: 'Slice into your enemy\'s life force, dealing 1742 Magic Damage. You heal for 2400 Health for the first enemy hit, and an additional 800 for each additional enemy hit, up to five times. The healing of this ability scales off your Max Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2430
    },
    morphs: [
      {
        id: 'hungry-scythe',
        name: 'Hungry Scythe',
        description: 'Slice into your enemy\'s life force, dealing 1742 Magic Damage. You heal for 2400 Health for the first enemy hit, and an additional 800 for each additional enemy, up to five times. After dealing damage, you heal for 991 Health every 2 seconds over 10 seconds. The healing of this ability scales off your Max Health.',
        changes: 'Gain a heal over time and reduces the cost as the ability ranks up.'
      },
      {
        id: 'ruinous-scythe',
        name: 'Ruinous Scythe',
        description: 'Slice into your enemy\'s life force, dealing 1799 Bleed Damage, applying the Hemorrhaging status effect, and setting them Off Balance for 7 seconds. You heal for 2400 Health for the first enemy hit, and an additional 800 for each additional enemy, up to five times. The healing of this ability scales off your Max Health.',
        changes: 'Converts to a Stamina ability and deals Bleed Damage, applying the Hemorrhaging status effect. Enemies hit are set Off Balance.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['hemorrhaging', 'off_balance'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 2400,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'multi-hit-healing',
        type: 'other',
        description: 'Heals additional 800 Health per additional enemy hit (max 5)'
      }
    ]
  },

  {
    id: 'bone-armor',
    name: 'Bone Armor',
    description: 'Wrap yourself in hardened bone, granting you Major and Minor Resolve, increasing your Physical Resistance and Spell Resistance by 5948 and 2974 for 20 seconds. Creates a corpse when the effect completes if you are in combat.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 20,
    morphs: [
      {
        id: 'beckoning-armor',
        name: 'Beckoning Armor',
        description: 'Wrap yourself in hardened bone, granting you Major and Minor Resolve, increasing your Physical Resistance and Spell Resistance by 5948 and 2974 for 20 seconds. While active, enemies that strike you with ranged attacks will be pulled toward you once every 2 seconds and become taunted for 15 seconds if they are not already taunted. Creates a corpse when the effect completes if you are in combat.',
        changes: 'Pulls in ranged enemies and attempts to taunt them. Reduces the cost as the ability ranks up.'
      },
      {
        id: 'summoners-armor',
        name: 'Summoner\'s Armor',
        description: 'Wrap yourself in hardened bone, granting you Major and Minor Resolve, increasing your Physical Resistance and Spell Resistance by 5948 and 2974 for 30 seconds. While active, reduce the cost of Blastbones, Skeletal Mage, and Spirit Mender by 15%. Creates a corpse when the effect completes if you are in combat.',
        changes: 'Increases the duration. While active, reduces the cost of your Necromancer summon abilities.'
      }
    ],
    buffsApplied: ['major_resolve', 'minor_resolve'],
    debuffsApplied: ['taunt'],
    effects: [
      {
        id: 'corpse-creation',
        type: 'other',
        description: 'Creates corpse when effect ends if in combat'
      }
    ]
  },

  {
    id: 'bitter-harvest',
    name: 'Bitter Harvest',
    description: 'Sap the lingering life from fresh corpses, granting you 2 Ultimate and healing 660 Health every 1 second for 2 seconds per corpse consumed. This ability scales off your Max Health. While slotted, your damage taken is reduced by 3%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    morphs: [
      {
        id: 'deaden-pain',
        name: 'Deaden Pain',
        description: 'Sap the lingering life from fresh corpses, granting you 2 Ultimate and healing 682 Health every 1 second for 4 seconds per corpse consumed. While you have the heal effect, you gain Major Protection, reducing the damage you take by 10%. This ability scales off your Max Health. While slotted, your damage taken is reduced by 3%.',
        changes: 'Doubles the duration and grants Major Protection while active.'
      },
      {
        id: 'necrotic-potency',
        name: 'Necrotic Potency',
        description: 'Sap the lingering life from fresh corpses, granting you 6 Ultimate and healing 682 Health every 1 second for 2 seconds per additional corpse. This ability scales off your Max Health. While slotted, your damage taken is reduced by 3%.',
        changes: 'Gain more Ultimate per corpse.'
      }
    ],
    buffsApplied: ['major_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 660,
      scalingFactor: 0.6,
      isHoT: true
    },
    effects: [
      {
        id: 'corpse-consumption',
        type: 'other',
        description: 'Consumes corpses, grants Ultimate and healing per corpse'
      },
      {
        id: 'passive-damage-reduction',
        type: 'other',
        description: 'While slotted, damage taken reduced by 3%'
      }
    ]
  },

  {
    id: 'bone-totem',
    name: 'Bone Totem',
    description: 'Summon an effigy of bone at your feet for 11 seconds that grants Minor Protection to you and your allies, reducing damage taken by 5%. Enemies in the area are afflicted with Major Cowardice, reducing their Weapon and Spell Damage by 430. After 2 seconds, the totem begins fearing nearby enemies every 2 seconds, causing them to cower in place for 4 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 11,
    radius: 6,
    morphs: [
      {
        id: 'agony-totem',
        name: 'Agony Totem',
        description: 'Summon an effigy of bone at your feet for 13 seconds that grants Minor Protection to you and your allies, reducing damage taken by 5%. Enemies in the area are afflicted with Major Cowardice. After 2 seconds, the totem begins fearing nearby enemies every 2 seconds, causing them to cower in place for 4 seconds. Allies can activate the Pure Agony synergy, dealing 2100 Magic Damage over 5 seconds to enemies.',
        changes: 'Allies can activate a synergy to damage to enemies. Increases the duration of the totem as the ability ranks up.'
      },
      {
        id: 'remote-totem',
        name: 'Remote Totem',
        description: 'Summon an effigy of bone for 11 seconds that grants Minor Protection to you and your allies, reducing damage taken by 5%. Enemies in the area are afflicted with Major Cowardice, reducing their Weapon and Spell Damage by 430. After 2 seconds, the totem begins fearing nearby enemies every 2 seconds, causing them to cower in place for 4 seconds.',
        changes: 'The totem can be summoned up to 28 meters away, and costs less.'
      }
    ],
    buffsApplied: ['minor_protection'],
    debuffsApplied: ['major_cowardice', 'fear'],
    effects: [
      {
        id: 'totem-summon',
        type: 'other',
        description: 'Summons bone totem for 11 seconds, fears enemies every 2 seconds after 2 second delay'
      },
      {
        id: 'pure-agony-synergy',
        type: 'other',
        description: 'Ally synergy deals 2100 Magic damage over 5 seconds'
      }
    ]
  },

  {
    id: 'grave-grasp',
    name: 'Grave Grasp',
    description: 'Summon three patches of skeletal claws from the ground in front of you. Enemies in the first area are snared by 30% for 5 seconds, immobilized in the second area for 4 seconds, and stunned in the final area for 3 seconds. Each patch applies Minor Maim to enemies hit for 10 seconds, reducing their damage done by 5%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    morphs: [
      {
        id: 'empowering-grasp',
        name: 'Empowering Grasp',
        description: 'Summon three patches of skeletal claws from the ground in front of you. Enemies in the first area are snared by 30% for 5 seconds, immobilized in the second area for 4 seconds, and stunned in the final area for 3 seconds. Each area applies Major Maim to enemies and Empower to your allies for 10 seconds, reducing enemy damage done by 10% and allied Heavy Attack Damage against monsters by 70%.',
        changes: 'Each area now also grants allies Empower and improves the Minor Maim to Major Maim against enemies.'
      },
      {
        id: 'ghostly-embrace',
        name: 'Ghostly Embrace',
        description: 'Summon three patches of skeletal claws from the ground in front of you, each dealing 898 Frost Damage. The first area applies the Chilled status effect, the second area deals an additional 1635 Frost Damage over 5 seconds, and the final area creates a corpse if at least one enemy was hit.',
        changes: 'Deals damage in each area and applies new effects.'
      }
    ],
    buffsApplied: ['empower'],
    debuffsApplied: ['snare', 'immobilize', 'stun', 'minor_maim', 'major_maim', 'chilled'],
    damage: {
      baseDamage: 898,
      scalingFactor: 0.8,
      damageType: 'frost'
    },
    effects: [
      {
        id: 'three-patch-cc',
        type: 'other',
        description: 'Three areas with escalating crowd control: snare, immobilize, stun'
      }
    ]
  }
];

// Bone Tyrant Passive Skills
const boneTyrantPassives: Skill[] = [
  {
    id: 'death-gleaning',
    name: 'Death Gleaning',
    description: 'WITH A BONE TYRANT ABILITY SLOTTED Whenever an enemy you are in combat with dies within 28 meters of you, restore 666 Magicka and Stamina.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-restore-on-death',
        type: 'other',
        description: 'Restores 666 Magicka and Stamina when enemy dies within 28m'
      }
    ]
  },

  {
    id: 'disdain-harm',
    name: 'Disdain Harm',
    description: 'Reduce the damage you take from damage over time abilities by 15% while you have a Bone Tyrant ability active.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'dot-damage-reduction',
        type: 'other',
        description: '-15% damage from DoT effects while Bone Tyrant ability active'
      }
    ]
  },

  {
    id: 'health-avarice',
    name: 'Health Avarice',
    description: 'Increase your Healing Received by 3% for each Bone Tyrant ability slotted.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-received-bonus',
        type: 'other',
        description: '+3% healing received per Bone Tyrant ability slotted'
      }
    ]
  },

  {
    id: 'last-gasp',
    name: 'Last Gasp',
    description: 'Increase your Max Health by 2412.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-health-bonus',
        type: 'other',
        description: '+2412 Max Health'
      }
    ]
  }
];

// LIVING DEATH SKILL LINE
const livingDeathSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'reanimate',
    name: 'Reanimate',
    description: 'Bring your allies back from the brink of death, resurrecting up to 3 allies at the target location.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 400
    },
    morphs: [
      {
        id: 'animate-blastbones',
        name: 'Animate Blastbones',
        description: 'Bring your allies back from the brink of death, resurrecting up to 3 allies at the target location. You consume up to 3 other corpses in the area and summon a Blighted Blastbones for each corpse consumed.',
        changes: 'You consume other corpses in the area and summon Blastbones.'
      },
      {
        id: 'renewing-animation',
        name: 'Renewing Animation',
        description: 'Bring your allies back from the brink of death, resurrecting up to 3 allies at the target location. You restore 5300 Magicka and Stamina for each ally you successfully resurrect.',
        changes: 'You restore Magicka and Stamina for each ally you resurrect.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'mass-resurrection',
        type: 'other',
        description: 'Resurrects up to 3 allies at target location'
      }
    ]
  },

  // Active abilities
  {
    id: 'render-flesh',
    name: 'Render Flesh',
    description: 'Sacrifice your own power to repair damaged flesh, healing you or an ally in front of you for 3486 Health but applying Minor Defile to yourself for 4 seconds, reducing your healing received and damage shield strength by 6%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    morphs: [
      {
        id: 'blood-sacrifice',
        name: 'Blood Sacrifice',
        description: 'Sacrifice your own power to repair damaged flesh, healing you or an ally in front of you for 3600 Health but applying Minor Defile to yourself for 4 seconds, reducing your healing received and damage shield strength by 6%. Consumes a corpse near you when cast to heal a second target.',
        changes: 'Consumes a corpse to heal a second target.'
      },
      {
        id: 'resistant-flesh',
        name: 'Resistant Flesh',
        description: 'Sacrifice your own power to repair damaged flesh, healing you or an ally in front of you for 3600 Health but applying Minor Defile to yourself for 4 seconds, reducing your healing received and damage shield strength by 6%. You grant the target Spell and Physical Resistance equal to half the amount healed for 3 seconds.',
        changes: 'Grant resistances to the target equal to half the amount healed.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_defile'],
    healing: {
      baseHealing: 3486,
      scalingFactor: 3.0
    },
    effects: [
      {
        id: 'self-defile',
        type: 'other',
        description: 'Applies Minor Defile to caster for 4 seconds'
      }
    ]
  },

  {
    id: 'expunge',
    name: 'Expunge',
    description: 'Embrace the power of death, removing up to 2 negative effects from yourself. While slotted, the cost of all your abilities are reduced by 3%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    morphs: [
      {
        id: 'expunge-and-modify',
        name: 'Expunge and Modify',
        description: 'Embrace the power of death, removing up to 2 negative effects from yourself and restoring 515 Magicka and Stamina for each negative effect removed. While slotted, the cost of all your abilities are reduced by 3%.',
        changes: 'You restore Magicka and Stamina for each negative effect removed.'
      },
      {
        id: 'hexproof',
        name: 'Hexproof',
        description: 'Embrace the power of death, removing up to 4 negative effects from yourself. While slotted, the cost of all your abilities are reduced by 3%.',
        changes: 'Reduces cost as the ability ranks up and Increases the amount of negative effects removed.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'purge',
        type: 'other',
        description: 'Removes up to 2 negative effects from self'
      },
      {
        id: 'passive-cost-reduction',
        type: 'other',
        description: 'While slotted, all ability costs reduced by 3%'
      }
    ]
  },

  {
    id: 'life-amid-death',
    name: 'Life amid Death',
    description: 'Release residual fragments of fallen souls at the target location, healing you and your allies for 2323 Health. Consumes a corpse on cast to continue to heal you and your allies in the area for 2310 Health over 5 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    radius: 6,
    duration: 5,
    morphs: [
      {
        id: 'enduring-undeath',
        name: 'Enduring Undeath',
        description: 'Release residual fragments of fallen souls at the target location, healing you and your allies for 2399 Health. Consumes a corpse on cast to continue to heal you and your allies in the area for 2390 Health over 5 seconds. You can consume up to 5 additional corpses on cast, with each corpse extending the duration of the heal over time by 5 seconds.',
        changes: 'Can consume multiple corpses to increase the duration of the heal over time.'
      },
      {
        id: 'renewing-undeath',
        name: 'Renewing Undeath',
        description: 'Release residual fragments of fallen souls at the target location, healing you and your allies for 2399 Health. Consumes a corpse on cast to immediately remove up to 3 negative effects and continue to heal you and your allies in the area for 2390 Health over 5 seconds.',
        changes: 'Consuming a corpse also removes negative effects.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 2323,
      scalingFactor: 2.0
    },
    effects: [
      {
        id: 'corpse-consumption',
        type: 'other',
        description: 'Consumes corpse on cast for additional healing over time'
      }
    ]
  },

  {
    id: 'spirit-mender',
    name: 'Spirit Mender',
    description: 'CRIMINAL ACT Conjure a ghostly spirit to do your bidding and stay by your side for 16 seconds. The spirit heals you or the lowest Health ally around you every 2 seconds, restoring 695 Health. Creates a corpse on death if you are in combat.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 16,
    morphs: [
      {
        id: 'intensive-mender',
        name: 'Intensive Mender',
        description: 'Conjure a ghostly spirit to do your bidding and stay by your side for 8 seconds. The spirit heals you or lowest Health ally around you every 2 seconds, restoring 1438 Health to the target and 2 allies nearby them. Creates a corpse on death if you are in combat.',
        changes: 'The spirit lasts for half as long, but heals for twice the amount, heals two additional allies, and costs half as much.'
      },
      {
        id: 'spirit-guardian',
        name: 'Spirit Guardian',
        description: 'Conjure a ghostly spirit to do your bidding and stay by your side for 16 seconds. The spirit heals you or the lowest Health ally around you every 2 seconds, restoring 718 Health. While active 10% of the damage you take is transferred to the spirit instead. Creates a corpse on death if you are in combat.',
        changes: 'Some of the damage you take is transferred to the spirit instead.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 695,
      scalingFactor: 0.6,
      isHoT: true
    },
    effects: [
      {
        id: 'spirit-pet',
        type: 'other',
        description: 'Summons healing spirit for 16 seconds, creates corpse on death'
      },
      {
        id: 'criminal-act',
        type: 'other',
        description: 'Criminal act when witnessed'
      }
    ]
  },

  {
    id: 'restoring-tether',
    name: 'Restoring Tether',
    description: 'Siphon the last remnants of life from a corpse, healing for 5544 Health over 12 seconds to yourself and all allies between you and the corpse. While slotted, your healing done is increased by 3%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    duration: 12,
    morphs: [
      {
        id: 'braided-tether',
        name: 'Braided Tether',
        description: 'Siphon the last remnants of life from a corpse, healing for 5742 Health over 12 seconds to yourself, all allies around you, and all allies between you and the corpse. While slotted, your healing done is increased by 3%.',
        changes: 'Also heals allies in a radius around you.'
      },
      {
        id: 'mortal-coil',
        name: 'Mortal Coil',
        description: 'Siphon the last remnants of life from a corpse, healing for 5562 Health over 12 seconds to yourself and all allies between you and the corpse. You also restore 170 Magicka and Stamina every 2 seconds while siphoning the corpse. While slotted, your healing done is increased by 3%.',
        changes: 'Restores Magicka and Stamina while siphoning the corpse.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 5544,
      scalingFactor: 5.0,
      isHoT: true
    },
    effects: [
      {
        id: 'corpse-tether',
        type: 'other',
        description: 'Requires corpse to target, heals allies between caster and corpse'
      },
      {
        id: 'passive-healing-bonus',
        type: 'other',
        description: 'While slotted, healing done increased by 3%'
      }
    ]
  }
];

// Living Death Passive Skills
const livingDeathPassives: Skill[] = [
  {
    id: 'curative-curse',
    name: 'Curative Curse',
    description: 'While you have a negative effect on you, your healing done is increased by 12%.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'debuff-healing-bonus',
        type: 'other',
        description: '+12% healing done while you have a negative effect'
      }
    ]
  },

  {
    id: 'near-death-experience',
    name: 'Near-Death Experience',
    description: 'While you have a Living Death ability slotted, your Critical Strike Chance with all healing abilities is increased by up to 12% in proportion to the severity of the target\'s wounds.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-crit-bonus',
        type: 'other',
        description: 'Up to +12% healing critical chance based on target missing health'
      }
    ]
  },

  {
    id: 'corpse-consumption',
    name: 'Corpse Consumption',
    description: 'When you consume a corpse, you generate 10 Ultimate. This effect can occur once every 16 seconds.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-on-corpse',
        type: 'other',
        description: 'Gain 10 Ultimate when consuming corpse (once per 16 seconds)'
      }
    ]
  },

  {
    id: 'undead-confederate',
    name: 'Undead Confederate',
    description: 'While you have a Sacrificial Bones, Skeletal Mage, or Spirit Mender active, your Health, Magicka, and Stamina Recovery is increased by 155.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'summon-recovery-bonus',
        type: 'other',
        description: '+155 Health, Magicka, and Stamina Recovery while summon active'
      }
    ]
  }
];

// Export Necromancer Skills
export const necromancerSkills = {
  graveLord: [...graveLordSkills, ...graveLordPassives],
  boneTyrant: [...boneTyrantSkills, ...boneTyrantPassives],
  livingDeath: [...livingDeathSkills, ...livingDeathPassives]
};

export default necromancerSkills;

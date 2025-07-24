// Necromancer Skills - The death magic class
import { Skill } from './skills';

// Grave Lord Skills
const graveLordSkills: Skill[] = [
  // Ultimate
  {
    id: 'frozen-colossus',
    name: 'Frozen Colossus',
    description: 'Unleash a frostbitten Flesh Colossus to pulverize enemies in the area. The Colossus smashes the ground three times over 3 seconds, dealing 3096 Frost Damage with each smash. Dealing damage applies Major Vulnerability to any enemy hit for 12 seconds, increasing their damage taken by 10%.',
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
        description: 'Increases the duration of Major Vulnerability and the final smash stuns all enemies hit.',
        changes: 'Major Vulnerability duration increased to 17 seconds, final smash stuns for 4 seconds.'
      },
      {
        id: 'pestilent-colossus',
        name: 'Pestilent Colossus',
        description: 'Deals Disease Damage. The Colossus deals more damage with each smash and always applies the Diseased status effect.',
        changes: 'Disease damage: 3200, 3360, 3528 for each smash. Applies Diseased status effect.'
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
  // Active Skills
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
        description: 'The third cast of the skull will bounce to other nearby enemies.',
        changes: 'Third cast bounces up to 2 times to nearby enemies, deals 2160 damage.'
      },
      {
        id: 'venom-skull',
        name: 'Venom Skull',
        description: 'Converts into a Stamina ability and deals Poison Damage. Casting any Necromancer ability counts towards the third cast.',
        changes: 'Stamina cost, 2160 Poison damage, any Necromancer ability counts toward third cast.'
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
    description: 'Summon a skeleton from the ground after 2.5 seconds. The skeleton leaps to you, sacrificing the fallen soul within and enhancing your necromantic energies for 10 seconds, increasing your damage done with Necromancer abilities and damage over time effects by 15%.',
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
        description: 'Converts into a Stamina ability that deals Disease Damage to enemies instead of empowering you. Applies Major Defile and the Diseased status effect to enemies hit.',
        changes: 'Stamina cost, 3600 Disease damage to enemies, applies Major Defile and Diseased status for 4 seconds.'
      },
      {
        id: 'grave-lords-sacrifice',
        name: 'Grave Lord\'s Sacrifice',
        description: 'Increases the duration. While active, your third Flame Skull deals damage in an area.',
        changes: 'Duration increased to 20 seconds, third Flame Skull hits 6 meter area.'
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
    description: 'Desecrate the ground at the target location, dealing 3080 Frost Damage over 10 seconds to enemies inside and applying Minor Vulnerability, increasing their damage taken by 5%. Consumes a corpse on cast to deal 30% more damage.',
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
        description: 'You can use your own synergy.',
        changes: 'Caster can activate own synergy, deals 3190 damage over 10 seconds.'
      },
      {
        id: 'unnerving-boneyard',
        name: 'Unnerving Boneyard',
        description: 'Applies Major Breach and Minor Vulnerability each tick, persisting for a duration when enemies leave the area.',
        changes: 'Applies Major Breach (-5948 resistances) and Minor Vulnerability each tick for 4.1 seconds.'
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
    description: 'Unearth a skeletal mage from the dirt to fight by your side for 20 seconds, while granting you Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20%. The mage attacks the closest enemy every 2 seconds, dealing 462 Shock Damage.',
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
        description: 'The mage deals damage to all enemies around the initial target.',
        changes: 'Deals 478 Shock damage to target and nearby enemies every 2 seconds.'
      },
      {
        id: 'skeletal-archer',
        name: 'Skeletal Archer',
        description: 'Converts into a Stamina ability and deals Physical Damage. The archer deals more damage with each attack.',
        changes: 'Stamina cost, 463 Physical damage, damage increases 15% with each attack.'
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
        id: 'pet-summon',
        type: 'other',
        description: 'Summons skeletal mage pet for 20 seconds, creates corpse on death'
      },
      {
        id: 'criminal-act',
        type: 'other',
        description: 'Criminal act when witnessed'
      },
      {
        id: 'escalating-damage',
        type: 'other',
        description: 'Skeletal Archer deals 15% more damage with each attack'
      }
    ]
  },
  {
    id: 'shocking-siphon',
    name: 'Shocking Siphon',
    description: 'Violently drain the last spark of life from a corpse, dealing 6150 Shock Damage over 20 seconds to all enemies around the corpse and between you and the corpse. You also gain Major Savagery and Prophecy for 20 seconds, increasing your Weapon and Spell Critical rating by 2629.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    range: 28,
    duration: 20,
    morphs: [
      {
        id: 'detonating-siphon',
        name: 'Detonating Siphon',
        description: 'Ability now deals Disease Damage. The corpse explodes at the end of the siphon, dealing additional damage.',
        changes: '6180 Disease damage over 20s, corpse explodes for 1799 Disease damage at end.'
      },
      {
        id: 'mystic-siphon',
        name: 'Mystic Siphon',
        description: 'Your Health, Magicka, and Stamina Recovery increases while siphoning the corpse.',
        changes: 'Grants 150 Health, Magicka, and Stamina Recovery while siphoning.'
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
        description: 'Requires corpse, damages enemies between caster and corpse',
        duration: 20
      },
      {
        id: 'passive-damage-bonus',
        type: 'other',
        description: '+3% damage done while slotted'
      },
      {
        id: 'explosion-effect',
        type: 'other',
        description: 'Detonating Siphon explodes corpse at end for additional damage'
      }
    ]
  },
  // Passive Skills
  {
    id: 'reusable-parts',
    name: 'Reusable Parts',
    description: 'When your Sacrificial Bones, Skeletal Mage, or Spirit Mender dies, the cost of your next Sacrificial Bones, Skeletal Mage, or Spirit Mender is reduced by 66%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'other',
        description: 'Next summon costs 66% less when previous summon dies'
      }
    ]
  },
  {
    id: 'death-knell',
    name: 'Death Knell',
    description: 'WITH A GRAVE LORD ABILITY SLOTTED Increases your Critical Strike Chance against enemies under 33% Health by 20%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'execute-critical',
        type: 'stat_increase',
        description: '+20% Critical Chance vs enemies under 33% Health',
        value: 20,
        percentage: true
      }
    ]
  },
  {
    id: 'dismember',
    name: 'Dismember',
    description: 'While a Grave Lord ability is active, your Spell and Physical Penetration are increased by 3271.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'penetration-bonus',
        type: 'stat_increase',
        description: '+3271 Spell and Physical Penetration while Grave Lord ability active',
        value: 3271
      }
    ]
  },
  {
    id: 'rapid-rot',
    name: 'Rapid Rot',
    description: 'Increases your damage done with damage over time effects by 10%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'dot-damage-bonus',
        type: 'stat_increase',
        description: '+10% damage with damage over time effects',
        value: 10,
        percentage: true
      }
    ]
  }
];

// Bone Tyrant Skills
const boneTyrantSkills: Skill[] = [
  // Ultimate
  {
    id: 'bone-goliath-transformation',
    name: 'Bone Goliath Transformation',
    description: 'Become a horrific Bone Goliath, increasing your Max Health by 30000 for 20 seconds and immediately restoring 30000 Health. While transformed, your damaging Light Attacks restore 319 Health and your fully-charged Heavy Attacks restore 800 Health.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 400
    },
    duration: 20,
    morphs: [
      {
        id: 'pummeling-goliath',
        name: 'Pummeling Goliath',
        description: 'While transformed your Bash attack now scales off your offensive stats and deals damage in a cone in front of you.',
        changes: 'Bash attacks hit multiple targets for 1799 Physical damage in cone.'
      },
      {
        id: 'ravenous-goliath',
        name: 'Ravenous Goliath',
        description: 'Adds damage in an area around you that damages enemies and heals you while transformed.',
        changes: 'Deals 826 Magic damage to nearby enemies every second and heals for that amount.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 30000,
      scalingFactor: 30.0
    },
    damage: {
      baseDamage: 1799,
      scalingFactor: 1.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'transformation',
        type: 'other',
        description: '+30000 Max Health for 20 seconds, enhanced light/heavy attacks',
        duration: 20
      },
      {
        id: 'criminal-act',
        type: 'other',
        description: 'Criminal act when witnessed'
      },
      {
        id: 'health-scaling',
        type: 'other',
        description: 'Abilities scale off Max Health while transformed'
      }
    ]
  },
  // Active Skills
  {
    id: 'death-scythe',
    name: 'Death Scythe',
    description: 'Slice into your enemy\'s life force, dealing 1742 Magic Damage. You heal for 2400 Health for the first enemy hit, and an additional 800 for each additional enemy hit, up to five times. The healing of this ability scales off your Max Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    radius: 8,
    morphs: [
      {
        id: 'hungry-scythe',
        name: 'Hungry Scythe',
        description: 'Gain a heal over time and reduces the cost as the ability ranks up.',
        changes: 'Adds 991 Health every 2 seconds for 10 seconds, reduced cost.'
      },
      {
        id: 'ruinous-scythe',
        name: 'Ruinous Scythe',
        description: 'Converts to a Stamina ability and deals Bleed Damage, applying the Hemorrhaging status effect. Enemies hit are set Off Balance.',
        changes: 'Stamina cost, 1799 Bleed damage, applies Hemorrhaging, sets enemies Off Balance for 7 seconds.'
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
      scalingFactor: 2.2
    },
    effects: [
      {
        id: 'multi-hit-healing',
        type: 'other',
        description: 'Heals more for each additional enemy hit (up to 5 enemies)'
      },
      {
        id: 'health-scaling',
        type: 'other',
        description: 'Healing scales with Max Health'
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
      amount: 4050
    },
    duration: 20,
    morphs: [
      {
        id: 'beckoning-armor',
        name: 'Beckoning Armor',
        description: 'Pulls in ranged enemies and attempts to taunt them. Reduces the cost as the ability ranks up.',
        changes: 'Pulls ranged attackers every 2 seconds, taunts for 15 seconds, reduced cost.'
      },
      {
        id: 'summoners-armor',
        name: 'Summoner\'s Armor',
        description: 'Increases the duration. While active, reduces the cost of your Necromancer summon abilities.',
        changes: 'Duration increased to 30 seconds, -15% cost for Blastbones, Skeletal Mage, Spirit Mender.'
      }
    ],
    buffsApplied: ['major_resolve', 'minor_resolve'],
    debuffsApplied: ['taunt'],
    effects: [
      {
        id: 'corpse-creation',
        type: 'other',
        description: 'Creates corpse when effect ends in combat'
      },
      {
        id: 'ranged-pull',
        type: 'other',
        description: 'Beckoning Armor pulls ranged attackers and taunts them'
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
        description: 'Doubles the duration and grants Major Protection while active.',
        changes: 'Heals for 682 Health every second for 4 seconds per corpse, grants Major Protection.'
      },
      {
        id: 'necrotic-potency',
        name: 'Necrotic Potency',
        description: 'Gain more Ultimate per corpse.',
        changes: 'Grants 6 Ultimate per corpse instead of 2.'
      }
    ],
    buffsApplied: ['major_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 660,
      scalingFactor: 0.6
    },
    effects: [
      {
        id: 'corpse-consumption',
        type: 'other',
        description: 'Consumes nearby corpses for healing and Ultimate'
      },
      {
        id: 'passive-mitigation',
        type: 'other',
        description: '-3% damage taken while slotted'
      },
      {
        id: 'health-scaling',
        type: 'other',
        description: 'Healing scales with Max Health'
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
    radius: 8,
    duration: 11,
    morphs: [
      {
        id: 'agony-totem',
        name: 'Agony Totem',
        description: 'Allies can activate a synergy to damage to enemies. Increases the duration of the totem as the ability ranks up.',
        changes: 'Duration increased to 13 seconds, Pure Agony synergy deals 2100 Magic damage over 5 seconds.'
      },
      {
        id: 'remote-totem',
        name: 'Remote Totem',
        description: 'The totem can be summoned up to 28 meters away, and costs less.',
        changes: 'Can be placed at range up to 28 meters, reduced cost.'
      }
    ],
    buffsApplied: ['minor_protection'],
    debuffsApplied: ['major_cowardice', 'fear'],
    damage: {
      baseDamage: 2100,
      scalingFactor: 1.8,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'totem-aura',
        type: 'other',
        description: 'Grants buffs to allies and debuffs to enemies in area',
        duration: 11
      },
      {
        id: 'fear-pulse',
        type: 'crowd_control',
        description: 'Fears enemies every 2 seconds after 2 second delay',
        duration: 4
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
      amount: 4590
    },
    range: 28,
    morphs: [
      {
        id: 'empowering-grasp',
        name: 'Empowering Grasp',
        description: 'Each area now also grants allies Empower and improves the Minor Maim to Major Maim against enemies.',
        changes: 'Applies Major Maim to enemies (-10% damage), grants Empower to allies (+70% heavy attack damage vs monsters).'
      },
      {
        id: 'ghostly-embrace',
        name: 'Ghostly Embrace',
        description: 'Deals damage in each area and applies new effects.',
        changes: 'Each area deals 898 Frost damage. First applies Chilled, second adds 1635 DoT over 5s, third creates corpse.'
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
        id: 'triple-patch',
        type: 'crowd_control',
        description: 'Three patches with escalating crowd control effects'
      },
      {
        id: 'corpse-creation',
        type: 'other',
        description: 'Ghostly Embrace creates corpse if enemy hit in final area'
      }
    ]
  },
  // Passive Skills
  {
    id: 'death-gleaning',
    name: 'Death Gleaning',
    description: 'WITH A BONE TYRANT ABILITY SLOTTED Whenever an enemy you are in combat with dies within 28 meters of you, restore 666 Magicka and Stamina.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'death-restore',
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
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'dot-mitigation',
        type: 'stat_increase',
        description: '-15% damage taken from DoT effects while Bone Tyrant ability active',
        value: 15,
        percentage: true
      }
    ]
  },
  {
    id: 'health-avarice',
    name: 'Health Avarice',
    description: 'Increase your Healing Received by 3% for each Bone Tyrant ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-received-bonus',
        type: 'stat_increase',
        description: '+3% Healing Received per Bone Tyrant ability slotted',
        value: 3,
        percentage: true
      }
    ]
  },
  {
    id: 'last-gasp',
    name: 'Last Gasp',
    description: 'Increase your Max Health by 2412.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-health-bonus',
        type: 'stat_increase',
        description: '+2412 Max Health',
        value: 2412
      }
    ]
  }
];

// Living Death Skills
const livingDeathSkills: Skill[] = [
  // Ultimate
  {
    id: 'reanimate',
    name: 'Reanimate',
    description: 'Bring your allies back from the brink of death, resurrecting up to 3 allies at the target location.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 400
    },
    range: 28,
    morphs: [
      {
        id: 'animate-blastbones',
        name: 'Animate Blastbones',
        description: 'You consume other corpses in the area and summon Blastbones.',
        changes: 'Consumes up to 3 corpses and summons Blighted Blastbones for each corpse.'
      },
      {
        id: 'renewing-animation',
        name: 'Renewing Animation',
        description: 'You restore Magicka and Stamina for each ally you resurrect.',
        changes: 'Restores 5300 Magicka and Stamina for each ally successfully resurrected.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'mass-resurrection',
        type: 'other',
        description: 'Resurrects up to 3 allies at target location'
      },
      {
        id: 'corpse-consumption',
        type: 'other',
        description: 'Animate Blastbones consumes corpses to summon minions'
      }
    ]
  },
  // Active Skills
  {
    id: 'render-flesh',
    name: 'Render Flesh',
    description: 'Sacrifice your own power to repair damaged flesh, healing you or an ally in front of you for 3486 Health but applying Minor Defile to yourself for 4 seconds, reducing your healing received and damage shield strength by 6%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    range: 28,
    morphs: [
      {
        id: 'blood-sacrifice',
        name: 'Blood Sacrifice',
        description: 'Consumes a corpse to heal a second target.',
        changes: 'Heals for 3600 Health, consumes nearby corpse to heal second target.'
      },
      {
        id: 'resistant-flesh',
        name: 'Resistant Flesh',
        description: 'Grant resistances to the target equal to half the amount healed.',
        changes: 'Grants target Spell and Physical Resistance equal to half healing amount for 3 seconds.'
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
        id: 'self-sacrifice',
        type: 'other',
        description: 'Applies Minor Defile to caster when healing others'
      },
      {
        id: 'corpse-consumption',
        type: 'other',
        description: 'Blood Sacrifice consumes corpse for additional healing target'
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
      amount: 3780
    },
    morphs: [
      {
        id: 'expunge-and-modify',
        name: 'Expunge and Modify',
        description: 'You restore Magicka and Stamina for each negative effect removed.',
        changes: 'Restores 515 Magicka and Stamina for each negative effect removed.'
      },
      {
        id: 'hexproof',
        name: 'Hexproof',
        description: 'Reduces cost as the ability ranks up and Increases the amount of negative effects removed.',
        changes: 'Removes up to 4 negative effects, reduced cost.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cleanse',
        type: 'other',
        description: 'Removes negative effects from self'
      },
      {
        id: 'passive-cost-reduction',
        type: 'other',
        description: '-3% ability costs while slotted'
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
    range: 28,
    radius: 8,
    duration: 5,
    morphs: [
      {
        id: 'enduring-undeath',
        name: 'Enduring Undeath',
        description: 'Can consume multiple corpses to increase the duration of the heal over time.',
        changes: 'Can consume up to 5 additional corpses, each extending HoT duration by 5 seconds.'
      },
      {
        id: 'renewing-undeath',
        name: 'Renewing Undeath',
        description: 'Consuming a corpse also removes negative effects.',
        changes: 'Consuming corpse removes up to 3 negative effects from allies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 2323,
      scalingFactor: 2.0,
      isHoT: true,
      hotTicks: 5
    },
    effects: [
      {
        id: 'corpse-consumption',
        type: 'other',
        description: 'Requires corpse for heal over time effect'
      },
      {
        id: 'area-healing',
        type: 'other',
        description: 'Heals all allies in target area'
      }
    ]
  },
  {
    id: 'spirit-mender',
    name: 'Spirit Mender',
    description: 'Conjure a ghostly spirit to do your bidding and stay by your side for 16 seconds. The spirit heals you or the lowest Health ally around you every 2 seconds, restoring 695 Health. Creates a corpse on death if you are in combat.',
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
        description: 'The spirit lasts for half as long, but heals for twice the amount, heals two additional allies, and costs half as much.',
        changes: 'Duration reduced to 8 seconds, heals for 1438 Health to target and 2 nearby allies, half cost.'
      },
      {
        id: 'spirit-guardian',
        name: 'Spirit Guardian',
        description: 'Some of the damage you take is transferred to the spirit instead.',
        changes: '10% of damage taken is transferred to spirit, heals for 718 Health every 2 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 695,
      scalingFactor: 0.6
    },
    effects: [
      {
        id: 'pet-summon',
        type: 'other',
        description: 'Summons healing spirit pet, creates corpse on death'
      },
      {
        id: 'criminal-act',
        type: 'other',
        description: 'Criminal act when witnessed'
      },
      {
        id: 'damage-transfer',
        type: 'other',
        description: 'Spirit Guardian transfers 10% of damage taken to spirit'
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
      amount: 4590
    },
    range: 28,
    duration: 12,
    morphs: [
      {
        id: 'braided-tether',
        name: 'Braided Tether',
        description: 'Also heals allies in a radius around you.',
        changes: 'Heals for 5742 Health, also heals allies around caster in addition to tether line.'
      },
      {
        id: 'mortal-coil',
        name: 'Mortal Coil',
        description: 'Restores Magicka and Stamina while siphoning the corpse.',
        changes: 'Restores 170 Magicka and Stamina every 2 seconds while siphoning.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 5544,
      scalingFactor: 4.8,
      isHoT: true,
      hotTicks: 12
    },
    effects: [
      {
        id: 'corpse-tether',
        type: 'other',
        description: 'Requires corpse, heals allies between caster and corpse',
        duration: 12
      },
      {
        id: 'passive-healing-bonus',
        type: 'other',
        description: '+3% healing done while slotted'
      }
    ]
  },
  // Passive Skills
  {
    id: 'curative-curse',
    name: 'Curative Curse',
    description: 'While you have a negative effect on you, your healing done is increased by 12%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'debuff-healing-bonus',
        type: 'stat_increase',
        description: '+12% healing done while having negative effects',
        value: 12,
        percentage: true
      }
    ]
  },
  {
    id: 'near-death-experience',
    name: 'Near-Death Experience',
    description: 'While you have a Living Death ability slotted, your Critical Strike Chance with all healing abilities is increased by up to 12% in proportion to the severity of the target\'s wounds.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'wounded-critical-bonus',
        type: 'stat_increase',
        description: 'Up to 12% Critical Chance with healing based on target missing Health',
        value: 12,
        percentage: true
      }
    ]
  },
  {
    id: 'corpse-consumption',
    name: 'Corpse Consumption',
    description: 'When you consume a corpse, you generate 10 Ultimate. This effect can occur once every 16 seconds.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'corpse-ultimate',
        type: 'other',
        description: 'Consuming corpse grants 10 Ultimate (once per 16 seconds)'
      }
    ]
  },
  {
    id: 'undead-confederate',
    name: 'Undead Confederate',
    description: 'While you have a Sacrificial Bones, Skeletal Mage, or Spirit Mender active, your Health, Magicka, and Stamina Recovery is increased by 155.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'minion-recovery-bonus',
        type: 'stat_increase',
        description: '+155 Health, Magicka, and Stamina Recovery while minions active',
        value: 155
      }
    ]
  }
];

// Export Necromancer Skills
export const necromancerSkills = {
  graveLord: graveLordSkills,
  boneTyrant: boneTyrantSkills,
  livingDeath: livingDeathSkills
};

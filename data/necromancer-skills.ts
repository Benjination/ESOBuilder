// Necromancer Skills - The death magic class
import { Skill } from './skills';

// Grave Lord Skills
const graveLordSkills: Skill[] = [
  {
    id: 'flame-skull',
    name: 'Flame Skull',
    description: 'Launch a fiery skull that deals damage and gains power with each consecutive cast.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'venom-skull',
        name: 'Venom Skull',
        description: 'Applies disease damage over time and spreads on death.',
        changes: 'Applies disease DoT, spreads to nearby enemies if target dies.'
      },
      {
        id: 'ricochet-skull',
        name: 'Ricochet Skull',
        description: 'Third cast bounces to additional enemies.',
        changes: 'Third consecutive cast bounces to up to 2 additional enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['diseased'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'stacking-damage',
        type: 'other',
        description: 'Damage increases by 15% with each consecutive cast (max 3 stacks)'
      }
    ]
  },
  {
    id: 'boneyard',
    name: 'Boneyard',
    description: 'Desecrate the ground, dealing damage over time and applying debuffs.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    radius: 6,
    duration: 10,
    morphs: [
      {
        id: 'unnerving-boneyard',
        name: 'Unnerving Boneyard',
        description: 'Applies Major Breach and Minor Vulnerability to enemies.',
        changes: 'Applies Major Breach and Minor Vulnerability for 10 seconds.'
      },
      {
        id: 'avid-boneyard',
        name: 'Avid Boneyard',
        description: 'Generates Ultimate and corpses for each enemy in area.',
        changes: 'Generates 2 Ultimate per second per enemy in area.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_breach', 'minor_vulnerability'],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 10
    },
    effects: [
      {
        id: 'desecrated-ground',
        type: 'other',
        description: 'Desecrated area that damages and debuffs enemies',
        duration: 10
      }
    ]
  },
  {
    id: 'skeletal-mage',
    name: 'Skeletal Mage',
    description: 'Reanimate a skeleton to fight alongside you with ranged attacks.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 16,
    morphs: [
      {
        id: 'skeletal-arcanist',
        name: 'Skeletal Arcanist',
        description: 'Skeleton casts area spells and lasts longer.',
        changes: 'AoE spells, 20 second duration, applies vulnerability.'
      },
      {
        id: 'skeletal-archer',
        name: 'Skeletal Archer',
        description: 'Archer fires faster and applies poison to enemies.',
        changes: 'Faster attack speed, applies poisoned for 10 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_vulnerability', 'poisoned'],
    damage: {
      baseDamage: 580,
      scalingFactor: 0.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'skeleton-minion',
        type: 'other',
        description: 'Reanimated skeleton that fights independently',
        duration: 16
      }
    ]
  },
  {
    id: 'blighted-blastbones',
    name: 'Blighted Blastbones',
    description: 'Summon a skeleton that runs to enemies and explodes.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    morphs: [
      {
        id: 'blastbones',
        name: 'Blastbones',
        description: 'Deals more damage and applies disease to nearby enemies.',
        changes: 'Higher explosion damage, applies disease in 8 meter radius.'
      },
      {
        id: 'stalking-blastbones',
        name: 'Stalking Blastbones',
        description: 'Follows target persistently and deals more damage over distance.',
        changes: 'Homes in on target, damage increases based on travel distance.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['diseased'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'suicide-minion',
        type: 'other',
        description: 'Skeleton that runs to target and explodes for area damage'
      }
    ]
  },
  {
    id: 'animate-blastbones',
    name: 'Goliath Transformation',
    description: 'Transform into a skeletal goliath, gaining massive health and new abilities.',
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
        description: 'Increases damage done and reduces damage taken.',
        changes: 'Grants Major Berserk and Major Protection for duration.'
      },
      {
        id: 'bone-goliath',
        name: 'Bone Goliath',
        description: 'Lasts longer and grants group buffs to nearby allies.',
        changes: '25 second duration, grants Minor Courage to nearby allies.'
      }
    ],
    buffsApplied: ['major_berserk', 'major_protection', 'minor_courage'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'transformation',
        type: 'other',
        description: 'Transform into goliath with +30000 health and new abilities',
        duration: 20
      }
    ]
  },
  {
    id: 'corpse-consumption',
    name: 'Corpse Consumption',
    description: 'Consume nearby corpses to restore resources and gain power.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    radius: 8,
    morphs: [
      {
        id: 'hungry-scythe',
        name: 'Hungry Scythe',
        description: 'Increases damage based on corpses consumed and grants healing.',
        changes: 'Damage increases by 25% per corpse consumed, heals you for 15% of damage dealt.'
      },
      {
        id: 'deaden-pain',
        name: 'Deaden Pain',
        description: 'Grants damage reduction and immunity to debuffs briefly.',
        changes: 'Provides 50% damage reduction and debuff immunity for 3 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'corpse-consume',
        type: 'other',
        description: 'Consumes corpses within 8 meters to restore 15% of max Magicka and Stamina per corpse'
      },
      {
        id: 'power-scaling',
        type: 'other',
        description: 'Grants bonuses based on number of corpses consumed'
      }
    ]
  },
  // Passive Skills
  {
    id: 'death-gleaning',
    name: 'Death Gleaning',
    description: 'Generate Ultimate when enemies die nearby.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-generation',
        type: 'other',
        description: 'Generate 6 Ultimate when enemy dies within 16 meters',
        value: 6
      }
    ]
  },
  {
    id: 'soul-reaping',
    name: 'Soul Reaping',
    description: 'Increases spell damage based on nearby corpses.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-bonus',
        type: 'stat_increase',
        description: 'Spell Damage increased by 65 per corpse within 16 meters (max 5 corpses)',
        value: 65
      }
    ]
  },
  {
    id: 'dismember',
    name: 'Dismember',
    description: 'Increases critical chance and reduces ability costs.',
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
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Grave Lord ability costs reduced by 8%',
        value: 8,
        percentage: true
      }
    ]
  },
  {
    id: 'rapid-rot',
    name: 'Rapid Rot',
    description: 'Increases damage over time effects and disease damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'dot-damage',
        type: 'stat_increase',
        description: 'Damage over time effects deal 15% more damage',
        value: 15,
        percentage: true
      },
      {
        id: 'disease-damage',
        type: 'stat_increase',
        description: 'Disease Damage increased by 10%',
        value: 10,
        percentage: true
      }
    ]
  },
  {
    id: 'corpse-consumption-mastery',
    name: 'Corpse Consumption',
    description: 'Increases maximum Magicka and Magicka recovery.',
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
        id: 'magicka-recovery',
        type: 'stat_increase',
        description: 'Magicka Recovery increased by 129',
        value: 129
      }
    ]
  }
];

// Bone Tyrant Skills
const boneTyrantSkills: Skill[] = [
  {
    id: 'death-scythe',
    name: 'Death Scythe',
    description: 'Swing a spectral scythe in front of you, dealing damage and healing you.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    radius: 8,
    morphs: [
      {
        id: 'hungry-scythe',
        name: 'Hungry Scythe',
        description: 'Heals for more and grants Ultimate for each enemy hit.',
        changes: 'Increased healing, generates 2 Ultimate per enemy hit.'
      },
      {
        id: 'ruinous-scythe',
        name: 'Ruinous Scythe',
        description: 'Deals more damage and applies Major Defile.',
        changes: 'Higher damage and applies Major Defile for 4 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_defile'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    healing: {
      baseHealing: 348,
      scalingFactor: 0.3
    },
    effects: [
      {
        id: 'lifesteal-scythe',
        type: 'other',
        description: 'Frontal attack that heals based on enemies hit'
      }
    ]
  },
  {
    id: 'bone-prison',
    name: 'Bone Prison',
    description: 'Encase an enemy in bones, immobilizing them and reducing their damage done.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 3240
    },
    range: 28,
    duration: 4,
    morphs: [
      {
        id: 'ghostly-embrace',
        name: 'Ghostly Embrace',
        description: 'Also applies Fear and heals you when effect ends.',
        changes: 'Applies Fear for 3 seconds and heals you for 2323 when immobilize ends.'
      },
      {
        id: 'empowering-grasp',
        name: 'Empowering Grasp',
        description: 'Grants you Empower and Major Brutality while enemy is immobilized.',
        changes: 'Grants Empower and Major Brutality for the duration of immobilize.'
      }
    ],
    buffsApplied: ['major_brutality'],
    debuffsApplied: ['fear', 'immobilize'],
    effects: [
      {
        id: 'immobilize',
        type: 'crowd_control',
        description: 'Immobilizes target and reduces their damage done by 30%',
        duration: 4
      }
    ]
  },
  {
    id: 'bone-armor',
    name: 'Bone Armor',
    description: 'Wrap yourself in bone, gaining damage shield and resistances.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 30,
    morphs: [
      {
        id: 'beckoning-armor',
        name: 'Beckoning Armor',
        description: 'Taunts nearby enemies and grants crowd control immunity.',
        changes: 'Taunts enemies within 15 meters, grants CC immunity.'
      },
      {
        id: 'summoners-armor',
        name: 'Summoner\'s Armor',
        description: 'Increases max health and magicka while active.',
        changes: 'Increases max Health and Magicka by 30% for duration.'
      }
    ],
    buffsApplied: ['major_resolve', 'major_ward'],
    debuffsApplied: ['taunt'],
    effects: [
      {
        id: 'bone-shield',
        type: 'shield',
        description: 'Damage shield that increases resistances',
        value: 2323,
        duration: 30
      }
    ]
  },
  {
    id: 'grave-grasp',
    name: 'Grave Grasp',
    description: 'Summon skeletal hands from the ground to immobilize and damage enemies.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 3780
    },
    range: 28,
    radius: 6,
    duration: 12,
    morphs: [
      {
        id: 'ghostly-embrace-aoe',
        name: 'Ghostly Embrace',
        description: 'Heals allies in the area and applies Minor Vitality.',
        changes: 'Heals allies in area, grants Minor Vitality for 12 seconds.'
      },
      {
        id: 'empowering-grasp-aoe',
        name: 'Empowering Grasp',
        description: 'Increases your damage and applies vulnerability to enemies.',
        changes: 'Grants Empower to you, applies Minor Vulnerability to enemies.'
      }
    ],
    buffsApplied: ['empower', 'minor_vitality'],
    debuffsApplied: ['immobilize', 'minor_vulnerability'],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'physical',
      isDoT: true,
      dotTicks: 12
    },
    healing: {
      baseHealing: 290,
      scalingFactor: 0.25,
      isHoT: true,
      hotTicks: 12
    },
    effects: [
      {
        id: 'skeletal-hands',
        type: 'crowd_control',
        description: 'Skeletal hands immobilize enemies in area',
        duration: 12
      }
    ]
  },
  {
    id: 'bone-colossus',
    name: 'Bone Colossus',
    description: 'Summon a massive bone colossus to fight alongside you.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    duration: 20,
    morphs: [
      {
        id: 'glacial-colossus',
        name: 'Glacial Colossus',
        description: 'Colossus applies chilled and stuns enemies on summon.',
        changes: 'Stuns enemies on arrival, attacks apply chilled status.'
      },
      {
        id: 'hulking-colossus',
        name: 'Hulking Colossus',
        description: 'Colossus has more health and taunts nearby enemies.',
        changes: 'Double health, taunts all enemies within 15 meters.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun', 'chilled', 'taunt'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'bone-colossus-summon',
        type: 'other',
        description: 'Massive bone construct that fights independently',
        duration: 20
      }
    ]
  },
  {
    id: 'bone-spike',
    name: 'Bone Spike',
    description: 'Thrust a bone spike from the ground beneath target enemy.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'flame-spike',
        name: 'Flame Spike',
        description: 'Deals fire damage and applies burning.',
        changes: 'Converts to fire damage, applies burning for 10 seconds.'
      },
      {
        id: 'bone-spear',
        name: 'Bone Spear',
        description: 'Pierces through multiple enemies.',
        changes: 'Pierces through up to 3 enemies in a line.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['burning'],
    damage: {
      baseDamage: 1548,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: []
  },
  {
    id: 'death-gleaning-bt',
    name: 'Death Gleaning',
    description: 'Enemies you kill grant Ultimate and heal you over time.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-on-kill',
        type: 'other',
        description: 'Killing enemies grants 1 Ultimate',
        value: 1
      },
      {
        id: 'heal-on-kill',
        type: 'other',
        description: 'Killing enemies heals for 300 health over 5 seconds'
      }
    ]
  },
  {
    id: 'disdain-harm',
    name: 'Disdain Harm',
    description: 'Taking damage increases your healing done for a short time.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-boost',
        type: 'stat_increase',
        description: 'Healing Done increased by 15% for 5 seconds when taking damage',
        value: 15,
        percentage: true,
        duration: 5
      }
    ]
  },
  {
    id: 'health-avarice',
    name: 'Health Avarice',
    description: 'Increases max health and health recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-health',
        type: 'stat_increase',
        description: 'Max Health increased by 1000',
        value: 1000
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
    id: 'undead-confederate',
    name: 'Undead Confederate',
    description: 'Increases damage and duration of summons and bone constructs.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'minion-damage',
        type: 'stat_increase',
        description: 'Minion and construct damage increased by 15%',
        value: 15,
        percentage: true
      },
      {
        id: 'minion-duration',
        type: 'stat_increase',
        description: 'Minion and construct duration increased by 25%',
        value: 25,
        percentage: true
      }
    ]
  },
  {
    id: 'bone-mender',
    name: 'Bone Mender',
    description: 'Increases critical strike chance and grants stamina when critically healing.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-chance',
        type: 'stat_increase',
        description: 'Critical Strike Chance increased by 12%',
        value: 12,
        percentage: true
      },
      {
        id: 'stamina-return',
        type: 'other',
        description: 'Critical heals restore 100 Stamina',
        value: 100
      }
    ]
  }
];

// Living Death Skills
const livingDeathSkills: Skill[] = [
  {
    id: 'render-flesh',
    name: 'Render Flesh',
    description: 'Sacrifice your health to heal an ally for a larger amount.',
    type: 'active',
    resourceCost: {
      type: 'health',
      amount: 1161
    },
    range: 28,
    morphs: [
      {
        id: 'resistant-flesh',
        name: 'Resistant Flesh',
        description: 'Also grants spell and physical resistance to target.',
        changes: 'Grants Major Ward and Major Resolve for 30 seconds.'
      },
      {
        id: 'blood-sacrifice',
        name: 'Blood Sacrifice',
        description: 'Heals multiple allies and generates Ultimate.',
        changes: 'Heals up to 2 additional nearby allies, generates 6 Ultimate.'
      }
    ],
    buffsApplied: ['major_ward', 'major_resolve'],
    debuffsApplied: [],
    healing: {
      baseHealing: 2323,
      scalingFactor: 2.0
    },
    effects: [
      {
        id: 'health-sacrifice',
        type: 'other',
        description: 'Sacrifice your health to provide larger healing to allies'
      }
    ]
  },
  {
    id: 'restoring-tether',
    name: 'Restoring Tether',
    description: 'Create a link with an ally that shares healing between you.',
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
        description: 'Links up to 3 allies and provides resource return.',
        changes: 'Affects up to 3 allies, restores Magicka when healing occurs.'
      },
      {
        id: 'mortal-coil',
        name: 'Mortal Coil',
        description: 'Damages enemies between you and your ally.',
        changes: 'Deals damage to enemies between linked targets.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 348,
      scalingFactor: 0.3,
      isHoT: true,
      hotTicks: 12
    },
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'healing-link',
        type: 'other',
        description: 'Shares healing between linked allies',
        duration: 12
      }
    ]
  },
  {
    id: 'life-amid-death',
    name: 'Life Amid Death',
    description: 'Draw life force from nearby corpses to heal yourself and allies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    radius: 12,
    morphs: [
      {
        id: 'enduring-undeath',
        name: 'Enduring Undeath',
        description: 'Grants damage reduction and increases healing received.',
        changes: 'Provides 30% damage reduction and +50% healing received for 20 seconds.'
      },
      {
        id: 'renewing-animation',
        name: 'Renewing Animation',
        description: 'Also restores Magicka and provides healing over time.',
        changes: 'Restores 15% max Magicka and grants healing over time for 10 seconds.'
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
        id: 'corpse-heal',
        type: 'other',
        description: 'Healing increases by 25% per corpse consumed (max 4 corpses)'
      },
      {
        id: 'group-heal',
        type: 'other',
        description: 'Heals you and up to 5 nearby allies'
      }
    ]
  },
  {
    id: 'spirit-mend',
    name: 'Spirit Mend',
    description: 'Send a spirit to heal an ally over time and remove negative effects.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    range: 28,
    duration: 10,
    morphs: [
      {
        id: 'spirit-guardian',
        name: 'Spirit Guardian',
        description: 'Spirit provides damage shield and follows ally.',
        changes: 'Grants damage shield and spirit follows target for protection.'
      },
      {
        id: 'intensive-mender',
        name: 'Intensive Mender',
        description: 'Heals for more and triggers burst heal at low health.',
        changes: 'Higher healing, triggers emergency heal when ally drops below 50%.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 348,
      scalingFactor: 0.3,
      isHoT: true,
      hotTicks: 10
    },
    effects: [
      {
        id: 'spirit-companion',
        type: 'other',
        description: 'Spirit that follows ally providing healing and cleansing',
        duration: 10
      },
      {
        id: 'damage-shield',
        type: 'shield',
        description: 'Protective spirit shield',
        value: 1742
      }
    ]
  },
  {
    id: 'life-amid-death',
    name: 'Life amid Death',
    description: 'Channel to heal yourself and nearby allies over time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    radius: 8,
    duration: 3,
    morphs: [
      {
        id: 'renewing-undeath',
        name: 'Renewing Undeath',
        description: 'Also restores magicka and stamina to affected allies.',
        changes: 'Restores 500 Magicka and Stamina per second to allies.'
      },
      {
        id: 'enduring-undeath',
        name: 'Enduring Undeath',
        description: 'Lasts longer and grants damage reduction.',
        changes: '5 second duration, grants Minor Protection to allies.'
      }
    ],
    buffsApplied: ['minor_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 969,
      scalingFactor: 0.9
    },
    effects: [
      {
        id: 'channel-heal',
        type: 'other',
        description: 'Channel for 3 seconds, healing every second',
        duration: 3
      }
    ]
  },
  {
    id: 'reanimate',
    name: 'Reanimate',
    description: 'Resurrect all nearby allies and grant them damage reduction.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 400
    },
    radius: 12,
    morphs: [
      {
        id: 'renewing-undeath',
        name: 'Renewing Undeath',
        description: 'Resurrected allies are healed to full and gain immunity.',
        changes: 'Allies revive with full health and 5 seconds of damage immunity.'
      },
      {
        id: 'enduring-undeath-ultimate',
        name: 'Enduring Undeath',
        description: 'Allies gain permanent damage reduction for remainder of combat.',
        changes: 'Grants permanent Minor Protection until combat ends.'
      }
    ],
    buffsApplied: ['minor_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 5807,
      scalingFactor: 5.0
    },
    effects: [
      {
        id: 'mass-resurrect',
        type: 'other',
        description: 'Resurrects all nearby dead allies with buffs'
      }
    ]
  },
  // Passive Skills
  {
    id: 'curative-curse',
    name: 'Curative Curse',
    description: 'Living Death abilities remove negative effects when healing.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cleanse',
        type: 'other',
        description: 'Living Death abilities remove 1 negative effect when healing allies',
        value: 1
      }
    ]
  },
  {
    id: 'last-gasp',
    name: 'Last Gasp',
    description: 'Increases healing done when Health is low.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'low-health-healing',
        type: 'stat_increase',
        description: 'Healing Done increased by 30% when below 50% Health',
        value: 30,
        percentage: true
      }
    ]
  },
  {
    id: 'undead-confederate-healer',
    name: 'Undead Confederate',
    description: 'Increases healing based on nearby corpses.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'corpse-healing',
        type: 'stat_increase',
        description: 'Healing Done increased by 6% per corpse within 16 meters (max 5)',
        value: 6,
        percentage: true
      }
    ]
  },
  {
    id: 'dismember-healer',
    name: 'Dismember',
    description: 'Reduces cost of Living Death abilities and increases Magicka.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Living Death ability costs reduced by 8%',
        value: 8,
        percentage: true
      },
      {
        id: 'max-magicka',
        type: 'stat_increase',
        description: 'Maximum Magicka increased by 6%',
        value: 6,
        percentage: true
      }
    ]
  },
  {
    id: 'reusable-parts',
    name: 'Reusable Parts',
    description: 'Increases critical healing and grants chance to not consume corpses.',
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
        id: 'corpse-preserve',
        type: 'other',
        description: '25% chance to not consume corpses when using abilities',
        value: 25,
        percentage: true
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

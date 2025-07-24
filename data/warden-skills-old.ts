// Warden Skills - The nature magic class
import { Skill } from './skills';

// Animal Companions Skills
const animalCompanionsSkills: Skill[] = [
  {
    id: 'dive',
    name: 'Dive',
    description: 'Command a cliff racer to dive bomb an enemy, dealing damage and applying off balance.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'cutting-dive',
        name: 'Cutting Dive',
        description: 'Deals more damage to low health enemies and heals you.',
        changes: 'Deals up to 100% more damage based on enemy missing health, heals on kill.'
      },
      {
        id: 'screaming-cliff-racer',
        name: 'Screaming Cliff Racer',
        description: 'Causes fear to nearby enemies and increases damage.',
        changes: 'Fears up to 3 nearby enemies and deals higher damage.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['off_balance', 'fear'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'physical'
    },
    healing: {
      baseHealing: 580,
      scalingFactor: 0.5
    },
    effects: [
      {
        id: 'animal-attack',
        type: 'other',
        description: 'Ranged animal attack with execute scaling'
      }
    ]
  },
  {
    id: 'scorch',
    name: 'Scorch',
    description: 'Launch a fire projectile that creates a burning area on impact.',
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
        id: 'subterranean-assault',
        name: 'Subterranean Assault',
        description: 'Becomes delayed area attack that applies Major Fracture.',
        changes: 'Delayed 3-second explosion, applies Major Fracture for 10 seconds.'
      },
      {
        id: 'deep-fissure',
        name: 'Deep Fissure',
        description: 'Creates larger area and applies Minor Breach to enemies.',
        changes: 'Larger radius and applies Minor Breach to all enemies hit.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_fracture', 'minor_breach', 'burning'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'ground-fire',
        type: 'other',
        description: 'Creates burning ground that damages enemies over time',
        duration: 10
      }
    ]
  },
  {
    id: 'swarm',
    name: 'Swarm',
    description: 'Summon a swarm of fetcherflies to attack enemies and return to heal you.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    duration: 6,
    morphs: [
      {
        id: 'fletcher-infection',
        name: 'Fetcherfly Infection',
        description: 'Spreads to nearby enemies when original target dies.',
        changes: 'When target dies, spreads to up to 2 nearby enemies.'
      },
      {
        id: 'growing-swarm',
        name: 'Growing Swarm',
        description: 'Deals more damage over time and heals for more.',
        changes: 'Damage increases each tick, healing increases by 50%.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 6
    },
    healing: {
      baseHealing: 348,
      scalingFactor: 0.3
    },
    effects: [
      {
        id: 'returning-swarm',
        type: 'other',
        description: 'Swarm returns to heal you after damaging enemies',
        duration: 6
      }
    ]
  },
  {
    id: 'betty-netch',
    name: 'Betty Netch',
    description: 'Summon a betty netch to restore your magicka and remove negative effects.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 25,
    morphs: [
      {
        id: 'blue-betty',
        name: 'Blue Betty',
        description: 'Also restores stamina and increases recovery rates.',
        changes: 'Restores both Magicka and Stamina, increases recovery by 15%.'
      },
      {
        id: 'bull-netch',
        name: 'Bull Netch',
        description: 'Becomes combat pet that attacks enemies and grants brutality.',
        changes: 'Active combat pet, grants Major Brutality and Sorcery.'
      }
    ],
    buffsApplied: ['major_brutality', 'major_sorcery'],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-restore',
        type: 'other',
        description: 'Restores 1000 Magicka every 2 seconds',
        duration: 25
      },
      {
        id: 'cleanse',
        type: 'other',
        description: 'Removes 1 negative effect every 5 seconds'
      }
    ]
  },
  {
    id: 'falcon-swiftness',
    name: 'Falcon\'s Swiftness',
    description: 'Increase your movement speed and dodge roll distance while active.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 3780
    },
    duration: 20,
    morphs: [
      {
        id: 'deceptive-predator',
        name: 'Deceptive Predator',
        description: 'Also grants invisibility when dodging and increases damage.',
        changes: 'Dodging grants invisibility for 3 seconds and increases damage by 10%.'
      },
      {
        id: 'bird-of-prey',
        name: 'Bird of Prey',
        description: 'Also increases damage and critical chance.',
        changes: 'Increases damage done by 8% and critical chance by 10%.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: [],
    effects: [
      {
        id: 'movement-speed',
        type: 'other',
        description: 'Increases movement speed and dodge roll distance',
        duration: 20
      }
    ]
  },
  // Animal Companions Passive Skills
  {
    id: 'bond-with-nature',
    name: 'Bond with Nature',
    description: 'Increases your max Magicka and Stamina.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-increase',
        type: 'other',
        description: 'Increases Max Magicka and Stamina by 4% per rank'
      }
    ]
  },
  {
    id: 'savage-beast',
    name: 'Savage Beast',
    description: 'Increases your damage done with Animal Companions abilities.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-increase',
        type: 'other',
        description: 'Increases Animal Companions ability damage by 3% per rank'
      }
    ]
  },
  {
    id: 'flourish',
    name: 'Flourish',
    description: 'When you cast Animal Companions abilities, you restore Magicka and Stamina.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-restore',
        type: 'other',
        description: 'Restores 400 Magicka and Stamina when casting Animal Companions abilities'
      }
    ]
  },
  {
    id: 'advanced-species',
    name: 'Advanced Species',
    description: 'Increases your pet\'s damage and your critical hit damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-damage',
        type: 'other',
        description: 'Increases pet damage by 15% and critical damage by 10% per rank'
      }
    ]
  },
  {
    id: 'natures-gift',
    name: 'Nature\'s Gift',
    description: 'Animal Companions abilities have a chance to activate an animal instinct.',
    type: 'passive',
    buffsApplied: ['major_brutality', 'major_sorcery', 'major_prophecy', 'major_savagery'],
    debuffsApplied: [],
    effects: [
      {
        id: 'animal-instinct',
        type: 'other',
        description: 'Random Major buff for 20 seconds when casting Animal Companions abilities'
      }
    ]
  },
  {
    id: 'feral-guardian',
    name: 'Feral Guardian',
    description: 'Summon a powerful bear companion to fight alongside you.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 30,
    morphs: [
      {
        id: 'eternal-guardian',
        name: 'Eternal Guardian',
        description: 'Bear can resurrect you if you die while it\'s active.',
        changes: 'Guardian can resurrect you once per cast, lasts longer.'
      },
      {
        id: 'wild-guardian',
        name: 'Wild Guardian',
        description: 'Bear deals more damage and can be commanded to maul enemies.',
        changes: 'Higher damage, activatable maul attack that stuns enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 580,
      scalingFactor: 0.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'bear-companion',
        type: 'other',
        description: 'Permanent bear companion that fights independently',
        duration: 30
      }
    ]
  }
];

// Green Balance Skills
const greenBalanceSkills: Skill[] = [
  {
    id: 'fungal-growth',
    name: 'Fungal Growth',
    description: 'Grow healing fungi that restore health to you and allies over time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    radius: 8,
    duration: 6,
    morphs: [
      {
        id: 'enchanted-growth',
        name: 'Enchanted Growth',
        description: 'Also provides magicka recovery and removes negative effects.',
        changes: 'Increases Magicka Recovery by 50% and removes 1 debuff per tick.'
      },
      {
        id: 'soothing-spores',
        name: 'Soothing Spores',
        description: 'Increases healing and provides damage reduction.',
        changes: 'Higher healing and grants Minor Protection to affected allies.'
      }
    ],
    buffsApplied: ['minor_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 580,
      scalingFactor: 0.5,
      isHoT: true,
      hotTicks: 6
    },
    effects: [
      {
        id: 'ground-healing',
        type: 'other',
        description: 'Creates healing fungi area for allies',
        duration: 6
      }
    ]
  },
  {
    id: 'healing-seed',
    name: 'Healing Seed',
    description: 'Plant a seed of healing on an ally that bursts when they take damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    range: 28,
    duration: 6,
    morphs: [
      {
        id: 'budding-seeds',
        name: 'Budding Seeds',
        description: 'Affects multiple allies and has a shorter delay.',
        changes: 'Can target up to 3 allies, triggers after 1 second delay.'
      },
      {
        id: 'corrupting-pollen',
        name: 'Corrupting Pollen',
        description: 'Also damages nearby enemies when it bursts.',
        changes: 'Damages enemies near the ally when seed bursts.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 1742,
      scalingFactor: 1.5
    },
    damage: {
      baseDamage: 871,
      scalingFactor: 0.75,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'delayed-burst-heal',
        type: 'other',
        description: 'Healing that triggers when ally takes damage',
        duration: 6
      }
    ]
  },
  {
    id: 'living-vines',
    name: 'Living Vines',
    description: 'Wrap yourself in protective vines that heal you when damaged.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 20,
    morphs: [
      {
        id: 'leeching-vines',
        name: 'Leeching Vines',
        description: 'Vines spread to nearby allies and steal enemy health.',
        changes: 'Affects up to 2 nearby allies, damages nearby enemies.'
      },
      {
        id: 'living-trellis',
        name: 'Living Trellis',
        description: 'Increases healing received and provides damage reduction.',
        changes: 'Increases healing received by 30% and reduces damage by 8%.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 348,
      scalingFactor: 0.3
    },
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'reactive-healing',
        type: 'other',
        description: 'Heals you when you take damage',
        duration: 20
      }
    ]
  },
  {
    id: 'natures-grasp',
    name: 'Nature\'s Grasp',
    description: 'Call forth vines to immobilize enemies and heal nearby allies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    range: 28,
    radius: 8,
    duration: 12,
    morphs: [
      {
        id: 'bursting-vines',
        name: 'Bursting Vines',
        description: 'Vines explode for damage when they expire.',
        changes: 'Explodes for area damage when immobilization ends.'
      },
      {
        id: 'healing-thicket',
        name: 'Healing Thicket',
        description: 'Creates larger healing area that moves with you.',
        changes: 'Larger radius, follows you and heals for longer duration.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize'],
    healing: {
      baseHealing: 290,
      scalingFactor: 0.25,
      isHoT: true,
      hotTicks: 12
    },
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'vine-immobilize',
        type: 'crowd_control',
        description: 'Immobilizes enemies while healing allies',
        duration: 12
      }
    ]
  },
  {
    id: 'lotus-flower',
    name: 'Lotus Flower',
    description: 'Activate to heal yourself and gain weapon damage for each Green Balance ability slotted.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    duration: 20,
    morphs: [
      {
        id: 'green-lotus',
        name: 'Green Lotus',
        description: 'Increases Magicka Recovery and healing received.',
        changes: 'Increases Magicka Recovery by 50% and healing received by 20%.'
      },
      {
        id: 'blooming-seeds',
        name: 'Blooming Seeds',
        description: 'Light and Heavy attacks heal you and nearby allies.',
        changes: 'Light and Heavy attacks heal you and 2 nearby allies for 25% of damage done.'
      }
    ],
    buffsApplied: ['major_prophecy'],
    debuffsApplied: [],
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'lotus-bonus',
        type: 'other',
        description: 'Increases weapon damage based on Green Balance abilities slotted',
        duration: 20
      }
    ]
  },
  // Green Balance Passive Skills
  {
    id: 'accelerated-growth',
    name: 'Accelerated Growth',
    description: 'Increases your healing done and Health Recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-bonus',
        type: 'other',
        description: 'Increases healing done by 6% and Health Recovery by 50% per rank'
      }
    ]
  },
  {
    id: 'natures-gift-green',
    name: 'Nature\'s Gift',
    description: 'When you heal an ally, you restore Magicka.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'magicka-restore',
        type: 'other',
        description: 'Restores 250 Magicka when healing an ally with Green Balance abilities'
      }
    ]
  },
  {
    id: 'emerald-moss',
    name: 'Emerald Moss',
    description: 'Increases your max Health and Magicka Recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'health-recovery',
        type: 'other',
        description: 'Increases Max Health by 8% and Magicka Recovery by 10% per rank'
      }
    ]
  },
  {
    id: 'life-giver',
    name: 'Life Giver',
    description: 'Increases your healing done based on your max Health.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'health-scaling-healing',
        type: 'other',
        description: 'Increases healing done by up to 15% based on your max Health'
      }
    ]
  },
  {
    id: 'maturation',
    name: 'Maturation',
    description: 'Your Green Balance abilities heal for more when targeting low health allies.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'execute-healing',
        type: 'other',
        description: 'Green Balance abilities heal up to 50% more on low health allies'
      }
    ]
  },
  {
    id: 'secluded-grove',
    name: 'Secluded Grove',
    description: 'Create a forest sanctuary that heals allies and grants damage reduction.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 280
    },
    radius: 12,
    duration: 20,
    morphs: [
      {
        id: 'healing-thicket-ultimate',
        name: 'Healing Thicket',
        description: 'Follows you and provides stronger healing over time.',
        changes: 'Mobile sanctuary that moves with you, stronger healing.'
      },
      {
        id: 'natures-sanctuary',
        name: 'Nature\'s Sanctuary',
        description: 'Larger area that also removes negative effects from allies.',
        changes: 'Larger radius, cleanses debuffs and grants immunity to new ones.'
      }
    ],
    buffsApplied: ['major_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 580,
      scalingFactor: 0.5,
      isHoT: true,
      hotTicks: 20
    },
    effects: [
      {
        id: 'nature-sanctuary',
        type: 'other',
        description: 'Creates powerful healing and protection area',
        duration: 20
      }
    ]
  }
];

// Winter's Embrace Skills
const wintersEmbraceSkills: Skill[] = [
  {
    id: 'frost-cloak',
    name: 'Frost Cloak',
    description: 'Wrap yourself in frost, dealing damage to nearby enemies and chilling them.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    radius: 8,
    duration: 20,
    morphs: [
      {
        id: 'expansive-frost-cloak',
        name: 'Expansive Frost Cloak',
        description: 'Increases radius and applies Minor Protection to you.',
        changes: 'Larger radius and grants Minor Protection for duration.'
      },
      {
        id: 'ice-fortress',
        name: 'Ice Fortress',
        description: 'Provides damage shield and increases blocking effectiveness.',
        changes: 'Grants damage shield and reduces block cost by 36%.'
      }
    ],
    buffsApplied: ['minor_protection'],
    debuffsApplied: ['chilled'],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'frost-aura',
        type: 'other',
        description: 'Aura that damages and chills nearby enemies',
        duration: 20
      },
      {
        id: 'damage-shield',
        type: 'shield',
        description: 'Ice damage shield',
        value: 1742
      }
    ]
  },
  {
    id: 'crystallized-slab',
    name: 'Crystallized Slab',
    description: 'Launch a frozen projectile that creates an ice barrier.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    range: 28,
    duration: 15,
    morphs: [
      {
        id: 'crystallized-shield',
        name: 'Crystallized Shield',
        description: 'Becomes instant cast damage shield instead of projectile.',
        changes: 'Instant damage shield that absorbs more damage.'
      },
      {
        id: 'shimmering-shield',
        name: 'Shimmering Shield',
        description: 'Reflects projectiles and provides spell resistance.',
        changes: 'Reflects projectiles and grants Major Spell Resistance.'
      }
    ],
    buffsApplied: ['major_spell_resistance'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'ice-barrier',
        type: 'shield',
        description: 'Ice barrier that blocks attacks and projectiles',
        value: 2323,
        duration: 15
      }
    ]
  },
  {
    id: 'winter-revenge',
    name: 'Winter\'s Revenge',
    description: 'Create a field of ice spikes that damage enemies over time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    radius: 8,
    duration: 15,
    morphs: [
      {
        id: 'impaling-shards',
        name: 'Impaling Shards',
        description: 'Deals more damage and immobilizes enemies.',
        changes: 'Higher damage and applies immobilization for 4 seconds.'
      },
      {
        id: 'gripping-shards',
        name: 'Gripping Shards',
        description: 'Reduces enemy movement speed and damage done.',
        changes: 'Applies Major Maim and reduces movement speed by 70%.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize', 'major_maim', 'chilled'],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 15
    },
    effects: [
      {
        id: 'ice-spikes',
        type: 'other',
        description: 'Field of ice spikes that damage and slow enemies',
        duration: 15
      }
    ]
  },
  {
    id: 'arctic-wind',
    name: 'Arctic Wind',
    description: 'Call forth a healing wind that restores health based on missing health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    morphs: [
      {
        id: 'polar-wind',
        name: 'Polar Wind',
        description: 'Also heals nearby allies and scales with max health.',
        changes: 'Heals nearby allies, healing scales with your max health.'
      },
      {
        id: 'arctic-blast',
        name: 'Arctic Blast',
        description: 'Also deals damage to nearby enemies and chills them.',
        changes: 'Damages nearby enemies and applies chilled status effect.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['chilled'],
    healing: {
      baseHealing: 2323,
      scalingFactor: 2.0
    },
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'scaling-heal',
        type: 'other',
        description: 'Healing increases based on missing health up to 300%'
      }
    ]
  },
  {
    id: 'frozen-gate',
    name: 'Frozen Gate',
    description: 'Create two frost portals to teleport between and damage enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    range: 28,
    duration: 30,
    morphs: [
      {
        id: 'frozen-retreat',
        name: 'Frozen Retreat',
        description: 'Can be cast while moving and provides damage reduction.',
        changes: 'Castable while moving, grants 20% damage reduction after teleporting.'
      },
      {
        id: 'frozen-device',
        name: 'Frozen Device',
        description: 'Portals damage enemies and apply chilled when used.',
        changes: 'Using portals damages nearby enemies and applies chilled.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['chilled'],
    damage: {
      baseDamage: 871,
      scalingFactor: 0.75,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'teleport-portals',
        type: 'other',
        description: 'Creates teleportation portals that last 30 seconds',
        duration: 30
      }
    ]
  },
  // Winter's Embrace Passive Skills
  {
    id: 'piercing-cold',
    name: 'Piercing Cold',
    description: 'Increases your damage done with Winter\'s Embrace abilities.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'frost-damage',
        type: 'other',
        description: 'Increases Winter\'s Embrace ability damage by 6% per rank'
      }
    ]
  },
  {
    id: 'icy-aura',
    name: 'Icy Aura',
    description: 'Increases your frost damage and resistance to chilled and frozen effects.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'frost-resistance',
        type: 'other',
        description: 'Increases frost damage by 3% and reduces duration of chill/freeze by 50% per rank'
      }
    ]
  },
  {
    id: 'frozen-armor',
    name: 'Frozen Armor',
    description: 'When you take damage, you have a chance to gain a damage shield.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'reactive-shield',
        type: 'shield',
        description: '10% chance when taking damage to gain damage shield for 6 seconds',
        value: 1300
      }
    ]
  },
  {
    id: 'chilled-bone',
    name: 'Chilled Bone',
    description: 'Your chilled enemies take more damage from your Winter\'s Embrace abilities.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'chill-bonus',
        type: 'other',
        description: 'Chilled enemies take 15% more damage from Winter\'s Embrace abilities per rank'
      }
    ]
  },
  {
    id: 'numbing-chill',
    name: 'Numbing Chill',
    description: 'Your Winter\'s Embrace abilities apply chilled to enemies.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: ['chilled'],
    effects: [
      {
        id: 'auto-chill',
        type: 'other',
        description: 'Winter\'s Embrace abilities have 50% chance to apply chilled for 4 seconds'
      }
    ]
  },
  {
    id: 'sleet-storm',
    name: 'Sleet Storm',
    description: 'Summon a massive storm of ice and wind over a large area.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    radius: 15,
    duration: 12,
    morphs: [
      {
        id: 'northern-storm',
        name: 'Northern Storm',
        description: 'You take less damage and gain more Ultimate while inside.',
        changes: '30% damage reduction and 12 Ultimate generation per second inside.'
      },
      {
        id: 'permafrost',
        name: 'Permafrost',
        description: 'Enemies are immobilized and storm follows you.',
        changes: 'Immobilizes enemies and storm moves with you.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize', 'chilled'],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 12
    },
    effects: [
      {
        id: 'ice-storm',
        type: 'other',
        description: 'Massive area ice storm that damages and controls enemies',
        duration: 12
      }
    ]
  }
];

// Export Warden Skills
export const wardenSkills = {
  animalCompanions: animalCompanionsSkills,
  greenBalance: greenBalanceSkills,
  wintersEmbrace: wintersEmbraceSkills
};

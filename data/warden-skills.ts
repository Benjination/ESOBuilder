// Warden Skills - The nature magic class
import { Skill } from './skills';

// ANIMAL COMPANIONS SKILL LINE
const animalCompanionsSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'feral-guardian',
    name: 'Feral Guardian',
    description: 'Rouse a grizzly to fight by your side. The grizzly swipes at an enemy, dealing 580 Magic Damage, and sometimes swipes all enemies in front of it, dealing 2323 Magic Damage and stunning them for 2 seconds. Once summoned you can activate Guardian\'s Wrath for 75 Ultimate, causing the grizzly to maul an enemy for 3253 Magic Damage. Deals 100% more damage to enemies below 25% Health.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    morphs: [
      {
        id: 'eternal-guardian',
        name: 'Eternal Guardian',
        description: 'Rouse a grizzly to fight by your side. The grizzly swipes an enemy, dealing 599 Magic Damage, and sometimes swipes all enemies in front of it, dealing 2399 Magic Damage and stunning them for 2 seconds. Once summoned you can activate Guardian\'s Wrath for 75 Ultimate, causing the grizzly to maul an enemy for 3360 Magic Damage. Deals 150% more damage to enemies below 25% Health. The grizzly respawns when killed, once per minute.',
        changes: 'The grizzly instantly respawns when it dies. Increases the amount of bonus damage dealt to low Health targets.'
      },
      {
        id: 'wild-guardian',
        name: 'Wild Guardian',
        description: 'Rouse a grizzly to fight by your side. The grizzly swipes at an enemy, dealing 659 Bleed Damage, and sometimes swipes all enemies in front of it, dealing 2640 Bleed Damage and stunning them for 2 seconds. Once summoned you can activate Guardian\'s Savagery for 75 Ultimate, to maul an enemy for 3697 Bleed Damage. Deals 100% more damage to enemies below 25% Health. The damage has a higher chance to apply the Hemorrhaging status effect.',
        changes: 'The bear now deals Bleed Damage, and has a quintuple chance of applying the Hemorrhaging status effect.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun', 'hemorrhaging'],
    damage: {
      baseDamage: 580,
      scalingFactor: 2.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'permanent-pet',
        type: 'other',
        description: 'Summons a permanent grizzly companion'
      },
      {
        id: 'guardian-wrath',
        type: 'other',
        description: 'Can activate Guardian\'s Wrath for 75 Ultimate'
      },
      {
        id: 'execute-scaling',
        type: 'other',
        description: '100-150% more damage to enemies below 25% Health',
        value: 150,
        percentage: true
      }
    ]
  },

  // Active abilities
  {
    id: 'dive',
    name: 'Dive',
    description: 'Command a cliff racer to dive bomb an enemy, dealing 2090 Magic Damage. If you are more than 7 meters away from the target, you set them Off Balance for 7 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    morphs: [
      {
        id: 'cutting-dive',
        name: 'Cutting Dive',
        description: 'Command a cliff racer to dive bomb an enemy, dealing 2091 Bleed Damage immediately and then causing them to bleed for 2140 Bleed Damage over 10 seconds. If you are more than 7 meters away from the target, you set them Off Balance for 7 seconds.',
        changes: 'Converts into a Stamina ability and deals Bleed Damage, and applies a damage over time to enemies hit.'
      },
      {
        id: 'screaming-cliff-racer',
        name: 'Screaming Cliff Racer',
        description: 'Command a cliff racer to dive bomb an enemy, dealing 2160 Magic Damage. If you are more than 7 meters away from the target, you set them Off Balance for 7 seconds. After dealing damage you increase your Weapon and Spell Damage by 100 for 10 seconds, which quadruples after damaging Off Balance enemies.',
        changes: 'Increases your Weapon and Spell Damage after dealing damage, which increases when hitting Off Balance targets.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['off_balance'],
    damage: {
      baseDamage: 2090,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'range-bonus',
        type: 'other',
        description: 'Sets Off Balance if more than 7 meters away'
      },
      {
        id: 'damage-buff',
        type: 'stat_increase',
        description: 'Increases Weapon/Spell Damage by 100-400',
        value: 400
      }
    ]
  },

  {
    id: 'scorch',
    name: 'Scorch',
    description: 'Stir a group of shalk that attack after 3 seconds, dealing 2509 Magic Damage to enemies in front of you. After the shalk complete their attack, they burrow underground for 6 seconds and then resurface again, dealing 3486 Magic Damage to enemies in front of you.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    morphs: [
      {
        id: 'deep-fissure',
        name: 'Deep Fissure',
        description: 'Stir a group of shalk that attack after 3 seconds, dealing 2591 Magic Damage to enemies in front of you. After the shalk complete their attack, they burrow underground for 6 seconds and then resurface again, dealing 3600 Magic Damage to enemies in front of you. Enemies damaged are afflicted with Major and Minor Breach, reducing their Physical and Spell Resistance by 5948 and 2974 for 10 seconds.',
        changes: 'Applies Major and Minor Breach to enemies hit, reducing their Physical and Spell Resistance.'
      },
      {
        id: 'subterranean-assault',
        name: 'Subterranean Assault',
        description: 'Stir a group of shalk that attack after 3 seconds, dealing 2591 Poison Damage to enemies in front of you. After the shalk complete their attack, they burrow underground for 3 seconds and then resurface again, dealing 2591 Poison Damage to enemies in front of you.',
        changes: 'Converts to a Stamina ability and deals Poison Damage. Reduces the cost and time it takes for the ability to deal damage, but the second hit no longer deals increased damage.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_breach', 'minor_breach'],
    damage: {
      baseDamage: 2509,
      scalingFactor: 1.8,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'delayed-attack',
        type: 'other',
        description: 'Two-stage delayed attack with increasing damage'
      },
      {
        id: 'second-hit',
        type: 'other',
        description: 'Second hit deals 3486 Magic Damage after 9 seconds',
        value: 3486
      }
    ]
  },

  {
    id: 'swarm',
    name: 'Swarm',
    description: 'Unleash a swarm of fetcherflies to relentlessly attack an enemy, dealing 4631 Magic Damage over 20 seconds. The fetcherflies rip through the enemy\'s flesh, afflicting them with Minor Vulnerability for the duration, increasing their damage taken by 5%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    duration: 20,
    morphs: [
      {
        id: 'fetcher-infection',
        name: 'Fetcher Infection',
        description: 'Unleash a swarm of fetcherflies to relentlessly attack an enemy, dealing 4785 Magic Damage over 20 seconds. Every second cast of this ability deals 60% increased damage. The fetcherflies rip through the enemy\'s flesh, afflicting them with Minor Vulnerability for the duration, increasing their damage taken by 5%.',
        changes: 'Every second cast deals increased damage.'
      },
      {
        id: 'growing-swarm',
        name: 'Growing Swarm',
        description: 'Unleash a swarm of fetcherflies to relentlessly attack an enemy, causing them to bleed for 4785 Bleed Damage over 20 seconds. The fetcherflies rip through the original enemy\'s flesh, afflicting them with Minor Vulnerability for the duration, increasing their damage taken by 5%. Enemies near the carrier take 435 Bleed Damage every 2 seconds for the duration. You can only have one Growing Swarm active at a time.',
        changes: 'Converts into a Stamina ability and deals Bleed Damage. Deals additional damage to nearby enemies of the affected target, but limits the cast to one at a time.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_vulnerability'],
    damage: {
      baseDamage: 4631,
      scalingFactor: 2.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'dot',
        type: 'other',
        description: 'Damage over time for 20 seconds'
      },
      {
        id: 'spread-damage',
        type: 'other',
        description: 'Deals damage to nearby enemies of the target',
        value: 435
      }
    ]
  },

  {
    id: 'betty-netch',
    name: 'Betty Netch',
    description: 'Call a betty netch to your side, which grants you Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20% for 22 seconds. Every 5 seconds, the netch removes 1 negative effect from you. If no negative effects are removed you instead increase your damage done by 5% for 5 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 22,
    morphs: [
      {
        id: 'blue-betty',
        name: 'Blue Betty',
        description: 'Call a betty netch to your side, which restores 4416 Magicka to you over 25 seconds and grants you Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20%. Every 5 seconds, the netch removes 1 negative effect from you. If no negative effects are removed you instead increase your damage done by 5% for 5 seconds.',
        changes: 'Restores Magicka every second while active.'
      },
      {
        id: 'bull-netch',
        name: 'Bull Netch',
        description: 'Call a bull netch to your side, which restores 4416 Stamina to you over 25 seconds and grants you Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20%. Every 5 seconds, the netch removes 1 negative effect from you. If no negative effects are removed you instead increase your damage done by 5% for 5 seconds',
        changes: 'Restores Stamina every second while active.'
      }
    ],
    buffsApplied: ['major_brutality', 'major_sorcery'],
    debuffsApplied: [],
    effects: [
      {
        id: 'cleanse',
        type: 'other',
        description: 'Removes 1 negative effect every 5 seconds'
      },
      {
        id: 'damage-bonus',
        type: 'stat_increase',
        description: 'Increases damage done by 5% if no effects to cleanse',
        value: 5,
        percentage: true
      },
      {
        id: 'resource-restore',
        type: 'resource_restore',
        description: 'Restores Magicka or Stamina over time',
        value: 4416
      }
    ]
  },

  {
    id: 'falcons-swiftness',
    name: 'Falcon\'s Swiftness',
    description: 'Invoke the spirit of agility to gain Major Expedition for 6 seconds, increasing your Movement Speed by 30%. Gain immunity to snares and immobilizations for 4 seconds.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    duration: 6,
    morphs: [
      {
        id: 'bird-of-prey',
        name: 'Bird of Prey',
        description: 'Invoke the spirit of agility to gain Major Expedition for 6 seconds, increasing your Movement Speed by 30%. Gain immunity to snares and immobilizations for 4 seconds. While slotted you gain Minor Berserk, increasing your damage done by 5%.',
        changes: 'Passively grants Minor Berserk while slotted.'
      },
      {
        id: 'deceptive-predator',
        name: 'Deceptive Predator',
        description: 'Invoke the spirit of agility to gain Major Expedition for 6 seconds, increasing your Movement Speed by 30%. Gain immunity to snares and immobilizations for 4 seconds. While slotted you gain Minor Evasion, reducing damage from area attacks by 10%.',
        changes: 'Passively grants Minor Evasion while slotted.'
      }
    ],
    buffsApplied: ['major_expedition', 'minor_berserk', 'minor_evasion'],
    debuffsApplied: [],
    effects: [
      {
        id: 'cc-immunity',
        type: 'other',
        description: 'Immunity to snares and immobilizations for 4 seconds'
      },
      {
        id: 'slotted-bonus',
        type: 'stat_increase',
        description: 'Passive bonus while slotted on either bar'
      }
    ]
  }
];

// Animal Companions Passives
const animalCompanionsPassives: Skill[] = [
  {
    id: 'bond-with-nature',
    name: 'Bond with Nature',
    description: 'Anytime one of your Animal Companion skills end, you are healed for 1530 Health.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 1530,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'skill-end-heal',
        type: 'other',
        description: 'Heal when Animal Companion skills end',
        value: 1530
      }
    ]
  },

  {
    id: 'savage-beast',
    name: 'Savage Beast',
    description: 'When you cast an Animal Companions ability while you are in combat, you generate 4 Ultimate. This effect can occur once every 8 seconds.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-generation',
        type: 'resource_restore',
        description: 'Generate 4 Ultimate when casting Animal Companions abilities',
        value: 4
      }
    ]
  },

  {
    id: 'flourish',
    name: 'Flourish',
    description: 'WITH AN ANIMAL COMPANION ABILITY SLOTTED Increases your Magicka and Stamina recovery by 20%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'recovery-increase',
        type: 'stat_increase',
        description: 'Magicka and Stamina recovery increased by 20%',
        value: 20,
        percentage: true
      }
    ]
  },

  {
    id: 'advanced-species',
    name: 'Advanced Species',
    description: 'Increases your Critical Damage by 5% for each Animal Companion ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'critical-damage-increase',
        type: 'stat_increase',
        description: 'Critical Damage increased by 5% per Animal Companion ability slotted',
        value: 5,
        percentage: true
      }
    ]
  }
];

// GREEN BALANCE SKILL LINE
const greenBalanceSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'secluded-grove',
    name: 'Secluded Grove',
    description: 'Swell a healing forest at the target location, instantly healing the most injured friendly target for 2787 Health. The forest continues to heal you and your allies in the area for 927 Health every 1 second for 6 seconds.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 150
    },
    duration: 6,
    morphs: [
      {
        id: 'enchanted-forest',
        name: 'Enchanted Forest',
        description: 'Swell a healing forest at the target location, instantly healing the most injured friendly target for 2880 Health. The forest continues to heal you and your allies in the area for 958 Health every 1 second for 6 seconds. You generate 20 Ultimate if the initial heal is used on a friendly target under 50% Health.',
        changes: 'Generate Ultimate if the initial heal is used on a low health target.'
      },
      {
        id: 'healing-thicket',
        name: 'Healing Thicket',
        description: 'Swell a healing forest at the target location, instantly healing the most injured friendly target for 2880 Health. The forest continues to heal you and your allies in the area for 958 every 1 second for 6 seconds. The healing over time will continue to heal you or your allies for 4 seconds after leaving the forest.',
        changes: 'The healing over time will continue to heal you and your allies after leaving the area.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 2787,
      scalingFactor: 2.0
    },
    effects: [
      {
        id: 'smart-heal',
        type: 'other',
        description: 'Targets most injured friendly target first'
      },
      {
        id: 'area-heal',
        type: 'other',
        description: 'Heals allies in area over time',
        value: 927
      }
    ]
  },

  // Active abilities
  {
    id: 'fungal-growth',
    name: 'Fungal Growth',
    description: 'Seed a large area of mushrooms in front of you, healing you and your allies for 2613 Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    morphs: [
      {
        id: 'enchanted-growth',
        name: 'Enchanted Growth',
        description: 'Seed a large area of mushrooms in front of you, healing you and your allies for 2700 Health. Any target healed gains Minor Intellect and Minor Endurance, increasing their Magicka and Stamina Recovery by 15% for 20 seconds.',
        changes: 'Affected targets have increased Magicka and Stamina Recovery.'
      },
      {
        id: 'soothing-spores',
        name: 'Soothing Spores',
        description: 'Seed a large area of mushrooms in front of you, healing you and your allies for 2700 Health. Heals for 15% more on allies that are within 8 meters of you.',
        changes: 'Converts into a Stamina ability. Allies near you are healed for more.'
      }
    ],
    buffsApplied: ['minor_intellect', 'minor_endurance'],
    debuffsApplied: [],
    healing: {
      baseHealing: 2613,
      scalingFactor: 1.5
    },
    effects: [
      {
        id: 'area-heal',
        type: 'other',
        description: 'Heals all allies in front of you'
      },
      {
        id: 'proximity-bonus',
        type: 'other',
        description: '15% more healing for allies within 8 meters',
        value: 15,
        percentage: true
      }
    ]
  },

  {
    id: 'healing-seed',
    name: 'Healing Seed',
    description: 'Summon a field of flowers which blooms after 6 seconds, healing you and allies in the area for 3486 Health. An ally within the field can activate the Harvest synergy, healing for 3372 Health over 5 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    duration: 6,
    morphs: [
      {
        id: 'budding-seeds',
        name: 'Budding Seeds',
        description: 'Summon a field of flowers which blooms after 6 seconds, healing you and allies in the area for 3485 Health. While the field grows, you and allies are healed for 410 Health every 1 second. You can activate this ability again to cause it to instantly bloom. An ally within the field can activate the Harvest synergy, healing for 3372 Health over 5 seconds.',
        changes: 'The area now heals allies while it grows, and can be activated a second time to instantly trigger the delayed heal.'
      },
      {
        id: 'corrupting-pollen',
        name: 'Corrupting Pollen',
        description: 'Summon a field of flowers which blooms after 6 seconds, healing you and allies in the area for 3600 Health. Enemies who enter the field are afflicted with Major Defile and Minor Cowardice, reducing their healing received and damage shield strength by 12% and their Weapon and Spell Damage by 215. An ally within the field can activate the Harvest synergy, healing for 3372 Health over 5 seconds.',
        changes: 'Enemies in the field receive less healing and have reduced Weapon and Spell Damage.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_defile', 'minor_cowardice'],
    healing: {
      baseHealing: 3486,
      scalingFactor: 1.8
    },
    effects: [
      {
        id: 'delayed-heal',
        type: 'other',
        description: 'Heals after 6 seconds delay'
      },
      {
        id: 'synergy',
        type: 'other',
        description: 'Allies can activate Harvest synergy'
      },
      {
        id: 'instant-bloom',
        type: 'other',
        description: 'Can reactivate to instantly bloom'
      }
    ]
  },

  {
    id: 'living-vines',
    name: 'Living Vines',
    description: 'Grow vines to embrace you or the lowest health ally in front of you for 10 seconds. The vines heal the target for 695 Health each time they take damage. This effect can occur once every 1 second.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    duration: 10,
    morphs: [
      {
        id: 'leeching-vines',
        name: 'Leeching Vines',
        description: 'Grow vines to embrace you or the lowest health ally in front of you for 10 seconds. The vines heal the target for 718 Health each time they take damage. This effect can occur once every 1 second. The vines apply Minor Lifesteal to enemies that damage the target for 10 seconds, healing you and your allies for 600 Health every 1 second when damaging that enemy.',
        changes: 'Minor Lifesteal is applied to attackers.'
      },
      {
        id: 'living-trellis',
        name: 'Living Trellis',
        description: 'Grow vines to embrace you or the lowest health ally in front of you for 10 seconds. The vines heal the target for 718 Health each time they take damage. This effect can occur once every 1 second. When the vines expire, they heal the target for an additional 1742 Health.',
        changes: 'Heals when effect ends.'
      }
    ],
    buffsApplied: ['minor_lifesteal'],
    debuffsApplied: [],
    healing: {
      baseHealing: 695,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'damage-triggered-heal',
        type: 'other',
        description: 'Heals when target takes damage'
      },
      {
        id: 'smart-target',
        type: 'other',
        description: 'Targets lowest health ally in front of you'
      }
    ]
  },

  {
    id: 'lotus-flower',
    name: 'Lotus Flower',
    description: 'Embrace the lotus blessing, causing your Light Attacks to restore 1320 Health and your fully-charged Heavy Attacks to restore 3036 Health to you or a nearby ally for 20 seconds. While active you gain Major Prophecy and Savagery, increasing your Spell and Weapon Critical rating by 2629.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 20,
    morphs: [
      {
        id: 'green-lotus',
        name: 'Green Lotus',
        description: 'Embrace the lotus blessing, causing your Light Attacks to restore 1500 Health and your fully-charged Heavy Attacks to restore 3450 Health to you or 2 nearby allies for 20 seconds. While active you gain Major Prophecy and Savagery, increasing your Spell and Weapon Critical rating by 2629.',
        changes: 'Heals two additional targets and increases the healing caused.'
      },
      {
        id: 'lotus-blossom',
        name: 'Lotus Blossom',
        description: 'Embrace the lotus blessing, causing your Light Attacks to restore 1320 Health and your fully-charged Heavy Attacks to restore 3036 Health to you or a nearby ally for 1 minute. While active you gain Major Prophecy and Savagery, increasing your Spell and Weapon Critical rating by 2629.',
        changes: 'Significantly increases the duration.'
      }
    ],
    buffsApplied: ['major_prophecy', 'major_savagery'],
    debuffsApplied: [],
    healing: {
      baseHealing: 1320,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'attack-heal',
        type: 'other',
        description: 'Light/Heavy attacks heal nearby allies'
      },
      {
        id: 'heavy-attack-bonus',
        type: 'other',
        description: 'Heavy attacks heal for more',
        value: 3036
      }
    ]
  },

  {
    id: 'natures-grasp',
    name: 'Nature\'s Grasp',
    description: 'Launch a vine to swing yourself to an ally, healing them for 3480 Health over 10 seconds. You gain 3 Ultimate when this effect completes if you are in combat.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    range: 28,
    duration: 10,
    morphs: [
      {
        id: 'bursting-vines',
        name: 'Bursting Vines',
        description: 'Launch a vine to swing yourself to an ally, instantly healing them for 2700 Health. Gain 10 Ultimate when healing an ally under 60% Health while you are in combat. This effect can occur every 4 seconds.',
        changes: 'Travels faster, heals instantly, and restores more Ultimate.'
      },
      {
        id: 'natures-embrace',
        name: 'Nature\'s Embrace',
        description: 'Launch a vine to swing yourself to an ally, healing you and them for 3594 Health over 10 seconds. Gain 3 Ultimate when either of these effects complete while you are in combat.',
        changes: 'Heals both you and the ally.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 3480,
      scalingFactor: 1.5
    },
    effects: [
      {
        id: 'teleport',
        type: 'other',
        description: 'Teleports you to target ally'
      },
      {
        id: 'ultimate-generation',
        type: 'resource_restore',
        description: 'Generates Ultimate when effect completes',
        value: 3
      }
    ]
  }
];

// Green Balance Passives
const greenBalancePassives: Skill[] = [
  {
    id: 'accelerated-growth',
    name: 'Accelerated Growth',
    description: 'When you heal yourself or an ally under 40% Health with a Green Balance ability you gain Major Mending, increasing your healing done by 16% for 4 seconds.',
    type: 'passive',
    duration: 4,
    buffsApplied: ['major_mending'],
    debuffsApplied: [],
    effects: [
      {
        id: 'low-health-bonus',
        type: 'other',
        description: 'Major Mending when healing targets under 40% Health'
      }
    ]
  },

  {
    id: 'natures-gift',
    name: 'Nature\'s Gift',
    description: 'When you heal an ally with a Green Balance ability, you gain 277 Magicka or 277 Stamina, whichever resource pool is lower. This effect can occur once every 1 second.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resource-restore',
        type: 'resource_restore',
        description: 'Restore 277 of lower resource when healing allies',
        value: 277
      }
    ]
  },

  {
    id: 'emerald-moss',
    name: 'Emerald Moss',
    description: 'Increases your healing done with Green Balance abilities by 5% for each Green Balance ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-increase',
        type: 'stat_increase',
        description: 'Healing done increased by 5% per Green Balance ability slotted',
        value: 5,
        percentage: true
      }
    ]
  },

  {
    id: 'maturation',
    name: 'Maturation',
    description: 'When you activate a heal on yourself or an ally you grant the target Minor Toughness, increasing their Max Health by 10% for 20 seconds.',
    type: 'passive',
    duration: 20,
    buffsApplied: ['minor_toughness'],
    debuffsApplied: [],
    effects: []
  }
];

// WINTER'S EMBRACE SKILL LINE
const wintersEmbraceSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'sleet-storm',
    name: 'Sleet Storm',
    description: 'Twist a violent storm around you, dealing 1161 Frost Damage every 1 second for 8 seconds to enemies around you and reducing their Movement Speed by 40%. You and nearby allies gain Major Protection, reducing your damage taken by 10%.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 8,
    morphs: [
      {
        id: 'northern-storm',
        name: 'Northern Storm',
        description: 'Twist a violent storm around you, dealing 1199 Frost Damage every 1 second for 8 seconds to enemies around you and reducing their Movement Speed by 40%. As the storm holds, your damage done increases by 2% every 1 second for 12 seconds, up to 9 stacks max. You and nearby allies gain Major Protection, reducing your damage taken by 10%.',
        changes: 'Increases your damage done every second while active, and for a duration after.'
      },
      {
        id: 'permafrost',
        name: 'Permafrost',
        description: 'Twist a violent storm around you, dealing 158 Frost Damage every 1 second for 13 seconds to enemies around you and reducing their Movement Speed by 70% and applying the Chilled status effect. You and nearby allies gain Major Protection, reducing your damage taken by 10%.',
        changes: 'Increases the snare potency and applies the Chilled status effect to enemies hit, but at the expense of damage done. Increases the duration as the ability ranks up.'
      }
    ],
    buffsApplied: ['major_protection'],
    debuffsApplied: ['chilled'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.5,
      damageType: 'frost'
    },
    effects: [
      {
        id: 'movement-speed-reduction',
        type: 'crowd_control',
        description: 'Reduces enemy movement speed by 40-70%',
        value: 70,
        percentage: true
      },
      {
        id: 'damage-ramp',
        type: 'stat_increase',
        description: 'Damage increases by 2% per second, up to 9 stacks',
        value: 18,
        percentage: true
      }
    ]
  },

  // Active abilities
  {
    id: 'frost-cloak',
    name: 'Frost Cloak',
    description: 'Wrap a thick cloak of ice around you and your grouped allies. The ice grants Major Resolve, increasing your Physical and Spell Resistance by 5948 for 20 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 20,
    morphs: [
      {
        id: 'expansive-frost-cloak',
        name: 'Expansive Frost Cloak',
        description: 'Wrap a thick cloak of ice around you and your grouped allies. The ice grants Major Resolve, increasing your Physical and Spell Resistance by 5948 for 20 seconds.',
        changes: 'Increases the radius and reduces the cost.'
      },
      {
        id: 'ice-fortress',
        name: 'Ice Fortress',
        description: 'Wrap a thick cloak of ice around you and your grouped allies. The ice grants Major Resolve, increasing your Physical and Spell Resistance by 5948 for 30 seconds. You gain Minor Protection, reducing your damage taken by 5% for 30 seconds.',
        changes: 'Grants Minor Protection to you. Increases the duration as the ability ranks up.'
      }
    ],
    buffsApplied: ['major_resolve', 'minor_protection'],
    debuffsApplied: [],
    effects: [
      {
        id: 'group-buff',
        type: 'other',
        description: 'Affects you and grouped allies'
      }
    ]
  },

  {
    id: 'impaling-shards',
    name: 'Impaling Shards',
    description: 'Conjure icy shards around you to skewer enemies in the area, dealing 405 Frost Damage every 1 second for 12 seconds. Enemies hit are overcome with bitter cold, reducing their Movement Speed by 30% for 3 seconds. Damage done is based on your Max Health, and has a higher chance to apply the Chilled status effect.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    duration: 12,
    morphs: [
      {
        id: 'gripping-shards',
        name: 'Gripping Shards',
        description: 'Conjure icy shards around you to skewer enemies in the area, immobilizing them for 3 seconds and dealing 419 Frost Damage every 1 second for 12 seconds. Enemies hit are overcome with bitter cold, reducing their Movement Speed by 30% for 3 seconds. Damage done is based on your Max Health and has a higher chance to apply the Chilled status effect.',
        changes: 'Immobilizes enemies around you when cast and reduces the cost.'
      },
      {
        id: 'winters-revenge',
        name: 'Winter\'s Revenge',
        description: 'Conjure icy shards at the target location to skewer enemies in the area, dealing 294 Frost Damage every 1 second for 12 seconds. This damage increases by 30% if cast with a Destruction Staff equipped. Enemies hit are overcome with bitter cold, reducing their Movement Speed by 30% for 3 seconds. This ability has a higher chance to apply the Chilled status effect.',
        changes: 'Summons at targeted location instead of around you. Deals damage based on your offensive stats rather than Max Health.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize', 'chilled'],
    damage: {
      baseDamage: 405,
      scalingFactor: 1.0,
      damageType: 'frost'
    },
    effects: [
      {
        id: 'health-scaling',
        type: 'other',
        description: 'Damage scales with Max Health'
      },
      {
        id: 'chilled-chance',
        type: 'other',
        description: 'Higher chance to apply Chilled status effect'
      }
    ]
  },

  {
    id: 'arctic-wind',
    name: 'Arctic Wind',
    description: 'Envelop yourself in winter winds, instantly healing for 4958 Health and an additional 990 Health every 2 seconds over 10 seconds. This ability scales off your Max Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 10,
    morphs: [
      {
        id: 'arctic-blast',
        name: 'Arctic Blast',
        description: 'Envelop yourself in winter winds, instantly dealing 1799 Frost Damage to nearby enemies. If no enemies are hit, you heal for 2323 Health. The winds persist for 20 seconds and chill your foes to the bone, dealing 298 Frost Damage every 2 seconds, after 2 seconds. The damage has a higher chance to apply the Chilled status effect. Stuns enemies after the delay for 3 seconds.',
        changes: 'Damages enemies instead of healing yourself but heals if no enemies are damaged. Stuns enemies after a delay. Reduces the cost.'
      },
      {
        id: 'polar-wind',
        name: 'Polar Wind',
        description: 'Envelop yourself in winter winds, instantly healing for 4958 Health and healing for an additional 1365 Health every 2 seconds over 10 seconds. You also heal a nearby ally for 3305 Health. This ability scales off your Max Health.',
        changes: 'Increases the healing over time and now heals a nearby ally for a portion of the initial heal.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun', 'chilled'],
    damage: {
      baseDamage: 1799,
      scalingFactor: 1.0,
      damageType: 'frost'
    },
    healing: {
      baseHealing: 4958,
      scalingFactor: 2.0
    },
    effects: [
      {
        id: 'health-scaling',
        type: 'other',
        description: 'Scales off Max Health'
      },
      {
        id: 'conditional-effect',
        type: 'other',
        description: 'Damages enemies or heals if no enemies hit'
      }
    ]
  },

  {
    id: 'crystallized-shield',
    name: 'Crystallized Shield',
    description: 'Spin a shield of ice around you, absorbing up to 16528 damage from 3 projectiles. Each time you absorb a projectile you gain 2 Ultimate.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    morphs: [
      {
        id: 'crystallized-slab',
        name: 'Crystallized Slab',
        description: 'Spin a shield of ice around you, absorbing up to 24791 damage from 3 projectiles. Each time you absorb a projectile you launch an icy bolt back at the enemy, dealing 1199 Frost Damage and stunning them for 3 seconds.',
        changes: 'Greatly increases the shield strength. Absorbing projectiles launches an icy bolt back at the enemy, damaging and stunning them, but no longer restores Ultimate.'
      },
      {
        id: 'shimmering-shield',
        name: 'Shimmering Shield',
        description: 'Spin a shield of ice around you, absorbing up to 16527 damage from 3 projectiles. Each time you absorb a projectile you gain 2 Ultimate and gain Major Heroism for 6 seconds, granting you 3 Ultimate every 1.5 seconds.',
        changes: 'Absorbing projectiles grants you Major Heroism and reduces the cost as the ability ranks up.'
      }
    ],
    buffsApplied: ['major_heroism'],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 1199,
      scalingFactor: 1.0,
      damageType: 'frost'
    },
    effects: [
      {
        id: 'projectile-absorption',
        type: 'shield',
        description: 'Absorbs up to 3 projectiles',
        value: 16528
      },
      {
        id: 'reflect',
        type: 'other',
        description: 'Launches icy bolt back at attacker'
      },
      {
        id: 'ultimate-generation',
        type: 'resource_restore',
        description: 'Gain Ultimate when absorbing projectiles',
        value: 2
      }
    ]
  },

  {
    id: 'frozen-gate',
    name: 'Frozen Gate',
    description: 'Summon an ancient portal, which arms after 1.5 seconds and lasts for 15 seconds. When triggered the enemy is teleported to you if within range, immobilized for 3.5 seconds, and dealt 1742 Frost Damage. You can have up to 3 Frozen Gates active at a time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 15,
    morphs: [
      {
        id: 'frozen-device',
        name: 'Frozen Device',
        description: 'Summon an ancient portal, which arms after 1.5 seconds. When triggered the enemy is teleported to you if within range, immobilized for 3.5 seconds, dealt 1799 Frost Damage, and afflicted with Major Maim, reducing their damage done by 10% for 4.5 seconds. You can have up to 3 Frozen Devices active at a time.',
        changes: 'Teleported enemies have their damage done reduced.'
      },
      {
        id: 'frozen-retreat',
        name: 'Frozen Retreat',
        description: 'Summon an ancient portal, which arms after 1.5 seconds. When triggered the enemy is teleported to you if within range, immobilized for 3.5 seconds, and dealt 1799 Frost Damage. An ally in the portal can activate the Icy Escape synergy, teleporting them to you and granting them Major Expedition, increasing their Movement Speed by 30% for 8 seconds. You can have up to 3 Frozen Retreats active at a time.',
        changes: 'Grants allies in the area a synergy that teleports them to you and grants them increased Movement Speed.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: ['immobilize', 'major_maim'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.2,
      damageType: 'frost'
    },
    effects: [
      {
        id: 'teleport-trap',
        type: 'other',
        description: 'Teleports enemies to you when triggered'
      },
      {
        id: 'multiple-traps',
        type: 'other',
        description: 'Can have up to 3 active at once'
      },
      {
        id: 'synergy',
        type: 'other',
        description: 'Allies can activate Icy Escape synergy'
      }
    ]
  }
];

// Winter's Embrace Passives
const wintersEmbracePassives: Skill[] = [
  {
    id: 'glacial-presence',
    name: 'Glacial Presence',
    description: 'Increases your chance to apply the Chilled status effect by 250% and increases its damage by 105. The damage increasing effect scales off the higher of your Weapon or Spell Damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'chilled-chance',
        type: 'other',
        description: 'Chilled status effect chance increased by 250%',
        value: 250,
        percentage: true
      },
      {
        id: 'chilled-damage',
        type: 'stat_increase',
        description: 'Chilled damage increased by 105',
        value: 105
      }
    ]
  },

  {
    id: 'frozen-armor',
    name: 'Frozen Armor',
    description: 'Increases your Physical and Spell Resistance by 1240 for each Winter\'s Embrace ability slotted.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'resistance-increase',
        type: 'stat_increase',
        description: 'Physical/Spell Resistance +1240 per Winter\'s Embrace ability slotted',
        value: 1240
      }
    ]
  },

  {
    id: 'icy-aura',
    name: 'Icy Aura',
    description: 'WITH A WINTER\'S EMBRACE ABILITY SLOTTED When you take direct damage from an enemy in melee range, you apply a stack of Bite of Winter to them for 3 seconds, up to 5 stacks max. Attackers at max stacks are afflicted with Major Maim for 3 seconds, reducing their damage done by 10%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: ['major_maim'],
    effects: [
      {
        id: 'melee-counter',
        type: 'other',
        description: 'Apply Bite of Winter stacks to melee attackers'
      },
      {
        id: 'stack-effect',
        type: 'other',
        description: 'Major Maim at 5 stacks for 3 seconds'
      }
    ]
  },

  {
    id: 'piercing-cold',
    name: 'Piercing Cold',
    description: 'Increases the amount of damage you block by 8% and increases your Frost Damage by 15%.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'block-increase',
        type: 'other',
        description: 'Block mitigation increased by 8%',
        value: 8,
        percentage: true
      },
      {
        id: 'frost-damage-increase',
        type: 'stat_increase',
        description: 'Frost Damage increased by 15%',
        value: 15,
        percentage: true
      }
    ]
  }
];

// Export Warden Skills
export const wardenSkills = {
  animalCompanions: [...animalCompanionsSkills, ...animalCompanionsPassives],
  greenBalance: [...greenBalanceSkills, ...greenBalancePassives],
  wintersEmbrace: [...wintersEmbraceSkills, ...wintersEmbracePassives]
};

export default wardenSkills;

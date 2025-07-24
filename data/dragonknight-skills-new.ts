// Dragonknight Skills - The fire and earth master class
import { Skill } from './skills';

// Ardent Flame Skills
const ardentFlameSkills: Skill[] = [
  // Ultimate
  {
    id: 'dragonknight-standard',
    name: 'Dragonknight Standard',
    description: 'Call down a battle standard, dealing 870 Flame Damage every 1 second for 16 seconds to enemies and applying Major Defile to them, reducing their healing received and damage shield strength by 12%.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    duration: 16,
    morphs: [
      {
        id: 'shifting-standard',
        name: 'Shifting Standard',
        description: 'Increases the duration, and recasting the ability allows you to move the standard.',
        changes: 'Duration increased to 25 seconds, can be moved by recasting ability.'
      },
      {
        id: 'standard-of-might',
        name: 'Standard of Might',
        description: 'Standing in the standard increases your damage done and reduces damage taken.',
        changes: 'Standing in area increases damage done and reduces damage taken by 15%.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_defile'],
    damage: {
      baseDamage: 870,
      scalingFactor: 0.8,
      damageType: 'fire',
      isDoT: true,
      dotTicks: 16
    },
    effects: [
      {
        id: 'shackle-synergy',
        type: 'other',
        description: 'Ally synergy deals 3375 Flame Damage and immobilizes enemies for 5 seconds'
      },
      {
        id: 'area-debuff',
        type: 'other',
        description: 'Area applies Major Defile, reducing healing and shield strength by 12%',
        duration: 16
      }
    ]
  },
  // Active Skills
  {
    id: 'lava-whip',
    name: 'Lava Whip',
    description: 'Lash an enemy with flame, dealing 2323 Flame Damage. If you strike an enemy that is immobilized or stunned, you set them Off Balance.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 7,
    morphs: [
      {
        id: 'flame-lash',
        name: 'Flame Lash',
        description: 'Targeting Off Balance or immobilized enemies grants you a more powerful attack which deals increased damage, costs half as much, and heals you.',
        changes: 'Power Lash morph: 2760 damage, half cost, heals for 2760 Health when targeting Off Balance/immobilized enemies.'
      },
      {
        id: 'molten-whip',
        name: 'Molten Whip',
        description: 'Splits the cost between Magicka and Stamina. While slotted, your other Ardent Flame abilities increase the damage of your next Molten Whip cast and Weapon and Spell Damage.',
        changes: 'Hybrid cost. Other Ardent Flame abilities grant Seething Fury (up to 3 stacks): +20% damage and +100 Weapon/Spell Damage per stack.'
      }
    ],
    buffsApplied: ['seething_fury'],
    debuffsApplied: ['off_balance'],
    damage: {
      baseDamage: 2323,
      scalingFactor: 2.0,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'stun-immobilize-bonus',
        type: 'other',
        description: 'Sets stunned or immobilized enemies Off Balance'
      }
    ]
  },
  {
    id: 'searing-strike',
    name: 'Searing Strike',
    description: 'Slash an enemy with flame, dealing 1161 Flame Damage and an additional 3470 Flame Damage over 20 seconds. Enemies hit by the initial hit are afflicted with the Burning status effect.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 7,
    duration: 20,
    morphs: [
      {
        id: 'burning-embers',
        name: 'Burning Embers',
        description: 'Heals you for a percentage of damage done.',
        changes: 'Heals for 100% of damage dealt by this ability.'
      },
      {
        id: 'venomous-claw',
        name: 'Venomous Claw',
        description: 'Converts into a Stamina ability and deals Poison Damage that applies the Poisoned status effect. The damage over time increases the longer the effect lasts.',
        changes: 'Poison damage, Stamina cost, applies Poisoned status, damage increases 12% every 2 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['burning', 'poisoned'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'fire'
    },
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'dot-damage',
        type: 'other',
        description: 'Deals 3470 damage over 20 seconds',
        duration: 20
      },
      {
        id: 'burning-status',
        type: 'other',
        description: 'Applies Burning status effect on initial hit'
      }
    ]
  },
  {
    id: 'fiery-breath',
    name: 'Fiery Breath',
    description: 'Exhale a flaming blast to enemies in front of you, dealing 1742 Flame Damage and an additional 2900 Flame Damage over 20 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    radius: 8,
    duration: 20,
    morphs: [
      {
        id: 'engulfing-flames',
        name: 'Engulfing Flames',
        description: 'Affected enemies take more damage from all Flame Damage attacks.',
        changes: 'Enemies take up to 6% more damage from Flame attacks based on your stats.'
      },
      {
        id: 'noxious-breath',
        name: 'Noxious Breath',
        description: 'Converts into a Stamina ability and deals Poison Damage. The initial hit applies the Poisoned status effect and Major Breach to enemies.',
        changes: 'Poison damage, Stamina cost, applies Poisoned status and Major Breach (-5948 resistances).'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['flame_vulnerability', 'poisoned', 'major_breach'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'cone-attack',
        type: 'other',
        description: 'Cone-shaped area attack in front of caster'
      },
      {
        id: 'dot-damage',
        type: 'other',
        description: 'Deals additional damage over 20 seconds',
        duration: 20
      }
    ]
  },
  {
    id: 'fiery-grip',
    name: 'Fiery Grip',
    description: 'Launch a fiery chain to grasp and pull an enemy to you, dealing 1392 Flame Damage and taunting them for 15 seconds if they are not already taunted. Hitting the target grants you Major Expedition, increasing your Movement Speed by 30% for 4 seconds.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 3780
    },
    range: 22,
    morphs: [
      {
        id: 'chains-of-devastation',
        name: 'Chains of Devastation',
        description: 'Pulls you to the enemy instead and no longer attempts to taunt. Grants Major Berserk after casting.',
        changes: 'Pulls caster to enemy, grants Major Berserk (+10% damage) for 4 seconds, no taunt.'
      },
      {
        id: 'unrelenting-grip',
        name: 'Unrelenting Grip',
        description: 'If the target cannot be pulled, you are refunded the Magicka cost.',
        changes: 'Magicka cost, refunds 100% cost if target cannot be pulled.'
      }
    ],
    buffsApplied: ['major_expedition', 'major_berserk'],
    debuffsApplied: ['taunt'],
    damage: {
      baseDamage: 1392,
      scalingFactor: 1.2,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'pull-enemy',
        type: 'other',
        description: 'Pulls enemy to caster (or caster to enemy with morph)'
      },
      {
        id: 'cannot-dodge-reflect',
        type: 'other',
        description: 'Attack cannot be dodged or reflected'
      }
    ]
  },
  {
    id: 'inferno',
    name: 'Inferno',
    description: 'Activate an aura of flames which launches a fireball at the nearest enemy every 5 seconds, dealing 1742 Flame Damage. While slotted on either bar, you gain Major Prophecy and Savagery, increasing your Spell and Weapon Critical rating by 2629.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 60,
    morphs: [
      {
        id: 'cauterize',
        name: 'Cauterize',
        description: 'Now heals allies instead of damaging enemies. Increases radius, target count, and tick frequency.',
        changes: 'Heals up to 4 allies for 1199 Health every 3 seconds instead of damaging enemies.'
      },
      {
        id: 'flames-of-oblivion',
        name: 'Flames of Oblivion',
        description: 'Now launches three fireballs instead of one.',
        changes: 'Launches 3 fireballs at different enemies every 5 seconds for 1799 damage each.'
      }
    ],
    buffsApplied: ['major_prophecy', 'major_savagery'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'fire'
    },
    healing: {
      baseHealing: 1199,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'passive-aura',
        type: 'other',
        description: 'Aura automatically attacks/heals while active, grants critical bonuses while slotted',
        duration: 60
      }
    ]
  }
];

// Draconic Power Skills
const draconicPowerSkills: Skill[] = [
  // Ultimate
  {
    id: 'dragon-leap',
    name: 'Dragon Leap',
    description: 'Launch yourself at an enemy, dealing 4241 Physical Damage to all enemies in the area, knocking them back 4 meters, and stunning them for 2 seconds.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 125
    },
    range: 22,
    radius: 8,
    duration: 2,
    morphs: [
      {
        id: 'ferocious-leap',
        name: 'Ferocious Leap',
        description: 'Deals Flame Damage. After leaping you gain a damage shield.',
        changes: 'Deals Flame damage, grants 16528 damage shield for 6 seconds after landing.'
      },
      {
        id: 'take-flight',
        name: 'Take Flight',
        description: 'Reduces the cost and increases the damage and range.',
        changes: 'Reduced cost, increased damage to 5037, increased range.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 4241,
      scalingFactor: 4.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'leap-attack',
        type: 'other',
        description: 'Gap closer that knocks back and stuns enemies in area'
      },
      {
        id: 'damage-shield',
        type: 'shield',
        description: 'Ferocious Leap morph grants damage shield scaling with Max Health',
        value: 16528,
        duration: 6
      }
    ]
  },
  // Active Skills
  {
    id: 'spiked-armor',
    name: 'Spiked Armor',
    description: 'Release your inner Dragon to gain Major Resolve, increasing your Physical and Spell Resistance by 5948 for 20 seconds. While active, the armor returns 1 Flame Damage to any enemy that uses a direct damage attack against you in melee range.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 20,
    morphs: [
      {
        id: 'hardened-armor',
        name: 'Hardened Armor',
        description: 'You gain a damage shield after casting.',
        changes: 'Grants 5121 damage shield for 6 seconds, scaling with Max Health.'
      },
      {
        id: 'volatile-armor',
        name: 'Volatile Armor',
        description: 'Enemies near you take damage over time when you activate the ability.',
        changes: 'Deals 11 Flame damage per second to nearby enemies for 20 seconds when activated.'
      }
    ],
    buffsApplied: ['major_resolve'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1,
      scalingFactor: 0.01,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'retaliation',
        type: 'other',
        description: 'Returns damage to attackers in melee range, scales with resistances',
        duration: 20
      }
    ]
  },
  {
    id: 'dark-talons',
    name: 'Dark Talons',
    description: 'Call forth talons from the ground, dealing 1742 Flame Damage to enemies near you and immobilizing them for 4 seconds. An ally near the talons can activate the Ignite synergy, dealing 2812 Flame Damage to all enemies held within them.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    radius: 6,
    duration: 4,
    morphs: [
      {
        id: 'burning-talons',
        name: 'Burning Talons',
        description: 'Deals additional damage over time.',
        changes: 'Deals 1799 initial damage plus 1635 damage over 5 seconds.'
      },
      {
        id: 'choking-talons',
        name: 'Choking Talons',
        description: 'Reduces the cost and affected enemies deal less damage.',
        changes: 'Reduced cost, applies Minor Maim (-5% damage) for 10 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize', 'minor_maim'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'area-immobilize',
        type: 'crowd_control',
        description: 'Area effect that immobilizes enemies around caster',
        duration: 4
      },
      {
        id: 'ignite-synergy',
        type: 'other',
        description: 'Ally synergy deals 2812 Flame damage to immobilized enemies'
      }
    ]
  },
  {
    id: 'dragon-blood',
    name: 'Dragon Blood',
    description: 'Draw on your draconic blood to heal for 33% of your missing Health. You also gain Major Fortitude, increasing your Health Recovery by 30% for 20 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 20,
    morphs: [
      {
        id: 'coagulating-blood',
        name: 'Coagulating Blood',
        description: 'Now heals based on your offensive stats rather than Health and increases the amount of healing based on your missing Health.',
        changes: 'Heals for 2999 base, up to 50% more based on missing Health, scales with offensive stats.'
      },
      {
        id: 'green-dragon-blood',
        name: 'Green Dragon Blood',
        description: 'You also gain Major Endurance, Minor Vitality, and additional healing over time.',
        changes: 'Adds Major Endurance, Minor Vitality, and 511 healing per second for 5 seconds.'
      }
    ],
    buffsApplied: ['major_fortitude', 'major_endurance', 'minor_vitality'],
    debuffsApplied: [],
    healing: {
      baseHealing: 2999,
      scalingFactor: 2.5
    },
    effects: [
      {
        id: 'missing-health-heal',
        type: 'other',
        description: 'Heals for percentage of missing Health (base morph)'
      },
      {
        id: 'heal-over-time',
        type: 'other',
        description: 'Green Dragon Blood morph adds healing over time',
        duration: 5
      }
    ]
  },
  {
    id: 'protective-scale',
    name: 'Protective Scale',
    description: 'Flex your scales, reducing your damage taken from projectiles by 50% for 6 seconds.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 4050
    },
    duration: 6,
    morphs: [
      {
        id: 'dragon-fire-scale',
        name: 'Dragon Fire Scale',
        description: 'Incoming projectiles cause you to deal Flame Damage back to the attacker.',
        changes: 'Retaliates with 1799 Flame damage when hit by projectiles (once per 0.5 seconds).'
      },
      {
        id: 'protective-plate',
        name: 'Protective Plate',
        description: 'Gain immunity to snares and immobilizations. Cost reduces as ability ranks up.',
        changes: 'Grants immunity to snares and immobilizations for 4 seconds, reduced cost.'
      }
    ],
    buffsApplied: ['projectile_protection'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1799,
      scalingFactor: 1.5,
      damageType: 'fire'
    },
    effects: [
      {
        id: 'projectile-mitigation',
        type: 'other',
        description: 'Reduces projectile damage by 50%',
        duration: 6
      },
      {
        id: 'immunity-effects',
        type: 'other',
        description: 'Protective Plate morph grants snare/immobilize immunity',
        duration: 4
      }
    ]
  },
  {
    id: 'inhale',
    name: 'Inhale',
    description: 'Channel draconic energy to suck in the air around you, dealing 870 Flame Damage to nearby enemies and healing you for 100% of the damage caused. After 2.5 seconds, you exhale fire, dealing 1742 Flame Damage to nearby enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    radius: 8,
    duration: 2.5,
    morphs: [
      {
        id: 'deep-breath',
        name: 'Deep Breath',
        description: 'Initial hit interrupts enemies that are casting. Final explosion damage increased.',
        changes: 'Interrupts casting enemies, sets them Off Balance, stuns for 2s. Final damage increased to 2249.'
      },
      {
        id: 'draw-essence',
        name: 'Draw Essence',
        description: 'Initial hit heals for more. Final explosion refunds Magicka for each enemy struck.',
        changes: 'Heals for 150% of damage. Final explosion restores 10% ability cost as Magicka per enemy hit.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['off_balance', 'stun'],
    damage: {
      baseDamage: 870,
      scalingFactor: 0.75,
      damageType: 'fire'
    },
    healing: {
      baseHealing: 870,
      scalingFactor: 0.75
    },
    effects: [
      {
        id: 'channeled-attack',
        type: 'other',
        description: 'Channels for 2.5 seconds, then explodes for final damage',
        duration: 2.5
      },
      {
        id: 'interrupt-effect',
        type: 'other',
        description: 'Deep Breath morph interrupts and stuns casting enemies'
      }
    ]
  }
];

// Earthen Heart Skills
const earthenHeartSkills: Skill[] = [
  // Ultimate
  {
    id: 'magma-armor',
    name: 'Magma Armor',
    description: 'Ignite the molten lava in your veins, limiting incoming damage to 3% of your Max Health and dealing 336 Flame Damage to nearby enemies each second for 10 seconds. While active, you cannot generate Ultimate.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 10,
    radius: 5,
    morphs: [
      {
        id: 'corrosive-armor',
        name: 'Corrosive Armor',
        description: 'Deals Poison Damage. While active, your direct attacks ignore Physical and Spell Resistance.',
        changes: 'Poison damage, direct attacks ignore all resistances.'
      },
      {
        id: 'magma-shell',
        name: 'Magma Shell',
        description: 'When activated nearby allies gain a powerful damage shield.',
        changes: 'Grants allies damage shield for 100% of their Max Health for 10 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 336,
      scalingFactor: 0.3,
      damageType: 'fire',
      isDoT: true,
      dotTicks: 10
    },
    effects: [
      {
        id: 'damage-cap',
        type: 'other',
        description: 'Limits incoming damage to 3% of Max Health per hit',
        duration: 10
      },
      {
        id: 'resistance-ignore',
        type: 'other',
        description: 'Corrosive Armor ignores enemy resistances'
      },
      {
        id: 'ally-shield',
        type: 'shield',
        description: 'Magma Shell grants massive shields to allies',
        duration: 10
      }
    ]
  },
  // Active Skills
  {
    id: 'stonefist',
    name: 'Stonefist',
    description: 'Crush the earth beneath you, dealing 2323 Physical Damage to all enemies within 6 meters of you. Debris ripped from the ground is held around you for 10 seconds. Activating the ability again allows you to launch part of the debris at an enemy, dealing 2323 Physical Damage, up to 3 times. The final cast stuns enemies hit for 2.5 seconds.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2970
    },
    radius: 6,
    range: 28,
    duration: 10,
    morphs: [
      {
        id: 'obsidian-shard',
        name: 'Obsidian Shard',
        description: 'Converts to a Magicka ability that now heals you or two allies after dealing damage. Deals significantly less damage but no longer requires charges to cast.',
        changes: 'Magicka cost, 448 Flame damage, heals caster and 2 allies for 3240 Health, no charges needed.'
      },
      {
        id: 'stone-giant',
        name: 'Stone Giant',
        description: 'Enemies hit are affected with Stagger, causing them to take bonus damage from all attacks.',
        changes: 'Each hit applies Stagger, increasing damage taken by 65 per stack for 5 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun', 'stagger'],
    damage: {
      baseDamage: 2323,
      scalingFactor: 2.0,
      damageType: 'physical'
    },
    healing: {
      baseHealing: 3240,
      scalingFactor: 2.8
    },
    effects: [
      {
        id: 'debris-system',
        type: 'other',
        description: 'Initial cast creates debris for 3 ranged attacks over 10 seconds',
        duration: 10
      },
      {
        id: 'final-stun',
        type: 'crowd_control',
        description: 'Third debris cast stuns for 2.5 seconds',
        duration: 2.5
      }
    ]
  },
  {
    id: 'molten-weapons',
    name: 'Molten Weapons',
    description: 'Charge you and your grouped allies\' weapons with volcanic power to gain Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20% for 30 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 30,
    morphs: [
      {
        id: 'igneous-weapons',
        name: 'Igneous Weapons',
        description: 'Increases the duration and increases the radius.',
        changes: 'Duration increased to 60 seconds, larger radius.'
      },
      {
        id: 'molten-armaments',
        name: 'Molten Armaments',
        description: 'You also gain Empower, and reduces the cost as the ability ranks up.',
        changes: 'Grants Empower (+70% heavy attack damage vs monsters), reduced cost.'
      }
    ],
    buffsApplied: ['major_brutality', 'major_sorcery', 'empower'],
    debuffsApplied: [],
    effects: [
      {
        id: 'group-buff',
        type: 'other',
        description: 'Affects all grouped allies with weapon damage buffs',
        duration: 30
      }
    ]
  },
  {
    id: 'obsidian-shield',
    name: 'Obsidian Shield',
    description: 'Call the earth to your defense, granting a damage shield for you and nearby allies that absorbs 1321 damage. This portion of the ability scales off your Max Health. You also gain Major Mending, increasing your healing done by 16% for 2.5 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    radius: 15,
    duration: 6,
    morphs: [
      {
        id: 'fragmented-shield',
        name: 'Fragmented Shield',
        description: 'Increases duration of Major Mending.',
        changes: 'Major Mending duration increased to 6.7 seconds, shield absorbs 1365 damage.'
      },
      {
        id: 'igneous-shield',
        name: 'Igneous Shield',
        description: 'Increased shield strength on self.',
        changes: 'Caster shield absorbs 3414 damage, allies absorb 1365 damage.'
      }
    ],
    buffsApplied: ['major_mending'],
    debuffsApplied: [],
    effects: [
      {
        id: 'group-shield',
        type: 'shield',
        description: 'Grants damage shields to caster and nearby allies',
        value: 1321,
        duration: 6
      }
    ]
  },
  {
    id: 'petrify',
    name: 'Petrify',
    description: 'Encase an enemy in molten rock, stunning them for 2.5 seconds. When the stun ends, they take 1161 Flame Damage. This stun cannot be blocked or dodged.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    range: 28,
    duration: 2.5,
    morphs: [
      {
        id: 'fossilize',
        name: 'Fossilize',
        description: 'Immobilizes the enemy after the stun ends.',
        changes: 'When stun ends, deals 1199 damage and immobilizes for 3 seconds.'
      },
      {
        id: 'shattering-rocks',
        name: 'Shattering Rocks',
        description: 'When the stun ends, you are also healed.',
        changes: 'When stun ends, deals 1199 damage and heals caster for 2323 Health.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun', 'immobilize'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'fire'
    },
    healing: {
      baseHealing: 2323,
      scalingFactor: 2.0
    },
    effects: [
      {
        id: 'unblockable-stun',
        type: 'crowd_control',
        description: 'Stun that cannot be blocked or dodged',
        duration: 2.5
      },
      {
        id: 'delayed-damage',
        type: 'other',
        description: 'Damage occurs when stun effect ends'
      }
    ]
  },
  {
    id: 'ash-cloud',
    name: 'Ash Cloud',
    description: 'Summon a scorching cloud of ash at the target location for 15 seconds, reducing enemy Movement Speed by 70% and healing you and your allies for 434 Health every 1 second.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    range: 28,
    radius: 8,
    duration: 15,
    morphs: [
      {
        id: 'cinder-storm',
        name: 'Cinder Storm',
        description: 'Heals for significantly more.',
        changes: 'Increases healing to 674 Health per second.'
      },
      {
        id: 'eruption',
        name: 'Eruption',
        description: 'Damages instead of healing. Deals some damage instantly and reduces the cost.',
        changes: 'Deals 1799 instant damage, 319 damage per second, reduced cost. No healing.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['snare'],
    damage: {
      baseDamage: 1799,
      scalingFactor: 1.5,
      damageType: 'fire'
    },
    healing: {
      baseHealing: 434,
      scalingFactor: 0.4,
      isHoT: true,
      hotTicks: 15
    },
    effects: [
      {
        id: 'area-effect',
        type: 'other',
        description: 'Ground-targeted area that slows enemies and heals/damages over time',
        duration: 15
      },
      {
        id: 'movement-debuff',
        type: 'other',
        description: 'Reduces enemy movement speed by 70%',
        duration: 15
      }
    ]
  }
];

// Export Dragonknight Skills
export const dragonknightSkills = {
  ardentFlame: ardentFlameSkills,
  draconicPower: draconicPowerSkills,
  earthenHeart: earthenHeartSkills
};

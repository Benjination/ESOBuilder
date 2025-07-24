// Nightblade Skills - The stealth and assassination class
import { Skill } from './skills';

// ASSASSINATION SKILL LINE
const assassinationSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'death-stroke',
    name: 'Death Stroke',
    description: 'Ravage an enemy with a swift strike, dealing 3716 Magic Damage and causing them to take 20% more damage from your attacks for 8 seconds.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 120
    },
    duration: 8,
    morphs: [
      {
        id: 'incapacitating-strike',
        name: 'Incapacitating Strike',
        description: 'Ravage an enemy with a swift strike, dealing 3840 Disease Damage and causing them to take 20% more damage from your attacks for 8 seconds. If cast with 120 or more Ultimate, you instead deal 4223 Disease Damage, stun the enemy for 3 seconds, and increase the duration of the damage taken effect to 12 seconds.',
        changes: 'Deals Disease Damage. Improves the ability significantly if cast with more Ultimate.'
      },
      {
        id: 'soul-harvest',
        name: 'Soul Harvest',
        description: 'Ravage an enemy with a spinning attack, dealing 3718 Magic Damage and increasing your damage against them by 20% for 8 seconds. Also afflicts the enemy with Major Defile, reducing their healing received and damage shield strength by 12%. While slotted on either bar, any time you kill an enemy you gain 10 Ultimate.',
        changes: 'Also afflicts the enemy with Major Defile. While slotted on either bar, gain Ultimate whenever you kill an enemy.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_defile', 'stun'],
    damage: {
      baseDamage: 3716,
      scalingFactor: 3.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'damage-taken-increase',
        type: 'other',
        description: 'Target takes 20% more damage from your attacks for 8 seconds'
      }
    ]
  },

  // Active abilities
  {
    id: 'veiled-strike',
    name: 'Veiled Strike',
    description: 'Slash an enemy, dealing 2323 Magic Damage. If you strike an enemy from their flank you set them Off Balance.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    morphs: [
      {
        id: 'concealed-weapon',
        name: 'Concealed Weapon',
        description: 'Slash an enemy, dealing 2556 Magic Damage. If you strike an enemy from their flank you set them Off Balance. When you leave Sneak or invisibility while in combat, increase your damage done with this ability by 10% for 15 seconds. While slotted on either bar, you gain Minor Expedition, increasing your Movement Speed by 15%.',
        changes: 'Deals increased damage, which furthers when leaving Sneak or invisibility. While slotted you gain Minor Expedition.'
      },
      {
        id: 'surprise-attack',
        name: 'Surprise Attack',
        description: 'Slash an enemy, dealing 2399 Physical Damage and applying the Sundered status effect. If you strike an enemy from their flank you set them Off Balance. This attack will also be guaranteed to be a Critical Strike, up to once every 3 seconds.',
        changes: 'Converts to a Stamina ability and deals Physical Damage. Always applies the Sundered status effect and deals guaranteed critical damage when flanking an enemy.'
      }
    ],
    buffsApplied: ['minor_expedition'],
    debuffsApplied: ['off_balance', 'sundered'],
    damage: {
      baseDamage: 2323,
      scalingFactor: 2.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'flank-bonus',
        type: 'other',
        description: 'Sets enemy Off Balance when struck from flank'
      }
    ]
  },

  {
    id: 'teleport-strike',
    name: 'Teleport Strike',
    description: 'Flash through the shadows and ambush an enemy, dealing 1602 Magic Damage and afflicting them with Minor Vulnerability for 10 seconds, increasing their damage taken by 5%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3510
    },
    range: 22,
    duration: 10,
    morphs: [
      {
        id: 'ambush',
        name: 'Ambush',
        description: 'Flash through the shadows and ambush an enemy, dealing 1655 Physical Damage and afflicting them with Minor Vulnerability for 10 seconds, increasing their damage taken by 5%. Also grants you Empower and Minor Berserk for 10 seconds, increasing the damage of your Heavy Attacks against monsters by 70% and your damage done by 5%.',
        changes: 'Converts to a Stamina ability and deals Physical Damage. Also grants you Empower and Minor Berserk.'
      },
      {
        id: 'lotus-fan',
        name: 'Lotus Fan',
        description: 'Flash through the shadows and ambush an enemy while unleashing a fan of knives, dealing 1603 Magic Damage to them and enemies around you. All enemies hit take an additional 2050 Magic Damage over 5 seconds and are afflicted with Minor Vulnerability for 10 seconds, increasing their damage taken by 5%.',
        changes: 'Now deals damage in an area around you, and deals additional damage over time to enemies hit.'
      }
    ],
    buffsApplied: ['empower', 'minor_berserk'],
    debuffsApplied: ['minor_vulnerability'],
    damage: {
      baseDamage: 1602,
      scalingFactor: 1.4,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'teleport-attack',
        type: 'other',
        description: 'Teleports to target before attacking'
      }
    ]
  },

  {
    id: 'assassins-blade',
    name: 'Assassin\'s Blade',
    description: 'Thrust a magic blade with lethal precision to stab an enemy, dealing 1161 Magic Damage. Deals 300% more damage to enemies below 25% Health.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2430
    },
    morphs: [
      {
        id: 'impale',
        name: 'Impale',
        description: 'Throw a magic blade with lethal precision to strike an enemy, dealing 1161 Magic Damage. Deals 330% more damage to enemies below 25% Health.',
        changes: 'Allows you to use the ability at range and increases the execute multiplier.'
      },
      {
        id: 'killers-blade',
        name: 'Killer\'s Blade',
        description: 'Thrust a caustic blade with lethal precision to stab an enemy, dealing 1161 Disease Damage. Deals up to 400% more damage to enemies with less than 50% Health. Heals you for 2399 if the enemy dies within 2 seconds of being struck.',
        changes: 'Converts into a Stamina ability, deals Disease Damage, and now scales linearly based on missing Health rather than a flat value. Also heals you if the target dies within two seconds of use.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 2399,
      scalingFactor: 2.0
    },
    effects: [
      {
        id: 'execute-bonus',
        type: 'other',
        description: '300% more damage to enemies below 25% Health'
      }
    ]
  },

  {
    id: 'mark-target',
    name: 'Mark Target',
    description: 'Expose an enemy\'s weaknesses to afflict them with Major Breach, reducing their Physical Resistance and Spell Resistance by 5948 for 20 seconds. When a marked enemy dies, you heal to full Health. You can only have one Mark Target active at a time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    duration: 20,
    morphs: [
      {
        id: 'piercing-mark',
        name: 'Piercing Mark',
        description: 'Expose an enemy\'s weaknesses to afflict them with Major Breach, reducing their Physical Resistance and Spell Resistance by 5948 for 1 minute. You can detect marked enemies even if they use stealth or invisibility for 3 seconds. When a marked enemy dies, you heal to full Health. You can only have one Piercing Mark active at a time.',
        changes: 'Ability has an increased duration, and you can see the target if they use stealth or invisibility.'
      },
      {
        id: 'reapers-mark',
        name: 'Reaper\'s Mark',
        description: 'Expose an enemy\'s weaknesses to afflict them with Major Breach, reducing their Physical Resistance and Spell Resistance by 5948 for 20 seconds. When a marked enemy dies, you heal to full Health and gain Major Berserk, increasing your damage done by 10% for 10 seconds. You can only have one Reaper\'s Mark active at a time.',
        changes: 'If the marked enemy dies, you gain Major Berserk, increasing your damage done.'
      }
    ],
    buffsApplied: ['major_berserk'],
    debuffsApplied: ['major_breach'],
    effects: [
      {
        id: 'mark-tracking',
        type: 'other',
        description: 'Can only have one mark active at a time'
      },
      {
        id: 'death-heal',
        type: 'other',
        description: 'Heal to full Health when marked enemy dies'
      }
    ]
  },

  {
    id: 'grim-focus',
    name: 'Grim Focus',
    description: 'When slotted on either bar, your Light and Heavy Attacks generate a stack of Grim Focus, increasing your Weapon and Spell Damage by 30, up to 10 times. Fully-charged Heavy Attacks grant two stacks. When at 5 or more stacks, you can consume 5 stacks to fire a spectral arrow to deal 4182 Magic Damage and heal for 33% of the damage dealt, if you are in melee range.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 0
    },
    morphs: [
      {
        id: 'merciless-resolve',
        name: 'Merciless Resolve',
        description: 'When slotted on either bar, your Light and Heavy Attacks generate a stack of Merciless Resolve, increasing your Weapon and Spell Damage by 30 up to 10 times. Fully-charged Heavy Attacks grant two stacks. When at 5 or more stacks, you can consume 5 stacks to fire a spectral arrow to deal 4752 Magic Damage and heal for 50% of the damage dealt, if you are in melee range.',
        changes: 'Increases the damage and healing of the spectral arrow.'
      },
      {
        id: 'relentless-focus',
        name: 'Relentless Focus',
        description: 'When slotted on either bar, your Light and Heavy Attacks generate a stack of Relentless Focus, increasing your Weapon and Spell Damage by 40, up to 10 times. Fully-charged Heavy Attacks grant two stacks. When at 5 or more stacks, you can consume 5 stacks to fire a spectral arrow to deal 4183 Disease Damage and heal for 33% of the damage dealt, if you are in melee range.',
        changes: 'Converts into a Stamina ability and deals Disease Damage. Increases the amount of Weapon and Spell Damage each stack grants, and reduces the cost.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 4182,
      scalingFactor: 3.8,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 1380,
      scalingFactor: 1.25
    },
    effects: [
      {
        id: 'stacking-passive',
        type: 'other',
        description: 'Light/Heavy attacks generate stacks, +30 Weapon/Spell Damage per stack (max 10)'
      },
      {
        id: 'spectral-arrow',
        type: 'other',
        description: 'Consume 5 stacks to fire spectral arrow (melee range only)'
      }
    ]
  }
];

// Assassination Passive Skills
const assassinationPassives: Skill[] = [
  {
    id: 'master-assassin',
    name: 'Master Assassin',
    description: 'Increases your Critical Chance rating against enemies you are flanking by 1448, increasing your chance to critically strike by 6.6%.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'flank-crit-bonus',
        type: 'other',
        description: '+1448 Critical Chance rating against flanked enemies (+6.6% crit chance)'
      }
    ]
  },

  {
    id: 'executioner',
    name: 'Executioner',
    description: 'When an enemy dies within 2 seconds of being damaged by you, you restore 1000 Magicka and Stamina.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'kill-resource-restore',
        type: 'other',
        description: 'Restore 1000 Magicka and Stamina when enemy dies within 2 seconds of your damage'
      }
    ]
  },

  {
    id: 'pressure-points',
    name: 'Pressure Points',
    description: 'Increases your Critical Chance rating by 548 for each Assassination ability slotted, increasing your chance to critically strike by 2.5% per ability.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'crit-per-slot',
        type: 'other',
        description: '+548 Critical Chance rating per Assassination ability slotted (+2.5% crit chance per ability)'
      }
    ]
  },

  {
    id: 'hemorrhage',
    name: 'Hemorrhage',
    description: 'WITH AN ASSASSINATION ABILITY SLOTTED Increases your Critical Damage by 10%. Dealing Critical Damage grants you and your group Minor Savagery, increasing your Weapon Critical rating by 1314 for 20 seconds.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: ['minor_savagery'],
    debuffsApplied: [],
    effects: [
      {
        id: 'crit-damage-bonus',
        type: 'other',
        description: '+10% Critical Damage with Assassination ability slotted'
      },
      {
        id: 'group-minor-savagery',
        type: 'other',
        description: 'Grants group Minor Savagery for 20 seconds when dealing critical damage'
      }
    ]
  }
];

// SHADOW SKILL LINE
const shadowSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'consuming-darkness',
    name: 'Consuming Darkness',
    description: 'Conjure a ring of shadow, reducing the Movement Speed of enemies by 70% and granting you and your allies Major Protection, reducing your damage taken by 10%. Allies in the area can activate the Hidden Refresh synergy, granting them invisibility, increasing their Movement Speed by 70%, and healing them for 9110 Health over 4 seconds.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 150
    },
    duration: 13,
    radius: 8,
    morphs: [
      {
        id: 'bolstering-darkness',
        name: 'Bolstering Darkness',
        description: 'Conjure a ring of shadow, reducing the Movement Speed of enemies by 70% and granting you and your allies Major Protection for 10 seconds, reducing your damage taken by 10%. Allies in the area can activate the Hidden Refresh synergy, granting them invisibility, increasing their Movement Speed by 70%, and healing them for 9110 Health over 4 seconds.',
        changes: 'Major Protection persists after leaving the area.'
      },
      {
        id: 'veil-of-blades',
        name: 'Veil of Blades',
        description: 'Conjure a ring of shadow, reducing the Movement Speed of enemies by 70%, dealing 1438 Magic Damage to them every 1 second, and granting you and your allies Major Protection, reducing your damage taken by 10%. Allies in the area can activate the Hidden Refresh synergy, granting them invisibility, increasing their Movement Speed by 70%, and healing them for 9110 Health over 4 seconds.',
        changes: 'Enemies in the area take damage over time.'
      }
    ],
    buffsApplied: ['major_protection'],
    debuffsApplied: ['snare'],
    damage: {
      baseDamage: 1438,
      scalingFactor: 1.2,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 13
    },
    healing: {
      baseHealing: 9110,
      scalingFactor: 8.0,
      isHoT: true,
      hotTicks: 4
    },
    effects: [
      {
        id: 'movement-speed-reduction',
        type: 'other',
        description: 'Reduces enemy movement speed by 70%'
      },
      {
        id: 'hidden-refresh-synergy',
        type: 'other',
        description: 'Ally synergy grants invisibility, +70% movement speed, and healing'
      }
    ]
  },

  // Active abilities
  {
    id: 'shadow-cloak',
    name: 'Shadow Cloak',
    description: 'Cloak yourself in shadow to become invisible. When moving your Magicka Recovery is disabled and when not moving Shadow Cloak is half cost. When Shadow Cloak begins or ends, you gain Born From Shadow for 10 seconds, increasing your damage done to monsters by 10%. While slotted on either bar, you gain Major Prophecy and Savagery, increasing your Spell and Weapon Critical rating by 2629.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    duration: 3,
    morphs: [
      {
        id: 'dark-cloak',
        name: 'Dark Cloak',
        description: 'Shroud yourself in protective shadow to heal for 853 Health every 1 second, over 3 seconds, increasing by an additional 150% when you are not moving. This portion of the ability scales off your Max Health. While slotted on either bar, you gain Minor Protection, reducing your damage taken by 5%.',
        changes: 'No longer grants invisibility. Now heals over time based on your Max Health, and grants Minor Protection rather than Major Prophecy and Savagery.'
      },
      {
        id: 'shadowy-disguise',
        name: 'Shadowy Disguise',
        description: 'Cloak yourself in shadow to become invisible. When moving your Magicka Recovery is disabled and when not moving Shadowy Disguise is half cost. Your next direct damage attack will Critically Strike. When Shadowy Disguise begins or ends, you gain Born From Shadow for 10 seconds, increasing your damage done to monsters by 10%. While slotted on either bar, gain Major Prophecy and Major Savagery, increasing your Spell and Weapon Critical rating by 2629.',
        changes: 'Guarantees a Critical Strike on your next attack after activating. Cost decreases as the ability ranks up.'
      }
    ],
    buffsApplied: ['major_prophecy', 'major_savagery', 'minor_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 853,
      scalingFactor: 0.8,
      isHoT: true,
      hotTicks: 3
    },
    effects: [
      {
        id: 'invisibility',
        type: 'other',
        description: 'Grants invisibility for 3 seconds'
      },
      {
        id: 'born-from-shadow',
        type: 'other',
        description: '+10% damage to monsters for 10 seconds when ability begins or ends'
      },
      {
        id: 'guaranteed-crit',
        type: 'other',
        description: 'Next direct damage attack critically strikes (Shadowy Disguise only)'
      }
    ]
  },

  {
    id: 'blur',
    name: 'Blur',
    description: 'Surround yourself in a phantasmic aura to gain Major Evasion, reducing damage from area attacks by 20% for 20 seconds. While active, taking direct damage reduces the cost of your next Roll Dodge by 10%, up to a maximum of 100%. This effect can stack up to once every half second.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    duration: 20,
    morphs: [
      {
        id: 'mirage',
        name: 'Mirage',
        description: 'Surround yourself in a phantasmic aura to gain Major Evasion and Minor Resolve, reducing damage from area attacks by 20% and increasing your Physical and Spell Resistance by 2974 for 20 seconds. While active, taking direct damage reduces the cost of your next Roll Dodge by 10%, up to a maximum of 100%. This effect can stack up to once every half second.',
        changes: 'Grants Minor Resolve, increasing your Physical and Spell Resistance. Reduces the cost as the ability ranks up.'
      },
      {
        id: 'phantasmal-escape',
        name: 'Phantasmal Escape',
        description: 'Surround yourself in a phantasmic aura to gain Major Evasion, reducing damage from area attacks by 20% for 20 seconds. Activating this ability removes all snares and immobilizations from you and grants immunity to them for 4 seconds. While active, taking direct damage reduces the cost of your next Roll Dodge by 10%, up to a maximum of 100%. This effect can stack up to once every half second.',
        changes: 'Grants snare and immobilization immunity for a short duration.'
      }
    ],
    buffsApplied: ['major_evasion', 'minor_resolve'],
    debuffsApplied: [],
    effects: [
      {
        id: 'roll-dodge-cost-reduction',
        type: 'other',
        description: 'Taking direct damage reduces next Roll Dodge cost by 10% (max 100%)'
      },
      {
        id: 'cc-immunity',
        type: 'other',
        description: 'Grants snare and immobilization immunity for 4 seconds (Phantasmal Escape only)'
      }
    ]
  },

  {
    id: 'path-of-darkness',
    name: 'Path of Darkness',
    description: 'Create a corridor of shadows for 10 seconds, granting you and allies in the area Major Expedition, increasing Movement Speed by 30%. Effect persists for 4 seconds after leaving the path.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    duration: 10,
    morphs: [
      {
        id: 'refreshing-path',
        name: 'Refreshing Path',
        description: 'Create a corridor of shadows for 10 seconds, granting you and allies in the area Major Expedition, Minor Endurance, and Minor Intellect, increasing Movement Speed by 30%, as well as Stamina and Magicka Recovery by 15%. Effect persists for 4 seconds after leaving the path. Heals 435 Health to you and allies in the area every 1 second.',
        changes: 'Path also heals you and your allies and increases their Magicka and Stamina Recovery.'
      },
      {
        id: 'twisting-path',
        name: 'Twisting Path',
        description: 'Create a corridor of shadows for 10 seconds, granting you and allies in the area Major Expedition, increasing Movement Speed by 30% which persists for 4 seconds after leaving the path. Deals 377 Magic Damage to enemies in the target area every 1 second.',
        changes: 'Reduces the cost and the path affects a larger conal area and deals damage.'
      }
    ],
    buffsApplied: ['major_expedition', 'minor_endurance', 'minor_intellect'],
    debuffsApplied: [],
    damage: {
      baseDamage: 377,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 10
    },
    healing: {
      baseHealing: 435,
      scalingFactor: 0.4,
      isHoT: true,
      hotTicks: 10
    },
    effects: [
      {
        id: 'movement-corridor',
        type: 'other',
        description: 'Creates shadow path for 10 seconds, effects persist 4 seconds after leaving'
      }
    ]
  },

  {
    id: 'aspect-of-terror',
    name: 'Aspect of Terror',
    description: 'Summon a dark spirit to terrify nearby enemies, causing them to cower in fear for 2 seconds and be afflicted with Major Cowardice for 10 seconds, reducing their Weapon and Spell Damage by 430.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    duration: 10,
    morphs: [
      {
        id: 'manifestation-of-terror',
        name: 'Manifestation of Terror',
        description: 'Conceal a sinister trap at the target location, which takes 2 seconds to arm and lasts for 20 seconds. When the trap is triggered, up to 6 enemies in the area become terrified, causing them to cower in fear for 2 seconds and be afflicted with Major Cowardice for 10 seconds, reducing their Weapon and Spell Damage by 430.',
        changes: 'Reduces the cost and creates a trap at your target location instead, which fears enemies when triggered.'
      },
      {
        id: 'mass-hysteria',
        name: 'Mass Hysteria',
        description: 'Summon a dark spirit to terrify all nearby enemies, causing them to cower in fear for 3 seconds and be afflicted with Major Cowardice for 10 seconds, reducing their Weapon and Spell Damage by 430.',
        changes: 'The ability no longer has a cap of how many targets it can affect and the fear increases in duration as the ability ranks up.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['fear', 'major_cowardice'],
    effects: [
      {
        id: 'fear-effect',
        type: 'other',
        description: 'Causes enemies to cower in fear for 2-3 seconds'
      },
      {
        id: 'trap-mechanism',
        type: 'other',
        description: 'Creates armed trap for 20 seconds (Manifestation of Terror only)'
      }
    ]
  },

  {
    id: 'summon-shade',
    name: 'Summon Shade',
    description: 'Summon a shade version of yourself to attack an enemy and fight at your side for 20 seconds. The shade slashes at an enemy, dealing 462 Magic Damage once every 2 seconds, and inflicts Minor Maim for 4 seconds, reducing the enemy\'s damage done by 5%.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 20,
    morphs: [
      {
        id: 'dark-shade',
        name: 'Dark Shade',
        description: 'Summon a shade version of yourself to attack an enemy and fight at your side for 20 seconds. The shade attacks nearby enemies within 9 meters of it, dealing 623 Magic Damage once every 2 seconds and afflicting them with Minor Maim for 4 seconds, reducing their damage done by 5%.',
        changes: 'The summoned shade\'s attacks now hit in an area and deal increased damage.'
      },
      {
        id: 'shadow-image',
        name: 'Shadow Image',
        description: 'Summon a shade version of yourself to stay in place and attack an enemy from range for 20 seconds. The shade shoots at an enemy, dealing 478 Magic Damage every 2 seconds, and inflicts Minor Maim for 4 seconds, reducing the enemy\'s damage done by 5%. While the shade is summoned, you can activate this ability again for no cost to teleport to the shade\'s location.',
        changes: 'The summoned shade now is stationary and attacks from a range but costs more. Activating the ability again while the shade is active allows you to teleport to its position.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim'],
    damage: {
      baseDamage: 462,
      scalingFactor: 0.4,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'shade-pet',
        type: 'other',
        description: 'Summons shade for 20 seconds that attacks every 2 seconds'
      },
      {
        id: 'teleport-to-shade',
        type: 'other',
        description: 'Can teleport to shade location for no cost (Shadow Image only)'
      }
    ]
  }
];

// Shadow Passive Skills
const shadowPassives: Skill[] = [
  {
    id: 'refreshing-shadows',
    name: 'Refreshing Shadows',
    description: 'Increases your Health, Stamina, and Magicka Recovery by 15%.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'recovery-bonus',
        type: 'other',
        description: '+15% Health, Stamina, and Magicka Recovery'
      }
    ]
  },

  {
    id: 'shadow-barrier',
    name: 'Shadow Barrier',
    description: 'Casting a Shadow ability grants you Major Resolve for 12 seconds, increasing your Physical and Spell Resistance by 5948. This duration is increased by 2 seconds for each piece of Heavy Armor equipped. Current duration: 12 seconds',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: ['major_resolve'],
    debuffsApplied: [],
    effects: [
      {
        id: 'major-resolve-on-cast',
        type: 'other',
        description: 'Casting Shadow ability grants Major Resolve for 12+ seconds'
      },
      {
        id: 'heavy-armor-synergy',
        type: 'other',
        description: '+2 seconds duration per piece of Heavy Armor equipped'
      }
    ]
  },

  {
    id: 'dark-vigor',
    name: 'Dark Vigor',
    description: 'Increases your Max Health by 5% for each Shadow ability slotted.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'health-per-slot',
        type: 'other',
        description: '+5% Max Health per Shadow ability slotted'
      }
    ]
  },

  {
    id: 'dark-veil',
    name: 'Dark Veil',
    description: 'Increases the duration of your non-invisibility based Shadow abilities by 2 seconds.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'duration-bonus',
        type: 'other',
        description: '+2 seconds duration to non-invisibility Shadow abilities'
      }
    ]
  }
];

// SIPHONING SKILL LINE
const siphoningSkills: Skill[] = [
  // Ultimate abilities
  {
    id: 'soul-shred',
    name: 'Soul Shred',
    description: 'Ravage nearby enemies\' souls with a night rune, dealing 3486 Magic Damage and stunning them for 4 seconds. An ally can target a ravaged enemy and activate the Soul Leech synergy, dealing 3122 Magic Damage to them and healing for the damage caused.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 120
    },
    duration: 4,
    radius: 8,
    morphs: [
      {
        id: 'soul-siphon',
        name: 'Soul Siphon',
        description: 'Sanctify your soul and the souls of nearby allies with a night rune, healing for 3600 Health and an additional 9384 Health over 4 seconds. You and your allies will also receive Major Vitality, increasing your healing received and damage shield strength by 12% for 4 seconds. An ally can target a nearby enemy and activate the Soul Leech synergy, dealing 3122 Magic Damage to them and healing for the damage caused.',
        changes: 'Heals you and your allies instead of damaging and stunning enemies.'
      },
      {
        id: 'soul-tether',
        name: 'Soul Tether',
        description: 'Ravage nearby enemies\' souls with a night rune, dealing 3600 Magic Damage, healing for half the damage, and stunning them for 4 seconds. Ravaged enemies are tethered to you for 8 seconds, and while they remain within 10 meters, you siphon 627 Health from them every second. An ally can target a ravaged enemy and activate the Soul Leech synergy, dealing 3122 Magic Damage to them and healing for the damage caused.',
        changes: 'Heals for half the initial damage caused. Tether to enemies hit, dealing constant damage and healing for damage caused.'
      }
    ],
    buffsApplied: ['major_vitality'],
    debuffsApplied: ['stun'],
    damage: {
      baseDamage: 3486,
      scalingFactor: 3.2,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 3600,
      scalingFactor: 3.0,
      isHoT: true,
      hotTicks: 4
    },
    effects: [
      {
        id: 'soul-leech-synergy',
        type: 'other',
        description: 'Ally synergy deals 3122 Magic damage and heals for damage done'
      },
      {
        id: 'soul-tether-effect',
        type: 'other',
        description: 'Tethers enemies for 8 seconds, siphoning 627 Health/second within 10m'
      }
    ]
  },

  // Active abilities
  {
    id: 'strife',
    name: 'Strife',
    description: 'Steal an enemy\'s life force, dealing 1548 Magic Damage and healing you or a nearby ally for 50% of the damage inflicted every 2 seconds for 10 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    duration: 10,
    morphs: [
      {
        id: 'funnel-health',
        name: 'Funnel Health',
        description: 'Steal an enemy\'s life force, dealing 1600 Magic Damage and healing you or 3 other nearby allies for 50% of the damage inflicted every 2 seconds for 10 seconds.',
        changes: 'Heals two additional targets.'
      },
      {
        id: 'swallow-soul',
        name: 'Swallow Soul',
        description: 'Steal an enemy\'s life force, dealing 2160 Magic Damage and healing you for 35% of the damage inflicted every 2 seconds for 10 seconds.',
        changes: 'Increases the damage done but reduces the healing caused. Heal only targets yourself.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1548,
      scalingFactor: 1.4,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 774,
      scalingFactor: 0.7,
      isHoT: true,
      hotTicks: 5
    },
    effects: [
      {
        id: 'life-steal-heal',
        type: 'other',
        description: 'Heals for 50% of damage dealt every 2 seconds for 10 seconds'
      }
    ]
  },

  {
    id: 'malevolent-offering',
    name: 'Malevolent Offering',
    description: 'Pour out your lifesblood and channel the arcane, healing yourself or an ally in front of you for 3486 Health, while draining 1080 Health from yourself over 3 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2430
    },
    morphs: [
      {
        id: 'healthy-offering',
        name: 'Healthy Offering',
        description: 'Pour out your lifesblood and channel the arcane, healing yourself or an ally in front of you for 3600 Health, while draining 1080 Health from yourself over 3 seconds. After casting, gain Minor Mending for 10 seconds, increasing your healing done by 8%.',
        changes: 'Grants you Minor Mending after casting, increasing your healing done.'
      },
      {
        id: 'shrewd-offering',
        name: 'Shrewd Offering',
        description: 'Pour out your lifesblood and channel the arcane, healing yourself or an ally in front of you for 3485 Health, while draining 810 Health from yourself over 2 seconds.',
        changes: 'Reduces the Magicka cost and the duration of the Health cost.'
      }
    ],
    buffsApplied: ['minor_mending'],
    debuffsApplied: [],
    healing: {
      baseHealing: 3486,
      scalingFactor: 3.0
    },
    effects: [
      {
        id: 'health-sacrifice',
        type: 'other',
        description: 'Drains 1080 Health from caster over 3 seconds'
      }
    ]
  },

  {
    id: 'cripple',
    name: 'Cripple',
    description: 'Sap an enemy\'s agility and wrack them with pain, dealing 4631 Magic Damage over 20 seconds and reducing their Movement Speed by 30% for 4 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    duration: 20,
    morphs: [
      {
        id: 'crippling-grasp',
        name: 'Crippling Grasp',
        description: 'Sap an enemy\'s agility and wrack them with pain, dealing 1199 Magic Damage and an additional 4350 Magic Damage over 20 seconds, immobilizing them for 2 seconds, and reducing their Movement Speed by 30% for 4 seconds.',
        changes: 'Converts some of the damage over time into more up front damage, immobilizes the enemy on impact, and reduces the cost.'
      },
      {
        id: 'debilitate',
        name: 'Debilitate',
        description: 'Sap an enemy\'s agility and wrack them with pain, dealing 4785 Magic Damage over 20 seconds and reducing their Movement Speed by 50% for 4 seconds. This ability has a higher chance of applying the Overcharged status effect.',
        changes: 'Increases the snare potency and quintuples the chance to apply the Overcharged status effect.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['snare', 'immobilize', 'overcharged'],
    damage: {
      baseDamage: 4631,
      scalingFactor: 4.0,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'movement-debuff',
        type: 'other',
        description: 'Reduces movement speed by 30-50% for 4 seconds'
      }
    ]
  },

  {
    id: 'siphoning-strikes',
    name: 'Siphoning Strikes',
    description: 'Channel a portion of your soul to convert Health to 2000 Magicka and Stamina. While slotted on either bar, your soul yearns for the warmth of life. All damage you deal heals you for 1250 Health, up to once every 1 second.',
    type: 'active',
    resourceCost: {
      type: 'health',
      amount: 1080
    },
    morphs: [
      {
        id: 'leeching-strikes',
        name: 'Leeching Strikes',
        description: 'Channel a portion of your soul to convert Health to 2000 Magicka and Stamina. While slotted on either bar, your soul yearns for the warmth of life. All damage you deal heals you for 1800 Health and reduces the cost of your next Leeching Strikes by 10%, stacking up to 10 times. This effect can occur once every 1 second.',
        changes: 'Increases the healing done and grants ramping cost reduction for the next cast when the heal activates.'
      },
      {
        id: 'siphoning-attacks',
        name: 'Siphoning Attacks',
        description: 'Channel a portion of your soul to convert Health to 2600 Magicka and Stamina. While slotted on either bar, your soul yearns for the warmth of life. All damage you deal heals you for 1250 Health and restores 200 Magicka and Stamina, up to once every 1 second.',
        changes: 'Increases the Magicka and Stamina restored, and the heal now also restores Magicka and Stamina.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 1250,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'resource-conversion',
        type: 'other',
        description: 'Converts Health to 2000-2600 Magicka and Stamina'
      },
      {
        id: 'damage-heal-passive',
        type: 'other',
        description: 'While slotted, all damage heals you for 1250-1800 Health (once per second)'
      }
    ]
  },

  {
    id: 'drain-power',
    name: 'Drain Power',
    description: 'Siphon the vigor from your enemies\' blood, dealing 1742 Magic Damage to all nearby enemies. If an enemy is hit, you gain Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20% for 30 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 30,
    radius: 8,
    morphs: [
      {
        id: 'power-extraction',
        name: 'Power Extraction',
        description: 'Siphon the vigor from your enemies\' blood, dealing 1742 Disease Damage to all nearby enemies. If an enemy is hit you gain Major Brutality and Sorcery, and Minor Courage increasing your Weapon and Spell Damage by 20% and 215 for 30 seconds. Enemies hit have Minor Cowardice applied to them for 10 seconds, reducing their Weapon and Spell Damage by 215.',
        changes: 'Converts to a Stamina ability that deals Disease Damage. Applies Minor Cowardice to enemies hit and grants Minor Courage to you.'
      },
      {
        id: 'sap-essence',
        name: 'Sap Essence',
        description: 'Siphon the vigor from your enemies\' blood, dealing 1742 Magic Damage to all nearby enemies and healing you and your allies for 599 plus 20% more for each enemy hit. If an enemy is hit, you gain Major Brutality and Sorcery, increasing your Weapon and Spell Damage by 20% for 30 seconds.',
        changes: 'Also heals you and your allies. Heal is stronger for each enemy hit.'
      }
    ],
    buffsApplied: ['major_brutality', 'major_sorcery', 'minor_courage'],
    debuffsApplied: ['minor_cowardice'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 599,
      scalingFactor: 0.5
    },
    effects: [
      {
        id: 'aoe-siphon',
        type: 'other',
        description: 'Hits all nearby enemies in 8 meter radius'
      },
      {
        id: 'scaling-heal',
        type: 'other',
        description: 'Heal increases by 20% for each enemy hit (Sap Essence only)'
      }
    ]
  }
];

// Siphoning Passive Skills
const siphoningPassives: Skill[] = [
  {
    id: 'catalyst',
    name: 'Catalyst',
    description: 'After drinking a potion you gain 30 Ultimate.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'potion-ultimate',
        type: 'other',
        description: 'Gain 30 Ultimate after drinking a potion'
      }
    ]
  },

  {
    id: 'magicka-flood',
    name: 'Magicka Flood',
    description: 'WITH A SIPHONING ABILITY SLOTTED Increases your Max Magicka and Stamina by 6%.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-resource-bonus',
        type: 'other',
        description: '+6% Max Magicka and Stamina with Siphoning ability slotted'
      }
    ]
  },

  {
    id: 'soul-siphoner',
    name: 'Soul Siphoner',
    description: 'Increases your healing done by 3% for each Siphoning ability slotted.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-per-slot',
        type: 'other',
        description: '+3% healing done per Siphoning ability slotted'
      }
    ]
  },

  {
    id: 'transfer',
    name: 'Transfer',
    description: 'Casting a Siphoning ability while in combat generates 2 Ultimate. This effect can occur once every 4 seconds.',
    type: 'passive',
    resourceCost: { type: 'magicka', amount: 0 },
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-on-cast',
        type: 'other',
        description: 'Gain 2 Ultimate when casting Siphoning ability (once per 4 seconds)'
      }
    ]
  }
];

// Export Nightblade Skills
export const nightbladeSkills = {
  assassination: [...assassinationSkills, ...assassinationPassives],
  shadow: [...shadowSkills, ...shadowPassives],
  siphoning: [...siphoningSkills, ...siphoningPassives]
};

export default nightbladeSkills;

// Arcanist Skills - The forbidden knowledge class
import { Skill } from './skills';

// Herald of the Tome Skills
const heraldOfTheTomeSkills: Skill[] = [
  // Ultimate
  {
    id: 'the-unblinking-eye',
    name: 'The Unblinking Eye',
    description: 'Tear open the fabric of the Aurbis to summon a scion of Hermaeus Mora.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 225
    },
    duration: 6,
    morphs: [
      {
        id: 'the-languid-eye',
        name: 'The Languid Eye',
        description: 'Also applies a snare to enemies hit and damage increases over time.',
        changes: 'Snares enemies by 50% for 3 seconds, damage increases by 7% every 0.5 seconds.'
      },
      {
        id: 'the-tide-kings-gaze',
        name: 'The Tide King\'s Gaze',
        description: 'Beam duration is increased, automatically follows the initial target, and searches for new targets if it is slain.',
        changes: '8 second duration, automatically follows and hunts for new targets within 8 meters.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['snare'],
    damage: {
      baseDamage: 1115,
      scalingFactor: 1.0,
      damageType: 'magic',
      isDoT: true
    },
    effects: [
      {
        id: 'scion-beam',
        type: 'other',
        description: 'Summons a scion that casts a beam dealing damage every 0.5 seconds in 5 meter radius',
        duration: 6
      }
    ]
  },
  // Active Skills
  {
    id: 'runeblades',
    name: 'Runeblades',
    description: 'Craft a series of Apocryphal runes before launching them at a foe.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'escalating-runeblades',
        name: 'Escalating Runeblades',
        description: 'Deals increased damage and the last rune deals damage in an area.',
        changes: 'Damage increases with each hit (696, 766, 917), last rune explodes for AoE damage in 8 meters.'
      },
      {
        id: 'writhing-runeblades',
        name: 'Writhing Runeblades',
        description: 'Has increased Critical Chance for each active Crux.',
        changes: 'Gains 1095-2191 Weapon and Spell Critical rating based on active Crux.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 695,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'crux-generation',
        type: 'other',
        description: 'Generates Crux and deals 3% increased damage per active Crux'
      },
      {
        id: 'triple-hit',
        type: 'other',
        description: 'Hits three times in succession'
      }
    ]
  },
  {
    id: 'fatecarver',
    name: 'Fatecarver',
    description: 'Harness pure knowledge into a beam of energy that scars the world in front of you.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    duration: 4,
    morphs: [
      {
        id: 'exhausting-fatecarver',
        name: 'Exhausting Fatecarver',
        description: 'Applies a snare to damaged enemies. Consuming Crux also increases the duration and snare strength.',
        changes: 'Snares enemies by 15%, consuming Crux increases duration by 0.3s and snare by 15% per Crux.'
      },
      {
        id: 'pragmatic-fatecarver',
        name: 'Pragmatic Fatecarver',
        description: 'Gain a damage shield while channeling and immunity to interrupts while the shield is active. Consuming Crux also reduces the cost.',
        changes: 'Grants 3137 damage shield and interrupt immunity, cost reduced by 16% per Crux spent.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['snare'],
    damage: {
      baseDamage: 879,
      scalingFactor: 0.8,
      damageType: 'magic',
      isDoT: true
    },
    effects: [
      {
        id: 'channeled-beam',
        type: 'other',
        description: 'Channel for up to 4 seconds, hits up to 6 enemies every 0.3 seconds'
      },
      {
        id: 'crux-consumption',
        type: 'other',
        description: 'Consumes all Crux, increases damage by 33% per Crux spent'
      }
    ]
  },
  {
    id: 'abyssal-impact',
    name: 'Abyssal Impact',
    description: 'Infuse your arm with abyssal magic to form tentacles that lash out at your foes.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2970
    },
    range: 7,
    morphs: [
      {
        id: 'cephaliarchs-flail',
        name: 'Cephaliarch\'s Flail',
        description: 'Generates Crux. Heals you if an enemy is damaged.',
        changes: 'Generates Crux and heals for 1000 Health if an enemy is hit.'
      },
      {
        id: 'tentacular-dread',
        name: 'Tentacular Dread',
        description: 'Converts into a Magicka ability and deals Frost Damage. Consume Crux to increase the base damage and Abyssal Ink strength.',
        changes: 'Deals 2002 Frost Damage, consumes Crux to increase damage by 33% and Abyssal Ink bonus by 2% per Crux.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize'],
    damage: {
      baseDamage: 1939,
      scalingFactor: 1.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'abyssal-ink',
        type: 'other',
        description: 'Marks enemies with Abyssal Ink for 20 seconds, increasing damage to them by 5%',
        duration: 20
      },
      {
        id: 'immobilize',
        type: 'crowd_control',
        description: 'Immobilizes enemies for 3 seconds',
        duration: 3
      }
    ]
  },
  {
    id: 'tome-bearers-inspiration',
    name: 'Tome-Bearer\'s Inspiration',
    description: 'Etch a series of runes onto your weapon that pulse with power once every 5 seconds.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 60,
    morphs: [
      {
        id: 'inspired-scholarship',
        name: 'Inspired Scholarship',
        description: 'Increases the frequency of damage.',
        changes: 'Runes pulse every 3 seconds instead of 5, deals 935 Magic Damage.'
      },
      {
        id: 'recuperative-treatise',
        name: 'Recuperative Treatise',
        description: 'When dealing damage, restore Magicka and Stamina.',
        changes: 'Restores 600 Magicka and Stamina when enhanced abilities deal damage.'
      }
    ],
    buffsApplied: ['major_brutality', 'major_sorcery'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'weapon-enhancement',
        type: 'other',
        description: 'Enhanced class abilities deal additional damage and generate Crux if you have none'
      },
      {
        id: 'passive-buffs',
        type: 'other',
        description: 'Grants Major Brutality and Major Sorcery while slotted on either bar'
      }
    ]
  },
  {
    id: 'the-imperfect-ring',
    name: 'The Imperfect Ring',
    description: 'Summon a flawed rune under an enemy that etches foes nearby with scrawled glyphs.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4631
    },
    range: 28,
    duration: 20,
    morphs: [
      {
        id: 'fulminating-rune',
        name: 'Fulminating Rune',
        description: 'Deals additional area damage after a delay. Up to 3 allies can use the Runebreak synergy.',
        changes: 'Rune detonates after 6 seconds for 1438 Frost Damage in 7 meters. Up to 3 allies can use synergy.'
      },
      {
        id: 'rune-of-displacement',
        name: 'Rune of Displacement',
        description: 'Places a rune under the target that deals damage and pulls nearby enemies after a delay.',
        changes: 'After 2 seconds, pulls enemies 2-10 meters to the rune, deals damage over 18 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 4631,
      scalingFactor: 4.0,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'runebreak-synergy',
        type: 'other',
        description: 'Ally synergy deals 2698 Frost Damage to enemies within 7 meters'
      },
      {
        id: 'ground-effect',
        type: 'other',
        description: 'Area effect that damages nearby enemies over time',
        duration: 20
      }
    ]
  }
];

// Curative Runeforms Skills  
const curativeRuneformsSkills: Skill[] = [
  // Ultimate
  {
    id: 'vitalizing-glyphic',
    name: 'Vitalizing Glyphic',
    description: 'Summon an Apocryphal glyphic, which you and your allies can heal.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 30,
    morphs: [
      {
        id: 'glyphic-of-the-tides',
        name: 'Glyphic of the Tides',
        description: 'The glyphic spawns at a higher Health percentage and grants additional damage reduction when it is fully powered.',
        changes: 'Spawns at 53% Health, grants Major Protection (10% damage reduction) when at full Health.'
      },
      {
        id: 'resonating-glyphic',
        name: 'Resonating Glyphic',
        description: 'Dealing damage to the glyphic powers it up instead of healing it, but requires you to be in combat to activate.',
        changes: 'Spawns at 70% Health, powered by dealing damage instead of healing, requires combat.'
      }
    ],
    buffsApplied: ['major_protection'],
    debuffsApplied: [],
    healing: {
      baseHealing: 927,
      scalingFactor: 0.8,
      isHoT: true
    },
    effects: [
      {
        id: 'interactive-glyphic',
        type: 'other',
        description: 'Spawns at 30% Health, heals allies and grants up to 200 Weapon/Spell Damage based on Health',
        duration: 30
      }
    ]
  },
  // Active Skills
  {
    id: 'runemend',
    name: 'Runemend',
    description: 'Craft a series of precise Apocryphal runes, then propel them at yourself or an ally.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    morphs: [
      {
        id: 'audacious-runemend',
        name: 'Audacious Runemend',
        description: 'Healing low Health targets grants them Ultimate.',
        changes: 'Healing targets under 50% Health grants Minor Heroism for 6 seconds (1 Ultimate every 1.5s).'
      },
      {
        id: 'evolving-runemend',
        name: 'Evolving Runemend',
        description: 'Heals for an additional amount over time.',
        changes: 'Also heals for 1302 Health over 6 seconds after initial healing.'
      }
    ],
    buffsApplied: ['minor_heroism'],
    debuffsApplied: [],
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'triple-heal',
        type: 'other',
        description: 'Heals three times and generates Crux'
      },
      {
        id: 'cost-reduction',
        type: 'other',
        description: 'Cost reduced by 3% per active Crux'
      }
    ]
  },
  {
    id: 'remedy-cascade',
    name: 'Remedy Cascade',
    description: 'Channel the abyssal sea to coalesce a beam of restorative energy.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    duration: 4.5,
    morphs: [
      {
        id: 'cascading-fortune',
        name: 'Cascading Fortune',
        description: 'Heals for more on low Health targets.',
        changes: 'Heals for up to 50% more based on severity of target wounds.'
      },
      {
        id: 'curative-surge',
        name: 'Curative Surge',
        description: 'The beam gradually heals for more the longer you channel it.',
        changes: 'Healing increases up to 192% more by the end of the channel duration.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 11310,
      scalingFactor: 10.0,
      isHoT: true,
      hotTicks: 9
    },
    effects: [
      {
        id: 'beam-heal',
        type: 'other',
        description: 'Channeled beam that heals allies in its path over 4.5 seconds'
      },
      {
        id: 'resource-restore',
        type: 'other',
        description: 'Consuming Crux restores 728 Magicka and Stamina per Crux to allies'
      }
    ]
  },
  {
    id: 'chakram-shields',
    name: 'Chakram Shields',
    description: 'Carve the runes of the Blind Man to call forth spinning mystical discs.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    duration: 6,
    morphs: [
      {
        id: 'chakram-of-destiny',
        name: 'Chakram of Destiny',
        description: 'Creates a Crux. Recasting the shield on a target increases the maximum strength of the shield.',
        changes: 'Generates Crux, recasting on shielded target grants 30% stronger shield.'
      },
      {
        id: 'tidal-chakram',
        name: 'Tidal Chakram',
        description: 'Consumes Crux to heal based on the shield\'s strength every second it persists.',
        changes: 'Consumes Crux to heal for 33% of remaining shield strength every second per Crux.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'smart-shields',
        type: 'shield',
        description: 'Grants shields to up to 4 allies, prefers reticle target or low-Health targets',
        value: 3159,
        duration: 6
      }
    ]
  },
  {
    id: 'arcanists-domain',
    name: 'Arcanist\'s Domain',
    description: 'Draw forth your tome and invoke the vigoratum of Hermaeus Mora to conjure a vortex of eldritch power.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 20,
    morphs: [
      {
        id: 'reconstructive-domain',
        name: 'Reconstructive Domain',
        description: 'Heals you and your allies in the area over time.',
        changes: 'Also heals allies for 4631 Health over 20 seconds while in the vortex.'
      },
      {
        id: 'zenas-empowering-disc',
        name: 'Zenas\' Empowering Disc',
        description: 'The effects remain on you and your allies for a short duration after leaving the area.',
        changes: 'Buffs persist for up to 10 seconds after leaving the vortex.'
      }
    ],
    buffsApplied: ['minor_courage', 'minor_fortitude', 'minor_intellect', 'minor_endurance'],
    debuffsApplied: [],
    healing: {
      baseHealing: 4631,
      scalingFactor: 4.0,
      isHoT: true,
      hotTicks: 20
    },
    effects: [
      {
        id: 'area-buffs',
        type: 'other',
        description: 'Creates vortex granting multiple Minor buffs to allies who enter',
        duration: 20
      }
    ]
  },
  {
    id: 'apocryphal-gate',
    name: 'Apocryphal Gate',
    description: 'Breach the world walls to create a portal at a target location.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    range: 28,
    duration: 15,
    morphs: [
      {
        id: 'fleet-footed-gate',
        name: 'Fleet-Footed Gate',
        description: 'Increases your Movement Speed after teleporting.',
        changes: 'Grants Major Expedition for 5 seconds after teleporting (30% movement speed).'
      },
      {
        id: 'passage-between-worlds',
        name: 'Passage Between Worlds',
        description: 'Grants a synergy to allies allowing them to teleport from one portal to the other.',
        changes: 'Allies can activate Passage synergy to teleport between portals.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: [],
    effects: [
      {
        id: 'portal-pair',
        type: 'other',
        description: 'Creates twin portals allowing teleportation, generates Crux each time you teleport',
        duration: 15
      }
    ]
  }
];

// Soldier of Apocrypha Skills
const soldierOfApocryphaSkills: Skill[] = [
  // Ultimate
  {
    id: 'gibbering-shield',
    name: 'Gibbering Shield',
    description: 'Gather the true strength of Apocrypha around you, forming protective tentacles and a damage shield.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    duration: 10,
    morphs: [
      {
        id: 'gibbering-shelter',
        name: 'Gibbering Shelter',
        description: 'No longer deals damage to enemies and grants allies a damage shield when you are hit.',
        changes: 'Grants allies 5462 damage shield for 4s when you take damage, no retaliation damage.'
      },
      {
        id: 'sanctum-of-the-abyssal-sea',
        name: 'Sanctum of the Abyssal Sea',
        description: 'Damage shield gains an increase in strength.',
        changes: 'Shield absorbs up to 37697 damage instead of 31732.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 31732,
      scalingFactor: 30.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'absorb-shield',
        type: 'shield',
        description: 'Absorbs 60% of all damage for 10 seconds, up to max based on Max Health',
        value: 31732,
        duration: 10
      },
      {
        id: 'retaliation',
        type: 'other',
        description: 'When shield collapses, deals absorbed damage to enemies within 5 meters over 10 seconds'
      }
    ]
  },
  // Active Skills  
  {
    id: 'runic-jolt',
    name: 'Runic Jolt',
    description: 'Craft a defensive Apocryphal rune that deals damage and applies Minor Maim.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'runic-embrace',
        name: 'Runic Embrace',
        description: 'Heal yourself and apply Minor Lifesteal.',
        changes: 'Heals for 1706 Health and applies Minor Lifesteal, healing allies for 600 Health/second when damaging enemies.'
      },
      {
        id: 'runic-sunder',
        name: 'Runic Sunder',
        description: 'Converts into a Stamina ability and deals Physical Damage. Reduce your target\'s Armor and gain Armor.',
        changes: 'Deals Physical Damage, steals 2200 Armor from target.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim', 'minor_lifesteal', 'taunt'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    healing: {
      baseHealing: 1706,
      scalingFactor: 1.5
    },
    effects: [
      {
        id: 'defensive-rune',
        type: 'other',
        description: 'Generates Crux, taunts for 15s, reduces damage taken by 2% per active Crux while slotted'
      }
    ]
  },
  {
    id: 'runespite-ward',
    name: 'Runespite Ward',
    description: 'Like the rune knights of old, summon a shield that absorbs damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    duration: 6,
    morphs: [
      {
        id: 'impervious-runeward',
        name: 'Impervious Runeward',
        description: 'Drastically increases the size of the damage shield for the first second but reduces the size of the shield after.',
        changes: 'Absorbs 9916 damage for 1 second, then 2203 damage for 5 seconds if first shield persists.'
      },
      {
        id: 'spiteward-of-the-lucid-mind',
        name: 'Spiteward of the Lucid Mind',
        description: 'Consume Crux to refund cost.',
        changes: 'Consuming Crux refunds 30% of ability cost per Crux spent.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1600, // Retaliation damage scales off Armor
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'damage-shield',
        type: 'shield',
        description: 'Absorbs 4800 damage, retaliates when hit, consumes Crux for healing',
        value: 4800,
        duration: 6
      },
      {
        id: 'crux-healing',
        type: 'other',
        description: 'Consume Crux to heal for 1600 Health per Crux spent'
      }
    ]
  },
  {
    id: 'fatewoven-armor',
    name: 'Fatewoven Armor',
    description: 'Forge defiant runic armor around you, granting Major Resolve.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 20,
    morphs: [
      {
        id: 'cruxweaver-armor',
        name: 'Cruxweaver Armor',
        description: 'Increases the duration and when damaged, creates a Crux.',
        changes: 'Duration increased to 30 seconds, generates Crux when damaged (once every 5 seconds).'
      },
      {
        id: 'unbreakable-fate',
        name: 'Unbreakable Fate',
        description: 'Gain bonus Block Mitigation and consume Crux to increase the bonus.',
        changes: 'Grants 5% Block Mitigation plus 5% additional per Crux consumed.'
      }
    ],
    buffsApplied: ['major_resolve'],
    debuffsApplied: ['minor_breach'],
    effects: [
      {
        id: 'runic-armor',
        type: 'other',
        description: 'Increases Armor by 5948, applies Minor Breach to attackers for 6 seconds',
        duration: 20
      }
    ]
  },
  {
    id: 'runic-defense',
    name: 'Runic Defense',
    description: 'Cast forth a complex rune granting you and your group members Minor Resolve.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    duration: 20,
    morphs: [
      {
        id: 'runeguard-of-freedom',
        name: 'Runeguard of Freedom',
        description: 'Converts a portion of the healing into Armor and Crowd Control Immunity.',
        changes: 'When triggered, heals for 2400 Health and grants 3300 Armor + CC immunity for 7s (once per 30s).'
      },
      {
        id: 'runeguard-of-still-waters',
        name: 'Runeguard of Still Waters',
        description: 'Immobilizes nearby enemies.',
        changes: 'After 1 second, immobilizes enemies within 7 meters for 3 seconds.'
      }
    ],
    buffsApplied: ['minor_resolve', 'minor_protection'],
    debuffsApplied: ['immobilize'],
    healing: {
      baseHealing: 4800,
      scalingFactor: 4.0
    },
    effects: [
      {
        id: 'group-protection',
        type: 'other',
        description: 'Grants Minor Resolve to group, Minor Protection to caster, emergency heal when below 50% Health',
        duration: 20
      }
    ]
  },
  {
    id: 'rune-of-eldritch-horror',
    name: 'Rune of Eldritch Horror',
    description: 'Etch an incomprehensible rune on your enemy\'s mind, paralyzing them in fear.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    range: 28,
    duration: 4,
    morphs: [
      {
        id: 'rune-of-uncanny-adoration',
        name: 'Rune of Uncanny Adoration',
        description: 'Charms the target and causes them to move towards you.',
        changes: 'Charms target instead of stunning, causes them to move towards caster.'
      },
      {
        id: 'rune-of-the-colorless-pool',
        name: 'Rune of the Colorless Pool',
        description: 'Applies Minor Brittle to the target.',
        changes: 'Also applies Minor Brittle for 20 seconds (10% increased Critical Damage taken).'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['stun', 'charm', 'minor_vulnerability', 'minor_brittle'],
    effects: [
      {
        id: 'mind-rune',
        type: 'crowd_control',
        description: 'After 1 second delay, stuns for 4 seconds (8 seconds vs monsters), cannot be dodged',
        duration: 4
      },
      {
        id: 'vulnerability',
        type: 'other',
        description: 'Applies Minor Vulnerability for 10 seconds, increasing damage taken by 5%',
        duration: 10
      }
    ]
  }
];

// Export Arcanist Skills
export const arcanistSkills = {
  heraldOfTheTome: heraldOfTheTomeSkills,
  curativeRuneforms: curativeRuneformsSkills,
  soldierOfApocrypha: soldierOfApocryphaSkills
};

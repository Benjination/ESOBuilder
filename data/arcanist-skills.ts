// Arcanist Skills - The forbidden knowledge class
import { Skill } from './skills';

// Herald of the Tome Skills
const heraldOfTheTomeSkills: Skill[] = [
  // Active Skills
  {
    id: 'runic-jolt',
    name: 'Runic Jolt',
    description: 'Inscribe a rune of power that deals shock damage and generates Crux.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'runic-sunder',
        name: 'Runic Sunder',
        description: 'Deals more damage and applies Minor Breach.',
        changes: 'Higher damage and applies Minor Breach for 10 seconds.'
      },
      {
        id: 'runic-embrace',
        name: 'Runic Embrace',
        description: 'Pulls the enemy to you and grants spell damage.',
        changes: 'Pulls enemy closer and grants Minor Sorcery for 20 seconds.'
      }
    ],
    buffsApplied: ['minor_sorcery'],
    debuffsApplied: ['minor_breach'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'crux-generation',
        type: 'other',
        description: 'Generates 1 Crux on cast'
      }
    ]
  },
  {
    id: 'fatecarver',
    name: 'Fatecarver',
    description: 'Channel to carve the fate of enemies with a beam of energy.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    range: 20,
    duration: 3,
    morphs: [
      {
        id: 'pragmatic-fatecarver',
        name: 'Pragmatic Fatecarver',
        description: 'Restores Magicka based on enemies hit.',
        changes: 'Restores 500 Magicka per enemy hit each second.'
      },
      {
        id: 'exhausting-fatecarver',
        name: 'Exhausting Fatecarver',
        description: 'Applies Minor Cowardice and consumes all Crux for bonus damage.',
        changes: 'Applies debuff and consumes Crux for 25% more damage per Crux.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_cowardice'],
    damage: {
      baseDamage: 580,
      scalingFactor: 0.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'channeled-beam',
        type: 'other',
        description: 'Channeled beam that can consume Crux for bonus effects',
        duration: 3
      }
    ]
  },
  {
    id: 'runic-armor',
    name: 'Runic Armor',
    description: 'Inscribe protective runes on yourself, granting damage shields.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 30,
    morphs: [
      {
        id: 'rune-of-eldritch-horror',
        name: 'Rune of Eldritch Horror',
        description: 'When shield is depleted, nearby enemies are feared.',
        changes: 'Fears up to 3 enemies within 8 meters when shield breaks.'
      },
      {
        id: 'rune-of-the-colorless-pool',
        name: 'Rune of the Colorless Pool',
        description: 'Grants healing over time and restores Magicka when depleted.',
        changes: 'Provides healing and restores 10% Magicka when shield breaks.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['fear'],
    healing: {
      baseHealing: 290,
      scalingFactor: 0.25,
      isHoT: true,
      hotTicks: 30
    },
    effects: [
      {
        id: 'damage-shield',
        type: 'shield',
        description: 'Damage shield that can fear enemies or provide healing',
        value: 1742,
        duration: 30
      }
    ]
  },
  {
    id: 'tentacular-dread',
    name: 'Tentacular Dread',
    description: 'Summon writhing tentacles that damage and immobilize enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    radius: 6,
    duration: 12,
    morphs: [
      {
        id: 'wretched-vitality',
        name: 'Wretched Vitality',
        description: 'Heals allies in the area and generates Ultimate.',
        changes: 'Heals allies for 50% of damage dealt and generates 2 Ultimate per second.'
      },
      {
        id: 'slaughtering-grasp',
        name: 'Slaughtering Grasp',
        description: 'Deals more damage and applies Hemorrhaging.',
        changes: 'Higher damage and applies hemorrhaging for 20 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize', 'hemorrhaging'],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 12
    },
    healing: {
      baseHealing: 174,
      scalingFactor: 0.15,
      isHoT: true,
      hotTicks: 12
    },
    effects: [
      {
        id: 'tentacle-area',
        type: 'other',
        description: 'Area of tentacles that damage and immobilize enemies',
        duration: 12
      }
    ]
  },
  {
    id: 'the-unblinking-eye',
    name: 'The Unblinking Eye',
    description: 'Conjure a giant eye that follows enemies and reveals knowledge.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    range: 28,
    duration: 20,
    morphs: [
      {
        id: 'the-languid-eye',
        name: 'The Languid Eye',
        description: 'Eye moves slower but applies Major Vulnerability.',
        changes: 'Applies Major Vulnerability and increases duration to 25 seconds.'
      },
      {
        id: 'the-tide-king-eye',
        name: 'The Tide King Eye',
        description: 'Eye explodes for massive damage when it expires.',
        changes: 'Explodes for 200% weapon damage when duration ends.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_vulnerability'],
    damage: {
      baseDamage: 580,
      scalingFactor: 0.5,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'tracking-eye',
        type: 'other',
        description: 'Summons eye that follows and damages enemies',
        duration: 20
      }
    ]
  },
  {
    id: 'abyssal-impact',
    name: 'Abyssal Impact',
    description: 'Tear open reality to strike enemies with eldritch force.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3240
    },
    range: 28,
    radius: 6,
    morphs: [
      {
        id: 'cataclysmic-rupture',
        name: 'Cataclysmic Rupture',
        description: 'Increases area and applies Major Breach.',
        changes: 'Larger area of effect and applies Major Breach for 15 seconds.'
      },
      {
        id: 'reality-rift',
        name: 'Reality Rift',
        description: 'Creates a lingering rift that continues to damage.',
        changes: 'Leaves behind area that damages enemies for 10 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_breach'],
    damage: {
      baseDamage: 1548,
      scalingFactor: 1.33,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'reality-tear',
        type: 'other',
        description: 'Tears reality to damage enemies in area'
      }
    ]
  },
  // Ultimate
  // ...existing code...
  // Passive Skills
  {
    id: 'crux-weaver',
    name: 'Crux Weaver',
    description: 'Increases your maximum Crux and Crux generation rate.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'crux-bonus',
        type: 'stat_increase',
        description: 'Maximum Crux increased by 1, Crux generation rate increased by 15%',
        value: 15,
        percentage: true
      }
    ]
  },
  {
    id: 'eldritch-insight',
    name: 'Eldritch Insight',
    description: 'Increases spell critical chance and spell damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'spell-critical',
        type: 'stat_increase',
        description: 'Spell Critical increased by 1096',
        value: 1096
      },
      {
        id: 'spell-damage',
        type: 'stat_increase',
        description: 'Spell Damage increased by 129',
        value: 129
      }
    ]
  },
  {
    id: 'tome-bearer-focus',
    name: 'Tome Bearer Focus',
    description: 'Reduces the cost of Herald of the Tome abilities.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Herald of the Tome ability costs reduced by 15%',
        value: 15,
        percentage: true
      }
    ]
  },
  {
    id: 'ancient-knowledge',
    name: 'Ancient Knowledge',
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
  },
  {
    id: 'fated-fortune',
    name: 'Fated Fortune',
    description: 'Grants chance to generate Ultimate when using class abilities.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-generation',
        type: 'other',
        description: '15% chance to generate 1 Ultimate when casting Herald of the Tome abilities',
        value: 15,
        percentage: true
      }
    ]
  }
];

// Soldier of Apocrypha Skills
const soldierOfApocryphaSkills: Skill[] = [
  {
    id: 'tome-bearer-armaments',
    name: 'Tome-Bearer\'s Armaments',
    description: 'Manifest weapons of forbidden knowledge to strike enemies.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 7,
    morphs: [
      {
        id: 'spawning-contingency',
        name: 'Spawning Contingency',
        description: 'Creates a tentacle that continues attacking.',
        changes: 'Spawns tentacle that attacks for 10 seconds after cast.'
      },
      {
        id: 'writhing-ruination',
        name: 'Writhing Ruination',
        description: 'Attacks multiple enemies and applies Minor Maim.',
        changes: 'Hits up to 3 enemies and applies Minor Maim for 15 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['minor_maim'],
    damage: {
      baseDamage: 1548,
      scalingFactor: 1.33,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'manifested-weapons',
        type: 'other',
        description: 'Conjures weapons that can spawn additional attacks'
      }
    ]
  },
  {
    id: 'gibbering-shield',
    name: 'Gibbering Shield',
    description: 'Manifest a shield of whispers that absorbs damage.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 4050
    },
    duration: 30,
    morphs: [
      {
        id: 'tidal-shield',
        name: 'Tidal Shield',
        description: 'When depleted, heals nearby allies.',
        changes: 'Heals you and nearby allies for 100% of damage absorbed when broken.'
      },
      {
        id: 'stubborn-sanctuary',
        name: 'Stubborn Sanctuary',
        description: 'Increases block effectiveness and grants stamina return.',
        changes: 'Reduces block cost by 50% and restores stamina when blocking.'
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
        id: 'absorb-shield',
        type: 'shield',
        description: 'Damage shield that can heal allies when depleted',
        value: 2323,
        duration: 30
      }
    ]
  },
  {
    id: 'cephaliarch-flail',
    name: 'Cephaliarch\'s Flail',
    description: 'Lash out with eldritch tendrils in a wide arc.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2970
    },
    radius: 8,
    morphs: [
      {
        id: 'barbed-trap',
        name: 'Barbed Trap',
        description: 'Leaves behind area that damages enemies.',
        changes: 'Creates area that damages enemies for 15 seconds.'
      },
      {
        id: 'caustic-arrow',
        name: 'Caustic Arrow',
        description: 'Becomes ranged and applies poisoned status.',
        changes: 'Ranged attack that applies poisoned for 10 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['poisoned'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'tentacle-lash',
        type: 'other',
        description: 'Wide area attack with eldritch tendrils'
      }
    ]
  },
  {
    id: 'impervious-runeward',
    name: 'Impervious Runeward',
    description: 'Create a protective barrier that reflects projectiles.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 4320
    },
    duration: 15,
    morphs: [
      {
        id: 'spiteful-runeward',
        name: 'Spiteful Runeward',
        description: 'Reflects damage back to attackers.',
        changes: 'Reflects 25% of damage taken back to attacker.'
      },
      {
        id: 'deep-guardian',
        name: 'Deep Guardian',
        description: 'Grants damage reduction and generates Crux.',
        changes: 'Reduces damage taken by 15% and generates Crux when hit.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'runic-barrier',
        type: 'other',
        description: 'Barrier that can reflect projectiles or reduce damage',
        duration: 15
      }
    ]
  },
  {
    id: 'pragmatic-fatecarver-ultimate',
    name: 'Temporal Maelstrom',
    description: 'Create a vortex of chaotic energy that warps time and space.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    radius: 12,
    duration: 15,
    morphs: [
      {
        id: 'devouring-tempest',
        name: 'Devouring Tempest',
        description: 'Pulls enemies in and deals more damage over time.',
        changes: 'Pulls enemies toward center and increases damage each second.'
      },
      {
        id: 'chronos-prison',
        name: 'Chronos Prison',
        description: 'Slows enemy movement and ability casting.',
        changes: 'Reduces enemy movement speed and ability casting speed by 70%.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['snare'],
    damage: {
      baseDamage: 348,
      scalingFactor: 0.3,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 15
    },
    effects: [
      {
        id: 'temporal-vortex',
        type: 'other',
        description: 'Vortex that manipulates time and pulls enemies',
        duration: 15
      }
    ]
  },
  {
    id: 'runic-onslaught',
    name: 'Runic Onslaught',
    description: 'Unleash a barrage of runic projectiles at enemies.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2970
    },
    range: 28,
    morphs: [
      {
        id: 'unstable-barrage',
        name: 'Unstable Barrage',
        description: 'Projectiles explode on impact for area damage.',
        changes: 'Each projectile explodes for area damage on impact.'
      },
      {
        id: 'seeking-runes',
        name: 'Seeking Runes',
        description: 'Projectiles track enemies and pierce through targets.',
        changes: 'Projectiles home in on enemies and can hit multiple targets.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 870,
      scalingFactor: 0.75,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'multiple-projectiles',
        type: 'other',
        description: 'Fires 5 runic projectiles at target'
      }
    ]
  },
  // Passive Skills
  {
    id: 'apocryphal-soldier',
    name: 'Apocryphal Soldier',
    description: 'Increases weapon damage and physical resistance.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'weapon-damage',
        type: 'stat_increase',
        description: 'Weapon Damage increased by 129',
        value: 129
      },
      {
        id: 'physical-resistance',
        type: 'stat_increase',
        description: 'Physical Resistance increased by 1320',
        value: 1320
      }
    ]
  },
  {
    id: 'eldritch-fortification',
    name: 'Eldritch Fortification',
    description: 'Increases maximum Health and Health recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-health',
        type: 'stat_increase',
        description: 'Maximum Health increased by 8%',
        value: 8,
        percentage: true
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
    id: 'battle-scarred-psyche',
    name: 'Battle-Scarred Psyche',
    description: 'Reduces the cost of Soldier of Apocrypha abilities and grants weapon critical.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Soldier of Apocrypha ability costs reduced by 15%',
        value: 15,
        percentage: true
      },
      {
        id: 'weapon-critical',
        type: 'stat_increase',
        description: 'Weapon Critical increased by 657',
        value: 657
      }
    ]
  },
  {
    id: 'forbidden-lexicon',
    name: 'Forbidden Lexicon',
    description: 'Grants chance to apply status effects with weapon attacks.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'status-chance',
        type: 'other',
        description: '10% chance to apply random status effect with weapon attacks',
        value: 10,
        percentage: true
      }
    ]
  },
  {
    id: 'tentacular-dexterity',
    name: 'Tentacular Dexterity',
    description: 'Increases maximum Stamina and Stamina recovery.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-stamina',
        type: 'stat_increase',
        description: 'Maximum Stamina increased by 8%',
        value: 8,
        percentage: true
      },
      {
        id: 'stamina-recovery',
        type: 'stat_increase',
        description: 'Stamina Recovery increased by 129',
        value: 129
      }
    ]
  }
];

// Curative Runeforms Skills
const curativeRuneformsSkills: Skill[] = [
  {
    id: 'healing-salve',
    name: 'Healing Salve',
    description: 'Apply a salve of healing energy to yourself or an ally.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4590
    },
    range: 28,
    morphs: [
      {
        id: 'life-amid-decay',
        name: 'Life Amid Decay',
        description: 'Heals more and grants healing over time.',
        changes: 'Increased healing and applies healing over time for 10 seconds.'
      },
      {
        id: 'necromantic-potency',
        name: 'Necromantic Potency',
        description: 'Heals based on nearby corpses and enemy health.',
        changes: 'Healing increases by 25% per nearby corpse or low-health enemy.'
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
        id: 'targeted-heal',
        type: 'other',
        description: 'Strong single-target heal with bonus scaling'
      }
    ]
  },
  {
    id: 'chakram-shield',
    name: 'Chakram Shield',
    description: 'Manifest rotating shields that protect and heal allies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 30,
    morphs: [
      {
        id: 'revolving-salvation',
        name: 'Revolving Salvation',
        description: 'Shields heal allies when they expire.',
        changes: 'When shields expire, they heal for 100% of remaining strength.'
      },
      {
        id: 'defensive-position',
        name: 'Defensive Position',
        description: 'Grants spell and physical resistance while active.',
        changes: 'Provides Major Ward and Major Resolve while shields persist.'
      }
    ],
    buffsApplied: ['major_ward', 'major_resolve'],
    debuffsApplied: [],
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'rotating-shields',
        type: 'shield',
        description: 'Multiple shields that orbit and protect allies',
        value: 1161,
        duration: 30
      }
    ]
  },
  {
    id: 'remedy-cascade',
    name: 'Remedy Cascade',
    description: 'Channel healing energy that bounces between allies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 5130
    },
    range: 28,
    morphs: [
      {
        id: 'curative-surge',
        name: 'Curative Surge',
        description: 'Each bounce increases healing and removes debuffs.',
        changes: 'Healing increases by 25% per bounce and removes 1 negative effect.'
      },
      {
        id: 'corrupting-pollen',
        name: 'Corrupting Pollen',
        description: 'Also damages enemies between allies.',
        changes: 'Damages enemies in path between allies and applies poisoned.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['poisoned'],
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0
    },
    damage: {
      baseDamage: 580,
      scalingFactor: 0.5,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'bouncing-heal',
        type: 'other',
        description: 'Healing that bounces between allies with increasing power'
      }
    ]
  },
  {
    id: 'geometrical-iris',
    name: 'Geometrical Iris',
    description: 'Create a complex sigil that provides various beneficial effects.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    radius: 10,
    duration: 20,
    morphs: [
      {
        id: 'escalating-runemend',
        name: 'Escalating Runemend',
        description: 'Effects grow stronger over time.',
        changes: 'Benefits increase by 5% every 2 seconds up to 50%.'
      },
      {
        id: 'runes-of-eldritch-decrepify',
        name: 'Runes of Eldritch Decrepify',
        description: 'Also weakens enemies in the area.',
        changes: 'Applies Minor Vulnerability and Minor Maim to enemies.'
      }
    ],
    buffsApplied: ['minor_intellect', 'minor_endurance'],
    debuffsApplied: ['minor_vulnerability', 'minor_maim'],
    healing: {
      baseHealing: 290,
      scalingFactor: 0.25,
      isHoT: true,
      hotTicks: 20
    },
    effects: [
      {
        id: 'beneficial-sigil',
        type: 'other',
        description: 'Area sigil that provides multiple benefits to allies',
        duration: 20
      }
    ]
  },
  {
    id: 'reconstructive-domain',
    name: 'Reconstructive Domain',
    description: 'Create a domain of healing that grows stronger with allies present.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 280
    },
    radius: 12,
    duration: 15,
    morphs: [
      {
        id: 'primordial-domain',
        name: 'Primordial Domain',
        description: 'Grants damage reduction and immunity to debuffs.',
        changes: '30% damage reduction and immunity to negative effects for allies.'
      },
      {
        id: 'vital-domain',
        name: 'Vital Domain',
        description: 'Resurrects fallen allies and increases healing.',
        changes: 'Automatically resurrects allies and provides 50% more healing.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 870,
      scalingFactor: 0.75,
      isHoT: true,
      hotTicks: 15
    },
    effects: [
      {
        id: 'healing-domain',
        type: 'other',
        description: 'Powerful healing area that can resurrect allies',
        duration: 15
      }
    ]
  },
  {
    id: 'runic-mending',
    name: 'Runic Mending',
    description: 'Inscribe healing runes that activate when allies take damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4320
    },
    range: 28,
    duration: 30,
    morphs: [
      {
        id: 'proactive-mending',
        name: 'Proactive Mending',
        description: 'Runes also provide damage shields.',
        changes: 'Grants damage shield equal to 50% of healing when activated.'
      },
      {
        id: 'symbiotic-mending',
        name: 'Symbiotic Mending',
        description: 'Healing also restores Magicka to the caster.',
        changes: 'Restores 10% of caster\'s Magicka when rune activates.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 1161,
      scalingFactor: 1.0
    },
    effects: [
      {
        id: 'reactive-heal',
        type: 'other',
        description: 'Places rune that triggers healing when ally takes damage',
        duration: 30
      }
    ]
  },
  // Passive Skills
  {
    id: 'curative-mastery',
    name: 'Curative Mastery',
    description: 'Increases healing done and spell critical healing.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'healing-done',
        type: 'stat_increase',
        description: 'Healing Done increased by 12%',
        value: 12,
        percentage: true
      },
      {
        id: 'critical-healing',
        type: 'stat_increase',
        description: 'Critical Healing increased by 12%',
        value: 12,
        percentage: true
      }
    ]
  },
  {
    id: 'restorative-expertise',
    name: 'Restorative Expertise',
    description: 'Reduces the cost of Curative Runeforms abilities.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'cost-reduction',
        type: 'stat_increase',
        description: 'Curative Runeforms ability costs reduced by 15%',
        value: 15,
        percentage: true
      }
    ]
  },
  {
    id: 'runic-empowerment',
    name: 'Runic Empowerment',
    description: 'Increases maximum Magicka and spell power.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'max-magicka',
        type: 'stat_increase',
        description: 'Maximum Magicka increased by 10%',
        value: 10,
        percentage: true
      },
      {
        id: 'spell-power',
        type: 'stat_increase',
        description: 'Spell Power increased by 129',
        value: 129
      }
    ]
  },
  {
    id: 'eldritch-recovery',
    name: 'Eldritch Recovery',
    description: 'Grants Magicka and Health recovery based on nearby allies.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'ally-recovery',
        type: 'other',
        description: 'Grants 100 Magicka and Health Recovery per nearby ally (max 4)',
        value: 100
      }
    ]
  },
  {
    id: 'protective-ward',
    name: 'Protective Ward',
    description: 'Grants chance to automatically shield allies when they take damage.',
    type: 'passive',
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'auto-shield',
        type: 'other',
        description: '15% chance to grant damage shield when ally takes damage over 15% of their health',
        value: 15,
        percentage: true
      }
    ]
  }
];

// Export Arcanist Skills
export const arcanistSkills = {
  heraldOfTheTome: heraldOfTheTomeSkills,
  soldierOfApocrypha: soldierOfApocryphaSkills,
  curativeRuneforms: curativeRuneformsSkills
};

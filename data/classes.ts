// ESO Classes and Subclasses Data Structure
import { Skill } from './skills';
import { dragonknightSkills } from './dragonknight-skills';
import { sorcererSkills } from './sorcerer-skills';
import { nightbladeSkills } from './nightblade-skills';
import { templarSkills, necromancerSkills, arcanistSkills } from './placeholder-skills';

export interface ESOClass {
  id: string;
  name: string;
  description: string;
  subclasses: ESOSubclass[];
}

export interface ESOSubclass {
  id: string;
  classId: string;
  name: string;
  description: string;
  archetype: 'DPS' | 'Healer' | 'Tank' | 'Hybrid';
  passiveBonuses: PassiveBonus[];
  skillLines: SkillLine[];
}

export interface PassiveBonus {
  id: string;
  name: string;
  description: string;
  effect: string;
}

export interface SkillLine {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

// ESO Classes Data
export const esoClasses: ESOClass[] = [
  {
    id: 'dragonknight',
    name: 'Dragonknight',
    description: 'Masters of fire and earth magic, excelling in both offense and defense.',
    subclasses: [
      {
        id: 'draconic-power',
        classId: 'dragonknight',
        name: 'Draconic Power',
        description: 'Defensive abilities focused on protection and crowd control.',
        archetype: 'Tank',
        passiveBonuses: [
          {
            id: 'elder-dragon',
            name: 'Elder Dragon',
            description: 'Increases Health Recovery and Ultimate generation.',
            effect: '+6% Health Recovery, +3 Ultimate when taking damage (8s cooldown)'
          },
          {
            id: 'scaled-armor',
            name: 'Scaled Armor',
            description: 'Increases Spell and Physical Resistance.',
            effect: '+1320 Physical and Spell Resistance'
          }
        ],
        skillLines: [
          {
            id: 'draconic-power-skills',
            name: 'Draconic Power Skills',
            description: 'Defensive abilities and crowd control',
            skills: dragonknightSkills.draconicPower
          }
        ]
      },
      {
        id: 'ardent-flame',
        classId: 'dragonknight',
        name: 'Ardent Flame',
        description: 'Fire-based offensive abilities with high damage potential.',
        archetype: 'DPS',
        passiveBonuses: [
          {
            id: 'combustion',
            name: 'Combustion',
            description: 'Increases Weapon and Spell Damage after killing an enemy.',
            effect: '+3% Weapon and Spell Damage for 20s after killing enemy'
          },
          {
            id: 'warmth',
            name: 'Warmth',
            description: 'Increases Fire Damage and reduces Fire Damage taken.',
            effect: '+7% Fire Damage dealt, -7% Fire Damage taken'
          }
        ],
        skillLines: [
          {
            id: 'ardent-flame-skills',
            name: 'Ardent Flame Skills',
            description: 'Fire-based offensive abilities',
            skills: dragonknightSkills.ardentFlame
          }
        ]
      },
      {
        id: 'earthen-heart',
        classId: 'dragonknight',
        name: 'Earthen Heart',
        description: 'Earth magic focused on support and battlefield control.',
        archetype: 'Hybrid',
        passiveBonuses: [
          {
            id: 'eternal-mountain',
            name: 'Eternal Mountain',
            description: 'Increases healing received and reduces damage taken.',
            effect: '+6% Healing received, -3% Damage taken while Earthen Heart ability slotted'
          },
          {
            id: 'battle-roar',
            name: 'Battle Roar',
            description: 'Restore resources when casting Ultimate abilities.',
            effect: 'Restore 15% Max Health, Magicka, and Stamina when Ultimate cast'
          }
        ],
        skillLines: [
          {
            id: 'earthen-heart-skills',
            name: 'Earthen Heart Skills',
            description: 'Earth magic and support abilities',
            skills: dragonknightSkills.earthenHeart
          }
        ]
      }
    ]
  },
  {
    id: 'sorcerer',
    name: 'Sorcerer',
    description: 'Masters of storm and dark magic, wielding lightning and summoning creatures.',
    subclasses: [
      {
        id: 'dark-magic',
        classId: 'sorcerer',
        name: 'Dark Magic',
        description: 'Crowd control and utility magic with debuffing capabilities.',
        archetype: 'Hybrid',
        passiveBonuses: [
          {
            id: 'blood-magic',
            name: 'Blood Magic',
            description: 'Increases Health and Magicka Recovery.',
            effect: '+8% Health Recovery, +10% Magicka Recovery'
          },
          {
            id: 'unholy-knowledge',
            name: 'Unholy Knowledge',
            description: 'Increases Maximum Magicka.',
            effect: '+8% Maximum Magicka'
          }
        ],
        skillLines: [
          {
            id: 'dark-magic-skills',
            name: 'Dark Magic Skills',
            description: 'Crowd control and utility magic',
            skills: sorcererSkills.darkMagic
          }
        ]
      },
      {
        id: 'daedric-summoning',
        classId: 'sorcerer',
        name: 'Daedric Summoning',
        description: 'Summoning magic to call forth Daedric creatures and weapons.',
        archetype: 'DPS',
        passiveBonuses: [
          {
            id: 'rebate',
            name: 'Rebate',
            description: 'Reduces the cost of Summon spells.',
            effect: '-15% cost of Daedric Summoning abilities'
          },
          {
            id: 'power-stone',
            name: 'Power Stone',
            description: 'Increases Maximum Health and Stamina.',
            effect: '+8% Maximum Health and Stamina'
          }
        ],
        skillLines: [
          {
            id: 'daedric-summoning-skills',
            name: 'Daedric Summoning Skills',
            description: 'Summon creatures and weapons',
            skills: sorcererSkills.daedricSummoning
          }
        ]
      },
      {
        id: 'storm-calling',
        classId: 'sorcerer',
        name: 'Storm Calling',
        description: 'Lightning magic for high burst damage and mobility.',
        archetype: 'DPS',
        passiveBonuses: [
          {
            id: 'capacitor',
            name: 'Capacitor',
            description: 'Increases Magicka Recovery and Shock Damage.',
            effect: '+10% Magicka Recovery, +5% Shock Damage'
          },
          {
            id: 'expert-mage',
            name: 'Expert Mage',
            description: 'Reduces spell costs and increases Spell Critical.',
            effect: '+8% Spell Critical, -3% Magicka cost of spells'
          }
        ],
        skillLines: [
          {
            id: 'storm-calling-skills',
            name: 'Storm Calling Skills',
            description: 'Lightning magic and mobility',
            skills: sorcererSkills.stormCalling
          }
        ]
      }
    ]
  },
  {
    id: 'nightblade',
    name: 'Nightblade',
    description: 'Stealthy assassins who blend shadow magic with martial prowess.',
    subclasses: [
      {
        id: 'assassination',
        classId: 'nightblade',
        name: 'Assassination',
        description: 'Stealth and critical strike focused abilities.',
        archetype: 'DPS',
        passiveBonuses: [
          {
            id: 'master-assassin',
            name: 'Master Assassin',
            description: 'Increases Weapon and Spell Critical from Stealth.',
            effect: '+10% Weapon and Spell Critical from Stealth or Invisibility'
          },
          {
            id: 'executioner',
            name: 'Executioner',
            description: 'Increases damage against low health enemies.',
            effect: '+10% damage to enemies below 25% Health'
          }
        ],
        skillLines: [
          {
            id: 'assassination-skills',
            name: 'Assassination Skills',
            description: 'Stealth and critical strike abilities',
            skills: nightbladeSkills.assassination
          }
        ]
      },
      {
        id: 'shadow',
        classId: 'nightblade',
        name: 'Shadow',
        description: 'Shadow magic for mobility and defense.',
        archetype: 'Hybrid',
        passiveBonuses: [
          {
            id: 'refreshing-shadows',
            name: 'Refreshing Shadows',
            description: 'Increases Health, Magicka, and Stamina Recovery.',
            effect: '+15% Health, Magicka, and Stamina Recovery'
          },
          {
            id: 'shadow-barrier',
            name: 'Shadow Barrier',
            description: 'Increases Spell and Physical Resistance.',
            effect: '+2640 Spell and Physical Resistance for 6s after Shadow ability'
          }
        ],
        skillLines: [
          {
            id: 'shadow-skills',
            name: 'Shadow Skills',
            description: 'Shadow magic for mobility and defense',
            skills: nightbladeSkills.shadow
          }
        ]
      },
      {
        id: 'siphoning',
        classId: 'nightblade',
        name: 'Siphoning',
        description: 'Life steal and resource management abilities.',
        archetype: 'Healer',
        passiveBonuses: [
          {
            id: 'catalyst',
            name: 'Catalyst',
            description: 'Increases potion effectiveness and Ultimate generation.',
            effect: '+30% potion effectiveness, +20% Ultimate generation from potions'
          },
          {
            id: 'soul-siphoner',
            name: 'Soul Siphoner',
            description: 'Increases Healing Done and Maximum Magicka.',
            effect: '+3% Healing Done, +8% Maximum Magicka'
          }
        ],
        skillLines: [
          {
            id: 'siphoning-skills',
            name: 'Siphoning Skills',
            description: 'Life steal and resource management',
            skills: nightbladeSkills.siphoning
          }
        ]
      }
    ]
  },
  {
    id: 'templar',
    name: 'Templar',
    description: 'Holy warriors who wield the power of light for healing and combat.',
    subclasses: [
      {
        id: 'aedric-spear',
        classId: 'templar',
        name: 'Aedric Spear',
        description: 'Light-based offensive abilities with piercing attacks.',
        archetype: 'DPS',
        passiveBonuses: [
          {
            id: 'balanced-warrior',
            name: 'Balanced Warrior',
            description: 'Increases Weapon and Spell Damage.',
            effect: '+129 Weapon and Spell Damage'
          },
          {
            id: 'piercing-spear',
            name: 'Piercing Spear',
            description: 'Increases Critical Damage and Penetration.',
            effect: '+12% Critical Damage, +2974 Physical and Spell Penetration'
          }
        ],
        skillLines: [
          {
            id: 'aedric-spear-skills',
            name: 'Aedric Spear Skills',
            description: 'Light-based offensive abilities',
            skills: templarSkills.aedricSpear
          }
        ]
      },
      {
        id: 'dawns-wrath',
        classId: 'templar',
        name: "Dawn's Wrath",
        description: 'Solar magic for area damage and burning effects.',
        archetype: 'DPS',
        passiveBonuses: [
          {
            id: 'enduring-rays',
            name: 'Enduring Rays',
            description: 'Increases damage over time effects.',
            effect: '+20% damage and duration of damage over time effects'
          },
          {
            id: 'illuminate',
            name: 'Illuminate',
            description: 'Increases Spell Critical and reduces costs.',
            effect: '+12% Spell Critical, -8% Magicka cost of Dawn\'s Wrath abilities'
          }
        ],
        skillLines: []
      },
      {
        id: 'restoring-light',
        classId: 'templar',
        name: 'Restoring Light',
        description: 'Healing and support magic with protective abilities.',
        archetype: 'Healer',
        passiveBonuses: [
          {
            id: 'mending',
            name: 'Mending',
            description: 'Increases Healing Done.',
            effect: '+12% Healing Done'
          },
          {
            id: 'sacred-ground',
            name: 'Sacred Ground',
            description: 'Increases healing and reduces damage in consecrated ground.',
            effect: '+30% Healing Done and -30% damage taken in Restoring Light areas'
          }
        ],
        skillLines: []
      }
    ]
  },
  {
    id: 'warden',
    name: 'Warden',
    description: 'Nature-based class that commands animals, ice, and plant magic.',
    subclasses: [
      {
        id: 'animal-companions',
        classId: 'warden',
        name: 'Animal Companions',
        description: 'Summon and enhance animal allies for combat.',
        archetype: 'DPS',
        passiveBonuses: [
          {
            id: 'bond-with-nature',
            name: 'Bond with Nature',
            description: 'Increases Maximum Magicka and Stamina.',
            effect: '+6% Maximum Magicka and Stamina'
          },
          {
            id: 'savage-beast',
            name: 'Savage Beast',
            description: 'Increases Weapon and Spell Critical.',
            effect: '+2190 Weapon and Spell Critical'
          }
        ],
        skillLines: []
      },
      {
        id: 'green-balance',
        classId: 'warden',
        name: 'Green Balance',
        description: 'Plant-based healing and nature magic.',
        archetype: 'Healer',
        passiveBonuses: [
          {
            id: 'nature-gift',
            name: "Nature's Gift",
            description: 'Increases Ultimate generation and Healing Done.',
            effect: '+6 Ultimate when Green Balance ability heals, +6% Healing Done'
          },
          {
            id: 'emerald-moss',
            name: 'Emerald Moss',
            description: 'Increases Health Recovery and Maximum Health.',
            effect: '+250 Health Recovery, +8% Maximum Health'
          }
        ],
        skillLines: []
      },
      {
        id: 'winters-embrace',
        classId: 'warden',
        name: "Winter's Embrace",
        description: 'Ice magic for defense and crowd control.',
        archetype: 'Tank',
        passiveBonuses: [
          {
            id: 'ice-aura',
            name: 'Ice Aura',
            description: 'Nearby enemies take frost damage and move slower.',
            effect: 'Nearby enemies take 144 Frost Damage per second and move 30% slower'
          },
          {
            id: 'icy-conjuror',
            name: 'Icy Conjuror',
            description: 'Increases damage shield strength and Frost Damage.',
            effect: '+8% damage shield strength, +12% Frost Damage'
          }
        ],
        skillLines: []
      }
    ]
  },
  {
    id: 'necromancer',
    name: 'Necromancer',
    description: 'Masters of death magic who command undead and manipulate life force.',
    subclasses: [
      {
        id: 'grave-lord',
        classId: 'necromancer',
        name: 'Grave Lord',
        description: 'Offensive necromancy focused on damage and debuffs.',
        archetype: 'DPS',
        passiveBonuses: [
          {
            id: 'death-gleaning',
            name: 'Death Gleaning',
            description: 'Generate Ultimate when enemies die nearby.',
            effect: '+10 Ultimate when enemy dies within 16 meters'
          },
          {
            id: 'soul-reaping',
            name: 'Soul Reaping',
            description: 'Increases damage based on enemy corpses nearby.',
            effect: '+3% damage per corpse nearby (max 15%)'
          }
        ],
        skillLines: [
          {
            id: 'grave-lord-skills',
            name: 'Grave Lord Skills',
            description: 'Offensive necromancy with death magic and undead minions',
            skills: necromancerSkills.graveLord
          }
        ]
      },
      {
        id: 'bone-tyrant',
        classId: 'necromancer',
        name: 'Bone Tyrant',
        description: 'Defensive necromancy with bone armor and crowd control.',
        archetype: 'Tank',
        passiveBonuses: [
          {
            id: 'disdain-harm',
            name: 'Disdain Harm',
            description: 'Reduces damage taken and increases Health Recovery.',
            effect: '-15% damage from damage over time, +200 Health Recovery'
          },
          {
            id: 'undead-confederate',
            name: 'Undead Confederate',
            description: 'Increases resistances near corpses.',
            effect: '+1320 Physical and Spell Resistance per corpse nearby'
          }
        ],
        skillLines: [
          {
            id: 'bone-tyrant-skills',
            name: 'Bone Tyrant Skills',
            description: 'Defensive necromancy with bone armor and crowd control',
            skills: necromancerSkills.boneTyrant
          }
        ]
      },
      {
        id: 'living-death',
        classId: 'necromancer',
        name: 'Living Death',
        description: 'Life manipulation for healing and resurrection magic.',
        archetype: 'Healer',
        passiveBonuses: [
          {
            id: 'curative-curse',
            name: 'Curative Curse',
            description: 'Healing abilities remove negative effects.',
            effect: 'Living Death abilities remove 1 negative effect when healing'
          },
          {
            id: 'last-gasp',
            name: 'Last Gasp',
            description: 'Increases healing when Health is low.',
            effect: '+30% Healing Done when below 50% Health'
          }
        ],
        skillLines: [
          {
            id: 'living-death-skills',
            name: 'Living Death Skills',
            description: 'Life manipulation for healing and resurrection magic',
            skills: necromancerSkills.livingDeath
          }
        ]
      }
    ]
  },
  {
    id: 'arcanist',
    name: 'Arcanist',
    description: 'Scholars of forbidden knowledge who wield eldritch magic and cosmic power.',
    subclasses: [
      {
        id: 'herald-of-the-tome',
        classId: 'arcanist',
        name: 'Herald of the Tome',
        description: 'Offensive magic channeling otherworldly knowledge.',
        archetype: 'DPS',
        passiveBonuses: [
          {
            id: 'ancient-knowledge',
            name: 'Ancient Knowledge',
            description: 'Increases Experience and gold gained.',
            effect: '+5% Experience and gold gained'
          },
          {
            id: 'eldritch-insight',
            name: 'Eldritch Insight',
            description: 'Increases Maximum Magicka and Spell Damage.',
            effect: '+8% Maximum Magicka, +129 Spell Damage'
          }
        ],
        skillLines: [
          {
            id: 'herald-of-the-tome-skills',
            name: 'Herald of the Tome Skills',
            description: 'Offensive eldritch magic and Crux generation',
            skills: arcanistSkills.heraldOfTheTome
          }
        ]
      },
      {
        id: 'soldier-of-apocrypha',
        classId: 'arcanist',
        name: 'Soldier of Apocrypha',
        description: 'Defensive magic using forbidden knowledge for protection.',
        archetype: 'Tank',
        passiveBonuses: [
          {
            id: 'psychic-lesion',
            name: 'Psychic Lesion',
            description: 'Enemies take damage when hitting you.',
            effect: 'Attacking enemies take 1200 Magic Damage (1s cooldown)'
          },
          {
            id: 'tome-bearer',
            name: 'Tome Bearer',
            description: 'Increases Health and reduces ability costs.',
            effect: '+8% Maximum Health, -8% ability costs'
          }
        ],
        skillLines: [
          {
            id: 'soldier-of-apocrypha-skills',
            name: 'Soldier of Apocrypha Skills',
            description: 'Defensive eldritch magic and forbidden armaments',
            skills: arcanistSkills.soldierOfApocrypha
          }
        ]
      },
      {
        id: 'curative-runeforms',
        classId: 'arcanist',
        name: 'Curative Runeforms',
        description: 'Healing magic derived from mystical runes and cosmic energy.',
        archetype: 'Healer',
        passiveBonuses: [
          {
            id: 'recuperative-treatise',
            name: 'Recuperative Treatise',
            description: 'Increases Healing Done and Magicka Recovery.',
            effect: '+8% Healing Done, +15% Magicka Recovery'
          },
          {
            id: 'tranquil-spirit',
            name: 'Tranquil Spirit',
            description: 'Reduces damage taken and increases healing received.',
            effect: '-5% damage taken, +12% healing received'
          }
        ],
        skillLines: [
          {
            id: 'curative-runeforms-skills',
            name: 'Curative Runeforms Skills',
            description: 'Healing magic and runic empowerment',
            skills: arcanistSkills.curativeRuneforms
          }
        ]
      }
    ]
  }
];

// Guild and World Skill Lines for ESO
import { Skill } from './skills';

export interface SkillLine {
  id: string;
  name: string;
  description: string;
  category: 'Guild' | 'World' | 'PvP' | 'Weapon';
  unlockRequirement?: string;
  skills: Skill[];
}

// Mages Guild Skills
const magesGuildSkills: Skill[] = [
  {
    id: 'magelight',
    name: 'Magelight',
    description: 'Conjure a ball of light that reveals stealthed enemies and increases your spell critical rating.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    duration: 30,
    morphs: [
      {
        id: 'inner-light',
        name: 'Inner Light',
        description: 'Becomes a toggle that increases max Magicka and Spell Critical.',
        changes: 'Toggle ability, increases max Magicka by 5% and Spell Critical by 2191.'
      },
      {
        id: 'radiant-magelight',
        name: 'Radiant Magelight',
        description: 'Increases the radius and reduces damage from stealth attacks.',
        changes: 'Larger detection radius, reduces damage from stealth attacks by 50%.'
      }
    ],
    buffsApplied: ['major_prophecy'],
    debuffsApplied: [],
    effects: [
      {
        id: 'stealth-detection',
        type: 'other',
        description: 'Reveals stealthed enemies within 12 meters'
      }
    ]
  },
  {
    id: 'equilibrium',
    name: 'Equilibrium',
    description: 'Trade Health for Magicka, converting your vital essence into magical energy.',
    type: 'active',
    resourceCost: {
      type: 'health',
      amount: 2613
    },
    morphs: [
      {
        id: 'spell-symmetry',
        name: 'Spell Symmetry',
        description: 'Increases Spell Damage based on missing Health.',
        changes: 'Grants Spell Damage bonus based on your missing Health.'
      },
      {
        id: 'magicka-aid',
        name: 'Magicka Aid',
        description: 'Also restores Magicka to nearby allies.',
        changes: 'Restores Magicka to up to 2 nearby allies as well.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'health-to-magicka',
        type: 'other',
        description: 'Converts Health to Magicka'
      }
    ]
  },
  {
    id: 'meteor',
    name: 'Meteor',
    description: 'Call down a meteor to devastate the target area, dealing massive damage.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    range: 28,
    radius: 8,
    morphs: [
      {
        id: 'ice-comet',
        name: 'Ice Comet',
        description: 'Converts to frost damage and applies debuffs to enemies.',
        changes: 'Deals frost damage and applies Major Breach to enemies.'
      },
      {
        id: 'shooting-star',
        name: 'Shooting Star',
        description: 'Generates Ultimate for each enemy hit.',
        changes: 'Restores 12 Ultimate for each enemy hit by the initial impact.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['major_breach'],
    damage: {
      baseDamage: 2323,
      scalingFactor: 2.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'area-devastation',
        type: 'other',
        description: 'Massive area damage with knockdown effect'
      }
    ]
  }
];

// Fighters Guild Skills
const fightersGuildSkills: Skill[] = [
  {
    id: 'circle-of-protection',
    name: 'Circle of Protection',
    description: 'Create a protective circle that grants damage reduction and removes negative effects.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 4590
    },
    duration: 10,
    radius: 8,
    morphs: [
      {
        id: 'turn-evil',
        name: 'Turn Evil',
        description: 'Fears undead and Daedric enemies and grants spell resistance.',
        changes: 'Fears undead/Daedric enemies, grants Major Spell Resistance.'
      },
      {
        id: 'ring-of-preservation',
        name: 'Ring of Preservation',
        description: 'Increases duration and grants health recovery.',
        changes: 'Lasts longer and provides health recovery to allies in the area.'
      }
    ],
    buffsApplied: ['major_spell_resistance'],
    debuffsApplied: [],
    effects: [
      {
        id: 'damage-reduction',
        type: 'stat_increase',
        description: 'Reduces damage taken by 30%',
        value: 30,
        percentage: true,
        duration: 10
      }
    ]
  },
  {
    id: 'silver-bolts',
    name: 'Silver Bolts',
    description: 'Fire a blessed projectile that deals extra damage to undead and Daedric enemies.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 28,
    morphs: [
      {
        id: 'silver-leash',
        name: 'Silver Leash',
        description: 'Pulls the enemy to you if they are undead or Daedric.',
        changes: 'Pulls undead/Daedric enemies to you, deals damage to all enemies.'
      },
      {
        id: 'silver-shards',
        name: 'Silver Shards',
        description: 'Projectile fragments on impact, hitting nearby enemies.',
        changes: 'Fragments hit up to 2 additional nearby enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'bonus-vs-undead',
        type: 'other',
        description: '+20% damage vs undead and Daedric enemies',
        value: 20,
        percentage: true
      }
    ]
  },
  {
    id: 'dawnbreaker',
    name: 'Dawnbreaker',
    description: 'Arm yourself with Meridia\'s sacred sword, dealing massive damage to undead.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 125
    },
    range: 7,
    morphs: [
      {
        id: 'dawnbreaker-of-smiting',
        name: 'Dawnbreaker of Smiting',
        description: 'Increases damage and causes fear to nearby undead.',
        changes: 'Higher damage, fears undead enemies within 8 meters.'
      },
      {
        id: 'flawless-dawnbreaker',
        name: 'Flawless Dawnbreaker',
        description: 'Passive weapon damage increase when slotted.',
        changes: 'Grants 300 Weapon Damage while slotted on either bar.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 2323,
      scalingFactor: 2.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'bonus-vs-undead-ultimate',
        type: 'other',
        description: '+40% damage vs undead enemies',
        value: 40,
        percentage: true
      }
    ]
  }
];

// Thieves Guild Skills
const thievesGuildSkills: Skill[] = [
  {
    id: 'finders-keepers',
    name: 'Finders Keepers',
    description: 'Marks an enemy, increasing damage against them and revealing their location.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2700
    },
    range: 28,
    duration: 60,
    morphs: [
      {
        id: 'thieves-eye',
        name: 'Thieves Eye',
        description: 'Also reveals treasure chests and increases movement speed.',
        changes: 'Shows nearby treasure, grants Minor Expedition.'
      },
      {
        id: 'perfect-strike',
        name: 'Perfect Strike',
        description: 'Guarantees critical hit on next attack against marked target.',
        changes: 'Next attack against target is automatically a critical hit.'
      }
    ],
    buffsApplied: ['minor_expedition'],
    debuffsApplied: ['minor_vulnerability'],
    effects: [
      {
        id: 'target-mark',
        type: 'other',
        description: 'Marks enemy for increased damage',
        duration: 60
      }
    ]
  }
];

// Dark Brotherhood Skills
const darkBrotherhoodSkills: Skill[] = [
  {
    id: 'blade-of-woe',
    name: 'Blade of Woe',
    description: 'Instantly kill an enemy from stealth or deal massive damage in combat.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 0
    },
    morphs: [
      {
        id: 'spectral-bow',
        name: 'Spectral Bow',
        description: 'Ranged version that can be used from stealth at distance.',
        changes: 'Can be used at range, applies poison damage over time.'
      },
      {
        id: 'shadow-rider',
        name: 'Shadow Rider',
        description: 'Increases movement speed after successful assassination.',
        changes: 'Grants Major Expedition for 10 seconds after kill.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 5000,
      scalingFactor: 4.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'stealth-execute',
        type: 'other',
        description: 'Instant kill from stealth, massive damage in combat'
      }
    ]
  }
];

// Soul Magic Skills
const soulMagicSkills: Skill[] = [
  {
    id: 'soul-trap',
    name: 'Soul Trap',
    description: 'Curses an enemy, dealing damage over time and filling a soul gem if they die.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    duration: 20,
    morphs: [
      {
        id: 'soul-splitting-trap',
        name: 'Soul Splitting Trap',
        description: 'When target dies, spreads to another nearby enemy.',
        changes: 'Spreads to nearby enemy when original target dies.'
      },
      {
        id: 'soul-leech-trap',
        name: 'Soul Leech Trap',
        description: 'Heals you when it deals damage.',
        changes: 'Each damage tick heals you for 25% of damage dealt.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'soul-gem-fill',
        type: 'other',
        description: 'Fills empty soul gem if enemy dies while cursed'
      }
    ]
  }
];

// Assault (PvP) Skills
const assaultSkills: Skill[] = [
  {
    id: 'rapid-maneuver',
    name: 'Rapid Maneuver',
    description: 'Grants Major Expedition to you and nearby allies, increasing movement speed.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 5130
    },
    duration: 30,
    radius: 12,
    morphs: [
      {
        id: 'retreating-maneuver',
        name: 'Retreating Maneuver',
        description: 'Also removes snares and immobilizations.',
        changes: 'Removes and grants immunity to snares and immobilizations.'
      },
      {
        id: 'charging-maneuver',
        name: 'Charging Maneuver',
        description: 'Increases damage of next attack after sprinting.',
        changes: 'Next attack after sprinting deals 40% more damage.'
      }
    ],
    buffsApplied: ['major_expedition'],
    debuffsApplied: [],
    effects: [
      {
        id: 'group-speed',
        type: 'stat_increase',
        description: '+30% movement speed for group',
        value: 30,
        percentage: true,
        duration: 30
      }
    ]
  },
  {
    id: 'war-horn',
    name: 'War Horn',
    description: 'Sound a war horn that grants Major Force to nearby allies.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    radius: 20,
    duration: 20,
    morphs: [
      {
        id: 'sturdy-horn',
        name: 'Sturdy Horn',
        description: 'Also grants damage shields to affected allies.',
        changes: 'Grants damage shields equal to 100% of max Health.'
      },
      {
        id: 'aggressive-horn',
        name: 'Aggressive Horn',
        description: 'Increases critical damage bonus and duration.',
        changes: 'Increases duration and critical damage bonus.'
      }
    ],
    buffsApplied: ['major_force'],
    debuffsApplied: [],
    effects: [
      {
        id: 'group-critical',
        type: 'stat_increase',
        description: '+40% critical damage for group',
        value: 40,
        percentage: true,
        duration: 20
      }
    ]
  }
];

// Support (PvP) Skills
const supportSkills: Skill[] = [
  {
    id: 'siege-shield',
    name: 'Siege Shield',
    description: 'Create a protective barrier that absorbs siege weapon damage.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 6480
    },
    duration: 30,
    radius: 8,
    morphs: [
      {
        id: 'absorption-field',
        name: 'Absorption Field',
        description: 'Absorbs more damage and converts it to healing.',
        changes: 'Converts absorbed damage into healing for allies in area.'
      },
      {
        id: 'siege-weapon-shield',
        name: 'Siege Weapon Shield',
        description: 'Specifically protects against siege weapons.',
        changes: 'Provides near immunity to siege weapon damage.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'siege-protection',
        type: 'other',
        description: 'Absorbs siege weapon damage',
        duration: 30
      }
    ]
  }
];

// Vampire Skills
const vampireSkills: Skill[] = [
  {
    id: 'drain-essence',
    name: 'Drain Essence',
    description: 'Channel to drain the life force from an enemy, healing yourself.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 3780
    },
    range: 28,
    duration: 3,
    morphs: [
      {
        id: 'exhilarating-drain',
        name: 'Exhilarating Drain',
        description: 'Also restores Magicka and Stamina.',
        changes: 'Restores Magicka and Stamina while channeling.'
      },
      {
        id: 'accelerating-drain',
        name: 'Accelerating Drain',
        description: 'Heals for more and grants movement speed.',
        changes: 'Increases healing and grants Major Expedition when finished.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 348,
      scalingFactor: 0.3,
      isHoT: true,
      hotTicks: 3
    },
    effects: [
      {
        id: 'life-drain',
        type: 'other',
        description: 'Channels to drain enemy life force',
        duration: 3
      }
    ]
  },
  {
    id: 'bat-swarm',
    name: 'Bat Swarm',
    description: 'Transform into a swarm of bats, becoming immune to damage and healing over time.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 5,
    morphs: [
      {
        id: 'devouring-swarm',
        name: 'Devouring Swarm',
        description: 'Deals damage to nearby enemies while active.',
        changes: 'Damages nearby enemies and heals based on enemies hit.'
      },
      {
        id: 'clouding-swarm',
        name: 'Clouding Swarm',
        description: 'Grants invisibility after transformation ends.',
        changes: 'Grants invisibility and movement speed when effect ends.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 580,
      scalingFactor: 0.5,
      isHoT: true,
      hotTicks: 5
    },
    effects: [
      {
        id: 'damage-immunity',
        type: 'other',
        description: 'Immune to damage while active',
        duration: 5
      }
    ]
  }
];

// Werewolf Skills
const werewolfSkills: Skill[] = [
  {
    id: 'pounce',
    name: 'Pounce',
    description: 'Leap to target enemy, dealing damage and stunning them.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 22,
    morphs: [
      {
        id: 'brutal-pounce',
        name: 'Brutal Pounce',
        description: 'Deals more damage and applies bleeding.',
        changes: 'Higher damage and applies hemorrhaging for 10 seconds.'
      },
      {
        id: 'feral-pounce',
        name: 'Feral Pounce',
        description: 'Increases movement speed and sets enemies off balance.',
        changes: 'Grants movement speed and sets target off balance.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['off_balance'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'gap-closer',
        type: 'other',
        description: 'Leaps to target with stun effect'
      }
    ]
  },
  {
    id: 'werewolf-transformation',
    name: 'Werewolf Transformation',
    description: 'Transform into a werewolf, gaining new abilities and increased stats.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 30,
    morphs: [
      {
        id: 'pack-leader',
        name: 'Pack Leader',
        description: 'Summons wolf companions to fight beside you.',
        changes: 'Summons 2 wolf companions for the duration.'
      },
      {
        id: 'berserker',
        name: 'Berserker',
        description: 'Increases damage and extends duration on kills.',
        changes: 'Higher damage, killing enemies extends transformation.'
      }
    ],
    buffsApplied: ['major_brutality'],
    debuffsApplied: [],
    effects: [
      {
        id: 'werewolf-form',
        type: 'other',
        description: 'Transforms into werewolf with new abilities',
        duration: 30
      }
    ]
  }
];

// Weapon Skill Lines

// Two Handed Weapon Skills
const twoHandedSkills: Skill[] = [
  {
    id: 'uppercut',
    name: 'Uppercut',
    description: 'Wind up and swing your two handed weapon with all your might.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 7,
    morphs: [
      {
        id: 'dizzying-swing',
        name: 'Dizzying Swing',
        description: 'Sets enemies off balance and deals more damage to off balance enemies.',
        changes: 'Sets enemies off balance, +20% damage to off balance targets.'
      },
      {
        id: 'wrecking-blow',
        name: 'Wrecking Blow',
        description: 'Deals more damage and ignores enemy resistances.',
        changes: 'Higher damage and ignores 50% of enemy armor.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['off_balance'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'charge-attack',
        type: 'other',
        description: 'Channeled heavy attack with knockdown'
      }
    ]
  },
  {
    id: 'cleave',
    name: 'Cleave',
    description: 'Strike all enemies in front of you with a sweeping attack.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    radius: 6,
    morphs: [
      {
        id: 'brawler',
        name: 'Brawler',
        description: 'Grants damage shield based on enemies hit.',
        changes: 'Grants damage shield for each enemy hit.'
      },
      {
        id: 'carve',
        name: 'Carve',
        description: 'Applies bleeding damage over time to all enemies hit.',
        changes: 'Applies hemorrhaging for 20 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'area-sweep',
        type: 'other',
        description: 'Hits all enemies in front of you'
      }
    ]
  },
  {
    id: 'onslaught',
    name: 'Onslaught',
    description: 'Charge forward with unstoppable force, dealing massive damage.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    range: 28,
    morphs: [
      {
        id: 'berserker-rage',
        name: 'Berserker Rage',
        description: 'Increases damage done and reduces damage taken after charge.',
        changes: 'Grants Major Berserk and Major Protection for 8 seconds.'
      },
      {
        id: 'reckless-swing',
        name: 'Reckless Swing',
        description: 'Deals more damage but increases damage taken.',
        changes: 'Higher damage but applies Minor Vulnerability to self.'
      }
    ],
    buffsApplied: ['major_berserk'],
    debuffsApplied: [],
    damage: {
      baseDamage: 2905,
      scalingFactor: 2.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'charge-ultimate',
        type: 'other',
        description: 'Unstoppable charge that deals massive damage'
      }
    ]
  }
];

// One Hand and Shield Skills
const oneHandShieldSkills: Skill[] = [
  {
    id: 'puncture',
    name: 'Puncture',
    description: 'Thrust your weapon to taunt the enemy and apply Major Breach.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 7,
    morphs: [
      {
        id: 'pierce-armor',
        name: 'Pierce Armor',
        description: 'Also applies Minor Breach and increases your armor.',
        changes: 'Applies Minor Breach and grants Minor Resolve to you.'
      },
      {
        id: 'ransack',
        name: 'Ransack',
        description: 'Reduces enemy damage and grants you stamina return.',
        changes: 'Reduces enemy damage by 15% and restores stamina on hit.'
      }
    ],
    buffsApplied: ['minor_resolve'],
    debuffsApplied: ['major_breach', 'taunt'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'taunt-effect',
        type: 'crowd_control',
        description: 'Forces enemy to attack you for 15 seconds',
        duration: 15
      }
    ]
  },
  {
    id: 'defensive-posture',
    name: 'Defensive Posture',
    description: 'Brace yourself and reflect the next spell back at the enemy.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 4320
    },
    morphs: [
      {
        id: 'defensive-stance',
        name: 'Defensive Stance',
        description: 'Reflects multiple spells and reduces block cost.',
        changes: 'Reflects up to 4 spells and reduces block cost by 36%.'
      },
      {
        id: 'spell-wall',
        name: 'Spell Wall',
        description: 'Creates a barrier that absorbs projectiles for allies.',
        changes: 'Creates area that absorbs projectiles for 15 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    effects: [
      {
        id: 'spell-reflect',
        type: 'other',
        description: 'Reflects hostile spells back at attackers'
      }
    ]
  },
  {
    id: 'shield-wall',
    name: 'Shield Wall',
    description: 'Create an impenetrable wall of shields that blocks all attacks.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    duration: 15,
    morphs: [
      {
        id: 'shield-discipline',
        name: 'Shield Discipline',
        description: 'Increases block effectiveness and grants stamina return.',
        changes: 'Reduces block cost and restores stamina when blocking.'
      },
      {
        id: 'spell-wall-ultimate',
        name: 'Spell Wall',
        description: 'Also reflects spells and grants magic resistance.',
        changes: 'Reflects spells and grants Major Spell Resistance.'
      }
    ],
    buffsApplied: ['major_protection'],
    debuffsApplied: [],
    effects: [
      {
        id: 'ultimate-defense',
        type: 'other',
        description: 'Massive damage reduction and block effectiveness',
        duration: 15
      }
    ]
  }
];

// Dual Wield Skills
const dualWieldSkills: Skill[] = [
  {
    id: 'twin-slashes',
    name: 'Twin Slashes',
    description: 'Slice an enemy twice, dealing damage and applying bleeding.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 7,
    morphs: [
      {
        id: 'rending-slashes',
        name: 'Rending Slashes',
        description: 'Increases bleeding damage and duration.',
        changes: 'Bleeding lasts longer and deals more damage.'
      },
      {
        id: 'blood-craze',
        name: 'Blood Craze',
        description: 'Heals you based on damage dealt by bleeding.',
        changes: 'You are healed for 100% of bleeding damage dealt.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'physical',
      isDoT: true,
      dotTicks: 20
    },
    effects: [
      {
        id: 'dual-strike',
        type: 'other',
        description: 'Two quick strikes that cause bleeding'
      }
    ]
  },
  {
    id: 'flurry',
    name: 'Flurry',
    description: 'Unleash a rapid series of attacks, increasing in speed and damage.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2700
    },
    range: 7,
    morphs: [
      {
        id: 'rapid-strikes',
        name: 'Rapid Strikes',
        description: 'Final hit deals significantly more damage.',
        changes: 'Final hit deals 100% more damage and heals you.'
      },
      {
        id: 'bloodthirst',
        name: 'Bloodthirst',
        description: 'Heals you for each hit and increases attack speed.',
        changes: 'Each hit heals you and grants Minor Berserk on final hit.'
      }
    ],
    buffsApplied: ['minor_berserk'],
    debuffsApplied: [],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'multi-hit',
        type: 'other',
        description: 'Channeled ability with multiple strikes'
      }
    ]
  },
  {
    id: 'lacerate',
    name: 'Lacerate',
    description: 'Spin around with both weapons, hitting all nearby enemies.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    radius: 8,
    morphs: [
      {
        id: 'deadly-cloak',
        name: 'Deadly Cloak',
        description: 'Grants damage shield and reflects damage back to attackers.',
        changes: 'Grants damage shield, nearby enemies take damage when they hit you.'
      },
      {
        id: 'flawless-blade',
        name: 'Flawless Blade',
        description: 'Increases weapon critical and reduces ultimate cost.',
        changes: 'Lower cost and grants Major Savagery when cast.'
      }
    ],
    buffsApplied: ['major_savagery'],
    debuffsApplied: [],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'whirling-blades',
        type: 'other',
        description: 'Spinning attack that hits all nearby enemies'
      }
    ]
  }
];

// Bow Skills
const bowSkills: Skill[] = [
  {
    id: 'snipe',
    name: 'Snipe',
    description: 'Take aim and fire a powerful shot that deals more damage from stealth.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2295
    },
    range: 41,
    morphs: [
      {
        id: 'lethal-arrow',
        name: 'Lethal Arrow',
        description: 'Deals more damage and applies poison.',
        changes: 'Higher damage and applies poisoned status effect.'
      },
      {
        id: 'focused-aim',
        name: 'Focused Aim',
        description: 'Pierces through enemies and increases range.',
        changes: 'Longer range, pierces through multiple enemies.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['poisoned'],
    damage: {
      baseDamage: 1742,
      scalingFactor: 1.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'aimed-shot',
        type: 'other',
        description: 'High damage ranged attack, bonus damage from stealth'
      }
    ]
  },
  {
    id: 'volley',
    name: 'Volley',
    description: 'Fire arrows into the sky to rain down on a target area.',
    type: 'active',
    resourceCost: {
      type: 'stamina',
      amount: 2970
    },
    range: 28,
    radius: 8,
    duration: 8,
    morphs: [
      {
        id: 'endless-hail',
        name: 'Endless Hail',
        description: 'Increases duration and final hit damage.',
        changes: 'Lasts longer with a powerful final volley.'
      },
      {
        id: 'arrow-barrage',
        name: 'Arrow Barrage',
        description: 'Immobilizes enemies and reduces their damage.',
        changes: 'Applies immobilization and reduces enemy damage by 30%.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['immobilize'],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'physical',
      isDoT: true,
      dotTicks: 8
    },
    effects: [
      {
        id: 'arrow-rain',
        type: 'other',
        description: 'Area of effect arrow barrage over time'
      }
    ]
  },
  {
    id: 'ballista',
    name: 'Ballista',
    description: 'Fire a ballista bolt that pierces through enemies, dealing massive damage.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 250
    },
    range: 41,
    morphs: [
      {
        id: 'rapid-fire',
        name: 'Rapid Fire',
        description: 'Fire multiple bolts in quick succession.',
        changes: 'Fires 5 bolts over 3 seconds, each dealing damage.'
      },
      {
        id: 'ballista-turret',
        name: 'Ballista Turret',
        description: 'Creates a turret that continues firing for a duration.',
        changes: 'Summons turret that fires automatically for 15 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    damage: {
      baseDamage: 2905,
      scalingFactor: 2.5,
      damageType: 'physical'
    },
    effects: [
      {
        id: 'piercing-shot',
        type: 'other',
        description: 'Pierces through all enemies in line'
      }
    ]
  }
];

// Destruction Staff Skills
const destructionStaffSkills: Skill[] = [
  {
    id: 'force-pulse',
    name: 'Force Pulse',
    description: 'Project three shards of elemental damage at an enemy.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2700
    },
    range: 28,
    morphs: [
      {
        id: 'force-shock',
        name: 'Force Shock',
        description: 'Deals more damage and applies status effects based on staff type.',
        changes: 'Higher damage, guaranteed status effect application.'
      },
      {
        id: 'crushing-shock',
        name: 'Crushing Shock',
        description: 'Interrupts spellcasting and sets enemies off balance.',
        changes: 'Interrupts casting and sets enemies off balance for 7 seconds.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['off_balance'],
    damage: {
      baseDamage: 1161,
      scalingFactor: 1.0,
      damageType: 'magic'
    },
    effects: [
      {
        id: 'elemental-projectile',
        type: 'other',
        description: 'Three elemental shards based on staff type'
      }
    ]
  },
  {
    id: 'wall-of-elements',
    name: 'Wall of Elements',
    description: 'Create a wall of elemental damage that blocks and damages enemies.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    duration: 8,
    morphs: [
      {
        id: 'elemental-blockade',
        name: 'Elemental Blockade',
        description: 'Increases area size and applies status effects.',
        changes: 'Larger area, applies burning/chilled/concussion to enemies.'
      },
      {
        id: 'unstable-wall',
        name: 'Unstable Wall',
        description: 'Wall explodes when it expires, dealing burst damage.',
        changes: 'Explodes at end for high area damage.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['burning', 'chilled', 'concussion'],
    damage: {
      baseDamage: 290,
      scalingFactor: 0.25,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 8
    },
    effects: [
      {
        id: 'elemental-barrier',
        type: 'other',
        description: 'Creates area of elemental damage over time'
      }
    ]
  },
  {
    id: 'elemental-storm',
    name: 'Elemental Storm',
    description: 'Call down a storm of elemental damage over a large area.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 200
    },
    range: 28,
    radius: 12,
    duration: 8,
    morphs: [
      {
        id: 'eye-of-the-storm',
        name: 'Eye of the Storm',
        description: 'Storm follows you and increases in damage over time.',
        changes: 'Follows you, damage increases each second.'
      },
      {
        id: 'elemental-rage',
        name: 'Elemental Rage',
        description: 'Increases damage and applies all status effects.',
        changes: 'Higher damage, applies burning, chilled, and concussion.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: ['burning', 'chilled', 'concussion'],
    damage: {
      baseDamage: 580,
      scalingFactor: 0.5,
      damageType: 'magic',
      isDoT: true,
      dotTicks: 8
    },
    effects: [
      {
        id: 'elemental-devastation',
        type: 'other',
        description: 'Massive elemental storm over large area'
      }
    ]
  }
];

// Restoration Staff Skills
const restorationStaffSkills: Skill[] = [
  {
    id: 'grand-healing',
    name: 'Grand Healing',
    description: 'Heal yourself and nearby allies instantly.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 4050
    },
    radius: 12,
    morphs: [
      {
        id: 'illustrious-healing',
        name: 'Illustrious Healing',
        description: 'Leaves behind a healing area for additional healing over time.',
        changes: 'Creates healing area that lasts 3 seconds after cast.'
      },
      {
        id: 'breath-of-life',
        name: 'Breath of Life',
        description: 'Heals up to 3 allies, prioritizing lowest health targets.',
        changes: 'Heals 3 allies, smart healing prioritizes injured allies.'
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
        id: 'group-heal',
        type: 'other',
        description: 'Instant area healing for you and allies'
      }
    ]
  },
  {
    id: 'healing-springs',
    name: 'Healing Springs',
    description: 'Create a pool of regenerative water that heals allies over time.',
    type: 'active',
    resourceCost: {
      type: 'magicka',
      amount: 2970
    },
    range: 28,
    radius: 8,
    duration: 3,
    morphs: [
      {
        id: 'healing-ward',
        name: 'Healing Ward',
        description: 'Grants damage shields to allies instead of healing over time.',
        changes: 'Grants damage shields based on missing health.'
      },
      {
        id: 'mutagen',
        name: 'Mutagen',
        description: 'Applies to multiple allies and heals more when they take damage.',
        changes: 'Affects 3 allies, healing increases when they are injured.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 348,
      scalingFactor: 0.3,
      isHoT: true,
      hotTicks: 3
    },
    effects: [
      {
        id: 'healing-ground',
        type: 'other',
        description: 'Area of healing over time for allies'
      }
    ]
  },
  {
    id: 'remembrance',
    name: 'Remembrance',
    description: 'Channel to provide massive healing to all nearby allies.',
    type: 'ultimate',
    resourceCost: {
      type: 'ultimate',
      amount: 280
    },
    radius: 20,
    duration: 8,
    morphs: [
      {
        id: 'radiant-glory',
        name: 'Radiant Glory',
        description: 'Also grants damage reduction to healed allies.',
        changes: 'Healed allies take 30% less damage for 8 seconds.'
      },
      {
        id: 'light-weaver',
        name: 'Light Weaver',
        description: 'Increases healing and grants magic damage shields.',
        changes: 'Higher healing and grants damage shields.'
      }
    ],
    buffsApplied: [],
    debuffsApplied: [],
    healing: {
      baseHealing: 580,
      scalingFactor: 0.5,
      isHoT: true,
      hotTicks: 8
    },
    effects: [
      {
        id: 'ultimate-healing',
        type: 'other',
        description: 'Massive group healing over time',
        duration: 8
      }
    ]
  }
];

// Combine all skill lines
export const guildAndWorldSkillLines: SkillLine[] = [
  // Weapon Skill Lines
  {
    id: 'two-handed',
    name: 'Two Handed',
    description: 'Devastating attacks with two-handed weapons.',
    category: 'Weapon',
    unlockRequirement: 'Equip a two-handed weapon',
    skills: twoHandedSkills
  },
  {
    id: 'one-hand-and-shield',
    name: 'One Hand and Shield',
    description: 'Balanced offense and defense with sword and shield.',
    category: 'Weapon',
    unlockRequirement: 'Equip a one-handed weapon and shield',
    skills: oneHandShieldSkills
  },
  {
    id: 'dual-wield',
    name: 'Dual Wield',
    description: 'Fast attacks with two one-handed weapons.',
    category: 'Weapon',
    unlockRequirement: 'Equip two one-handed weapons',
    skills: dualWieldSkills
  },
  {
    id: 'bow',
    name: 'Bow',
    description: 'Ranged attacks and utility with bow and arrows.',
    category: 'Weapon',
    unlockRequirement: 'Equip a bow',
    skills: bowSkills
  },
  {
    id: 'destruction-staff',
    name: 'Destruction Staff',
    description: 'Elemental magic attacks with destruction staves.',
    category: 'Weapon',
    unlockRequirement: 'Equip a destruction staff',
    skills: destructionStaffSkills
  },
  {
    id: 'restoration-staff',
    name: 'Restoration Staff',
    description: 'Healing and support magic with restoration staves.',
    category: 'Weapon',
    unlockRequirement: 'Equip a restoration staff',
    skills: restorationStaffSkills
  },
  // Guild Skill Lines
  {
    id: 'mages-guild',
    name: 'Mages Guild',
    description: 'Magical abilities focused on knowledge and arcane power.',
    category: 'Guild',
    unlockRequirement: 'Join the Mages Guild',
    skills: magesGuildSkills
  },
  {
    id: 'fighters-guild',
    name: 'Fighters Guild',
    description: 'Combat abilities specialized against undead and Daedric enemies.',
    category: 'Guild',
    unlockRequirement: 'Join the Fighters Guild',
    skills: fightersGuildSkills
  },
  {
    id: 'thieves-guild',
    name: 'Thieves Guild',
    description: 'Stealth and utility abilities for the cunning adventurer.',
    category: 'Guild',
    unlockRequirement: 'Thieves Guild DLC and questline',
    skills: thievesGuildSkills
  },
  {
    id: 'dark-brotherhood',
    name: 'Dark Brotherhood',
    description: 'Assassination abilities for eliminating targets efficiently.',
    category: 'Guild',
    unlockRequirement: 'Dark Brotherhood DLC and questline',
    skills: darkBrotherhoodSkills
  },
  {
    id: 'soul-magic',
    name: 'Soul Magic',
    description: 'Harness the power of souls for magical effects.',
    category: 'World',
    unlockRequirement: 'Main questline progression',
    skills: soulMagicSkills
  },
  {
    id: 'assault',
    name: 'Assault',
    description: 'PvP combat abilities focused on group warfare.',
    category: 'PvP',
    unlockRequirement: 'Participate in PvP activities',
    skills: assaultSkills
  },
  {
    id: 'support',
    name: 'Support',
    description: 'PvP support abilities for sieges and group play.',
    category: 'PvP',
    unlockRequirement: 'Participate in PvP activities',
    skills: supportSkills
  },
  {
    id: 'vampire',
    name: 'Vampire',
    description: 'Vampiric abilities that drain life and grant dark powers.',
    category: 'World',
    unlockRequirement: 'Contract vampirism',
    skills: vampireSkills
  },
  {
    id: 'werewolf',
    name: 'Werewolf',
    description: 'Lycanthropic abilities that enhance physical prowess.',
    category: 'World',
    unlockRequirement: 'Contract lycanthropy',
    skills: werewolfSkills
  }
];

// Export individual skill arrays for easier access
export {
  magesGuildSkills,
  fightersGuildSkills,
  thievesGuildSkills,
  darkBrotherhoodSkills,
  soulMagicSkills,
  assaultSkills,
  supportSkills,
  vampireSkills,
  werewolfSkills,
  twoHandedSkills,
  oneHandShieldSkills,
  dualWieldSkills,
  bowSkills,
  destructionStaffSkills,
  restorationStaffSkills
};

// ESO Skills, Buffs, and Debuffs Data Structure

export type SkillType = 'active' | 'ultimate' | 'passive';
export type ResourceType = 'magicka' | 'stamina' | 'health' | 'ultimate';
export type TargetType = 'self' | 'enemy' | 'ally' | 'area' | 'ground';

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon?: string;
  type: SkillType;
  resourceCost?: {
    type: ResourceType;
    amount: number;
  };
  cooldown?: number; // in seconds
  duration?: number; // in seconds
  range?: number; // in meters
  radius?: number; // in meters for AoE
  morphs?: SkillMorph[];
  buffsApplied: string[]; // IDs of buffs this skill applies
  debuffsApplied: string[]; // IDs of debuffs this skill applies
  damage?: DamageInfo;
  healing?: HealingInfo;
  effects: SkillEffect[];
}

export interface SkillMorph {
  id: string;
  name: string;
  description: string;
  changes: string; // Description of what changes from base skill
}

export interface DamageInfo {
  baseDamage: number;
  scalingFactor: number; // Multiplier for spell/weapon damage
  damageType: 'physical' | 'magic' | 'fire' | 'frost' | 'shock' | 'poison' | 'disease';
  isDoT?: boolean; // Damage over time
  dotTicks?: number; // Number of damage ticks if DoT
}

export interface HealingInfo {
  baseHealing: number;
  scalingFactor: number; // Multiplier for spell/weapon damage
  isHoT?: boolean; // Healing over time
  hotTicks?: number; // Number of healing ticks if HoT
}

export interface SkillEffect {
  id: string;
  type: 'stat_increase' | 'stat_decrease' | 'shield' | 'crowd_control' | 'resource_restore' | 'other';
  description: string;
  value?: number;
  percentage?: boolean;
  duration?: number;
}

// Buff and Debuff System
export type BuffType = 'major' | 'minor' | 'unique' | 'set';
export type BuffCategory = 'offensive' | 'defensive' | 'utility' | 'resource';

export interface Buff {
  id: string;
  name: string;
  description: string;
  icon?: string;
  type: BuffType;
  category: BuffCategory;
  duration?: number; // in seconds, undefined for permanent
  stackable: boolean;
  maxStacks?: number;
  effects: BuffEffect[];
  sourceSkills: string[]; // Skill IDs that can apply this buff
}

export interface Debuff {
  id: string;
  name: string;
  description: string;
  icon?: string;
  type: BuffType;
  category: BuffCategory;
  duration?: number;
  stackable: boolean;
  maxStacks?: number;
  effects: DebuffEffect[];
  sourceSkills: string[]; // Skill IDs that can apply this debuff
}

export interface BuffEffect {
  type: 'weapon_damage' | 'spell_damage' | 'critical_chance' | 'critical_damage' | 
        'health_recovery' | 'magicka_recovery' | 'stamina_recovery' | 'movement_speed' |
        'damage_reduction' | 'healing_done' | 'healing_received' | 'other';
  value: number;
  percentage: boolean;
  description: string;
}

export interface DebuffEffect {
  type: 'weapon_damage' | 'spell_damage' | 'armor_reduction' | 'spell_resistance_reduction' |
        'movement_speed' | 'healing_received' | 'damage_taken' | 'crowd_control' | 'other';
  value: number;
  percentage: boolean;
  description: string;
}

// Sample Buffs
export const buffs: Buff[] = [
  {
    id: 'major_brutality',
    name: 'Major Brutality',
    description: 'Increases Weapon Damage by 20%.',
    type: 'major',
    category: 'offensive',
    duration: undefined,
    stackable: false,
    effects: [
      {
        type: 'weapon_damage',
        value: 20,
        percentage: true,
        description: '+20% Weapon Damage'
      }
    ],
    sourceSkills: []
  },
  {
    id: 'major_sorcery',
    name: 'Major Sorcery',
    description: 'Increases Spell Damage by 20%.',
    type: 'major',
    category: 'offensive',
    duration: undefined,
    stackable: false,
    effects: [
      {
        type: 'spell_damage',
        value: 20,
        percentage: true,
        description: '+20% Spell Damage'
      }
    ],
    sourceSkills: []
  },
  {
    id: 'major_resolve',
    name: 'Major Resolve',
    description: 'Increases Physical and Spell Resistance by 5948.',
    type: 'major',
    category: 'defensive',
    duration: undefined,
    stackable: false,
    effects: [
      {
        type: 'damage_reduction',
        value: 5948,
        percentage: false,
        description: '+5948 Physical and Spell Resistance'
      }
    ],
    sourceSkills: []
  },
  {
    id: 'minor_berserk',
    name: 'Minor Berserk',
    description: 'Increases damage done by 5%.',
    type: 'minor',
    category: 'offensive',
    duration: 20,
    stackable: false,
    effects: [
      {
        type: 'other',
        value: 5,
        percentage: true,
        description: '+5% Damage Done'
      }
    ],
    sourceSkills: []
  }
];

// Sample Debuffs
export const debuffs: Debuff[] = [
  {
    id: 'major_breach',
    name: 'Major Breach',
    description: 'Reduces Physical and Spell Resistance by 5948.',
    type: 'major',
    category: 'offensive',
    duration: undefined,
    stackable: false,
    effects: [
      {
        type: 'armor_reduction',
        value: 5948,
        percentage: false,
        description: '-5948 Physical and Spell Resistance'
      }
    ],
    sourceSkills: []
  },
  {
    id: 'minor_maim',
    name: 'Minor Maim',
    description: 'Reduces damage done by 5%.',
    type: 'minor',
    category: 'defensive',
    duration: undefined,
    stackable: false,
    effects: [
      {
        type: 'damage_taken',
        value: 5,
        percentage: true,
        description: '-5% Damage Done'
      }
    ],
    sourceSkills: []
  },
  {
    id: 'burning',
    name: 'Burning',
    description: 'Deals fire damage over time.',
    type: 'unique',
    category: 'offensive',
    duration: 4,
    stackable: true,
    maxStacks: 3,
    effects: [
      {
        type: 'other',
        value: 1000,
        percentage: false,
        description: '1000 Fire Damage per second'
      }
    ],
    sourceSkills: []
  }
];

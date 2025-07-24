# ESO Build Helper - Data Organization

This document explains how the ESO class and skill data is organized in the project.

## File Structure

```
data/
├── classes.ts              # Main class definitions with subclasses and passive bonuses
├── skills.ts               # TypeScript interfaces for skills, buffs, and debuffs
├── dragonknight-skills.ts  # Complete Dragonknight skills (Ardent Flame, Draconic Power, Earthen Heart)
├── sorcerer-skills.ts      # Complete Sorcerer skills (Dark Magic, Daedric Summoning, Storm Calling)  
├── nightblade-skills.ts    # Complete Nightblade skills (Assassination, Shadow, Siphoning)
├── placeholder-skills.ts   # Empty skill arrays for remaining classes
└── README.md              # This file
```

## Data Architecture

### Classes (`classes.ts`)
- **7 ESO Classes**: Dragonknight, Sorcerer, Nightblade, Templar, Warden, Necromancer, Arcanist
- Each class has **3 subclasses** (skill lines)
- Each subclass includes:
  - Name, description, and archetype (DPS/Healer/Tank/Hybrid)
  - **Passive bonuses** with detailed effects
  - **Skill line references** to individual skill files

### Skills (`*-skills.ts`)
Each class has its own dedicated skills file with complete skill definitions including:

#### Skill Properties
- **Basic Info**: Name, description, type (active/ultimate/passive)
- **Resource Cost**: Magicka/Stamina/Ultimate amount
- **Combat Stats**: Range, radius, duration, cooldown
- **Morphs**: 2 morphs per skill with changes described
- **Effects**: Buffs applied, debuffs applied, damage/healing info
- **Special Effects**: Detailed breakdown of skill mechanics

#### Skill Types
- **Active Skills**: Basic abilities with resource costs
- **Ultimate Skills**: High-cost powerful abilities (150-250 Ultimate)
- **Passive Skills**: Always-active bonuses (future implementation)

### Buffs & Debuffs (`skills.ts`)
- **Major/Minor/Unique** classification system
- **Stacking rules** and maximum stacks
- **Effect categories**: Offensive, Defensive, Utility, Resource
- **Source tracking**: Which skills apply each buff/debuff

## Implementation Status

### ✅ Complete Classes (Skills Implemented)
1. **Dragonknight** - All 3 skill lines with 3-4 skills each
   - Ardent Flame (Fire DPS abilities)
   - Draconic Power (Tank/Defense abilities) 
   - Earthen Heart (Support/Utility abilities)

2. **Sorcerer** - All 3 skill lines with 4 skills each
   - Dark Magic (Crowd control and utility)
   - Daedric Summoning (Pet summoning and shields)
   - Storm Calling (Lightning DPS and mobility)

3. **Nightblade** - All 3 skill lines with 4 skills each
   - Assassination (Stealth DPS abilities)
   - Shadow (Mobility and defense)
   - Siphoning (Life steal and healing)

### 🚧 Placeholder Classes (Skills To Be Added)
4. **Templar** - Structure ready, skills needed
5. **Warden** - Structure ready, skills needed  
6. **Necromancer** - Structure ready, skills needed
7. **Arcanist** - Structure ready, skills needed

## Adding New Skills

### For Existing Classes (Dragonknight, Sorcerer, Nightblade)
Edit the respective `*-skills.ts` file and add to the appropriate skill line array.

### For New Classes (Templar, Warden, Necromancer, Arcanist)
1. Create a new `classname-skills.ts` file
2. Follow the pattern from existing skill files
3. Update `placeholder-skills.ts` to import real skills
4. Update `classes.ts` imports

### Skill Definition Template
```typescript
{
  id: 'skill-id',
  name: 'Skill Name',
  description: 'What the skill does',
  type: 'active' | 'ultimate' | 'passive',
  resourceCost: {
    type: 'magicka' | 'stamina' | 'ultimate',
    amount: 2700
  },
  range: 28, // meters
  morphs: [
    {
      id: 'morph-1-id',
      name: 'Morph 1 Name', 
      description: 'Morph description',
      changes: 'What changes from base skill'
    },
    // ... morph 2
  ],
  buffsApplied: ['buff_id'],
  debuffsApplied: ['debuff_id'], 
  damage: {
    baseDamage: 1161,
    scalingFactor: 1.0,
    damageType: 'fire' | 'frost' | 'shock' | 'magic' | 'physical'
  },
  effects: [
    {
      id: 'effect-id',
      type: 'stat_increase' | 'other' | 'crowd_control',
      description: 'Effect description',
      value: 25,
      percentage: true,
      duration: 10
    }
  ]
}
```

## Benefits of This Organization

1. **Scalability**: Easy to add new classes and skills
2. **Maintainability**: Each class in its own file
3. **Type Safety**: Full TypeScript support
4. **Modularity**: Skills can be imported independently  
5. **Consistency**: Standardized data structure across all classes
6. **Searchability**: Easy to find and modify specific skills

## Future Enhancements

- **Passive Skills**: Add passive skill definitions
- **Set Effects**: Equipment set bonuses integration
- **Skill Interactions**: Define skill synergies and combinations
- **Balance Updates**: Version tracking for skill changes
- **Localization**: Multi-language skill descriptions

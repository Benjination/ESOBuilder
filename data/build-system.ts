// Build system types and scoring logic
import { Skill } from './skills';

export interface BuildSkill {
  skillId: string;
  morphId?: string; // Selected morph if any
}

export interface PlayerBuild {
  id: string;
  name: string;
  selectedClasses: string[]; // Array of class IDs (max 3)
  selectedSubclasses: string[]; // Array of subclass IDs (max 3 from any of the selected classes)
  skills: BuildSkill[]; // Selected skills (max 12: 10 active + 2 ultimate)
  createdAt: Date;
}

export interface BuildScores {
  tank: number;     // 0-100 score
  healer: number;   // 0-100 score  
  dps: number;      // 0-100 score
}

export interface BuildAnalysis {
  scores: BuildScores;
  breakdown: {
    tank: ScoreBreakdown;
    healer: ScoreBreakdown;
    dps: ScoreBreakdown;
  };
  recommendations: string[];
}

export interface ScoreBreakdown {
  baseScore: number;
  skillContributions: SkillContribution[];
  passiveBonuses: number;
  synergies: number;
  total: number;
}

export interface SkillContribution {
  skillName: string;
  points: number;
  reason: string;
}

// Scoring weights for different skill characteristics
const SCORING_WEIGHTS = {
  tank: {
    damageShield: 15,
    damageReduction: 20,
    crowdControl: 10,
    taunt: 25,
    resistance: 15,
    healing: 5,
    resource: 10
  },
  healer: {
    healing: 30,
    healingDone: 20,
    resourceRestore: 15,
    groupSupport: 20,
    damageReduction: 10,
    cleanse: 5
  },
  dps: {
    damage: 40,
    criticalChance: 15,
    criticalDamage: 10,
    damageDone: 20,
    penetration: 10,
    execute: 5
  }
};

// Calculate build scores based on selected skills and subclasses
export function calculateBuildScores(
  build: PlayerBuild, 
  allSkills: { [classId: string]: { [subclassId: string]: Skill[] } },
  classData: any[]
): BuildAnalysis {
  const selectedSkills = getSelectedSkills(build, allSkills);
  const passiveBonuses = getPassiveBonuses(build, classData);
  
  const tankScore = calculateTankScore(selectedSkills, passiveBonuses);
  const healerScore = calculateHealerScore(selectedSkills, passiveBonuses);
  const dpsScore = calculateDPSScore(selectedSkills, passiveBonuses);
  
  const synergies = calculateSynergies(selectedSkills);
  
  return {
    scores: {
      tank: Math.min(100, tankScore.total + synergies.tank),
      healer: Math.min(100, healerScore.total + synergies.healer),
      dps: Math.min(100, dpsScore.total + synergies.dps)
    },
    breakdown: {
      tank: { ...tankScore, synergies: synergies.tank },
      healer: { ...healerScore, synergies: synergies.healer },
      dps: { ...dpsScore, synergies: synergies.dps }
    },
    recommendations: generateRecommendations(selectedSkills, { tank: tankScore.total, healer: healerScore.total, dps: dpsScore.total })
  };
}

function getSelectedSkills(build: PlayerBuild, allSkills: any): Skill[] {
  const skills: Skill[] = [];
  
  build.skills.forEach(buildSkill => {
    // Find the skill across all classes/subclasses
    Object.values(allSkills).forEach((classSkills: any) => {
      Object.values(classSkills).forEach((subclassSkills) => {
        const skillArray = subclassSkills as Skill[];
        const skill = skillArray.find(s => s.id === buildSkill.skillId);
        if (skill) {
          skills.push(skill);
        }
      });
    });
  });
  
  return skills;
}

function getPassiveBonuses(build: PlayerBuild, classData: any[]): any[] {
  const passives: any[] = [];
  
  // Loop through all selected classes
  build.selectedClasses.forEach(classId => {
    const playerClass = classData.find(c => c.id === classId);
    if (playerClass) {
      build.selectedSubclasses.forEach(subclassId => {
        const subclass = playerClass.subclasses.find((s: any) => s.id === subclassId);
        if (subclass) {
          passives.push(...subclass.passiveBonuses);
        }
      });
    }
  });
  
  return passives;
}

function calculateTankScore(skills: Skill[], passives: any[]): ScoreBreakdown {
  let baseScore = 0;
  const contributions: SkillContribution[] = [];
  
  skills.forEach(skill => {
    let skillPoints = 0;
    let reasons: string[] = [];
    
    // Check for tanking-related effects
    skill.effects.forEach(effect => {
      switch (effect.type) {
        case 'shield':
          skillPoints += SCORING_WEIGHTS.tank.damageShield;
          reasons.push('Damage shield');
          break;
        case 'stat_decrease':
          if (effect.description.includes('damage taken') || effect.description.includes('damage done')) {
            skillPoints += SCORING_WEIGHTS.tank.damageReduction;
            reasons.push('Damage reduction');
          }
          break;
        case 'crowd_control':
          skillPoints += SCORING_WEIGHTS.tank.crowdControl;
          reasons.push('Crowd control');
          break;
      }
    });
    
    // Check buffs applied for tanking benefits
    if (skill.buffsApplied.includes('major_resolve')) {
      skillPoints += SCORING_WEIGHTS.tank.resistance;
      reasons.push('Resistance buff');
    }
    
    // Check for healing capabilities
    if (skill.healing) {
      skillPoints += SCORING_WEIGHTS.tank.healing;
      reasons.push('Self-healing');
    }
    
    if (skillPoints > 0) {
      contributions.push({
        skillName: skill.name,
        points: skillPoints,
        reason: reasons.join(', ')
      });
      baseScore += skillPoints;
    }
  });
  
  // Add passive bonuses
  const passiveBonus = passives.length * 2; // 2 points per passive
  
  return {
    baseScore,
    skillContributions: contributions,
    passiveBonuses: passiveBonus,
    synergies: 0, // Will be calculated separately
    total: baseScore + passiveBonus
  };
}

function calculateHealerScore(skills: Skill[], passives: any[]): ScoreBreakdown {
  let baseScore = 0;
  const contributions: SkillContribution[] = [];
  
  skills.forEach(skill => {
    let skillPoints = 0;
    let reasons: string[] = [];
    
    // Direct healing abilities
    if (skill.healing) {
      skillPoints += SCORING_WEIGHTS.healer.healing;
      reasons.push('Healing ability');
      
      if (skill.healing.isHoT) {
        skillPoints += 5; // Bonus for HoT
        reasons.push('Healing over time');
      }
    }
    
    // Check for healing-related effects
    skill.effects.forEach(effect => {
      if (effect.description.includes('Healing Done') || effect.description.includes('healing')) {
        skillPoints += SCORING_WEIGHTS.healer.healingDone;
        reasons.push('Healing boost');
      }
      
      if (effect.type === 'resource_restore') {
        skillPoints += SCORING_WEIGHTS.healer.resourceRestore;
        reasons.push('Resource restore');
      }
    });
    
    // Group support buffs
    if (skill.buffsApplied.some(buff => 
      ['major_brutality', 'major_sorcery', 'major_resolve', 'major_fortitude'].includes(buff)
    )) {
      skillPoints += SCORING_WEIGHTS.healer.groupSupport;
      reasons.push('Group support');
    }
    
    if (skillPoints > 0) {
      contributions.push({
        skillName: skill.name,
        points: skillPoints,
        reason: reasons.join(', ')
      });
      baseScore += skillPoints;
    }
  });
  
  const passiveBonus = passives.filter(p => 
    p.effect.includes('Healing') || p.effect.includes('Recovery')
  ).length * 3;
  
  return {
    baseScore,
    skillContributions: contributions,
    passiveBonuses: passiveBonus,
    synergies: 0,
    total: baseScore + passiveBonus
  };
}

function calculateDPSScore(skills: Skill[], passives: any[]): ScoreBreakdown {
  let baseScore = 0;
  const contributions: SkillContribution[] = [];
  
  skills.forEach(skill => {
    let skillPoints = 0;
    let reasons: string[] = [];
    
    // Direct damage abilities
    if (skill.damage) {
      const damagePoints = Math.min(SCORING_WEIGHTS.dps.damage, skill.damage.baseDamage / 50);
      skillPoints += damagePoints;
      reasons.push('Damage ability');
      
      if (skill.damage.isDoT) {
        skillPoints += 5; // Bonus for DoT
        reasons.push('Damage over time');
      }
      
      if (skill.type === 'ultimate') {
        skillPoints += 10; // Bonus for ultimate damage
        reasons.push('Ultimate ability');
      }
    }
    
    // Check for DPS-related effects
    skill.effects.forEach(effect => {
      if (effect.description.includes('Critical') || effect.description.includes('critical')) {
        skillPoints += SCORING_WEIGHTS.dps.criticalChance;
        reasons.push('Critical enhancement');
      }
      
      if (effect.description.includes('damage') && effect.description.includes('enemies')) {
        skillPoints += SCORING_WEIGHTS.dps.execute;
        reasons.push('Execute bonus');
      }
    });
    
    // Damage-boosting buffs
    if (skill.buffsApplied.some(buff => 
      ['major_brutality', 'major_sorcery', 'major_berserk', 'minor_berserk'].includes(buff)
    )) {
      skillPoints += SCORING_WEIGHTS.dps.damageDone;
      reasons.push('Damage buffs');
    }
    
    // Armor/resistance reduction debuffs
    if (skill.debuffsApplied.some(debuff => 
      ['major_breach', 'minor_breach', 'major_fracture'].includes(debuff)
    )) {
      skillPoints += SCORING_WEIGHTS.dps.penetration;
      reasons.push('Armor reduction');
    }
    
    if (skillPoints > 0) {
      contributions.push({
        skillName: skill.name,
        points: skillPoints,
        reason: reasons.join(', ')
      });
      baseScore += skillPoints;
    }
  });
  
  const passiveBonus = passives.filter(p => 
    p.effect.includes('Weapon Damage') || p.effect.includes('Spell Damage') || p.effect.includes('Critical')
  ).length * 3;
  
  return {
    baseScore,
    skillContributions: contributions,
    passiveBonuses: passiveBonus,
    synergies: 0,
    total: baseScore + passiveBonus
  };
}

function calculateSynergies(skills: Skill[]): { tank: number; healer: number; dps: number } {
  const synergies = { tank: 0, healer: 0, dps: 0 };
  
  // Example synergies - can be expanded
  const hasShield = skills.some(s => s.effects.some(e => e.type === 'shield'));
  const hasTaunt = skills.some(s => s.effects.some(e => e.description.includes('taunt')));
  const hasHealing = skills.some(s => s.healing);
  const hasGroupBuffs = skills.some(s => s.buffsApplied.length > 0);
  const hasDoT = skills.some(s => s.damage?.isDoT);
  const hasExecute = skills.some(s => s.effects.some(e => e.description.includes('low') && e.description.includes('Health')));
  
  // Tank synergies
  if (hasShield && hasTaunt) synergies.tank += 10;
  
  // Healer synergies  
  if (hasHealing && hasGroupBuffs) synergies.healer += 15;
  
  // DPS synergies
  if (hasDoT && hasExecute) synergies.dps += 12;
  
  return synergies;
}

function generateRecommendations(skills: Skill[], scores: { tank: number; healer: number; dps: number }): string[] {
  const recommendations: string[] = [];
  const highestRole = Object.entries(scores).reduce((a, b) => scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b)[0];
  
  recommendations.push(`Your build is strongest as a ${highestRole.toUpperCase()}`);
  
  const hasUltimate = skills.some(s => s.type === 'ultimate');
  if (!hasUltimate) {
    recommendations.push('Consider adding an Ultimate ability for maximum effectiveness');
  }
  
  const skillCount = skills.length;
  if (skillCount < 10) {
    recommendations.push(`You have ${skillCount} skills selected. Consider adding more for a complete build (10 active + 2 ultimate recommended)`);
  }
  
  // Role-specific recommendations
  if (highestRole === 'tank' && scores.tank < 50) {
    recommendations.push('Add more defensive skills like shields, damage reduction, or crowd control');
  }
  
  if (highestRole === 'healer' && scores.healer < 50) {
    recommendations.push('Add more healing abilities or group support buffs');
  }
  
  if (highestRole === 'dps' && scores.dps < 50) {
    recommendations.push('Add more damage abilities or damage-boosting buffs');
  }
  
  return recommendations;
}

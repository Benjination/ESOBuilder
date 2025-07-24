// Build creation helper functions
import { PlayerBuild, BuildSkill } from '../../data/build-system';
import { Skill } from '../../data/skills';

// Generate unique ID for builds
export function generateBuildId(): string {
  return 'build_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Create new empty build
export function createEmptyBuild(selectedClasses: string[], buildName: string): PlayerBuild {
  return {
    id: generateBuildId(),
    name: buildName,
    selectedClasses: selectedClasses,
    selectedSubclasses: [],
    skills: [],
    createdAt: new Date()
  };
}

// Check if skill is already selected
export function isSkillSelected(skills: BuildSkill[], skillId: string): boolean {
  return skills.some(skill => skill.skillId === skillId);
}

// Get selected morph ID for a skill
export function getSelectedMorphId(skills: BuildSkill[], skillId: string): string | undefined {
  const buildSkill = skills.find(skill => skill.skillId === skillId);
  return buildSkill?.morphId;
}

// Get skill by ID from all skills (including guild/world skills)
export function findSkillById(
  skillId: string, 
  allSkills: { [classId: string]: { [subclassId: string]: Skill[] } },
  guildWorldSkills?: any[]
): Skill | undefined {
  // Search class skills
  for (const classSkills of Object.values(allSkills)) {
    for (const subclassSkills of Object.values(classSkills)) {
      const skill = subclassSkills.find(s => s.id === skillId);
      if (skill) return skill;
    }
  }
  
  // Search guild/world skills
  if (guildWorldSkills) {
    for (const skillLine of guildWorldSkills) {
      const skill = skillLine.skills.find((s: any) => s.id === skillId);
      if (skill) return skill;
    }
  }
  
  return undefined;
}

// Validate build constraints
export interface BuildValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateBuild(
  build: PlayerBuild, 
  selectedSkillLines?: string[],
  allSkills?: { [classId: string]: { [subclassId: string]: Skill[] } },
  guildWorldSkills?: any[]
): BuildValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Count only active and ultimate skills, not passive
  let activeSkillCount = 0;
  for (const buildSkill of build.skills) {
    const skill = findSkillById(buildSkill.skillId, allSkills || {}, guildWorldSkills);
    if (skill && skill.type !== 'passive') {
      activeSkillCount++;
    }
  }
  
  if (activeSkillCount > 12) {
    errors.push('Maximum 12 active/ultimate skills allowed (passive skills don\'t count)');
  }

  // Check class limits
  if (build.selectedClasses.length > 3) {
    errors.push('Maximum 3 classes allowed');
  }

  // Check subclass limits
  if (build.selectedSubclasses.length > 3) {
    errors.push('Maximum 3 subclasses allowed');
  }

  // Check if any classes are selected
  if (build.selectedClasses.length === 0) {
    warnings.push('Select at least one class to access subclasses and skills');
  }

  // Check if any skill sources are selected
  const hasSkillSources = build.selectedSubclasses.length > 0 || (selectedSkillLines && selectedSkillLines.length > 0);
  if (build.selectedClasses.length > 0 && !hasSkillSources) {
    warnings.push('Select subclasses and/or guild skill lines to access skills');
  }

  // Check if skills are selected
  if (build.skills.length === 0) {
    warnings.push('Add some skills to analyze your build');
  }

  // Suggest more classes/subclasses for better builds
  if (build.selectedClasses.length === 1 && build.selectedSubclasses.length === 1 && (!selectedSkillLines || selectedSkillLines.length === 0)) {
    warnings.push('Consider selecting more classes (up to 3) and subclasses (up to 3) for a more versatile build');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// Filter available skills based on selected subclasses and guild/world skill lines
export function getAvailableSkills(
  selectedSubclasses: string[],
  allSkills: { [classId: string]: { [subclassId: string]: Skill[] } },
  selectedClasses: string[],
  selectedSkillLines?: string[],
  guildWorldSkills?: any[]
): Skill[] {
  const availableSkills: Skill[] = [];
  
  // Add class subclass skills from all selected classes
  if (selectedClasses.length > 0 && selectedSubclasses.length > 0) {
    // Map subclass IDs to skill line names
    const subclassToSkillLineMap: { [key: string]: string } = {
      // Dragonknight
      'draconic-power': 'draconicPower',
      'ardent-flame': 'ardentFlame', 
      'earthen-heart': 'earthenHeart',
      // Sorcerer
      'dark-magic': 'darkMagic',
      'daedric-summoning': 'daedricSummoning',
      'storm-calling': 'stormCalling',
      // Nightblade
      'assassination': 'assassination',
      'shadow': 'shadow',
      'siphoning': 'siphoning',
      // Templar
      'aedric-spear': 'aedricSpear',
      'dawns-wrath': 'dawnsWrath',
      'restoring-light': 'restoringLight',
      // Warden
      'animal-companions': 'animalCompanions',
      'green-balance': 'greenBalance',
      'winters-embrace': 'wintersEmbrace',
      // Necromancer
      'grave-lord': 'graveLord',
      'bone-tyrant': 'boneTyrant',
      'living-death': 'livingDeath',
      // Arcanist
      'herald-of-the-tome': 'heraldOfTheTome',
      'soldier-of-apocrypha': 'soldierOfApocrypha',
      'curative-runeforms': 'curativeRuneforms'
    };
    
    selectedSubclasses.forEach(subclassId => {
      const skillLineKey = subclassToSkillLineMap[subclassId];
      if (skillLineKey) {
        // Find which class this subclass belongs to
        selectedClasses.forEach(classId => {
          if (allSkills[classId] && allSkills[classId][skillLineKey]) {
            availableSkills.push(...allSkills[classId][skillLineKey]);
          }
        });
      }
    });
  }

  // Add guild and world skills
  if (selectedSkillLines && guildWorldSkills) {
    selectedSkillLines.forEach(skillLineId => {
      const skillLine = guildWorldSkills.find(sl => sl.id === skillLineId);
      if (skillLine) {
        availableSkills.push(...skillLine.skills);
      }
    });
  }

  return availableSkills.filter(skill => skill.type !== 'passive'); // Only return active and ultimate skills for selection
}

// Get passive skills that are automatically unlocked when subclasses are selected
export function getPassiveSkills(
  selectedSubclasses: string[],
  allSkills: { [classId: string]: { [subclassId: string]: Skill[] } },
  selectedClasses: string[]
): Skill[] {
  const passiveSkills: Skill[] = [];
  
  // Add class subclass passive skills from all selected classes
  if (selectedClasses.length > 0 && selectedSubclasses.length > 0) {
    // Map subclass IDs to skill line names
    const subclassToSkillLineMap: { [key: string]: string } = {
      // Dragonknight
      'draconic-power': 'draconicPower',
      'ardent-flame': 'ardentFlame', 
      'earthen-heart': 'earthenHeart',
      // Sorcerer
      'dark-magic': 'darkMagic',
      'daedric-summoning': 'daedricSummoning',
      'storm-calling': 'stormCalling',
      // Nightblade
      'assassination': 'assassination',
      'shadow': 'shadow',
      'siphoning': 'siphoning',
      // Templar
      'aedric-spear': 'aedricSpear',
      'dawns-wrath': 'dawnsWrath',
      'restoring-light': 'restoringLight',
      // Warden
      'animal-companions': 'animalCompanions',
      'green-balance': 'greenBalance',
      'winters-embrace': 'wintersEmbrace',
      // Necromancer
      'grave-lord': 'graveLord',
      'bone-tyrant': 'boneTyrant',
      'living-death': 'livingDeath',
      // Arcanist
      'herald-of-the-tome': 'heraldOfTheTome',
      'soldier-of-apocrypha': 'soldierOfApocrypha',
      'curative-runeforms': 'curativeRuneforms'
    };
    
    selectedSubclasses.forEach(subclassId => {
      const skillLineKey = subclassToSkillLineMap[subclassId];
      if (skillLineKey) {
        // Find which class this subclass belongs to
        selectedClasses.forEach(classId => {
          if (allSkills[classId] && allSkills[classId][skillLineKey]) {
            const classPassives = allSkills[classId][skillLineKey].filter(skill => skill.type === 'passive');
            passiveSkills.push(...classPassives);
          }
        });
      }
    });
  }

  return passiveSkills;
}

// Skills for remaining classes
import { Skill } from './skills';
import { templarSkills as templarSkillsData } from './templar-skills';
import { arcanistSkills as arcanistSkillsData } from './arcanist-skills';
import { wardenSkills as wardenSkillsData } from './warden-skills';

// Templar Skills (now imported from templar-skills.ts)
export const templarSkills = templarSkillsData;

// Warden Skills (now imported from warden-skills.ts)
export const wardenSkills = wardenSkillsData;

// Necromancer Skills (placeholder)
export const necromancerSkills = {
  graveLord: [] as Skill[],
  boneTyrant: [] as Skill[],
  livingDeath: [] as Skill[]
};

// Arcanist Skills (now imported from arcanist-skills.ts)
export const arcanistSkills = arcanistSkillsData;

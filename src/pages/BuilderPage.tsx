import { useState, useEffect } from 'react';
import { esoClasses, ESOClass } from '../../data/classes';
import { dragonknightSkills } from '../../data/dragonknight-skills';
import { sorcererSkills } from '../../data/sorcerer-skills';
import { nightbladeSkills } from '../../data/nightblade-skills';
import { templarSkills } from '../../data/templar-skills';
import { wardenSkills } from '../../data/warden-skills';
import { necromancerSkills } from '../../data/necromancer-skills';
import { arcanistSkills } from '../../data/arcanist-skills';
import { guildAndWorldSkillLines } from '../../data/guild-world-skills';
import { calculateBuildScores, PlayerBuild, BuildAnalysis } from '../../data/build-system';
import { 
  createEmptyBuild, 
  isSkillSelected, 
  getSelectedMorphId,
  validateBuild, 
  getAvailableSkills,
  getPassiveSkills,
  findSkillById 
} from '../utils/buildHelpers';
import { SkillCard } from '../components/SkillCard';

// Combine all skills
const allSkills = {
  dragonknight: dragonknightSkills,
  sorcerer: sorcererSkills,
  nightblade: nightbladeSkills,
  templar: templarSkills,
  warden: wardenSkills,
  necromancer: necromancerSkills,
  arcanist: arcanistSkills
};

export const BuilderPage = () => {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [selectedSkillLines, setSelectedSkillLines] = useState<string[]>([]); // Guild/World skill lines
  const [currentBuild, setCurrentBuild] = useState<PlayerBuild>(() => 
    createEmptyBuild([], 'Multi-Class Build')
  );
  const [buildAnalysis, setBuildAnalysis] = useState<BuildAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Update build when classes change
  useEffect(() => {
    setCurrentBuild(prev => ({
      ...prev,
      selectedClasses: selectedClasses,
      selectedSubclasses: [], // Reset subclasses when classes change
      skills: [] // Reset skills when classes change
    }));
    setSelectedSkillLines([]); // Reset guild/world skill lines when classes change
    setBuildAnalysis(null);
  }, [selectedClasses]);

  // Recalculate scores when build changes
  useEffect(() => {
    if (currentBuild.skills.length > 0 && (currentBuild.selectedSubclasses.length > 0 || selectedSkillLines.length > 0)) {
      setIsAnalyzing(true);
      // Simulate brief loading for better UX
      setTimeout(() => {
        const analysis = calculateBuildScores(currentBuild, allSkills, esoClasses);
        setBuildAnalysis(analysis);
        setIsAnalyzing(false);
      }, 300);
    } else {
      setBuildAnalysis(null);
    }
  }, [currentBuild, selectedSkillLines]);

  const handleClassToggle = (classId: string) => {
    setSelectedClasses(prev => {
      const isSelected = prev.includes(classId);
      
      if (isSelected) {
        // Remove class
        return prev.filter(id => id !== classId);
      } else {
        // Add class (with limit check of 3)
        if (prev.length >= 3) {
          return prev; // Don't add if at limit
        }
        return [...prev, classId];
      }
    });
  };

  const handleSubclassToggle = (subclassId: string) => {
    setCurrentBuild(prev => {
      const isCurrentlySelected = prev.selectedSubclasses.includes(subclassId);
      
      if (isCurrentlySelected) {
        // Remove subclass
        return {
          ...prev,
          selectedSubclasses: prev.selectedSubclasses.filter(id => id !== subclassId)
        };
      } else {
        // Add subclass (with limit check of 3)
        if (prev.selectedSubclasses.length >= 3) {
          return prev; // Don't add if at limit
        }
        return {
          ...prev,
          selectedSubclasses: [...prev.selectedSubclasses, subclassId]
        };
      }
    });
  };

  const handleSkillToggle = (skillId: string, morphId?: string) => {
    setCurrentBuild(prev => {
      const isSelected = isSkillSelected(prev.skills, skillId);
      
      if (isSelected) {
        // Remove skill
        return {
          ...prev,
          skills: prev.skills.filter(skill => skill.skillId !== skillId)
        };
      } else {
        // Add skill (with limit check)
        if (prev.skills.length >= 12) {
          return prev; // Don't add if at limit
        }
        return {
          ...prev,
          skills: [...prev.skills, { skillId, morphId }]
        };
      }
    });
  };

  const handleBuildNameChange = (name: string) => {
    setCurrentBuild(prev => ({ ...prev, name }));
  };

  const handleSkillLineToggle = (skillLineId: string) => {
    setSelectedSkillLines(prev => {
      const isSelected = prev.includes(skillLineId);
      
      if (isSelected) {
        return prev.filter(id => id !== skillLineId);
      } else {
        return [...prev, skillLineId];
      }
    });
  };

  const validation = validateBuild(currentBuild, selectedSkillLines, allSkills, guildAndWorldSkillLines);
  const availableSkills = getAvailableSkills(
    currentBuild.selectedSubclasses, 
    allSkills, 
    selectedClasses, 
    selectedSkillLines, 
    guildAndWorldSkillLines
  );
  const passiveSkills = getPassiveSkills(
    currentBuild.selectedSubclasses,
    allSkills,
    selectedClasses
  );

  return (
    <div className="min-h-screen bg-eso-darker">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-eso font-bold text-eso-gold mb-4">
            ESO Build Creator
          </h1>
          <p className="text-gray-300 text-lg">
            Create and analyze your Elder Scrolls Online builds
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Build Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Build Name */}
            <div className="bg-eso-dark rounded-lg p-6 border border-eso-gold/20">
              <label className="block text-eso-gold font-semibold mb-2">
                Build Name
              </label>
              <input
                type="text"
                value={currentBuild.name}
                onChange={(e) => handleBuildNameChange(e.target.value)}
                className="w-full px-4 py-2 bg-eso-darker border border-eso-gold/30 
                         rounded text-white focus:border-eso-gold focus:outline-none"
                placeholder="Enter build name..."
              />
            </div>

            {/* Class Selection */}
            <div className="bg-eso-dark rounded-lg p-6 border border-eso-gold/20">
              <h2 className="text-xl font-eso font-bold text-eso-gold mb-4">
                Select Classes ({selectedClasses.length}/3)
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {esoClasses.map((esoClass: ESOClass) => {
                  const isSelected = selectedClasses.includes(esoClass.id);
                  const canSelect = selectedClasses.length < 3;
                  const isDisabled = !isSelected && !canSelect;
                  
                  return (
                    <button
                      key={esoClass.id}
                      onClick={() => (canSelect || isSelected) && handleClassToggle(esoClass.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        isSelected
                          ? 'border-eso-gold bg-eso-gold/10 text-eso-gold'
                          : isDisabled
                            ? 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'
                            : 'border-gray-600 bg-eso-darker text-gray-300 hover:border-eso-gold/50'
                      }`}
                    >
                      <div className="font-semibold">{esoClass.name}</div>
                      {isDisabled && (
                        <div className="text-xs text-gray-500 mt-1">
                          Max 3 classes
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Subclass Selection */}
            <div className="bg-eso-dark rounded-lg p-6 border border-eso-gold/20">
              <h2 className="text-xl font-eso font-bold text-eso-gold mb-4">
                Select Subclasses ({currentBuild.selectedSubclasses.length}/3)
              </h2>
              {selectedClasses.length === 0 ? (
                <p className="text-gray-400 italic">
                  Select classes above to unlock subclasses
                </p>
              ) : (
                <div className="space-y-4">
                  {selectedClasses.map(classId => {
                    const selectedClass = esoClasses.find(c => c.id === classId);
                    if (!selectedClass) return null;
                    
                    return (
                      <div key={classId} className="border border-gray-600 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-eso-gold mb-3">
                          {selectedClass.name} Subclasses
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {selectedClass.subclasses.map(subclass => {
                            const isSelected = currentBuild.selectedSubclasses.includes(subclass.id);
                            const canSelect = currentBuild.selectedSubclasses.length < 3;
                            const isDisabled = !isSelected && !canSelect;
                            
                            return (
                              <div
                                key={subclass.id}
                                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                                  isSelected
                                    ? 'border-eso-gold bg-eso-gold/10 text-eso-gold cursor-pointer'
                                    : isDisabled
                                      ? 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'
                                      : 'border-gray-600 bg-eso-darker text-gray-300 hover:border-eso-gold/50 cursor-pointer'
                                }`}
                                onClick={() => (canSelect || isSelected) && handleSubclassToggle(subclass.id)}
                              >
                                <div className="font-semibold mb-1">{subclass.name}</div>
                                <div className="text-sm opacity-80 mb-2">{subclass.description}</div>
                                <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                                  subclass.archetype === 'DPS' ? 'bg-red-600/20 text-red-300' :
                                  subclass.archetype === 'Healer' ? 'bg-green-600/20 text-green-300' :
                                  subclass.archetype === 'Tank' ? 'bg-blue-600/20 text-blue-300' :
                                  'bg-purple-600/20 text-purple-300'
                                }`}>
                                  {subclass.archetype}
                                </div>
                                {isDisabled && (
                                  <div className="text-xs text-gray-500 mt-2">
                                    Max 3 subclasses selected
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Weapon Skill Lines */}
            <div className="bg-eso-dark rounded-lg p-6 border border-eso-gold/20">
              <h2 className="text-xl font-eso font-bold text-eso-gold mb-4">
                Weapon Skill Lines ({selectedSkillLines.filter(id => 
                  guildAndWorldSkillLines.find(sl => sl.id === id)?.category === 'Weapon'
                ).length} selected)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {guildAndWorldSkillLines
                  .filter(skillLine => skillLine.category === 'Weapon')
                  .map(skillLine => {
                    const isSelected = selectedSkillLines.includes(skillLine.id);
                    
                    return (
                      <div
                        key={skillLine.id}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? 'border-eso-gold bg-eso-gold/10 text-eso-gold'
                            : 'border-gray-600 bg-eso-darker text-gray-300 hover:border-eso-gold/50'
                        }`}
                        onClick={() => handleSkillLineToggle(skillLine.id)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-semibold">{skillLine.name}</div>
                          <div className="text-xs px-2 py-1 rounded bg-orange-600/20 text-orange-300">
                            Weapon
                          </div>
                        </div>
                        <div className="text-sm opacity-80 mb-2">{skillLine.description}</div>
                        {skillLine.unlockRequirement && (
                          <div className="text-xs text-gray-400 italic">
                            Requirement: {skillLine.unlockRequirement}
                          </div>
                        )}
                        <div className="text-xs text-eso-gold mt-2">
                          {skillLine.skills.length} skills available
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Guild, World & PvP Skill Lines */}
            <div className="bg-eso-dark rounded-lg p-6 border border-eso-gold/20">
              <h2 className="text-xl font-eso font-bold text-eso-gold mb-4">
                Guild, World & PvP Skill Lines ({selectedSkillLines.filter(id => 
                  guildAndWorldSkillLines.find(sl => sl.id === id)?.category !== 'Weapon'
                ).length} selected)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {guildAndWorldSkillLines
                  .filter(skillLine => skillLine.category !== 'Weapon')
                  .map(skillLine => {
                  const isSelected = selectedSkillLines.includes(skillLine.id);
                  
                  return (
                    <div
                      key={skillLine.id}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-eso-gold bg-eso-gold/10 text-eso-gold'
                          : 'border-gray-600 bg-eso-darker text-gray-300 hover:border-eso-gold/50'
                      }`}
                      onClick={() => handleSkillLineToggle(skillLine.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold">{skillLine.name}</div>
                        <div className={`text-xs px-2 py-1 rounded ${
                          skillLine.category === 'Guild' ? 'bg-purple-600/20 text-purple-300' :
                          skillLine.category === 'PvP' ? 'bg-red-600/20 text-red-300' :
                          skillLine.category === 'World' ? 'bg-blue-600/20 text-blue-300' :
                          'bg-gray-600/20 text-gray-300'
                        }`}>
                          {skillLine.category}
                        </div>
                      </div>
                      <div className="text-sm opacity-80 mb-2">{skillLine.description}</div>
                      {skillLine.unlockRequirement && (
                        <div className="text-xs text-gray-400 italic">
                          Requirement: {skillLine.unlockRequirement}
                        </div>
                      )}
                      <div className="text-xs text-eso-gold mt-2">
                        {skillLine.skills.length} skills available
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skill Selection */}
            <div className="bg-eso-dark rounded-lg p-6 border border-eso-gold/20">
              <h2 className="text-xl font-eso font-bold text-eso-gold mb-4">
                Select Active Skills ({currentBuild.skills.length}/12)
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                Passive skills are automatically unlocked when you select subclasses
              </p>
              {availableSkills.length === 0 ? (
                <p className="text-gray-400 italic">
                  Select subclasses and/or guild skill lines above to unlock skills
                </p>
              ) : (
                <div className="space-y-6">
                  {/* Active and Ultimate Skills */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Active & Ultimate Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {availableSkills.map(skill => {
                        const isSelected = isSkillSelected(currentBuild.skills, skill.id);
                        const canAdd = currentBuild.skills.length < 12;
                        const selectedMorphId = getSelectedMorphId(currentBuild.skills, skill.id);
                        
                        return (
                          <SkillCard
                            key={skill.id}
                            skill={skill}
                            isSelected={isSelected}
                            canAdd={canAdd}
                            onSkillToggle={handleSkillToggle}
                            selectedMorphId={selectedMorphId}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Passive Skills - Auto-unlocked */}
                  {passiveSkills.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Passive Skills - Auto-Unlocked ({passiveSkills.length})
                      </h3>
                      <p className="text-sm text-green-400 mb-3">
                        ✓ These passive skills are automatically unlocked based on your selected subclasses
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {passiveSkills.map(skill => (
                          <div
                            key={skill.id}
                            className="p-4 rounded-lg border-2 border-green-600/30 bg-green-900/10"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-green-300">{skill.name}</h4>
                              <div className="text-xs px-2 py-1 rounded bg-green-600/20 text-green-300">
                                PASSIVE
                              </div>
                            </div>
                            <p className="text-sm text-gray-300 mb-2">{skill.description}</p>
                            {skill.effects && skill.effects.length > 0 && (
                              <div className="space-y-1">
                                {skill.effects.map((effect, index) => (
                                  <div key={index} className="text-xs text-green-400">
                                    • {effect.description}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Validation Messages */}
            {(validation.errors.length > 0 || validation.warnings.length > 0) && (
              <div className="bg-eso-dark rounded-lg p-4 border border-eso-gold/20">
                {validation.errors.map((error, index) => (
                  <div key={index} className="text-red-400 mb-2">
                    ⚠️ {error}
                  </div>
                ))}
                {validation.warnings.map((warning, index) => (
                  <div key={index} className="text-yellow-400 mb-2">
                    💡 {warning}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Build Analysis */}
          <div className="space-y-6">
            {/* Build Scores */}
            <div className="bg-eso-dark rounded-lg p-6 border border-eso-gold/20">
              <h3 className="text-lg font-eso font-bold text-eso-gold mb-4">
                Build Analysis
              </h3>
              {isAnalyzing ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-eso-gold mx-auto mb-4"></div>
                  <p className="text-gray-400">Analyzing build...</p>
                </div>
              ) : buildAnalysis ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {Math.round(buildAnalysis.scores.tank)}
                      </div>
                      <div className="text-sm text-gray-400">Tank</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {Math.round(buildAnalysis.scores.healer)}
                      </div>
                      <div className="text-sm text-gray-400">Healer</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">
                        {Math.round(buildAnalysis.scores.dps)}
                      </div>
                      <div className="text-sm text-gray-400">DPS</div>
                    </div>
                  </div>
                  {buildAnalysis.recommendations.length > 0 && (
                    <div className="border-t border-gray-600 pt-4">
                      <h4 className="font-semibold text-eso-gold mb-2">Recommendations:</h4>
                      <ul className="space-y-1">
                        {buildAnalysis.recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-gray-300">
                            • {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-400 italic">
                  Select subclasses and/or guild skill lines to analyze your build
                </p>
              )}
            </div>

            {/* Selected Skills Summary */}
            <div className="bg-eso-dark rounded-lg p-6 border border-eso-gold/20">
              <h3 className="text-lg font-eso font-bold text-eso-gold mb-4">
                Selected Skills ({currentBuild.skills.length}/12)
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {currentBuild.skills.length === 0 ? (
                  <p className="text-gray-400 italic">No skills selected</p>
                ) : (
                  currentBuild.skills.map((buildSkill, index) => {
                    const skill = findSkillById(buildSkill.skillId, allSkills, guildAndWorldSkillLines);
                    const selectedMorph = skill?.morphs?.find(morph => morph.id === buildSkill.morphId);
                    const displayName = selectedMorph ? selectedMorph.name : skill?.name || 'Unknown Skill';
                    
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 bg-eso-darker rounded"
                      >
                        <div className="flex-1">
                          <span className="text-gray-300">{displayName}</span>
                          {selectedMorph && (
                            <div className="text-xs text-eso-gold mt-1">
                              Morph of {skill?.name}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => handleSkillToggle(buildSkill.skillId)}
                          className="text-red-400 hover:text-red-300 text-sm ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

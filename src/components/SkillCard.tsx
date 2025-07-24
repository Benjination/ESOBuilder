import { useState } from 'react';
import { Skill } from '../../data/skills';

interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
  canAdd: boolean;
  onSkillToggle: (skillId: string, morphId?: string) => void;
  selectedMorphId?: string;
}

export const SkillCard = ({ skill, isSelected, canAdd, onSkillToggle, selectedMorphId }: SkillCardProps) => {
  const [showMorphs, setShowMorphs] = useState(false);

  const handleSkillClick = () => {
    if (!canAdd && !isSelected) return;
    
    if (skill.morphs && skill.morphs.length > 0 && !isSelected) {
      // If skill has morphs and isn't selected, show morph options
      setShowMorphs(true);
    } else {
      // If no morphs or skill is already selected, toggle normally
      onSkillToggle(skill.id);
      setShowMorphs(false);
    }
  };

  const handleMorphSelect = (morphId: string) => {
    onSkillToggle(skill.id, morphId);
    setShowMorphs(false);
  };

  const selectedMorph = skill.morphs?.find(morph => morph.id === selectedMorphId);

  return (
    <div className="relative">
      <div
        className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
          isSelected 
            ? 'border-eso-gold bg-eso-gold/10 text-eso-gold'
            : canAdd 
              ? 'border-gray-600 bg-eso-darker text-gray-300 hover:border-eso-gold/50'
              : 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'
        }`}
        onClick={handleSkillClick}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="font-semibold">
            {selectedMorph ? selectedMorph.name : skill.name}
          </div>
          {skill.morphs && skill.morphs.length > 0 && (
            <div className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded">
              Morphs: {skill.morphs.length}
            </div>
          )}
        </div>
        
        <div className="text-sm opacity-80 mb-2">
          {selectedMorph ? selectedMorph.description : skill.description}
        </div>

        {selectedMorph && (
          <div className="text-xs text-eso-gold mb-2 p-2 bg-eso-gold/5 rounded">
            <strong>Morph Changes:</strong> {selectedMorph.changes}
          </div>
        )}

        {/* Skill Type and Resource Cost */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs px-2 py-1 rounded ${
            skill.type === 'ultimate' ? 'bg-orange-600/20 text-orange-300' :
            skill.type === 'active' ? 'bg-blue-600/20 text-blue-300' :
            'bg-gray-600/20 text-gray-300'
          }`}>
            {skill.type.charAt(0).toUpperCase() + skill.type.slice(1)}
          </span>
          
          {skill.resourceCost && (
            <span className={`text-xs px-2 py-1 rounded ${
              skill.resourceCost.type === 'magicka' ? 'bg-blue-600/20 text-blue-300' :
              skill.resourceCost.type === 'stamina' ? 'bg-green-600/20 text-green-300' :
              skill.resourceCost.type === 'ultimate' ? 'bg-orange-600/20 text-orange-300' :
              'bg-red-600/20 text-red-300'
            }`}>
              {skill.resourceCost.amount} {skill.resourceCost.type}
            </span>
          )}
        </div>

        {/* Buffs and Debuffs */}
        <div className="flex flex-wrap gap-1">
          {skill.buffsApplied.map((buffId, index) => (
            <span key={index} className="inline-block px-2 py-1 rounded text-xs bg-green-600/20 text-green-300">
              +{buffId.replace(/_/g, ' ')}
            </span>
          ))}
          {skill.debuffsApplied.map((debuffId, index) => (
            <span key={index} className="inline-block px-2 py-1 rounded text-xs bg-red-600/20 text-red-300">
              -{debuffId.replace(/_/g, ' ')}
            </span>
          ))}
        </div>

        {/* Selected indicator */}
        {isSelected && (
          <div className="absolute top-2 right-2 w-3 h-3 bg-eso-gold rounded-full"></div>
        )}
      </div>

      {/* Morph Selection Modal */}
      {showMorphs && skill.morphs && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-eso-dark border border-eso-gold rounded-lg p-4 shadow-xl">
          <div className="text-sm font-semibold text-eso-gold mb-3">
            Choose a morph for {skill.name}:
          </div>
          
          <div className="space-y-2">
            {skill.morphs.map(morph => (
              <button
                key={morph.id}
                onClick={() => handleMorphSelect(morph.id)}
                className="w-full text-left p-3 rounded border border-gray-600 hover:border-eso-gold/50 
                         bg-eso-darker hover:bg-eso-gold/5 transition-all duration-200"
              >
                <div className="font-semibold text-gray-200 mb-1">{morph.name}</div>
                <div className="text-xs text-gray-400 mb-2">{morph.description}</div>
                <div className="text-xs text-eso-gold">{morph.changes}</div>
              </button>
            ))}
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => onSkillToggle(skill.id)}
              className="flex-1 px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded text-sm transition-colors"
            >
              Use Base Skill
            </button>
            <button
              onClick={() => setShowMorphs(false)}
              className="px-3 py-2 bg-eso-gold/20 hover:bg-eso-gold/30 text-eso-gold rounded text-sm transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Phase } from '../data';
import { Lock, Unlock, CheckCircle } from 'lucide-react';

interface SkillTreeProps {
  phases: Phase[];
  currentWeekId: number;
  setCurrentWeekId: (id: number) => void;
}

export function SkillTree({ phases, currentWeekId, setCurrentWeekId }: SkillTreeProps) {
  
  // Calculate if a week is fully completed by checking all days
  const isWeekCompleted = (week: any) => 
    week.days.every((day: any) => day.completed);
  
  // Determine highest unlocked week (can be one past the last fully completed)
  let highestUnlocked = 1;
  for (const phase of phases) {
    for (const week of phase.weeks) {
      if (isWeekCompleted(week)) {
        highestUnlocked = Math.max(highestUnlocked, week.id + 1);
      }
    }
  }

  return (
    <motion.div 
      className="bg-dark-panel p-6 rounded-xl border border-dark-border"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="text-neon-purple">~/</span>
        Skill_Tree.sh
      </h2>

      <div className="relative border-l-2 border-gray-800 ml-4 space-y-8 pb-4">
        {phases.map((phase, pIdx) => (
          <div key={phase.id} className="relative">
            <div className="absolute -left-2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-purple z-10" />
            <div className="pl-6 pb-2">
              <h3 className="text-sm font-bold text-neon-purple tracking-wider uppercase mb-4">
                {phase.title}
              </h3>
              <div className="space-y-4">
                {phase.weeks.map((week, wIdx) => {
                  const unlocked = week.id <= highestUnlocked;
                  const completed = isWeekCompleted(week);
                  const isCurrent = currentWeekId === week.id;
                  
                  return (
                    <div 
                      key={week.id}
                      onClick={() => unlocked && setCurrentWeekId(week.id)}
                      className={`relative p-3 rounded-lg border transition-all ${
                        unlocked ? 'cursor-pointer hover:border-gray-500' : 'cursor-not-allowed opacity-50'
                      } ${
                        isCurrent 
                          ? 'bg-gray-800 border-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.3)]' 
                          : 'bg-dark-bg border-dark-border'
                      }`}
                    >
                      {/* Connection line to next week */}
                      {(wIdx < phase.weeks.length - 1 || pIdx < phases.length - 1) && (
                        <div className="absolute left-[-21px] top-6 w-4 border-t-2 border-gray-800" />
                      )}

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`font-bold ${completed ? 'text-neon-green' : unlocked ? 'text-gray-200' : 'text-gray-500'}`}>
                              {week.title}
                            </span>
                            {completed && <CheckCircle size={14} className="text-neon-green" />}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">{week.theme}</div>
                        </div>
                        <div className={unlocked ? 'text-neon-purple' : 'text-gray-600'}>
                          {unlocked ? <Unlock size={16} /> : <Lock size={16} />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

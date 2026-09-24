import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Week, Day } from '../data';
import { CheckCircle, Circle, Lightbulb, BookOpen, Brain, TerminalSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProgressTrackerProps {
  currentWeek: Week;
  toggleDay: (dayId: string) => void;
  level: number;
  levelTitle: string;
  xpInCurrentLevel: number;
  xpRequiredForNextLevel: number;
}

export function ProgressTracker({ 
  currentWeek, 
  toggleDay, 
  level, 
  levelTitle, 
  xpInCurrentLevel,
  xpRequiredForNextLevel 
}: ProgressTrackerProps) {
  
  const handleToggle = (dayId: string, completed: boolean, e: React.MouseEvent) => {
    toggleDay(dayId);
    
    if (!completed) {
      // Trigger confetti on completion
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.right) / 2 / window.innerWidth;
      const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
      
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { x, y },
        colors: ['#39ff14', '#3b82f6', '#bc13fe']
      });
    }
  };

  const allDays = currentWeek.days;
  const completedCount = allDays.filter(d => d.completed).length;
  const progressPercent = allDays.length === 0 ? 0 : Math.round((completedCount / allDays.length) * 100);
  const xpPercent = Math.round((xpInCurrentLevel / xpRequiredForNextLevel) * 100);

  const AI_TIPS: Record<number, string> = {
    1: "In interviews, clearly define Encapsulation vs Abstraction. Encapsulation hides data, Abstraction hides complexity.",
    2: "Remember: A virtual function table (vtable) adds a tiny memory overhead, which is why C++ doesn't make functions virtual by default.",
    3: "SOLID is easily the most asked topic in system design rounds. Knowing how to apply Dependency Inversion (DIP) shows senior-level thinking.",
    4: "Don't just memorize Design Patterns. Understand *why* we use them. Singleton is for shared state, Factory is for loose coupling.",
    5: "Always filter data in the WHERE clause, not the HAVING clause, if possible. It's much faster!",
    6: "Window functions like ROW_NUMBER() are the #1 way to solve 'top N per category' questions on LeetCode.",
    7: "Normalization reduces data redundancy, but sometimes denormalization is used in read-heavy systems to speed up queries.",
    8: "B-Trees are essentially balanced search trees. They keep data sorted and allow searches, sequential access, insertions, and deletions in logarithmic time.",
    9: "Context switching between processes is more expensive than between threads because processes don't share memory spaces.",
    10: "To prevent deadlocks, always acquire locks in the exact same predefined order across all threads.",
    11: "TCP guarantees delivery via ACKs, while UDP just fires and forgets (ideal for video streaming or gaming).",
    12: "When defending your architecture, always talk about trade-offs. Why EF Core? Developer speed. Tradeoff? Slight performance hit compared to raw SQL."
  };

  return (
    <div className="flex flex-col gap-6 pb-20">
      {/* XP Bar Component */}
      <motion.div 
        className="bg-dark-panel p-6 rounded-xl border border-dark-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex justify-between items-end mb-2">
          <div>
            <div className="text-blue-400 font-bold text-lg">Level {level}: {levelTitle}</div>
            <div className="text-sm text-gray-400">{xpInCurrentLevel} / {xpRequiredForNextLevel} XP</div>
          </div>
          <div className="text-neon-green font-bold">{xpPercent}% to next level</div>
        </div>
        <div className="w-full bg-dark-bg h-4 rounded-full overflow-hidden border border-gray-800">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 via-neon-purple to-neon-green"
            initial={{ width: 0 }}
            animate={{ width: `${xpPercent}%` }}
            transition={{ duration: 1, type: "spring" }}
          />
        </div>
      </motion.div>

      {/* Current Week Header */}
      <motion.div 
        key={currentWeek.id}
        className="bg-dark-panel p-6 rounded-xl border border-dark-border flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex justify-between items-center mb-4 border-b border-dark-border pb-4">
          <div>
            <h2 className="text-2xl font-bold">{currentWeek.title}: {currentWeek.theme}</h2>
            <p className="text-sm text-gray-400 mt-1">{currentWeek.description}</p>
          </div>
          <div className="text-4xl font-bold text-neon-green">{progressPercent}%</div>
        </div>
        
        <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg flex gap-3 text-sm text-blue-200">
          <Lightbulb className="text-blue-400 shrink-0 mt-0.5" />
          <p><strong>Interview Tip:</strong> {AI_TIPS[currentWeek.id] || "Keep grinding! Consistency is key."}</p>
        </div>
      </motion.div>

      {/* Daily Roadmap */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {currentWeek.days.map((day, idx) => (
            <motion.div 
              key={day.id}
              className={`p-6 rounded-xl border relative overflow-hidden transition-colors ${
                day.completed ? 'bg-dark-bg/80 border-neon-green/30' : 'bg-dark-panel border-dark-border'
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.05 * idx }}
            >
              {/* Day Header with Toggle */}
              <div 
                className="flex items-center justify-between border-b border-gray-800 pb-4 mb-5 cursor-pointer group"
                onClick={(e) => handleToggle(day.id, day.completed, e)}
              >
                <div>
                  <h3 className={`text-xl font-bold transition-colors ${day.completed ? 'text-gray-500 line-through' : 'text-neon-purple group-hover:text-purple-400'}`}>
                    {day.title}
                  </h3>
                </div>
                <div className={`transition-all ${day.completed ? 'text-neon-green scale-110' : 'text-gray-500 group-hover:text-gray-400'}`}>
                  {day.completed ? <CheckCircle size={28} /> : <Circle size={28} />}
                </div>
              </div>

              {/* Day Content */}
              <div className={`space-y-6 ${day.completed ? 'opacity-50 grayscale' : ''}`}>
                
                {/* 1. Concepts to Learn */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                    <Brain size={16} className="text-blue-400" />
                    Concepts to Learn
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm ml-2">
                    {day.concepts.map((concept, cIdx) => (
                      <li key={cIdx}>{concept}</li>
                    ))}
                  </ul>
                </div>

                {/* 2. Targeted Resource */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                    <BookOpen size={16} className="text-yellow-400" />
                    Targeted Resource
                  </h4>
                  <div className="bg-dark-bg p-3 rounded text-sm text-gray-300 border border-gray-800">
                    {day.targetedResource}
                  </div>
                </div>

                {/* 3. Actionable Drill */}
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                    <TerminalSquare size={16} className="text-neon-green" />
                    Actionable Drill
                  </h4>
                  <div className="bg-blue-500/5 p-4 rounded-lg border border-blue-500/20 text-sm text-blue-100 font-mono">
                    {day.drill}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

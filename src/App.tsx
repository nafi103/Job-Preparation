import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { Timer } from './components/Timer';
import { ProgressTracker } from './components/ProgressTracker';
import { SkillTree } from './components/SkillTree';
import { ResourceHub } from './components/ResourceHub';
import { INITIAL_CURRICULUM } from './data';

function App() {
  const [phases, setPhases] = useState(INITIAL_CURRICULUM);
  const [currentWeekId, setCurrentWeekId] = useState(1);
  const [totalXp, setTotalXp] = useState(0);

  // Load from local storage if exists
  useEffect(() => {
    const saved = localStorage.getItem('fresher-dashboard-v6');
    if (saved) {
      try {
        const { phases: savedPhases, totalXp: savedXp } = JSON.parse(saved);
        if (savedPhases && savedPhases[0]?.weeks[0]?.days) {
          setPhases(savedPhases);
        } else {
          localStorage.removeItem('fresher-dashboard-v6');
          setPhases(INITIAL_CURRICULUM);
        }
        if (savedXp !== undefined) setTotalXp(savedXp);
      } catch (e) {
        console.error('Failed to load state', e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('fresher-dashboard-v6', JSON.stringify({ phases, totalXp }));
  }, [phases, totalXp]);

  const toggleDay = (dayId: string) => {
    let newlyCompleted = false;
    let newlyUncompleted = false;

    const newPhases = phases.map(phase => ({
      ...phase,
      weeks: phase.weeks.map(week => {
        if (week.id !== currentWeekId) return week;
        return {
          ...week,
          days: week.days.map(day => {
            if (day.id === dayId) {
              if (!day.completed) newlyCompleted = true;
              else newlyUncompleted = true;
              return { ...day, completed: !day.completed };
            }
            return day;
          })
        };
      })
    }));

    setPhases(newPhases);

    // Update XP (20 per day completed)
    if (newlyCompleted) setTotalXp(prev => prev + 20);
    if (newlyUncompleted) setTotalXp(prev => Math.max(0, prev - 20));
  };

  // Find current week object
  let currentWeek = phases[0].weeks[0];
  for (const phase of phases) {
    const found = phase.weeks.find(w => w.id === currentWeekId);
    if (found) {
      currentWeek = found;
      break;
    }
  }

  // Leveling logic
  const XP_PER_LEVEL = 50; // Slightly faster leveling
  const level = Math.floor(totalXp / XP_PER_LEVEL) + 1;
  const nextLevelXp = level * XP_PER_LEVEL;
  
  const getLevelTitle = (lvl: number) => {
    const titles = [
      "CP Novice", "Algorithmic Thinker", "Memory Manager", "Object Oriented", 
      "Database Queryist", "SQL Optimizer", "System Designer", "Concurrency Commander",
      "Network Navigator", "API Architect", "Backend Boss", "Software Engineer"
    ];
    return titles[Math.min(lvl - 1, titles.length - 1)];
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col max-w-[1600px] mx-auto text-gray-200">
      <header className="flex items-center justify-between mb-8 pb-4 border-b border-dark-border">
        <div className="flex items-center gap-3">
          <Terminal size={32} className="text-blue-400" />
          <h1 className="text-2xl font-mono font-bold tracking-tight">
            <span className="text-blue-400">~/</span><span className="text-neon-green">fresher_to_swe</span>.sh
          </h1>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        
        {/* Left Column: Skill Tree */}
        <div className="lg:col-span-3">
          <div className="sticky top-8">
            <SkillTree 
              phases={phases} 
              currentWeekId={currentWeekId} 
              setCurrentWeekId={setCurrentWeekId} 
            />
          </div>
        </div>

        {/* Center Column: Daily Roadmap */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <ProgressTracker 
            currentWeek={currentWeek}
            toggleDay={toggleDay}
            level={level}
            levelTitle={getLevelTitle(level)}
            xpInCurrentLevel={totalXp % XP_PER_LEVEL}
            xpRequiredForNextLevel={XP_PER_LEVEL}
          />
        </div>

        {/* Right Column: Timer & Resource Hub */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <div className="sticky top-8 flex flex-col gap-8 h-[calc(100vh-100px)]">
            <Timer />
            <div className="flex-1 min-h-0">
              <ResourceHub />
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;

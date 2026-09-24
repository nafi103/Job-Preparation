import React, { useState, useEffect } from 'react';
import { Terminal, LogOut } from 'lucide-react';
import { Timer } from './components/Timer';
import { ProgressTracker } from './components/ProgressTracker';
import { SkillTree } from './components/SkillTree';
import { ResourceHub } from './components/ResourceHub';
import { INITIAL_CURRICULUM, Phase } from './data';
import { supabase } from './lib/supabaseClient';
import { Login } from './components/Login';
import { Session } from '@supabase/supabase-js';

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const [phases, setPhases] = useState<Phase[]>(INITIAL_CURRICULUM);
  const [currentWeekId, setCurrentWeekId] = useState(1);
  const [totalXp, setTotalXp] = useState(0);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch from Supabase on login
  useEffect(() => {
    if (!session?.user) return;
    
    const fetchProgress = async () => {
      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('phases, total_xp')
          .eq('user_id', session.user.id)
          .maybeSingle();
        
        if (error) throw error;

        if (data) {
          setPhases(data.phases);
          setTotalXp(data.total_xp);
        } else {
          // Initialize for new user
          await supabase.from('user_progress').insert([
            { user_id: session.user.id, phases: INITIAL_CURRICULUM, total_xp: 0 }
          ]);
        }
      } catch (err) {
        console.error("Error fetching progress from Supabase", err);
      } finally {
        setIsDataLoaded(true);
      }
    };
    
    fetchProgress();
  }, [session]);

  // Sync to Supabase on change
  useEffect(() => {
    if (!session?.user || !isDataLoaded) return;
    
    const timeoutId = setTimeout(async () => {
      await supabase
        .from('user_progress')
        .update({ phases, total_xp: totalXp })
        .eq('user_id', session.user.id);
    }, 1000); // 1s debounce
    
    return () => clearTimeout(timeoutId);
  }, [phases, totalXp, session, isDataLoaded]);

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

    if (newlyCompleted) setTotalXp(prev => prev + 20);
    if (newlyUncompleted) setTotalXp(prev => Math.max(0, prev - 20));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsDataLoaded(false);
    setPhases(INITIAL_CURRICULUM);
    setTotalXp(0);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-neon-green font-mono">Initializing protocol...</div>;
  }

  if (!session) {
    return <Login />;
  }

  let currentWeek = phases[0].weeks[0];
  for (const phase of phases) {
    const found = phase.weeks.find(w => w.id === currentWeekId);
    if (found) {
      currentWeek = found;
      break;
    }
  }

  const XP_PER_LEVEL = 50; 
  const level = Math.floor(totalXp / XP_PER_LEVEL) + 1;
  
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
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </header>

      {!isDataLoaded ? (
        <div className="flex-1 flex items-center justify-center text-neon-green font-mono">Loading user profile...</div>
      ) : (
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              <SkillTree 
                phases={phases} 
                currentWeekId={currentWeekId} 
                setCurrentWeekId={setCurrentWeekId} 
              />
            </div>
          </div>

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

          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="sticky top-8 flex flex-col gap-8 h-[calc(100vh-100px)]">
              <Timer />
              <div className="flex-1 min-h-0">
                <ResourceHub />
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;

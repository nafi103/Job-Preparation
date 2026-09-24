import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

const PHASES = [
  { id: 1, name: 'Deep Concept Study', duration: 60 * 60, color: 'text-neon-purple', ring: '#bc13fe' },
  { id: 2, name: 'Hands-On Drill', duration: 45 * 60, color: 'text-neon-green', ring: '#39ff14' },
  { id: 3, name: 'Out-Loud Defense', duration: 15 * 60, color: 'text-blue-400', ring: '#60a5fa' }
];

export function Timer() {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(PHASES[0].duration);
  const [isActive, setIsActive] = useState(false);
  const [pulse, setPulse] = useState(false);

  const currentPhase = PHASES[currentPhaseIndex];
  
  useEffect(() => {
    let interval: number | null = null;

    if (isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      handleSkip();
      triggerPulse();
      playNotificationSound();
    }

    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);

  const handleSkip = () => {
    const nextIndex = (currentPhaseIndex + 1) % PHASES.length;
    setCurrentPhaseIndex(nextIndex);
    setTimeLeft(PHASES[nextIndex].duration);
    setIsActive(false);
  };
  
  const handleReset = () => {
    setTimeLeft(currentPhase.duration);
    setIsActive(false);
  };

  const triggerPulse = () => {
    setPulse(true);
    setTimeout(() => setPulse(false), 1000);
  };

  const playNotificationSound = () => {
    try {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
      audio.play();
    } catch (e) {
      console.error("Audio play failed", e);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progress = ((currentPhase.duration - timeLeft) / currentPhase.duration) * 100;
  const strokeDasharray = 283; // 2 * pi * r (r=45)
  const strokeDashoffset = strokeDasharray - (strokeDasharray * progress) / 100;

  return (
    <motion.div 
      className={`bg-dark-panel p-6 rounded-xl border border-dark-border shadow-lg relative overflow-hidden flex flex-col items-center justify-center ${pulse ? 'animate-pulse bg-gray-800' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-2">Focus Protocol</h2>
      <p className={`text-sm mb-6 ${currentPhase.color}`}>{currentPhase.name}</p>

      <div className="relative w-48 h-48 flex items-center justify-center mb-6">
        <svg className="w-full h-full transform -rotate-90 absolute" viewBox="0 0 100 100">
          <circle
            className="text-gray-700 stroke-current"
            strokeWidth="4"
            cx="50" cy="50" r="45"
            fill="transparent"
          ></circle>
          <circle
            className="transition-all duration-1000 ease-linear"
            strokeWidth="4"
            strokeLinecap="round"
            cx="50" cy="50" r="45"
            fill="transparent"
            stroke={currentPhase.ring}
            style={{
              strokeDasharray,
              strokeDashoffset
            }}
          ></circle>
        </svg>
        <div className="text-4xl font-bold tracking-wider relative z-10">
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={toggleTimer}
          className="p-3 rounded-full bg-dark-bg border border-dark-border hover:bg-gray-800 transition-colors"
        >
          {isActive ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>
        <button 
          onClick={handleReset}
          className="p-3 rounded-full bg-dark-bg border border-dark-border hover:bg-gray-800 transition-colors"
        >
          <RotateCcw size={24} />
        </button>
        <button 
          onClick={handleSkip}
          className="p-3 rounded-full bg-dark-bg border border-dark-border hover:bg-gray-800 transition-colors"
        >
          <SkipForward size={24} />
        </button>
      </div>
    </motion.div>
  );
}

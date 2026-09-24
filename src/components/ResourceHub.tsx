import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { GLOBAL_RESOURCES } from '../data';
import { motion } from 'framer-motion';

export function ResourceHub() {
  const categories = Array.from(new Set(GLOBAL_RESOURCES.map(r => r.category)));

  return (
    <motion.div 
      className="bg-dark-panel p-6 rounded-xl border border-dark-border h-full overflow-y-auto"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center gap-2 mb-6 border-b border-dark-border pb-4">
        <BookOpen className="text-neon-green" />
        <h2 className="text-xl font-bold">Resource Hub</h2>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-xs font-bold text-neon-purple uppercase tracking-wider mb-3">
              {category}
            </h3>
            <ul className="space-y-2">
              {GLOBAL_RESOURCES.filter(r => r.category === category).map((resource, idx) => (
                <li key={idx}>
                  <a 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-neon-green transition-colors p-2 rounded-lg hover:bg-dark-bg/80 group"
                  >
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-neon-green" />
                    <span className="text-sm font-medium">{resource.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

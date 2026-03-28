import React from 'react';
import { ExternalLink, Diamond, Bolt, Sparkles } from 'lucide-react';
import { GitHubRepo, Rarity } from '../types';
import { motion } from 'motion/react';

const ProjectCard: React.FC<{ repo: GitHubRepo }> = ({ repo }) => {
  const getRarity = (stars: number): Rarity => {
    if (stars > 50) return 'LEGENDARY';
    if (stars > 10) return 'EPIC';
    if (stars > 2) return 'RARE';
    return 'COMMON';
  };

  const rarity = getRarity(repo.stargazers_count);
  
  const rarityConfig = {
    LEGENDARY: { color: 'text-secondary', bg: 'bg-secondary', icon: <Diamond className="w-5 h-5 fill-current" /> },
    EPIC: { color: 'text-tertiary', bg: 'bg-tertiary', icon: <Bolt className="w-5 h-5 fill-current" /> },
    RARE: { color: 'text-primary', bg: 'bg-primary', icon: <Sparkles className="w-5 h-5 fill-current" /> },
    COMMON: { color: 'text-on-surface-variant', bg: 'bg-surface-variant', icon: null },
  };

  const config = rarityConfig[rarity];

  // Mock stats based on repo data
  const powerLevel = Math.min(100, 50 + (repo.stargazers_count * 2) + (repo.forks_count * 5));
  const syncSpeed = Math.min(100, 40 + (repo.name.length * 2));

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-surface-container hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/5"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-${rarity === 'LEGENDARY' ? 'secondary' : rarity === 'EPIC' ? 'tertiary' : 'primary'}/10 to-transparent pointer-events-none`} />
      
      <div className={`p-1 ${config.bg} absolute top-4 left-4 font-label text-[10px] font-bold text-surface-container-lowest uppercase tracking-widest px-2 shadow-lg`}>
        {rarity}
      </div>

      <div className="pt-16 px-6 pb-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-headline italic font-black uppercase tracking-tighter text-on-surface group-hover:text-primary-dim transition-colors line-clamp-1">
            {repo.name.replace(/-/g, '_')}
          </h3>
          <span className={config.color}>{config.icon}</span>
        </div>
        
        <p className="font-body text-on-surface-variant text-sm mb-6 leading-relaxed line-clamp-2 h-10">
          {repo.description || "No tactical description provided for this module."}
        </p>

        <div className="space-y-4 mb-8">
          <StatBar label="POWER_LEVEL" value={powerLevel} color="text-primary" />
          <StatBar label="SYNC_SPEED" value={syncSpeed} color="text-tertiary" />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {repo.language && (
            <span className="bg-surface-variant px-3 py-1 font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
              {repo.language}
            </span>
          )}
          {repo.topics.slice(0, 2).map(topic => (
            <span key={topic} className="bg-surface-variant px-3 py-1 font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-outline-variant/10 px-6 py-4 flex justify-between items-center bg-surface-container-low">
        <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">ID: V-{repo.id.toString().slice(-5)}-{repo.name.charAt(0).toUpperCase()}</span>
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:scale-125 transition-transform"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.article>
  );
};

const StatBar = ({ label, value, color }: { label: string; value: number; color: string }) => {
  const segments = 10;
  const activeSegments = Math.round((value / 100) * segments);

  return (
    <div>
      <div className="flex justify-between font-label text-[10px] uppercase tracking-widest mb-1">
        <span>{label}</span>
        <span className={color}>{value}%</span>
      </div>
      <div className="flex gap-0.5">
        {[...Array(segments)].map((_, i) => (
          <div 
            key={i} 
            className={`stat-segment ${i < activeSegments ? color : 'text-outline-variant/30'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

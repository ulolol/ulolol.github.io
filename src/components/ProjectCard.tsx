import React from 'react';
import { ExternalLink, Star, Eye, Zap, Sparkles, Shield, Flame } from 'lucide-react';
import { GitHubRepo, ElementalType, ELEMENTAL_CONFIGS, resolveDifficulty, resolveElementalType } from '../types';
import { playChiptuneClick, playHoloSparkle } from '../utils/audio';

interface ProjectCardProps {
  repo: GitHubRepo;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  const element: ElementalType = resolveElementalType(repo.name, repo.description, repo.language);
  const rarity = resolveDifficulty(
    repo.name,
    repo.stargazers_count > 10 ? 'EPIC' : repo.stargazers_count > 2 ? 'ELITE' : 'COMMON'
  );
  const config = ELEMENTAL_CONFIGS[element];
  const isRare = rarity === 'ULTIMATUS' || rarity === 'LEGENDARY';

  const powerLevel = Math.min(99, 55 + repo.stargazers_count * 2 + repo.forks_count * 5);
  const syncSpeed = Math.min(99, 45 + repo.name.length * 2);

  return (
    <article
      onMouseEnter={() => {
        if (isRare) playHoloSparkle();
      }}
      className="neo-box holo-foil bg-surface-container rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 relative group"
    >
      {/* Top Header Bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b-2 border-ink/10">
          <span
            className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded border-2 border-ink tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_#121316]"
            style={{ backgroundColor: config.accent, color: '#121316' }}
          >
            {element === 'AI_PSYCHIC' && <Eye className="w-3.5 h-3.5" />}
            {element === 'KERNEL_ELECTRIC' && <Zap className="w-3.5 h-3.5" />}
            {element === 'QUANTUM_DRAGON' && <Sparkles className="w-3.5 h-3.5" />}
            {element === 'SYSTEMS_STEEL' && <Shield className="w-3.5 h-3.5" />}
            {element === 'GAMING_FIRE' && <Flame className="w-3.5 h-3.5" />}
            <span>{config.badge}</span>
          </span>

          <span
            className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-ink ${
              rarity === 'ULTIMATUS' ? 'bg-secondary text-ink' :
              rarity === 'LEGENDARY' ? 'bg-primary text-white' :
              rarity === 'EPIC' ? 'bg-accent-purple text-white' :
              'bg-surface-container-high text-on-surface'
            }`}
          >
            {rarity}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-headline font-black text-xl sm:text-2xl tracking-tight text-on-surface group-hover:text-primary transition-colors line-clamp-1 mb-2">
          {repo.name.replace(/_/g, ' ')}
        </h3>

        <p className="font-body text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed mb-4">
          {repo.description || 'High-velocity architecture module designed for high performance.'}
        </p>

        {/* Battle Stats Bars */}
        <div className="space-y-2 mb-5 bg-surface-container-low p-3 rounded-xl border border-ink/15">
          <div>
            <div className="flex justify-between text-[10px] font-mono font-bold uppercase text-on-surface-variant mb-1">
              <span>POWER LEVEL</span>
              <span className="text-primary font-bold">{powerLevel} HP</span>
            </div>
            <div className="w-full bg-surface-container-high h-2.5 rounded-full border border-ink/30 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ width: `${powerLevel}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] font-mono font-bold uppercase text-on-surface-variant mb-1">
              <span>SYNC SPEED</span>
              <span className="text-tertiary font-bold">{syncSpeed} MHz</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full border border-ink/30 overflow-hidden">
              <div
                className="h-full bg-tertiary transition-all duration-500"
                style={{ width: `${syncSpeed}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Language, Topics, Launch */}
      <div className="pt-3 border-t-2 border-ink/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-on-surface-variant flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-ink" style={{ backgroundColor: config.accent }} />
            <span>{repo.language || 'Multi-Stack'}</span>
          </span>

          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1 text-xs font-mono font-bold text-amber-500 ml-1">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              {repo.stargazers_count}
            </span>
          )}
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playChiptuneClick}
          className="neo-btn bg-surface-container-high hover:bg-secondary text-ink px-3 py-1.5 text-xs rounded-lg flex items-center gap-1.5 transition-colors"
        >
          <span>LAUNCH</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;

import React, { useState } from 'react';
import { Swords, Trophy, Filter, ExternalLink, Bot } from 'lucide-react';
import { GitHubRepo, LinkedInProfile, resolveDifficulty } from '../types';
import { playChiptuneClick, playLevelUp } from '../utils/audio';
import { SpiralIcon } from './SpiralIcon';

interface QuestsViewProps {
  repos: GitHubRepo[];
  linkedin: LinkedInProfile | null;
  onOpenRotomPrompt?: (promptText: string) => void;
}

export const QuestsView: React.FC<QuestsViewProps> = ({ repos, linkedin, onOpenRotomPrompt }) => {
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'COMPLETED' | 'IN_PROGRESS'>('ALL');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('ALL');

  // LinkedIn projects
  const linkedinQuests = (linkedin?.projects || []).map(p => ({
    id: p.id || p.title,
    title: p.title,
    description: p.description,
    status: p.endDate ? ('COMPLETED' as const) : ('IN_PROGRESS' as const),
    difficulty: resolveDifficulty(p.title, p.endDate ? 'ELITE' : 'ULTIMATUS'),
    reward: p.endDate ? '+2500 XP // ARCHIVED' : '+5000 XP // ACTIVE DEPLOYMENT',
    type: 'LINKEDIN_FLAGSHIP',
    url: p.url || 'https://github.com/ulolol',
  }));

  // GitHub repo quests
  const linkedinTitles = (linkedin?.projects || []).map(p => p.title.toLowerCase());
  const githubQuests = repos
    .filter(r => !linkedinTitles.some(t => t.includes(r.name.toLowerCase())))
    .slice(0, 8)
    .map(r => ({
      id: r.id.toString(),
      title: r.name,
      description: r.description || 'Open-source tactical repository module.',
      status: 'COMPLETED' as const,
      difficulty: resolveDifficulty(r.name, r.stargazers_count > 10 ? 'EPIC' : r.stargazers_count > 2 ? 'ELITE' : 'COMMON'),
      reward: `+${(r.stargazers_count * 100) + 500} XP // REPO`,
      type: 'GITHUB_MODULE',
      url: r.html_url,
    }));

  const allQuests = [...linkedinQuests, ...githubQuests];

  const filteredQuests = allQuests.filter(q => {
    if (statusFilter !== 'ALL' && q.status !== statusFilter) return false;
    if (difficultyFilter !== 'ALL' && q.difficulty !== difficultyFilter) return false;
    return true;
  });

  const handleQuestAction = (questTitle: string) => {
    playLevelUp();
    if (onOpenRotomPrompt) {
      onOpenRotomPrompt(`battle_kernel_vs_ai`);
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="neo-box bg-surface-container rounded-2xl p-6 border-2 border-ink">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Swords className="w-6 h-6 text-primary" />
              <h1 className="font-headline font-black text-2xl sm:text-4xl uppercase tracking-tight text-on-surface">
                BATTLE TOWER // QUEST LOG
              </h1>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-2xl">
              Real-world engineering campaigns, kernel architectures, and algorithmic deployments logged from LinkedIn and GitHub.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-3 py-1.5 bg-primary text-white rounded-lg border-2 border-ink shadow-[2px_2px_0px_#121316]">
              {filteredQuests.length} ACTIVE OBJECTIVES
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t-2 border-ink/10">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-ink-muted mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER:</span>
          </div>

          {(['ALL', 'COMPLETED', 'IN_PROGRESS'] as const).map(s => (
            <button
              key={s}
              onClick={() => {
                playChiptuneClick();
                setStatusFilter(s);
              }}
              className={`neo-btn px-3 py-1 text-xs rounded-lg transition-all ${
                statusFilter === s ? 'bg-secondary text-ink shadow-[2px_2px_0px_#121316]' : 'bg-surface-container-low text-on-surface'
              }`}
            >
              {s.replace('_', ' ')}
            </button>
          ))}

          <div className="h-4 w-[2px] bg-ink/20 mx-1 hidden sm:block" />

          {['ALL', 'ULTIMATUS', 'LEGENDARY', 'EPIC', 'ELITE'].map(d => (
            <button
              key={d}
              onClick={() => {
                playChiptuneClick();
                setDifficultyFilter(d);
              }}
              className={`neo-btn px-2.5 py-1 text-[11px] font-mono rounded-lg transition-all ${
                difficultyFilter === d ? 'bg-primary text-white shadow-[2px_2px_0px_#121316]' : 'bg-surface-container-low text-on-surface'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Quest Cards List */}
      <div className="space-y-3.5">
        {filteredQuests.map((quest) => (
          <div
            key={quest.id}
            className="neo-box bg-surface-container rounded-2xl p-5 border-2 border-ink flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:-translate-y-0.5 group"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl border-2 border-ink flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#121316] ${
                quest.status === 'COMPLETED' ? 'bg-tertiary text-ink' : 'bg-secondary text-ink'
              }`}>
                {quest.status === 'COMPLETED' ? <Trophy className="w-6 h-6" /> : <Swords className="w-6 h-6 animate-pulse" />}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-ink ${
                    quest.difficulty === 'ULTIMATUS' ? 'bg-secondary text-ink' :
                    quest.difficulty === 'LEGENDARY' ? 'bg-primary text-white' :
                    quest.difficulty === 'EPIC' ? 'bg-accent-purple text-white' :
                    'bg-surface-container-low text-on-surface'
                  }`}>
                    {quest.difficulty}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    quest.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900 animate-pulse'
                  }`}>
                    {quest.status}
                  </span>
                </div>

                <h3 className="font-headline font-black text-lg sm:text-xl text-on-surface group-hover:text-primary transition-colors">
                  {quest.title.replace(/_/g, ' ')}
                </h3>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
                  {quest.description}
                </p>
              </div>
            </div>

            {/* Right Rewards & Actions */}
            <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t-2 md:border-t-0 border-ink/10 shrink-0">
              <div className="text-left md:text-right">
                <span className="font-mono text-[10px] font-bold text-ink-muted block uppercase">BOUNTY REWARD</span>
                <span className="font-mono text-xs font-bold text-primary flex items-center gap-1 justify-end">
                  <SpiralIcon className="w-3.5 h-3.5 text-primary" />
                  <span>{quest.reward}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuestAction(quest.title)}
                  title="Simulate in Rotom OpenUI Deck"
                  className="neo-btn p-2 rounded-lg bg-surface-container-low hover:bg-secondary text-ink"
                >
                  <Bot className="w-4 h-4" />
                </button>

                <a
                  href={quest.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playChiptuneClick}
                  className="neo-btn px-3 py-1.5 text-xs rounded-lg bg-surface-container-high hover:bg-secondary text-ink flex items-center gap-1.5"
                >
                  <span>INSPECT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestsView;

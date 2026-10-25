import React from 'react';
import { Sparkles, Terminal, ShieldCheck, Zap } from 'lucide-react';
import { GitHubRepo, LinkedInProfile, resolveDifficulty, resolveElementalType, ELEMENTAL_CONFIGS } from '../types';

interface StatsOverviewProps {
  repos: GitHubRepo[];
  linkedin: LinkedInProfile | null;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ repos, linkedin }) => {
  // Aggregate all projects (LinkedIn + GitHub)
  const allProjects = [
    ...(linkedin?.projects || []).map(p => ({
      title: p.title,
      description: p.description,
      rarity: resolveDifficulty(p.title, p.endDate ? 'ELITE' : 'ULTIMATUS'),
      element: resolveElementalType(p.title, p.description),
    })),
    ...repos.map(r => ({
      title: r.name,
      description: r.description || '',
      rarity: resolveDifficulty(r.name, r.stargazers_count > 10 ? 'EPIC' : r.stargazers_count > 2 ? 'ELITE' : 'COMMON'),
      element: resolveElementalType(r.name, r.description, r.language),
    })),
  ];

  const totalAssets = repos.length + (linkedin?.projects?.length || 0);
  const ultimatusCount = allProjects.filter(p => p.rarity === 'ULTIMATUS').length;
  const legendaryCount = allProjects.filter(p => p.rarity === 'LEGENDARY').length;
  const epicCount = allProjects.filter(p => p.rarity === 'EPIC').length;
  const activeClusters = repos.length;

  // Elemental Type counts
  const aiCount = allProjects.filter(p => p.element === 'AI_PSYCHIC').length;
  const kernelCount = allProjects.filter(p => p.element === 'KERNEL_ELECTRIC').length;
  const quantumCount = allProjects.filter(p => p.element === 'QUANTUM_DRAGON').length;
  const steelCount = allProjects.filter(p => p.element === 'SYSTEMS_STEEL').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
      {/* Main Bento Stat Tiles */}
      <div className="md:col-span-8 neo-box bg-surface-container rounded-2xl p-5 border-2 border-ink">
        <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-ink/10">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-on-surface">
              ARCHITECTURAL TELEMETRY DECK
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold bg-secondary/30 px-2 py-0.5 rounded border border-ink">
            NODE 001 // SYNCED
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
          <StatTile label="TOTAL MODULES" value={totalAssets} accent="text-on-surface" />
          <StatTile label="ULTIMATUS" value={ultimatusCount} accent="text-amber-500" highlight="border-l-4 border-l-secondary" />
          <StatTile label="LEGENDARY" value={legendaryCount} accent="text-primary" highlight="border-l-4 border-l-primary" />
          <StatTile label="EPIC BUILDS" value={epicCount} accent="text-accent-purple" highlight="border-l-4 border-l-accent-purple" />
        </div>

        {/* Elemental Distribution Bar */}
        <div>
          <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase text-ink-muted mb-1.5">
            <span>DOMAIN SPECTRUM</span>
            <span>AI ({aiCount}) • KERNEL ({kernelCount}) • QUANTUM ({quantumCount}) • STEEL ({steelCount})</span>
          </div>
          <div className="h-3 w-full rounded-full border-2 border-ink overflow-hidden flex bg-surface-container-high">
            <div style={{ width: `${(aiCount / (totalAssets || 1)) * 100}%`, backgroundColor: ELEMENTAL_CONFIGS.AI_PSYCHIC.accent }} title="AI / Neural" />
            <div style={{ width: `${(kernelCount / (totalAssets || 1)) * 100}%`, backgroundColor: ELEMENTAL_CONFIGS.KERNEL_ELECTRIC.accent }} title="Kernel / OS" />
            <div style={{ width: `${(quantumCount / (totalAssets || 1)) * 100}%`, backgroundColor: ELEMENTAL_CONFIGS.QUANTUM_DRAGON.accent }} title="Quantum" />
            <div style={{ width: `${(steelCount / (totalAssets || 1)) * 100}%`, backgroundColor: ELEMENTAL_CONFIGS.SYSTEMS_STEEL.accent }} title="Systems / Steel" />
          </div>
        </div>
      </div>

      {/* Side Status Bento Tile */}
      <div className="md:col-span-4 neo-box bg-gradient-to-br from-primary/15 via-secondary/10 to-tertiary/15 rounded-2xl p-5 border-2 border-ink flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              <span>SYSTEM KERNEL</span>
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-ping border border-ink" />
          </div>
          <div className="font-headline font-black text-2xl text-on-surface uppercase mb-1">
            NOMINAL // 100%
          </div>
          <p className="font-body text-xs text-on-surface-variant leading-relaxed">
            All tactical deployment modules, live GitHub REST webhooks, and static LinkedIn archives operating with zero latency.
          </p>
        </div>

        <div className="pt-3 border-t-2 border-ink/10 flex items-center justify-between text-xs font-mono font-bold">
          <span className="flex items-center gap-1 text-ink-muted">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>WCAG AA COMPLIANT</span>
          </span>
          <span className="text-primary flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KAOS.OS v3.0</span>
          </span>
        </div>
      </div>
    </div>
  );
};

const StatTile = ({
  label,
  value,
  accent = 'text-on-surface',
  highlight = '',
}: {
  label: string;
  value: number;
  accent?: string;
  highlight?: string;
}) => (
  <div className={`p-3 bg-surface-container-low rounded-xl border-2 border-ink/20 ${highlight}`}>
    <span className="text-[10px] font-mono font-bold uppercase text-ink-muted block mb-1">
      {label}
    </span>
    <span className={`font-headline font-black text-2xl sm:text-3xl ${accent}`}>
      {value.toString().padStart(2, '0')}
    </span>
  </div>
);

export default StatsOverview;

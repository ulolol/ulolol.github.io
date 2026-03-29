import { GitHubRepo, LinkedInProfile } from '../types';

// Must mirror the same override logic as QuestsView
const DIFFICULTY_OVERRIDES: Record<string, string> = {
  'kaotichernel':             'LEGENDARY',
  'xda developers legacy':    'ULTIMATUS',
  'ad click fraud detection': 'LEGENDARY',
  'snapper-tui-rust':         'LEGENDARY',
  'ka0s_perplexed':           'EPIC',
  'picoclaw':                 'ELITE',
  'pokemon-terminal':         'EPIC',
};

const resolveDifficulty = (rawTitle: string, defaultDifficulty: string): string => {
  const key = rawTitle.toLowerCase().replace(/_/g, '-');
  if (DIFFICULTY_OVERRIDES[key]) return DIFFICULTY_OVERRIDES[key];
  const spaceKey = rawTitle.toLowerCase();
  if (DIFFICULTY_OVERRIDES[spaceKey]) return DIFFICULTY_OVERRIDES[spaceKey];
  return defaultDifficulty;
};

const StatsOverview = ({ repos, linkedin }: { repos: GitHubRepo[]; linkedin: LinkedInProfile | null }) => {
  const legendaryCount = repos.filter(r => r.stargazers_count > 50).length || 1;
  const activeClusters = repos.length;

  // Build all quest difficulties from both sources (same logic as QuestsView)
  const linkedinDifficulties = (linkedin?.projects || []).map(p =>
    resolveDifficulty(p.title, p.endDate ? 'ELITE' : 'LEGENDARY')
  );

  const linkedinTitles = (linkedin?.projects || []).map(p => p.title.toLowerCase());
  const githubDifficulties = repos
    .filter(repo => !linkedinTitles.some(t => t.includes(repo.name.toLowerCase())))
    .slice(0, 5)
    .map(repo => resolveDifficulty(repo.name, repo.stargazers_count > 10 ? 'EPIC' : 'COMMON'));

  const allDifficulties = [...linkedinDifficulties, ...githubDifficulties];
  const epicCount     = allDifficulties.filter(d => d === 'EPIC').length;
  const eliteCount    = allDifficulties.filter(d => d === 'ELITE').length;
  const ultimatusCount = allDifficulties.filter(d => d === 'ULTIMATUS').length;

  return (
    <div className="grid grid-cols-12 gap-6 mb-12">
      <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-6 flex items-center justify-between border border-outline-variant/10">
        <div className="flex flex-wrap gap-8">
          <StatItem label="Total Assets"  value={repos.length} />
          <StatItem label="Legendary"     value={legendaryCount}   color="text-secondary" />
          <StatItem label="Active Clusters" value={activeClusters} color="text-tertiary" />
          <StatItem label="Epic"          value={epicCount}        color="text-tertiary" />
          <StatItem label="Elite"         value={eliteCount}       color="text-primary" />
          <StatItem label="Ultimatus"     value={ultimatusCount}   color="text-yellow-300" />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 bg-primary/10 border border-primary/20 p-6 flex flex-col justify-between">
        <div className="font-label text-[10px] text-primary tracking-widest uppercase mb-4">Tactical Status</div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <span className="font-label text-sm text-primary-dim uppercase tracking-wider">ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ label, value, color = "text-on-surface" }: { label: string; value: number; color?: string }) => (
  <div>
    <div className="font-label text-[10px] text-on-surface-variant tracking-widest uppercase mb-1">{label}</div>
    <div className={`font-headline italic text-4xl ${color}`}>{value.toString().padStart(2, '0')}</div>
  </div>
);

export default StatsOverview;

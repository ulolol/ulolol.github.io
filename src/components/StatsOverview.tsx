import { GitHubRepo } from '../types';

const StatsOverview = ({ repos }: { repos: GitHubRepo[] }) => {
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const legendaryCount = repos.filter(r => r.stargazers_count > 50).length || 1; // Mocking at least 1 for visual
  const activeClusters = repos.length;

  return (
    <div className="grid grid-cols-12 gap-6 mb-12">
      <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-6 flex items-center justify-between border border-outline-variant/10">
        <div className="flex gap-8">
          <StatItem label="Total Assets" value={repos.length} />
          <StatItem label="Legendary" value={legendaryCount} color="text-secondary" />
          <StatItem label="Active Clusters" value={activeClusters} color="text-tertiary" />
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

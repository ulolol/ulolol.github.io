import { GitHubRepo, LinkedInProfile } from '../types';
import { motion } from 'motion/react';
import { Target, Clock, CheckCircle2, AlertCircle, Sword, Trophy } from 'lucide-react';

const QuestsView = ({ repos, linkedin }: { repos: GitHubRepo[], linkedin: LinkedInProfile | null }) => {
  // Map LinkedIn projects to quests
  const linkedinQuests = (linkedin?.projects || []).map(p => ({
    id: p.title,
    title: p.title,
    status: p.endDate ? 'COMPLETED' : 'IN_PROGRESS',
    reward: 'EXPERIENCE_GAINED',
    difficulty: p.endDate ? 'ELITE' : 'LEGENDARY',
    description: p.description
  }));

  // Map GitHub repos that aren't in LinkedIn projects (basic heuristic)
  const githubQuests = repos
    .filter(repo => !linkedinQuests.some(q => q.title.toLowerCase().includes(repo.name.toLowerCase())))
    .slice(0, 5)
    .map(repo => ({
      id: repo.id.toString(),
      title: repo.name,
      status: 'ACTIVE',
      reward: '5 STARS',
      difficulty: repo.stargazers_count > 10 ? 'EPIC' : 'COMMON',
      description: repo.description || 'No description available in archives.'
    }));

  const allQuests = [...linkedinQuests, ...githubQuests];

  return (
    <motion.section 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="absolute -left-12 top-0 w-2 h-24 bg-primary"></div>
      <div className="flex items-end gap-4 mb-2">
        <h1 className="text-6xl font-headline italic font-black uppercase tracking-tighter leading-none">ACTIVE_QUESTS</h1>
        <span className="font-label text-primary font-bold tracking-[0.3em] mb-1">SYNCING_OBJECTIVES...</span>
      </div>
      <p className="font-body text-on-surface-variant max-w-2xl text-lg mb-12">
        Tactical objectives derived from my <span className="text-primary font-bold">LinkedIn Projects</span> and <span className="text-primary font-bold">GitHub Repositories</span>. Quests without completion dates are marked as active deployments.
      </p>

      <div className="space-y-4">
        {allQuests.map((quest, i) => (
          <motion.div
            key={quest.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-surface-container border-l-4 border-primary p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:bg-surface-container-highest transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                {quest.status === 'COMPLETED' ? <Trophy className="w-6 h-6" /> : <Sword className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-xl font-headline italic font-black uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors">
                  {quest.title}
                </h3>
                <p className="text-sm text-on-surface-variant font-body line-clamp-1 max-w-md">{quest.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
              <div className="text-right">
                <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">REWARD</div>
                <div className="font-headline italic font-bold text-primary text-sm">{quest.reward}</div>
              </div>
              
              <div className="text-right">
                <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">STATUS</div>
                <div className={`font-headline italic font-bold text-sm ${quest.status === 'COMPLETED' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {quest.status}
                </div>
              </div>

              <div className="px-4 py-2 bg-surface-container-highest border border-outline-variant/20 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                {quest.difficulty}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default QuestsView;

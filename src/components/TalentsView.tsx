import { GitHubRepo, LinkedInProfile } from '../types';
import { motion } from 'motion/react';
import { Zap, Code, Database, Globe } from 'lucide-react';

const TalentsView = ({ repos, linkedin }: { repos: GitHubRepo[], linkedin: LinkedInProfile | null }) => {
  const skills = linkedin?.skills || ['React', 'TypeScript', 'Node.js', 'Go', 'Rust', 'Docker'];
  
  // Group skills into categories for visual flair
  const categories = [
    { name: 'Core Architecture', skills: skills.slice(0, 4), icon: <Globe className="w-6 h-6" /> },
    { name: 'Data Systems', skills: skills.slice(4, 8), icon: <Database className="w-6 h-6" /> },
    { name: 'Neural Processing', skills: skills.slice(8, 12), icon: <Zap className="w-6 h-6" /> },
    { name: 'Tactical Deployment', skills: skills.slice(12), icon: <Code className="w-6 h-6" /> },
  ].filter(c => c.skills.length > 0);

  return (
    <motion.section 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="absolute -left-12 top-0 w-2 h-24 bg-primary"></div>
      <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-2">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline italic font-black uppercase tracking-tighter leading-none">TALENT_TREE</h1>
        <span className="font-label text-primary font-bold tracking-[0.3em] mb-1 animate-pulse">ANALYZING_SKILLS...</span>
      </div>
      <p className="font-body text-on-surface-variant max-w-2xl text-lg mb-12">
        Neural mastery levels derived from my <span className="text-primary font-bold">LinkedIn Professional Archive</span>. These talents represent my tactical proficiency in high-velocity software engineering.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-container p-8 border border-outline-variant/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-500" />
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-2xl font-headline italic font-black uppercase tracking-tighter text-on-surface">{cat.name}</h3>
                <div className="font-label text-xs text-primary uppercase tracking-widest">RANK: ARCHITECTURAL OPERATOR</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="bg-surface-container-highest px-3 py-1 font-label text-[10px] text-on-surface-variant uppercase tracking-widest border border-outline-variant/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TalentsView;

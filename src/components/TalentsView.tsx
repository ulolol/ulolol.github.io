import React, { useState } from 'react';
import { Award, Zap, Database, Terminal, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { GitHubRepo, LinkedInProfile } from '../types';
import { playChiptuneClick, playLevelUp } from '../utils/audio';

interface TalentsViewProps {
  repos: GitHubRepo[];
  linkedin: LinkedInProfile | null;
}

interface SkillCategory {
  id: string;
  name: string;
  badgeName: string;
  badgeLevel: string;
  badgeColor: string;
  icon: React.ReactNode;
  skills: { name: string; level: number; discId: string }[];
}

export const TalentsView: React.FC<TalentsViewProps> = ({ linkedin }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const rawSkills = linkedin?.skills || [
    'Python', 'Linux Kernel Management', 'C/C++', 'Assembly',
    'PostgreSQL', 'Data Scraping', 'Information Retrieval', 'MongoDB',
    'Deep Neural Networks', 'Machine Learning', 'TensorFlow', 'PyTorch',
    'AI/ML Leadership', 'Open Source Architecture', 'Quantum Computing', 'Systems Design'
  ];

  const categories: SkillCategory[] = [
    {
      id: 'kernel',
      name: 'Bare-Metal & Systems OS',
      badgeName: 'VOLT KERNEL BADGE',
      badgeLevel: 'LEADER // LV.99',
      badgeColor: '#FFD026', // Zapdos Gold
      icon: <Terminal className="w-5 h-5" />,
      skills: [
        { name: 'Linux Kernel Management', level: 98, discId: 'TM01' },
        { name: 'C/C++', level: 96, discId: 'TM02' },
        { name: 'Assembly (x86_64)', level: 92, discId: 'TM03' },
        { name: 'Systems Design', level: 95, discId: 'TM04' },
      ],
    },
    {
      id: 'neural',
      name: 'Deep Neural & AI/ML Systems',
      badgeName: 'PSYCHIC MIND BADGE',
      badgeLevel: 'ARCHITECT // LV.99',
      badgeColor: '#FF3366', // Rotom Coral
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        { name: 'Deep Neural Networks', level: 97, discId: 'TM05' },
        { name: 'PyTorch & TensorFlow', level: 95, discId: 'TM06' },
        { name: 'AI/ML Leadership', level: 94, discId: 'TM07' },
        { name: 'Information Retrieval', level: 92, discId: 'TM08' },
      ],
    },
    {
      id: 'quantum',
      name: 'Quantum & Core Architecture',
      badgeName: 'QUANTUM HORIZON BADGE',
      badgeLevel: 'FELLOW // LV.95',
      badgeColor: '#38BDF8', // Porygon Cyan
      icon: <Sparkles className="w-5 h-5" />,
      skills: [
        { name: 'Quantum Computing (Qiskit)', level: 90, discId: 'TM09' },
        { name: 'Open Source Architecture', level: 98, discId: 'TM10' },
        { name: 'Python Engineering', level: 99, discId: 'TM11' },
        { name: 'Data Scraping & Mining', level: 95, discId: 'TM12' },
      ],
    },
    {
      id: 'data',
      name: 'Distributed Data Systems',
      badgeName: 'EARTH DATA BADGE',
      badgeLevel: 'MASTER // LV.94',
      badgeColor: '#00E5A3', // Bulbasaur Mint
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'PostgreSQL & SQL Internals', level: 94, discId: 'TM13' },
        { name: 'MongoDB & Document Stores', level: 91, discId: 'TM14' },
        { name: 'High-Concurrency Caching', level: 93, discId: 'TM15' },
        { name: 'Real-Time Pipelines', level: 92, discId: 'TM16' },
      ],
    },
  ];

  const handleSkillClick = (skillName: string) => {
    playLevelUp();
    setSelectedSkill(skillName === selectedSkill ? null : skillName);
  };

  return (
    <section className="space-y-6">
      {/* View Header */}
      <div className="neo-box bg-surface-container rounded-2xl p-6 border-2 border-ink">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-6 h-6 text-secondary" />
              <h1 className="font-headline font-black text-2xl sm:text-4xl uppercase tracking-tight text-on-surface">
                GYM BADGE & TECHNICAL MACHINE (TM) CASE
              </h1>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-2xl">
              Architectural mastery badges and Technical Machine discs certified across bare-metal systems, AI/ML leadership, and quantum computing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-3 py-1.5 bg-secondary text-ink rounded-lg border-2 border-ink shadow-[2px_2px_0px_#121316]">
              16 / 16 TM DISCS SYNCED
            </span>
          </div>
        </div>
      </div>

      {/* Gym Badge Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="neo-box bg-surface-container rounded-2xl p-5 border-2 border-ink flex flex-col justify-between"
          >
            {/* Category Header with Badge Icon */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-ink/10">
                <div className="flex items-center gap-3">
                  {/* Geometric Vector Gym Badge */}
                  <button
                    onClick={() => {
                      playLevelUp();
                    }}
                    title={`Inspect ${cat.badgeName}`}
                    className="w-12 h-12 rounded-xl border-2 border-ink flex items-center justify-center shadow-[3px_3px_0px_#121316] text-ink cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                    style={{ backgroundColor: cat.badgeColor }}
                    aria-label={cat.badgeName}
                  >
                    {cat.icon}
                  </button>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary block">
                      {cat.badgeLevel}
                    </span>
                    <h3 className="font-headline font-bold text-lg text-on-surface">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold bg-surface-container-low px-2 py-1 rounded border border-ink">
                  {cat.badgeName}
                </span>
              </div>

              {/* TM Discs Grid */}
              <div className="space-y-3">
                {cat.skills.map((skill) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)}
                      className={`w-full text-left p-3 rounded-xl border-2 border-ink transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-secondary/20 shadow-[2px_2px_0px_#121316] -translate-y-0.5'
                          : 'bg-surface-container-low hover:bg-surface-container-high'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="font-mono text-[10px] font-black px-1.5 py-0.5 rounded border border-ink text-ink"
                            style={{ backgroundColor: cat.badgeColor }}
                          >
                            {skill.discId}
                          </span>
                          <span className="font-headline font-bold text-sm text-on-surface">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-surface-container h-2 rounded-full border border-ink/30 overflow-hidden">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: cat.badgeColor,
                          }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Cert Note */}
            <div className="mt-4 pt-3 border-t-2 border-ink/10 flex items-center justify-between text-[11px] font-mono text-ink-muted">
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>VERIFIED PROFICIENCY</span>
              </span>
              <span>TAP TO TEST AUDIO CHIME</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TalentsView;

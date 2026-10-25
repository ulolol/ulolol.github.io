import React from 'react';
import { Layers, Bot, Award, Swords, Compass, Mail, Sparkles } from 'lucide-react';
import { GitHubProfile, LinkedInProfile, ElementalType, ELEMENTAL_CONFIGS } from '../types';
import { playTabSwitch, playChiptuneClick } from '../utils/audio';
import { ActiveView } from './Header';

interface SidebarProps {
  profile: GitHubProfile | null;
  linkedin: LinkedInProfile | null;
  activeView: ActiveView;
  setView: (view: ActiveView) => void;
  selectedElement: ElementalType;
  setSelectedElement: (el: ElementalType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  profile,
  linkedin,
  activeView,
  setView,
  selectedElement,
  setSelectedElement,
}) => {
  const handleNav = (v: ActiveView) => {
    playTabSwitch();
    setView(v);
  };

  const handleElementSelect = (el: ElementalType) => {
    playChiptuneClick();
    setSelectedElement(el);
    if (activeView !== 'DECK') {
      setView('DECK');
    }
  };

  const elements: ElementalType[] = [
    'ALL',
    'AI_PSYCHIC',
    'KERNEL_ELECTRIC',
    'QUANTUM_DRAGON',
    'SYSTEMS_STEEL',
    'GAMING_FIRE',
  ];

  return (
    <>
      {/* Desktop Left Dock */}
      <aside className="fixed left-0 top-20 bottom-0 w-80 bg-surface-container-low/95 border-r-2 border-ink p-5 overflow-y-auto hidden lg:flex flex-col justify-between z-40 transition-colors">
        <div className="space-y-6">
          {/* Trainer ID Badge */}
          <div className="neo-box bg-surface-container rounded-2xl p-4 relative overflow-hidden">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="relative">
                <img
                  src="/profile.jpg"
                  alt="Vidish Srivastava"
                  className="w-16 h-16 rounded-xl object-cover border-2 border-ink shadow-[2px_2px_0px_#121316]"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary rounded-full border border-ink" />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary block">
                  TRAINER CARD // 001
                </span>
                <h2 className="font-headline font-black text-lg text-on-surface truncate">
                  {linkedin?.name || 'Vidish Srivastava'}
                </h2>
                <p className="text-[11px] font-body text-on-surface-variant truncate">
                  Architect & AI Systems Lead
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-1.5 pt-3 border-t-2 border-ink/10 text-center font-mono">
              <div className="p-1.5 bg-surface-container-low rounded border border-ink/20">
                <span className="text-[9px] uppercase text-ink-muted block">REPOS</span>
                <span className="text-xs font-bold text-on-surface">{profile?.public_repos || 45}</span>
              </div>
              <div className="p-1.5 bg-surface-container-low rounded border border-ink/20">
                <span className="text-[9px] uppercase text-ink-muted block">BADGES</span>
                <span className="text-xs font-bold text-secondary">16 TM</span>
              </div>
              <div className="p-1.5 bg-surface-container-low rounded border border-ink/20">
                <span className="text-[9px] uppercase text-ink-muted block">QUESTS</span>
                <span className="text-xs font-bold text-primary">12+</span>
              </div>
            </div>
          </div>

          {/* Elemental Domain Filter (Cartridge Select) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-muted">
                ELEMENTAL CARTRIDGES
              </span>
              <span className="text-[10px] font-mono text-primary font-bold">TYPE SELECT</span>
            </div>

            <div className="space-y-1.5">
              {elements.map((el) => {
                const config = ELEMENTAL_CONFIGS[el];
                const active = selectedElement === el;
                return (
                  <button
                    key={el}
                    onClick={() => handleElementSelect(el)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border-2 border-ink text-xs font-label font-bold transition-all ${
                      active
                        ? 'bg-secondary text-ink shadow-[2px_2px_0px_#121316] translate-y-[-1px]'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-ink shrink-0"
                        style={{ backgroundColor: config.accent }}
                      />
                      <span>{config.label}</span>
                    </div>
                    <span className="text-[9px] font-mono opacity-80">{config.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rotom-OS OpenUI Quick Launch */}
          <div className="neo-box-sm bg-gradient-to-br from-primary/15 via-secondary/10 to-tertiary/15 p-3.5 rounded-xl border border-ink">
            <div className="flex items-center gap-2 mb-1.5 text-primary">
              <Sparkles className="w-4 h-4" />
              <span className="font-headline font-bold text-xs uppercase tracking-tight">ROTOM-OS COPILOT</span>
            </div>
            <p className="text-[11px] font-body text-on-surface-variant mb-2.5 leading-tight">
              Test Generative OpenUI Lang stream programs with zero external API calls.
            </p>
            <button
              onClick={() => handleNav('ROTOM_AI')}
              className="neo-btn w-full py-1.5 bg-primary text-white text-[11px] rounded-lg"
            >
              LAUNCH OPENUI DECK
            </button>
          </div>
        </div>

        {/* Footer Co-op CTA */}
        <div className="pt-4 border-t-2 border-ink/10">
          <a
            href="mailto:kaosaod@gmail.com"
            onClick={playChiptuneClick}
            className="neo-btn w-full py-3 bg-secondary hover:bg-secondary/90 text-ink rounded-xl flex items-center justify-center gap-2 text-sm font-headline font-extrabold shadow-[4px_4px_0px_#121316]"
          >
            <Mail className="w-4 h-4" />
            <span>START CO-OP QUEST</span>
          </a>
        </div>
      </aside>

      {/* Mobile Bottom Navigation Dock */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-surface/95 backdrop-blur-md border-t-2 border-ink z-50 flex items-center justify-around px-2 lg:hidden">
        <MobileNavItem icon={<Layers className="w-5 h-5" />} label="Deck" active={activeView === 'DECK'} onClick={() => handleNav('DECK')} />
        <MobileNavItem icon={<Bot className="w-5 h-5" />} label="Rotom.AI" active={activeView === 'ROTOM_AI'} onClick={() => handleNav('ROTOM_AI')} />
        <MobileNavItem icon={<Award className="w-5 h-5" />} label="Badges" active={activeView === 'BADGES'} onClick={() => handleNav('BADGES')} />
        <MobileNavItem icon={<Swords className="w-5 h-5" />} label="Quests" active={activeView === 'QUESTS'} onClick={() => handleNav('QUESTS')} />
        <MobileNavItem icon={<Compass className="w-5 h-5" />} label="Map" active={activeView === 'MAP'} onClick={() => handleNav('MAP')} />
      </nav>
    </>
  );
};

const MobileNavItem = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-all ${
      active ? 'text-primary font-bold' : 'text-on-surface-variant'
    }`}
  >
    {icon}
    <span className="text-[10px] font-mono mt-0.5 uppercase">{label}</span>
  </button>
);

export default Sidebar;

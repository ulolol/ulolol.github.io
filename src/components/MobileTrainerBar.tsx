import React from 'react';
import { Mail, Sparkles, Layers } from 'lucide-react';
import { GitHubProfile, LinkedInProfile, ElementalType, ELEMENTAL_CONFIGS } from '../types';
import { playChiptuneClick } from '../utils/audio';

interface MobileTrainerBarProps {
  profile: GitHubProfile | null;
  linkedin: LinkedInProfile | null;
  selectedElement: ElementalType;
  setSelectedElement: (el: ElementalType) => void;
}

export const MobileTrainerBar: React.FC<MobileTrainerBarProps> = ({
  profile,
  linkedin,
  selectedElement,
  setSelectedElement,
}) => {
  const elements: ElementalType[] = [
    'ALL',
    'AI_PSYCHIC',
    'KERNEL_ELECTRIC',
    'QUANTUM_DRAGON',
    'SYSTEMS_STEEL',
    'GAMING_FIRE',
  ];

  const handleElementSelect = (el: ElementalType) => {
    playChiptuneClick();
    setSelectedElement(el);
  };

  return (
    <div className="lg:hidden space-y-4 mb-6">
      {/* Mobile Trainer ID Card */}
      <div className="neo-box bg-surface-container rounded-2xl p-4 border-2 border-ink relative overflow-hidden">
        <div className="flex items-center gap-3.5 mb-3">
          <div className="relative shrink-0">
            <img
              src="/profile.jpg"
              alt="Vidish Srivastava"
              className="w-14 h-14 rounded-xl object-cover border-2 border-ink shadow-[2px_2px_0px_#121316]"
            />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-tertiary rounded-full border border-ink animate-pulse" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                TRAINER // 001
              </span>
              <span className="text-[9px] font-mono font-bold bg-secondary px-1.5 py-0.5 rounded border border-ink text-ink shadow-[1px_1px_0px_#121316]">
                LV.99 ARCHITECT
              </span>
            </div>
            <h2 className="font-headline font-black text-base sm:text-lg text-on-surface truncate">
              {linkedin?.name || 'Vidish Srivastava'}
            </h2>
            <p className="text-[11px] font-body text-on-surface-variant truncate">
              Architect & AI Systems Lead
            </p>
          </div>
        </div>

        {/* Quick Telemetry & Co-op Button */}
        <div className="grid grid-cols-3 gap-2 pt-2.5 border-t-2 border-ink/10 text-center font-mono">
          <div className="p-1.5 bg-surface-container-low rounded-lg border border-ink/20">
            <span className="text-[9px] uppercase text-ink-muted block">REPOS</span>
            <span className="text-xs font-bold text-on-surface">{profile?.public_repos || 45}</span>
          </div>
          <div className="p-1.5 bg-surface-container-low rounded-lg border border-ink/20">
            <span className="text-[9px] uppercase text-ink-muted block">BADGES</span>
            <span className="text-xs font-bold text-secondary">16 TM</span>
          </div>
          <div className="p-1.5 bg-surface-container-low rounded-lg border border-ink/20">
            <span className="text-[9px] uppercase text-ink-muted block">QUESTS</span>
            <span className="text-xs font-bold text-primary">12+</span>
          </div>
        </div>

        {/* Mobile Co-op CTA */}
        <div className="mt-3">
          <a
            href="mailto:kaosaod@gmail.com"
            onClick={playChiptuneClick}
            className="neo-btn w-full py-2 bg-secondary hover:bg-secondary/90 text-ink rounded-xl flex items-center justify-center gap-2 text-xs font-headline font-extrabold shadow-[2px_2px_0px_#121316] active:translate-y-0.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>START CO-OP QUEST</span>
          </a>
        </div>
      </div>

      {/* Mobile Horizontal Elemental Cartridge Ribbon */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-on-surface">
              ELEMENTAL DOMAINS
            </span>
          </div>
          <span className="text-[10px] font-mono text-ink-muted">SWIPE TYPE</span>
        </div>

        {/* Horizontal Scrollable Ribbon with Snap */}
        <div className="flex gap-2 overflow-x-auto pb-2 pt-0.5 px-0.5 scrollbar-thin scroll-smooth -mx-1 px-1">
          {elements.map((el) => {
            const config = ELEMENTAL_CONFIGS[el];
            const active = selectedElement === el;
            return (
              <button
                key={el}
                onClick={() => handleElementSelect(el)}
                className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-ink text-xs font-label font-bold transition-all cursor-pointer active:scale-95 min-h-[40px] ${
                  active
                    ? 'bg-secondary text-ink shadow-[2px_2px_0px_#121316] -translate-y-0.5'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full border border-ink shrink-0"
                  style={{ backgroundColor: config.accent }}
                />
                <span className="whitespace-nowrap">{config.label}</span>
                <span className="text-[9px] font-mono opacity-75 bg-surface-container-low px-1 py-0.2 rounded border border-ink/20">
                  {config.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileTrainerBar;

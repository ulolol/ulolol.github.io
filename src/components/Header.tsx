import React, { useState, useEffect } from 'react';
import { Terminal, Linkedin, Github, Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { GitHubProfile, LinkedInProfile } from '../types';
import { isMuted, toggleMute, playTabSwitch, playChiptuneClick } from '../utils/audio';

export type ActiveView = 'DECK' | 'ROTOM_AI' | 'BADGES' | 'QUESTS' | 'MAP';

interface HeaderProps {
  profile: GitHubProfile | null;
  linkedin: LinkedInProfile | null;
  activeView: ActiveView;
  setView: (view: ActiveView) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  linkedin,
  activeView,
  setView,
  isDark,
  setIsDark,
}) => {
  const [audioMuted, setAudioMuted] = useState(isMuted());

  useEffect(() => {
    setAudioMuted(isMuted());
  }, []);

  const handleNav = (v: ActiveView) => {
    playTabSwitch();
    setView(v);
  };

  const handleAudioToggle = () => {
    const nextMuted = toggleMute();
    setAudioMuted(nextMuted);
  };

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    playChiptuneClick();

    // Check if View Transitions API is supported by the browser
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // Start View Transition
      const transition = (document as any).startViewTransition(() => {
        setIsDark(!isDark);
      });

      transition.ready?.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 350,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      setIsDark(!isDark);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-surface/90 backdrop-blur-md border-b-2 border-ink px-3 sm:px-6 flex items-center justify-between transition-colors">
      {/* Brand & Handheld OS Title */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button
          onClick={() => handleNav('DECK')}
          className="flex items-center gap-2 sm:gap-2.5 text-left group cursor-pointer"
        >
          {/* Custom Vector Poké-Kernel Emblem (No Emojis) */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-secondary border-2 border-ink shadow-[2px_2px_0px_#121316] flex items-center justify-center p-1.5 transition-transform group-hover:scale-105 group-active:scale-95 shrink-0">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-ink stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <circle cx="12" cy="12" r="3" className="fill-surface" />
              <circle cx="12" cy="12" r="1" className="fill-ink" />
            </svg>
          </div>

          <div>
            <div className="font-headline font-black text-lg sm:text-2xl tracking-tighter leading-none flex items-center gap-1.5">
              <span>KAOS</span>
              <span className="text-primary font-mono text-[10px] sm:text-sm px-1.5 py-0.5 bg-primary/10 border border-primary rounded font-bold">OS 3.0</span>
              <span className="md:hidden text-ink font-mono text-[9px] px-1 py-0.5 bg-secondary border border-ink rounded font-bold">LV.99</span>
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] text-ink-muted uppercase tracking-widest mt-0.5 truncate max-w-[140px] sm:max-w-none">
              {linkedin?.name || profile?.name || 'VIDISH SRIVASTAVA'}
            </div>
          </div>
        </button>

        {/* Desktop View Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-2 ml-4">
          <NavTab label="DECK" active={activeView === 'DECK'} onClick={() => handleNav('DECK')} />
          <NavTab label="ROTOM.AI" active={activeView === 'ROTOM_AI'} onClick={() => handleNav('ROTOM_AI')} badge="OPENUI" />
          <NavTab label="BADGES" active={activeView === 'BADGES'} onClick={() => handleNav('BADGES')} />
          <NavTab label="QUESTS" active={activeView === 'QUESTS'} onClick={() => handleNav('QUESTS')} />
          <NavTab label="REGION MAP" active={activeView === 'MAP'} onClick={() => handleNav('MAP')} />
        </nav>
      </div>

      {/* Controls: Telemetry, Audio, Theme, Social */}
      <div className="flex items-center gap-1.5 sm:gap-3">
        {/* Status Pill (Desktop) */}
        <div className="hidden md:flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border-2 border-ink shadow-[2px_2px_0px_#121316]">
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse border border-ink" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-ink uppercase">LV.99 ARCHITECT</span>
        </div>

        {/* 8-bit Audio Toggle */}
        <button
          onClick={handleAudioToggle}
          title={audioMuted ? "Unmute 8-Bit Chiptune Audio" : "Mute 8-Bit Chiptune Audio"}
          className="neo-btn p-2 rounded-lg bg-surface-container hover:bg-secondary text-ink transition-colors min-w-[38px] min-h-[38px] flex items-center justify-center active:scale-95 touch-manipulation"
          aria-label={audioMuted ? "Unmute 8-Bit Audio" : "Mute 8-Bit Audio"}
        >
          {audioMuted ? <VolumeX className="w-4 h-4 text-ink-muted" /> : <Volume2 className="w-4 h-4 text-primary" />}
        </button>

        {/* Theme Toggle (Daylight Lab / Gengar Arcade) with View Transitions */}
        <button
          onClick={handleThemeToggle}
          title={isDark ? "Switch to Daylight Lab Theme" : "Switch to Gengar Arcade Theme"}
          className="neo-btn p-2 rounded-lg bg-surface-container hover:bg-secondary text-ink transition-colors min-w-[38px] min-h-[38px] flex items-center justify-center active:scale-95 touch-manipulation"
          aria-label={isDark ? "Daylight Mode" : "Dark Arcade Mode"}
        >
          {isDark ? <Sun className="w-4 h-4 text-secondary" /> : <Moon className="w-4 h-4 text-ink" />}
        </button>

        {/* GitHub Link */}
        <a
          href="https://github.com/ulolol"
          target="_blank"
          rel="noopener noreferrer"
          onClick={playChiptuneClick}
          title="GitHub Profile"
          className="neo-btn p-2 rounded-lg bg-surface-container hover:bg-secondary text-ink transition-colors min-w-[38px] min-h-[38px] flex items-center justify-center active:scale-95 touch-manipulation"
          aria-label="GitHub Profile"
        >
          <Github className="w-4 h-4" />
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com/in/vidish-srivastava-kaos"
          target="_blank"
          rel="noopener noreferrer"
          onClick={playChiptuneClick}
          title="LinkedIn Profile"
          className="neo-btn p-2 rounded-lg bg-surface-container hover:bg-secondary text-ink transition-colors min-w-[38px] min-h-[38px] flex items-center justify-center active:scale-95 touch-manipulation"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4 text-sky-600" />
        </a>
      </div>
    </header>
  );
};

const NavTab = ({
  label,
  active,
  onClick,
  badge,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: string;
}) => (
  <button
    onClick={onClick}
    className={`font-label font-bold text-xs px-3.5 py-1.5 rounded-lg border-2 border-ink transition-all cursor-pointer flex items-center gap-1.5 ${
      active
        ? 'bg-secondary text-ink shadow-[2px_2px_0px_#121316] translate-y-[-1px]'
        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
    }`}
  >
    <span>{label}</span>
    {badge && (
      <span className="text-[9px] font-mono font-black px-1.5 py-0.2 rounded bg-primary text-white">
        {badge}
      </span>
    )}
  </button>
);

export default Header;

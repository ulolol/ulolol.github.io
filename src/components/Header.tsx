import { Bell, Settings, Terminal, Linkedin } from 'lucide-react';
import { GitHubProfile, LinkedInProfile } from '../types';

interface HeaderProps {
  profile: GitHubProfile | null;
  linkedin: LinkedInProfile | null;
  activeView: 'INVENTORY' | 'MAPS' | 'TALENTS' | 'QUESTS';
  setView: (view: 'INVENTORY' | 'MAPS' | 'TALENTS' | 'QUESTS') => void;
}

const Header = ({ profile, linkedin, activeView, setView }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-black italic text-primary tracking-widest font-headline">KINETIC VANGUARD</span>
        <nav className="hidden md:flex gap-6">
          <HeaderLink label="MAPS" active={activeView === 'MAPS'} onClick={() => setView('MAPS')} />
          <HeaderLink label="INVENTORY" active={activeView === 'INVENTORY'} onClick={() => setView('INVENTORY')} />
          <HeaderLink label="TALENTS" active={activeView === 'TALENTS'} onClick={() => setView('TALENTS')} />
          <HeaderLink label="QUESTS" active={activeView === 'QUESTS'} onClick={() => setView('QUESTS')} />
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant/20">
          <Terminal className="text-primary w-4 h-4 mr-2" />
          <span className="font-label text-[10px] tracking-widest text-primary uppercase">SYNC LEVEL 99</span>
        </div>
        <a 
          href="https://www.linkedin.com/in/ulolol" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-on-surface-variant hover:bg-primary/10 p-2 rounded transition-all"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <button className="text-on-surface-variant hover:bg-primary/10 p-2 rounded transition-all">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-on-surface-variant hover:bg-primary/10 p-2 rounded transition-all">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

const HeaderLink = ({ 
  label, 
  active = false, 
  onClick 
}: { 
  label: string; 
  active?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`font-headline italic font-black uppercase tracking-tighter transition-colors cursor-pointer ${
      active ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary-dim'
    }`}
  >
    {label}
  </button>
);

export default Header;

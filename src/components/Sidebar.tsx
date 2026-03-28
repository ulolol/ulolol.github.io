import React from 'react';
import { Shield, Compass, Backpack, FileText, ClipboardList, Terminal as TerminalIcon, LogOut } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeView: 'INVENTORY' | 'MAPS' | 'TALENTS' | 'QUESTS';
  setView: (view: 'INVENTORY' | 'MAPS' | 'TALENTS' | 'QUESTS') => void;
}

const Sidebar = ({ activeView, setView }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-full z-40 flex flex-col pt-24 bg-surface-container-low/95 backdrop-blur-md w-72 border-r border-outline-variant/10">
      <div className="px-6 mb-8">
        <div className="bg-surface-container p-4 rounded-lg flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 flex items-center justify-center rounded">
            <Shield className="text-primary w-5 h-5" />
          </div>
          <div>
            <div className="font-label text-xs font-bold text-on-surface tracking-tighter uppercase">OPERATOR_01</div>
            <div className="font-label text-[10px] text-primary-dim uppercase">STATUS: ADVENTURING</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-2 space-y-1">
        <NavItem 
          icon={<Compass className="w-5 h-5" />} 
          label="Maps" 
          active={activeView === 'MAPS'} 
          onClick={() => setView('MAPS')} 
        />
        <NavItem 
          icon={<Backpack className="w-5 h-5" />} 
          label="Inventory" 
          active={activeView === 'INVENTORY'} 
          onClick={() => setView('INVENTORY')} 
        />
        <NavItem 
          icon={<FileText className="w-5 h-5" />} 
          label="Talents" 
          active={activeView === 'TALENTS'} 
          onClick={() => setView('TALENTS')} 
        />
        <NavItem 
          icon={<ClipboardList className="w-5 h-5" />} 
          label="Quests" 
          active={activeView === 'QUESTS'} 
          onClick={() => setView('QUESTS')} 
        />
      </nav>

      <div className="p-6 space-y-4">
        <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-surface-container-lowest font-headline italic font-black uppercase tracking-tighter clipped-corner active:scale-95 transition-all">
          START QUEST
        </button>
        <div className="pt-4 border-t border-outline-variant/20 space-y-2">
          <button className="flex items-center gap-4 text-on-surface-variant hover:text-primary-dim transition-colors w-full text-left">
            <TerminalIcon className="w-4 h-4" />
            <span className="font-label text-[10px] uppercase tracking-widest">System Status</span>
          </button>
          <button className="flex items-center gap-4 text-on-surface-variant hover:text-secondary transition-colors w-full text-left">
            <LogOut className="w-4 h-4" />
            <span className="font-label text-[10px] uppercase tracking-widest">Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ 
  icon, 
  label, 
  active = false, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ x: 4 }}
    className={`flex items-center gap-4 px-4 py-3 transition-all w-full text-left ${
      active 
        ? 'bg-primary/10 text-primary border-l-4 border-primary' 
        : 'text-on-surface-variant hover:bg-surface-container-high'
    }`}
  >
    {icon}
    <span className="font-label uppercase font-bold text-xs tracking-widest">{label}</span>
  </motion.button>
);

export default Sidebar;

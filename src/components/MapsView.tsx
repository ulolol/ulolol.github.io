import React from 'react';
import { MapPin, Navigation, Radar } from 'lucide-react';
import { motion } from 'motion/react';

const MapsView = () => {
  const locations = [
    { id: 1, name: 'Neural Core', type: 'HQ', x: '40%', y: '30%', status: 'ACTIVE' },
    { id: 2, name: 'Data Siphon', type: 'NODE', x: '70%', y: '60%', status: 'SYNCING' },
    { id: 3, name: 'Legacy Archive', type: 'VAULT', x: '20%', y: '80%', status: 'LOCKED' },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      <div className="absolute -left-12 top-0 w-2 h-24 bg-primary"></div>
      <div className="flex items-end gap-4 mb-2">
        <h1 className="text-6xl font-headline italic font-black uppercase tracking-tighter leading-none">TACTICAL_MAP</h1>
        <span className="font-label text-primary font-bold tracking-[0.3em] mb-1">SCANNING_REGION...</span>
      </div>
      <p className="font-body text-on-surface-variant max-w-2xl text-lg mb-8">
        This tactical map visualizes the <span className="text-primary font-bold">Global Deployment Nodes</span> and data vaults within my professional ecosystem. Each node represents a live environment where my modules are currently active or archived.
      </p>

      <div className="relative aspect-video bg-surface-container-low border border-outline-variant/20 overflow-hidden clipped-corner">
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #8ff5ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Map Background (Stylized) */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        
        {/* Radar Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full animate-ping opacity-20" />
        
        {/* Locations */}
        {locations.map((loc) => (
          <motion.div
            key={loc.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: loc.id * 0.2 }}
            style={{ left: loc.x, top: loc.y }}
            className="absolute group cursor-pointer"
          >
            <div className="relative">
              <div className={`w-4 h-4 rounded-full ${loc.status === 'ACTIVE' ? 'bg-primary' : loc.status === 'SYNCING' ? 'bg-tertiary' : 'bg-secondary'} animate-pulse`} />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-surface-container-highest px-3 py-1 border border-outline-variant/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                <div className="font-label text-[10px] font-bold text-primary uppercase">{loc.type}</div>
                <div className="font-headline italic text-sm text-on-surface uppercase">{loc.name}</div>
                <div className="font-label text-[8px] text-on-surface-variant uppercase">STATUS: {loc.status}</div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* HUD Elements */}
        <div className="absolute top-6 right-6 flex flex-col gap-4">
          <HudStat icon={<Navigation className="w-3 h-3" />} label="LAT" value="37.7749 N" />
          <HudStat icon={<Navigation className="w-3 h-3" />} label="LNG" value="122.4194 W" />
          <HudStat icon={<Radar className="w-3 h-3" />} label="SIG" value="OPTIMAL" />
        </div>
      </div>
    </motion.section>
  );
};

const HudStat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-surface-container-highest/80 backdrop-blur-md border border-outline-variant/30 p-3 flex items-center gap-3">
    <div className="text-primary">{icon}</div>
    <div>
      <div className="font-label text-[8px] text-on-surface-variant uppercase tracking-widest">{label}</div>
      <div className="font-label text-[10px] font-bold text-on-surface uppercase">{value}</div>
    </div>
  </div>
);

export default MapsView;

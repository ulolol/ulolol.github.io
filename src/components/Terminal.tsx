import { motion } from 'motion/react';

const Terminal = ({ logs }: { logs: string[] }) => {
  return (
    <section className="mt-16 bg-surface-container-lowest border-l-4 border-primary p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="font-headline italic text-2xl uppercase tracking-tighter text-primary mb-6">SCANNING_INVENTORY_REPORT</h4>
          <div className="space-y-4 font-label text-xs tracking-[0.15em] text-on-surface/80">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <span className="text-primary-dim shrink-0">
                  {log.startsWith('[ ERROR ]') ? '[ ERROR ]' : `[ ${(i * 0.042).toFixed(3)}s ]`}
                </span>
                <span className={`uppercase ${log.startsWith('[ ERROR ]') ? 'text-secondary' : ''}`}>
                  {log.replace('[ ERROR ] ', '')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="relative bg-surface-container overflow-hidden group h-64">
          <img 
            alt="High-tech mechanical dragon" 
            className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
            src="/cyborg_dragon.png"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="bg-primary text-surface-container-lowest font-label text-[10px] font-bold uppercase tracking-widest px-2 py-1 w-fit mb-2">SYSTEM_IMAGE</div>
            <div className="font-headline italic text-xl uppercase tracking-tight">INFRASTRUCTURE_CORE_V4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;

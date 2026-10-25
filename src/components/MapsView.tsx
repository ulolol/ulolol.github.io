import React, { useState } from 'react';
import { MapPin, Navigation, Radio, Compass, ExternalLink, Zap, Terminal, Sparkles, Cpu } from 'lucide-react';
import { playChiptuneClick, playLevelUp } from '../utils/audio';

interface RegionNode {
  id: string;
  name: string;
  subtitle: string;
  element: string;
  color: string;
  x: string;
  y: string;
  status: 'ONLINE' | 'CALIBRATING' | 'SYNCED';
  description: string;
  tech: string[];
}

export const MapsView: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('kernel');

  const nodes: RegionNode[] = [
    {
      id: 'kernel',
      name: 'Kernel Foundry',
      subtitle: 'BARE-METAL OS & BOOTLOADER LAB',
      element: 'KERNEL // ELECTRIC',
      color: '#FFD026',
      x: '24%',
      y: '34%',
      status: 'ONLINE',
      description: 'Foundry where KaOtiCKerneL was engineered from scratch using Assembly (x86_64) and C with a dedicated bootloader.',
      tech: ['x86_64 Assembly', 'C', 'Bootloader', 'Memory Management'],
    },
    {
      id: 'neural',
      name: 'Neural Core HQ',
      subtitle: 'DEEP LEARNING & MULTI-DNN CLUSTER',
      element: 'AI // PSYCHIC',
      color: '#FF3366',
      x: '62%',
      y: '28%',
      status: 'ONLINE',
      description: 'Distributed cluster hosting generative neural feedback loops, SyntheticArtiste, and click fraud prevention algorithms.',
      tech: ['PyTorch', 'TensorFlow', 'Convolutional Nets', 'Vector Retrieval'],
    },
    {
      id: 'quantum',
      name: 'Quantum Spire',
      subtitle: 'QUANTUM COMPUTING RESEARCH STATION',
      element: 'QUANTUM // DRAGON',
      color: '#38BDF8',
      x: '75%',
      y: '68%',
      status: 'ONLINE',
      description: 'Research node dedicated to Quantum_Kodes exploring superposition and quantum algorithms for machine learning optimization.',
      tech: ['Qiskit', 'Quantum Algorithms', 'Python', 'Linear Algebra'],
    },
    {
      id: 'xda',
      name: 'XDA Legacy Citadel',
      subtitle: '7-YEAR MOBILE KERNEL SANCTUARY',
      element: 'SYSTEMS // STEEL',
      color: '#00E5A3',
      x: '38%',
      y: '72%',
      status: 'SYNCED',
      description: 'Hall of Fame celebrating 7+ years as Recognized Contributor, building kernels, recovery systems, and scripts for 7+ devices.',
      tech: ['Android Kernel', 'Device Drivers', 'Bash Scripting', 'C'],
    },
    {
      id: 'terminal',
      name: 'Rotom Terminal Outpost',
      subtitle: 'HIGH-VELOCITY RUST & TUI LAB',
      element: 'FIRE // ARCADE',
      color: '#FF8A00',
      x: '50%',
      y: '48%',
      status: 'ONLINE',
      description: 'Outpost for CLI/TUI speedrunners, building Snapper TUI in Rust, Pokémon Terminal plugins, and PicoClaw autonomous tools.',
      tech: ['Rust', 'Terminal User Interfaces', 'CLI Tooling', 'TypeScript'],
    },
  ];

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  const handleNodeClick = (nodeId: string) => {
    playLevelUp();
    setActiveNodeId(nodeId);
  };

  return (
    <section className="space-y-6">
      {/* View Header */}
      <div className="neo-box bg-surface-container rounded-2xl p-6 border-2 border-ink">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Compass className="w-6 h-6 text-primary" />
              <h1 className="font-headline font-black text-2xl sm:text-4xl uppercase tracking-tight text-on-surface">
                ARCHITECTURAL REGION TOPOLOGY MAP
              </h1>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-2xl">
              Tactical map visualizing the global deployment nodes, research spires, and systems outposts within the Vidish Srivastava ecosystem.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-3 py-1.5 bg-tertiary text-ink rounded-lg border-2 border-ink shadow-[2px_2px_0px_#121316] flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>5 / 5 NODES ACTIVE</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Map Canvas + HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive Map Canvas */}
        <div className="lg:col-span-8 neo-box bg-surface-container-low rounded-2xl p-4 sm:p-6 border-2 border-ink relative overflow-hidden min-h-[420px] dot-grid flex flex-col justify-between">
          {/* Map Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="bg-surface-container px-3 py-1.5 rounded-lg border-2 border-ink text-xs font-mono font-bold flex items-center gap-2 shadow-[2px_2px_0px_#121316]">
              <Navigation className="w-3.5 h-3.5 text-primary" />
              <span>REGION: ARCHIPELAGO KAOS</span>
            </div>

            <div className="bg-surface-container px-3 py-1.5 rounded-lg border-2 border-ink text-xs font-mono text-ink-muted hidden sm:block">
              LAT 37.77° N // LNG 122.41° W
            </div>
          </div>

          {/* SVG Route Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-ink/30 stroke-2 stroke-dasharray-4">
            <line x1="24%" y1="34%" x2="50%" y2="48%" strokeDasharray="4 4" />
            <line x1="50%" y1="48%" x2="62%" y2="28%" strokeDasharray="4 4" />
            <line x1="50%" y1="48%" x2="75%" y2="68%" strokeDasharray="4 4" />
            <line x1="24%" y1="34%" x2="38%" y2="72%" strokeDasharray="4 4" />
            <line x1="38%" y1="72%" x2="75%" y2="68%" strokeDasharray="4 4" />
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const isSelected = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => handleNodeClick(node.id)}
                style={{ left: node.x, top: node.y }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer transition-transform duration-200 ${
                  isSelected ? 'scale-125' : 'hover:scale-110'
                }`}
                title={node.name}
              >
                <div
                  className={`w-10 h-10 rounded-2xl border-2 border-ink flex items-center justify-center shadow-[3px_3px_0px_#121316] text-ink transition-all ${
                    isSelected ? 'ring-4 ring-primary/40' : ''
                  }`}
                  style={{ backgroundColor: node.color }}
                >
                  {node.id === 'kernel' && <Terminal className="w-4 h-4" />}
                  {node.id === 'neural' && <Cpu className="w-4 h-4" />}
                  {node.id === 'quantum' && <Sparkles className="w-4 h-4" />}
                  {node.id === 'xda' && <Zap className="w-4 h-4" />}
                  {node.id === 'terminal' && <MapPin className="w-4 h-4" />}
                </div>

                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase whitespace-nowrap bg-surface-container border border-ink text-on-surface shadow-[1px_1px_0px_#121316]">
                  {node.name}
                </span>
              </button>
            );
          })}

          {/* Bottom Map Note */}
          <div className="z-10 mt-auto pt-6 text-[11px] font-mono text-ink-muted">
            CLICK ANY NODE TO INSPECT TELEMETRY & SYSTEM DETAILS
          </div>
        </div>

        {/* Node Telemetry Inspector */}
        <div className="lg:col-span-4 neo-box bg-surface-container rounded-2xl p-6 border-2 border-ink flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-ink/10">
              <span className="text-[10px] font-mono font-bold text-primary uppercase">
                NODE TELEMETRY INSPECTOR
              </span>
              <span className="text-[10px] font-mono font-bold bg-tertiary px-2 py-0.5 rounded border border-ink text-ink">
                {activeNode.status}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-xl border-2 border-ink flex items-center justify-center text-ink shadow-[2px_2px_0px_#121316]"
                style={{ backgroundColor: activeNode.color }}
              >
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-ink-muted uppercase block">
                  {activeNode.element}
                </span>
                <h3 className="font-headline font-black text-xl text-on-surface">
                  {activeNode.name}
                </h3>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
              {activeNode.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="mb-6">
              <span className="text-[10px] font-mono font-bold uppercase text-ink-muted block mb-2">
                DEPLOYED ARCHITECTURES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono font-bold px-2 py-1 rounded-lg bg-surface-container-low border border-ink/30 text-on-surface"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://github.com/ulolol"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playChiptuneClick}
            className="neo-btn w-full py-2.5 bg-secondary hover:bg-secondary/90 text-ink rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-1.5"
          >
            <span>OPEN NODE IN GITHUB REPO</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapsView;

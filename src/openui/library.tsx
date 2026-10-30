import React from 'react';
import { defineComponent, createLibrary, defineAction } from '@openuidev/react-lang';
import { openuiLibrary } from '@openuidev/react-ui';
import { z } from 'zod';
import { ExternalLink, Sparkles, Zap, Shield, Flame, Eye, Trophy } from 'lucide-react';
import { playChiptuneClick, playHoloSparkle } from '../utils/audio';
import { ELEMENTAL_CONFIGS, ElementalType } from '../types';
import { SpiralIcon } from '../components/SpiralIcon';

/* -------------------------------------------------------------------------- */
/* Custom OpenUI Actions                                                      */
/* -------------------------------------------------------------------------- */

export const FilterElementAction = defineAction({
  name: 'FilterElement',
  description: 'Filter repository deck by elemental domain',
  params: z.object({
    element: z.string(),
  }),
});

/* -------------------------------------------------------------------------- */
/* 1. HoloCartridgeCard Component                                             */
/* -------------------------------------------------------------------------- */

export const HoloCartridgeCard = defineComponent({
  name: 'HoloCartridgeCard',
  description: 'Displays a project as a collectible holographic TCG/ROM cartridge card with battle stats.',
  props: z.object({
    name: z.string(),
    description: z.string(),
    element: z.enum(['AI_PSYCHIC', 'KERNEL_ELECTRIC', 'QUANTUM_DRAGON', 'SYSTEMS_STEEL', 'GAMING_FIRE']),
    rarity: z.enum(['ULTIMATUS', 'LEGENDARY', 'EPIC', 'ELITE', 'COMMON']),
    powerLevel: z.number(),
    syncSpeed: z.number(),
    language: z.string(),
    stars: z.number(),
    url: z.string(),
  }),
  component: ({ props }) => {
    const cardRef = React.useRef<HTMLElement>(null);
    const [isRevealed, setIsRevealed] = React.useState(false);
    const hasPlayedAudioRef = React.useRef(false);

    const config = ELEMENTAL_CONFIGS[props.element as ElementalType] || ELEMENTAL_CONFIGS.SYSTEMS_STEEL;
    const isRare = props.rarity === 'ULTIMATUS' || props.rarity === 'LEGENDARY';

    React.useEffect(() => {
      if (typeof window === 'undefined') return;
      const isTouch = window.matchMedia && window.matchMedia('(hover: none)').matches;
      if (!isTouch) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsRevealed(true);
              if (isRare && !hasPlayedAudioRef.current) {
                playHoloSparkle();
                hasPlayedAudioRef.current = true;
              }
            } else {
              setIsRevealed(false);
              hasPlayedAudioRef.current = false;
            }
          });
        },
        {
          threshold: 0.35,
          rootMargin: '-10% 0px -15% 0px',
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [isRare]);

    return (
      <article
        ref={cardRef}
        onMouseEnter={() => {
          if (isRare) playHoloSparkle();
        }}
        onTouchStart={() => {
          if (isRare) playHoloSparkle();
        }}
        className={`neo-box holo-foil ${isRevealed ? 'holo-active' : ''} bg-surface-container rounded-xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] relative group`}
      >
        {/* Cartridge Top Bar */}
        <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b-2 border-ink/10">
          <span
            className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded border-2 border-ink tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_#121316]"
            style={{ backgroundColor: config.accent, color: '#121316' }}
          >
            {props.element === 'AI_PSYCHIC' && <Eye className="w-3.5 h-3.5" />}
            {props.element === 'KERNEL_ELECTRIC' && <Zap className="w-3.5 h-3.5" />}
            {props.element === 'QUANTUM_DRAGON' && <Sparkles className="w-3.5 h-3.5" />}
            {props.element === 'SYSTEMS_STEEL' && <Shield className="w-3.5 h-3.5" />}
            {props.element === 'GAMING_FIRE' && <Flame className="w-3.5 h-3.5" />}
            {config.badge}
          </span>

          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-ink ${
            props.rarity === 'ULTIMATUS' ? 'bg-secondary text-ink' :
            props.rarity === 'LEGENDARY' ? 'bg-primary text-white' :
            props.rarity === 'EPIC' ? 'bg-accent-purple text-white' :
            'bg-surface-container-high text-on-surface'
          }`}>
            {props.rarity}
          </span>
        </div>

        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="font-headline font-extrabold text-xl sm:text-2xl tracking-tight text-on-surface group-hover:text-primary transition-colors line-clamp-1">
            {props.name.replace(/_/g, ' ')}
          </h3>
          <p className="font-body text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
            {props.description || 'Tactical high-velocity module constructed for architectural systems.'}
          </p>
        </div>

        {/* Battle Stats Bars */}
        <div className="space-y-2 mb-4 bg-surface-container-low p-2.5 rounded-lg border border-ink/20">
          <div>
            <div className="flex justify-between text-[10px] font-mono font-bold uppercase text-on-surface-variant mb-1">
              <span>PWR LEVEL</span>
              <span className="text-primary font-bold">{props.powerLevel} HP</span>
            </div>
            <div className="w-full bg-surface-container-high h-2.5 rounded-full border border-ink/40 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ width: `${Math.min(100, props.powerLevel)}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[10px] font-mono font-bold uppercase text-on-surface-variant mb-1">
              <span>SYNC SPEED</span>
              <span className="text-tertiary font-bold">{props.syncSpeed} MHz</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full border border-ink/40 overflow-hidden">
              <div
                className="h-full bg-tertiary transition-all duration-500"
                style={{ width: `${Math.min(100, props.syncSpeed)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Footer: Language & Launch */}
        <div className="flex items-center justify-between pt-2 border-t border-ink/10">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-on-surface-variant">
            <span className="w-2.5 h-2.5 rounded-full border border-ink" style={{ backgroundColor: config.accent }} />
            <span>{props.language || 'Multi-Stack'}</span>
            {props.stars > 0 && (
              <span className="flex items-center gap-1 ml-2 text-primary font-mono font-bold text-xs" title={`${props.stars} Spirals`}>
                <SpiralIcon className="w-3.5 h-3.5 text-primary group-hover:rotate-180 transition-transform duration-500" />
                <span>{props.stars}</span>
              </span>
            )}
          </div>

          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playChiptuneClick}
            className="neo-btn bg-surface-container-high hover:bg-secondary text-ink px-3 py-1 text-xs rounded flex items-center gap-1 transition-colors"
          >
            <span>LAUNCH</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </article>
    );
  },
});

/* -------------------------------------------------------------------------- */
/* 2. ComparisonArena Component (Side-by-Side Stat Battle)                    */
/* -------------------------------------------------------------------------- */

export const ComparisonArena = defineComponent({
  name: 'ComparisonArena',
  description: 'Compares two or more projects or skills in a head-to-head Pokémon Stadium battle arena.',
  props: z.object({
    challengerA: z.string(),
    elementA: z.string(),
    powerA: z.number(),
    roleA: z.string(),
    challengerB: z.string(),
    elementB: z.string(),
    powerB: z.number(),
    roleB: z.string(),
    verdict: z.string(),
  }),
  component: ({ props }) => (
    <div className="neo-box bg-surface-container rounded-2xl p-6 my-4 border-2 border-ink">
      <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-ink/20">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-secondary" />
          <h4 className="font-headline font-bold text-lg uppercase tracking-tight">STADIUM COMPARISON ARENA</h4>
        </div>
        <span className="text-[10px] font-mono font-bold bg-primary text-white px-2 py-0.5 rounded border border-ink">
          VERSUS SIMULATION
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Challenger A */}
        <div className="neo-box-sm bg-surface-container-low p-4 rounded-xl border border-ink">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-[10px] font-mono font-bold text-primary uppercase">{props.elementA}</span>
              <h5 className="font-headline font-bold text-xl">{props.challengerA}</h5>
            </div>
            <span className="font-mono font-black text-lg text-primary">{props.powerA} PWR</span>
          </div>
          <p className="text-xs font-body text-on-surface-variant">{props.roleA}</p>
        </div>

        {/* Challenger B */}
        <div className="neo-box-sm bg-surface-container-low p-4 rounded-xl border border-ink">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-[10px] font-mono font-bold text-secondary uppercase">{props.elementB}</span>
              <h5 className="font-headline font-bold text-xl">{props.challengerB}</h5>
            </div>
            <span className="font-mono font-black text-lg text-secondary">{props.powerB} PWR</span>
          </div>
          <p className="text-xs font-body text-on-surface-variant">{props.roleB}</p>
        </div>
      </div>

      <div className="p-3 bg-secondary/15 rounded-lg border-2 border-secondary/40 text-xs font-mono">
        <strong className="text-ink uppercase">ARCHITECTURAL SYNERGY VERDICT: </strong>
        <span className="text-on-surface">{props.verdict}</span>
      </div>
    </div>
  ),
});

/* -------------------------------------------------------------------------- */
/* 3. PokeOSStatsBento Component                                              */
/* -------------------------------------------------------------------------- */

export const PokeOSStatsBento = defineComponent({
  name: 'PokeOSStatsBento',
  description: 'Displays a Bento 2.0 telemetry grid for repository stats and active system clusters.',
  props: z.object({
    totalAssets: z.number(),
    ultimatusCount: z.number(),
    legendaryCount: z.number(),
    activeClusters: z.number(),
    statusMessage: z.string(),
  }),
  component: ({ props }) => (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
      <div className="neo-box-sm bg-surface-container p-3.5 rounded-xl">
        <span className="font-mono text-[10px] uppercase text-on-surface-variant block mb-1">TOTAL CARTRIDGES</span>
        <span className="font-headline font-black text-2xl sm:text-3xl text-on-surface">{props.totalAssets}</span>
      </div>
      <div className="neo-box-sm bg-surface-container p-3.5 rounded-xl border-l-4 border-l-secondary">
        <span className="font-mono text-[10px] uppercase text-on-surface-variant block mb-1">ULTIMATUS</span>
        <span className="font-headline font-black text-2xl sm:text-3xl text-amber-500">{props.ultimatusCount}</span>
      </div>
      <div className="neo-box-sm bg-surface-container p-3.5 rounded-xl border-l-4 border-l-primary">
        <span className="font-mono text-[10px] uppercase text-on-surface-variant block mb-1">LEGENDARY</span>
        <span className="font-headline font-black text-2xl sm:text-3xl text-primary">{props.legendaryCount}</span>
      </div>
      <div className="neo-box-sm bg-surface-container p-3.5 rounded-xl border-l-4 border-l-tertiary">
        <span className="font-mono text-[10px] uppercase text-on-surface-variant block mb-1">ACTIVE CLUSTERS</span>
        <span className="font-headline font-black text-2xl sm:text-3xl text-emerald-600">{props.activeClusters}</span>
      </div>
    </div>
  ),
});

/* -------------------------------------------------------------------------- */
/* Create and Export the Custom OpenUI Library                                */
/* -------------------------------------------------------------------------- */

export const kaosOpenUILibrary = createLibrary({
  root: 'Stack',
  componentGroups: openuiLibrary.componentGroups,
  actions: [FilterElementAction],
  components: [
    ...Object.values(openuiLibrary.components),
    HoloCartridgeCard,
    ComparisonArena,
    PokeOSStatsBento,
  ],
});

import { GitHubRepo, GitHubProfile, LinkedInProfile, resolveDifficulty, resolveElementalType } from '../types';

export interface SynthContext {
  repos: GitHubRepo[];
  profile: GitHubProfile | null;
  linkedin: LinkedInProfile | null;
}

export type PresetPromptId = 
  | 'legendary_deck'
  | 'battle_kernel_vs_ai'
  | 'battle_rust_vs_python'
  | 'quantum_deep_dive'
  | 'overview_all';

export interface PresetPrompt {
  id: PresetPromptId;
  label: string;
  badge: string;
  description: string;
}

export const PRESET_PROMPTS: PresetPrompt[] = [
  {
    id: 'legendary_deck',
    label: 'Summon Legendary Cartridges',
    badge: 'ULTIMATUS',
    description: 'Render the highest-tier Kernel, AI/ML, and Quantum architectural repositories.',
  },
  {
    id: 'battle_kernel_vs_ai',
    label: 'Battle: OS Kernel vs. Neural Net',
    badge: 'VERSUS',
    description: 'Compare KaOtiCKerneL (bare-metal C/ASM) with SyntheticArtiste (Deep Learning).',
  },
  {
    id: 'battle_rust_vs_python',
    label: 'Battle: Rust TUI vs. Python IR',
    badge: 'VERSUS',
    description: 'Compare Snapper TUI (Rust) with Ka0s Perplexed (Python Information Retrieval).',
  },
  {
    id: 'quantum_deep_dive',
    label: 'Quantum & Systems Architecture',
    badge: 'QUANTUM',
    description: 'Inspect Quantum_Kodes, ThalesDocsBotv2, and low-level system projects.',
  },
  {
    id: 'overview_all',
    label: 'Full Cartridge Inventory',
    badge: 'ALL',
    description: 'Stream and render all synchronized GitHub & LinkedIn project cartridges.',
  },
];

/**
 * Generates an authentic OpenUI Lang program string deterministically
 * based on the user's selected prompt and repository context.
 */
export function generateOpenUILangProgram(promptId: PresetPromptId | string, context: SynthContext): string {
  const { repos, linkedin } = context;

  // Combine LinkedIn flagship projects and GitHub repos into enriched cards
  const allCards = [
    ...(linkedin?.projects || []).map(p => {
      const rarity = resolveDifficulty(p.title, p.endDate ? 'ELITE' : 'ULTIMATUS');
      const element = resolveElementalType(p.title, p.description);
      const normalizedTitle = p.title.toLowerCase().replace(/[-_ ]/g, '');
      const matchingRepo = repos.find(r => r.name.toLowerCase().replace(/[-_ ]/g, '') === normalizedTitle);
      const actualStars = matchingRepo ? matchingRepo.stargazers_count : 0;

      return {
        name: p.title,
        description: p.description,
        element,
        rarity,
        powerLevel: rarity === 'ULTIMATUS' ? 98 : rarity === 'LEGENDARY' ? 92 : 84,
        syncSpeed: 95,
        language: element === 'KERNEL_ELECTRIC' ? 'C & Assembly' : element === 'QUANTUM_DRAGON' ? 'Qiskit & Python' : 'Python',
        stars: actualStars,
        url: matchingRepo ? matchingRepo.html_url : (p.url || 'https://github.com/ulolol'),
      };
    }),
    ...repos.map(r => {
      const rarity = resolveDifficulty(r.name, r.stargazers_count > 10 ? 'EPIC' : r.stargazers_count > 2 ? 'ELITE' : 'COMMON');
      const element = resolveElementalType(r.name, r.description, r.language);
      return {
        name: r.name,
        description: r.description || 'High-velocity architecture module.',
        element,
        rarity,
        powerLevel: Math.min(99, 60 + r.stargazers_count * 2 + r.forks_count * 5),
        syncSpeed: Math.min(99, 50 + r.name.length * 2),
        language: r.language || 'TypeScript',
        stars: r.stargazers_count,
        url: r.html_url,
      };
    }),
  ];

  if (promptId === 'battle_kernel_vs_ai') {
    return [
      `root = Stack([title, arena])`,
      `title = TextContent("KAOS.OS // STADIUM BATTLE SIMULATION", "large-heavy")`,
      `arena = ComparisonArena("KaOtiCKerneL", "KERNEL_ELECTRIC", 98, "Bare-Metal 64-Bit OS Kernel with custom bootloader written from scratch in ASM and C.", "SyntheticArtiste", "AI_PSYCHIC", 94, "Multi-DNN feedback loop generating artistic synthesized imagery via deep neural networks.", "Both demonstrate high-concurrency systems design: KaOtiCKerneL provides hardware-level orchestration, while SyntheticArtiste pushes algorithmic inference efficiency.")`,
    ].join('\n');
  }

  if (promptId === 'battle_rust_vs_python') {
    return [
      `root = Stack([title, arena])`,
      `title = TextContent("KAOS.OS // LANGUAGE SYNERGY ARENA", "large-heavy")`,
      `arena = ComparisonArena("snapper-tui-rust", "SYSTEMS_STEEL", 91, "High-performance Terminal User Interface in Rust with zero-cost abstractions.", "ka0s_perplexed", "AI_PSYCHIC", 88, "Information retrieval & semantic vector synthesis engine built in Python.", "Rust delivers deterministic zero-garbage-collection throughput for CLI/TUI tooling, paired seamlessly with Python for rapid ML iteration.")`,
    ].join('\n');
  }

  if (promptId === 'quantum_deep_dive') {
    const quantumItems = allCards.filter(c => c.element === 'QUANTUM_DRAGON' || c.element === 'KERNEL_ELECTRIC').slice(0, 4);
    const cardDefs = quantumItems.map((c, i) => 
      `c${i} = HoloCartridgeCard("${c.name}", "${c.description.replace(/"/g, "'")}", "${c.element}", "${c.rarity}", ${c.powerLevel}, ${c.syncSpeed}, "${c.language}", ${c.stars}, "${c.url}")`
    );
    return [
      `root = Stack([title, stats, ${quantumItems.map((_, i) => `c${i}`).join(', ')}])`,
      `title = TextContent("QUANTUM & BARE-METAL ARCHITECTURE", "large-heavy")`,
      `stats = PokeOSStatsBento(${allCards.length}, 3, 4, 16, "QUANTUM_STATE: COHERENT")`,
      ...cardDefs,
    ].join('\n');
  }

  if (promptId === 'legendary_deck') {
    const legendaryItems = allCards.filter(c => c.rarity === 'ULTIMATUS' || c.rarity === 'LEGENDARY').slice(0, 6);
    const cardDefs = legendaryItems.map((c, i) => 
      `c${i} = HoloCartridgeCard("${c.name}", "${c.description.replace(/"/g, "'")}", "${c.element}", "${c.rarity}", ${c.powerLevel}, ${c.syncSpeed}, "${c.language}", ${c.stars}, "${c.url}")`
    );
    return [
      `root = Stack([title, stats, ${legendaryItems.map((_, i) => `c${i}`).join(', ')}])`,
      `title = TextContent("LEGENDARY & ULTIMATUS BUILDS", "large-heavy")`,
      `stats = PokeOSStatsBento(${allCards.length}, 2, 4, 16, "ALL SYSTEMS NOMINAL")`,
      ...cardDefs,
    ].join('\n');
  }

  // Default: Overview all
  const items = allCards.slice(0, 6);
  const cardDefs = items.map((c, i) => 
    `c${i} = HoloCartridgeCard("${c.name}", "${c.description.replace(/"/g, "'")}", "${c.element}", "${c.rarity}", ${c.powerLevel}, ${c.syncSpeed}, "${c.language}", ${c.stars}, "${c.url}")`
  );
  return [
    `root = Stack([title, stats, ${items.map((_, i) => `c${i}`).join(', ')}])`,
    `title = TextContent("SYNCHRONIZED CARTRIDGE DECK", "large-heavy")`,
    `stats = PokeOSStatsBento(${allCards.length}, 2, 4, 16, "SYNC_LEVEL_99")`,
    ...cardDefs,
  ].join('\n');
}

/**
 * Streams the generated OpenUI Lang program progressively token-by-token
 * to simulate high-speed in-browser generative streaming with zero API calls.
 */
export function streamOpenUILang(
  program: string,
  onChunk: (text: string) => void,
  onComplete: () => void,
  tokenDelayMs: number = 12
): () => void {
  let isCancelled = false;
  let currentIndex = 0;
  let currentOutput = '';

  // Split program by natural tokens (lines or punctuation clusters)
  const tokens = program.match(/(\s+|\w+|[^\w\s]+)/g) || [program];

  const timer = setInterval(() => {
    if (isCancelled || currentIndex >= tokens.length) {
      clearInterval(timer);
      if (!isCancelled) {
        onChunk(program); // ensure exact completion
        onComplete();
      }
      return;
    }

    currentOutput += tokens[currentIndex];
    onChunk(currentOutput);
    currentIndex++;
  }, tokenDelayMs);

  return () => {
    isCancelled = true;
    clearInterval(timer);
  };
}

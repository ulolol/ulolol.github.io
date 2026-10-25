export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

export interface GitHubProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface LinkedInProject {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string; // If missing, it's in progress
}

export interface LinkedInProfile {
  name: string;
  headline: string;
  avatarUrl: string;
  skills: string[];
  projects: LinkedInProject[];
}

export type Rarity = 'ULTIMATUS' | 'LEGENDARY' | 'EPIC' | 'ELITE' | 'COMMON';

export type ElementalType = 
  | 'ALL'
  | 'AI_PSYCHIC' 
  | 'KERNEL_ELECTRIC' 
  | 'QUANTUM_DRAGON' 
  | 'SYSTEMS_STEEL' 
  | 'GAMING_FIRE';

export interface ElementalConfig {
  label: string;
  badge: string;
  bgLight: string;
  textLight: string;
  borderLight: string;
  accent: string;
}

export const ELEMENTAL_CONFIGS: Record<ElementalType, ElementalConfig> = {
  ALL: {
    label: 'All Cartridges',
    badge: 'ALL',
    bgLight: 'bg-surface-container',
    textLight: 'text-on-surface',
    borderLight: 'border-ink',
    accent: '#121316',
  },
  AI_PSYCHIC: {
    label: 'AI & Neural Networks',
    badge: 'PSYCHIC // AI',
    bgLight: 'bg-rose-50',
    textLight: 'text-rose-600',
    borderLight: 'border-rose-400',
    accent: '#FF3366',
  },
  KERNEL_ELECTRIC: {
    label: 'Kernel & Systems OS',
    badge: 'ELECTRIC // KERNEL',
    bgLight: 'bg-amber-50',
    textLight: 'text-amber-700',
    borderLight: 'border-amber-400',
    accent: '#FFD026',
  },
  QUANTUM_DRAGON: {
    label: 'Quantum & Deep Computing',
    badge: 'DRAGON // QUANTUM',
    bgLight: 'bg-sky-50',
    textLight: 'text-sky-600',
    borderLight: 'border-sky-400',
    accent: '#38BDF8',
  },
  SYSTEMS_STEEL: {
    label: 'Rust, C/C++ & Infra',
    badge: 'STEEL // SYSTEMS',
    bgLight: 'bg-emerald-50',
    textLight: 'text-emerald-700',
    borderLight: 'border-emerald-400',
    accent: '#00E5A3',
  },
  GAMING_FIRE: {
    label: 'Gaming & Terminal Experiments',
    badge: 'FIRE // ARCADE',
    bgLight: 'bg-orange-50',
    textLight: 'text-orange-600',
    borderLight: 'border-orange-400',
    accent: '#FF8A00',
  },
};

/** Categorizes repository or project into an elemental domain */
export const resolveElementalType = (name: string, description: string = '', language: string = ''): ElementalType => {
  const text = `${name} ${description} ${language}`.toLowerCase();
  
  if (text.includes('quantum') || text.includes('qiskit') || text.includes('qubit')) {
    return 'QUANTUM_DRAGON';
  }
  if (text.includes('kernel') || text.includes('bootloader') || text.includes('asm') || text.includes('xda') || text.includes('snapper') || text.includes('driver')) {
    return 'KERNEL_ELECTRIC';
  }
  if (text.includes('ai') || text.includes('ml') || text.includes('neural') || text.includes('perplexed') || text.includes('synthetic') || text.includes('gemini') || text.includes('deep learning') || text.includes('fraud')) {
    return 'AI_PSYCHIC';
  }
  if (text.includes('pokemon') || text.includes('game') || text.includes('arcade') || text.includes('rc car') || text.includes('picoclaw')) {
    return 'GAMING_FIRE';
  }
  return 'SYSTEMS_STEEL';
};

export const DIFFICULTY_OVERRIDES: Record<string, Rarity> = {
  'kaotichernel': 'LEGENDARY',
  'xda developers legacy': 'ULTIMATUS',
  'ad click fraud detection': 'LEGENDARY',
  'snapper-tui-rust': 'LEGENDARY',
  'ka0s_perplexed': 'EPIC',
  'picoclaw': 'ELITE',
  'pokemon-terminal': 'EPIC',
  'quantum_kodes': 'ULTIMATUS',
  'thalesdocsbotv2': 'EPIC',
  'syntheticartiste': 'EPIC',
};

export const resolveDifficulty = (rawTitle: string, defaultRarity: Rarity): Rarity => {
  const key = rawTitle.toLowerCase().replace(/_/g, '-');
  if (DIFFICULTY_OVERRIDES[key]) return DIFFICULTY_OVERRIDES[key];
  const spaceKey = rawTitle.toLowerCase();
  if (DIFFICULTY_OVERRIDES[spaceKey]) return DIFFICULTY_OVERRIDES[spaceKey];
  return defaultRarity;
};

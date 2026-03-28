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

export type Rarity = 'LEGENDARY' | 'EPIC' | 'RARE' | 'COMMON';

import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@openuidev/react-ui';
import { Layers, Bot, Award, Swords, Compass, Sparkles, Filter, ExternalLink } from 'lucide-react';
import Header, { ActiveView } from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import StatsOverview from './components/StatsOverview';
import Terminal from './components/Terminal';
import MapsView from './components/MapsView';
import TalentsView from './components/TalentsView';
import QuestsView from './components/QuestsView';
import { GitHubRepo, GitHubProfile, LinkedInProfile, ElementalType, ELEMENTAL_CONFIGS, resolveElementalType } from './types';
import linkedinData from './data/linkedin.json';
import { playTabSwitch, playChiptuneClick } from './utils/audio';

// Custom OpenUI Themes matching our Neo-Brutalist Poké-Lab aesthetic
const pokelabLightTheme = createTheme({
  interactiveAccentDefault: '#FF3366',
  background: '#FFFDF7',
  textNeutralPrimary: '#121316',
});

const gengarDarkTheme = createTheme({
  interactiveAccentDefault: '#FF4775',
  background: '#0E1017',
  textNeutralPrimary: '#F8FAFC',
});

export default function App() {
  const [view, setView] = useState<ActiveView>('DECK');
  const [selectedElement, setSelectedElement] = useState<ElementalType>('ALL');
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [linkedin, setLinkedin] = useState<LinkedInProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setIsDark(false); // default to bright daylight mode as requested, but user can toggle
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reposRes, profileRes] = await Promise.all([
          fetch('https://api.github.com/users/ulolol/repos?sort=updated&per_page=12'),
          fetch('https://api.github.com/users/ulolol'),
        ]);

        if (reposRes.ok && profileRes.ok) {
          const reposData = await reposRes.json();
          const profileData = await profileRes.json();
          setRepos(reposData);
          setProfile(profileData);
        } else {
          throw new Error('GitHub API rate limited or unavailable');
        }
      } catch (err) {
        console.warn('Falling back to local static datastore:', err);
      } finally {
        setLinkedin(linkedinData as unknown as LinkedInProfile);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const synthContext = {
    repos,
    profile,
    linkedin,
  };

  // Filter repos by selected element in DECK view
  const filteredRepos = repos.filter((r) => {
    if (selectedElement === 'ALL') return true;
    const el = resolveElementalType(r.name, r.description, r.language);
    return el === selectedElement;
  });

  return (
    <ThemeProvider mode={isDark ? 'dark' : 'light'} lightTheme={pokelabLightTheme} darkTheme={gengarDarkTheme}>
      <div className="min-h-screen bg-surface text-on-surface dot-grid transition-colors selection:bg-secondary selection:text-ink">
        {/* Top Handheld OS Bar */}
        <Header
          profile={profile}
          linkedin={linkedin}
          activeView={view}
          setView={setView}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        {/* Left Trainer ID & Cartridge Dock */}
        <Sidebar
          profile={profile}
          linkedin={linkedin}
          activeView={view}
          setView={setView}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
        />

        {/* Main Handheld OS Workspace */}
        <main className="lg:ml-80 pt-24 px-4 sm:px-6 md:px-8 pb-24 lg:pb-12 max-w-7xl">
          {/* DECK VIEW: Live GitHub Project Cartridges + Bento Telemetry */}
          {view === 'DECK' && (
            <div className="space-y-6">
              {/* Asymmetric Split Hero */}
              <section className="neo-box bg-surface-container rounded-2xl p-6 sm:p-8 border-2 border-ink flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-ink font-mono text-xs font-bold border border-ink shadow-[2px_2px_0px_#121316] mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>KAOS.OS v3.0 // ARCHITECTURAL DECK</span>
                  </div>

                  <h1 className="font-headline font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-none text-on-surface">
                    VIDISH SRIVASTAVA
                  </h1>

                  <p className="font-body text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
                    {linkedin?.headline || 'Technical Architect | AI Lead | Google Cloud Certified GenAI Leader'}. 
                    Building bare-metal kernels, deep neural architectures, and quantum computing pipelines with high-velocity deployment precision.
                  </p>

                  <div className="flex flex-wrap gap-2.5 mt-5">
                    <button
                      onClick={() => {
                        playTabSwitch();
                        setView('ROTOM_AI');
                      }}
                      className="neo-btn px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs flex items-center gap-2"
                    >
                      <Bot className="w-4 h-4" />
                      <span>OPEN ROTOM COPILOT</span>
                    </button>

                    <button
                      onClick={() => {
                        playTabSwitch();
                        setView('QUESTS');
                      }}
                      className="neo-btn px-4 py-2 bg-surface-container-low hover:bg-surface-container-high text-on-surface rounded-xl text-xs flex items-center gap-2"
                    >
                      <Swords className="w-4 h-4 text-primary" />
                      <span>EXPLORE QUESTS</span>
                    </button>
                  </div>
                </div>

                <div className="neo-box-sm bg-gradient-to-br from-primary/10 to-secondary/20 p-5 rounded-2xl border-2 border-ink text-center flex flex-col items-center justify-center shrink-0">
                  <span className="font-mono text-[10px] font-bold uppercase text-primary tracking-widest block mb-1">
                    CURRENT REGION
                  </span>
                  <span className="font-headline font-black text-2xl uppercase text-on-surface">
                    ARCHIPELAGO KAOS
                  </span>
                  <span className="font-mono text-xs text-ink-muted mt-1">
                    STATUS: ALL MODULES NOMINAL
                  </span>
                </div>
              </section>

              {/* Bento Telemetry Overview */}
              <StatsOverview repos={repos} linkedin={linkedin} />

              {/* Elemental Filter Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" />
                  <h2 className="font-headline font-black text-xl uppercase tracking-tight text-on-surface">
                    SYNCHRONIZED CARTRIDGE INVENTORY
                  </h2>
                </div>

                {selectedElement !== 'ALL' && (
                  <button
                    onClick={() => {
                      playChiptuneClick();
                      setSelectedElement('ALL');
                    }}
                    className="neo-btn text-xs font-mono font-bold px-3 py-1 bg-surface-container-low text-primary rounded-lg border border-ink flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <span>CLEAR FILTER ({ELEMENTAL_CONFIGS[selectedElement].label})</span>
                    <span>×</span>
                  </button>
                )}
              </div>

              {/* Grid of Holographic Cartridge Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {loading ? (
                  [...Array(6)].map((_, i) => (
                    <div key={i} className="h-72 neo-box bg-surface-container rounded-2xl animate-pulse" />
                  ))
                ) : filteredRepos.length > 0 ? (
                  filteredRepos.map((repo) => (
                    <ProjectCard key={repo.id} repo={repo} />
                  ))
                ) : (
                  <div className="col-span-full neo-box bg-surface-container p-8 rounded-2xl text-center font-mono">
                    <p className="text-sm uppercase text-ink-muted mb-2">No cartridges found in this elemental domain.</p>
                    <button
                      onClick={() => setSelectedElement('ALL')}
                      className="neo-btn px-4 py-2 bg-secondary text-ink rounded-lg text-xs font-bold"
                    >
                      SHOW ALL CARTRIDGES
                    </button>
                  </div>
                )}
              </div>

              {/* Interactive OpenUI Terminal / Rotom Copilot Deck */}
              <Terminal context={synthContext} />
            </div>
          )}

          {/* ROTOM.AI VIEW: Full OpenUI Generative Deck */}
          {view === 'ROTOM_AI' && (
            <div className="space-y-6">
              <Terminal context={synthContext} />
            </div>
          )}

          {/* BADGES VIEW: Gym Badge & Technical Machine Case */}
          {view === 'BADGES' && (
            <TalentsView repos={repos} linkedin={linkedin} />
          )}

          {/* QUESTS VIEW: Battle Tower Quest Log */}
          {view === 'QUESTS' && (
            <QuestsView
              repos={repos}
              linkedin={linkedin}
              onOpenRotomPrompt={() => setView('ROTOM_AI')}
            />
          )}

          {/* MAP VIEW: Architectural Region Topology */}
          {view === 'MAP' && (
            <MapsView />
          )}

          {/* Handheld OS Footer */}
          <footer className="mt-16 pt-8 pb-4 border-t-2 border-ink/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary border border-ink" />
              <span>KAOS.OS v3.0 // BUILT WITH OPENUI & REACT</span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/ulolol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors uppercase"
              >
                GITHUB: @ULOLOL
              </a>
              <a
                href="https://linkedin.com/in/vidish-srivastava-kaos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors uppercase"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:kaosaod@gmail.com"
                className="hover:text-primary transition-colors uppercase"
              >
                COMMS LINK
              </a>
            </div>
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
}

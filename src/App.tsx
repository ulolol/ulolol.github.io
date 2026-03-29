import React, { useState, useEffect } from 'react';
import { Compass, Backpack, FileText, ClipboardList } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import StatsOverview from './components/StatsOverview';
import Terminal from './components/Terminal';
import MapsView from './components/MapsView';
import TalentsView from './components/TalentsView';
import QuestsView from './components/QuestsView';
import { GitHubRepo, GitHubProfile, LinkedInProfile } from './types';
import linkedinData from './data/linkedin.json';

export default function App() {
  const [view, setView] = useState<'INVENTORY' | 'MAPS' | 'TALENTS' | 'QUESTS'>('INVENTORY');
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [linkedin, setLinkedin] = useState<LinkedInProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([
    "Initializing neural link to GitHub:ulolol...",
    "Fetching tactical repository metadata...",
    "Syncing professional archives from static datastore...",
    "Calculating repository power level based on activity...",
    "Finalizing project inventory list..."
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reposRes, profileRes] = await Promise.all([
          fetch('https://api.github.com/users/ulolol/repos?sort=updated&per_page=12'),
          fetch('https://api.github.com/users/ulolol')
        ]);
        
        if (!reposRes.ok) throw new Error("GitHub rate limit or fetch error");
        
        const reposData = await reposRes.json();
        const profileData = await profileRes.json();
        const linkedinRaw = linkedinData as unknown as LinkedInProfile;
        
        setRepos(reposData);
        setProfile(profileData);
        setLinkedin(linkedinRaw);
        
        if (!reposData.some((r: GitHubRepo) => r.stargazers_count > 50)) {
          setLogs(prev => [
            ...prev.slice(0, 3),
            "[ ERROR ] Obscured module detected: 'Project_Vanguard_Core' - Access Denied",
            ...prev.slice(3)
          ]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLogs(prev => [...prev, "[ ERROR ] Connection to neural link failed or Rate Limited. Using cached data if available."]);
        // Fallback or just empty repos
        setLinkedin(linkedinData as unknown as LinkedInProfile);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Header profile={profile} linkedin={linkedin} activeView={view} setView={setView} />
      <Sidebar activeView={view} setView={setView} />
      
      <main className="md:ml-72 pt-28 px-4 md:px-8 pb-24 md:pb-12">
        {view === 'INVENTORY' && (
          <>
            <section className="mb-12 relative">
              <div className="absolute -left-12 top-0 w-2 h-24 bg-primary hidden md:block"></div>
              <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-2">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-headline italic font-black uppercase tracking-tighter leading-none">VID.KAOS</h1>
                <span className="font-label text-primary text-[10px] sm:text-xs font-bold tracking-[0.3em] mb-1 animate-pulse">SCANNING_INVENTORY...</span>
              </div>
              <p className="font-body text-on-surface-variant max-w-2xl text-lg">
                Neural archives of high-velocity deployment modules crafted by <span className="text-primary font-bold">{linkedin?.name || profile?.name || 'ulolol'}</span>. Tactical grade software engineering.
              </p>
            </section>

            <StatsOverview repos={repos} />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {loading ? (
                [...Array(6)].map((_, i) => (
                  <div key={i} className="h-80 bg-surface-container animate-pulse rounded" />
                ))
              ) : (
                repos.map((repo: GitHubRepo) => (
                  <ProjectCard key={repo.id} repo={repo} />
                ))
              )}
            </div>
            
            <Terminal logs={logs} />
          </>
        )}

        {view === 'MAPS' && <MapsView />}
        {view === 'TALENTS' && <TalentsView repos={repos} linkedin={linkedin} />}
        {view === 'QUESTS' && <QuestsView repos={repos} linkedin={linkedin} />}

        <footer className="mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-outline-variant/10 py-8">
          <div className="flex flex-col gap-2">
            <span className="font-label text-[10px] tracking-widest text-primary">SYSTEM STATUS: OPTIMAL // ARCHIVE v2.4</span>
            <span className="font-label text-[8px] tracking-[0.4em] text-on-surface-variant uppercase">Designed for high-velocity deployment</span>
          </div>
          <div className="flex gap-8">
            <FooterLink label="Privacy Protocol" />
            <FooterLink label="Comms Link" />
            <FooterLink label="Neural Map" />
          </div>
        </footer>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-surface-container-low/95 backdrop-blur-xl border-t border-primary/20 md:hidden">
        <MobileNavItem icon={<Compass className="w-5 h-5" />} label="Maps" active={view === 'MAPS'} onClick={() => setView('MAPS')} />
        <MobileNavItem icon={<Backpack className="w-5 h-5" />} label="Inventory" active={view === 'INVENTORY'} onClick={() => setView('INVENTORY')} />
        <MobileNavItem icon={<FileText className="w-5 h-5" />} label="Talents" active={view === 'TALENTS'} onClick={() => setView('TALENTS')} />
        <MobileNavItem icon={<ClipboardList className="w-5 h-5" />} label="Quests" active={view === 'QUESTS'} onClick={() => setView('QUESTS')} />
      </div>
    </div>
  );
}

const FooterLink = ({ label }: { label: string }) => (
  <a href="#" className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors">
    {label}
  </a>
);

const MobileNavItem = ({
  icon,
  label,
  active,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 py-1 px-3 transition-colors ${
      active ? 'text-primary' : 'text-on-surface-variant'
    }`}
  >
    {icon}
    <span className="font-label text-[9px] uppercase tracking-wider">{label}</span>
  </button>
);

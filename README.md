# KAOS.OS v3.0 // Vidish Srivastava

> A bright, funky, tactile **Handheld OS & Trading Card Deck** portfolio engineered with **OpenUI** (`@openuidev/react-lang` & `@openuidev/react-ui`), **React 18**, **Tailwind CSS v4**, and **Motion**.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![OpenUI](https://img.shields.io/badge/OpenUI-1.0-FF3366)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)

---

## ⚡ Architectural Highlights

- **🕹️ Handheld OS Workspace & Bento Deck**: Neo-brutalist daylight palette (warm Alabaster cream `#FFFDF7`, 2px obsidian ink borders, and tactile offset drop shadows) with an optional toggleable "Gengar Night Arcade" mode.
- **✨ OpenUI Generative Deck (`<Renderer />`)**: Powered by `@openuidev/react-lang` and `@openuidev/react-ui`. Includes a custom component library (`kaosOpenUILibrary`) featuring `HoloCartridgeCard`, `ComparisonArena`, and `PokeOSStatsBento`.
- **🔒 100% Client-Side & Zero-API-Key**: Uses an in-browser deterministic OpenUI Lang stream synthesizer (`synthesizer.ts`) to stream and parse OpenUI Lang code token-by-token directly in the browser—fully static and free of external GenAI API keys.
- **🃏 Holographic TCG / Cartridge Cards**: Projects are styled as collectible holographic trading cards with elemental domain badges (`AI_PSYCHIC`, `KERNEL_ELECTRIC`, `QUANTUM_DRAGON`, `SYSTEMS_STEEL`, `GAMING_FIRE`), HP power meters, and sync speed stats.
- **🎵 8-Bit Chiptune Web Audio Synthesizer**: Pure Web Audio API retro square/triangle wave sound effects for button presses, tab switches, and quest completions, with a persistent mute toggle.
- **🏅 Gym Badge & TM Disc Case**: LinkedIn skill archive visualized as collectible Gym Badges and Technical Machine (`TM01`–`TM16`) discs.
- **⚔️ Battle Tower & Quest Board**: Flagship projects (`KaOtiCKerneL`, `Quantum_Kodes`, `ThalesDocsBotv2`, `XDA Developers Legacy`, etc.) and live GitHub repositories categorized by difficulty with XP rewards.
- **🗺️ Architectural Region Topology Map**: Interactive Kanto/Hoenn-inspired archipelago map connecting live deployment nodes.
- **🔄 Live GitHub API Synchronization**: Automatically fetches latest repositories from `https://api.github.com/users/ulolol/repos` with offline fallback to `linkedin.json`.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm

### Development
```bash
# Clone the repository
git clone https://github.com/ulolol/ulolol.github.io.git
cd ulolol.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
```

### GitHub Pages Deployment
```bash
npm run deploy
```

---

## 📂 Project Structure

```text
ulolol.github.io/
├── src/
│   ├── components/         # Tactical UI modules
│   │   ├── Header.tsx      # Top Handheld OS bar, audio toggle & theme switch
│   │   ├── Sidebar.tsx     # Trainer ID card & elemental filter dock
│   │   ├── ProjectCard.tsx # Holographic TCG / Cartridge Card
│   │   ├── StatsOverview.tsx# Bento 2.0 telemetry grid
│   │   ├── Terminal.tsx    # Rotom-OS OpenUI Generative Deck (<Renderer />)
│   │   ├── TalentsView.tsx # Gym Badge & TM Disc Case
│   │   ├── QuestsView.tsx  # Battle Tower Quest Board
│   │   └── MapsView.tsx    # Architectural Region Topology Map
│   ├── openui/             # OpenUI runtime
│   │   ├── library.tsx     # Custom OpenUI component library & Zod schemas
│   │   └── synthesizer.ts  # Client-side OpenUI Lang stream generator
│   ├── utils/
│   │   └── audio.ts        # 8-bit Chiptune Web Audio synthesizer
│   ├── data/
│   │   └── linkedin.json   # Static professional archive fallback
│   ├── types.ts            # Type definitions, elemental configs & overrides
│   ├── index.css           # Tailwind v4 theme, tokens & neo-brutalist utilities
│   ├── App.tsx             # Root application & OpenUI ThemeProvider
│   └── main.tsx            # Entry point
├── design-system/          # Design system specifications
├── public/                 # Static assets (favicons, profile, cyborg dragon)
├── index.html              # Source HTML template with Google Fonts
├── vite.config.ts          # Vite build configuration
└── package.json            # Scripts & dependencies
```

---

## 📡 Comms Link
- **GitHub**: [@ulolol](https://github.com/ulolol)
- **LinkedIn**: [Vidish Srivastava](https://linkedin.com/in/vidish-srivastava-kaos)
- **Email**: kaosaod@gmail.com

---

## 📄 License
MIT License - Open Source.

# Design System Master File: KAOS.OS v3.0

**Project:** KAOS.OS // Vidish Srivastava
**Category:** Poké-Lab Neo-Brutalist & Handheld OS Interface
**Aesthetic Archetype:** Bright, Funky, Tactile Neo-Brutalist with Holographic TCG Elements

---

## 1. Global Tokens

### Color Palette (60-30-10 Rule)

| Role | Token | Light Mode (Daylight Poké-Lab) | Dark Mode (Gengar Arcade) |
| :--- | :--- | :--- | :--- |
| **60% Dominant Canvas** | `--color-surface` | `#FFFDF7` (Warm Alabaster) | `#0E1017` (Deep Arcade Charcoal) |
| **Container Surface** | `--color-surface-container` | `#FFFFFF` (Card Pure White) | `#181B26` (Slate Cartridge) |
| **Recessed Surface** | `--color-surface-container-low` | `#F6F3EB` (Tactile Putty) | `#13151F` (Recessed Slot) |
| **Borders & Inks** | `--color-ink` | `#121316` (Obsidian Ink) | `#F4F0E6` (Chalk Ink) |
| **10% Primary Accent** | `--color-primary` | `#FF3366` (Rotom Flame Coral) | `#FF4775` (Neon Coral) |
| **30% Secondary Accent 1** | `--color-secondary` | `#FFD026` (Zapdos Volt Gold) | `#FFE047` (Volt Yellow) |
| **30% Secondary Accent 2** | `--color-tertiary` | `#00E5A3` (Bulbasaur Cyber Mint) | `#19F2B0` (Matrix Mint) |
| **30% Secondary Accent 3** | `--color-quaternary` | `#38BDF8` (Porygon Sky Cyan) | `#4CE2FF` (Holo Cyan) |

### Elemental Domain Palette
- **AI & Neural Networks (`AI_PSYCHIC`)**: `#FF3366` (Coral Pink)
- **Kernel & Systems OS (`KERNEL_ELECTRIC`)**: `#FFD026` (Volt Gold)
- **Quantum & Deep Computing (`QUANTUM_DRAGON`)**: `#38BDF8` (Sky Cyan)
- **Rust & Low-Level Infrastructure (`SYSTEMS_STEEL`)**: `#00E5A3` (Cyber Mint)
- **Gaming & Arcade Experiments (`GAMING_FIRE`)**: `#FF8A00` (Charizard Flame)

### Typography Hierarchy
- **Display / Headlines (`--font-headline`)**: `'Syne'`, sans-serif (700/800 weights, tight tracking, expressive geometric character).
- **Body (`--font-body`)**: `'Plus Jakarta Sans'`, sans-serif (400/500/600 weights, high legibility).
- **Cartridge Badges & Telemetry (`--font-label`)**: `'Space Grotesk'`, sans-serif (700 weight, bold uppercase).
- **Data & Metrics (`--font-mono`)**: `'JetBrains Mono'`, monospace (tabular numeric alignment).

---

## 2. Materiality & Interaction Rules

1. **Tactile Neo-Brutalist Elevation (`.neo-box`)**:
   - `2px solid var(--color-ink)` border.
   - `4px 4px 0px var(--color-ink)` hard offset shadow.
   - On hover: `-2px -2px` translation with `6px 6px 0px var(--color-ink)` shadow.
   - On active/press: `+2px +2px` translation with zero shadow to simulate physical button depression.
2. **Holographic TCG Foil (`.holo-foil`)**:
   - Dynamic 115-degree iridescent linear sheen sweep on hover.
3. **No Text Emojis**:
   - All badges, status indicators, and category markers are custom vector SVGs (`lucide-react` / SVG paths).
4. **8-Bit Chiptune Web Audio Feedback**:
   - Low-latency square/triangle wave blips on click, tab switch, and quest completion, with a persistent mute toggle in the OS bar.

---

## 3. OpenUI Integration

- **Custom Component Library**: `kaosOpenUILibrary` assembled via `createLibrary` from `@openuidev/react-lang` and `@openuidev/react-ui`.
- **Renderer Component**: `<Renderer library={kaosOpenUILibrary} response={streamedText} isStreaming={isStreaming} />`.
- **Zero GenAI API Key Policy**: Runs 100% in-browser using deterministic OpenUI Lang stream synthesis.

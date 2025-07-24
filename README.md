# ESO Build Helper Website

A comprehensive Elder Scrolls Online build helper website built with TypeScript, React, and Tailwind CSS.

## Features

- **Class Directory**: Browse all ESO classes and subclasses
- **Detailed Skill Information**: View skills, morphs, costs, and effects
- **Buffs & Debuffs Glossary**: Complete reference with stacking rules
- **Build Creator**: Create and share custom builds (coming soon)
- **DPS Calculators**: Theoretical damage calculations (coming soon)

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
```bash
cd /Users/necro/Desktop/ESOBuilder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:3000`

## 🚀 Live Demo

**Live Site**: https://benjination.github.io/ESOBuilder/

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Deployment

### GitHub Pages (Automatic)
This project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys the site
3. Site becomes available at: https://benjination.github.io/ESOBuilder/

### Manual Deployment
To deploy manually to other platforms:

```bash
npm run build
# Upload the contents of the 'dist' folder to your hosting provider
```

## Project Structure

```
ESOBuilder/
├── data/                    # Game data files
│   ├── classes.ts          # ESO classes and subclasses
│   ├── skills.ts           # Skills, buffs, and debuffs interfaces
│   └── sample-skills.ts    # Sample Dragonknight skills
├── src/
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles with Tailwind
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Data Structure

The website uses a modular data structure with TypeScript interfaces:

- **Classes**: Each ESO class with subclasses and passive bonuses
- **Skills**: Active, ultimate, and passive skills with morphs
- **Buffs/Debuffs**: Complete system with effects and stacking rules
- **Builds**: User-created builds (coming soon)

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router 6
- **Styling**: Tailwind CSS with custom ESO theme
- **Build Tool**: Vite
- **Icons**: Lucide React

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Custom Theme

The website uses a custom ESO-inspired color scheme:
- **Gold**: Primary accent color (`#D4AF37`)
- **Dark**: Background colors (`#1a1a1a`, `#0d0d0d`)
- **Class Colors**: Blue, Green, Red, Purple for different roles
- **Typography**: Cinzel font for headings (ESO-style)

## Adding New Content

### Adding a New Class
1. Add the class data to `data/classes.ts`
2. Include subclasses with passive bonuses
3. Create skill data files as needed

### Adding Skills
1. Define skills in appropriate data files
2. Include morphs, costs, and effects
3. Link buffs/debuffs by ID

### Adding Buffs/Debuffs
1. Add to `data/skills.ts` in the buffs/debuffs arrays
2. Include effects, stacking rules, and source skills
3. Reference by ID in skill definitions

## Build Creator Features

### Subclass System
- Users can select up to 3 subclasses from their chosen class
- Each subclass provides unique skills and passive bonuses
- Subclass selection is limited to 3 to encourage strategic choices

### Skill System
- Skills can be selected from unlocked subclasses
- Maximum of 12 skills per build (10 active + 2 ultimate)
- **Morph Support**: Skills with morphs show selection options
- Morphs provide variations of base skills with different effects
- Selected morphs are clearly displayed in the build summary

### Build Analysis
- Real-time scoring for Tank, Healer, and DPS roles
- Scores based on skill effects, buffs, debuffs, and synergies
- Recommendations provided based on build composition
- Passive bonuses from selected subclasses included in scoring

### User Interface
- Modern ESO-themed design with gold accents
- Responsive layout for desktop and mobile
- Interactive skill cards with detailed information
- Morph selection modal for skills with variants
- Build validation with helpful error messages
- Live build analysis with loading states

## Completed Features

### Classes and Skills
All ESO classes are fully implemented with authentic skills:

- **Dragonknight**: Ardent Flame, Draconic Power, Earthen Heart (15 skills + 15 passives + 3 ultimates)
- **Sorcerer**: Dark Magic, Daedric Summoning, Storm Calling (15 skills + 15 passives + 3 ultimates)
- **Nightblade**: Assassination, Shadow, Siphoning (15 skills + 15 passives + 3 ultimates)  
- **Templar**: Aedric Spear, Dawn's Wrath, Restoring Light (15 skills + 15 passives + 3 ultimates)
- **Warden**: Animal Companions, Green Balance, Winter's Embrace (15 skills + 15 passives + 3 ultimates)
- **Necromancer**: Grave Lord, Bone Tyrant, Living Death (15 skills + 15 passives + 3 ultimates)
- **Arcanist**: Herald of the Tome, Soldier of Apocrypha, Curative Runeforms (15 skills + 15 passives + 3 ultimates)

### Skill Lines
- **Guild Skills**: Fighters Guild, Mages Guild, Undaunted, Thieves Guild, Dark Brotherhood, Psijic Order
- **World Skills**: Soul Magic, Werewolf, Vampire
- **PvP Skills**: Alliance War, Assault, Support  
- **Weapon Skills**: Two Handed, One Hand and Shield, Dual Wield, Bow, Destruction Staff, Restoration Staff

### Core Systems
- Multi-class builds (up to 3 classes)
- Subclass selection (3 out of 9 available)
- Skill morphs with authentic ESO variations
- Passive skills auto-unlocked and separated from active skill limit
- Real-time build analysis and scoring
- Build validation and error handling
- Guild, World, PvP, and Weapon skill integration

### User Experience
- Responsive ESO-themed UI design
- Interactive skill cards with detailed tooltips
- Morph selection interface
- Live build analysis with Tank/Healer/DPS scoring
- Build validation with helpful feedback
- Mobile-friendly responsive design

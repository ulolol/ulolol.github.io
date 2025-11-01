# Vidish Srivastava - Interactive Portfolio

A beautiful, responsive, and fully interactive portfolio website showcasing my work as a Technical Lead, AI/ML Expert, and Quantum Computing Enthusiast.

## Features

✨ **Interactive Design**
- Smooth animations and transitions
- Responsive multi-page layout
- Dark/Light theme toggle
- Skill filtering on projects page
- Expandable certification details

🎨 **Modern Tech Stack**
- React 18 with React Router v6
- Tailwind CSS for styling
- Lucide React for icons
- Vite for fast development and building

📱 **Fully Responsive**
- Mobile-first design
- Desktop, tablet, and mobile optimized
- Touch-friendly navigation

## Sections

- **Home/Hero** - Eye-catching introduction with social links
- **About** - Personal journey, expertise, and background
- **Projects** - Showcase of 10+ projects with skill filtering
- **Skills** - Technical proficiencies with proficiency bars
- **Certifications** - 15+ certifications with expandable details

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. **Clone or navigate to the repository:**
```bash
cd vidish-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

## Building & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to GitHub Pages

The portfolio is configured to deploy to GitHub Pages. Choose one of these methods:

#### Method 1: Using `gh-pages` CLI (Recommended)

1. **Add your GitHub repository as remote:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/ulolol.github.io.git
```

2. **Deploy with one command:**
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch automatically.

#### Method 2: Manual Deployment

1. **Build the project:**
```bash
npm run build
```

2. **Copy the contents of the `dist/` folder to your GitHub Pages repository root or `/docs` folder**

3. **Commit and push:**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Configure GitHub Pages

In your GitHub repository settings:

1. Go to **Settings** → **Pages**
2. Select **Deploy from a branch**
3. Choose **main** branch and **/root** folder (if using /docs) or leave as default
4. Click **Save**

Your portfolio will be live at: `https://YOUR_USERNAME.github.io/`

## Project Structure

```
vidish-portfolio/
├── src/
│   ├── components/
│   │   └── Navigation.jsx       # Navigation bar with theme toggle
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light theme management
│   ├── pages/
│   │   ├── Home.jsx             # Hero section
│   │   ├── About.jsx            # About me page
│   │   ├── Projects.jsx         # Projects showcase with filtering
│   │   ├── Skills.jsx           # Technical skills
│   │   └── Certifications.jsx   # Certifications & credentials
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles & Tailwind
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies & scripts
```

## Customization

### Update Personal Information

Edit the content in each page component:

- **Home.jsx**: Hero section, social links
- **About.jsx**: Personal journey items, expertise
- **Projects.jsx**: Add/remove projects and skills
- **Skills.jsx**: Technical skills, work experience
- **Certifications.jsx**: Certifications list

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: { ... },  // Change primary colors
      accent: { ... },   // Change accent colors
    }
  }
}
```

### Modify Theme

The theme toggle is managed in `ThemeContext.jsx`. Preferences are saved to `localStorage` automatically.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Lighthouse Score**: 90+
- **Fast Loading**: Optimized with Vite
- **SEO Friendly**: Semantic HTML & meta tags
- **Accessible**: WCAG 2.1 compliant

## License

This portfolio is open source and available under the MIT License.

## Contact

- GitHub: [@ulolol](https://github.com/ulolol)
- LinkedIn: [Vidish Srivastava](https://linkedin.com/in/vidish-srivastava-kaos)
- Email: kaosaod@gmail.com

---

Built with ❤️ using React, Tailwind CSS, and Vite

# Deployment Guide - Vidish Srivastava Portfolio

## Quick Start (3 Steps)

### Step 1: Setup
```bash
cd vidish-portfolio
npm install
```

### Step 2: Test Locally
```bash
npm run dev
```
Visit `http://localhost:5173` to see it in action!

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

Done! Your portfolio will be live at `https://ulolol.github.io/`

---

## Detailed Setup Instructions

### Prerequisites
- Node.js 16 or higher ([Download here](https://nodejs.org/))
- Git
- GitHub account

### Installation

1. **Navigate to project directory:**
```bash
cd vidish-portfolio
```

2. **Install all dependencies:**
```bash
npm install
```

### Development

**Start the development server:**
```bash
npm run dev
```

The portfolio will open at `http://localhost:5173` with hot reload enabled.

### Production Build

**Build for production:**
```bash
npm run build
```

This creates optimized static files in the `dist/` folder.

**Preview production build:**
```bash
npm run preview
```

---

## GitHub Pages Deployment

### Option A: Automatic Deployment (Recommended)

**One command deployment:**
```bash
npm run deploy
```

This command:
1. Builds the project
2. Pushes to `gh-pages` branch
3. Automatically deploys to GitHub Pages

**What you need:**
- GitHub repository configured as remote
- `gh-pages` package (already in package.json)

### Option B: Manual Deployment via /docs folder

1. **Build the project:**
```bash
npm run build
```

2. **Create /docs folder and copy contents:**
```bash
mkdir docs
cp -r dist/* docs/
```

3. **Commit and push:**
```bash
git add docs/
git commit -m "Deploy portfolio"
git push origin main
```

4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "main" branch, "/docs" folder
   - Click Save

5. **Access your portfolio:**
   - Live at: `https://ulolol.github.io/`
   - Check GitHub Actions for build status

### Option C: Upload to Existing Repository

If you already have a portfolio repo:

1. **Build the project:**
```bash
npm run build
```

2. **Copy `dist` contents to your repo root**

3. **Ensure these files exist in repo root:**
   - `index.html`
   - `_config.yml` (optional, but recommended)

4. **Commit and push:**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## Configuration

### Update vite.config.js for Different Base Paths

If deploying to a subdirectory (not username.github.io):

```js
export default defineConfig({
  base: '/your-repo-name/',  // Your repository name
  // ... rest of config
})
```

### Create _config.yml (Optional)

Create this file in repo root to help GitHub Pages recognize it:

```yaml
markdown: kramdown
theme: jekyll-theme-minimal
remote_theme: null
```

---

## Troubleshooting

### "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### "Port 5173 already in use"
**Solution**: Kill the process or use different port:
```bash
npm run dev -- --port 3000
```

### Portfolio not showing on GitHub Pages
**Checklist:**
1. ✅ Repository is public
2. ✅ Branch is set to deploy from in Settings → Pages
3. ✅ `index.html` is in deployment folder
4. ✅ Wait 2-3 minutes for GitHub Pages to rebuild

### Styling not working
**Solution**: Clear browser cache (Ctrl+Shift+Delete) or use Incognito mode

### Theme toggle not persisting
**Solution**: Make sure localStorage is enabled in browser

---

## Performance Tips

1. **Minimize dependencies** - Already optimized!
2. **Image optimization** - Consider using WebP format
3. **Lazy loading** - Already implemented with React
4. **Caching** - GitHub Pages handles this automatically

---

## Customization Before Deployment

### Update Personal Info

1. **Home Page** (`src/pages/Home.jsx`):
   - Change social media links
   - Update email address
   - Modify introduction text

2. **About Page** (`src/pages/About.jsx`):
   - Update journey items
   - Change expertise list
   - Edit personal background

3. **Projects** (`src/pages/Projects.jsx`):
   - Add/remove projects
   - Update GitHub links
   - Modify project descriptions

4. **Skills** (`src/pages/Skills.jsx`):
   - Change skill categories
   - Update proficiency percentages
   - Edit experience details

5. **Certifications** (`src/pages/Certifications.jsx`):
   - Add/remove certifications
   - Update dates and issuers
   - Modify credentials

### Color Scheme

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    50: '#f0f9ff',
    600: '#0284c7',    // Change this
    700: '#0369a1',    // And this
  },
  accent: {
    600: '#7c3aed',    // And this
  }
}
```

---

## After Deployment

1. **Share your portfolio:**
   - GitHub: https://ulolol.github.io/
   - Add to LinkedIn
   - Include in resume/CV

2. **Monitor traffic:**
   - Use Google Analytics (optional)
   - Check GitHub insights

3. **Keep it updated:**
   - Add new projects regularly
   - Update certifications
   - Refresh skills list

---

## Need Help?

- **GitHub Issues**: Check GitHub for troubleshooting
- **Documentation**: Read README.md for detailed info
- **React Router Docs**: https://reactrouter.com/
- **Tailwind CSS Docs**: https://tailwindcss.com/

---

## Summary

Your portfolio is production-ready! Just run:

```bash
npm install
npm run deploy
```

Your interactive portfolio will be live in minutes! 🚀

---

**Questions or issues? Update the files and redeploy - changes are live in seconds!**

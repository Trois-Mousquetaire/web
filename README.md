# Trois Mousquetaire Website

Modern company website for Trois Mousquetaire - Mobile and Web App Development Company.

## Technologies Used

- React 18
- Vite
- HTML5
- CSS3

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Create a GitHub repository** (if not already created)

2. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/trois-mousquetaire.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will be available at: `https://yourusername.github.io/trois-mousquetaire`

4. **For Custom Domain:**
   - After deployment, go to **Settings** → **Pages**
   - Under **Custom domain**, enter your domain (e.g., `troismousquetaire.com`)
   - The `CNAME` file is already included in the `public` folder
   - Update DNS records as per GitHub's instructions:
     - Type: `CNAME`
     - Name: `@` or `www`
     - Value: `yourusername.github.io`

## Features

- Modern, responsive design
- Smooth animations and transitions
- Mobile-first approach
- SEO-friendly structure
- Fast loading times
- Automatic deployment to GitHub Pages

## Sections

- **Hero**: Eye-catching landing section
- **About**: Company information and mission
- **Services**: Development services offered
- **Technologies**: Tech stack showcase
- **Projects**: Current and completed projects
- **Footer**: Contact information and links

## Project Structure

```
web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── index.html              # HTML entry point
│   └── CNAME                   # Custom domain configuration
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # About section
│   │   ├── Services.jsx        # Services section
│   │   ├── Technologies.jsx    # Technologies section
│   │   ├── Projects.jsx        # Projects section
│   │   └── Footer.jsx         # Footer section
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   └── index.js                # React entry point
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Development

The development server runs on `http://localhost:5173` by default (Vite default port).

## Build

The production build outputs to the `dist` folder, which is automatically deployed to GitHub Pages via GitHub Actions.

## License

Copyright © 2024 Trois Mousquetaire. All rights reserved.


# Personal Portfolio — Justus Marwa

Responsive personal portfolio website built with **HTML**, **CSS**, and **Vanilla JavaScript** and deployed on **GitHub Pages**.  
It highlights my background as a junior full‑stack developer, showcases selected projects, and includes a Featured Project section.

## Live Site
- https://justus-ai.github.io/personalPortfolio/

## Repository
- https://github.com/justus-ai/personalPortfolio

---

## Tech Stack
- **HTML5**
- **CSS3** (custom properties, gradients, media queries)
- **JavaScript (Vanilla)** (UI interactions: navigation, filtering, modals)
- **Ionicons**
- **GitHub Pages** (deployment)

---

## Skills (Job-Focused Summary)

### Frontend
- HTML5 (semantic structure)
- CSS3 (responsive design, custom properties, layout, reusable components)
- JavaScript (DOM manipulation, event handling, UI state toggling)
- UI/UX: mobile-first thinking, consistent spacing/typography, component-like CSS patterns

### Backend (Featured / Linked Projects)
- Python
- Django (including auth/account workflows)
- PostgreSQL
- Stripe payments integration (checkout/payment flow)

### Tools & Workflow
- Git & GitHub (version control)
- GitHub Pages (deployment)
- Chrome DevTools (responsive debugging, CSS inspection)

### Currently Preparing
- **React** (component architecture, state management patterns, modern tooling)

---

## Key Features
- **Mobile-first responsive layout**
- Sidebar with **“Show Contacts”** toggle
- Page-style navigation for:
  - About
  - Resume
  - Portfolio
- Portfolio filtering:
  - All
  - Projects
  - Hackathons
- **Featured Project** card with direct links (Repo + Live Demo)
- Testimonials modal pattern (overlay click to close)

---

## Featured Project
**Swahili Bob Tattoo** — Full‑stack Django e‑commerce website  
- Repo: https://github.com/justus-ai/swahili_bob_tattoo  
- Live demo: https://swahili-bob-tattoo.onrender.com  

Highlights:
- Django + PostgreSQL deployment (Render)
- User accounts + profiles (django-allauth)
- Stripe payments + bag/checkout flow

---

## Portfolio Projects
- **Leksand's Outdoor Workout** (HTML • CSS)  
  https://justus-ai.github.io/leksands-oudoor-workout/

- **Swenglish** (HTML • CSS • JavaScript)  
  https://justus-ai.github.io/swenglish/

- **Amazing Food** (Python • JavaScript • HTML • CSS • Bootstrap)  
  https://amazing-food-jept.onrender.com

- **Swahili Bob Tattoo** (Django • Stripe • Auth • PostgreSQL • HTML • CSS)  
  https://swahili-bob-tattoo.onrender.com

- **Gift Appy** (Hackathon — Dec 2022)  
  https://gift-appy.onrender.com/

---

## Testing

### Manual Testing
- Verified layout and readability across common breakpoints:
  - Mobile (≈375px)
  - Tablet (≈768px)
  - Desktop (≥1024px)
- Confirmed navigation switches sections correctly (About / Resume / Portfolio)
- Confirmed portfolio filters show/hide project cards as expected
- Confirmed Featured Project links open correctly in a new tab
- Confirmed sidebar “Show Contacts” toggle works on smaller screens
- Confirmed modal overlay (testimonials) opens/closes and does not block page interaction when inactive

### Cross-Browser Testing (Recommended)
- Chrome / Edge (desktop)
- Safari (iOS) and Chrome (Android) for mobile rendering

> If you want, add a short note here with the exact devices/browsers you personally tested.

---

## Accessibility
- Semantic HTML structure (headings, sections, lists)
- Link/button usage:
  - External links open in a new tab and use `rel="noopener noreferrer"`
  - Interactive controls are standard `<button>` / `<a>` elements (keyboard-friendly by default)
- Color/contrast:
  - Uses a dark theme with light text for readability
- Responsive behavior:
  - Avatar and layout designed to avoid overflow on small screens

### Accessibility Improvements Planned
- Add a “Skip to content” link
- Add visible focus styles for keyboard navigation (ensure focus ring is obvious)
- Run Lighthouse accessibility audits and address any issues (ARIA labels, contrast warnings, etc.)

---

## Local Development

### Option A: Open directly
Open `index.html` in your browser.

### Option B: Run a local server (recommended)
```bash
git clone https://github.com/justus-ai/personalPortfolio.git
cd personalPortfolio
python -m http.server 8000
```

Then open:
- http://localhost:8000

---

## Deployment (GitHub Pages)
This project is deployed via **GitHub Pages**.

Typical steps:
1. Push changes to your default branch (e.g. `main`)
2. In GitHub: **Settings → Pages**
3. Select the deployment branch/folder and save
4. Wait for the Pages build to finish, then hard refresh the site if needed

---

## Roadmap — Moving Toward React (Job Readiness)
Next steps as I prepare for React roles:

- Rebuild as a **React** app using components:
  - `Sidebar`, `Navbar`, `FeaturedProject`, `ProjectGrid`, `ProjectCard`
- Store projects in a JSON file and render via `.map()`
- Add **React Router** (or state-based section routing)
- Add **ESLint + Prettier** and consistent formatting
- Add a small CI workflow (lint/build) using GitHub Actions

---

## Author
**Justus Marwa**
- GitHub: https://github.com/justus-ai
- LinkedIn: https://linkedin.com/in/justus-marwa-79b9b658/

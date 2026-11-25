# Prem Chandra Gupta — Portfolio

Live site: **https://premteach.github.io/MyPortfolio/**

Portfolio of Prem Chandra Gupta, final-year B.Tech CSE student at Lovely
Professional University (graduating 2027), seeking SDE, Full Stack, Backend
and Frontend internships / entry-level roles.

## What a recruiter sees in 30 seconds

- **Hero** — who I am, what roles I want, and a link to my CV.
- **Projects** — 4 real projects, all live on GitHub with working links:
  - Cyberthreat Intelligence AI — threat-intel dashboard on 19,204 real
    incidents (Python, React, FastAPI, MongoDB)
  - Warehouse Inventory Optimization — Java core + React frontend, DSA
    (Segment Tree, Dijkstra, Greedy, Binary Search)
  - Smart Notes — MERN note-taking app with JWT auth
  - AgriCommerce — PHP/MySQL farm-products e-commerce
- **Skills** — exactly the skills on my CV, grouped by area. Nothing
  invented.
- **Journey & Certifications** — B.Tech (LPU), Full Stack training
  (Techvanto, Grade A), and 5 real certifications.
- **Resume** — my current 1-page CV, downloadable as PDF.
- **Contact** — email, phone, GitHub and LinkedIn. The form opens the
  visitor's email app addressed to me.

## Stack

React 18 + Vite + Tailwind CSS + Framer Motion, deployed to GitHub Pages.

## Run locally (Windows)

```bat
npm install
npm run dev
```

Then open http://localhost:5173

## Build & deploy

```bat
npm run build
npm run deploy
```

`npm run deploy` builds the site and publishes `dist/` to GitHub Pages.

## Notes for maintainers

- All GitHub links point to `github.com/premteach` — the old
  `Premchandra-gupta` username does not exist.
- Project descriptions match what the code actually does. Do not add
  features (payment integration, live demos, markdown support…) unless
  they are really in the repo.
- The CV in `src/img/cv.pdf` is the same 1-page CV used for job
  applications. If the CV changes, replace both `cv.pdf` and the
  `cv.jpg` preview (render page 1 of the PDF at 150 dpi).

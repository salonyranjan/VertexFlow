<div align="center">

<img src="./public/favicon.png" width="96" alt="VertexFlow logo" />

# VertexFlow

### Engineering ideas into immersive digital experiences.

VertexFlow is the interactive developer portfolio of **Salony Ranjan**, bringing together full-stack engineering, artificial intelligence, 3D graphics, and thoughtful interaction design.

[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-000000?style=flat-square&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-Motion-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://gsap.com/)

[**Open the live portfolio**](https://vertex-flow-phi.vercel.app/) · [Visual showcase](#visual-showcase) · [Highlights](#highlights) · [Run locally](#run-locally)

</div>

---

## About VertexFlow

VertexFlow presents Salony's work, experience, skills, certifications, and projects through a responsive, motion-rich interface. Its Three.js hero, carefully paced GSAP animations, and persistent light and dark themes create a portfolio that feels cinematic without sacrificing usability.

---

## Visual showcase

Every application section is shown below in both **light** and **dark** mode, except **About Me**, which is intentionally presented once. Images are displayed at full README width so the interface remains easy to inspect.

### Hero

#### Light mode

<img src="./public/screenshots/hero-light.png" width="1200" alt="VertexFlow hero section in light mode" />

#### Dark mode

<img src="./public/screenshots/hero-dark.png" width="1200" alt="VertexFlow hero section in dark mode" />

### About Me

<img src="./public/screenshots/about.png" width="1200" alt="VertexFlow About Me section" />

### Selected Work and Capabilities

#### Light mode

<img src="./public/screenshots/work-light.png" width="1200" alt="VertexFlow selected work and capabilities section in light mode" />

#### Dark mode

<img src="./public/screenshots/work-dark.png" width="1200" alt="VertexFlow selected work and capabilities section in dark mode" />

### Professional Experience

#### Light mode

<img src="./public/screenshots/experience-light.png" width="1200" alt="VertexFlow professional experience section in light mode" />

#### Dark mode

<img src="./public/screenshots/experience-dark.png" width="1200" alt="VertexFlow professional experience section in dark mode" />

### Skills and Tools

#### Light mode

<img src="./public/screenshots/skills-light.png" width="1200" alt="VertexFlow skills and tools section in light mode" />

#### Dark mode

<img src="./public/screenshots/skills-dark.png" width="1200" alt="VertexFlow skills and tools section in dark mode" />

### Certifications

#### Light mode

<img src="./public/screenshots/certifications-light.png" width="1200" alt="VertexFlow certifications section in light mode" />

#### Dark mode

<img src="./public/screenshots/certifications-dark.png" width="1200" alt="VertexFlow certifications section in dark mode" />

### Featured Projects

#### Light mode

<img src="./public/screenshots/projects-light.png" width="1200" alt="VertexFlow featured projects section in light mode" />

#### Dark mode

<img src="./public/screenshots/projects-dark.png" width="1200" alt="VertexFlow featured projects section in dark mode" />

### Contact

#### Light mode

<img src="./public/screenshots/contact-light.png" width="1200" alt="VertexFlow contact section in light mode" />

#### Dark mode

<img src="./public/screenshots/contact-dark.png" width="1200" alt="VertexFlow contact section in dark mode" />

---

## Highlights

- Responsive desktop and mobile layouts
- Interactive React Three Fiber hero environment
- Smooth GSAP-driven scroll animations
- Persistent light and dark themes
- Selected-work and featured-project showcases
- Expandable professional experience documents
- Accessible keyboard navigation and reduced-motion support
- Contact form powered by EmailJS

---

## Technology stack

| Area | Technology |
| --- | --- |
| Frontend | React 19, Vite 8 |
| Styling | Tailwind CSS 4, responsive custom styles |
| 3D | Three.js, React Three Fiber, React Three Drei |
| Motion | GSAP, GSAP React |
| Contact | EmailJS |
| Quality | ESLint, production build verification |

---

## Project structure

```text
VertexFlow/
├── public/
│   ├── images/                  Portfolio and 3D visual assets
│   └── screenshots/             README showcase captures
├── src/
│   ├── components/              Navigation, controls, and 3D experiences
│   ├── constants/               Portfolio content and project data
│   ├── sections/                Page sections and feature showcases
│   ├── App.jsx                  Application composition
│   ├── index.css                Theme and responsive styling
│   └── main.jsx                 React entry point
├── .env.example                 Contact configuration template
├── package.json                 Commands and dependencies
└── vite.config.js               Vite and Tailwind configuration
```

---

## Run locally

### Requirements

- Node.js compatible with Vite 8
- npm
- Optional EmailJS account for contact-form delivery

### Installation

```bash
git clone https://github.com/salonyranjan/VertexFlow.git
cd VertexFlow
npm install
npm run dev
```

Open the local address printed by Vite.

For contact-form delivery, copy `.env.example` to `.env` and add your EmailJS credentials. Keep private credentials out of source control.

---

## Quality checks

```bash
npm run lint
npm run build
npm run check
npm run preview
```

| Command | Purpose |
| --- | --- |
| `npm run lint` | Checks the source with ESLint |
| `npm run build` | Creates the optimized production build |
| `npm run check` | Runs linting and the production build together |
| `npm run preview` | Serves the production build locally |

---

## Author

Developed by **Salony Ranjan** — Full-Stack and AI Engineer.

[Portfolio](https://vertex-flow-phi.vercel.app/) · [GitHub](https://github.com/salonyranjan) · [LinkedIn](https://www.linkedin.com/in/salony-ranjan-b63200280/)

> This is a personal portfolio. Please do not reuse personal images or content without permission.

<div align="center">

**Built where engineering, intelligence, and interaction meet.**

</div>

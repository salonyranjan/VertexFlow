# 🌌 VertexFlow - Interactive 3D Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://vertex-flow-phi.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-Black?style=for-the-badge&logo=three.dot-js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock)](https://gsap.com/)
![3D](https://img.shields.io/badge/3D-Three.js%20%7C%20Fiber-black)

Welcome to the source code for my personal developer portfolio, **VertexFlow**. This project is a highly interactive, 3D-powered web experience designed to showcase my journey as a Full-Stack and AI/ML Developer. 

🔗 **[View Live Portfolio](https://vertex-flow-phi.vercel.app/)**
---
## 📱 Visual Experience

VertexFlow is engineered to bridge the gap between high-end 3D graphics and functional web interfaces. The experience is centered around fluid motion and depth.

<div align="center">
  <table style="width:100%; text-align:center;">
    <tr>
      <td width="50%">
        <p align="center"><b>🌌 Immersive Hero Scene</b></p>
        <img src="./public/images/visual-hero.png" width="400" alt="3D Hero Section"/>
        <p><i>Real-time WebGL environment built with Three.js and custom shaders.</i></p>
      </td>
      <td width="50%">
        <p align="center"><b>🚀 Project Showcase</b></p>
        <img src="./public/images/visual-projects.png" width="400" alt="3D Project Grid"/>
        <p><i>Interactive 3D cards with hover-responsive tilt and parallax effects.</i></p>
      </td>
    </tr>
    <tr>
      <td width="50%">
        <p align="center"><b>🛠️ Tech Stack Visualization</b></p>
        <img src="./public/images/visual-stack.png" width="400" alt="Animated Tech Stack"/>
        <p><i>GSAP-orchestrated timelines revealing technical proficiency on scroll.</i></p>
      </td>
      <td width="50%">
        <p align="center"><b>✉️ Cinematic Contact</b></p>
        <img src="./public/images/visual-contact.png" width="400" alt="Contact Form UI"/>
        <p><i>Glassmorphic UI design optimized for high-conversion and sleek interaction.</i></p>
      </td>
    </tr>
  </table>

  <br />
  <i>"VertexFlow leverages React Three Fiber and GSAP to deliver a silky-smooth 60 FPS experience that adapts seamlessly across all device tiers."</i>
</div>

---

### 🎨 Design Highlights
* **Glassmorphic UI:** Utilizing backdrop blurs and semi-transparent layers for a modern, futuristic feel.
* **Motion Blur & Bloom:** Custom post-processing effects to enhance the cinematic quality of 3D renders.
* **Responsive Camera:** Dynamically adjusted Field of View (FOV) to ensure the 3D scene looks perfect on both mobile and ultra-wide displays.
---
## ✨ Key Features

VertexFlow isn't just a portfolio; it's a high-performance 3D engine designed to showcase technical depth through immersive storytelling.

### 🎭 Cinematic 3D Experience
* **Immersive Environments:** Built with **Three.js** and **React Three Fiber (R3F)** for high-fidelity WebGL rendering.
* **Dynamic Geometry:** Optimized 3D model orchestration with **@react-three/drei**, ensuring fast load times without sacrificing visual quality.

### 🌊 Fluid Motion & Orchestration
* **Smooth Scroll Physics:** Integrated **Lenis** smooth-scrolling to eliminate "scroll jank" and provide a native-app feel.
* **Scroll-Triggered Timelines:** Complex animation sequences orchestrated via **GSAP (GreenSock)** that stay perfectly in sync with user movement.
* **UI Micro-interactions:** Declarative, spring-based animations using **Framer Motion** for polished interface feedback.

### ⚡ Modern Engineering Stack
* **Next-Gen Tooling:** Built on **Vite** and **React 19** for near-instant Hot Module Replacement (HMR).
* **Utility-First Styling:** Leveraging **Tailwind CSS v4** for a streamlined, high-performance design system.
* **Serverless Connectivity:** A robust contact system powered by **EmailJS** for seamless client-side communication.
---
## 🏗️ Feature Orchestration Architecture
The following diagram illustrates how the technical components of VertexFlow interact to create the "Cinematic Flow":

```mermaid
graph LR
    %% Styles
    classDef engine fill:#2563eb,color:#fff,stroke:#fff
    classDef motion fill:#8b5cf6,color:#fff,stroke:#fff
    classDef ui fill:#10b981,color:#fff,stroke:#fff

    %% Flow
    User((User Scroll)) --> Lenis[Lenis Smooth Scroll]
    Lenis --> GSAP[GSAP ScrollTrigger]
    
    subgraph "The 3D World"
    GSAP --> R3F[React Three Fiber]
    R3F --> Canvas[WebGL Canvas]
    end

    subgraph "The Interface"
    GSAP --> DOM[UI Elements]
    DOM --> Framer[Framer Motion]
    end

    class R3F,Canvas engine
    class Lenis,GSAP motion
    class DOM,Framer ui
```
---
## 🏗️ Architecture & Interaction Flow
### 1. The Interaction Flow (Mermaid)

This diagram shows how the user interacts with the 3D layer versus the UI layer.
```mermaid
graph TD
    User((User)) -->|Scrolls / Hovers| Lenis[Lenis Smooth Scroll]
    Lenis -->|Syncs| GSAP[GSAP Timeline]
    GSAP -->|Transforms| R3F[React Three Fiber Scene]
    GSAP -->|Triggers| UI[DOM UI Elements]
    
    subgraph "3D World"
    R3F --> Models[GLTF Models]
    R3F --> Shaders[Custom Shaders]
    end

    subgraph "Logic"
    UI -->|Form Submit| EmailJS[EmailJS API]
    EmailJS -->|Notification| Inbox((Dev Inbox))
    end
```
### 2. Technical Stack Hierarchy
```mermaid
quadrantChart
    title VertexFlow Tech Mapping
    x-axis Low Latency --> High Performance
    y-axis Simple UI --> Immersive 3D
    quadrant-1 "Cinematic Experience"
    quadrant-2 "Core Logic"
    quadrant-3 "Legacy Methods"
    quadrant-4 "Speed & Utility"
    "Three.js": [0.8, 0.9]
    "React 19": [0.5, 0.6]
    "GSAP": [0.7, 0.8]
    "Vite": [0.9, 0.4]
    "Tailwind v4": [0.9, 0.3]
    "Lenis": [0.6, 0.7]
```
### 3. Feature Relationship (ERD Style)
```mermaid
erDiagram
    PORTFOLIO ||--|{ THREE-SCENE : "renders"
    THREE-SCENE ||--o{ GSAP-TIMELINE : "animated by"
    GSAP-TIMELINE ||--o{ SCROLL-TRIGGER : "synced with"
    SCROLL-TRIGGER ||--|| LENIS-ENGINE : "physics provider"
    
    UI-LAYER ||--o{ EMAIL-JS : "handles contact"
    VITE-BUILDER ||--|| PRODUCTION-APP : "optimizes"
```
### 🗄️ Conceptual Data Model (ER Diagram)

Although VertexFlow is a serverless frontend application, the UI is driven by a strictly typed data model structure, and user interactions are handled via structured payloads to external APIs.

```mermaid
erDiagram
    VISITOR ||--o{ MESSAGE : "Submits via Contact Form"
    PORTFOLIO ||--|{ PROJECT : "Showcases"
    PORTFOLIO ||--|{ EXPERIENCE : "Highlights"
    PORTFOLIO ||--|{ SKILL : "Demonstrates"
    PORTFOLIO ||--|{ CERTIFICATION : "Validates"

    MESSAGE {
        string sender_name
        string sender_email
        string message_content
        string service_id "EmailJS Payload"
    }

    PROJECT {
        string name
        string tech_stack
        string description
        string github_link
        string live_link
        string image_path
    }

    EXPERIENCE {
        string role_title
        string company_logo
        string duration
        array responsibilities
    }

    SKILL {
        string category_title
        string description
        string icon_path
    }

    CERTIFICATION {
        string course_name
        string issuer
        string issue_date
        string credential_link
    }
```
---

## 🛠️ Tech Stack

VertexFlow is built with a modern, performance-first stack, focusing on the intersection of 3D graphics and scalable web architecture.

### 🎨 3D & Creative Engineering
| Technology | Usage |
| :--- | :--- |
| **Three.js** | Core WebGL engine for 3D rendering |
| **React Three Fiber** | Declarative Three.js for the React ecosystem |
| **GSAP** | Professional-grade animation timelines and scroll orchestration |
| **Framer Motion** | Declarative UI transitions and micro-interactions |
| **Lenis** | High-performance smooth scroll engine |

### 🏗️ Frontend & Styling
* **React 19:** Utilizing the latest concurrent rendering features.
* **Vite:** Next-generation frontend tooling for ultra-fast HMR.
* **Tailwind CSS v4:** Utility-first styling with the latest CSS engine capabilities.
* **Lucide React:** Clean, consistent vector iconography.

### 🔌 Integrations & DevOps
* **EmailJS:** Serverless client-side email integration for the contact system.
* **Vercel:** Globally distributed edge deployment and CI/CD.
* **Git/GitHub:** Version control and source management.

---

### 📡 System Architecture Overview

This diagram represents the data and animation flow within VertexFlow:

```mermaid
graph TD
    subgraph "Display Layer"
    Canvas[3D Canvas / R3F]
    DOM[UI Overlay / React]
    end

    subgraph "Control Engine"
    Scroll[Lenis Smooth Scroll] -->|Sync| GSAP[GSAP Timeline]
    GSAP -->|Update Props| Canvas
    GSAP -->|Trigger Anims| DOM
    end

    subgraph "External"
    DOM -->|Payload| EmailJS[EmailJS API]
    end

    style Canvas fill:#2563eb,color:#fff
    style GSAP fill:#88ce02,color:#000
    style Scroll fill:#f59e0b,color:#000
```
---
## 🚀 Featured Engineering Projects

VertexFlow serves as the immersive gateway to my technical work, highlighting expertise across AI/ML, Full-Stack Development, and Cloud Infrastructure.

### 🧠 AI & Agentic Systems
* **[ZenithRAG](https://github.com/salonyranjan/ZenithRAG)** | `Python` `LangChain` `Vector DB` `LLMs`
  * Architected an advanced Level-3 RAG system with a high-throughput pipeline for document parsing and semantic synthesis.
* **[RoleRadar](https://github.com/salonyranjan/RoleRadar)** | `AI Agents` `MCP` `Python`
  * Developed an agentic job discovery platform using autonomous AI agents to map profiles to hyper-relevant market opportunities.
* **[MediQuery.ai](https://github.com/salonyranjan/MediQuery.ai)** | `LLMs` `LangChain` `Pinecone` `AWS`
  * Built a RAG-based medical chatbot leveraging vector databases for context-aware healthcare information retrieval.

### 🌐 Full-Stack & Cloud
* **[Z-Axis Cloud](https://github.com/salonyranjan/Z-Axis-Cloud)** | `Docker` `Cloud Infra` `DevOps`
  * Designed a scalable cloud framework optimized for container orchestration and resource-heavy AI model deployment.
* **[SkillBridge AI](https://github.com/salonyranjan/SkillBridge-AI)** | `React` `Node.js` `GenAI`
  * Engineered an AI career coach featuring automated resume parsing and dynamic skill-gap analysis.
* **[Rewind](https://github.com/salonyranjan/Rewind)** | `MERN Stack` `Redux` `JWT`
  * Architected a social ecosystem for digital footprints with a decoupled client-server architecture and cinematic UI.

### ⚡ Performance & Scalability
* **[Sonic-Prep](https://github.com/salonyranjan/sonic-prep)** | `Vite` `Framer Motion` – High-performance interview prep platform focused on low-latency UI.
* **[QuickCart](https://github.com/salonyranjan/QuickCart)** | `Next.js` `SSR` `Tailwind` – E-commerce architecture optimized for SEO and speed.
* **[OpenShelf E2E](https://github.com/salonyranjan/OpenShelf-E2E)** | `ML` `Collaborative Filtering` – End-to-end recommendation engine for personalized content.

---

### 🛠️ Technical Domain Expertise
```mermaid
pie title Project Specializations
    "RAG & Generative AI" : 40
    "Full-Stack (MERN/Next.js)" : 30
    "Cloud & DevOps" : 20
    "Machine Learning" : 10
```
---

## 💻 Running Locally

Want to explore the code or run it on your own machine? Follow these steps:

### 1. Clone the repository
```bash
git clone [https://github.com/salonyranjan/VertexFlow.git](https://github.com/salonyranjan/VertexFlow.git)
cd VertexFlow
```
### 2. Install dependencies
```bash
npm install
```
### 3. Set up Environment Variables
To make the contact form work locally, create a .env file in the root directory and add your EmailJS credentials:
```
Code snippet
VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```
### 4. Start the development server
```bash
npm run dev
```
The application will be available at http://localhost:5173.

---
## 🌐 Deployment
This project is configured for seamless deployment on Vercel.

**Framework Preset: Vite**

**Build Command: npm run build**

**Output Directory: dist**

Note: Ensure that Environment Variables are also configured in your Vercel Project Settings for the live contact form to function properly.


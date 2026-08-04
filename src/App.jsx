import { ReactLenis } from 'lenis/react';
import { useRef } from 'react';

// Component Imports
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase"; 
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Certifications from "./sections/Certifications";
import Projects from "./sections/Projects"; 
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <ReactLenis root options={{ 
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    }}>
      <main className="bg-black text-white w-full min-h-screen overflow-x-hidden selection:bg-emerald-500 selection:text-black font-sans antialiased">
        
        {/* 1. LAYER: GLOBAL AMBIENCE (Deepest Layer) */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
        </div>

        {/* 2. LAYER: SCANLINES (Top-most Overlay) */}
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        {/* 3. LAYER: NAVIGATION */}
        <Navbar />
        
        {/* 4. LAYER: CONTENT SECTIONS */}
        <div className="relative z-10 w-full">
          
          <section id="hero" className="relative">
            <Hero />
          </section>

          {/* LOGO SHOWCASE - Transitions from Hero */}
          <section className="relative py-12 border-b border-white/5 bg-black/80 backdrop-blur-md">
            <LogoShowcase />
          </section>

          {/* WORK SECTION - Contains Pinning logic and Abilities */}
          <section id="work" className="relative scroll-mt-24">
            <ShowcaseSection />
            
            {/* Forced Visibility Wrapper for FeatureCards */}
            <div className="relative z-20 bg-black py-20">
              <FeatureCards />
            </div>
          </section>
          
          <section id="experience" className="relative scroll-mt-28 py-24 bg-zinc-950/40 border-y border-white/5">
            <Experience />
          </section>
          
          <section id="skills" className="relative scroll-mt-28 py-24">
            <TechStack />
          </section>

          <section id="certifications" className="relative scroll-mt-28 py-24 bg-zinc-950/20 border-t border-white/5">
            <Certifications />
          </section>
          
          <section id="projects" className="relative scroll-mt-28 py-24 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent">
            <Projects />
          </section>
          
          <section id="contact" className="relative scroll-mt-28 pb-20">
            <Contact />
          </section>
          
          <Footer />
        </div>
      </main>
    </ReactLenis>
  );
};

export default App;
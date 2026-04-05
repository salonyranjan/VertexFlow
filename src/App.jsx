import { ReactLenis } from 'lenis/react';

// Component Imports
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects"; 
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    /**
     * UI/UX Feature: Lenis Root Provider
     * Provides buttery-smooth, momentum scrolling.
     */
    <ReactLenis root options={{ 
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    }}>
      <main className="bg-black text-white w-full min-h-screen overflow-x-hidden selection:bg-emerald-500 selection:text-black font-sans antialiased">
        
        {/* NEON AMBIENCE: Global Background Glows */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
        </div>

        {/* TOP NAVIGATION */}
        <Navbar />
        
        {/* HERO SECTION: Entry to the Matrix */}
        <section id="hero" className="relative z-10">
          <Hero />
        </section>

        {/* CONTENT WRAPPER: relative z-10 for layering */}
        <div className="relative z-10 bg-black/50 backdrop-blur-[2px]">
          
          {/* WORK SECTION: Showcase & Features */}
          <section id="work" className="scroll-mt-28">
            <ShowcaseSection />
            <div className="py-10">
              <FeatureCards />
            </div>
          </section>
          
          {/* EXPERIENCE: Highlighting NIELIT & Edunet */}
          <section id="experience" className="scroll-mt-28 py-20 border-y border-emerald-500/5 bg-zinc-950/30">
            <Experience />
          </section>
          
          {/* SKILLS: Technical Arsenal & 8.02 CGPA */}
          <section id="skills" className="scroll-mt-28 py-20">
            <TechStack />
          </section>
          
          {/* PROJECTS: MediQuery.ai, SkillBridge AI, etc. */}
          <section id="projects" className="scroll-mt-28 py-20 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent">
            <Projects />
          </section>
          
          {/* CONTACT & FOOTER */}
          <section id="contact" className="scroll-mt-28">
            <Contact />
          </section>
          
          <Footer />
        </div>

        {/* SCANLINE EFFECT: Subtle retro-tech texture */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </main>
    </ReactLenis>
  );
};

export default App;
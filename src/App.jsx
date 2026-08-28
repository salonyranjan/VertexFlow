
import { lazy, Suspense } from "react";

import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import ProfileIntro from "./sections/ProfileIntro";
import LogoShowcase from "./sections/LogoShowcase"; 

const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Certifications = lazy(() => import("./sections/Certifications"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const SectionFallback = () => <div className="section-loading" role="status"><span /> Loading experience…</div>;

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content" className="bg-black text-white w-full min-h-screen overflow-x-hidden selection:bg-emerald-500 selection:text-black font-sans antialiased">
        
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
        </div>

        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        <Navbar />
        
        <div className="relative z-10 w-full">
          
          <section id="hero" className="relative">
            <Hero />
          </section>

          <ProfileIntro />

          <section className="relative py-12 border-b border-white/5 bg-black/80 backdrop-blur-md">
            <LogoShowcase />
          </section>

          <section id="work" className="relative scroll-mt-24">
            <Suspense fallback={<SectionFallback />}><ShowcaseSection /></Suspense>
            
            <div className="relative z-20 bg-black py-20">
              <Suspense fallback={<SectionFallback />}><FeatureCards /></Suspense>
            </div>
          </section>
          
          <section id="experience" className="relative scroll-mt-28 py-24 bg-zinc-950/40 border-y border-white/5">
            <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
          </section>
          
          <section id="skills" className="relative scroll-mt-28 py-24">
            <Suspense fallback={<SectionFallback />}><TechStack /></Suspense>
          </section>

          <section id="certifications" className="relative scroll-mt-28 py-24 bg-zinc-950/20 border-t border-white/5">
            <Suspense fallback={<SectionFallback />}><Certifications /></Suspense>
          </section>
          
          <section id="projects" className="relative scroll-mt-28 py-24 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent">
            <Suspense fallback={<SectionFallback />}><Projects /></Suspense>
          </section>
          
          <section id="contact" className="relative scroll-mt-28 pb-20">
            <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
          </section>
          
          <Suspense fallback={null}><Footer /></Suspense>
        </div>
      </main>
    </>
  );
};

export default App;

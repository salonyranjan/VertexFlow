import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { motion } from "framer-motion";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const scope = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. System Boot: HUD elements and background
    tl.fromTo(".bg-glow", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 2, ease: "power2.out" })
      
      // 2. Text Reveal: Sliding up with a slight skew for "speed"
      .fromTo(
        ".hero-title-line",
        { y: 120, opacity: 0, skewY: 10 },
        { 
          y: 0, 
          opacity: 1, 
          skewY: 0,
          stagger: 0.1, 
          duration: 1.2, 
          ease: "power4.out" 
        },
        "-=1.5"
      )
      
      // 3. Status Badge & Description
      .from(".status-badge", { opacity: 0, x: -20, duration: 0.8 }, "-=0.5")
      .from(".hero-description", { opacity: 0, y: 20, filter: "blur(10px)", duration: 1 }, "-=0.8");
  }, { scope });

  return (
    <section 
      id="hero" 
      ref={scope} 
      className="relative min-h-screen bg-[#020202] overflow-hidden flex items-center selection:bg-emerald-500 selection:text-black"
    >
      {/* NEON AMBIENCE: Global Background Glows */}
      <div className="bg-glow absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[url('/images/grid.png')] bg-center opacity-[0.15] pointer-events-none" />

     {/* Change pt-32 to pt-48 or even pt-52 to clear the Navbar completely */}
     <div className="container mx-auto px-6 md:px-20 z-10 pt-48 md:pt-32 grid grid-cols-1 xl:grid-cols-2 items-center gap-16">
        
        <div className="flex flex-col gap-8 md:gap-12">
          {/* SYSTEM STATUS BADGE */}
          <div className="status-badge flex items-center gap-3 w-fit px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500/70">
              Uplink: Active_Node_2026
            </p>
          </div>

          {/* MAIN TYPOGRAPHY: Ultra-Bold Neon */}
          <div className="hero-text text-white leading-[0.85] tracking-tighter select-none">
            <h1 className="hero-title-line text-6xl md:text-9xl font-black">
              Shaping
            </h1>
            
            {/* DYNAMIC WORD SLIDER */}
            <div className="hero-title-line h-[80px] md:h-[130px] overflow-hidden my-4 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500 shadow-[0_0_15px_#10b981]" />
              <div className="animate-wordSlider flex flex-col pl-6">
                {words.map((word, i) => (
                  <div key={i} className="flex items-center gap-6 text-emerald-500 h-[80px] md:h-[130px]">
                    <img 
                      src={word.imgPath} 
                      className="size-12 md:size-16 rounded-2xl bg-emerald-500/10 p-2 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]" 
                      alt="" 
                    />
                    <span className="text-6xl md:text-9xl font-black italic uppercase drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                      {word.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <h1 className="hero-title-line text-6xl md:text-9xl font-black">
              into Reality
            </h1>
          </div>

          {/* DESCRIPTION: The "Engineer" Persona */}
          <div className="hero-description max-w-xl space-y-10">
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
              Hi, I'm <span className="text-white font-black underline decoration-emerald-500 decoration-4 underline-offset-8">Salony Ranjan</span>. 
              Final year CSBS engineer at <span className="text-emerald-500 font-bold">NSEC</span>. 
              Architecting <span className="text-white italic">Intelligent AI Agents</span> and high-performance neural systems.
            </p>

            <div className="flex flex-wrap gap-6">
              <Button 
                text="Execute_Projects" 
                id="projects"
                className="group relative px-12 py-5 bg-emerald-500 text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(16,185,129,0.5)]" 
              />
            </div>
          </div>
        </div>

        {/* 3D EXPERIENCE WRAPPER: Floating Motion */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-[500px] md:h-[750px] w-full group cursor-grab active:cursor-grabbing"
        >
           <HeroExperience />
           {/* Dynamic Neon HUD Accents */}
           <div className="absolute top-0 right-0 size-24 border-t-2 border-r-2 border-emerald-500/20 rounded-tr-[4rem] pointer-events-none group-hover:border-emerald-500/50 transition-colors" />
           <div className="absolute bottom-0 left-0 size-24 border-b-2 border-l-2 border-emerald-500/20 rounded-bl-[4rem] pointer-events-none group-hover:border-emerald-500/50 transition-colors" />
           
           {/* Radial Glow FX */}
           <div className="absolute inset-0 bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none -z-10 group-hover:bg-emerald-500/10 transition-all duration-1000" />
        </motion.div>
      </div>
      
      {/* DATA COUNTER HUD */}
      <div className="absolute bottom-8 left-0 w-full px-6 md:px-20 z-20">
        <div className="backdrop-blur-md bg-white/[0.02] p-6 rounded-[2rem] border border-white/5 shadow-2xl">
          <AnimatedCounter />
        </div>
      </div>
    </section>
  );
};

export default Hero;
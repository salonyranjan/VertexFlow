import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // 1. Animate the GlowCards (The left side images)
    gsap.utils.toArray(".exp-card-wrapper").forEach((wrapper) => {
      gsap.from(wrapper.querySelector(".glow-card-container"), {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 85%",
        },
      });
    });

    // 2. Animate the Text Content (The right side details)
    gsap.utils.toArray(".exp-text-content").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
        },
      });
    });

    // 3. The "Growing" Timeline Line
    // This scales the line down as you scroll, creating a "drawing" effect
    gsap.to(".timeline-line-inner", {
      scaleY: 0,
      transformOrigin: "bottom bottom",
      ease: "none",
      scrollTrigger: {
        trigger: ".experience-grid-container",
        start: "top center",
        end: "bottom center",
        scrub: true, // Smoothly ties the animation to the scrollbar
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0 relative z-10 bg-black"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Journey"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative experience-grid-container">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={index} className="exp-card-wrapper flex flex-col xl:flex-row gap-10 xl:gap-20">
                
                {/* Left Side: The Image Card */}
                <div className="xl:w-2/6 glow-card-container">
                  <GlowCard card={card}>
                    <div className="overflow-hidden rounded-xl">
                      <img 
                        src={card.imgPath} 
                        alt={card.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  </GlowCard>
                </div>

                {/* Right Side: The Timeline and Text */}
                <div className="xl:w-4/6 flex items-start">
                  <div className="relative mr-8 md:mr-12">
                    {/* The Static Background Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-800" />
                    
                    {/* The Animated "Progress" Line */}
                    <div className="timeline-line-inner absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-emerald-500" />
                    
                    {/* The Logo "Node" */}
                    <div className="relative z-20 w-12 h-12 rounded-full border-2 border-emerald-500 bg-black flex-center p-2 overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <img src={card.logoPath} alt="company-logo" className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <div className="exp-text-content flex-grow">
                    <h1 className="font-bold text-3xl text-white group-hover:text-emerald-400 transition-colors">
                      {card.title}
                    </h1>
                    <p className="my-3 text-emerald-500/80 font-mono text-sm">
                      🗓️ {card.date}
                    </p>
                    <p className="text-gray-500 italic text-sm mb-4 uppercase tracking-widest">
                      Technical Contributions
                    </p>
                    <ul className="list-none flex flex-col gap-4 text-gray-300">
                      {card.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start gap-3 text-lg leading-relaxed">
                          <span className="text-emerald-500 mt-1">▹</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
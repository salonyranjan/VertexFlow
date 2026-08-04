import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
// Fixed Path: Step out of /sections to find constants in /src
import { techStackIcons } from "../constants";

// Register the ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Neon-staggered entrance for the cards
    gsap.fromTo(
      ".tech-card",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15, // Icons will pop in one by one
        scrollTrigger: {
          trigger: "#skills",
          start: "top 75%", // Triggers as the section enters the view
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-32 bg-black px-6 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <TitleHeader
          title="Technical Arsenal"
          sub="🤝 My Key Skills & Tools"
        />

        {/* The grid-base for the 3D Tech Icons */}
        <div className="tech-grid mt-20">
          {techStackIcons && techStackIcons.map((tech) => (
            <div
              key={tech.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-2xl relative bg-[#0a0a0a] border-gray-900 hover:border-emerald-500/50 transition-colors duration-500"
            >
              {/* This is the neon background animation on hover */}
              <div className="tech-card-animated-bg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="tech-card-content relative z-10 flex flex-col items-center justify-center p-10">
                {/* 3D Model Wrapper with hover scale */}
                <div className="tech-icon-wrapper scale-90 group-hover:scale-105 transition-transform duration-500 ease-out">
                  <TechIconCardExperience model={tech} />
                </div>

                <div className="mt-6 text-center">
                  <p className="font-mono text-emerald-500 font-bold text-lg tracking-widest uppercase">
                    {tech.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
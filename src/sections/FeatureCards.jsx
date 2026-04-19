import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { abilities } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Staggered entrance animation for the cards
    gsap.from(".ability-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2, // Each card follows the other with a 0.2s delay
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-20 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={index}
            className="ability-card group relative bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col gap-5 overflow-hidden"
          >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Icon Wrapper */}
            <div className="size-16 flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 group-hover:scale-110 group-hover:border-emerald-500/30 transition-transform duration-500">
              <img src={imgPath} alt={title} className="size-8 object-contain" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                {desc}
              </p>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-4 right-4 text-gray-800 font-mono text-xs group-hover:text-emerald-900 transition-colors">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { abilities } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".ability-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-30 w-full overflow-hidden bg-black px-6 py-24 md:px-12"
      aria-labelledby="feature-cards-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_38%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
            Core Capabilities
          </p>
          <h2
            id="feature-cards-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Built for AI systems, full-stack delivery, and scalable data work.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            A focused set of skills that reflects practical engineering, modern AI workflows, and production-ready architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {abilities.map(({ imgPath, title, desc }, index) => (
            <article
              key={title}
              className="ability-card group relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/12 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%)] opacity-60" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-inner transition-all duration-300 group-hover:border-emerald-400/30 group-hover:bg-emerald-500/10">
                    <img
                      src={imgPath}
                      alt={`${title} icon`}
                      className="h-7 w-7 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0.25";
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-300">
                      {title}
                    </h3>
                    <p className="text-base leading-7 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="self-end font-mono text-4xl text-white/5 transition-colors duration-300 group-hover:text-emerald-500/10 select-none">
                  0{index + 1}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
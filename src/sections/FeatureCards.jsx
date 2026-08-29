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
      className="capabilities-section relative z-30 w-full overflow-hidden bg-black px-6 py-24 md:px-12"
      aria-labelledby="feature-cards-heading"
    >
      <div className="capabilities-atmosphere" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="capabilities-heading">
          <div className="capabilities-kicker"><span /> Core Capabilities</div>
          <h2
            id="feature-cards-heading"
          >
            Engineering depth<br /><span>across the stack.</span>
          </h2>
          <div className="capabilities-intro">
            <p>From intelligent backends to expressive interfaces, every capability is demonstrated through working, deployed products.</p>
          </div>
        </div>

        <div className="capabilities-grid">
          {abilities.map(({ imgPath, title, desc, skills, proof }, index) => (
            <article
              key={title}
              className="ability-card capability-card"
            >
              <div className="capability-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img src={imgPath} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="capability-copy">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <ul aria-label={`${title} technologies`}>
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
              <div className="capability-proof">
                <span>Selected builds</span>
                <strong>{proof}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

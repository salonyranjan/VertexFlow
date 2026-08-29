import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { techStackGroups } from "../constants";
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef();

  useGSAP(() => {
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
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-black px-6 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <TitleHeader
          title="Technical Arsenal"
          sub="Engineering Skills & Tools"
        />
        <div className="arsenal-grid mt-12 md:mt-16">
          {techStackGroups.map((group, index) => (
            <article key={group.title} className="arsenal-card tech-card">
              <div className="arsenal-card-head">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <ul aria-label={`${group.title} technologies`}>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

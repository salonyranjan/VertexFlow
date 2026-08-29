import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProfileIntro = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".profile-intro-card",
      { y: 55, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".profile-intro", start: "top 82%" },
      }
    );
  }, []);

  return (
    <section id="about" className="profile-intro scroll-mt-24" aria-labelledby="profile-intro-title">
      <div className="profile-intro-card">
        <div className="profile-square-frame">
          <img src="/images/salony-ranjan.jpg" alt="Salony Ranjan" />
          <span className="profile-corner profile-corner-one" />
          <span className="profile-corner profile-corner-two" />
        </div>
        <div className="profile-intro-copy">
          <p className="profile-kicker"><span /> About me</p>
          <h2 id="profile-intro-title">Engineering intelligent products with purpose.</h2>
          <p>
            I’m Salony Ranjan, a full-stack and AI engineer focused on creating
            reliable systems, thoughtful interfaces, and digital experiences
            that turn complex ideas into useful products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileIntro;

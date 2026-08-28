import { useRef } from "react";

const GlowCard = ({ card, index = 0, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (event) => {
    const element = cardRefs.current[index];
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    element.style.setProperty("--start", (angle + 420) % 360);
  };

  return (
    <div ref={(element) => { cardRefs.current[index] = element; }} onMouseMove={handleMouseMove} className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column">
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, item) => <img key={item} src="/images/star.png" alt="" className="size-5" />)}
      </div>
      <div className="mb-5"><p className="text-white-50 text-lg">{card.review}</p></div>
      {children}
    </div>
  );
};

export default GlowCard;

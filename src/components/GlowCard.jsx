import { useRef } from "react";

const GlowCard = ({ card, index, children, showStars = false }) => {
  // Use a single ref for the specific card instance
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const cardElement = cardRef.current;
    const rect = cardElement.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // Calculate the angle for the conic-gradient in your CSS
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    // This updates the --start variable used in your index.css
    cardElement.style.setProperty("--start", angle);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border rounded-2xl p-8 md:p-10 mb-6 break-inside-avoid shadow-2xl transition-all duration-300"
    >
      {/* The animated glow layer defined in your CSS */}
      <div className="glow" />

      {/* Conditional Stars (Only for Testimonials) */}
      {showStars && (
        <div className="flex items-center gap-1 mb-6">
          {Array.from({ length: 5 }, (_, i) => (
            <img key={i} src="/images/star.png" alt="star" className="size-4 md:size-5" />
          ))}
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative z-10">
        {/* If the card has a review/quote, show it, otherwise just render children */}
        {card?.review && (
          <p className="text-gray-300 text-lg italic leading-relaxed mb-8">
            "{card.review}"
          </p>
        )}
        
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
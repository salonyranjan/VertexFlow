import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    // Added a subtle backdrop and border to make logos pop against the black background
    <div className="flex-none flex items-center justify-center min-w-[120px] md:min-w-[180px] h-32 px-8 rounded-2xl bg-[#050505] border border-gray-900 hover:border-emerald-500/30 transition-colors duration-500 group">
      <img 
        src={icon.imgPath} 
        alt="Partner Logo" 
        className="max-h-12 w-auto object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0" 
      />
    </div>
  );
};

const LogoShowcase = () => (
  <section className="py-20 relative overflow-hidden bg-black">
    {/* Gradient Fades for the edges to make the logos "emerge" from the shadows */}
    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

    {/* The Scrolling Wrapper */}
    <div className="flex overflow-hidden group">
      {/* Note: Ensure you have a 'marquee' animation defined in your tailwind.config.js 
          or use a standard CSS keyframe. 
      */}
      <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
        {/* First set of logos */}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`first-${index}`} icon={icon} />
        ))}
        {/* Second set of logos for seamless looping */}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`second-${index}`} icon={icon} />
        ))}
      </div>
    </div>
    
    {/* Subtle text indicator */}
    <div className="text-center mt-10">
      <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em]">
        Collaborations & Certifications
      </p>
    </div>
  </section>
);

export default LogoShowcase;
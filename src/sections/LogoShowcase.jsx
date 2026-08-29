import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center justify-center min-w-[120px] md:min-w-[180px] h-32 px-8 rounded-2xl bg-[#050505] border border-gray-900 hover:border-emerald-500/30 transition-colors duration-500 group">
      <img 
        src={icon.imgPath} 
        alt={icon.name}
        className="max-h-12 w-auto object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0" 
      />
    </div>
  );
};

const LogoShowcase = () => (
  <section className="py-20 relative overflow-hidden bg-black">
    <div className="logo-edge logo-edge-left absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
    <div className="logo-edge logo-edge-right absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    <div className="flex overflow-hidden group" aria-label="Organizations and programs">
      <div className="logo-marquee flex animate-marquee whitespace-nowrap gap-8 py-4">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`first-${index}`} icon={icon} />
        ))}
        {logoIconsList.map((icon, index) => (
          <div aria-hidden="true" key={`second-${index}`}><LogoIcon icon={icon} /></div>
        ))}
      </div>
    </div>
    <div className="text-center mt-10">
      <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em]">
        Collaborations & Certifications
      </p>
    </div>
  </section>
);

export default LogoShowcase;

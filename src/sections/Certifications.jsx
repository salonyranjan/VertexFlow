import { certifications } from "../constants"; // Adjust this path if needed

const Certifications = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tighter">
        <span className="text-emerald-500">My</span> Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <a 
            href={cert.link}
            target="_blank" 
            rel="noopener noreferrer"
            key={index} 
            // Changed from div to anchor, added hover translate and cursor-pointer
            className="relative block p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            {/* Card Content */}
            <div className="pr-8">
              <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-emerald-500 mt-2 font-medium">
                {cert.issuer}
              </p>
              <p className="text-zinc-500 text-sm mt-1">
                {cert.date}
              </p>
            </div>

            {/* External Link Icon (Appears on Hover) */}
            <div className="absolute top-6 right-6 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-emerald-400"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects } from '../constants'; // This pulls your custom data!

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto z-10 relative bg-black">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Featured <span className="text-emerald-500">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-emerald-500 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors duration-300 group flex flex-col"
          >
            <div className="h-48 w-full bg-gray-900 rounded-lg mb-6 overflow-hidden relative flex-shrink-0">
              <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              
              <img 
                src={project.imgPath} 
                alt={project.name} 
                className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-xs font-mono bg-black/90 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                  {project.tech}
                </span>
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.review}
              </p>
            </div>
            
            <div className="pt-4 border-t border-gray-800 mt-auto">
              <a href={`#${project.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-emerald-500 hover:text-white transition-colors flex items-center gap-2 w-fit">
                View Details 
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
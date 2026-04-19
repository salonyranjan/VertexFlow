import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects } from '../constants'; 

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card) => {
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
            toggleActions: 'play none none reverse', // FIXED: Was 'toggle'
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
            
            {/* UPDATED FOOTER: Dual Links */}
            <div className="pt-4 border-t border-gray-800 mt-auto flex items-center justify-between">
              
              {/* GitHub / Repo Link */}
              <a 
                href={project.githubLink || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Code
              </a>

              {/* Live Demo Link */}
              <a 
                href={project.liveLink || "#"} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-medium text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1 group/link"
              >
                Live Demo 
                <svg className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
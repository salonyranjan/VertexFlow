import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger background change after 20px of scrolling
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    // Only intercept internal hash links
    if (link.startsWith("#")) {
      e.preventDefault();
      
      // Use Lenis for buttery smooth scrolling
      if (lenis) {
        lenis.scrollTo(link, {
          offset: -100, // Leaves space so the header doesn't cover the section title
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-black/70 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.1)]" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO: Neon Pulse Effect */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group relative font-black text-2xl tracking-tighter text-white select-none"
        >
          Vertex<span className="text-emerald-500 group-hover:animate-pulse transition-all">Flow</span>
          {/* Subtle neon indicator dot */}
          <span className="absolute -right-3 top-1 size-1.5 bg-emerald-500 rounded-full shadow-[0_0_12px_#10b981]" />
        </a>

        {/* DESKTOP NAV: Animated Underline */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="relative group">
                <a 
                  href={link}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-emerald-400 transition-all duration-300"
                >
                  {name}
                  {/* Neon Underline Trace */}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-emerald-500 shadow-[0_0_10px_#10b981] transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA BUTTON: Cyberpunk Glow */}
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, "#contact")}
          className="relative group overflow-hidden px-6 py-2.5 rounded-lg border border-emerald-500/40 hover:border-emerald-500 transition-all duration-300"
        >
          {/* Background fill on hover */}
          <div className="absolute inset-0 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
          
          <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.25em] text-emerald-500 group-hover:text-black transition-colors">
            Initiate Contact
          </span>

          {/* Corner geometric accents for that 'Eng' feel */}
          <div className="absolute top-0 left-0 size-1 border-t border-l border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 size-1 border-b border-r border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </header>
  );
}

export default NavBar;
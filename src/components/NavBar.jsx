import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const SunIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></svg>;
const MoonIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 15.5A8.5 8.5 0 018.5 3.6 8.5 8.5 0 1020.4 15.5z"/></svg>;

const getInitialTheme = () => {
  try {
    const savedTheme = localStorage.getItem("vertexflow-theme");
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
  } catch {
    return "dark";
  }
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("vertexflow-theme", theme);
    } catch {
      // Theme still applies when browser storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const sections = ["hero", ...navLinks.map(({ link }) => link.slice(1)), "contact"]
      .map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-28% 0px -62%", threshold: [0, .2, .5] });
    sections.forEach((section) => observer.observe(section));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  const navigate = (event, link) => {
    event.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(link);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className={`vf-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="vf-nav-inner">
        <a href="#hero" className="vf-brand" onClick={(event) => navigate(event, "#hero")} aria-label="VertexFlow home">
          <span className="vf-brand-name">Vertex<span>Flow</span></span>
          <span className="vf-brand-dot" aria-hidden="true" />
        </a>

        <nav className={`vf-nav-menu ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <div className="vf-mobile-label">Navigation</div>
          {navLinks.map(({ link, name }, index) => (
            <a key={name} href={link} onClick={(event) => navigate(event, link)} className={active === link.slice(1) ? "is-active" : ""}>
              <span className="vf-nav-index">0{index + 1}</span><span>{name}</span>
            </a>
          ))}
          <a href="#contact" onClick={(event) => navigate(event, "#contact")} className="vf-mobile-contact">Let’s build something <span>↗</span></a>
        </nav>

        <div className="vf-nav-actions">
          <button type="button" className="vf-theme-toggle" onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="vf-contact-link" href="#contact" onClick={(event) => navigate(event, "#contact")}><span>Let’s talk</span><b>↗</b></a>
          <button type="button" className={`vf-menu-toggle ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}><i/><i/></button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

import { socialImgs } from "../constants";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <div className="site-footer-identity">
        <a className="site-footer-brand" href="#hero" aria-label="Back to the top">
          Salony<span>Ranjan</span><b>.</b>
        </a>
        <p>Full-stack & AI engineer</p>
      </div>

      <nav className="site-footer-links" aria-label="Footer navigation">
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        {socialImgs.map(({ name, link }) => (
          <a key={name} href={link} target="_blank" rel="noopener noreferrer">{name} ↗</a>
        ))}
      </nav>
    </div>

    <div className="site-footer-bottom">
      <p>© {new Date().getFullYear()} Salony Ranjan</p>
      <a href="#hero">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;

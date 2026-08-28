import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} className="icon" href={socialImg.link} target="_blank" rel="noreferrer" aria-label={`Visit Salony on ${socialImg.name}`}>
              <img src={socialImg.imgPath} alt="social icon" loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Salony Ranjan.    All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

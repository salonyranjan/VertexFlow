import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-gray-900 bg-black z-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-gray-500 font-mono text-sm">
        
        {/* Policy Links */}
        <div className="order-2 md:order-1 flex gap-6 hover:text-emerald-500 transition-colors">
          <p className="cursor-pointer">Terms & Conditions</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>

        {/* Social Icons with Hover Glow */}
        <div className="order-1 md:order-2 flex items-center gap-4">
          {socialImgs.map((social, index) => (
            <a 
              key={index} 
              href="#" // You can map actual links in constants.js later
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0a0a0a] border border-gray-800 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 group"
            >
              <img 
                src={social.imgPath} 
                alt={social.name} 
                className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 invert" // Invert if icons are black
              />
            </a>
          ))}
        </div>

        {/* Dynamic Copyright with your Name */}
        <div className="order-3 text-center md:text-end">
          <p className="tracking-tight">
            © {new Date().getFullYear()} <span className="text-white font-bold">Salony Ranjan</span>. <br className="md:hidden" />
            <span className="text-gray-600">All rights reserved.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
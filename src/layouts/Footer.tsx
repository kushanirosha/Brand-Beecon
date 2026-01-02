import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3c405b] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 pb-4 pt-28 flex flex-col items-center text-center space-y-6">

        {/* Social Icons */}
        <div className="flex space-x-4 md:space-x-6 ">
          {[
            { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
            { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
            { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 flex items-center justify-center 
                         text-gray-200 hover:bg-white hover:text-blue-500 hover:scale-110 
                         transition-transform duration-300"
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-gray-300 text-sm md:text-base max-w-xs sm:max-w-md md:max-w-lg break-words">
          <p>
            No.59/2, Ruwanpura, Werellagama, Kandy, Sri Lanka
          </p>
          <p className="flex flex-col sm:flex-row sm:space-x-2 justify-center">
            <a href="mailto:contact@brandbeecon.com" className="hover:text-blue-500 transition-colors">
              contact@brandbeecon.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:info@brandbeecon.com" className="hover:text-blue-500 transition-colors">
              info@brandbeecon.com
            </a>
          </p>
          <p className="flex flex-col sm:flex-row sm:space-x-2 justify-center">
            <a href="tel:+94759929718" className="hover:text-blue-500 transition-colors">
              +94 75 992 9718
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+94784737746" className="hover:text-blue-500 transition-colors">
              +94 78 473 7746
            </a>
          </p>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-white pt-4 w-full text-xs md:text-sm text-gray-400 text-center break-words">
          <p>
            © {new Date().getFullYear()} All Rights Reserved. Powered by{" "}
            <span className="text-white font-medium hover:text-blue-500 transition-colors">
              Brand Beecon
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

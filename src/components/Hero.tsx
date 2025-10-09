import React from "react";
import { motion } from "framer-motion";
import lightImage from "../public/images/profile.jpg";

const HeroSection: React.FC = () => {
  // Animation variants
  const fadeRight = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Text Section */}
      <motion.div
        className="flex-1 text-left text-[#3c405b]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeRight}
      >
        <p className="text-xl font-light lg:pl-3">I'am Pubudu Wijerathne</p>
        <h1 className="text-7xl md:text-[260px] font-extrabold leading-none">
          Port<br />Folio
        </h1>
        <p className="text-lg font-medium lg:pl-3">Powered By Brand Beacon</p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1 flex justify-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeLeft}
      >
        <img
          src={lightImage}
          alt="Pubudu Wijerathne"
          className="h-[90vh] lg:ml-20 object-contain"
        />
      </motion.div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4V20M12 20L7 15M12 20L17 15"
            stroke="#3c405b"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

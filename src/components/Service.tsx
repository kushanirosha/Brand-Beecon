import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../public/images/logo4.png";

const ServicesSection: React.FC = () => {
  // Variants
  const desktopVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const mobileFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const missionBoxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  // Detect mobile/desktop using window width
  const isMobile = window.innerWidth < 768;

  return (
    <section className="bg-gradient-to-b from-gray-100 to-transparent">
      <div className="text-[#3c405b] py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Brand Beecon Logo" className="mx-auto w-14 h-16 md:w-15 md:h-20" />
          <h2 className="text-xl md:text-2xl font-bold mt-2">BRAND BEECON</h2>
          <div className="w-32 md:w-96 h-[2px] bg-[#3c405b] mx-auto mt-4 md:mt-5"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-3 md:mt-4 text-sm md:text-base leading-relaxed px-2">
            At Brand Beecon, we believe great design is the foundation for a thriving online presence. 
            In a crowded digital world, we create scroll-stopping social media content that doesn’t just look good
            <br />
            <span className="font-semibold text-[#3c405b]">
              it drives engagement and builds communities.
            </span>
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          {/* Center line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#3c405b] -translate-x-1/2"></div>

          {/* Right Item */}
          <motion.div
            className="relative md:mt-10 md:col-start-2 text-left md:text-left"
            initial={isMobile ? "hidden" : "hiddenRight"}
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={isMobile ? mobileFadeUp : desktopVariants}
          >
            <div className="hidden md:block border-t-2 border-[#3c405b] relative">
              <div className="absolute right-0 -top-[9px] w-0 h-0 border-l-8 border-y-8 border-y-transparent border-l-[#3c405b]"></div>
            </div>
            <div className="p-5 md:p-6 mt-3 md:ml-5 bg-white rounded-lg shadow-sm md:shadow-none">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We are Brand Beecon, your all-in-one digital partner, blending creative design 
                with smart marketing to make your brand shine.
              </p>
            </div>
          </motion.div>

          {/* Left Item */}
          <motion.div
            className="relative text-left md:text-right"
            initial={isMobile ? "hidden" : "hiddenLeft"}
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={isMobile ? mobileFadeUp : desktopVariants}
          >
            <div className="hidden md:block border-t-2 border-[#3c405b] relative">
              <div className="absolute left-0 -top-[9px] w-0 h-0 border-r-8 border-y-8 border-y-transparent border-r-[#3c405b]"></div>
            </div>
            <div className="p-5 md:p-6 mt-3 md:mr-5 bg-white rounded-lg shadow-sm md:shadow-none">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We build custom websites blending stunning design with strategic functionality
                to turn visitors into loyal customers.
              </p>
            </div>
          </motion.div>

          {/* Right Item */}
          <motion.div
            className="relative md:mt-10 md:col-start-2 text-left md:text-left"
            initial={isMobile ? "hidden" : "hiddenRight"}
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={isMobile ? mobileFadeUp : desktopVariants}
          >
            <div className="hidden md:block border-t-2 border-[#3c405b] relative">
              <div className="absolute right-0 -top-[9px] w-0 h-0 border-l-8 border-y-8 border-y-transparent border-l-[#3c405b]"></div>
            </div>
            <div className="p-5 md:p-6 mt-3 md:ml-5 bg-white rounded-lg shadow-sm md:shadow-none">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Creative Design</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Scroll-stopping designs capturing attention and driving engagement.
              </p>
            </div>
          </motion.div>

          {/* Left Item */}
          <motion.div
            className="relative text-left md:text-right mb-20 md:mb-32 lg:mt-8 md:mt-8"
            initial={isMobile ? "hidden" : "hiddenLeft"}
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={isMobile ? mobileFadeUp : desktopVariants}
          >
            <div className="hidden md:block border-t-2 border-[#3c405b] relative">
              <div className="absolute left-0 -top-[9px] w-0 h-0 border-r-8 border-y-8 border-y-transparent border-r-[#3c405b]"></div>
            </div>
            <div className="p-5 md:p-6 mt-3 md:mr-5 bg-white rounded-lg shadow-sm md:shadow-none">
              <h3 className="text-lg md:text-xl font-semibold mb-2">SEO Services</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We optimize your online presence to boost search rankings, attract traffic,
                and convert visibility into business growth.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission Box */}
        <motion.div
          className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8 text-center shadow-sm "
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: false, amount: 0.3 }}
          variants={missionBoxVariants}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our mission is simple</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            To help brands of all sizes stand out and connect with their audience. <br />
            We craft purposeful and visually stunning designs that tell your unique story. <br />
            We’re your creative partners, dedicated to turning your vision into reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

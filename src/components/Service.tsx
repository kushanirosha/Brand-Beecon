import React from "react";
import { motion } from "framer-motion";
import logo from "../public/images/logo4.png";

const ServicesSection: React.FC = () => {
  const timelineItemVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const missionBoxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-transparent">
      <div className="text-[#3c405b] py-16 max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Brand Beecon Logo" className="mx-auto w-15 h-20" />
          <h2 className="text-2xl font-bold mt-2">BRAND BEECON</h2>
          <div className="w-96 h-[2px] bg-[#3c405b] mx-auto mt-5"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
            At Brand Beecon, we believe great design is the foundation for a thriving
            online presence. In a crowded digital world, we create scroll-stopping social
            media content that doesn’t just look good
            <br />
            <span className="font-semibold text-[#3c405b]">
              it drives engagement and builds communities.
            </span>
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-2 relative mt-10">
          <div className="absolute left-1/2 top-0 bottom-0 w-[5px] bg-[#3c405b] -translate-x-1/2"></div>

          {/* Timeline Items */}
          {/* Right Item */}
          <motion.div
            className="relative mt-10 col-start-2"
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={timelineItemVariants}
          >
            <div className="border-t-2 border-[#3c405b] relative">
              <div className="absolute right-0 -top-[5px] w-0 h-0 border-l-8 border-y-8 border-y-transparent border-l-[#3c405b]"></div>
            </div>
            <div className="p-6 relative z-10 mt-3 ml-5">
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                We are Brand Beecon, your all-in-one digital partner, blending creative
                design with smart marketing to make your brand shine.
              </p>
            </div>
          </motion.div>

          {/* Left Item */}
          <motion.div
            className="relative col-start-1 text-right"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={timelineItemVariants}
          >
            <div className="border-t-2 border-[#3c405b] relative">
              <div className="absolute left-0 -top-[5px] w-0 h-0 border-r-8 border-y-8 border-y-transparent border-r-[#3c405b]"></div>
            </div>
            <div className="p-6 relative z-10 mt-3 mr-5">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">
                We build custom websites blending stunning design with strategic functionality
                to turn visitors into loyal customers.
              </p>
            </div>
          </motion.div>

          {/* Right Item */}
          <motion.div
            className="relative mt-10 col-start-2"
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={timelineItemVariants}
          >
            <div className="border-t-2 border-[#3c405b] relative">
              <div className="absolute right-0 -top-[5px] w-0 h-0 border-l-8 border-y-8 border-y-transparent border-l-[#3c405b]"></div>
            </div>
            <div className="p-6 relative z-10 mt-3 ml-5">
              <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
              <p className="text-gray-600">
                Scroll-stopping designs capturing attention and driving engagement.
              </p>
            </div>
          </motion.div>

          {/* Left Item */}
          <motion.div
            className="relative col-start-1 text-right mb-32"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={timelineItemVariants}
          >
            <div className="border-t-2 border-[#3c405b] relative">
              <div className="absolute left-0 -top-[5px] w-0 h-0 border-r-8 border-y-8 border-y-transparent border-r-[#3c405b]"></div>
            </div>
            <div className="p-6 relative z-10 mt-3 mr-5">
              <h3 className="text-xl font-semibold mb-2">SEO Services</h3>
              <p className="text-gray-600">
                We optimize your online presence to boost search rankings, attract traffic,
                and convert visibility into business growth.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission Box */}
        <motion.div
          className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-8 text-center shadow-sm"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: false, amount: 0.3 }}
          variants={missionBoxVariants}
        >
          <h3 className="text-3xl font-bold mb-4">Our mission is simple</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
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

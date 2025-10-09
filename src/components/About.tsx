import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Portfolio from "../components/Portfolio";
import Ps from "../public/images/about/ps.png";
import Ai from "../public/images/about/ai.png";
import Ae from "../public/images/about/Ae.png";
import Id from "../public/images/about/Id.png";
import Pr from "../public/images/about/Pr.png";
import Lr from "../public/images/about/Lr.png";
import An from "../public/images/about/an.png";

const AboutSection: React.FC = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Trigger counters when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Framer Motion controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Animation variants
  const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
  const fadeLeft = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeRight = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  const skillIcons = [Ps, Ai, Ae, Id, Pr, Lr, An];

  return (
    <div ref={sectionRef} className="bg-gray-100 overflow-hidden lg:py-12 pt-24">
      <div
        ref={ref}
        className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-6 lg:px-12"
      >
        {/* Left - Portfolio Image */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0"
          variants={fadeLeft}
          initial="hidden"
          animate={controls}
        >
          <Portfolio />
        </motion.div>

        {/* Right - Text and Stats */}
        <motion.div
          className="w-full md:w-1/2 md:pl-12 text-center md:text-right"
          variants={fadeRight}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3c405b] mb-4" variants={fadeUp}>
            Professional Graphic Designer
          </motion.h2>

          <motion.p className="text-gray-600 mb-8 max-w-lg mx-auto md:ml-auto md:mr-0" variants={fadeUp}>
            With 5+ years of experience, freelancing since 2019. We create impactful designs for diverse clients, from startups
            to high-end companies, while adhering to brand guidelines.
          </motion.p>

          {/* Stats Card */}
          <motion.div
            className="bg-gradient-to-r from-gray-200 via-white to-gray-200 p-6 rounded-xl shadow-sm w-full max-w-lg mx-auto md:ml-auto text-center md:text-left"
            variants={fadeUp}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b-2 border-white">
              <div className="sm:border-r-2 sm:border-white">
                <p className="text-3xl font-bold text-[#3c405b]">{startCount ? <CountUp end={6} duration={2} /> : "0"} Years</p>
                <p className="text-sm text-gray-600 mt-1">Experience</p>
              </div>
              <div className="sm:border-r-2 sm:border-white">
                <p className="text-3xl font-bold text-[#3c405b]">{startCount ? <CountUp end={600} duration={3} /> : "0"}+</p>
                <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#3c405b]">{startCount ? <CountUp end={88} duration={2.5} /> : "0"}%</p>
                <p className="text-sm text-gray-600 mt-1 mb-3">Approval on First Presentation</p>
              </div>
            </div>

            {/* Skills */}
            <motion.div className="mt-6 text-center md:text-left" variants={fadeUp}>
              <p className="text-gray-700 font-semibold mb-3">Technical Skills</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {skillIcons.map((icon, i) => (
                  <motion.img
                    key={i}
                    src={icon}
                    alt="Skill"
                    className="w-10 h-10 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;

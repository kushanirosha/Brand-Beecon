import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import SubscribeSection from "../components/subscribe";
import Profile from "../public/images/profileAbout.jpg";
import SkillsSection from "../components/SkillsSection";
import HeroSection from "../components/Hero";
import CV from "../public/PubuduWijerathne.pdf";

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fade-up-left animation (for all other sections)
  const fadeUpLeft = {
    hidden: { opacity: 0, x: -60, y: 40 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gray-100 rounded-b-[50px]">
      {/* Hero section */}
      <HeroSection />

      {/* About Section */}
      <motion.section
        className="bg-gray-100 pb-16 pt-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUpLeft}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <img
                src={Profile}
                alt="Profile"
                className="w-full max-w-sm h-[500px] object-cover rounded-2xl shadow-xl border-4 border-gray-100"
              />
            </div>

            {/* Right Side - Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold text-[#3c405b] mb-6">About Me</h1>
              <h2 className="text-2xl font-semibold text-gray-800">Pubudu Wijerathne</h2>
              <p className="text-gray-600 mb-4 font-medium">Senior Graphic Designer</p>

              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Hello! I'm a passionate Senior Graphic Designer with a deep love for solving
                design challenges. For the past six years, I've had the pleasure of helping
                companies build their brand and connect with customers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                My experience includes six years in the design field, with two of those years
                spent as part of the creative team at Falcon Media. I am committed to delivering
                high-quality, thoughtful design solutions that are not only aesthetically pleasing
                but also effective in achieving business objectives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm excited to hear about your project and discuss how we can bring your ideas to life.
              </p>

              {/* Download CV Button */}
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#3c405b] text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section - per-card flip-up handled inside component */}
      <SkillsSection />

      {/* Values */}
      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUpLeft}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3c405b] mb-4">My Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide my work and client relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Quality First",
                text: "I never compromise on quality. Every line of code is written with precision and every design element is carefully crafted.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                text: "I believe the best results come from working closely with clients, understanding their needs and involving them in the process.",
              },
              {
                icon: "🚀",
                title: "Innovation",
                text: "I stay current with the latest technologies and trends to deliver cutting-edge solutions that give you a competitive edge.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#3c405b]"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <Contact />

      {/* Subscribe Section */}
      <SubscribeSection />
    </div>
  );
};

export default AboutPage;

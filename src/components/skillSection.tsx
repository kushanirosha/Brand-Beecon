import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Adobe Photoshop", level: "Expert" },
  { name: "Adobe Illustrator", level: "Expert" },
  { name: "Adobe InDesign", level: "Advanced" },
  { name: "Adobe After Effects", level: "Advanced" },
  { name: "Adobe Premiere Pro", level: "Advanced" },
  { name: "Adobe Lightroom", level: "Advanced" },
];

const cardVariants = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
  }),
};

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3c405b] mb-4">My Skills</h2>
          <p className="text-lg text-gray-600">
            The tools and platforms I use every day to bring ideas to life
          </p>
        </div>

        {/* Skill Cards with flip-up animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#3c405b]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

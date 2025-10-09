import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogCards from "./BlogCards";
import CommentModal from "./CommentModal";

const Blog: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fade-up-left animation variants
  const fadeUpLeft = {
    hidden: { opacity: 0, x: -50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative z-10 py-16 px-6 text-center bg-gray-100 rounded-b-[50px]">
      {/* Wrap entire inner content in motion.div */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUpLeft}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3c405b]">
          Beyond the Brief
        </h2>
        <p className="text-lg md:text-base text-gray-500 mt-2">
          How to Find Your Creative Spark When You're Stuck
        </p>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogCards />
        </div>

        {/* Question */}
        <div className="mt-16 text-[#3c405b]">
          <p className="text-lg font-medium">
            What Are Your Biggest Design Questions?
          </p>
          <p className="text-md text-gray-500">— Ask Us Below! —</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 inline-block px-6 py-3 bg-[#3c405b] text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Comment Here
          </button>
        </div>
      </motion.div>

      {/* Comment Modal */}
      <CommentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Blog;

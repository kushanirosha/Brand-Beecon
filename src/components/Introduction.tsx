import React from "react";
import { motion } from "framer-motion";
import Bgvideo from "../public/4.mp4";
import logo from "../public/images/logo4.png";

const rows = 4;
const cols = 4;

const IntroductionSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={Bgvideo} type="video/mp4" />
      </video>

      {/* LEFT FENCE */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 grid grid-cols-1 gap-4">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="relative w-32 h-1 bg-white/30 overflow-hidden"
          >
            {/* Ball moves left → right */}
            <motion.div
              className="absolute top-0 left-0 w-3 h-3 bg-white rounded-full shadow-lg"
              animate={{ x: ["0%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: rowIndex * 0.3,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}
      </div>

      {/* RIGHT FENCE */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 grid grid-cols-1 gap-4">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="relative w-32 h-1 bg-white/30 overflow-hidden"
          >
            {/* Ball moves right → left */}
            <motion.div
              className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full shadow-lg"
              animate={{ x: ["100%", "0%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: rowIndex * 0.3,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}
      </div>

      {/* VERTICAL LINES for fence effect */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-40 flex gap-8">
        {Array.from({ length: cols }).map((_, colIndex) => (
          <div
            key={colIndex}
            className="relative w-1 h-40 bg-white/30 overflow-hidden"
          >
            {/* Ball moves top → bottom */}
            <motion.div
              className="absolute left-0 top-0 w-3 h-3 bg-white rounded-full shadow-lg"
              animate={{ y: ["0%", "100%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: colIndex * 0.4,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 h-40 flex gap-8">
        {Array.from({ length: cols }).map((_, colIndex) => (
          <div
            key={colIndex}
            className="relative w-1 h-40 bg-white/30 overflow-hidden"
          >
            {/* Ball moves bottom → top */}
            <motion.div
              className="absolute left-0 bottom-0 w-3 h-3 bg-white rounded-full shadow-lg"
              animate={{ y: ["100%", "0%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: colIndex * 0.4,
                ease: "easeInOut",
              }}
            />
          </div>
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.img
          src={logo}
          alt="Logo"
          className="mx-auto mb-6 w-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Design with purpose, <br /> not just pixels.
        </motion.h1>
        <motion.button
          className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Let’s dive into creativity
        </motion.button>
      </div>
    </section>
  );
};

export default IntroductionSection;

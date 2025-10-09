import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../public/images/bg-wave.jpg";
import TE1 from "../public/images/Testimonials/Te1.jpeg";
import TE2 from "../public/images/Testimonials/Te2.jpeg";
import TE3 from "../public/images/Testimonials/Te3.jpg";
import TE4 from "../public/images/Testimonials/Te4.jpg";

const feedbacks = [
  { 
    id: 1, 
    name: "Dr. Saundarya Yogeshwaran", 
    designation: "Director & CEO, International Talent Association", 
    company: "Tech Corp", 
    feedback: "Pubudu is an exceptional Graphic Designer! He creates something unique, epic and inspiring content through his work. I love being use his creativity in my business ! Thank you so much Pubudu ! Amazing knoll, customer service and PR.", 
    initial: "S",
    image: TE1
  },
  { 
    id: 2, 
    name: "Mr. Ranga Ranasinghage", 
    designation: "CEO & Founder", 
    company: "Route One Group Companies", 
    feedback: "I am pleased to recommend Mr. Pubudu as a creative and reliable artwork supplier. His designs for Route One Group Companies have always been professional, innovative, and delivered on time. I have full confidence in his skills and dedication, and I believe he will add great value to any project.", 
    initial: "R",
    image: TE4
  },
  { 
    id: 3, 
    name: "Mr. Ashen Amukotuwa", 
    designation: "Association Manager", 
    company: "Creative Studio", 
    feedback: "Mr. Pubudu has an exceptional ability to translate complex ideas into clear, visually engaging designs that not only capture attention but also deliver results. He has proven to be highly responsive to deadlines, adaptable to evolving project needs, and committed to excellence in every task undertaken.", 
    initial: "A",
    image: TE2
  },
  { 
    id: 4, 
    name: "Mr. Shahan Wijesingha", 
    designation: "CEO & Founder", 
    company: "Ceylone Creative (Pvt) Ltd", 
    feedback: "I have had the opportunity to work closely with Mr. Pubudu on a variety of design and creative projects for Ceylone Creative. His work consistently demonstrates professionalism, creativity, and an eye for detail that aligns perfectly with our brand identity and high standards.", 
    initial: "S",
    image: TE3
  },
];

export default function FeedbackSection() {
  const [cards, setCards] = useState(feedbacks);
  const [activeCard, setActiveCard] = useState(feedbacks[feedbacks.length - 1]);

  const handleCardClick = (index) => {
    const newOrder = [...cards];
    const [clicked] = newOrder.splice(index, 1);
    newOrder.push(clicked);
    setCards(newOrder);
    setActiveCard(clicked);
  };

  const handleNext = () => {
    const newOrder = [...cards];
    const first = newOrder.shift();
    if (first) newOrder.push(first);
    setCards(newOrder);
    setActiveCard(newOrder[newOrder.length - 1]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [cards]);

  const fadeUpRight = {
    hidden: { opacity: 0, x: -100, y: 50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-16 bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <motion.div
        className="w-full max-w-7xl flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUpRight}
      >
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3c405b] mb-2">
            Hear From Our Clients
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Trusted worldwide — hear what our clients say
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 z-10 pt-6 md:pt-9">
          {/* Carousel */}
          <div className="flex gap-2 sm:gap-4 items-center justify-center flex-wrap md:flex-nowrap">
            <AnimatePresence>
              {cards.map((person, index) => {
                const isActive = person.id === activeCard.id;
                return (
                  <motion.div
                    key={person.id}
                    layout
                    onClick={() => handleCardClick(index)}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{
                      opacity: 1,
                      scale: isActive ? 1.15 : 0.9,
                      rotate: isActive ? 0 : 0,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className={`flex flex-col items-center justify-center rounded-lg cursor-pointer shadow-xl overflow-hidden ${
                      isActive
                        ? "h-64 sm:h-80 md:h-96 w-32 sm:w-36 md:w-40 bg-[#2E3453]"
                        : "h-40 sm:h-44 md:h-48 w-20 sm:w-24 md:w-28 bg-gray-400"
                    }`}
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className={`rounded-full object-cover border-2 border-white ${
                        isActive
                          ? "w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 mt-4 sm:mt-6"
                          : "w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 mt-3 sm:mt-4"
                      }`}
                    />
                    <div className="mt-3 sm:mt-4 flex flex-col items-center text-center text-white">
                      <p className="text-xs sm:text-sm font-semibold">{person.name}</p>
                      <p className="text-xs opacity-80 hidden sm:block">{person.designation}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Feedback */}
          <div className="mt-6 md:mt-0 md:ml-10 max-w-lg w-full">
            <div className="flex items-center gap-4 mb-3">
              <img
                src={activeCard.image}
                alt={activeCard.name}
                className="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover border-2 border-[#2E3453]"
              />
              <div>
                <p className="font-bold text-base sm:text-lg text-[#3c405b]">{activeCard.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {activeCard.designation} / {activeCard.company}
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 italic">“{activeCard.feedback}”</p>
            <button
              onClick={handleNext}
              className="mt-6 sm:mt-10 md:mt-20 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center bg-[#2E3453] rounded-full text-white text-xl sm:text-3xl animate-bounce"
            >
              →
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
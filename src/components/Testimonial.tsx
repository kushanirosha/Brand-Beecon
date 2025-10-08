import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../public/images/bg-wave.jpg";
import TE1 from "../public/images/Testimonials/Te1.jpeg";
import TE2 from "../public/images/Testimonials/Te2.jpeg";
import TE3 from "../public/images/Testimonials/Te3.jpeg";
import TE4 from "../public/images/Testimonials/Te4.jpeg";

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
    image: ""
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

  // Click handler → smoothly move card into active spot
  const handleCardClick = (index: number) => {
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

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-16 bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-[#3c405b] mb-2">
          Hear From Our Clients
        </h2>
        <p className="text-lg text-gray-600">
          Trusted worldwide — hear what our clients say
        </p>
      </div>

      <div className="relative flex items-center justify-center gap-12 z-10 pt-9">
        {/* Left side carousel */}
        <div className="flex gap-4 items-center">
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
                      ? "h-96 w-40 bg-[#2E3453]"
                      : "h-48 w-28 bg-gray-400"
                  }`}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className={`rounded-full object-cover border-2 border-white ${
                      isActive ? "w-24 h-24 mt-6" : "w-16 h-16 mt-4"
                    }`}
                  />
                  <div className="mt-4 flex flex-col items-center text-center text-white">
                    <p className="text-sm font-semibold">{person.name}</p>
                    <p className="text-xs opacity-80">{person.designation}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right side feedback */}
        <div className="ml-10 max-w-lg">
          <div className="flex items-center gap-4 mb-3">
            <img
              src={activeCard.image}
              alt={activeCard.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#2E3453]"
            />
            <div>
              <p className="font-bold text-lg text-[#2E3453]">{activeCard.name}</p>
              <p className="text-sm text-gray-500">
                {activeCard.designation} / {activeCard.company}
              </p>
            </div>
          </div>
          <p className="text-gray-600 italic">“{activeCard.feedback}”</p>
          <button
            onClick={handleNext}
            className="mt-20 w-10 h-10 flex items-center justify-center bg-[#2E3453] rounded-full text-white text-3xl animate-bounce"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

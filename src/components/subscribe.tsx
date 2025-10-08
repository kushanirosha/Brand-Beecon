import React, { useState } from "react";
import { motion } from "framer-motion";

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b9bf4eb1-37a2-458f-81bf-11255f5b2da6",
          subject: "New Newsletter Subscription",
          email: email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("🎉 Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("❌ Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section
      className="w-full py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-[#2E3453]"
          variants={containerVariants}
        >
          Subscribe to My Newsletter
        </motion.h2>
        <motion.p
          className="mt-3 text-[#3c405b]"
          variants={containerVariants}
        >
          Get the latest updates, projects, and design insights delivered to your inbox.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={containerVariants}
        >
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-[#2E3453]"
            required
            variants={containerVariants}
          />
          <motion.button
            type="submit"
            disabled={loading}
            className="bg-[#2E3453] text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </motion.form>

        {message && (
          <motion.p
            className="mt-4 text-lg font-medium text-green-600"
            variants={containerVariants}
          >
            {message}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
};

export default SubscribeSection;

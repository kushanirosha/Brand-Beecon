import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaBehance, FaPinterest } from "react-icons/fa";
import ContactForm from './conatctform';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'info@brandbeecon.com', href: 'mailto:info@brandbeecon.com' },
    { icon: Phone, title: 'Phone', value: '+94 75 992 9718', href: 'tel:+94759929718' },
    { icon: MapPin, title: 'Location', value: 'Kandy, Sri Lanka', href: '#' }
  ];

  const socialLinks = [
    { icon: FaBehance, href: "#", label: "Behance" },
    { icon: FaPinterest, href: "#", label: "Pinterest" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3c405b] dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h3 className="text-3xl font-bold text-[#3c405b] dark:text-white mb-8" variants={itemVariants}>
              Get In Touch
            </motion.h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  className="group flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-[#56575f] to-[#3c405b] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#3c405b] dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div className="border-t-2 border-gray-200 dark:border-gray-700 pt-8" variants={itemVariants}>
              <h4 className="text-xl font-semibold text-[#3c405b] dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="group p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                    variants={itemVariants}
                  >
                    <social.icon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Call-to-Action */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl"
              variants={itemVariants}
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Ready to Start Your Project?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Let's schedule a call to discuss your requirements and how I can help bring your vision to life.
              </p>
              <button
                onClick={() => window.location.href = "tel:+94759929718"}
                className="bg-[#2E3453] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule a Call
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form with Fade-Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={formVariants}
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

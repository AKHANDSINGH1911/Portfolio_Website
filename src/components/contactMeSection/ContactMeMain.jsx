import { motion } from "framer-motion";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <motion.section
      id="contact"
      className="max-w-[1200px] mx-auto mt-[100px] px-4 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Animated header with gradient text */}
      <motion.div 
        className="text-center mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
      </motion.div>

      {/* Contact container with glass morphism effect */}
      <motion.div
        className="flex flex-col lg:flex-row gap-8 bg-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700 shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />

        {/* Left section - Contact info */}
        <motion.div 
          className="flex-1 p-8 md:p-12"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactMeLeft />
        </motion.div>

        {/* Right section - Contact form */}
        <motion.div 
          className="flex-1 p-8 md:p-12 bg-gray-800/30"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactMeRight />
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
    </motion.section>
  );
};

export default ContactMeMain;
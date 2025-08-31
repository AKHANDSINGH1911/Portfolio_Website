import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "./useFollowPointer"; // Custom hook for 3D tilt

const ContactSocial = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref); // For 3D parallax effect

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      }
    }
  };

  const item = {
    hidden: { 
      y: 40,
      opacity: 0,
      rotate: 5 
    },
    show: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.5
      }
    },
    hover: {
      y: -8,
      scale: 1.1,
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex gap-8 md:gap-10 justify-center"
    >
      {/* Animated background particles */}
      <motion.div 
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          x: x / 10,
          y: y / 10,
        }}
      >
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl" />
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl" />
      </motion.div>

      {/* LinkedIn */}
      <motion.div 
        variants={item}
        whileHover="hover"
        className="relative z-10"
      >
        <SingleContactSocial 
          link="https://www.linkedin.com/in/akhand-singh-a81a86259/" 
          Icon={FaLinkedinIn} 
          className="
            bg-gradient-to-br from-blue-600/20 to-blue-800/30 
            border border-blue-500/30 
            hover:bg-blue-600 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)]
            hover:border-blue-400
            backdrop-blur-sm
          "
          iconClass="text-blue-400 group-hover:text-white"
        />
      </motion.div>
      
      {/* GitHub */}
      <motion.div 
        variants={item}
        whileHover="hover"
        className="relative z-10"
      >
        <SingleContactSocial 
          link="https://github.com/AKHANDSINGH1911" 
          Icon={FiGithub} 
          className="
            bg-gradient-to-br from-gray-800/20 to-gray-900/30
            border border-gray-700/50
            hover:bg-gray-900 hover:shadow-[0_0_30px_-5px_rgba(17,24,39,0.7)]
            hover:border-gray-600
            backdrop-blur-sm
          "
          iconClass="text-gray-300 group-hover:text-white"
        />
      </motion.div>
      
      {/* Instagram */}
      <motion.div 
        variants={item}
        whileHover="hover"
        className="relative z-10"
      >
        <SingleContactSocial 
          link="https://www.instagram.com/_akhand_singh_706/" 
          Icon={FaInstagram} 
          className="
            bg-gradient-to-br from-purple-600/20 to-pink-600/30
            border border-purple-500/30
            hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-yellow-500
            hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.5)]
            hover:border-pink-400/50
            backdrop-blur-sm
          "
          iconClass="text-pink-400 group-hover:text-white"
        />
      </motion.div>
    </motion.div>
  );
};

export default ContactSocial;
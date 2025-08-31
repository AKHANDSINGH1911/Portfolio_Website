import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div 
      className="flex flex-col gap-8 h-full justify-center px-4 md:px-0"
      role="banner"
    >
      {/* Professional Title with Glow Effect */}
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        <h2 className="text-lg sm:text-xl lg:text-2xl font-medium uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 dark:from-cyan-300 dark:to-teal-400">
          Full‑Stack Web Developer
        </h2>
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Animated Name with 3D Effect */}
      <div className="overflow-hidden">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.85] tracking-tighter"
        >
          {/* First Name */}
          <div className="flex">
            {"Akhand".split("").map((char, index) => (
              <motion.div
                key={`first-${index}`}
                className="relative group"
                initial={{ opacity: 0, y: 40, rotateX: 90 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  delay: 0.5 + index * 0.07,
                  type: "spring",
                  stiffness: 260,
                  damping: 15,
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="text-white dark:text-gray-100 relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                  {char}
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-md"
                  initial={{ scaleX: 0, scaleY: 0.5 }}
                  animate={{ scaleX: 1, scaleY: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.07 + 0.15,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{
                    originX: 0,
                    originY: "center",
                    zIndex: 0,
                  }}
                />
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.5 + index * 0.07 + 0.3,
                    duration: 0.6
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Last Name */}
          <div className="flex mt-2 md:mt-3">
            {"Singh".split("").map((char, index) => (
              <motion.div
                key={`last-${index}`}
                className="relative group"
                initial={{ opacity: 0, y: 40, rotateX: 90 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                transition={{
                  delay: 0.8 + index * 0.07,
                  type: "spring",
                  stiffness: 260,
                  damping: 15,
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="text-white dark:text-gray-100 relative z-10 group-hover:text-teal-300 transition-colors duration-300">
                  {char}
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-md"
                  initial={{ scaleX: 0, scaleY: 0.5 }}
                  animate={{ scaleX: 1, scaleY: 1 }}
                  transition={{
                    delay: 0.8 + index * 0.07 + 0.15,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{
                    originX: 0,
                    originY: "center",
                    zIndex: 0,
                  }}
                />
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 0.8 + index * 0.07 + 0.3,
                    duration: 0.6
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tagline with Floating Particles */}
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mt-8 max-w-2xl"
      >
        <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-400 dark:to-gray-500">
          Building <span className="font-medium">user-friendly web apps</span> that blend{" "}
          <span className="font-medium">creativity with performance.</span>.
        </p>
        <motion.div 
          className="absolute -bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full shadow-lg shadow-cyan-400/30"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "8rem", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        />
        
        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/80 dark:bg-cyan-300/80"
            initial={{ 
              opacity: 0,
              y: 20,
              x: Math.random() * 100 - 50
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: [-10, -30],
              x: [0, Math.random() * 40 - 20]
            }}
            transition={{
              delay: 1 + i * 0.3,
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: "100%",
              left: `${10 + i * 25}%`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroText;
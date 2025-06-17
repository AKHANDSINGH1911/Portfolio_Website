import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsText = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center mt-[100px] px-6 md:px-0"
      id="skills"
    >
      {/* Animated Gradient Heading */}
      <motion.h2
        variants={fadeIn("down", 0.4)}
        className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 mb-4"
      >
        My Skills
        {/* Underline Draw */}
        <motion.span
          className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
          initial={{ width: 0, x: "-50%" }}
          whileInView={{ width: "50%", x: "-50%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.h2>

      {/* Descriptive Subtext */}
     <motion.p
  variants={fadeIn("up", 0.6)}
  className="max-w-3xl text-center text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
>
  I have strong experience working with these technologies in real projects.  
  I focus on writing clean, efficient code and following best practices to build reliable and easy-to-maintain applications.  
  These skills have helped me create projects that work well, look good, and solve real problems.
</motion.p>

    </motion.div>
  );
};

export default SkillsText;

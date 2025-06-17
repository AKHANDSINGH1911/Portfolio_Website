import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <section 
      id="skills"
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900/20"
    >
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Skills Text Section */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="text-center mb-16"
        >
          <SkillsText />
        </motion.div>

        {/* Skills Visualization - Desktop */}
        <motion.div 
          variants={fadeIn("up", 0.4)}
          className="hidden lg:block relative"
        >
          <div className="relative z-10">
            <AllSkills />
          </div>
          {/* Decorative floating elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-cyan-400/20 blur-sm"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-12 h-12 rounded-full bg-teal-400/30 blur-sm"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>

        {/* Skills Visualization - Mobile */}
        <motion.div 
          variants={fadeIn("up", 0.4)}
          className="lg:hidden mt-12 relative"
        >
          <div className="relative z-10">
            <AllSkillsSM />
          </div>
          {/* Mobile decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cyan-400/20 blur-sm"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsMain;
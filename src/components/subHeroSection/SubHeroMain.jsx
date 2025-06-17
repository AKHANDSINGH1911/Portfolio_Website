import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SubHeroMain = () => {
  return (
    <div
      className="w-full border-y border-lightGrey bg-gradient-to-r from-darkBrown via-brown to-darkBrown text-lightCyan flex justify-center uppercase xl:text-3xl md:text-3xl sm:text-2xl py-8 px-4 overflow-hidden"
    >
      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="font-heading tracking-wide hover:text-orange transition-colors duration-300 whitespace-nowrap"
      >
        Hands-on experience building scalable web applications from the ground up
      </motion.p>
    </div>
  );
};

export default SubHeroMain;

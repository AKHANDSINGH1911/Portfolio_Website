import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full items-center gap-8 sm:flex-col-reverse ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-between`}
    >
      {/* Content Section */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="flex-1 flex flex-col gap-4 sm:items-center md:items-start"
      >
        <div>
          <h2 className="md:text-3xl sm:text-2xl text-orange font-bold">{name}</h2>
          <h2 className={`text-xl font-thin text-white/80 font-special ${
            align === "left" ? "md:text-right" : "md:text-left"
          } sm:text-center`}>
            {year}
          </h2>
        </div>
        
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-300 ${
            align === "left" ? "md:ml-auto" : "md:mr-auto"
          } sm:mx-auto`}
        >
          View Project
          <BsFillArrowUpRightCircleFill className="text-xl" />
        </motion.a>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="relative flex-1 max-h-[250px] max-w-[500px] rounded-xl overflow-hidden border-2 border-white/20 hover:border-orange/50 transition-all duration-500"
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/30 to-orange/30 opacity-0 hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="absolute inset-0 bg-cyan/10 hover:bg-transparent transition-all duration-500" />
        
        <img 
          src={image} 
          alt={`${name} project screenshot`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
          <div className="p-2 bg-black/70 rounded-full">
            <BsFillArrowUpRightCircleFill className="text-3xl text-orange" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
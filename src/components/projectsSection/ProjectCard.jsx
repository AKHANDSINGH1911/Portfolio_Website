import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative rounded-3xl overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-80"
        animate={{
          background: [
            `linear-gradient(135deg, ${project.gradientColors[0]}, ${project.gradientColors[1]})`,
            `linear-gradient(135deg, ${project.gradientColors[1]}, ${project.gradientColors[2]})`,
            `linear-gradient(135deg, ${project.gradientColors[2]}, ${project.gradientColors[0]})`,
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          initial={{ 
            scale: 0,
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{ 
            scale: [0, Math.random() * 0.5 + 0.5, 0],
            opacity: [0, Math.random() * 0.3 + 0.1, 0],
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
          style={{
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
          }}
        />
      ))}
      
      {/* Glowing border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
      
      {/* Card content */}
      <motion.div
        className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-black/70 to-black/90 backdrop-blur-2xl shadow-2xl"
        whileHover={{ 
          boxShadow: `0 0 40px ${project.gradientColors[0]}80, 0 0 80px ${project.gradientColors[1]}40`
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated header */}
        <div className="relative h-40 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          
          <motion.div
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center shadow-lg"
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <span className="text-black font-bold text-sm">{project.id}</span>
          </motion.div>
          
          <motion.h3
            className="absolute bottom-4 left-4 text-2xl md:text-3xl font-bold text-white z-10"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {project.name}
          </motion.h3>
          
          <motion.span
            className="absolute bottom-4 right-4 text-sm text-white/80 z-10"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {project.year}
          </motion.span>
        </div>
        
        <div className="p-6">
          {/* Description */}
          <motion.p
            className="text-gray-300 mb-6 min-h-[60px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <motion.span 
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + idx * 0.05, type: "spring" }}
                className="px-3 py-1.5 text-xs font-medium bg-black/40 backdrop-blur-sm text-white rounded-full border border-white/10"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Achievements */}
          <ul className="space-y-3 mb-8">
            {project.achievements.map((achievement, idx) => (
              <motion.li 
                key={idx}
                className="flex items-start"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
              >
                <div className="w-2 h-2 rounded-full mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-300">{achievement}</span>
              </motion.li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-white/10">
            <motion.a 
              href={`https://${project.links.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 text-center font-medium rounded-xl backdrop-blur-md bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-all group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ 
                boxShadow: `0 0 15px ${project.gradientColors[0]}`
              }}
            >
              <span className="relative">
                GitHub
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                />
              </span>
            </motion.a>
            
            <motion.a 
              href={`https://${project.links.demo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 text-center font-medium rounded-xl text-white transition-all overflow-hidden relative group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="relative z-10">Live Demo</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 z-0"
                animate={{
                  background: [
                    `linear-gradient(45deg, ${project.gradientColors[0]}, ${project.gradientColors[1]})`,
                    `linear-gradient(45deg, ${project.gradientColors[1]}, ${project.gradientColors[2]})`,
                    `linear-gradient(45deg, ${project.gradientColors[2]}, ${project.gradientColors[0]})`,
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
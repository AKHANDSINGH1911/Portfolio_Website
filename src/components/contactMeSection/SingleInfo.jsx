import { motion } from "framer-motion";

const SingleInfo = ({ 
  text, 
  Icon, 
  color = "text-cyan-400", 
  hoverColor = "hover:text-cyan-200", 
  link, 
  gradient = "from-cyan-500 to-blue-600",
  size = "lg" // Added size prop for customization
}) => {
  // Safely extract color name (fallback to 'cyan' if invalid)
  const colorName = color?.split('-')[1] || 'cyan';
  const gradientClass = gradient ? `bg-gradient-to-r ${gradient}` : `bg-${colorName}-500/10`;

  // Size variants
  const sizeClasses = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-6 text-lg',
    xl: 'p-8 text-xl'
  };

  const iconSizeClasses = {
    sm: 'text-xl p-2',
    md: 'text-2xl p-3',
    lg: 'text-3xl p-4',
    xl: 'text-4xl p-5'
  };

  const content = (
    <motion.div
      className={`
        flex items-center gap-6 
        ${sizeClasses[size]} 
        rounded-2xl 
        bg-gray-800/70 
        backdrop-blur-md 
        border-2 border-gray-700 
        hover:border-${colorName}-400/50 
        transition-all duration-500 
        ${hoverColor}
        relative overflow-hidden
      `}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        scale: 1.05,
        boxShadow: `0 20px 40px -10px rgba(var(--color-${colorName}-500), 0.4)`,
        backgroundColor: 'rgba(15, 23, 42, 0.8)'
      }}
    >
      {/* Animated background highlight */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-0"
        whileHover={{
          opacity: 0.1,
          background: `radial-gradient(circle at center, var(--${colorName}-500), transparent 70%)`
        }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Glow effect */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div 
          className="absolute -inset-10 blur-xl opacity-0 bg-gradient-to-r from-cyan-500/30 to-blue-600/30"
          whileHover={{
            opacity: 0.3,
            rotate: 10,
            scale: 1.2
          }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div 
        className={`
          ${iconSizeClasses[size]} 
          rounded-xl 
          ${color} 
          ${gradientClass} 
          flex items-center justify-center
          border border-${colorName}-500/30
          shadow-lg
        `}
        initial={{ rotate: -5, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        whileHover={{ 
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1.1, 1],
          boxShadow: `0 0 20px 5px rgba(var(--color-${colorName}-500), 0.3)`
        }}
        transition={{ 
          duration: 0.6,
          hover: { type: "spring", stiffness: 300 }
        }}
      >
        <Icon />
      </motion.div>
      
      <motion.span 
        className="text-gray-100 font-semibold"
        whileHover={{ x: 5 }}
      >
        {text}
      </motion.span>
      
      {/* Optional arrow for links */}
      {link && (
        <motion.div 
          className="ml-auto text-gray-400"
          whileHover={{ x: 3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:no-underline">
      {content}
    </a>
  ) : (
    <motion.div whileTap={{ scale: 0.98 }}>
      {content}
    </motion.div>
  );
};

export default SingleInfo;
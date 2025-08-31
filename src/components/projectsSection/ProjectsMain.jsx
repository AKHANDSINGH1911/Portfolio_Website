import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectCard from "./ProjectCard";

const ProjectsMain = () => {
  const projects = [

    
    {
  id: 1,
  name: "SmartSQL – Natural Language SQL Interface",
  year: "December, 2024",
  description: "Natural language interface for querying SQL databases without writing SQL",
  technologies: ["Python", "Streamlit", "PostgreSQL", "FastAPI", "Google Gemini API"],
  achievements: [
    "Enabled natural language to SQL conversion via Gemini API",
    "Built intuitive Streamlit interface for non-technical users",
    "Integrated FastAPI for secure query routing and visualization",
    "Delivered real-time, executable SQL query generation"
  ],
  links: {
    github: "https://github.com/AKHANDSINGH1911/Smart-Database-Access",
    demo: "#"
  },
  gradientColors: ["#f59e0b", "#f97316", "#ea580c"], // Amber to Orange to Red
  accentColor: "from-amber-500 to-orange-600"
},
{
  id: 2,
  name: "News Aggregator – Real-Time News Platform",
  year: "November, 2024",
  description: "Dynamic news aggregator fetching and categorizing articles from 10+ sources with real-time updates",
  technologies: ["React", "Node.js", "Express", "MongoDB", "News API"],
  achievements: [
    "Fetched, categorized, and displayed real-time news from 10+ sources",
    "Implemented filtering options for personalized news feeds",
    "Optimized backend with caching & database integration to reduce API call costs",
    "Planned upgrades: AI-driven summarization & voice-based accessibility"
  ],
  links: {
    github: "https://github.com/AKHANDSINGH1911/NEWSAPP",
    demo: "#"
  },
  gradientColors: ["#06b6d4", "#3b82f6", "#6366f1"], // Cyan to Blue to Indigo
  accentColor: "from-cyan-500 to-blue-600"
},

{
  id: 3,
  name: "Pipeline Sentinel – CI/CD Failure Analysis Platform",
  year: "February, 2025 - May, 2025",
  description: "AI-powered CI/CD failure analysis & prediction platform with distributed backend",
  technologies: ["Node.js", "Python", "Kafka", "Next.js", "TypeScript", "Docker", "PostgreSQL", "OpenAI API"],
  achievements: [
    "Architected distributed backend using Node.js, Python, Kafka & Docker",
    "Built AI-powered analysis engine using OpenAI/Gemini API for root-cause detection",
    "Developed predictive model with 75%+ precision for failure risk scoring",
    "Reduced manual debugging time by 90% with automated insights"
  ],
  links: {
    github: "https://github.com/AKHANDSINGH1911/Pipeline-Sentinel",
    demo: "#"
  },
  gradientColors: ["#f43f5e", "#ef4444", "#dc2626"], // Rose to Red to Crimson
  accentColor: "from-rose-500 to-red-600"
},
   
   
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
      {/* Floating particles background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm"
          initial={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: 0,
            opacity: 0
          }}
          animate={{ 
            x: Math.random() * 2000 - 1000,
            y: Math.random() * 2000 - 1000,
            scale: Math.random() * 0.5 + 0.5,
            opacity: [0, 0.1, 0]
          }}
          transition={{
            duration: Math.random() * 30 + 30,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
          }}
        />
      ))}

      {/* Gradient spotlight */}
      <div className="absolute top-0 left-1/2 w-full max-w-3xl h-96 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated header */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Production-grade applications built with cutting-edge technologies and innovative solutions
          </motion.p>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4 }}
          />
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div 
              className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsMain;
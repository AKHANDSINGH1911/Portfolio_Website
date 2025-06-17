import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ProjectCard from "./ProjectCard";

const ProjectsMain = () => {
  const projects = [

    {
      id: 1,
      name: "Shakti Shield – Safety Web App",
      year: "February, 2025 - May, 2025",
      description: "Emergency response system with real-time location tracking",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary", "Leaflet.js"],
      achievements: [
        "One-tap SMS notifications with live location",
        "Real-time map tracking with Leaflet.js",
        "JWT authentication with Google OAuth"
      ],
      links: {
        github: "github.com/ARYAN-095/Shakti-Shield",
        demo: "shakti-shield.vercel.app"
      },
      gradientColors: ["#f43f5e", "#ef4444", "#dc2626"], // Rose to Red to Crimson
      accentColor: "from-rose-500 to-red-600"
    },

    {
      id: 2,
      name: "DevMind – AI Developer Assistant",
      year: "June, 2024* ",
      description: "AI-powered platform for developer collaboration and code understanding",
      technologies: ["Next.js", "Shadcn UI", "Prisma", "PostgreSQL", "LangChain", "Firebase", "Stripe"],
      achievements: [
        "Built production-ready full-stack platform",
        "RAG system with 100% code-contextual accuracy",
        "Commit summarization pipeline with Google Gemini LLM"
      ],
      links: {
        github: "https://github.com/ARYAN-095/DevMind",
        demo: "Comming Soon"
      },
      gradientColors: ["#06b6d4", "#3b82f6", "#6366f1"], // Cyan to Blue to Indigo
      accentColor: "from-cyan-500 to-blue-600"
    },

     {
      id: 3,
      name: "FarmBridge – Marketplace Platform",
      year: "October,2024 - December,2024",
      description: "Direct farm-to-consumer e-commerce platform",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
      achievements: [
        "Hackathon winning solution",
        "Full-stack marketplace implementation",
        "Secure authentication with JWT"
      ],
      links: {
        github: "https://github.com/ARYAN-095/FarmBridge",
        demo: "#"
      },
      gradientColors: ["#f59e0b", "#f97316", "#ea580c"], // Amber to Orange to Red
      accentColor: "from-amber-500 to-orange-600"
    },

     {
      id: 4,
      name: "WildGuard AI – Anti-poaching System",
      year: "2023",
      description: "AI-powered audio detection system for wildlife protection",
      technologies: ["React", "Tailwind CSS", "PyTorch", "FastAPI", "FFmpeg", "Librosa"],
      achievements: [
        "90%+ train accuracy on 27 sound classes",
        "Audio classification pipeline with PyTorch",
        "React frontend with real-time detection"
      ],
      links: {
        github: "https://github.com/ARYAN-095/WildGuard-AI",
        demo: "#"
      },
      gradientColors: ["#10b981", "#059669", "#047857"], // Green to Emerald to Teal
      accentColor: "from-green-500 to-emerald-600"
    },

    {
      id: 5,
      name: "MindNexus – Productivity Suite",
      year: "2024",
      description: "All-in-one workspace with real-time collaboration features",
      technologies: ["Next.js", "React", "TanStack Query", "Zustand", "ReactFlow", "TypeScript", "Supabase"],
      achievements: [
        "Role-based access control system",
        "React Flow mind-maps & rich-text tasks",
        "<200 ms UI updates with TanStack Query"
      ],
      links: {
        github: "https://github.com/ARYAN-095/MindNexus",
        demo: "#"
      },
      gradientColors: ["#8b5cf6", "#d946ef", "#ec4899"], // Purple to Pink to Rose
      accentColor: "from-purple-500 to-pink-600"
    },
   
    
   
    {
      id: 6,
      name: "Website Health Analyzer",
      year: "",
      description: "AI-driven platform for comprehensive website analysis",
      technologies: ["React", "FastAPI", "Transformers", "Computer Vision", "Docker", "Microservices"],
      achievements: [
        "Production-grade AI/ML integration",
        "Containerized cloud-native architecture",
        "Solves real web security/performance challenges"
      ],
      links: {
        github: "https://github.com/ARYAN-095/GuardianWeb--Website--Health--analyzer-application",
        demo: "#"
      },
      gradientColors: ["#6366f1", "#8b5cf6", "#a855f7"], // Indigo to Violet to Purple
      accentColor: "from-indigo-500 to-violet-600"
    }
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
            href="#"
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
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Icons
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaDocker, FaAws, FaFileExcel 
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { 
  SiTypescript, SiSpringboot, SiDjango, SiFastapi, SiExpress,
  SiAngular, SiFlutter, SiPrisma, SiPostgresql, SiMongodb, SiMysql,
  SiPython, SiCplusplus, SiKubernetes, SiGithubactions,
  SiPostman, SiLinux, SiGit
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const categories = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "C/C++", icon: SiCplusplus },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: SiPostgresql },
      { name: "Shell", icon: SiLinux },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Angular", icon: SiAngular },   // ✅ fixed
      { name: "Flutter", icon: SiFlutter },
      { name: "TailwindCSS", icon: RiTailwindCssFill },
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Express.js", icon: SiExpress },
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GitHub Actions (CI/CD)", icon: SiGithubactions },
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Postman", icon: SiPostman },
      { name: "Excel", icon: FaFileExcel }, // ✅ replaced fallback
    ],
  },
  {
    title: "AI/ML Tools",
    items: [
      { name: "OpenAI / Gemini API", icon: SiPython }, // fallback
      { name: "ML Libraries (NumPy, Pandas, Sklearn)", icon: SiPython },
    ],
  },
];

const AllSkillsSM = () => {
  return (
    <div className="space-y-16 my-12 px-4 md:px-0 max-w-[1000px] mx-auto">
      {categories.map((cat, ci) => (
        <motion.div
          key={ci}
          variants={fadeIn("up", 0.2 + ci * 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            {cat.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {cat.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="flex flex-col items-center bg-white/20 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <Icon className="text-5xl text-cyan-500 mb-4" />
                  <p className="text-center font-medium text-gray-700 dark:text-gray-300">
                    {item.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;

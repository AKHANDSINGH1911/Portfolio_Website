import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Icons
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaDocker, FaAws 
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { 
  SiTypescript, SiRedux, SiNextdotjs, SiPrisma, SiPostgresql, SiMongodb, 
  SiPython, SiCplusplus, SiSocketdotio, SiCloudflare, SiSelenium, SiPostman 
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrHost } from "react-icons/gr";    // Hono fallback
import { AiFillSignal } from "react-icons/ai"; // WebRTC fallback

const categories = [
  {
    title: "Core Web",
    items: [
      
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: RiTailwindCssFill },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Hono", icon: GrHost },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "WebRTC", icon: AiFillSignal },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
      { name: "Cloudflare", icon: SiCloudflare },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "Selenium", icon: SiSelenium },
      { name: "Postman", icon: SiPostman },
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

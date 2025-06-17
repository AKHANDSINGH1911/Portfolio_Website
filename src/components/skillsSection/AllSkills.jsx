import SingleSkill from "./SingleSkill";
import { FaJava } from "react-icons/fa"; 
import { SiCplusplus, SiPython } from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  
  
  
  SiSocketdotio,
  SiCloudflare,
  SiSelenium,
  SiPostman,
} from "react-icons/si";
import { GrHost } from "react-icons/gr"; // fallback for Hono
import { AiFillSignal } from "react-icons/ai"; // fallback for WebRTC
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const categories = [
  {
    title: "Languages and Frameworks",
    skills: [
     
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "ReactJS", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: RiTailwindCssFill },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Hono", icon: GrHost },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "WebRTC", icon: AiFillSignal },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
      { name: "Cloudflare", icon: SiCloudflare },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Selenium", icon: SiSelenium },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

const AllSkills = () => {
  return (
    <div className="space-y-12 px-6 md:px-0 max-w-[1200px] mx-auto">
      {categories.map((cat, ci) => (
        <motion.div
          key={ci}
          variants={fadeIn("up", 0.2 + ci * 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className=""
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {cat.title}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {cat.skills.map((skill, si) => (
              <motion.div
                key={si}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center"
              >
                <SingleSkill
                  text={skill.name}
                  imgSvg={<skill.icon size={36} className="text-cyan-500" />}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkills;

import SingleSkill from "./SingleSkill";
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaAws, FaFileExcel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import {
  SiCplusplus,
  SiPython,
  SiTypescript,
  SiSpringboot,
  SiDjango,
  SiFastapi,
  SiExpress,
  SiAngular,      // ✅ kept only once
  SiFlutter,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiKubernetes,
  SiGithubactions,
  SiPostman,
  SiLinux,
  SiGit,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "C/C++", icon: SiCplusplus },
      { name: "JavaScript", icon: IoLogoJavascript },
      // { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: SiPostgresql },
      // { name: "Shell", icon: SiLinux },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      // { name: "Angular", icon: SiAngular },
      // { name: "Flutter", icon: SiFlutter },
      { name: "TailwindCSS", icon: RiTailwindCssFill },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      // { name: "Spring Boot", icon: SiSpringboot },
      // { name: "Express.js", icon: SiExpress },
      // { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      // { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
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
    skills: [
      { name: "Postman", icon: SiPostman },
      { name: "Excel", icon: FaFileExcel }, // ✅ proper Excel icon
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

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../../framerMotion/variants";
import { FiChevronRight } from "react-icons/fi";

const AboutMeText = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-8 md:items-start sm:items-center md:text-left sm:text-center px-6 md:px-0"
      id="about"
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeIn("down", 0.4)}
        className="text-5xl sm:text-6xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 mb-4"
      >
        About Me
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        variants={fadeIn("up", 0.5)}
        className="max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        I’m <strong>Aryan Shukla</strong>, a Full‑Stack Developer specializing in Node.js, React, and Cloud‑Native Architectures. I build scalable web applications from the ground up, spanning backend APIs, modern frontends, and DevOps workflows.
      </motion.p>

      {/* What I Bring */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        className="max-w-2xl space-y-4"
      >
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          What I Bring to the Table:
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <FiChevronRight className="mt-1 text-cyan-500" size={20} />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>Backend Mastery:</strong> Designed high‑performance APIs with Node.js, Express, TypeScript, PostgreSQL & MongoDB. Implemented OAuth/JWT auth, rate‑limiting, and real‑time WebSocket features.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiChevronRight className="mt-1 text-cyan-500" size={20} />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>Frontend Proficiency:</strong> Crafted responsive UIs using React, Next.js & Tailwind CSS with Recoil/Context API state management and SSR/SSG for blazing performance.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiChevronRight className="mt-1 text-cyan-500" size={20} />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>DevOps & Deployment:</strong> Containerized with Docker, orchestrated via Kubernetes, and deployed on AWS (EC2, S3, EKS). Built CI/CD pipelines and monitoring using Grafana & Prometheus.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FiChevronRight className="mt-1 text-cyan-500" size={20} />
            <span className="text-gray-700 dark:text-gray-300">
              <strong>System Design:</strong> Applied sharding, load‑balancing, Redis caching, and Kafka event workflows for projects like a trading platform (Zerodha‑style) and payment gateway (Paytm‑style).
            </span>
          </li>
        </ul>
      </motion.div>

      {/* Call‑to‑Action Button */}
      <motion.button
        variants={fadeIn("up", 0.7)}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-500 hover:to-cyan-500 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={600}
          offset={-120}
          className="cursor-pointer"
        >
          My Projects
        </Link>
        <FiChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
};

export default AboutMeText;

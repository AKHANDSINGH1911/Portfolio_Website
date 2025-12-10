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
        I’m <strong>Akhand Singh</strong>, an aspiring <strong>DevOps Engineer</strong> and <strong>Cloud Engineer</strong> with hands-on experience in <strong>CI/CD automation, containerization, cloud platforms, and infrastructure-as-code</strong>. I specialize in building <strong>scalable, secure, and reliable systems</strong> while working across backend services, cloud-native environments, and end-to-end DevOps pipelines.
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
      <strong>Infrastructure & Automation:</strong> Skilled in creating automated, 
      scalable infrastructure using Terraform, Docker, and Kubernetes. Experienced 
      in Infrastructure-as-Code (IaC) and managing cloud resources with GitOps practices.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <FiChevronRight className="mt-1 text-cyan-500" size={20} />
    <span className="text-gray-700 dark:text-gray-300">
      <strong>CI/CD Pipelines:</strong> Designed and automated CI/CD pipelines using 
      GitHub Actions, Jenkins, and GitLab CI. Implemented build, test, and deployment 
      workflows that ensure fast, reliable, and zero-downtime delivery.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <FiChevronRight className="mt-1 text-cyan-500" size={20} />
    <span className="text-gray-700 dark:text-gray-300">
      <strong>Cloud Engineering:</strong> Hands-on experience with AWS (EC2, S3, IAM, RDS, ECR, 
      Lambda), container orchestration, VPC networking, load balancers, and securing 
      cloud-native deployments.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <FiChevronRight className="mt-1 text-cyan-500" size={20} />
    <span className="text-gray-700 dark:text-gray-300">
      <strong>Monitoring & Reliability:</strong> Implemented observability using 
      Prometheus, Grafana, ELK stack, CloudWatch logs, and alerting systems. Improved 
      uptime and performance with proactive monitoring and SRE principles.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <FiChevronRight className="mt-1 text-cyan-500" size={20} />
    <span className="text-gray-700 dark:text-gray-300">
      <strong>DevOps + AI Integrations:</strong> Leveraged OpenAI/Gemini APIs to 
      automate CI/CD failure analysis, log processing, and observability insights, 
      enabling smarter DevOps workflows.
    </span>
  </li>
</ul>

      </motion.div>

      {/* Call-to-Action Button */}
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

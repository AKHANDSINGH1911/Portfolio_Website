import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
import SingleContactSocial from "./SingleContactSocial";

const ContactInfo = () => {
  const contactItems = [
    {
      text: "akhandsingh706@gmail.com",
      Icon: HiOutlineMail,
      gradient: "from-cyan-400 to-blue-500",
      hoverEffect: "hover:shadow-cyan-500/20 hover:scale-[1.02]",
      link: "mailto:akhandsingh706@gmail.com",
    },
    {
      text: "+91 9420246018",
      Icon: FiPhone,
      gradient: "from-blue-400 to-indigo-500",
      hoverEffect: "hover:shadow-blue-500/20 hover:scale-[1.02]",
      link: "tel:+919420246018",
    },
    {
      text: "Delhi, India",
      Icon: IoLocationOutline,
      gradient: "from-emerald-400 to-teal-500",
      hoverEffect: "hover:shadow-emerald-500/20 hover:scale-[1.02]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-container p-8 rounded-2xl backdrop-blur-lg border border-white/10 shadow-xl"
    >
      <motion.h3
        className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Contact Me
      </motion.h3>

      <motion.p
        className="text-gray-300 mb-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Let's build something amazing together! 🚀
      </motion.p>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <SingleInfo
              text={item.text}
              Icon={item.Icon}
              gradient={item.gradient}
              hoverEffect={item.hoverEffect}
              link={item.link}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
         
         
         

        {/* Social links would go here */}
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
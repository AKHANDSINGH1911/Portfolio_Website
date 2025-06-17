import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed w-full top-0 left-0 z-50 px-4 pt-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Floating glass navbar */}
        <motion.div 
          className="flex justify-between items-center p-2 rounded-full backdrop-blur-xl bg-black/80 border border-white/10 shadow-2xl"
          whileHover={{ 
            boxShadow: "0 0 40px rgba(255, 165, 0, 0.3)",
            borderColor: "rgba(255, 165, 0, 0.5)"
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo with glow effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="pl-2"
          >
            <NavbarLogo />
          </motion.div>

          {/* Navigation links - desktop */}
          <motion.div 
            className={`hidden lg:flex items-center gap-8 ${menuOpen ? "sm:block" : "sm:hidden"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <NavbarLinks />
          </motion.div>

          {/* CTA button with animated gradient border */}
          <motion.div 
            className="hidden lg:block relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <NavbarBtn />
          </motion.div>

          {/* Mobile menu button with animated lines */}
          <motion.div 
            className="lg:hidden flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-black/70 to-gray-900/90 border border-white/10"
            whileHover={{ 
              backgroundColor: "rgba(255, 165, 0, 0.1)",
              borderColor: "rgba(255, 165, 0, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <NavbarToggler />
          </motion.div>
        </motion.div>

        {/* Floating indicator */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mx-auto mt-2 shadow-[0_0_15px_rgba(255,165,0,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.nav>
  );
};

export default NavbarMain;
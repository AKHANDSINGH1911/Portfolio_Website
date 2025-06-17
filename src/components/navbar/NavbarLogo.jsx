const NavbarLogo = () => {
  return (
    <div className="group cursor-pointer">
      {/* Full Name - Shown on md+ screens */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-3xl sm:hidden md:block font-bold tracking-tighter transition-all duration-500 hover:tracking-wide">
        Aryan Shukla
      </h1>

      {/* Initials - Shown on sm screens */}
      <h1 className="relative text-white font-bold text-4xl md:hidden sm:block">
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-all duration-300"></span>
        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
          AQ
        </span>
      </h1>
    </div>
  );
};

export default NavbarLogo;
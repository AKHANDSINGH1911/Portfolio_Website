import React, { useState } from "react";

const SingleSkill = ({ imgSvg, text }) => {
  // Dynamic NEON colors based on skill
  const getSkillColor = () => {
    const neonColors = {
      React: { 
        gradient: "from-cyan-400 to-blue-500",
        icon: "#22d3ee",
        glow: "#0ea5e9"
      },
      JavaScript: {
        gradient: "from-yellow-300 to-amber-500",
        icon: "#fcd34d",
        glow: "#f59e0b"
      },
      TypeScript: {
        gradient: "from-blue-400 to-indigo-600",
        icon: "#60a5fa",
        glow: "#4f46e5"
      },
      Node: {
        gradient: "from-green-400 to-emerald-500",
        icon: "#34d399",
        glow: "#10b981"
      },
      CSS: {
        gradient: "from-indigo-400 to-purple-500",
        icon: "#a78bfa",
        glow: "#8b5cf6"
      },
      HTML: {
        gradient: "from-orange-400 to-red-500",
        icon: "#fb923c",
        glow: "#ef4444"
      },
      Python: {
        gradient: "from-teal-300 to-blue-400",
        icon: "#2dd4bf",
        glow: "#38bdf8"
      },
      Git: {
        gradient: "from-rose-400 to-red-500",
        icon: "#fb7185",
        glow: "#f43f5e"
      },
      default: {
        gradient: "from-pink-400 to-fuchsia-500",
        icon: "#f472b6",
        glow: "#d946ef"
      }
    };
    return neonColors[text] || neonColors.default;
  };

  const { gradient, icon, glow } = getSkillColor();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative hover:-translate-y-6 transition-all duration-500 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rainbow glow card background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/80 to-indigo-900/80 
                     shadow-[0_0_50px_rgba(139,92,246,0.5)] z-0" />
      
      {/* Animated floating particles */}
      {isHovered && [...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full animate-float pointer-events-none"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.2}s`,
            backgroundColor: icon,
            boxShadow: `0 0 15px 2px ${glow}`,
            opacity: 0.8
          }}
        />
      ))}

      {/* INTENSE NEON PILLAR GLOW */}
      <div 
        className={`w-[120px] h-[140px] bg-gradient-to-t ${gradient} 
                   absolute top-[60px] -z-10 rounded-b-lg opacity-90
                   group-hover:shadow-[0_0_40px_${glow.replace('#', '')}]
                   group-hover:opacity-100 transition-all duration-700`} 
      />

      {/* ELECTRIC PULSE BORDER */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent 
                     group-hover:border-white/50 group-hover:animate-[pulse_2s_infinite]
                     pointer-events-none transition-all duration-1000" />

      {/* Skill bubble with EXTREME GLOW */}
      <div className="flex flex-col items-center gap-3 relative z-10">
        <div 
          className={`relative h-28 w-28 flex items-center justify-center 
                     rounded-full group-hover:scale-110 transition-all duration-500 
                     shadow-[0_0_30px_rgba(255,255,255,0.3)]
                     group-hover:shadow-[0_0_50px_${glow.replace('#', '')}]
                     bg-gradient-to-br from-gray-900 to-black`}
          style={{
            boxShadow: `inset 0 0 30px ${glow}`
          }}
        >
          
          {/* NEON RADIAL BURST */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-80 
                      transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`
            }}
          />
          
          {/* Icon with SUPER GLOW */}
          <div className="p-6 text-5xl relative z-10">
            {React.cloneElement(imgSvg, {
              style: {
                color: icon,
                filter: `
                  drop-shadow(0 0 15px ${glow})
                  brightness(1.3)
                  ${text === "React" ? "contrast(1.5) saturate(2)" : "saturate(1.5)"}
                `,
                transition: "all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                transform: isHovered ? "rotate(12deg) scale(1.2)" : "none"
              }
            })}
            
            {/* ANIMATED NEON RINGS */}
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent 
                        group-hover:border-current/40 group-hover:animate-[spin_5s_linear_infinite] 
                        pointer-events-none transition-all duration-1000"
              style={{
                borderColor: glow
              }}
            />
          </div>
        </div>

        {/* NEON TEXT WITH EXPLOSIVE GLOW */}
        <p 
          className={`font-bold text-center text-sm tracking-wider
                     group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_${glow.replace('#', '')}]
                     transition-all duration-500 rounded-full px-4 py-2
                     bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          style={{
            textShadow: `0 0 15px ${glow}`,
            backgroundColor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(10px)"
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default SingleSkill;
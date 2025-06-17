import React from "react";
import { FcSettings } from "react-icons/fc";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFirebase } from "react-icons/si";

const SkillsCircle = () => {
  // Animated floating icons data
  const floatingIcons = [
    { icon: <FaReact className="text-cyan-400 text-3xl" />, angle: 0 },
    { icon: <FaNodeJs className="text-green-500 text-3xl" />, angle: 45 },
    { icon: <FaJs className="text-yellow-400 text-3xl" />, angle: 90 },
    { icon: <SiTypescript className="text-blue-600 text-3xl" />, angle: 135 },
    { icon: <FaHtml5 className="text-orange-500 text-3xl" />, angle: 180 },
    { icon: <FaCss3Alt className="text-blue-400 text-3xl" />, angle: 225 },
    { icon: <SiTailwindcss className="text-cyan-300 text-3xl" />, angle: 270 },
    { icon: <SiFirebase className="text-amber-500 text-3xl" />, angle: 315 }
  ];

  return (
    <div className="relative h-[300px] w-[300px] rounded-full flex items-center justify-center overflow-hidden group">
      {/* Rainbow gradient border with animation */}
      <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-[spin_6s_linear_infinite]">
        <div className="relative h-full w-full rounded-full bg-gray-900 overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_70%)] opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
          
          {/* Pulsing center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <FcSettings className="text-6xl group-hover:text-7xl transition-all duration-500 group-hover:rotate-180" />
          </div>

          {/* Floating tech icons */}
          {floatingIcons.map((item, index) => (
            <div 
              key={index}
              className="absolute top-1/2 left-1/2 origin-[0_0]"
              style={{
                transform: `rotate(${item.angle}deg) translateX(120px) rotate(-${item.angle}deg)`,
                transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
              }}
            >
              <div className="group-hover:animate-[bounce_2s_infinite] hover:!animate-none hover:scale-125 transition-transform duration-300">
                {React.cloneElement(item.icon, {
                  className: `${item.icon.props.className} drop-shadow-[0_0_10px_currentColor] hover:drop-shadow-[0_0_20px_currentColor] transition-all duration-300`
                })}
              </div>
            </div>
          ))}

          {/* Glowing particles */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={`particle-${i}`}
              className="absolute rounded-full bg-white opacity-0 group-hover:opacity-80 group-hover:animate-[float_5s_linear_infinite]"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                filter: `blur(${Math.random() * 2 + 1}px)`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 group-hover:shadow-[0_0_40px_#6366f1] transition-all duration-1000" />
    </div>
  );
};

export default SkillsCircle;
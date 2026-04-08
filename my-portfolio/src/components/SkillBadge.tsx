import React from 'react';
import { motion } from 'framer-motion';
import "./component.css"

// --- Interface Definition ---
interface SkillBadgeProps {
  name: string;
  iconUrl: string; // Figma logo SVG or Image URL
  glowColor: string; // Figma အတွက်ဆိုရင် #ff00ff (Fuchsia) ပုံစံမျိုး
  isActive?: boolean;
  delay?: number; // Floating animation စမယ့် အချိန်မတူအောင်
  className: string;
}

/**
 * CircleSkillBadge Component
 * Senior Level: Modular, Typed, and Animated
 */
const CircleSkillBadge: React.FC<SkillBadgeProps> = ({ 
  name, 
  iconUrl, 
  glowColor, 
  isActive = true, 
  delay,
  className ,
}) => {
  return (
    <motion.div
      // Floating Animation: အပေါ်အောက် အသာအယာ လွင့်နေမည့် effect
      animate={{
        y: [0, -2, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}

      className={`flex flex-col items-center select-none absolute ${className}`}
    >
      {/* Circle Container */}
      <div className="relative group">
        
        {/* Outer Glow Effect (Active ဖြစ်မှ လင်းမည်) */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ backgroundColor: glowColor }}
          />
        )}

        {/* Main Badge Body */}
        <div  
          className={`
            relative z-10 w-4 h-4 rounded-full 
            bg-[#1A1D2D] border-0.5 flex items-center justify-center
            transition-all duration-500 overflow-hidden logo-div border-${glowColor}
          `}
          style={{ 
            "--glow-color": glowColor
          } as React.CSSProperties}
        >
          {/* Skill Icon */}
          <img 
            src={iconUrl} 
            alt={name} 
            className="w-3 h-3 bg-cover"
          />

          {/* Glassmorphism Shine Effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 skew-y-12" />
        </div>
      </div>

      {/* Skill Name Label */}
      <span className="text-white font-semibold tracking-tight text-[5px] drop-shadow-md">
        {name}
      </span>
    </motion.div>
  );
};

export default CircleSkillBadge;
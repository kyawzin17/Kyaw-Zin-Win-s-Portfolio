import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, FileCode2, Cpu, Zap } from 'lucide-react';
import Html from "../assets/html.png";
import Figma from "../assets/figma.png";
import Css from "../assets/csss.png";
import Js from "../assets/javascript.png";
import Reactjs from '../assets/react.png';
import Tailwind from "../assets/tailwindCss.webp";
import BootStrap from "../assets/bootstrap.png";
import TypeScript from "../assets/typeScript.png";
import CircleSkillBadge from './SkillBadge';
import "./component.css";

// --- Types ---
type TechId = 'html' | 'css' | 'js' | 'all' | null;

interface SkillArray {
  name: String;
  iconUrl: string;
  glowColor: string;
  style: string;
}
const sArray: SkillArray[] = [
  { name: "HTML", iconUrl: Html, glowColor: "#ff661d", style: "top-2 left-0"},
  { name: "CSS", iconUrl: Css, glowColor: "#2965f1", style: "top-2 left-1/2 -translate-1/2"},
  { name: "JavaScript", iconUrl: Js, glowColor: "#f7df1e", style: "top-2 right-0"},
  { name: "React", iconUrl: Reactjs, glowColor: "#61dafb", style: "top-1/2 left-0 -translate-1/2",},
  { name: "Tailwind", iconUrl: Tailwind, glowColor: "#38bdf8", style: "top-1/2 -right-4 -translate-1/2"},
  { name: "BootStrap", iconUrl: BootStrap, glowColor: "#7952b3", style: "bottom-2 left-0"},
  { name: "Figma", iconUrl: Figma, glowColor: "#f24e1e", style: "-bottom-4 left-1/2 -translate-1/2"},
  { name: "TypeScript", iconUrl: TypeScript, glowColor: "#3178c6", style: "bottom-2 right-0"},
]

interface NodeProps {
  id: TechId;
  title: string;
  icon: React.ReactNode;
  color: string;
  subLabel?: string;
  childrenSkills: string[];
  activeTech: TechId;
  setActiveTech: (id: TechId) => void;
}

// --- Animated Connection Line Component ---
const ConnectionLine = ({ isActive, color }: { isActive: boolean; color: string }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-full h-16 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="none">
        {/* Base Static Line */}
        <path 
          d="M 50 0 L 50 60" 
          fill="none" 
          stroke="rgba(51, 65, 85, 0.3)" 
          strokeWidth="2" 
          strokeDasharray="4 4"
        />
        {/* Energy Flow Line */}
        <motion.path
          d="M 50 0 L 50 60"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isActive ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ filter: `drop-shadow(0 0 8px ${color})` }}
        />
        {/* Flying Particles (Electron Effect) */}
        {isActive && (
          <motion.circle
            r="3"
            fill={color}
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: "path('M 50 0 L 50 60')", filter: `drop-shadow(0 0 5px ${color})` }}
          />
        )}
      </svg>
    </div>
  );
};

// --- Skill Node Component ---
const SkillNode: React.FC<NodeProps> = ({ id, title, icon, color, subLabel, childrenSkills, activeTech, setActiveTech }) => {
  const isActive = activeTech === id || activeTech === 'all';

  return (
    <div className="flex flex-col items-center w-full relative mb-16">
      {/* Node Body */}
      <motion.div
        onMouseEnter={() => setActiveTech(id)}
        onMouseLeave={() => setActiveTech(null)}
        whileHover={{ scale: 1.05 }}
        className={`relative z-10 flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-500 cursor-pointer w-48
          ${isActive ? 'bg-slate-800/90 shadow-2xl' : 'bg-slate-900/50 border-slate-800'}
        `}
        style={{ 
          borderColor: isActive ? color : 'transparent',
          boxShadow: isActive ? `0 0 30px ${color}33, inset 0 0 15px ${color}22` : 'none'
        }}
      >
        <div className={`p-3 rounded-full mb-7 ${isActive ? 'bg-slate-900' : 'bg-slate-800'}`} style={{ color: isActive ? color : '#64748b' }}>
          {icon}
        </div>
        <h5 className="text-lg font-bold tracking-tighter text-main">{title}</h5>
        {subLabel && <span className="text-[10px] uppercase tracking-widest text-slate-500">{subLabel}</span>}
        
        {/* Scanning Glow Line on Hover */}
        {isActive && (
          <motion.div 
            layoutId="scan"
            className="absolute inset-0 rounded-2xl border-t-2 border-white/20 pointer-events-none"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Children Skill Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-12 w-full max-w-xl">
        {childrenSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            animate={isActive ? { y: 0, opacity: 1, scale: 1 } : { y: 10, opacity: 0.4, scale: 0.9 }}
            className={`px-4 py-1.5 rounded-full border text-xs font-mono transition-colors duration-300
              ${isActive ? 'bg-slate-800 text-white' : 'bg-transparent text-slate-600 border-slate-800'}
            `}
            style={{ borderColor: isActive ? color : '' }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      <ConnectionLine isActive={isActive} color={color} />
    </div>
  );
};

// --- Main Tech Tree Component ---
export default function TechTree() {
  const [activeTech, setActiveTech] = useState<TechId>(null);

  return (
    <div className="min-h-screen text-white py-24 px-4 relative overflow-visible">
      
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Title Section */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4"
          >
            <Cpu className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Tech Stack Architecture</span>
          </motion.div>
          <h1 className="text-5xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            SKILLS TREE
          </h1>
        </div>

        {/* Tree Structure */}
        <div className="w-full flex flex-col items-center">
          
          <SkillNode 
            id="html"
            title="HTML 5"
            subLabel="Core Foundation"
            icon={<img src={Html} alt="Html Logo!" className='w-8 h-8' />}
            color="#f06529"
            childrenSkills={["Semantic HTML", "Accessibility", "SEO Optimized", "Web Components"]}
            activeTech={activeTech}
            setActiveTech={setActiveTech}
          />

          <SkillNode 
            id="css"
            title="CSS/STYLING"
            subLabel="Design System"
            icon={<Palette className="w-8 h-8" />}
            color="#ec4899"
            childrenSkills={["Tailwind CSS", "Bootstrap", "SCSS", "Framer Motion", "Responsive Design"]}
            activeTech={activeTech}
            setActiveTech={setActiveTech}
          />

          <SkillNode 
            id="js"
            title="JAVASCRIPT"
            subLabel="Logic & Runtime"
            icon={<FileCode2 className="w-8 h-8" />}
            color="#eab308"
            childrenSkills={["React.js", "TypeScript", "Node.js", "Express", "REST API"]}
            activeTech={activeTech}
            setActiveTech={setActiveTech}
          />

          {/* Final Node (Bottom) */}
          <motion.div 
            onMouseEnter={() => setActiveTech('all')}
            onMouseLeave={() => setActiveTech(null)}
            initial={{ scale: 1, rotate: 0}}
            whileHover={{ scale: 1.05, rotate: 360 }} 
            transition={{ duration: 1, type: 'spring', stiffness: 300, damping: 20 }}
             animate={{ boxShadow: activeTech === 'all' ? `0 0 40px -10px var(--primary)` : 'none' }}
             className="mt-18 p-6 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center relative"
          >
            <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 3 }}
            transition={{
              duration: 1,
            }}
            className={`${activeTech === 'all' ? "block" : "hidden" } absolute top-0 left-0 w-full h-full flex items-center justify-center`}>
              {
                sArray.map((item, index) => (
                  <CircleSkillBadge 
                    key={index}
                    name={item.name}
                    className={item.style}
                      iconUrl={item.iconUrl}
                      glowColor={item.glowColor} // ပုံထဲကအတိုင်း fuchsia အရောင်
                      isActive={true}
                     />
                ))
              }
              </motion.div>
            {/* Icon */}
            <Zap className={`w-10 h-10 ${activeTech === 'all' ? 'text-main' : 'text-slate-600'} transition-colors duration-500`} />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
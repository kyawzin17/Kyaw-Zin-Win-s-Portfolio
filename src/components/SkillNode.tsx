import { motion } from "framer-motion";
import { forwardRef } from 'react';

type TechId = 'html' | 'css' | 'js' | 'all' | null;

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
const SkillNode = forwardRef<HTMLElement, NodeProps>(({ id, title, icon, color, subLabel, childrenSkills, activeTech, setActiveTech}, ref) => {
  const isActive = activeTech === id || activeTech === 'all';

  return (
    <div ref={ref} className="flex flex-col items-center w-full relative mb-16">
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
});


export default SkillNode;
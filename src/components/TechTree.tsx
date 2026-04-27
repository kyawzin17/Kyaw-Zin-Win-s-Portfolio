import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Palette, FileCode2, Cpu, Zap } from 'lucide-react';
import Html from "../../public/images/html.webp";
import Figma from "../../public/images/figma.webp";
import Css from "../../public/images/csss.webp";
import Js from "../../public/images/javascript.webp";
import Reactjs from "../../public/images/react.webp";
import Tailwind from "../../public/images/tailwindCss.webp";
import BootStrap from "../../public/images/bootstrap.webp";
import TypeScript from "../../public/images/typeScript.webp";
import CircleSkillBadge from './SkillBadge';
import "./component.css";
import SkillNode from './SkillNode';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Types ---
type TechId = 'html' | 'css' | 'js' | 'all' | null;

interface SkillArray {
  name: string;
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




// --- Variants Definitions ---

// ၁။ အပြင်ဘက် Parent Div အတွက် variants
// 'initial' ကနေ 'hovered' ကို သွားရင် ၁ စက္ကန့်ယူမယ်
const outerVariants: Variants = {
  initial: {
    scale: 1,
    rotate: 0,
    boxShadow: '0 0 0px 0px rgba(0,0,0,0)', // boxShadow ကို explicit initial state ပေးထားမယ်
  },
  hovered: {
    scale: 1.05,
    rotate: 360,
    boxShadow: '0 0 40px -10px var(--primary)', // primary color glow
    transition: {
      duration: 1, // ၁ စက္ကန့်ယူပြီး လည်မယ်
      ease: 'easeInOut', // smooth ဖြစ်အောင် ease function သုံးမယ်
      // scale အတွက် spring သီးသန့်ပေးချင်ရင် nested transition သုံးလို့ရတယ်
      scale: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }
    }
  }
};

// ၂။ အထဲက Inner Div (Text/Icon) အတွက် variants
const innerVariants: Variants = {
  initial: {
    scale: 1,
    opacity: 0, 
  },
  hovered: {
    scale: 3,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  }
};


// --- Main Tech Tree Component ---
export default function TechTree() {
  const [activeTech, setActiveTech] = useState<TechId>(null);
 const cardRefs = useRef<{ [key: string]: HTMLElement | null }>({});
 const zapRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    // CTA Section Animation
    gsap.from(zapRef.current,{
      scrollTrigger: {
        trigger: zapRef.current,
        start: 'top 108%',
        toggleActions: 'play none none reverse',
        onEnter: () => setActiveTech('all'),
        onLeave: () => setActiveTech(null),
      },
      opacity: 0,
      y: 70,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.out',
    });
  });
    return () => ctx.revert();
  }, []);

  const scrollViews = (item: string) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
    // CTA Section Animation
    gsap.from(cardRefs.current[item],{
      scrollTrigger: {
        trigger: cardRefs.current[item],
        start: 'top 80%',
        toggleActions: 'play none none none',
        onEnter: () => setActiveTech(item as TechId),
        onLeave: () => setActiveTech(null),
      },
      opacity: 0,
      y: 70,
      scale: 0.95,
      duration: 0.8,  
      ease: 'power3.out',
    });
  });
   setActiveTech(item as TechId);
    return () => ctx.revert();
  }, []);
}

scrollViews("html");
scrollViews("css");
scrollViews('js');


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
          <h1 className="text-5xl font-black italic tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-slate-500">
            SKILLS TREE
          </h1>
        </div>

        {/* Tree Structure */}
        <div className="w-full flex flex-col items-center">
          
          <SkillNode 
            ref={(el) => {cardRefs.current['html'] = el}}
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
            ref={(el) => {cardRefs.current['css'] = el}}
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
            ref={(el) => {cardRefs.current['js'] = el}}
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
      // activeTech state logic
      onMouseEnter={() => setActiveTech('all')}
      onMouseLeave={() => setActiveTech(null)}
      
      // Animations for outer div
      initial="initial"   // စစချင်း "initial" state မှာ ရှိမယ်
      whileHover="hovered" // hover လုပ်ရင် "hovered" state ဆီ သွားမယ် (ဒီကနေ parent ရဲ့ transition duration 1s ကို အသုံးချမှာပါ)
      variants={outerVariants} // variants ကို ချိတ်မယ်

      className="mt-18 p-6 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center relative cursor-pointer overflow-visible"
    >
      {/* Inner Div */}
      <motion.div
        variants={innerVariants}
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold transition-opacity duration-300 ${activeTech === 'all' ? "opacity-100" : "opacity-0" }`}
      >{
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
            <Zap
            ref={zapRef}
             className={`w-10 h-10 ${activeTech === 'all' ? 'text-main' : 'text-slate-600'} transition-colors duration-500`} />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
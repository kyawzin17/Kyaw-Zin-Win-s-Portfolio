import { useAppContext } from "../hooks/useAppContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({scrollToSection}) => {

  const { active }= useAppContext();
  const [ hoverPath, setHoverPath ]= useState<string>("");

  const [ scrollHeader, setScrollHeader ]= useState<boolean>(false);
  
  useGSAP(() =>{
    gsap.from(".header", {
      scaleX: 0,
      delay: 0.4,
      ease: "power2.out",
      duration: 0.8
    })
  }, {})
  
    useEffect(() => {
  
      const handleScroll= () => {
             if (window.scrollY > 10) {
              setScrollHeader(true);
             } else {
              setScrollHeader(false);
             }
          }
          window.addEventListener("scroll", handleScroll);
          return () => {
              window.removeEventListener("scroll", handleScroll);
          }
    }, []);
  

    const navArray= [
        {id: "home", name: "Home"},
        {id: "about", name: "About"},
        {id: "skills", name: "Skills"},
        {id: "projects", name: "Projects"},
        {id: "contact", name: "Contact"},
    ]
  return (
    <header className={`header w-full bg-bg/10 sticky top-0 backdrop-blur-md py-5 z-1000 ${scrollHeader ? "shadow-primary/30 shadow-md" : ""}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 items-center px-4 gap-4">
        <h6 className='justify-self-start text-main font-bold font-serif leading-1.5'>Portfolio!</h6>
        <nav className="sm:justify-self-end flex justify-around relative">
            { navArray.map((item) => (
                <a key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoverPath(item.id)}
                  onMouseLeave={() => setHoverPath("")}
                   className={`relative px-4 py-1 text-sm font-medium ${active === item.id ? "text-primary" : "text-muted"} hover:text-white transition-colors duration-300`}>
                      {item.id === hoverPath && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { useRef, useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { useAppContext } from "./hooks/useAppContext";

// const sections = ['home', 'about', 'skills', 'contact'];
export default function App() {

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const { setActive }= useAppContext();

  useEffect(() => {
    // Scroll ဆွဲတဲ့အခါ ဘယ် section ရောက်နေလဲဆိုတာကို Observer နဲ့ ဖမ်းမယ်
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '100px 0px -70% 0px',
      }
    );

    // Section အားလုံးကို လိုက်စောင့်ကြည့်မယ်
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-bg relative">
      {/* Background Circuit Pattern (SVG) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" className="stroke-slate-700">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" strokeWidth="1"/>
            <circle cx="0" cy="0" r="2" fill="currentColor"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Header scrollToSection={scrollToSection} />
      <main className="w-full">
        <Home id={'home'} ref={(el) => {sectionRefs.current['home']= el}}/>
        <About id='about' ref={(el) => {sectionRefs.current['about']= el}}/>
        <Skills id='skills' ref={(el) => {sectionRefs.current['skills']= el}}/>
        <Contact id='contact' ref={(el) => {sectionRefs.current['contact']= el}}/>
        <Footer />
      </main>
    </div>
  )
}
import { forwardRef, useRef } from 'react';
import Svgimg  from "../assets/Circle-svg.svg";
import Myphoto from "../../public/images/myPortfolioPicture.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTelegram, faViber } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import TypingHeading from "../components/TypingHeading";


gsap.registerPlugin(ScrollTrigger, useGSAP);


interface HomeProps {
  id: string;
}

const Home= forwardRef<HTMLElement, HomeProps>(({id}, ref) => {

  const textRefs= useRef<{ [key : string]: HTMLElement | null}>({});
  const bottomRefs= useRef<{ [key : string]: HTMLElement | null}>({});

  useGSAP(() => {
    const tl= gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "top 80%",
        end: "bottom 80%",
      }
    });
    tl.from(textRefs.current[0]!, {
      y: 100,
      opacity: 0,
      delay: 0.6,
      duration: 0.6,
      ease: "power1.outOut",
    })
    .from(textRefs.current[1]!, {
      y: 100,
      opacity: 0,
      duration: 0.6,
           ease: "power1.outOut",
    }, "-=0.3")
    .from(textRefs.current[2]!, {
      y: 100,
      opacity: 0,
      duration: 0.6,
           ease: "power1.outOut",
    }, "-=0.3")
    .from(textRefs.current[3]!, {
      y: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power1.outOut",
    }, "-=0.3")
    .from(bottomRefs.current[0]!, {
      y: 70,
      opacity: 0,
      delay: 0.3,
      duration: 0.3,
      ease: "power1.outOut",
    })
    .from(bottomRefs.current[1]!, {
      y: 70,
      opacity: 0,
      duration: 0.3,
      ease: "power1.outOut",
    })
    .from(bottomRefs.current[2]!, {
      y: 70,
      opacity: 0,
      duration: 0.3,
      ease: "power1.outOut",
    })
    .from(bottomRefs.current[3]!, {
      y: 70,
      opacity: 0,
      duration: 0.3,
      ease: "power1.outOut",
    })
    .from(".hero-image", {
      y: 70,
      opacity: 0,
      duration: 0.6,
      ease: "power1.outOut",
    }, "-=2")
    .from(".hero-circle", {
      scale: 0.2,
      opacity: 0,
      duration: 0.6,
      ease: "power1.outOut",
    })
    .from(".lable-hero", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power1.outOut",
    }, "-=0.2")
  })

  return (
    <section id={id} ref={ref} className='w-full h-auto px-6 py-18 md:py-2 relative overflow-hidden'>
        <div className='absolute top-0 -left-1 opacity-50 bg-tl bg-cover h-70 w-60 bg-[url(././assets/Union.svg)]'></div>
        <div className='absolute bottom-[25%] -left-1 opacity-75 bg-contain bg-no-repeat h-30 w-40 bg-[url(././assets/docEffect.svg)]'></div>
         <div className='absolute bottom-[30%] left-[50%] opacity-75 bg-contain bg-no-repeat h-30 w-40 bg-[url(././assets/docEffect.svg)]'></div>
          <div className='absolute top-10 -right-1 opacity-75 bg-contain bg-no-repeat h-30 w-40 bg-[url(././assets/docEffect.svg)]'></div>
          {/* Hero Child */}
          <div className='max-w-220 h-auto mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20'>
            {/* Hero-text */}
            <div className='w-auto h-auto flex flex-col justify-center items-center md:items-start overflow-visible'>
              <h4 ref={(el) => {textRefs.current[0] = el}} className='text-main font-extrabold font-mono leading-[1.2]'>HELLO,</h4>

              <div className='flex gap-2'>
                <h5 ref={(el) => {textRefs.current[1] = el}} className='text-main font-bold font-mono'>I'm</h5>
                <h5 ref={(el) => {textRefs.current[2] = el}} className='text-primary font-bold font-mono'>Kyaw Zin!</h5>
              </div>
              <h6 ref={(el) => {textRefs.current[3] = el}} className='flex mt-1'>
                <TypingHeading textToType="I'm a fontend developer" />
                <motion.span
                animate={{
                  opacity: [ 0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                 className='text-primary ms-1'>#</motion.span></h6>

              <div className='max-w-80 h-auto py-1 flex justify-center gap-2 mt-4'>
                <motion.button
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.2,
                    }
                  }} ref={(el) => {bottomRefs.current[0] = el}} className='p-1 rounded-md bg-transparent'>
                  <a href="https://github.com/kyawzin17" target="_blank" rel="noopener noreferrer transition-all duration-200 ease-linear">
                      <FontAwesomeIcon icon={faGithub} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#f21b24]' />
                  </a>
                </motion.button>
                <motion.button
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.2,
                    }
                  }} ref={(el) => {bottomRefs.current[1] = el}} className='p-1 rounded-md bg-transparent'>
                  <a href="https://facebook.com/reddragon1766" target="_blank" rel="noopener noreferrer transition-all duration-200 ease-linear">
                      <FontAwesomeIcon icon={faFacebook} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#3b569d]' />
                  </a>
                </motion.button>
                <motion.button
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.2,
                    }
                  }} ref={(el) => {bottomRefs.current[2] = el}} className='p-1 rounded-md bg-transparent'>
                  <a href="https://t.me/@kyawzinwinei" target="_blank" rel="noopener noreferrer transition-all duration-200 ease-linear">
                      <FontAwesomeIcon icon={faTelegram} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#007bff]' />
                  </a>
                </motion.button>
                <motion.button
                  whileHover={{
                    y: -10,
                    transition: {
                      duration: 0.2,
                    }
                  }} ref={(el) => {bottomRefs.current[3] = el}} className='p-1 rounded-md bg-transparent'>
                  <a href="viber://chat?number=%2B959674114295" target="_blank" rel="noopener noreferrer transition-all duration-200 ease-linear">
                      <FontAwesomeIcon icon={faViber} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#665ca7]' />
                  </a>
                </motion.button>
              </div>
            </div>
            {/* Hero-image */}
            <div className='max-w-100 h-auto flex flex-col justify-center items-center relative'>
              <motion.img
               animate={{
                rotate: [0, 360]
               }}
               transition={{
                delay: 3,
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
               }} src={Svgimg} alt="Circle SVG" className='hero-circle max-w-100 h-auto z-10' />
              <img src={Myphoto} alt="My Portfolio Picture" className='hero-image max-w-90 h-auto -mt-78 z-11' />
              <motion.div 
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.2,
                  }
                 }}
                  className='lable-hero backdrop-blur-md rounded-md absolute bottom-[25%] left-[14%] text-center px-4 py-3 bg-bg/50 z-100 border border-main/10 hover:border-primary/20'>
                <h6 className='text-primary font-semibold font-serif'>Junior Frontend Developer</h6>
              </motion.div>
            </div>
          </div>
        </section>
  );
});
export default Home;

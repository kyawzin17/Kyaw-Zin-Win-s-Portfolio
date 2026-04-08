import React from 'react';
import Svgimg  from "../assets/Circle-svg.svg";
import Myphoto from "../assets/myPortfolioPicture.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTelegram, faViber } from '@fortawesome/free-brands-svg-icons';

const Home: React.FC = () => {
  return (
    <section className='w-full h-auto px-6 py-18 md:py-8 relative' id='home'>
        <div className='absolute top-0 -left-1 opacity-50 bg-tl bg-cover h-70 w-60 bg-[url(././assets/Union.svg)]'></div>
        <div className='absolute bottom-[25%] -left-1 opacity-75 bg-contain bg-no-repeat h-30 w-40 bg-[url(././assets/docEffect.svg)]'></div>
         <div className='absolute bottom-[30%] left-[50%] opacity-75 bg-contain bg-no-repeat h-30 w-40 bg-[url(././assets/docEffect.svg)]'></div>
          <div className='absolute top-10 -right-1 opacity-75 bg-contain bg-no-repeat h-30 w-40 bg-[url(././assets/docEffect.svg)]'></div>
          {/* Hero Child */}
          <div className='max-w-220 h-auto mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20'>
            {/* Hero-text */}
            <div className='w-auto h-auto flex flex-col justify-center items-center md:items-start overflow-visible'>
              <h4 className='text-main font-extrabold font-mono leading-[1.2]'>HELLO,</h4>

              <div className='flex gap-2'>
                <h5 className='text-main font-bold font-mono'>I'm</h5>
                <h5 className='text-primary font-bold font-mono'>Kyaw Zin!</h5>
              </div>

              <h6 className='text-main white-space-nowrap font-md font-mono'>I'm a fontend developer<span className='text-primary'>#</span></h6>

              <div className='max-w-80 h-auto py-1 flex justify-center gap-2 mt-4'>
                <button className='p-1 rounded-md bg-transparent transition-all duration-200 ease-linear hover:translate-y-[-8px]'>
                  <FontAwesomeIcon icon={faGithub} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#f21b24]' />
                </button>
                <button className='p-1 rounded-md bg-transparent transition-all duration-200 ease-linear hover:translate-y-[-8px]'>
                  <FontAwesomeIcon icon={faFacebook} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#3b569d]' />
                </button>
                <button className='p-1 rounded-md bg-transparent transition-all duration-200 ease-linear hover:translate-y-[-8px]'>
                  <FontAwesomeIcon icon={faTelegram} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#007bff]' />
                </button>
                <button className='p-1 rounded-md bg-transparent transition-all duration-200 ease-linear hover:translate-y-[-8px]'>
                  <FontAwesomeIcon icon={faViber} className='text-main font-bold text-2xl transition-all duration-200 ease-linear hover:text-[#665ca7]' />
                </button>
              </div>
            </div>
            {/* Hero-image */}
            <div className='max-w-100 h-auto flex flex-col justify-center items-center relative'>
              <img src={Svgimg} alt="Circle SVG" className='max-w-100 h-auto' />
              <img src={Myphoto} alt="My Portfolio Picture" className='max-w-90 h-auto -mt-78' />
              <div className='backdrop-blur-md rounded-md absolute bottom-[25%] xt-center mx-auto px-4 py-3 bg-bg/50'>
                <h6 className='text-primary font-semibold font-serif'>Junior Frontend Developer</h6>
              </div>
            </div>
          </div>
        </section>
  );
}
export default Home;

import Me from "../../public/images/me.webp";
const About: React.FC = () => {
  return (
         <section className='w-full relative min-h-[80vh] px-6 py-18 overflow-hidden md:py-16'>
            <div className='absolute top-[30%] -left-1 bg-contain bg-no-repeat h-40 w-[10%] bg-[url(././assets/circuit.svg)]'></div>
            <div className='absolute top-[50%] -left-1 bg-contain bg-no-repeat h-40 w-[10%] bg-[url(././assets/circuit.svg)]'></div>
            <div className='absolute top-0 -right-1 bg-contain bg-no-repeat h-40 w-[10%] bg-[url(././assets/circuit.svg)] rotate-[180deg]'></div>
          <div className='max-w-300 h-full mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-6 lg:gap-10'>
            <div className='h-[70%] hidden lg:block rounded-2xl overflow-hidden mb-6 border border-slate-700/50 relative'>
             <img 
              src={Me} 
              alt="My Phogo!"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            </div>
            <div className='flex flex-col col-span-2 gap-4 px-6 lg:px-0'>
              <h4 className='text-main w-full font-bold font-black leading-[1.2] text-center'>ABOUT & BIO</h4>
              <p className='text-main text-p w-full font-regular font-mono text-justify leading-[1.5]'>
                 Hello, my name is Kyaw Zin Win, and I'm a fontend developer. I specialize in building modern, responsive websites using HTML, CSS, JavaScript, Bootstrap, Tailwind css and React. <br /><br />
                  I began learning web development in April 2024, starting on a mobile phone with the Replit app. Although I faced many limitations and challenges, I stayed committed, using books, YouTube, and online resources to keep improving my skills. <br /><br />
                  Now that I have a laptop, I can study and create projects more smoothly and effectively. <br /><br />
                 My ultimate goal is clear — to become a professional, international-level web developer. For me, web development is not only something I enjoy but also the foundation on which I’m building my future. <br /><br />
                  If you’d like to connect or collaborate, feel free to reach out via GitHub or Email.
              </p>
            </div>
          </div>
        </section>
  )}
  export default About;
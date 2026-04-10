
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Electronic from "../../public/images/Screenshot 2026-04-04 212619.png";
import Happy from "../../public/images/HappyBirthday3D2.png";
import SoftDrink from "../../public/images/sr.png";

// --- Types ---
interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: { name: string; color: string }[];
  githubUrl: string;
  liveUrl: string;
}

// --- Sample Data ---
const projects: Project[] = [
  {
    id: 'red-dargon-01',
    title: 'RD Electronic Documentation for Myanmar',
    subtitle: 'A project to provide a comprehensive and user-friendly documentation platform for RedDargon products in Myanmar.',
    image: Electronic,
    tags: [
      { name: 'React', color: 'bg-blue-600/20 text-blue-400 border-blue-400/50' },
      { name: 'Tailwind CSS', color: 'bg-green-600/20 text-green-400 border-green-400/50' },
      { name: 'Markdown', color: 'bg-yellow-600/20 text-yellow-500 border-yellow-500/50' },
      { name: 'Gsap.js', color: 'bg-red-600/20 text-red-400 border-red-400/50' },
    ],
    githubUrl: 'https://github.com/kyawzin17/Electronic-web',
    liveUrl: 'https://electronic-web-iota.vercel.app/',
  },
  {
    id: 'happy-birthday',
    title: '3D Happy Birthday - For My Love',
    subtitle: 'A 3D interactive birthday gift for my love, featuring a virtual 3D birthday cake and a message of love.',
    image: Happy,
    tags: [
      { name: 'JavaScript', color: 'bg-yellow-600/20 text-yellow-500 border-yellow-500/50' },
      { name: 'Three.js', color: 'bg-green-600/20 text-green-400 border-green-400/50' },
    ],
    githubUrl: 'https://github.com/kyawzin17/Birthday',
    liveUrl: 'https://kyawzin17.github.io/Birthday/',
  },
  {
    id: 'soft-drink',
    title: 'Lemon Soft Drink Landing Page',
    subtitle: 'A responsive and user-friendly landing page for a lemon soft drink business.',
    image: SoftDrink,
    tags: [
      { name: 'JavaScript', color: 'bg-yellow-600/20 text-yellow-500 border-yellow-500/50' },
      { name: 'Animejs', color: 'bg-red-600/20 text-red-400 border-red-400/50' },
    ],
    githubUrl: 'https://github.com/kyawzin17/Lemon-soft-drink',
    liveUrl: 'https://kyawzin17.github.io/Lemon-soft-drink/',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group bg-[#0d1526]/80 border border-slate-800 rounded-[2rem] p-5 overflow-hidden flex flex-col justify-between backdrop-blur-sm shadow-2xl"
    >
      {/* Project Image Container */}
      <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h5 className="font-semibold font-serif text-main mb-2 leading-tight">
          {project.title}
        </h5>
        <p className="text-muted text-base mb-6 italic">
          {project.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className={`px-3 py-1 rounded-full text-xs font-medium border ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
          </div>
        {/* Actions */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
          <a 
            href={project.liveUrl} 
            className="flex items-center gap-2 text-secondary font-semibold hover:text-main transition-colors"
          >
            View Project <ExternalLink size={16} />
          </a>
          <a 
            href={project.githubUrl} 
            className="flex items-center gap-2 text-muted hover:text-main transition-colors"
          >
            <span className="text-sm font-medium">GitHub</span>
            <FontAwesomeIcon icon={faGithub} className='text-md' />
          </a>
        </div>
    </motion.div>
  );
};

export default function ProjectSection() {
  return (
    <section className="min-h-screen w-full py-20 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="max-w-300 mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-16 gap-6 px-4 py-1 backdrop-blur-lg bg-main/10 rounded-md">
          <div className='w-fit'>
            <h3 className="tracking-tighter text-main font-serif">
              MY <span className="text-secondary ms-2">PROJECTS</span>
            </h3>
          </div>
          
          <div className='flex gap-1 w-fit'>
            <button className='p-2 bg-muted rounded-l-md hover:scale-105 hover:bg-main hover:shadow[0_0_3px_var(--muted)] transition-all duration-100'>
                <ChevronLeft size={22} />
            </button>
            <button className='p-2 bg-muted rounded-r-md hover:scale-105 hover:bg-main hover:shadow[0_0_3px_var(--muted)] transition-all duration-100'>
                <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-20 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 bg-slate-900 border border-slate-700 text-white rounded-2xl hover:border-accent hover:shadow-[0_0_3px_var(--accent)] transition-all font-bold shadow-xl"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
}
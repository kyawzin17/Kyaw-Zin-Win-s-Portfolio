
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Electronic from "../../public/images/Screenshot 2026-04-04 212619.png";
import Happy from "../../public/images/HappyBirthday3D2.png";
import SoftDrink from "../../public/images/sr.png";
import { forwardRef } from 'react';

// --- Data Types ---
interface Tag {
  name: string;
  color: string;
}

interface ProjectProps {
    id: string;
};

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string; // Import လုပ်ထားတဲ့ image variable သို့မဟုတ် path
  tags: Tag[];
  githubUrl: string;
  liveUrl: string;
}

// --- Props ---
const projects: Project[] = [
  {
    id: 'red-dargon-01',
    title: 'RD Electronic',
    subtitle: 'A comprehensive documentation platform for RedDargon products in Myanmar.',
    image: Electronic, // အစားထိုးရန်
    tags: [
      { name: 'React', color: 'bg-blue-600/20 text-blue-400 border-blue-400/50' },
      { name: 'Tailwind', color: 'bg-teal-600/20 text-teal-400 border-teal-400/50' },
      { name: 'Gsap.js', color: 'bg-red-600/20 text-red-400 border-red-400/50' },
    ],
    githubUrl: 'https://github.com/kyawzin17/Electronic-web',
    liveUrl: 'https://rde-mm.com/',
  },
  {
    id: 'happy-birthday',
    title: '3D Happy Birthday',
    subtitle: 'An interactive 3D virtual birthday cake and a personalized message for my love.',
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
    title: 'Lemon Soft Drink',
    subtitle: 'A refreshing and responsive landing page for a beverage business.',
    image: SoftDrink,
    tags: [
      { name: 'JavaScript', color: 'bg-yellow-600/20 text-yellow-500 border-yellow-500/50' },
      { name: 'Gsapjs', color: 'bg-green-600/20 text-green-400 border-green-400/50' },
    ],
    githubUrl: 'https://github.com/kyawzin17/Soft-Drink',
    liveUrl: 'https://soft-drink-iota.vercel.app/',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -15 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#0f172a]/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-4 overflow-hidden"
    >
      {/* Animated Gradient Border on Hover */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Wrapper */}
      <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-5">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-transparent to-transparent" />
        
        {/* Floating Code Icon */}
        <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <Code2 className="w-5 h-5 text-cyan-400" />
        </div>
      </div>

      {/* Project Content */}
      <div className="relative z-10 px-2">
        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h4>
        <p className="text-slate-400 text-sm line-clamp-2 mb-6 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Tags Grid */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-md border font-bold ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors shadow-lg"
          >
            Live Demo <ExternalLink size={16} />
          </a>
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
            title="GitHub Repository"
          >
             <FontAwesomeIcon icon={faGithub} className='text-md' />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection= forwardRef<HTMLElement, ProjectProps>(({id}, ref) => {
  return (
    <section id={id} ref={ref} className="min-h-screen bg-[#020617] py-24 px-6 relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-primary text-xs font-bold tracking-widest uppercase"
          >
            My Creations
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
            FEATURED <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">PROJECTS</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-slate-400 max-w-2xl text-lg">
            တစ်ခုချင်းစီတိုင်းကို စိတ်ကျေနပ်မှုအပြည့်နဲ့ ဖန်တီးထားတဲ့ ကျွန်တော့်ရဲ့ အကောင်းဆုံး ပရောဂျက်များ။
          </motion.p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
})
export default ProjectSection;
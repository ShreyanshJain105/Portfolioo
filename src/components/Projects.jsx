import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const springTransition = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Archive" 
          subtitle="Engineering Portfolio"
        />

        <div className="grid grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              delay={index * 0.1}
              className={`${
                index === 0 ? "col-span-12 lg:col-span-8 h-[500px]" : 
                index === 1 ? "col-span-12 lg:col-span-4 h-[500px]" :
                index === 2 ? "col-span-12 lg:col-span-5 h-[450px]" :
                "col-span-12 lg:col-span-7 h-[450px]"
              }`}
            >
              <motion.div
                whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                transition={springTransition}
                className="glass-card h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group relative flex flex-col border border-white/5 hover:border-primary-500/40"
              >
                {/* Background Visual */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-1000`} />
                <div className="absolute inset-0 bg-zinc-950/40" />

                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 2).map((t) => (
                        <span key={t} className="px-4 py-1.5 rounded-full bg-black/50 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="text-5xl md:text-6xl font-black text-white/10 group-hover:text-primary-500/20 transition-colors">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4">
                      <Link
                        to={`/project/${project.id}`}
                        className="btn-primary py-3 px-8 text-xs uppercase tracking-widest"
                      >
                        Case Study
                      </Link>
                      
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

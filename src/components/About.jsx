import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCounter from "./ui/AnimatedCounter";
import ScrollReveal from "./ui/ScrollReveal";

const stats = [
  { end: 50, suffix: "+", label: "Test Cases" },
  { end: 30, suffix: "+", label: "Bugs Fixed" },
  { end: 5, suffix: "+", label: "Releases" },
  { end: 20, suffix: "%", label: "Quality Inc." },
];

const techStack = [
  "Selenium", "Postman", "Jira", "Chrome DevTools", 
  "Java", "JavaScript", "Python", "Spring Boot", 
  "React.js", "MySQL", "MongoDB", "AWS", "Docker", "Git"
];

export default function About() {
  const springTransition = { type: "spring", stiffness: 100, damping: 20 };

  return (
    <section id="about" className="py-32 relative bg-bg-black overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] aspect-square bg-primary-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[30%] aspect-square bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Identity" subtitle="Technical Narrative" />

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          {/* Left — Visual Artifact */}
          <ScrollReveal direction="left">
            <div className="relative group perspective-1000">
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: -5 }}
                transition={springTransition}
                className="aspect-[4/5] max-w-md mx-auto rounded-[4rem] bg-zinc-950 border border-white/5 flex items-center justify-center overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              >
                <div className="text-center p-12">
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[10rem] mb-12 grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  >
                    🚀
                  </motion.div>
                  <p className="text-zinc-600 font-black text-xs tracking-[0.6em] uppercase">
                    &lt;Architecture /&gt;
                  </p>
                </div>
                
                {/* Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right — Technical Bio */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-[-0.05em]">
                Engineering <br />
                <span className="text-zinc-800">Reliability.</span>
              </h3>
              <div className="space-y-8 text-zinc-400 leading-relaxed text-xl font-medium">
                <p>
                  Final year CS Engineer at Poornima University, obsessively refining the intersection of <span className="text-white font-black italic">Quality</span> and <span className="text-white font-black italic">Code</span>.
                </p>
                <p>
                  As a QA Intern at Zeepty, I&apos;ve engineered robust validation suites that ensure mission-critical systems perform under pressure.
                </p>
                <p>
                  My stack bridges the full lifecycle, from <span className="text-primary-500">Java Spring Boot</span> microservices to <span className="text-primary-500">React.js</span> interfaces, all containerized through <span className="text-primary-500">Docker</span>.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-3">
                {techStack.slice(0, 6).map((tech) => (
                  <span key={tech} className="badge-limitless">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bento-style Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="glass-card p-6 md:p-12 text-center rounded-[2rem] md:rounded-[3rem] border-white/5"
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                  className="tracking-tighter"
                />
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

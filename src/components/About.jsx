import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCounter from "./ui/AnimatedCounter";
import ScrollReveal from "./ui/ScrollReveal";

const stats = [
  { end: 100, suffix: "+", label: "Test Scenarios" },
  { end: 40, suffix: "+", label: "Defects Resolved" },
  { end: 10, suffix: "+", label: "Release Cycles" },
  { end: 99, suffix: "%", label: "Test Accuracy" },
];

const techStack = [
  "Selenium WebDriver", "Postman", "API Testing", "Jira", "Chrome DevTools",
  "Java", "Python", "JavaScript", "Spring Boot",
  "React.js", "MySQL", "Docker", "Git", "STLC / SDLC"
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

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
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
                    className="text-[9rem] mb-10 grayscale opacity-25 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  >
                    ⚡
                  </motion.div>
                  <p className="text-zinc-500 font-black text-xs tracking-[0.5em] uppercase">
                    &lt;Quality Architecture /&gt;
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
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[0.95] tracking-[-0.05em]">
                Engineering <br />
                <span className="text-zinc-600">Reliability &amp; Precision.</span>
              </h3>
              <div className="space-y-6 text-zinc-400 leading-relaxed text-lg font-normal">
                <p>
                  I am a <span className="text-white font-semibold">Software QA Engineer &amp; SDET</span> and <span className="text-white font-semibold">Contract QA Partner</span> dedicated to eliminating software failures before they ever reach production.
                </p>
                <p>
                  Currently serving as an <span className="text-primary-400 font-semibold">Associate Quality Analyst at CRM Landing Software Pvt. Ltd.</span>, I design exhaustive test scenarios, automate regression suites, and validate complex enterprise CRM workflows, RESTful API architectures, and web applications.
                </p>
                <p>
                  Whether working as a <span className="text-zinc-200 font-medium">full-time SDET on a product engineering team</span> or as an <span className="text-zinc-200 font-medium">on-demand QA partner for development agencies &amp; startups</span>, I bring systematic STLC rigor, actionable bug reports, and end-to-end release confidence.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
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
                className="glass-card p-6 md:p-10 text-center rounded-[2rem] md:rounded-[2.5rem] border-white/5"
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

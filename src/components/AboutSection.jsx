import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { useNavigate } from "react-router-dom";

const techStack = [
  "Selenium WebDriver", "Playwright", "Postman", "REST Assured",
  "API Testing", "Jira", "Chrome DevTools", "Java", "JavaScript",
  "SQL", "Docker", "Git", "STLC / SDLC", "Agile/Scrum",
];

const domains = [
  { emoji: "🌐", label: "Web Apps" },
  { emoji: "📱", label: "Mobile" },
  { emoji: "🔗", label: "REST APIs" },
  { emoji: "🤖", label: "AI Agents" },
  { emoji: "🎙️", label: "Voice Agents" },
  { emoji: "💬", label: "Chatbots" },
  { emoji: "🏢", label: "CRM" },
  { emoji: "🛒", label: "E-commerce" },
  { emoji: "💼", label: "Job Portals" },
  { emoji: "📊", label: "SaaS" },
];

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] aspect-square rounded-full blur-[140px] pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About Me" subtitle="Identity" />

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <motion.div
                whileHover={{ rotateY: 8, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="aspect-square max-w-xs mx-auto rounded-[3rem] flex items-center justify-center overflow-hidden perspective-1000"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
                }}
              >
                <div className="text-center p-10">
                  <motion.div
                    animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[7rem] mb-6"
                  >
                    🛡️
                  </motion.div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: "var(--text-muted)" }}>
                    &lt;Quality Architecture /&gt;
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
              </motion.div>

              {/* Domain grid around visual */}
              <div className="mt-8 grid grid-cols-5 gap-2">
                {domains.map((d) => (
                  <div
                    key={d.label}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl text-center transition-all hover:scale-105"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <span className="text-lg">{d.emoji}</span>
                    <span className="text-[8px] font-bold" style={{ color: "var(--text-muted)" }}>{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Bio */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-[1] tracking-[-0.05em]" style={{ color: "var(--text-primary)" }}>
                Engineering{" "}
                <span style={{ color: "var(--text-muted)" }}>Reliability &amp; Precision.</span>
              </h3>

              <div className="space-y-5 leading-relaxed text-base" style={{ color: "var(--text-secondary)" }}>
                <p>
                  I am a <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Software QA Engineer & SDET</span> focused
                  on delivering reliable, scalable, and user-focused software through structured testing and quality engineering.
                </p>
                <p>
                  Currently serving as an <span className="text-purple-400 font-semibold">Associate Quality Analyst at CRM Landing Software Pvt. Ltd.</span>,
                  I design comprehensive test scenarios, validate complex workflows, and drive end-to-end quality assurance.
                </p>
                <p>
                  My experience spans <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>web applications, mobile apps, REST APIs, AI systems, voice agents, chatbots, CRM platforms, e-commerce applications, job portals, and SaaS platforms</span> — communicating quality across all modern technology stacks.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="badge-limitless">{tech}</span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => navigate("/expertise")}
                  className="btn-primary text-sm"
                >
                  View QA Expertise
                </button>
                <button
                  onClick={() => navigate("/experience")}
                  className="btn-secondary text-sm"
                >
                  Experience
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

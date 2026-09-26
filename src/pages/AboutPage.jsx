import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import ScrollReveal from "../components/ui/ScrollReveal";
import { MapPin } from "lucide-react";

const techStack = [
  "Selenium WebDriver", "Playwright", "Postman", "REST Assured",
  "API Testing", "Jira", "Chrome DevTools", "Java", "JavaScript",
  "SQL", "Docker", "Git", "STLC / SDLC", "Agile/Scrum",
];

const domains = [
  { emoji: "🌐", label: "Web Applications" },
  { emoji: "📱", label: "Mobile Applications" },
  { emoji: "🔗", label: "REST APIs" },
  { emoji: "🤖", label: "AI Systems" },
  { emoji: "🎙️", label: "Voice Agents" },
  { emoji: "💬", label: "Chatbots" },
  { emoji: "🏢", label: "CRM Platforms" },
  { emoji: "🛒", label: "E-commerce" },
  { emoji: "💼", label: "Job Portals" },
  { emoji: "☁️", label: "SaaS Platforms" },
];

const values = [
  { emoji: "🎯", title: "Precision", desc: "Every test case is purposeful, covering positive, negative, and edge scenarios." },
  { emoji: "📋", title: "Documentation", desc: "Clear, detailed defect reports with reproduction steps and evidence." },
  { emoji: "🤝", title: "Collaboration", desc: "Working closely with developers and product teams throughout the STLC." },
  { emoji: "🔄", title: "Thoroughness", desc: "Regression testing ensures fixes don't break existing functionality." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-20">
          <p className="section-tag inline-flex mb-4">About Me</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] leading-[1.02]"
            style={{ color: "var(--text-primary)" }}
          >
            Who I Am
          </motion.h1>
        </div>

        {/* Main Bio */}
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          {/* Visual */}
          <div className="lg:col-span-2 flex justify-center">
            <ScrollReveal direction="scale">
              <motion.div
                whileHover={{ rotateY: 8, rotateX: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="relative rounded-[3rem] overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
                  width: "280px",
                  height: "360px",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Shreyansh Jain"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-black text-lg">Shreyansh Jain</p>
                  <p className="text-purple-400 text-xs font-semibold">Associate Quality Analyst</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={10} className="text-zinc-400" />
                    <span className="text-zinc-400 text-[10px]">Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-black mb-6 tracking-tight" style={{ color: "var(--text-primary)" }}>
                Software QA Engineer focused on delivering{" "}
                <span className="gradient-text">reliable, scalable, and user-focused software</span>{" "}
                through structured testing and quality engineering.
              </h2>

              <div className="space-y-4 text-sm leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                <p>
                  I am a <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Software QA Engineer & SDET</span> with hands-on experience testing modern software systems across multiple domains — from traditional web applications to cutting-edge AI-powered voice agents and chatbots.
                </p>
                <p>
                  Currently serving as an <span className="text-purple-400 font-semibold">Associate Quality Analyst at CRM Landing Software Pvt. Ltd.</span>, where I test CRM workflows, AI voice agents, chatbot systems, REST APIs, and more.
                </p>
                <p>
                  I approach quality engineering with precision and thoroughness — every test case is purposeful, every defect report is detailed, and every release is validated systematically.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span key={t} className="badge-limitless">{t}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Domain Experience */}
        <SectionHeading title="Domain Experience" subtitle="What I Test" centered={true} />

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-20">
          {domains.map((d, i) => (
            <ScrollReveal key={d.label} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 rounded-2xl border text-center cursor-default"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="text-3xl mb-2">{d.emoji}</div>
                <p className="text-xs font-bold" style={{ color: "var(--text-secondary)" }}>{d.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* QA Values */}
        <SectionHeading title="My QA Philosophy" subtitle="Core Values" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 rounded-2xl border text-center"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="text-3xl mb-3">{v.emoji}</div>
                <h3 className="font-black text-base mb-2" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <SectionHeading title="Education" subtitle="Academic Background" />

        <ScrollReveal>
          <motion.div
            whileHover={{ y: -4 }}
            className="p-7 rounded-3xl border"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <div className="flex items-start gap-5">
              <span className="text-4xl">🎓</span>
              <div>
                <h3 className="text-xl font-black mb-1" style={{ color: "var(--text-primary)" }}>
                  Bachelor of Technology
                </h3>
                <p className="text-purple-400 font-bold">Computer Science & Engineering</p>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Rajasthan, India</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
}

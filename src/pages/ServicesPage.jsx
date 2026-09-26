import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ScrollReveal from "../components/ui/ScrollReveal";
import { useNavigate } from "react-router-dom";

const services = [
  { emoji: "🧪", label: "Manual Testing", color: "rgba(124,58,237,0.1)", border: "rgba(124,58,237,0.25)", textColor: "#a78bfa" },
  { emoji: "🌐", label: "Web Testing", color: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.25)", textColor: "#60a5fa" },
  { emoji: "📱", label: "Mobile Testing", color: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)", textColor: "#34d399" },
  { emoji: "🔗", label: "API Testing", color: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.25)", textColor: "#22d3ee" },
  { emoji: "🔁", label: "Regression Testing", color: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)", textColor: "#fbbf24" },
  { emoji: "✅", label: "End-to-End Testing", color: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.25)", textColor: "#4ade80" },
  { emoji: "🎨", label: "UI Testing", color: "rgba(168,85,247,0.1)", border: "rgba(168,85,247,0.25)", textColor: "#c084fc" },
  { emoji: "⚙️", label: "Automation Testing", color: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.25)", textColor: "#f87171" },
  { emoji: "🐛", label: "Bug Reporting", color: "rgba(124,58,237,0.1)", border: "rgba(124,58,237,0.25)", textColor: "#a78bfa" },
  { emoji: "📋", label: "Test Case Creation", color: "rgba(59,130,246,0.1)", border: "rgba(59,130,246,0.25)", textColor: "#60a5fa" },
  { emoji: "▶️", label: "Test Execution", color: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.25)", textColor: "#34d399" },
  { emoji: "🔄", label: "Retesting", color: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.25)", textColor: "#22d3ee" },
  { emoji: "💡", label: "QA Consultation", color: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)", textColor: "#fbbf24" },
];

const engagementModels = [
  {
    emoji: "💼",
    title: "Full-Time Position",
    target: "Tech Companies & Startups",
    description: "Available for full-time Software QA Engineer / SDET roles. Bringing complete STLC ownership, systematic testing, and team collaboration.",
    highlight: "Direct Hire / Full-Time",
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.3)",
    textColor: "#a78bfa",
  },
  {
    emoji: "🚀",
    title: "Contract / Project QA",
    target: "SaaS & Product Companies",
    description: "On-demand testing for product launches, feature releases, web applications, or comprehensive bug audits. Sprint or milestone basis.",
    highlight: "Project Basis",
    color: "rgba(6,182,212,0.10)",
    border: "rgba(6,182,212,0.25)",
    textColor: "#22d3ee",
  },
  {
    emoji: "🤝",
    title: "Agency QA Partner",
    target: "Dev & Digital Agencies",
    description: "A reliable QA partner for development agencies wanting rigorous quality gates before client handoffs. Retainer or per-sprint.",
    highlight: "Retainer / Ongoing",
    color: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.25)",
    textColor: "#34d399",
  },
];

const whoIWorkWith = [
  { emoji: "🏢", label: "Software Companies" },
  { emoji: "🚀", label: "Startups" },
  { emoji: "💻", label: "Software Agencies" },
  { emoji: "🌐", label: "SaaS Companies" },
  { emoji: "🏗️", label: "Development Teams" },
  { emoji: "🛒", label: "E-commerce Businesses" },
  { emoji: "🤖", label: "AI Companies" },
  { emoji: "📱", label: "App Development Agencies" },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-20">
          <p className="section-tag inline-flex mb-4">QA Services</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] leading-[1.02] mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Hire Me for
            <br />
            <span className="gradient-text">Quality Engineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Need QA for your project? I provide professional manual testing, API testing, automation, and end-to-end QA services for companies, startups, and development agencies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <button onClick={() => navigate("/contact")} className="btn-primary">
              Hire Me
            </button>
            <a
              href="mailto:shreyanshjainwork12@gmail.com"
              className="btn-secondary"
            >
              Discuss a Project
            </a>
            <a
              href="https://wa.me/918875363677"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <FaWhatsapp size={16} className="text-green-400" /> WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Services Grid */}
        <ScrollReveal>
          <h2 className="text-3xl font-black mb-8 text-center" style={{ color: "var(--text-primary)" }}>
            Services Offered
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-20">
          {services.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-4 rounded-2xl border text-center cursor-default"
                style={{
                  backgroundColor: s.color,
                  borderColor: s.border,
                }}
              >
                <div className="text-2xl mb-2">{s.emoji}</div>
                <p className="text-xs font-bold" style={{ color: s.textColor }}>{s.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Who I Work With */}
        <ScrollReveal>
          <div
            className="p-8 rounded-3xl border mb-16 text-center"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: "var(--text-muted)" }}>
              Who I Work With
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {whoIWorkWith.map((w) => (
                <div key={w.label} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
                  style={{ backgroundColor: "var(--bg-elevated)", border: "1px solid var(--border-color)", color: "var(--text-secondary)" }}>
                  <span>{w.emoji}</span>
                  {w.label}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Engagement Models */}
        <h2 className="text-3xl font-black mb-8 text-center" style={{ color: "var(--text-primary)" }}>
          Engagement Models
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {engagementModels.map((model, i) => (
            <ScrollReveal key={model.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="p-7 rounded-3xl border h-full flex flex-col"
                style={{
                  backgroundColor: model.color,
                  borderColor: model.border,
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl">{model.emoji}</span>
                  <span className="text-[10px] font-black uppercase px-2 py-1 rounded-full"
                    style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}>
                    {model.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-black mb-1" style={{ color: "var(--text-primary)" }}>{model.title}</h3>
                <p className="text-xs font-bold mb-4" style={{ color: model.textColor }}>{model.target}</p>
                <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: "var(--text-secondary)" }}>
                  {model.description}
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full py-3 rounded-xl text-sm font-bold transition-all"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: `1px solid ${model.border}`,
                    color: model.textColor,
                  }}
                >
                  Discuss Opportunity
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal>
          <div
            className="p-10 rounded-3xl border text-center"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, transparent 60%)",
              backgroundColor: "var(--bg-card)",
              borderColor: "rgba(124,58,237,0.25)",
            }}
          >
            <p className="text-4xl mb-4">🤝</p>
            <h2 className="text-3xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              Need QA for Your Project?
            </h2>
            <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
              Whether you're launching a product, running a sprint, or need ongoing QA support — let's talk about how I can help ensure quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate("/contact")} className="btn-primary">
                Contact Me
              </button>
              <a href="mailto:shreyanshjainwork12@gmail.com" className="btn-secondary flex items-center gap-2">
                <Mail size={15} /> Email Me
              </a>
              <a
                href="https://wa.me/918875363677"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FaWhatsapp size={15} className="text-green-400" /> WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

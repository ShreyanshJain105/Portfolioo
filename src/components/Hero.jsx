import { motion } from "framer-motion";
import { FileDown, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const floatingNodes = [
  { icon: "🧪", label: "Test Case", x: "8%", y: "25%", delay: 0 },
  { icon: "🐛", label: "Bug Report", x: "85%", y: "20%", delay: 0.5 },
  { icon: "⚙️", label: "Automation", x: "90%", y: "65%", delay: 1 },
  { icon: "📊", label: "Analytics", x: "5%", y: "70%", delay: 1.5 },
  { icon: "🔗", label: "API Test", x: "50%", y: "5%", delay: 0.8 },
];

export default function Hero() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springTransition = { type: "spring", stiffness: 100, damping: 20, mass: 1 };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{ x: mousePos.x * 20, y: mousePos.y * 20 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-[-15%] left-[-10%] w-[55%] aspect-square rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: mousePos.x * -15, y: mousePos.y * -15 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute bottom-[-10%] right-[-10%] w-[45%] aspect-square rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating QA Nodes */}
        {floatingNodes.map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{
              opacity: { delay: 1 + node.delay, duration: 0.5 },
              scale: { delay: 1 + node.delay, duration: 0.5, type: "spring" },
              y: { delay: 1 + node.delay, duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute hidden lg:flex flex-col items-center gap-1"
            style={{ left: node.x, top: node.y }}
          >
            <div
              className="px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 backdrop-blur-md"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
              }}
            >
              <span>{node.icon}</span>
              <span>{node.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, ...springTransition }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-7"
            >
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide border"
                style={{
                  backgroundColor: "rgba(124,58,237,0.08)",
                  borderColor: "rgba(124,58,237,0.25)",
                  color: "#a78bfa",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Full-Time Roles
              </div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide border"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-muted)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Freelance QA Partner
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black mb-5 leading-[1.02] tracking-[-0.05em]"
              style={{ color: "var(--text-primary)" }}
            >
              Software QA{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">Engineer & SDET</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, ...springTransition }}
              className="text-lg md:text-xl mb-6 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Testing across{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                <TypeAnimation
                  sequence={[
                    "Web Applications", 2000,
                    "Mobile Apps", 2000,
                    "REST APIs", 2000,
                    "AI Voice Agents", 2000,
                    "Chatbots & AI", 2000,
                    "CRM Platforms", 2000,
                    "E-commerce Apps", 2000,
                    "Recruitment Portals", 2000,
                  ]}
                  repeat={Infinity}
                  speed={50}
                />
              </span>
            </motion.p>

            {/* Domain Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, ...springTransition }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {["Web", "Mobile", "APIs", "AI Agents", "Voice Agents", "Chatbots", "CRM", "E-commerce", "Job Portals"].map((d) => (
                <span key={d} className="badge-qa">{d}</span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ...springTransition }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/domains")}
                className="btn-primary text-sm"
              >
                View QA Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/case-studies")}
                className="btn-secondary text-sm"
              >
                Case Studies
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download="Shreyansh_Jain_QA_Resume.pdf"
                className="btn-secondary text-sm flex items-center gap-2"
              >
                <FileDown size={16} />
                Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                Hire Me
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-purple-400" />
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex justify-center lg:justify-start items-center gap-5"
            >
              <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                Connect:
              </span>
              {[
                { icon: FaLinkedin, href: "https://linkedin.com/in/shreyanshjain1206", label: "LinkedIn" },
                { icon: FaGithub, href: "https://github.com/ShreyanshJain105", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-125"
                  style={{ color: "var(--text-muted)" }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center lg:items-end"
          >
            <div className="relative max-w-sm w-full">
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-[3.5rem] blur-[80px] animate-pulse"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)" }}
              />

              {/* Profile Card */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="relative rounded-[3rem] overflow-hidden border perspective-1000"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                  aspectRatio: "4/5",
                  maxHeight: "480px",
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Shreyansh Jain - Software QA Engineer"
                  className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Card Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-black text-lg tracking-tight">Shreyansh Jain</p>
                  <p className="text-purple-400 text-xs font-semibold">Associate Quality Analyst</p>
                  <p className="text-zinc-500 text-[11px] mt-0.5">CRM Landing Software Pvt. Ltd.</p>
                </div>
              </motion.div>

              {/* Floating Badge — Quality Gate */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -left-5 px-4 py-3 rounded-2xl backdrop-blur-md z-20 border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "rgba(124,58,237,0.3)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(124,58,237,0.15)" }}>
                    <ShieldCheck size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.25em]" style={{ color: "var(--text-muted)" }}>QA Standard</p>
                    <p className="text-sm font-black" style={{ color: "var(--text-primary)" }}>Zero-Defect Goal</p>
                  </div>
                </div>
              </motion.div>

              {/* Domain Count Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -right-5 px-4 py-3 rounded-2xl backdrop-blur-md z-20 border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "rgba(6,182,212,0.25)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-cyan-400" />
                  <div>
                    <p className="text-sm font-black" style={{ color: "var(--text-primary)" }}>12+ Domains</p>
                    <p className="text-[9px]" style={{ color: "var(--text-muted)" }}>Tested & Validated</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

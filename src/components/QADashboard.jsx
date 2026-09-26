import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

const metrics = [
  { label: "Test Cases", icon: "📋", color: "rgba(124,58,237,0.15)", border: "rgba(124,58,237,0.3)", textColor: "#a78bfa", desc: "Designed & Documented" },
  { label: "Executed", icon: "▶️", color: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.25)", textColor: "#60a5fa", desc: "Across Release Cycles" },
  { label: "Passed", icon: "✅", color: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.25)", textColor: "#34d399", desc: "Test Validation" },
  { label: "Failed", icon: "❌", color: "rgba(239,68,68,0.10)", border: "rgba(239,68,68,0.2)", textColor: "#f87171", desc: "Defects Found" },
  { label: "Blocked", icon: "🚫", color: "rgba(245,158,11,0.10)", border: "rgba(245,158,11,0.2)", textColor: "#fbbf24", desc: "Environment Issues" },
  { label: "Bugs Found", icon: "🐛", color: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.25)", textColor: "#f87171", desc: "Total Defects Logged" },
  { label: "Bugs Fixed", icon: "🔧", color: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.25)", textColor: "#4ade80", desc: "Verified & Closed" },
  { label: "Reopened", icon: "🔁", color: "rgba(168,85,247,0.10)", border: "rgba(168,85,247,0.2)", textColor: "#c084fc", desc: "Incomplete Fixes" },
];

export default function QADashboard() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(124,58,237,0.2), transparent)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="QA Dashboard" subtitle="Quality Metrics" />

        <p className="text-center text-sm mb-14 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
          Visual representation of QA metrics tracked across testing cycles. Actual numbers vary per project and release.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 rounded-2xl border text-center"
                style={{
                  backgroundColor: m.color,
                  borderColor: m.border,
                }}
              >
                <div className="text-3xl mb-3">{m.icon}</div>
                <p className="text-lg font-black mb-1" style={{ color: m.textColor }}>—</p>
                <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>{m.label}</p>
                <p className="text-[10px] mt-1" style={{ color: "var(--text-muted)" }}>{m.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testing Lifecycle Visual */}
        <ScrollReveal>
          <div
            className="p-8 rounded-3xl border"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <p className="text-center text-xs font-black uppercase tracking-widest mb-8" style={{ color: "var(--text-muted)" }}>
              Defect Lifecycle
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2">
              {[
                { label: "New", color: "#60a5fa" },
                { label: "→", color: "var(--text-faint)" },
                { label: "In Progress", color: "#fbbf24" },
                { label: "→", color: "var(--text-faint)" },
                { label: "Fixed", color: "#34d399" },
                { label: "→", color: "var(--text-faint)" },
                { label: "Retest", color: "#a78bfa" },
                { label: "→", color: "var(--text-faint)" },
                { label: "Closed", color: "#4ade80" },
                { label: "or", color: "var(--text-faint)" },
                { label: "Reopened", color: "#f87171" },
              ].map((item, i) => (
                <span
                  key={i}
                  className="text-sm font-bold px-3 py-1.5 rounded-xl"
                  style={{
                    color: item.color,
                    backgroundColor: item.label === "→" || item.label === "or" ? "transparent" : "rgba(0,0,0,0.05)",
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

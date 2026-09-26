import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading";
import ScrollReveal from "../components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

const categories = [
  {
    id: "testing",
    emoji: "🧪",
    title: "Testing Types",
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.3)",
    textColor: "#a78bfa",
    items: [
      "Functional Testing", "Regression Testing", "Smoke Testing",
      "Sanity Testing", "End-to-End Testing", "Integration Testing",
      "System Testing", "UI Testing", "Usability Testing",
      "Exploratory Testing", "Negative Testing", "Compatibility Testing",
      "Responsive Testing", "Mobile Testing", "Security Testing",
      "Database Testing",
    ],
  },
  {
    id: "api",
    emoji: "🔗",
    title: "API Testing",
    color: "rgba(6,182,212,0.10)",
    border: "rgba(6,182,212,0.25)",
    textColor: "#22d3ee",
    items: [
      "REST API Testing", "Postman", "API Validation",
      "Status Code Validation", "Request / Response Validation",
      "Authentication Testing", "Error Handling",
      "Negative API Testing", "Payload Schema Validation",
      "Token Lifecycle Testing",
    ],
  },
  {
    id: "automation",
    emoji: "⚙️",
    title: "Automation",
    color: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.25)",
    textColor: "#34d399",
    items: [
      "Selenium WebDriver", "Playwright",
      "Java for Automation", "JavaScript",
      "REST Assured", "CI/CD Integration",
      "Automated Regression", "Test Framework Design",
      "Data-Driven Testing", "Page Object Model",
    ],
  },
  {
    id: "tools",
    emoji: "🛠️",
    title: "Tools & Stack",
    color: "rgba(245,158,11,0.10)",
    border: "rgba(245,158,11,0.25)",
    textColor: "#fbbf24",
    items: [
      "Jira", "Git", "GitHub", "Jenkins",
      "Docker", "Chrome DevTools",
      "SQL", "Postman", "VS Code",
      "IntelliJ IDEA",
    ],
  },
];

const testingApproach = [
  { icon: "📋", label: "Requirements Review", desc: "Analyze BRDs, user stories, and AC to identify testable requirements" },
  { icon: "✍️", label: "Test Case Design", desc: "Write positive, negative, edge, and boundary test cases" },
  { icon: "▶️", label: "Test Execution", desc: "Execute systematically, log results, capture evidence" },
  { icon: "🐛", label: "Defect Reporting", desc: "Document bugs with clear steps, severity, and priority" },
  { icon: "🔄", label: "Retesting", desc: "Verify fixes and validate related flows" },
  { icon: "🔁", label: "Regression", desc: "Ensure no regression in existing functionality" },
];

export default function ExpertisePage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-tag inline-flex mb-4">QA Expertise</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] leading-[1.02]"
            style={{ color: "var(--text-primary)" }}
          >
            Quality Engineering
            <br />
            <span className="gradient-text">Capabilities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            A comprehensive overview of QA testing methods, automation skills, API expertise, and tools I use to deliver quality software.
          </motion.p>
        </div>

        {/* Capability Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="p-7 rounded-3xl border h-full"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: cat.color, border: `1px solid ${cat.border}` }}
                  >
                    {cat.emoji}
                  </div>
                  <h2 className="text-xl font-black" style={{ color: "var(--text-primary)" }}>
                    {cat.title}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-default transition-all"
                      style={{
                        backgroundColor: cat.color,
                        border: `1px solid ${cat.border}`,
                        color: cat.textColor,
                      }}
                    >
                      <CheckCircle2 size={11} />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testing Approach */}
        <SectionHeading title="Testing Approach" subtitle="Methodology" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {testingApproach.map((step, i) => (
            <ScrollReveal key={step.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="font-black text-base mb-2" style={{ color: "var(--text-primary)" }}>
                  {step.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {step.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* STLC Banner */}
        <ScrollReveal>
          <div
            className="p-8 rounded-3xl border text-center"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 60%)",
              borderColor: "rgba(124,58,237,0.2)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <p className="text-4xl mb-4">🏗️</p>
            <h3 className="text-2xl font-black mb-3" style={{ color: "var(--text-primary)" }}>
              Full STLC Coverage
            </h3>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              From requirement analysis to production release, I apply structured Software Testing Life Cycle (STLC) practices with SDLC integration, Agile/Scrum compatibility, and systematic defect lifecycle management.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {["STLC", "SDLC", "Agile", "Scrum", "Defect Lifecycle", "Test Planning", "Test Design", "Test Execution"].map((t) => (
                <span key={t} className="badge-qa">{t}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

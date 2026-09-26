import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

const steps = [
  {
    id: 1,
    icon: "📋",
    label: "Requirement Analysis",
    color: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.3)",
    textColor: "#a78bfa",
    detail: "Review BRDs, user stories, acceptance criteria, and wireframes. Identify testable requirements and ambiguities. Collaborate with product managers and developers to clarify scope.",
  },
  {
    id: 2,
    icon: "📐",
    label: "Test Planning",
    color: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.25)",
    textColor: "#60a5fa",
    detail: "Define testing strategy, scope, entry/exit criteria, resource allocation, test environment needs, and timelines. Create the Test Plan document outlining all QA activities.",
  },
  {
    id: 3,
    icon: "✍️",
    label: "Test Case Design",
    color: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.25)",
    textColor: "#22d3ee",
    detail: "Write detailed test cases covering positive, negative, boundary, and edge cases. Organize into test suites. Map to requirements for traceability. Review for completeness.",
  },
  {
    id: 4,
    icon: "▶️",
    label: "Test Execution",
    color: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.25)",
    textColor: "#34d399",
    detail: "Execute test cases systematically across environments. Log actual vs expected results. Mark test statuses: Pass/Fail/Blocked. Capture screenshots and evidence for failures.",
  },
  {
    id: 5,
    icon: "🐛",
    label: "Bug Reporting",
    color: "rgba(239,68,68,0.12)",
    border: "rgba(239,68,68,0.25)",
    textColor: "#f87171",
    detail: "Document defects with bug ID, title, severity, priority, environment, reproduction steps, expected vs actual results, and attachments. Log in Jira with proper severity tagging.",
  },
  {
    id: 6,
    icon: "🔧",
    label: "Developer Fix",
    color: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.25)",
    textColor: "#fbbf24",
    detail: "Developer analyses the bug report, investigates root cause, implements the fix, and marks the ticket as resolved. May request clarification or additional test cases.",
  },
  {
    id: 7,
    icon: "🔄",
    label: "Retesting",
    color: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.25)",
    textColor: "#c084fc",
    detail: "Re-execute failed test cases on the fixed build. Verify the exact reproduction scenario no longer occurs. Validate edge cases and related scenarios. Update bug status.",
  },
  {
    id: 8,
    icon: "🔁",
    label: "Regression Testing",
    color: "rgba(34,197,94,0.12)",
    border: "rgba(34,197,94,0.25)",
    textColor: "#4ade80",
    detail: "Execute full or selective regression suite to ensure no previously working functionality was broken by the fix. Prioritize high-risk areas and core workflows.",
  },
  {
    id: 9,
    icon: "✅",
    label: "Release Validation",
    color: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.35)",
    textColor: "#a78bfa",
    detail: "Final smoke and sanity testing on production-like environment. Sign-off on release readiness. Document test summary report with pass rates, defect counts, and risk assessment.",
  },
];

export default function QAWorkflow() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="QA Workflow"
          subtitle="Interactive Process"
        />

        <div className="space-y-3">
          {steps.map((step, index) => (
            <ScrollReveal key={step.id} delay={index * 0.04}>
              <div>
                <motion.button
                  onClick={() => setExpanded(expanded === step.id ? null : step.id)}
                  className="w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-5"
                  style={{
                    backgroundColor: expanded === step.id ? step.color : "var(--bg-card)",
                    borderColor: expanded === step.id ? step.border : "var(--border-subtle)",
                  }}
                  whileHover={{ scale: 1.005 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: step.color, border: `1px solid ${step.border}` }}
                  >
                    {step.icon}
                  </div>

                  <div className="flex-grow flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className="text-[10px] font-black uppercase tracking-widest"
                        style={{ color: step.textColor }}
                      >
                        Step {step.id.toString().padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
                        {step.label}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === step.id ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={16} style={{ color: "var(--text-muted)" }} />
                    </motion.div>
                  </div>
                </motion.button>

                <AnimatePresence>
                  {expanded === step.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 pb-5 pt-4 mx-2 rounded-b-2xl text-sm leading-relaxed"
                        style={{
                          backgroundColor: step.color,
                          color: "var(--text-secondary)",
                          borderLeft: `2px solid ${step.border}`,
                          borderRight: `2px solid ${step.border}`,
                          borderBottom: `2px solid ${step.border}`,
                        }}
                      >
                        {step.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-0.5 h-5 bg-gradient-to-b from-purple-600/40 to-transparent" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

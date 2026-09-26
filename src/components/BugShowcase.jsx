import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";

const bugReports = [
  {
    id: "BUG-001",
    title: "Voice agent fails to detect intent when user speaks with background noise",
    severity: "critical",
    priority: "High",
    environment: "Production · AI Voice Module",
    status: "fixed",
    steps: [
      "Open voice agent in a noisy environment simulation",
      'Say "Book an appointment for tomorrow at 3 PM"',
      "Wait for AI response",
    ],
    expected: "Agent recognizes intent and confirms appointment booking",
    actual: "Agent returns generic fallback: 'I didn't understand that, please try again'",
    domain: "AI Voice Agents",
  },
  {
    id: "BUG-002",
    title: "CRM lead status does not update in real-time after API sync",
    severity: "high",
    priority: "High",
    environment: "Staging · CRM Dashboard",
    status: "open",
    steps: [
      "Create a new lead in CRM",
      "Trigger status update via API POST request",
      "Observe dashboard without refreshing",
    ],
    expected: "Lead status updates to 'Qualified' without page refresh",
    actual: "Status remains 'New' until manual page refresh",
    domain: "CRM",
  },
  {
    id: "BUG-003",
    title: "Checkout total incorrect when applying 20% discount on cart",
    severity: "critical",
    priority: "High",
    environment: "Production · E-commerce Checkout",
    status: "reopened",
    steps: [
      "Add 3 items totaling ₹5000 to cart",
      'Apply discount code "SAVE20"',
      "Proceed to checkout",
    ],
    expected: "Total shows ₹4000 (20% discount applied)",
    actual: "Total shows ₹4500 (only 10% discount applied — incorrect calculation)",
    domain: "E-commerce",
  },
  {
    id: "BUG-004",
    title: "Chatbot loses conversation context after 3 consecutive messages",
    severity: "high",
    priority: "Medium",
    environment: "QA · Chatbot Module",
    status: "fixed",
    steps: [
      'Send message: "I want to apply for a job"',
      'Send: "Software Engineer position"',
      'Send: "I have 3 years of experience"',
      'Send: "What documents do I need?"',
    ],
    expected: "Bot remembers job context and asks for relevant documents",
    actual: "Bot resets to initial state: 'Hi, how can I help you today?'",
    domain: "Chatbots",
  },
  {
    id: "BUG-005",
    title: "Mobile app crashes on Android 12 when opening PDF resume",
    severity: "critical",
    priority: "High",
    environment: "Prod · Android 12 / Pixel 6",
    status: "open",
    steps: [
      "Login to job portal app on Android 12",
      "Navigate to profile > Resume section",
      "Tap 'View Resume' on an uploaded PDF",
    ],
    expected: "PDF opens in in-app viewer",
    actual: "App crashes immediately. Error in logcat: NullPointerException in PDFRenderer",
    domain: "Mobile",
  },
  {
    id: "BUG-006",
    title: "API returns 200 OK for invalid authentication token",
    severity: "high",
    priority: "High",
    environment: "QA · Auth API",
    status: "fixed",
    steps: [
      "Generate an expired JWT token",
      "Send GET /api/user/profile with expired token",
      "Observe response",
    ],
    expected: "API returns 401 Unauthorized with error message",
    actual: "API returns 200 OK with full user data — security vulnerability",
    domain: "APIs",
  },
  {
    id: "BUG-007",
    title: "Job search filter 'Remote' does not exclude on-site listings",
    severity: "medium",
    priority: "Medium",
    environment: "Staging · Job Portal",
    status: "open",
    steps: [
      "Go to job search page",
      'Apply filter: "Work Type = Remote"',
      "Scroll through results",
    ],
    expected: "Only remote jobs displayed",
    actual: "On-site and hybrid jobs still appear in filtered results",
    domain: "Job Portals",
  },
  {
    id: "BUG-008",
    title: "Dashboard metric count mismatches between UI and API response",
    severity: "medium",
    priority: "Medium",
    environment: "QA · Analytics Dashboard",
    status: "fixed",
    steps: [
      "Open CRM dashboard",
      "Note 'Total Leads Today' = 42",
      "Call GET /api/leads?date=today",
    ],
    expected: "API returns 42 records, matching dashboard",
    actual: "API returns 38 records — 4 leads missing from UI count",
    domain: "CRM",
  },
];

const filters = ["All", "Critical", "High", "Medium", "Low", "Fixed", "Open", "Reopened"];

const severityStyles = {
  critical: "bug-critical",
  high: "bug-high",
  medium: "bug-medium",
  low: "bug-low",
};

const statusStyles = {
  fixed: "bug-fixed",
  open: "bug-open",
  reopened: "bug-reopened",
};

export default function BugShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedBug, setExpandedBug] = useState(null);

  const filtered = bugReports.filter((bug) => {
    if (activeFilter === "All") return true;
    const f = activeFilter.toLowerCase();
    return bug.severity === f || bug.status === f;
  });

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Bug Report Showcase"
          subtitle="Defect Documentation"
        />

        <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
          Realistic anonymized bug reports demonstrating professional defect documentation, severity classification, and clear reproduction steps.
        </p>

        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Filter size={14} style={{ color: "var(--text-muted)" }} className="self-center mr-1" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`filter-pill ${activeFilter === f ? "active" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          <AnimatePresence>
            {filtered.map((bug, index) => (
              <motion.div
                key={bug.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
              >
                <div
                  className="bug-card cursor-pointer"
                  onClick={() => setExpandedBug(expandedBug === bug.id ? null : bug.id)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: "var(--bg-elevated)",
                          color: "var(--text-muted)",
                          border: "1px solid var(--border-color)",
                        }}
                      >
                        {bug.id}
                      </span>
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${severityStyles[bug.severity]}`}>
                        {bug.severity}
                      </span>
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex-shrink-0 ${statusStyles[bug.status]}`}>
                      {bug.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold mb-2 leading-snug" style={{ color: "var(--text-primary)" }}>
                    {bug.title}
                  </h4>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{bug.environment}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full" style={{
                      backgroundColor: "rgba(124,58,237,0.1)",
                      color: "#a78bfa",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}>
                      {bug.domain}
                    </span>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedBug === bug.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 space-y-3 text-xs" style={{
                          borderTop: "1px solid var(--border-subtle)",
                          color: "var(--text-secondary)",
                        }}>
                          <div>
                            <p className="font-bold uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>Steps to Reproduce</p>
                            <ol className="space-y-1">
                              {bug.steps.map((step, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="text-purple-400 font-bold flex-shrink-0">{i + 1}.</span>
                                  {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                          <div>
                            <p className="font-bold uppercase tracking-wider mb-1" style={{ color: "#34d399" }}>✓ Expected</p>
                            <p>{bug.expected}</p>
                          </div>
                          <div>
                            <p className="font-bold uppercase tracking-wider mb-1" style={{ color: "#f87171" }}>✗ Actual</p>
                            <p>{bug.actual}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="text-[10px] mt-3" style={{ color: "var(--text-faint)" }}>
                    Click to {expandedBug === bug.id ? "collapse" : "expand"} details
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

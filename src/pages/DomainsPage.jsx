import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

const domains = [
  {
    id: "ai-voice",
    num: "01",
    emoji: "🎙️",
    title: "AI Voice Agents",
    description: "Testing conversational AI voice systems for speech recognition accuracy, intent detection, and call flow integrity.",
    testing: ["Conversation Flow Testing", "Intent Recognition", "Speech Understanding", "Context Handling", "Call Transfer Testing", "Appointment Booking Flows"],
    workflows: ["Customer calls → Agent responds → Intent detected → Business logic → CRM sync", "Silence handling, interruption, abusive intent classification"],
    tools: ["Postman", "Jira", "Chrome DevTools", "Manual Testing"],
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.3)",
    textColor: "#a78bfa",
    accent: "#7c3aed",
  },
  {
    id: "chatbots",
    num: "02",
    emoji: "💬",
    title: "Chatbots & Conversational AI",
    description: "QA testing for AI chatbots including context retention, duplicate response detection, and intent accuracy validation.",
    testing: ["Conversation Flow", "Context Retention", "Context Switching", "Duplicate Response Detection", "AI Response Accuracy", "Authentication Flow"],
    workflows: ["User message → Intent detection → AI response → Context carry-forward", "Timeout handling, error scenarios, candidate filtering flows"],
    tools: ["Postman", "Jira", "Manual Testing", "API Testing"],
    color: "rgba(6,182,212,0.10)",
    border: "rgba(6,182,212,0.25)",
    textColor: "#22d3ee",
    accent: "#06b6d4",
  },
  {
    id: "crm",
    num: "03",
    emoji: "🏢",
    title: "CRM Platforms",
    description: "End-to-end testing of CRM systems including lead management, workflow automation, AI insights, and data synchronization.",
    testing: ["Lead Management", "Customer Profiles", "Filters & Search", "Role/Permission Testing", "Email & WhatsApp Integration", "Dashboard Validation"],
    workflows: ["Lead created → Qualified → Follow-up → Converted → Dashboard update", "AI insights validation, data sync, notification triggers"],
    tools: ["Postman", "Jira", "SQL", "Chrome DevTools", "Manual Testing"],
    color: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.25)",
    textColor: "#34d399",
    accent: "#10b981",
  },
  {
    id: "ecommerce",
    num: "04",
    emoji: "🛒",
    title: "E-commerce Applications",
    description: "Comprehensive QA across product listings, cart, checkout flows, payment processing, and order management.",
    testing: ["Product Listing & Search", "Cart & Quantity", "Checkout Flow", "Payment Testing", "Order Management", "Inventory Sync"],
    workflows: ["Browse → Search → Add to Cart → Checkout → Payment → Order → Notification", "Discount codes, inventory deductions, refund flows"],
    tools: ["Postman", "Jira", "Chrome DevTools", "Manual Testing", "SQL"],
    color: "rgba(245,158,11,0.10)",
    border: "rgba(245,158,11,0.25)",
    textColor: "#fbbf24",
    accent: "#f59e0b",
  },
  {
    id: "recruitment",
    num: "05",
    emoji: "💼",
    title: "Job Portals & Recruitment",
    description: "Testing candidate portals, recruiter dashboards, AI screening, and WhatsApp-based recruitment automation.",
    testing: ["Candidate Registration & Login", "Job Search & Application", "AI Assessment Testing", "Recruiter Dashboard", "AI Screening Flows", "WhatsApp Integration"],
    workflows: ["Candidate registers → Applies → AI screens → Recruiter reviews → Interview", "OTP, resume upload, AI questions, context switching"],
    tools: ["Postman", "Jira", "Manual Testing", "API Testing", "Chrome DevTools"],
    color: "rgba(168,85,247,0.10)",
    border: "rgba(168,85,247,0.25)",
    textColor: "#c084fc",
    accent: "#a855f7",
  },
  {
    id: "web",
    num: "06",
    emoji: "🌐",
    title: "Web Applications",
    description: "Full-cycle functional, regression, UI, and compatibility testing across modern web applications.",
    testing: ["Functional Testing", "Cross-Browser Testing", "Responsive Testing", "UI/UX Validation", "Form Validation", "Navigation Testing"],
    workflows: ["User login → Core features → Edge cases → Error states → Regression suite", "Multi-browser, device compatibility, accessibility"],
    tools: ["Selenium", "Chrome DevTools", "Jira", "Manual Testing", "Postman"],
    color: "rgba(59,130,246,0.10)",
    border: "rgba(59,130,246,0.25)",
    textColor: "#60a5fa",
    accent: "#3b82f6",
  },
  {
    id: "mobile",
    num: "07",
    emoji: "📱",
    title: "Mobile Applications",
    description: "Testing Android and iOS applications for functionality, performance, device compatibility, and user experience.",
    testing: ["Android Testing", "UI & Navigation", "Permission Testing", "Network Conditions", "Orientation Testing", "Push Notifications"],
    workflows: ["Install → Onboard → Core flow → Edge cases → Device matrix testing", "Deep links, session handling, background/foreground"],
    tools: ["Manual Testing", "Chrome DevTools", "Jira", "ADB", "Postman"],
    color: "rgba(239,68,68,0.10)",
    border: "rgba(239,68,68,0.25)",
    textColor: "#f87171",
    accent: "#ef4444",
  },
  {
    id: "apis",
    num: "08",
    emoji: "🔗",
    title: "REST APIs",
    description: "Comprehensive API validation including endpoints, authentication, payload schema, status codes, and error handling.",
    testing: ["Endpoint Validation", "Status Code Testing", "Auth & Token Testing", "Payload Schema", "Error Handling", "Negative API Testing"],
    workflows: ["Request → Auth validation → Response schema → Error cases → Edge cases", "JWT, OAuth, API key testing, rate limiting"],
    tools: ["Postman", "REST Assured", "Jira", "Chrome DevTools"],
    color: "rgba(34,197,94,0.10)",
    border: "rgba(34,197,94,0.25)",
    textColor: "#4ade80",
    accent: "#22c55e",
  },
  {
    id: "dashboards",
    num: "09",
    emoji: "📊",
    title: "Dashboards & Analytics",
    description: "Testing data accuracy, metric synchronization, filter performance, and visual dashboard components.",
    testing: ["Data Accuracy", "Metric Sync Validation", "Filter Testing", "Chart Rendering", "Export Functions", "Real-time Updates"],
    workflows: ["Data input → Processing → Dashboard display → API validation → Export", "Cross-validate UI values against API responses and DB"],
    tools: ["SQL", "Postman", "Jira", "Chrome DevTools", "Manual Testing"],
    color: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.25)",
    textColor: "#a78bfa",
    accent: "#7c3aed",
  },
  {
    id: "ai-apps",
    num: "10",
    emoji: "🤖",
    title: "AI-Powered Applications",
    description: "QA for AI-driven features including accuracy validation, hallucination detection, and AI response quality testing.",
    testing: ["AI Response Accuracy", "Hallucination Detection", "Edge Case Inputs", "Negative Scenarios", "Context Handling", "Fallback Testing"],
    workflows: ["Input prompt → AI processing → Response → Accuracy check → Edge case matrix", "Abusive inputs, off-topic queries, boundary conditions"],
    tools: ["Postman", "Manual Testing", "Jira", "API Testing"],
    color: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.3)",
    textColor: "#22d3ee",
    accent: "#06b6d4",
  },
  {
    id: "saas",
    num: "11",
    emoji: "☁️",
    title: "SaaS Platforms",
    description: "Multi-tenant SaaS testing covering subscription flows, role management, integrations, and data isolation.",
    testing: ["Multi-tenant Testing", "Subscription Flows", "Role-based Access", "API Integrations", "Data Isolation", "Onboarding Flows"],
    workflows: ["Signup → Onboard → Core features → Admin panel → Integration → Billing", "Tenant isolation, permission boundaries, API limits"],
    tools: ["Postman", "Jira", "SQL", "Manual Testing", "Chrome DevTools"],
    color: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.25)",
    textColor: "#34d399",
    accent: "#10b981",
  },
  {
    id: "enterprise",
    num: "12",
    emoji: "🏗️",
    title: "Enterprise Applications",
    description: "Large-scale enterprise software QA including workflow automation, complex integrations, and compliance validation.",
    testing: ["Workflow Automation", "Complex Integrations", "Role & Permission Testing", "Data Validation", "Performance Checks", "Compliance Testing"],
    workflows: ["Enterprise user → Workflow trigger → Integration sync → Approval chain → Audit trail", "Multi-role scenarios, bulk operations, audit logs"],
    tools: ["Jira", "SQL", "Postman", "Manual Testing", "Selenium"],
    color: "rgba(245,158,11,0.10)",
    border: "rgba(245,158,11,0.25)",
    textColor: "#fbbf24",
    accent: "#f59e0b",
  },
];

function DomainModal({ domain, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        className="max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-8"
        style={{
          backgroundColor: "var(--bg-card)",
          border: `1px solid ${domain.border}`,
          boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{domain.emoji}</span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest" style={{ color: domain.textColor }}>
                Domain {domain.num}
              </p>
              <h2 className="text-2xl font-black" style={{ color: "var(--text-primary)" }}>
                {domain.title}
              </h2>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl transition-colors" style={{ color: "var(--text-muted)" }}>
            <X size={20} />
          </button>
        </div>

        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
          {domain.description}
        </p>

        <div className="space-y-5">
          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: domain.textColor }}>
              Testing Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {domain.testing.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-xl text-xs font-semibold"
                  style={{ backgroundColor: domain.color, border: `1px solid ${domain.border}`, color: domain.textColor }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
              Workflows Tested
            </p>
            {domain.workflows.map((w, i) => (
              <p key={i} className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
                → {w}
              </p>
            ))}
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
              Tools Used
            </p>
            <div className="flex flex-wrap gap-2">
              {domain.tools.map((t) => (
                <span key={t} className="badge-qa">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DomainsPage() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: "var(--bg-main)" }}>
      {selectedDomain && (
        <AnimatePresence>
          <DomainModal domain={selectedDomain} onClose={() => setSelectedDomain(null)} />
        </AnimatePresence>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-tag inline-flex mb-4">Testing Domains</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] leading-[1.02]"
            style={{ color: "var(--text-primary)" }}
          >
            What I Test
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Quality engineering experience across 12 specialized domains. Click any card to explore testing areas, workflows, and tools.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {domains.map((domain, index) => (
            <ScrollReveal key={domain.id} delay={index * 0.05}>
              <motion.div
                whileHover={{
                  y: -8,
                  rotateX: -2,
                  rotateY: 2,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedDomain(domain)}
                className="domain-card p-6 rounded-2xl border cursor-pointer h-full"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  perspective: "1000px",
                }}
              >
                {/* Number */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-4xl font-black tracking-tighter"
                    style={{ color: "var(--bg-elevated)", WebkitTextStroke: `1px ${domain.border}` }}
                  >
                    {domain.num}
                  </span>
                  <span className="text-2xl">{domain.emoji}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-black mb-2 leading-tight" style={{ color: "var(--text-primary)" }}>
                  {domain.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                  {domain.description}
                </p>

                {/* Top testing tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {domain.testing.slice(0, 3).map((t) => (
                    <span key={t} className="text-[9px] px-2 py-0.5 rounded-full font-bold"
                      style={{ backgroundColor: domain.color, color: domain.textColor, border: `1px solid ${domain.border}` }}>
                      {t}
                    </span>
                  ))}
                  {domain.testing.length > 3 && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full font-bold" style={{ color: "var(--text-muted)", backgroundColor: "var(--bg-elevated)" }}>
                      +{domain.testing.length - 3}
                    </span>
                  )}
                </div>

                <button
                  className="flex items-center gap-1.5 text-xs font-bold group"
                  style={{ color: domain.textColor }}
                >
                  <span>Explore Domain</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { useNavigate } from "react-router-dom";

const services = [
  {
    emoji: "🧪",
    title: "Manual & Functional Testing",
    badge: "Web & Mobile",
    description: "Exhaustive exploratory and functional test execution across user journeys, business logic, cross-browser environments, and responsive mobile interfaces.",
    features: [
      "Test Scenario & Test Case Design",
      "Cross-Browser & Multi-Device Testing",
      "UI/UX & Usability Validation",
      "Defect Lifecycle & Severity Tagging",
    ],
    accent: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    emoji: "⚙️",
    title: "Test Automation & SDET",
    badge: "Automation",
    description: "Building reliable, data-driven automation suites using Selenium, Playwright, and REST Assured to eliminate human error and accelerate release cycles.",
    features: [
      "Selenium & Playwright Frameworks",
      "Automated Regression Suites",
      "CI/CD Quality Gate Integration",
      "Execution Reports & Failure Analysis",
    ],
    accent: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    emoji: "🔗",
    title: "API & Backend Validation",
    badge: "REST APIs",
    description: "Deep-dive validation of RESTful endpoints, authentication, schema compliance, payload validation, and error handling using Postman and REST Assured.",
    features: [
      "Postman Collection Suites",
      "Status, Header & Payload Assertions",
      "Auth & Token Lifecycle Testing",
      "API Error Handling & Edge Cases",
    ],
    accent: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    emoji: "🤝",
    title: "Agency QA Partner",
    badge: "Agile & Retainer",
    description: "Serving as a dedicated quality assurance partner for web and mobile development agencies, ensuring zero-defect deliverables for client handoffs.",
    features: [
      "Sprint-by-Sprint QA Cycles",
      "Pre-Launch Release Sign-Offs",
      "Jira / Linear Issue Tracking",
      "Direct Dev Team Retesting",
    ],
    accent: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="absolute top-1/3 right-0 w-[35%] aspect-square rounded-full blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="QA Services" subtitle="Specialized Offerings" />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="h-full p-7 rounded-[2rem] border flex flex-col transition-all duration-300"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex justify-between items-start mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: service.accent, border: `1px solid ${service.border}` }}
                  >
                    {service.emoji}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black mb-3 tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: "var(--text-secondary)" }}>
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 pt-5" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                      <CheckCircle2 size={14} className="text-purple-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span>Request Service</span>
                  <ArrowRight size={13} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <button onClick={() => navigate("/services")} className="btn-primary">
              View All Services &amp; Hire Me
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

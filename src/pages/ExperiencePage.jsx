import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

const experiences = [
  {
    role: "Associate Quality Analyst",
    company: "CRM Landing Software Pvt. Ltd.",
    period: "Sep 2026 – Present",
    type: "Full-time",
    location: "Ajmer, Rajasthan, India · On-site",
    description: "Driving software quality assurance across CRM and AI-powered application workflows, validating business requirements, and executing comprehensive defect lifecycle management.",
    responsibilities: [
      "Designed and executed test scenarios covering functional, UI, integration, and regression testing across CRM modules",
      "Tested AI voice agents for conversation flow, intent recognition, speech understanding, and call transfer accuracy",
      "Validated chatbot workflows including context retention, duplicate detection, and AI response quality",
      "Performed comprehensive REST API testing — validating endpoints, status codes, payloads, and authentication",
      "Identified, reproduced, and documented defects with clear reproduction steps, severity, and supporting evidence",
      "Collaborated with development and product teams during defect investigation, retesting, and resolution",
      "Validated WhatsApp integration, email campaigns, and CRM dashboard data synchronization",
      "Applied SDLC, STLC, Agile, and defect lifecycle concepts in daily QA activities",
      "Performed security and permission testing across role-based access control scenarios",
    ],
    domains: ["CRM Testing", "AI Voice Agent Testing", "Chatbot Testing", "API Testing", "Regression Testing", "UI Testing"],
    tools: ["Jira", "Postman", "Chrome DevTools", "SQL", "Manual Testing"],
    current: true,
    color: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.35)",
    textColor: "#a78bfa",
  },
  {
    role: "Quality Assurance Intern",
    company: "Zeepty",
    period: "Mar 2026 – Aug 2026",
    type: "Internship",
    location: "Delhi, India",
    description: "Led quality initiatives for critical web application workflows, focusing on comprehensive test execution and systematic defect tracking.",
    responsibilities: [
      "Designed and executed 50+ test cases for functional, regression, and UI testing scenarios",
      "Identified and logged 30+ defects in Jira with detailed reproduction steps and severity classification",
      "Conducted regression testing across 5 release cycles ensuring no regressions in existing features",
      "Performed API testing using Postman to validate endpoints, payloads, and response handling",
      "Executed cross-browser and cross-device compatibility testing",
      "Collaborated with development team in Agile/Scrum environment",
    ],
    domains: ["Web Testing", "API Testing", "Regression Testing", "Functional Testing"],
    tools: ["Selenium", "Jira", "Postman", "Chrome DevTools", "Manual Testing"],
    current: false,
    color: "rgba(6,182,212,0.10)",
    border: "rgba(6,182,212,0.25)",
    textColor: "#22d3ee",
  },
  {
    role: "Java Full-Stack Developer Intern",
    company: "Zidio Development",
    period: "May 2025 – Aug 2025",
    type: "Internship",
    location: "Remote / Bengaluru, India",
    description: "Developed and maintained scalable backend services and RESTful architectures, also contributing to manual and API testing activities.",
    responsibilities: [
      "Developed REST APIs using Java and Spring Boot for high-performance backend services",
      "Conducted manual and API testing using Postman and Chrome DevTools",
      "Built responsive frontend components with React.js",
      "Worked in Agile/Scrum environment with structured 2-week sprint cycles",
      "Integrated MongoDB for data persistence and JWT for authentication",
    ],
    domains: ["API Testing", "Manual Testing", "Backend Development"],
    tools: ["Java", "Spring Boot", "React.js", "Postman", "Git", "MongoDB"],
    current: false,
    color: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    textColor: "#34d399",
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: "var(--bg-main)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-tag inline-flex mb-4">Experience</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-black tracking-[-0.05em] leading-[1.02]"
            style={{ color: "var(--text-primary)" }}
          >
            Professional
            <br />
            <span className="gradient-text">Timeline</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            My journey as a QA Engineer — from development internships to specialized quality assurance and AI system testing.
          </motion.p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="rounded-3xl p-8 border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: exp.current ? exp.border : "var(--border-subtle)",
                  boxShadow: exp.current ? `0 0 40px ${exp.color}` : "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-5 mb-7">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: exp.color, border: `1px solid ${exp.border}` }}
                  >
                    <Briefcase size={26} style={{ color: exp.textColor }} />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h2 className="text-2xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
                        {exp.role}
                      </h2>
                      {exp.current && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                          style={{ backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399" }}>
                          ● Current
                        </span>
                      )}
                    </div>
                    <p className="font-bold text-lg" style={{ color: exp.textColor }}>
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                        style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}>
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: exp.textColor }}>
                    Key Responsibilities
                  </p>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle2 size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Domains */}
                <div className="mb-5">
                  <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                    Testing Domains
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.domains.map((d) => (
                      <span key={d} className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{ backgroundColor: exp.color, border: `1px solid ${exp.border}`, color: exp.textColor }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="pt-5" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                  <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((t) => (
                      <span key={t} className="badge-limitless">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    role: "Associate Quality Analyst",
    company: "CRM Landing Software Pvt. Ltd.",
    period: "Sep 2026 – Present",
    type: "Full-time · On-site",
    location: "Ajmer, Rajasthan",
    description: "Driving software quality assurance across CRM application workflows, validating business requirements, and executing end-to-end defect lifecycle management.",
    achievements: [
      "Perform software quality assurance across CRM application workflows",
      "Design and execute test scenarios for functional, UI, integration, and regression testing",
      "Test AI voice agents, chatbots, and conversational AI workflows",
      "Validate REST APIs, response payloads, and authentication flows",
      "Track and document defects with clear reproduction steps in Jira",
      "Collaborate with development teams during defect investigation and retesting",
      "Apply SDLC, STLC, Agile, and defect lifecycle concepts daily",
    ],
    tech: ["Manual Testing", "API Testing", "Regression Testing", "CRM Testing", "AI Agent Testing", "Jira", "STLC", "Agile"],
    current: true,
    color: "rgba(124,58,237,0.15)",
    borderColor: "rgba(124,58,237,0.3)",
  },
  {
    role: "Quality Assurance Intern",
    company: "Zeepty",
    period: "Mar 2026 – Aug 2026",
    type: "Internship · Delhi",
    location: "Delhi, India",
    description: "Led quality initiatives for critical web workflows, focusing on comprehensive testing and systematic defect tracking.",
    achievements: [
      "Designed and executed 50+ test cases for functional and regression scenarios",
      "Identified and logged 30+ defects in Jira with detailed reproduction steps",
      "Conducted regression testing across 5 release cycles",
      "Performed API testing using Postman and Chrome DevTools",
      "Collaborated with development team in Agile/Scrum workflows",
    ],
    tech: ["Selenium", "Jira", "Postman", "Chrome DevTools", "Manual Testing", "API Testing"],
    current: false,
    color: "rgba(6,182,212,0.10)",
    borderColor: "rgba(6,182,212,0.25)",
  },
  {
    role: "Java Full-Stack Developer Intern",
    company: "Zidio Development",
    period: "May 2025 – Aug 2025",
    type: "Internship · Remote",
    location: "Remote / Bengaluru",
    description: "Developed and maintained scalable backend services and RESTful architectures, bridging development and testing.",
    achievements: [
      "Developed REST APIs using Java and Spring Boot",
      "Conducted manual & API testing using Postman and Chrome DevTools",
      "Built responsive frontend components with React.js",
      "Worked in Agile/Scrum environment with 2-week sprint cycles",
    ],
    tech: ["Java", "Spring Boot", "React.js", "REST APIs", "Postman", "Git"],
    current: false,
    color: "rgba(16,185,129,0.08)",
    borderColor: "rgba(16,185,129,0.2)",
  },
];

export default function ExperienceSection() {
  const navigate = useNavigate();

  return (
    <section
      id="experience-section"
      className="py-28 relative"
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Experience" subtitle="Professional Journey" />

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="p-7 rounded-[2rem] border transition-all duration-300"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left Icon */}
                  <div className="flex flex-col items-center md:items-start gap-3 min-w-[120px]">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: exp.color, border: `1px solid ${exp.borderColor}` }}
                    >
                      <Briefcase size={24} style={{ color: "var(--text-primary)" }} />
                    </div>
                    {exp.current && (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                        style={{ backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold" style={{ color: "var(--text-muted)" }}>
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="mb-5">
                      <h3 className="text-2xl font-black tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                        {exp.role}
                      </h3>
                      <p className="text-purple-400 font-bold">{exp.company}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{exp.type} · {exp.location}</p>
                    </div>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <CheckCircle2 size={14} className="text-purple-500 mt-0.5 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-5" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                      {exp.tech.map((t) => (
                        <span key={t} className="badge-limitless">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-10">
            <button onClick={() => navigate("/experience")} className="btn-secondary text-sm">
              Full Experience Timeline →
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

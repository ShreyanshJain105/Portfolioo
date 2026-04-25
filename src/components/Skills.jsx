import { Code2, TestTube2, Wrench, Server, Database, GitBranch } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "QA & Testing",
    icon: TestTube2,
    skills: ["Manual Testing", "Functional Testing", "Regression Testing", "API Testing", "Test Case Design", "Test Plan Execution", "Bug Reporting", "Defect Tracking", "Root Cause Analysis"]
  },
  {
    title: "Automation",
    icon: Server,
    skills: ["Selenium", "Test Automation Fundamentals", "API Testing (Postman)", "n8n", "Zapier"]
  },
  {
    title: "Full-Stack & Web",
    icon: Code2,
    skills: ["Java", "JavaScript", "REST APIs", "Spring Boot", "HTML", "CSS", "Next.js", "Prisma"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Jira", "Postman", "Chrome DevTools", "Git", "GitHub", "Docker", "AWS"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Methodologies",
    icon: GitBranch,
    skills: ["SDLC", "STLC", "Agile/Scrum", "CI/CD Integration"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Abilities" subtitle="Technical Proficiency" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-[3rem] h-full flex flex-col border border-white/5 hover:border-primary-500/40 transition-all duration-500"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-primary-500 shadow-xl">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tighter">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {category.skills.map((skill) => (
                    <span key={skill} className="badge-limitless">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

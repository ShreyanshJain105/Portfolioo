import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Quality Assurance Intern",
    company: "Zeepty",
    period: "Mar 2026 - Present",
    description: "Leading quality initiatives for critical web workflows, focusing on automated regression and API reliability.",
    achievements: [
      "Designed and executed 50+ test cases for functional and regression scenarios.",
      "Identified and logged 30+ defects in Jira, collaborating with devs for resolution.",
      "Improved product quality by 20% through rigorous cross-cycle regression testing."
    ],
    tech: ["Postman", "Manual Testing", "Jira", "API Testing"]
  },
  {
    role: "Java Full-Stack Intern",
    company: "Zidio Development",
    period: "May 2025 - Aug 2025",
    description: "Developed and maintained scalable backend services and RESTful architectures using the Java ecosystem.",
    achievements: [
      "Architected REST APIs using Java and Spring Boot for high-performance workflows.",
      "Conducted end-to-end manual and API validation to ensure system reliability.",
      "Contributed to Agile cycles, bridging development and testing for efficient delivery."
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "Agile"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Experience" 
          subtitle="Professional Trajectory"
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-800 hover:border-primary-500/30 transition-all duration-700 group">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Company Icon & Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="p-6 rounded-[2rem] bg-zinc-900 border border-zinc-800 text-white mb-4 group-hover:bg-primary-600 transition-colors duration-500 shadow-xl shadow-black/40">
                      <Briefcase size={32} />
                    </div>
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-black tracking-widest uppercase">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="mb-8">
                      <h3 className="text-3xl font-black text-white tracking-tighter mb-2">{exp.role}</h3>
                      <p className="text-primary-500 font-bold text-lg tracking-tight">{exp.company}</p>
                    </div>

                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                      {exp.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-4 text-zinc-500 text-base">
                          <CheckCircle2 size={18} className="text-primary-600 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Skills Used */}
                    <div className="flex flex-wrap gap-3 pt-8 border-t border-zinc-900">
                      {exp.tech.map((t) => (
                        <span key={t} className="badge-limitless">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

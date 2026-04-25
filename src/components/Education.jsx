import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Poornima University, Jaipur",
    period: "2023 - 2027",
    location: "Jaipur, Rajasthan",
    details: "Focusing on Software Engineering, Data Structures, and Quality Assurance methodologies.",
    grade: "8.13 CGPA",
    icon: GraduationCap,
  },
  {
    degree: "Senior Secondary (PCM)",
    institution: "Govt Sr Sec Maharawal School",
    period: "2022 - 2023",
    location: "Dungarpur, Rajasthan",
    details: "Completed Higher Secondary education with a focus on Physics, Chemistry, and Mathematics.",
    grade: "73.49%",
    icon: Award,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Academic Path" 
          subtitle="Education & Milestones"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-10 rounded-[2.5rem] border border-zinc-800 hover:border-primary-500/30 transition-all duration-700 group">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="p-5 rounded-3xl bg-zinc-900 border border-zinc-800 text-white group-hover:bg-primary-600 transition-colors duration-500">
                    <edu.icon size={28} />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-white tracking-tighter mb-1">{edu.degree}</h3>
                        <p className="text-primary-500 font-bold text-sm tracking-widest uppercase">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-black tracking-widest uppercase">
                        <Calendar size={12} />
                        {edu.period}
                      </div>
                    </div>

                    <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-2xl">
                      {edu.details}
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                      <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        <MapPin size={14} className="text-primary-600" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                        <span className="text-primary-600">Result:</span>
                        {edu.grade}
                      </div>
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

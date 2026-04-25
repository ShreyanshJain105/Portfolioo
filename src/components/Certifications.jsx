import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Cloud,
  Container,
  Trophy,
  Medal,
  Award,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { certifications, achievements } from "../data/certifications";

const iconMap = {
  Brain,
  Bot,
  Cloud,
  Container,
  Trophy,
  Medal,
  Award,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative bg-bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Recognition"
          subtitle="Learning & Accomplishments"
        />

        {/* Certifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <ScrollReveal key={cert.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass-card p-10 rounded-[2.5rem] text-center group cursor-default h-full border border-white/5 hover:border-primary-500/40 transition-all duration-500"
                >
                  <div
                    className={`inline-flex p-5 rounded-[2rem] bg-zinc-900 border border-zinc-800 mb-8 group-hover:bg-primary-600 transition-colors duration-500`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-lg font-black text-white mb-3 tracking-tighter leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{cert.issuer}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((ach, index) => {
            const Icon = iconMap[ach.icon] || Trophy;
            return (
              <ScrollReveal key={ach.id} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-10 rounded-[2.5rem] flex items-center gap-8 group border border-white/5"
                >
                  <div
                    className={`flex-shrink-0 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:bg-primary-600 transition-colors duration-500 shadow-xl`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2 tracking-tighter">
                      {ach.title}
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{ach.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

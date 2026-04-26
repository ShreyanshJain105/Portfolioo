import { 
  ShieldCheck, 
  Cpu, 
  Database,
  ArrowRight,
  Code
} from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

const services = [
  {
    title: "Quality Assurance",
    description: "End-to-end testing lifecycle management, from requirement analysis to regression suites. Specializing in manual and automated validation for web ecosystems.",
    icon: ShieldCheck,
    features: ["Regression Testing", "Usability Testing", "Functional Validation"],
    color: "from-blue-500/20 to-primary-500/20"
  },
  {
    title: "Automation Engineering",
    description: "Architecting robust automation frameworks using Selenium and Java. Reducing manual overhead by implementing scalable, data-driven test scripts.",
    icon: Cpu,
    features: ["Selenium Frameworks", "CI/CD Integration", "Data-Driven Testing"],
    color: "from-primary-500/20 to-violet-500/20"
  },
  {
    title: "API Validation",
    description: "Deep-dive testing for RESTful architectures using Postman. Ensuring security, performance, and data integrity across complex backend services.",
    icon: Database,
    features: ["Endpoint Testing", "Security Audits", "Payload Validation"],
    color: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    title: "Full-Stack Dev",
    description: "Building resilient web applications with Java Spring Boot and React.js. Focused on clean code, performance optimization, and scalable logic.",
    icon: Code,
    features: ["Spring Boot", "React Architectures", "Type-safe Code"],
    color: "from-fuchsia-500/20 to-pink-500/20"
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-32 bg-bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-24">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              Specialized <br />
              <span className="text-zinc-600">Expertise.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Delivering high-performance engineering solutions with a focus on reliability, scalability, and technical precision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-800 hover:border-primary-500/40 transition-all duration-700 group h-full flex flex-col">
                <div className="mb-10 flex justify-between items-start">
                  <div className={`p-5 rounded-3xl bg-gradient-to-br ${service.color} border border-white/5`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  <span className="text-4xl font-black text-white/10 group-hover:text-primary-500/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 text-lg leading-relaxed mb-10 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-zinc-500 font-bold uppercase tracking-widest text-[10px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-white font-bold group/btn mt-auto">
                  <span className="group-hover/btn:mr-2 transition-all">Project Details</span>
                  <ArrowRight size={18} className="text-primary-500" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="mt-32 p-16 rounded-[4rem] bg-zinc-900/50 border border-zinc-800 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Ready to build <br />
              <span className="text-zinc-600">something robust?</span>
            </h2>
            <button onClick={() => window.location.href='/#contact'} className="btn-primary">
              Let&apos;s Connect
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

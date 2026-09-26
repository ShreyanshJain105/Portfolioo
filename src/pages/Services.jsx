import {
  ShieldCheck,
  Cpu,
  Database,
  Building2,
  Briefcase,
  Layers,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import ScrollReveal from "../components/ui/ScrollReveal";

const services = [
  {
    title: "Manual & Functional Testing",
    badge: "Web & Mobile",
    description: "Exhaustive exploratory and functional test execution across user journeys, business logic, cross-browser environments, and responsive mobile interfaces.",
    icon: ShieldCheck,
    features: [
      "Test Scenario & Test Case Design",
      "Cross-Browser & Multi-Device Testing",
      "UI/UX & Usability Validation",
      "Defect Lifecycle & Severity Tagging"
    ],
    color: "from-blue-500/20 to-primary-500/20"
  },
  {
    title: "Test Automation & SDET",
    badge: "Automation Engineering",
    description: "Architecting reliable, data-driven automation suites using Selenium WebDriver and modern tools to eliminate human error and accelerate release cycles.",
    icon: Cpu,
    features: [
      "Selenium & Java Test Frameworks",
      "Automated Regression Suites",
      "CI/CD Quality Gate Integration",
      "Execution Reports & Failure Analysis"
    ],
    color: "from-primary-500/20 to-violet-500/20"
  },
  {
    title: "API & Backend Validation",
    badge: "REST & Microservices",
    description: "Deep-dive validation of RESTful endpoints, token authentication, schema compliance, payload validation, and server responses using Postman.",
    icon: Database,
    features: [
      "Postman Collection Suites",
      "Status, Header & Payload Assertions",
      "Auth & Token Lifecycle Testing",
      "API Error Handling & Edge Cases"
    ],
    color: "from-violet-500/20 to-fuchsia-500/20"
  },
  {
    title: "Agency QA Partner & Sprint Support",
    badge: "Agile & Retainer",
    description: "Serving as a dedicated quality assurance partner for web and mobile development agencies, ensuring zero-defect deliverables for client handoffs.",
    icon: Building2,
    features: [
      "Sprint-by-Sprint QA Cycles",
      "Pre-Launch Release Sign-Offs",
      "Jira / Linear Issue Tracking",
      "Direct Dev Team Retesting"
    ],
    color: "from-fuchsia-500/20 to-pink-500/20"
  }
];

const engagementModels = [
  {
    icon: Briefcase,
    title: "Full-Time Career",
    target: "For Tech Companies & Startups",
    description: "Available for full-time Software QA Engineer / SDET roles. Bringing complete STLC ownership, automated pipelines, and team collaboration.",
    highlight: "Direct Hire / Full-Time",
  },
  {
    icon: Layers,
    title: "Contract & Project QA",
    target: "For SaaS & Direct Clients",
    description: "On-demand testing for upcoming product launches, feature releases, web applications, or comprehensive bug audits.",
    highlight: "Sprint or Project Basis",
  },
  {
    icon: Building2,
    title: "Agency QA Partner",
    target: "For Dev & Digital Agencies",
    description: "A plug-and-play QA testing partner for dev agencies wanting rigorous quality gates before presenting projects to clients.",
    highlight: "Ongoing Retainer / Partner",
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-32 bg-bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-950/60 border border-primary-500/30 text-primary-400 text-xs font-bold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Full-Time &amp; Freelance QA Solutions
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.95]">
              Engineering Quality. <br />
              <span className="text-zinc-600">Delivering Confidence.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal">
              Specialized QA and SDET solutions designed for tech companies, startups, and development agencies seeking uncompromising software reliability.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Core Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 hover:border-primary-500/40 transition-all duration-700 group h-full flex flex-col justify-between">
                <div>
                  <div className="mb-8 flex justify-between items-start">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} border border-white/5`}>
                      <service.icon size={30} className="text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-primary-400">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-3 pt-6 border-t border-zinc-900 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                        <CheckCircle2 size={16} className="text-primary-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => window.location.href='/#contact'}
                    className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn hover:text-primary-400 transition-colors"
                  >
                    <span>Initiate Discussion</span>
                    <ArrowRight size={14} className="text-primary-500 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Engagement Models */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-400 mb-3">Collaboration Pathways</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Flexible Engagement Options
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {engagementModels.map((model, index) => (
            <ScrollReveal key={model.title} delay={index * 0.1}>
              <div className="p-8 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 hover:border-primary-500/30 transition-all group h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-primary-400 group-hover:bg-primary-600 group-hover:text-black transition-colors">
                      <model.icon size={22} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                      {model.highlight}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white mb-1.5 tracking-tight">{model.title}</h4>
                  <p className="text-xs font-semibold text-primary-400 mb-4">{model.target}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {model.description}
                  </p>
                </div>

                <button
                  onClick={() => window.location.href='/#contact'}
                  className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-primary-600 hover:text-black border border-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  Start Collaboration
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="p-12 md:p-16 rounded-[3.5rem] bg-zinc-950 border border-zinc-800 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Ready to elevate your <br />
              <span className="text-zinc-500">software quality?</span>
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto mb-8">
              Available for full-time engineering roles, agency QA partnerships, and contract testing assignments.
            </p>
            <button onClick={() => window.location.href='/#contact'} className="btn-primary">
              Let&apos;s Connect
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}


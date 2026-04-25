import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Server, 
  Code, 
  Layers,
  Database
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function CaseStudy() {
  return (
    <div className="pt-24 pb-20 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <ScrollReveal>
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
              Case Study: <span className="gradient-text">ScanServe</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              A deep dive into building a high-performance, QR-powered digital menu and ordering platform designed for modern restaurant operations.
            </p>
            
                <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/ShreyanshJain105/scanserve" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <FaGithub size={20} />
                View Repository
              </a>
              <button className="btn-secondary flex items-center gap-2">
                <ExternalLink size={20} />
                Live Demo
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Project Image Placeholder */}
        <ScrollReveal>
          <div className="aspect-video rounded-[2rem] overflow-hidden glass-card mb-20 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-violet-500/10 group-hover:opacity-50 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-400 font-medium italic">Project Showcase Visual</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Problem Statement</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Traditional restaurant ordering systems are often slow and prone to human error. ScanServe was built to eliminate these friction points by allowing customers to scan a QR code and order directly from their smartphones, while providing owners with a real-time dashboard for order management.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Solution</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We built a full-stack solution using Next.js for the frontend and Express.js for the backend. Key features include:
              </p>
              <ul className="space-y-3">
                {[
                  "Dynamic QR Code Generation per Table",
                  "Real-time Order Tracking (Polling/WebSockets)",
                  "Role-based Dashboard (Admin vs. Business Owner)",
                  "Integrated Payment Gateway (Razorpay)",
                  "AI-Assisted Menu Authoring (Gemini AI)"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Architecture</h2>
              <div className="glass-card p-8 rounded-3xl space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Frontend Architecture</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Next.js App Router, Tailwind CSS, Framer Motion for premium UX.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500">
                    <Server size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Backend Infrastructure</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Express.js (TypeScript) with role-based JWT authentication.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Data Layer</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">PostgreSQL managed via Prisma ORM for type-safe queries.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Timeline</span>
                  <p className="text-slate-600 dark:text-slate-400">Jan 2024 - Present</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Role</span>
                  <p className="text-slate-600 dark:text-slate-400">Lead Full-Stack Developer</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tech Stack</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"].map(t => (
                      <span key={t} className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl bg-primary-600/5 border-primary-500/20">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Key Result</h3>
              <p className="text-3xl font-black gradient-text">40% Fast</p>
              <p className="text-xs text-slate-500 mt-1">Reduction in ordering time compared to traditional methods.</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Ready to see more?</h3>
           <Link to="/" className="btn-primary">
             Back to All Projects
           </Link>
        </div>
      </div>
    </div>
  );
}

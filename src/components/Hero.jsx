import { motion, useScroll, useTransform } from "framer-motion";
import { FileDown, Code2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const springTransition = { type: "spring", stiffness: 100, damping: 20, mass: 1 };

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-primary-600/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-violet-600/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[20%] aspect-square bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Column — Content */}
          <motion.div
            style={{ opacity, scale }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...springTransition }}
              className="badge-limitless mb-10 inline-flex items-center"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse mr-3" />
              Available for New Projects
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-[0.85] tracking-[-0.06em] text-white"
            >
              Crafting <br />
              <span className="text-zinc-700">Digital</span> <br />
              <span className="gradient-text">Precision.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ...springTransition }}
              className="text-xl md:text-2xl text-zinc-400 max-w-xl mx-auto lg:mx-0 mb-14 leading-relaxed font-medium"
            >
              I&apos;m Shreyansh, an engineer focused on <span className="text-white">Full-Stack Quality</span>. Building resilient, high-performance systems for the next web.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ...springTransition }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("projects")}
                className="btn-primary"
              >
                Explore Work
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Shreyansh_Jain_Resume.pdf"
                className="btn-secondary flex items-center gap-3"
              >
                <FileDown size={20} />
                Get Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-8"
            >
              {[
                { icon: FaLinkedin, href: "https://linkedin.com/in/shreyanshjain1206", label: "LinkedIn" },
                { icon: FaGithub, href: "https://github.com/ShreyanshJain105", label: "GitHub" },
                { icon: FaTwitter, href: "#", label: "Twitter" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-white transition-all duration-300 hover:scale-125"
                  aria-label={social.label}
                >
                  <social.icon size={26} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000"
          >
            <div className="relative group">
              {/* Animated Glow Backplate */}
              <div className="absolute inset-0 bg-primary-600/30 rounded-[4rem] blur-[80px] group-hover:bg-primary-600/50 transition-all duration-1000 animate-pulse" />
              
              {/* Premium Image Frame */}
              <div className="relative w-80 h-[32rem] md:w-96 md:h-[40rem] rounded-[3.5rem] border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:rotate-1">
                <img
                  src="/profile.jpg"
                  alt="Shreyansh Jain"
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Engineering Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-12 glass-card p-8 rounded-[2.5rem] border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary-600/20 flex items-center justify-center text-primary-500 border border-primary-500/20">
                    <Code2 size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-1">Status</p>
                    <p className="text-xl font-black text-white tracking-tighter italic">Engineering</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

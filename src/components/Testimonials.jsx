import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ScrollReveal from "./ui/ScrollReveal";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="py-32 relative bg-bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Validation" subtitle="Engineering Feedback" />

        <ScrollReveal className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card p-12 md:p-20 rounded-[4rem] text-center border border-white/5 shadow-2xl"
              >
                <div className="inline-flex p-6 rounded-[2rem] bg-zinc-900 border border-zinc-800 text-primary-500 mb-12 shadow-inner">
                  <Quote size={40} />
                </div>

                <p className="text-2xl md:text-4xl font-black text-white leading-[1.1] tracking-tighter mb-12 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex flex-col items-center">
                  <p className="text-xl font-black text-white mb-2 uppercase tracking-tighter italic">{testimonial.name}</p>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
                    {testimonial.designation} <span className="text-zinc-800 mx-2">/</span> {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Premium Controls */}
            <div className="flex justify-center gap-6 mt-16">
              <button
                onClick={prev}
                className="p-5 rounded-full border border-white/5 bg-zinc-900 text-zinc-400 hover:text-white hover:border-primary-500 transition-all cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex items-center gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      i === current ? "bg-primary-500 w-12" : "bg-zinc-800 w-3 hover:bg-zinc-700"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-5 rounded-full border border-white/5 bg-zinc-900 text-zinc-400 hover:text-white hover:border-primary-500 transition-all cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

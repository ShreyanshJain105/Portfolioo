import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-14 md:mb-20 ${centered ? "text-center" : ""}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-tag inline-flex mb-4"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.05em] leading-[1.05]"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </motion.h2>
    </div>
  );
}

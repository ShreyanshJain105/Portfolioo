import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <ScrollReveal className={`mb-24 ${alignClass}`}>
      <p className="text-[10px] md:text-xs font-black tracking-[0.5em] uppercase text-zinc-600 mb-6">
        {subtitle}
      </p>
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
        {title}<span className="text-primary-600">.</span>
      </h2>
    </ScrollReveal>
  );
}

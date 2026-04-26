import { useCountUp } from "../../hooks/useCountUp";

export default function AnimatedCounter({ end, suffix = "", label, className = "" }) {
  const { count, ref } = useCountUp(end, 2000);

  return (
    <div ref={ref} className="text-center p-2 md:p-6">
      <div className={`text-3xl md:text-5xl font-extrabold gradient-text mb-2 ${className}`}>
        {count}
        {suffix}
      </div>
      <p className="text-zinc-500 text-xs md:text-sm font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
}

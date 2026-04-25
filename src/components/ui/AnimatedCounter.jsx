import { useCountUp } from "../../hooks/useCountUp";

export default function AnimatedCounter({ end, suffix = "", label }) {
  const { count, ref } = useCountUp(end, 2000);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-dark-400 text-sm font-medium">{label}</p>
    </div>
  );
}

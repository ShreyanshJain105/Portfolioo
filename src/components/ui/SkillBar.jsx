import { useEffect, useRef, useState } from "react";

export default function SkillBar({ name, level, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-dark-200">{name}</span>
        <span className="text-sm font-mono text-primary-400">{width}%</span>
      </div>
      <div className="h-2.5 bg-dark-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

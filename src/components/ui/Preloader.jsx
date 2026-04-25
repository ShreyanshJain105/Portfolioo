import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Quality", "Precision", "Automation", "Innovation", "Shreyansh"];

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(onComplete, 1000);
      return;
    }

    const timer = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  return (
    <motion.div
      initial={{ top: 0 }}
      exit={{ top: "-100vh" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[9999] bg-slate-900 flex items-center justify-center overflow-hidden"
    >
      {dimension.width > 0 && (
        <>
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] fill-slate-900">
            <motion.path
              initial={{ d: initialPath }}
              exit={{ d: targetPath }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            />
          </svg>

          <div className="relative z-10 flex items-center gap-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-3 h-3 rounded-full bg-primary-500"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={words[index]}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight"
            >
              {words[index]}
              {words[index] === "Shreyansh" && <span className="gradient-text">.dev</span>}
            </motion.p>
          </div>

          {/* Background blurred shapes */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"
          />
        </>
      )}
    </motion.div>
  );
}

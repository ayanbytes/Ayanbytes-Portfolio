import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Design", "Create", "Inspire"];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 2700;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min((progress / duration) * 100, 100);
      
      setCount(Math.floor(percentage));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 overflow-hidden">
      {/* Top Left */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      {/* Center Words */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-end w-full">
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
            {String(count).padStart(3, "0")}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-[3px] bg-stroke/50 relative overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 accent-gradient w-full origin-left"
            style={{ 
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)"
            }}
          />
        </div>
      </div>
    </div>
  );
};

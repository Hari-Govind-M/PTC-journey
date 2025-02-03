import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TimelineProps {
  progress: number;
}

export function Timeline({ progress }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", `${progress}%`]);

  return (
    <div ref={ref} className="container mx-auto px-4 py-12">
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          style={{ width }}
        />
        
        {/* Animated dots */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-purple-600 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Progress markers */}
        {[0, 25, 50, 75, 100].map((marker) => (
          <div
            key={marker}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${marker}%` }}
          >
            <div className="w-2 h-2 bg-white border-2 border-blue-600 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
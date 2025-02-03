import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function JourneyArrow() {
  return (
    <div className="hidden md:flex justify-center items-center my-8">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <ArrowRight className="w-12 h-12 text-blue-500" />
      </motion.div>
    </div>
  );
}
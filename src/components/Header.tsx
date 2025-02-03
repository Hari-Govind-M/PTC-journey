import { motion } from 'framer-motion';
import { Cloud, Database, Code } from 'lucide-react';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold mb-6 text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Azure Partner Technical Consultant
        </motion.h1>
        <motion.p 
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Accelerate Growth Across Azure's Three Pillars
        </motion.p>
        
        <div className="flex justify-center gap-8 flex-wrap">
          <PillarCard 
            icon={<Cloud className="w-12 h-12" />}
            title="Infrastructure"
            delay={1}
          />
          <PillarCard 
            icon={<Database className="w-12 h-12" />}
            title="Data & AI"
            delay={1.2}
          />
          <PillarCard 
            icon={<Code className="w-12 h-12" />}
            title="Digital & App Innovation"
            delay={1.4}
          />
        </div>
      </div>
    </motion.header>
  );
}

function PillarCard({ icon, title, delay }: { icon: React.ReactNode; title: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="bg-white/10 backdrop-blur-lg p-6 rounded-lg text-center w-64"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </motion.div>
  );
}
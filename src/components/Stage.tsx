import { motion } from 'framer-motion';

interface StageProps {
  title: string;
  sections: {
    title: string;
    content: string[];
  }[];
  stageNumber: number;
  icon: React.ReactNode;
}

export function Stage({ title, sections, stageNumber, icon }: StageProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto relative">
        {/* Stage number circle with icon */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="absolute">
            {icon}
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-white/30"
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
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden"
        >
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"
            animate={{
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8 text-blue-600 text-center">{title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-purple-600" />
                  <div className="pl-4">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">{section.title}</h3>
                    <ul className="space-y-4">
                      {section.content.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className="text-gray-600 flex items-start text-sm"
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-2 flex-shrink-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
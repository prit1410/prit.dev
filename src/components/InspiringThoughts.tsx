import { motion } from "framer-motion";
import { Code, Sparkles, Rocket } from "lucide-react";
import { inspirationalThoughts } from "./thoughts";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'rocket':
      return <Rocket className="w-6 h-6 text-portfolio-primary dark:text-portfolio-accent" />;
    case 'code':
      return <Code className="w-6 h-6 text-portfolio-primary dark:text-portfolio-accent" />;
    case 'sparkles':
      return <Sparkles className="w-6 h-6 text-portfolio-primary dark:text-portfolio-accent" />;
    default:
      return null;
  }
};

const InspiringThoughts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-20 max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-portfolio-primary dark:text-portfolio-accent mb-4">
          Let's Build Something Amazing
        </h3>
        <div className="w-32 h-1 bg-portfolio-primary/30 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {inspirationalThoughts.map((thought, index) => (
          <motion.div
            key={thought.title}
            whileHover={{ scale: 1.02, translateY: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 dark:bg-gray-800/50 dark:border-white/10"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-portfolio-primary/10 dark:bg-portfolio-primary/20">
              {getIcon(thought.icon)}
            </div>
            <h4 className="text-xl font-semibold mb-3 dark:text-white">{thought.title}</h4>
            <p className="text-muted-foreground dark:text-gray-300">
              "{thought.description}"
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InspiringThoughts;
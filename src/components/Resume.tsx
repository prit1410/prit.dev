import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import InspiringThoughts from "./InspiringThoughts";

const Resume = () => {
  return (
    <section id="resume" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-2">📄 Resume</h2>
        <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-8"></div>
        
        <p className="text-lg mb-8 text-muted-foreground">
          Download my resume to get a comprehensive overview of my skills, experience, and educational background.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className="bg-portfolio-primary hover:bg-portfolio-secondary" 
            size="lg"
            asChild
          >
            <a 
              href="https://drive.google.com/file/d/1S_uVnqRy9VsowFIUL6_3TruCbhyHSULS/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Add the Inspiring Thoughts section */}
      <InspiringThoughts />
    </section>
  );
};

export default Resume;

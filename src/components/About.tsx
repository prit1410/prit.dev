
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">🎯 About Me</h2>
        <div className="w-20 h-1 bg-portfolio-primary mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div 
              className="p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/30 backdrop-blur-sm border border-white/20 shadow-xl mb-6 dark:from-gray-800/70 dark:to-gray-900/50 dark:border-white/5"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <blockquote className="text-xl italic border-l-4 border-portfolio-primary pl-4 mb-6">
                "Motivated IT student with strong development skills and a creative eye for unique digital experiences."
              </blockquote>
              
              <p className="mb-4 text-muted-foreground dark:text-gray-300">
                I am a passionate developer focused on creating efficient and innovative software solutions. My journey in tech began with a curiosity about how digital products are built, and has evolved into a deep interest in mobile development, especially with Flutter, and backend development with Python.
              </p>
            </motion.div>
            
            <div className="space-y-4 mt-8">
              <motion.div 
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-portfolio-primary/10 transition-all duration-300 dark:bg-gray-800/50 dark:border-white/5 dark:hover:shadow-portfolio-accent/20"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="bg-portfolio-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-portfolio-primary dark:bg-portfolio-primary/20">🎓</span>
                  Education
                </h3>
                <div className="pl-5 mt-2 border-l-2 border-portfolio-primary/30">
                  <h4 className="text-lg font-medium">Bachelor of Information Technology</h4>
                  <p className="text-muted-foreground dark:text-gray-400">P P Savani University (2022–2026)</p>
                  <p className="dark:text-gray-300">CGPA: 7.4 / 10</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-portfolio-primary/10 transition-all duration-300 dark:bg-gray-800/50 dark:border-white/5 dark:hover:shadow-portfolio-accent/20"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="bg-portfolio-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-portfolio-primary dark:bg-portfolio-primary/20">🧠</span>
                  Relevant Coursework
                </h3>
                <ul className="list-disc list-inside pl-5 mt-2 text-muted-foreground dark:text-gray-400">
                  <li>Data Structures</li>
                  <li>Database Management Systems</li>
                  <li>Python Programming</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-portfolio-primary/10 transition-all duration-300 dark:bg-gray-800/50 dark:border-white/5 dark:hover:shadow-portfolio-accent/20"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold flex items-center">
                  <span className="bg-portfolio-primary/10 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-portfolio-primary dark:bg-portfolio-primary/20">🧾</span>
                  Certifications
                </h3>
                <ul className="list-disc list-inside pl-5 mt-2 text-muted-foreground dark:text-gray-400">
                  <li>AWS Cloud Services</li>
                  <li>Joy of Programming with Python – NPTEL</li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              className="glassmorphism rounded-2xl p-6 hover:shadow-xl transition-all duration-300 dark:bg-gray-800/60 dark:border-white/5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-portfolio-primary dark:bg-portfolio-primary/20">🌐</span>
                Language Proficiency
              </h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>English</span>
                    <span>80%</span>
                  </div>
                  <div className="skill-bar dark:bg-gray-700">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Hindi</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar dark:bg-gray-700">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Gujarati</span>
                    <span>100%</span>
                  </div>
                  <div className="skill-bar dark:bg-gray-700">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glassmorphism rounded-2xl p-6 hover:shadow-xl transition-all duration-300 dark:bg-gray-800/60 dark:border-white/5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="bg-portfolio-primary/10 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-portfolio-primary dark:bg-portfolio-primary/20">🧠</span>
                Interests & Hobbies
              </h3>
              <ul className="space-y-2 text-muted-foreground dark:text-gray-400">
                <li className="flex items-center">
                  <span className="mr-2">🚀</span>
                  <span>Exploring AI, IoT, Blockchain</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📱</span>
                  <span>Building Flutter Apps</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🧪</span>
                  <span>Tech Experimentation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

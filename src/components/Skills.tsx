import { motion } from "framer-motion";

const Skills = () => {
  const technicalSkills = [
    { 
      name: "Flutter", 
      percentage: 95, 
      color: "from-blue-400 to-indigo-600",
      icon: "🌀"
    },
    { 
      name: "REST API Integration", 
      percentage: 90, 
      color: "from-cyan-400 to-blue-600",
      icon: "🌐"
    },
    { 
      name: "GraphQL", 
      percentage: 82, 
      color: "from-fuchsia-400 to-pink-600",
      icon: "🔗"
    },
    { 
      name: "Firebase", 
      percentage: 90, 
      color: "from-yellow-500 to-orange-600",
      icon: "🔥"
    },
    { 
      name: "Database", 
      percentage: 86, 
      color: "from-teal-400 to-emerald-600",
      icon: "🗄️"
    },
    { 
      name: "Realtime Database", 
      percentage: 88, 
      color: "from-green-400 to-emerald-600",
      icon: "⚡"
    },
    { 
      name: "Crashlytics", 
      percentage: 84, 
      color: "from-rose-400 to-red-600",
      icon: "🛠️"
    },
    { 
      name: "Analytics", 
      percentage: 85, 
      color: "from-violet-400 to-indigo-600",
      icon: "📈"
    },
    { 
      name: "Firebase Cloud Functions", 
      percentage: 83, 
      color: "from-sky-400 to-blue-700",
      icon: "☁️"
    },
    { 
      name: "Push Notifications", 
      percentage: 90, 
      color: "from-amber-400 to-orange-600",
      icon: "🔔"
    },
  ];

  const tools = [
    { name: "Flutter SDK" },
    { name: "Dart" },
    { name: "REST APIs" },
    { name: "GraphQL" },
    { name: "Firebase Auth" },
    { name: "Cloud Firestore" },
    { name: "Realtime Database" },
    { name: "Firebase Cloud Functions" },
    { name: "Firebase Crashlytics" },
    { name: "Firebase Analytics" },
    { name: "Push Notifications" },
    { name: "FCM" },
    { name: "SQLite" },
    { name: "Hive" },
    { name: "Shared Preferences" },
    { name: "State Management" }
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">📊 Skills Overview</h2>
        <div className="w-20 h-1 bg-portfolio-primary mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg dark:bg-gray-800/70 dark:border-white/5"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="text-xl leading-none" aria-hidden="true">
                        {skill.icon}
                      </div>
                      <span className="font-medium dark:text-white">{skill.name}</span>
                    </div>
                    <span className="dark:text-white">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div>
            <motion.div
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg dark:bg-gray-800/70 dark:border-white/5"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="bg-white/60 px-4 py-2 rounded-full shadow hover:shadow-md transition-all flex items-center justify-center dark:bg-gray-700/40 dark:text-white border border-portfolio-primary/15"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    title={tool.name}
                  >
                    <span className="text-sm font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

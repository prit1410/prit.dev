import { motion } from "framer-motion";
import { 
  CheckSquare, 
  Github, 
  Figma, 
  Code,
  Database
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { 
      name: "Flutter", 
      percentage: 95, 
      color: "from-blue-400 to-indigo-600",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          className="text-blue-500"
          fill="currentColor"
        >
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"></path>
        </svg>
      )
    },
    { 
      name: "Python", 
      percentage: 85, 
      color: "from-yellow-400 to-amber-600",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24"
          className="text-yellow-500"
          fill="currentColor"
        >
          <path d="M14 18.594v-1.417c0-1.445-.075-2.59-.216-3.454a8.804 8.804 0 0 0-.8-2.717 4.319 4.319 0 0 0-1.546-1.616 4.248 4.248 0 0 0-2.248-.55c-1.099 0-2.033.21-2.807.63-.766.414-1.368.99-1.818 1.74a6.536 6.536 0 0 0-.893 2.526c-.155.95-.233 2.009-.233 3.178v.909c0 1.191.078 2.264.233 3.223.163.958.452 1.78.875 2.465.422.677 1.015 1.202 1.77 1.566.757.372 1.726.558 2.896.558 1.21 0 2.228-.198 3.064-.594.835-.388 1.504-.964 2.012-1.722.507-.767.852-1.689 1.028-2.778.18-1.08.27-2.317.27-3.708v-.635H9.964v1.544h2.675c-.233 2.154-.746 3.671-1.532 4.552-.778.881-1.803 1.33-3.064 1.33-.91 0-1.64-.183-2.183-.54-.544-.357-.96-.882-1.26-1.566-.292-.692-.487-1.523-.577-2.5-.09-.974-.137-2.09-.137-3.346 0-1.304.043-2.451.128-3.437.086-.986.275-1.822.569-2.508.292-.685.71-1.208 1.242-1.549.54-.34 1.21-.513 2.021-.513.868 0 1.56.178 2.065.531.507.348.901.84 1.19 1.474.292.635.48 1.385.564 2.256.096.871.144 1.832.144 2.89v.828h1.16Z"/>
        </svg>
      )
    },
    { 
      name: "Java", 
      percentage: 75, 
      color: "from-red-400 to-rose-600",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24"
          className="text-red-500"
          fill="currentColor"
        >
          <path d="M8.85 15.937c0 .143-1.343.858-2.186.858-1.715 0-3.429-.715-3.429-1.858 0-1.143 1.714-2.286 5.143-2.286.457 0 .457 3.286.457 3.286h.015zm-1.71-14.57s-2.873 1.714-2.873 4.287c0 2.572 1.715 3.429 2 5.143.287 1.715-1.143 3.429-1.143 3.429s2-1.429 1.429-3.429c-.572-2-2.286-3.143-2-5.143.286-2 2.572-4.287 2.572-4.287h.015zm3.143 9.143s-1.429.571-1.429 1.428c0 .858 1.143 1.715 3.143 1.715 2 0 3.715-.858 3.715-1.428 0-.572-.857-1.143-1.429-1.429.571 0 1.715.858 1.715 1.429 0 .572-2.286 2-4 2-1.715 0-4-.572-4-2.143s2.285-1.572 2.285-1.572zm9.128 7.234c0-.38-.572-.572-1.143-.572-.571 0-1.143.143-1.143.572 0 .428.715.857 1.143.857.428 0 1.143-.429 1.143-.857zm-6.571-12c3.429 2.857-2.286 7.428-2.286 7.428 0-.571.286-2.857-1.429-4.857-1.715-2-3.715-3.143 4-2.572h-.3l.015.001zm-.286 13.143c-5.714 0-8.285 1.143-8.285 2.143 0 1 3.143 2 8.285 2s7.143-1.143 7.143-2c0-.857-1.428-2.143-7.143-2.143zm-.572-9.143c-1.143 0-2.286-.286-2.286-1.143 0-.857.715-1.428 2-1.428 1.286 0 2.286.571 2.286 1.143 0 .571-.429 1.428-2 1.428z"/>
        </svg>
      )
    },
    { 
      name: "Firebase", 
      percentage: 70, 
      color: "from-yellow-500 to-orange-600",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24"
          className="text-yellow-600"
          fill="currentColor"
        >
          <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
        </svg>
      )
    },
    { 
      name: "Generative AI", 
      percentage: 85, 
      color: "from-purple-400 to-pink-600",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24"
          className="text-purple-500"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.61-7.35c-.07.17-.13.33-.18.49-.18.46-.37.93-.37 1.86h-2c0-1.25.27-2.05.57-2.82.3-.77.63-1.62.63-2.18 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .93-.36 1.77-.69 2.65z"/>
        </svg>
      )
    },
    { 
      name: "Prompt Engineering", 
      percentage: 90, 
      color: "from-green-400 to-emerald-600",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24"
          className="text-green-500"
          fill="currentColor"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12z"/>
        </svg>
      )
    },
  ];

  const softSkills = [
    { name: "Teamwork", icon: "🤝", color: "bg-blue-400/10" },
    { name: "Problem Solving", icon: "🧩", color: "bg-purple-400/10" },
    { name: "Communication", icon: "🗣️", color: "bg-green-400/10" },
    { name: "Time Management", icon: "⏱️", color: "bg-orange-400/10" },
  ];

  const tools = [
    { 
      name: "React", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-blue-400" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      )
    },
    { 
      name: "Figma", 
      icon: (
        <Figma className="text-purple-500" size={24} />
      )
    },
    { 
      name: "VS Code", 
      icon: (
        <Code className="text-blue-500" size={24} />
      )
    },
    { 
      name: "Android Studio",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-green-600" fill="currentColor">
          <path d="M17.7 10.2c.2-1.7.9-3.3 2-4.4L17 3a6.8 6.8 0 0 1-2.2 9.7 6.8 6.8 0 0 1-9.8-2c-.7-1.2-1-2.6-.9-4L2 9.1a9.07 9.07 0 0 0 2.6 6.5H4c-.4 0-.7.3-.7.7s.3.7.7.7h7.8c.8 0 1.6-.3 2.2-.8.6.5 1.4.8 2.2.8h3.8c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-.5c1.1-1.4 1.8-3.3 1.8-5.2 0-2.2-.8-4.2-2.2-5.7L17 3.6c1.1 1.1 1.9 2.6 2 4.3-.7.2-1.3.8-1.3 1.5s.6 1.4 1.3 1.5c-.2 1.7-.9 3.2-2 4.3l1.7 1.7c1.5-1.5 2.5-3.6 2.5-5.9 0-2.2-.8-4.2-2.2-5.7l3.1-3.1L21 .8 1.2 20.6l1 1.1 3.7-3.7c1.5 1.4 3.4 2.2 5.5 2.2 2.2 0 4.3-.9 5.7-2.6l3.7 3.7 1.1-1.1L12 9.9l-.1.1c-1 1-2.4 1.6-3.9 1.6-1.2 0-2.4-.5-3.3-1.3-.8-.8-1.3-1.6-1.5-2.7v-.1c-.2-1.1 0-2.2.6-3.1.5-1 1.4-1.8 2.4-2.1C7.4 2.1 8.6 2.3 9.6 3c1 .6 1.7 1.6 2 2.7l.1.1h.1c.4 1.4 1.6 2.3 3 2.3s2.6-.9 3-2.3h.1l.1-.1c.3-1.2 1-2.1 2-2.7 1-.6 2.2-.9 3.3-.6 1 .2 1.9 1 2.4 2.1.6.9.8 2 .6 3.1v.1c-.2 1-.7 1.9-1.5 2.7-1.7 1.7-4.4 1.8-6.2.3l-.6-.6 1.4-1.4c1 .7 2.4.6 3.3-.3.5-.5.8-1 1-1.7.1-.6 0-1.2-.3-1.7-.3-.5-.7-1-1.3-1.2-.5-.2-1.2-.2-1.7 0-.6.2-1 .6-1.3 1.1-.4.7-.4 1.5-.2 2.2 0 .2 0 .4-.2.6l-.6.6-5.5 5.5-1.4-1.4 5.5-5.5c.1-.1.3-.2.6-.2.7.3 1.6.2 2.2-.2.6-.4.9-.9 1.1-1.5zm-5.2 8.7l1.4 1.4-.9.9c-1.1 1.1-2.7 1.8-4.3 1.8-1.6 0-3.2-.6-4.3-1.8-1.2-1.2-1.8-2.7-1.8-4.3s.6-3.2 1.8-4.3l.9-.9 1.4 1.4-.9.9c-.8.8-1.2 1.8-1.2 2.9 0 1.1.4 2.1 1.2 2.9.8.8 1.8 1.2 2.9 1.2 1.1 0 2.1-.4 2.9-1.2l.9-.9zm6.7-5.8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
        </svg>
      )
    },
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
                      <div className="flex-shrink-0 dark:text-white">
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
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg mb-6 dark:bg-gray-800/70 dark:border-white/5"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Soft Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`rounded-xl p-5 flex items-center ${skill.color} border border-white/40 hover:shadow-lg dark:border-white/10`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <span className="font-medium dark:text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg dark:bg-gray-800/70 dark:border-white/5"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    className="bg-white/60 p-4 rounded-xl shadow hover:shadow-md transition-all flex items-center justify-center dark:bg-gray-700/40 dark:text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    title={tool.name}
                  >
                    {tool.icon}
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

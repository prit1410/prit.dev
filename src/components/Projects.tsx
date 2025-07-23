import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Pixagram - Social AI Image Generator",
      description: "A social platform for AI-powered image generation with interactive features",
      features: [
        "Custom style selection",
        "Multiple aspect ratio support",
        "Social image exploration",
        "Chat-like image generation interface"
      ],
      tags: ["Next.js", "AI", "TypeScript", "Tailwind CSS"],
      image: "https://res.cloudinary.com/dszdqpahf/image/upload/v1749537623/image_generator/screenshots/rr4pd40eitrn6mqturpz.png",
      link: "https://prit1410.github.io/pixagram/pixagram.html"
    },
    {
      title: "E-Learning Website",
      description: "Built a full-stack website using HTML, CSS, JavaScript & Firebase",
      features: ["User authentication", "Course dashboard", "Real-time database"],
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      image: "https://res.cloudinary.com/dszdqpahf/image/upload/v1749538328/thumbnail/fza5zbq0gzup3evc76kd.png"
    },
    {
      title: "ExpeneVista – AI Budget Management System",
      description: "Flutter application with modern UI and AI integrations",
      features: ["Expense tracking", "AI Suggestions", "Analytics and Chart view"],
      tags: ["Flutter", "Firebase", "AI", "SQLite"],
      image: "https://res.cloudinary.com/dszdqpahf/image/upload/v1753249045/Wil_dnnt6q.png",
      link: "https://prit1410.github.io/expensevista/expensevista.html"
    }
  ];

  return (
    <section id="projects" className="section-container bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">💼 Projects</h2>
        <div className="w-20 h-1 bg-portfolio-primary mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <a href={project.link} className="block h-full" target="_blank" rel="noopener noreferrer">
                <Card className="overflow-hidden card-hover border-portfolio-primary/10 h-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="bg-gradient-to-r from-portfolio-primary/5 to-portfolio-accent/5">
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1 mb-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-portfolio-primary">
                            <polyline points="9 11 12 14 22 4"></polyline>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                          </svg>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-portfolio-primary/10 text-portfolio-primary rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            These are some of my featured projects. I'm constantly working on new ideas and improving my skills.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

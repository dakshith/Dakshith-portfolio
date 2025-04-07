import { motion } from "framer-motion";
import { fadeIn, scrollReveal, elasticBounce, staggerContainer } from "@/lib/framer-animations";
import { GlassCard } from "@/components/ui/glass-card";
import { ExperienceItem } from "@/lib/types";

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      position: "Senior Full Stack Developer & Team Lead",
      company: "Limendo",
      period: "2022 - Present",
      description: [
        
       " Developed and delivered cross-platform mobile and web applications using React Native, ReactJS, Python Django, and Node.js, ensuring high performance and scalability.",
        
        "Optimized PostgreSQL and MySQL databases to enhance application performance for Kassa, a gastronomy solution for European restaurants. Contributed to Yodalytics, an analytics and automated lead generation platform for the European market.",
        
       " Designed and implemented a microservices architecture using Docker, Redis, and GIT, and set up CI/CD pipelines to streamline deployments and  minimize downtime.",
        
        "Enhanced development processes by implementing best practices in API design, data structures, and cloud services, improving both efficiency and  system reliability."
      ],
      technologies: ["Python","Django", "ReactJS","React Native", "NodeJS"],
      colorClass: "bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-100"
    },
    {
      id: 2,
      position: "Technology Lead",
      company: "Financepeer (Leo1)",
      period: "Oct 2021 - Mar 2022",
      description: [
        "Spearheaded the development of a SaaS platform for 6 B2B customers, enhancing operational efficiency and client satisfaction through innovative ReactJS and Python Django solutions.",
        "Led the creation of a prepaid credit card management system (UVA) using Python, Django, PostgreSQL, React, and React Native, optimizing financial workflows and elevating user experiences.",
        "Facilitated Agile practices, including sprint planning, daily stand-ups, and retrospectives, to enhance team collaboration and project tracking across stakeholders.",
    
      ],
      technologies: ["Python","Django", "ReactJS","React Native"],
      colorClass: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-100"
    },
    {
      id: 3,
      position: "Software Engineer",
      company: "Pacewisdom Solutions",
      period: "Aug 2017 - June 2021",
      description: [
        "Developed custom software solutions for clients, covering backend, frontend, and database functionalities using Python, Django, ReactJS, Node.js, PostgreSQL, MySQL, and REST API.",
        "Designed and deployed full-stack web applications tailored to client needs, enhancing operational efficiency and introducing innovative features.",
        "Managed a web application for a medical industry client, showcasing expertise in PHP, Laravel, MySQL, and REST API integration, leading to improved customer engagement and subscriptions.",
        "Collaborated with cross-functional teams to deliver timely project releases, implementing Agile practices and ensuring client satisfaction through consistent communication and feedback."
      ],
      technologies: ["Python","Django", "ReactJS","PHP", "Laravel", "MySQL"],
      colorClass: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-100"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}
        >
          Work <span className="bg-gradient-to-r from-primary-600 to-pink-500 text-transparent bg-clip-text">Experience</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 via-indigo-500 to-pink-500 rounded-full"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-primary-400 to-pink-400 opacity-50 blur-sm rounded-full"
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-gray-800 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.2, 
                    duration: 0.8,
                    times: [0, 0.6, 1],
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-400 opacity-40"
                    animate={{ 
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className={`lg:w-7/12 ${index % 2 === 0 ? 'ml-auto pl-12 lg:pl-0' : 'mr-auto pr-12 lg:pr-0'}`}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.3)}
                >
                  <GlassCard 
                    className="p-6"
                    variant={index % 3 === 0 ? "gradient" : index % 3 === 1 ? "enhanced" : "3d"}
                    hoverEffect={true}
                  >
                    <motion.div 
                      className="flex items-center justify-between mb-4"
                      variants={scrollReveal}
                    >
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <motion.span 
                        className={`text-sm font-medium px-3 py-1 ${exp.colorClass} rounded-full`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >{exp.period}</motion.span>
                    </motion.div>
                    
                    <motion.h4 
                      className="text-lg font-medium mb-4"
                      variants={scrollReveal}
                      custom={1}
                    >{exp.company}</motion.h4>
                    
                    <motion.ul 
                      className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400"
                      variants={staggerContainer}
                    >
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i}
                          variants={fadeIn("up", i * 0.1)}
                          custom={i}
                          className="transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400"
                        >{item}</motion.li>
                      ))}
                    </motion.ul>
                    
                    <motion.div 
                      className="mt-4 flex flex-wrap gap-2"
                      variants={elasticBounce}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={tech} 
                          className={`px-3 py-1 ${exp.colorClass} rounded-full text-sm`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 10,
                            delay: techIndex * 0.05
                          }}
                        >{tech}</motion.span>
                      ))}
                    </motion.div>
                  </GlassCard>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

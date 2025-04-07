import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, scrollReveal, elasticBounce } from "@/lib/framer-animations";
import { GlassCard } from "@/components/ui/glass-card";
import { FilterButtonGroup } from "@/components/ui/filter-button-group";
import { Project } from "@/lib/types";
import { ExternalLink, Github, FileText } from "lucide-react";
import { useLanguage } from "@/context/language-context";

// Import project images
import projectImage1 from "@/assets/WhatsApp Image 2025-04-07 at 3.32.40 PM (1).jpeg";
import projectImage2 from "@/assets/WhatsApp Image 2025-04-07 at 3.32.40 PM (2).jpeg";
import projectImage3 from "@/assets/WhatsApp Image 2025-04-07 at 3.32.40 PM (3).jpeg";

export default function Projects() {
  const { t } = useLanguage();
  
  const projects: Project[] = [
    {
      id: 1,
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      image: projectImage1,
      categories: ["web", "backend"],
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/dakshith",
      demoUrl: "https://project1.dakshith.com"
    },
    {
      id: 2,
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      image: projectImage2,
      categories: ["mobile"],
      technologies: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com/dakshith",
      demoUrl: "https://project2.dakshith.com"
    },
    {
      id: 3,
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      image: projectImage3,
      categories: ["backend"],
      technologies: ["Python", "Docker", "AWS"],
      githubUrl: "https://github.com/dakshith",
      demoUrl: "#"
    }
  ];

  const [filter, setFilter] = useState("All");
  const filters = [
    t("projects.filters.all"), 
    t("projects.filters.web"), 
    t("projects.filters.mobile"), 
    t("projects.filters.backend")
  ];

  // Map filter display names back to internal filter values
  const getFilterValue = (displayFilter: string) => {
    if (displayFilter === t("projects.filters.all")) return "All";
    if (displayFilter === t("projects.filters.web")) return "web";
    if (displayFilter === t("projects.filters.mobile")) return "mobile";
    if (displayFilter === t("projects.filters.backend")) return "backend";
    return displayFilter.toLowerCase();
  };

  const filteredProjects = projects.filter(project => 
    filter === t("projects.filters.all") || project.categories.includes(getFilterValue(filter))
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}
        >
          {t("projects.title")} <span className="bg-gradient-to-r from-primary-600 to-pink-500 text-transparent bg-clip-text">{t("projects.subtitle")}</span>
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}
        >
          <FilterButtonGroup 
            filters={filters} 
            onChange={setFilter} 
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn("up", index * 0.1)}
              whileHover={{ translateY: -8 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard 
                className="overflow-hidden h-full" 
                variant={index % 3 === 0 ? "gradient" : index % 3 === 1 ? "enhanced" : "3d"} 
                hoverEffect={true}
              >
                <div className="relative overflow-hidden h-48 rounded-t-xl">
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-white text-xl font-semibold p-4 drop-shadow-md">{project.title}</h3>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.p 
                    className="text-gray-600 dark:text-gray-400 mb-4"
                    variants={scrollReveal}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    variants={elasticBounce}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.7 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={tech} 
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-100 rounded-full text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >{tech}</motion.span>
                    ))}
                  </motion.div>
                  
                  <div className="flex justify-between">
                    <motion.a 
                      href={project.githubUrl} 
                      className="text-primary-600 hover:text-primary-700 transition-colors flex items-center"
                      whileHover={{ scale: 1.05, x: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="mr-1 h-4 w-4" /> {t("projects.viewCode")}
                    </motion.a>
                    {project.id === 3 ? (
                      <motion.a 
                        href="#" 
                        className="text-primary-600 hover:text-primary-700 transition-colors flex items-center"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FileText className="mr-1 h-4 w-4" /> {t("projects.caseStudy")}
                      </motion.a>
                    ) : (
                      <motion.a 
                        href={project.demoUrl} 
                        className="text-primary-600 hover:text-primary-700 transition-colors flex items-center"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="mr-1 h-4 w-4" /> {t("projects.liveDemo")}
                      </motion.a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

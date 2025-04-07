import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";
import { GlassCard } from "@/components/ui/glass-card";
import { Code, Layers, Database, Wrench } from "lucide-react";
import { SkillCategory } from "@/lib/types";

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Languages",
      icon: "code",
      skills: ["Python", "PHP", "JavaScript"],
      color: "bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-100",
      darkColor: "bg-primary-900/30 text-primary-100",
    },
    {
      id: 2,
      title: "Frameworks",
      icon: "layers",
      skills: ["Django", "Flask", "Laravel", "ReactJS", "React Native", "Node.js"],
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-100",
      darkColor: "bg-pink-900/30 text-pink-100",
    },
    {
      id: 3,
      title: "Databases",
      icon: "database",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
      color: "bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-100",
      darkColor: "bg-primary-900/30 text-primary-100",
    },
    {
      id: 4,
      title: "Other Technologies",
      icon: "wrench",
      skills: ["Redis", "Celery", "AWS", "Docker", "GraphQL", "REST API", "WebSocket", "CI/CD", "Agile", "Team Leadership", "Data Structures & Algorithms"],
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-100",
      darkColor: "bg-pink-900/30 text-pink-100",
    },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case "code":
        return <Code size={28} />;
      case "layers":
        return <Layers size={28} />;
      case "database":
        return <Database size={28} />;
      case "wrench":
        return <Wrench size={28} />;
      default:
        return <Code size={28} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}
        >
          My <span className="bg-gradient-to-r from-primary-600 to-pink-500 text-transparent bg-clip-text">Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.slice(0, 3).map((category, index) => (
            <motion.div 
              key={category.id}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn("up", index * 0.1)}
              whileHover={{ translateY: -8 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-6 h-full">
                <div className={`w-16 h-16 rounded-xl ${category.color.split(' ')[0]} flex items-center justify-center mb-6 mx-auto`}>
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-2xl font-semibold text-center mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <span key={skill} className={`px-4 py-2 ${category.color} rounded-full`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
          
          {/* Other Technologies - Full width */}
          <motion.div 
            className="md:col-span-2 lg:col-span-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn("up", 0.3)}
            whileHover={{ translateY: -8 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-6">
              <div className={`w-16 h-16 rounded-xl ${skillCategories[3].color.split(' ')[0]} flex items-center justify-center mb-6 mx-auto`}>
                {getIcon(skillCategories[3].icon)}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-6">{skillCategories[3].title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillCategories[3].skills.map((skill) => (
                  <span key={skill} className={`px-4 py-2 ${skillCategories[3].color} rounded-full`}>
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

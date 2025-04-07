import { motion } from "framer-motion";
import { fadeIn, staggerContainer, rotate3d, scrollReveal, elasticBounce } from "../../lib/framer-animations";
import { GlassCard } from "../../components/ui/glass-card";
import { MapPin, Ticket, Languages, UserPlus } from "lucide-react";
import { useLanguage } from "../../context/language-context";
import profileImage2 from "../../assets/profile-2.jpeg";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}
        >
          {t("about.title")} <span className="bg-gradient-to-r from-primary-600 to-pink-500 text-transparent bg-clip-text">{t("about.subtitle")}</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-2/5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn("right", 0.2)}
          >
            <motion.div 
              className="relative w-full max-w-md mx-auto"
              variants={rotate3d}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-pink-500 rounded-2xl blur opacity-30"></div>
              <motion.div 
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                initial={{ rotateY: 0 }}
                whileHover={{ 
                  rotateY: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img 
                  src={profileImage2} 
                  alt="Dakshith Thior Narayana" 
                  className="w-full h-auto object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-500/0 to-primary-500/20 opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn("left", 0.4)}
          >
            <GlassCard 
              className="p-8"
              variant="enhanced"
              hoverEffect={true}
            >
              <div className="space-y-4 mb-6">
                <motion.p 
                  className="text-lg"
                  variants={scrollReveal}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {t("about.description1")}
                </motion.p>
                <motion.p 
                  className="text-lg"
                  variants={scrollReveal}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.1 }}
                >
                  {t("about.description2")}
                </motion.p>
                <motion.p 
                  className="text-lg"
                  variants={scrollReveal}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2 }}
                >
                  {t("about.description3")}
                </motion.p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  variants={elasticBounce} 
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/30 transition-colors"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="mt-1 text-primary-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p>Germany</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={elasticBounce} 
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/30 transition-colors"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="mt-1 text-primary-600">
                    <Ticket size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visa Status</h3>
                    <p>German National Visa - Chancenkarte</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={elasticBounce} 
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/30 transition-colors"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="mt-1 text-primary-600">
                    <Languages size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Languages</h3>
                    <ul>
                      <li>English: Fluent</li>
                      <li>German: Basic</li>
                    </ul>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={elasticBounce} 
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/30 transition-colors"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="mt-1 text-primary-600">
                    <UserPlus size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expertise</h3>
                    <p>Full Stack Development, Team Leadership, Software Architecture</p>
                  </div>
                </motion.div>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

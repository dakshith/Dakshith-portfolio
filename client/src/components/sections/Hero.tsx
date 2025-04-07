import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, GitMerge, Code, Layers } from "lucide-react";
import { fadeIn, float, typingContainer, typingCharacter, gradientAnimation, rotate3d, elasticBounce } from "../../lib/framer-animations";
import { useLanguage } from "../../context/language-context";
// import profileImage from "../../assets/profile-1.jpeg";
import profileImage from "../../assets/profile-5.jpeg"; 
import resumePdf from "../../assets/DakshithThiorNarayanaCv.pdf";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Enhanced Background animation effects with noise texture */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary-400/30 blur-3xl"
          variants={float}
          initial="initial"
          animate="animate"
          style={{ filter: "hue-rotate(0deg)" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-72 h-72 rounded-full bg-pink-400/30 blur-3xl"
          variants={float}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s", filter: "hue-rotate(45deg)" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-violet-400/30 blur-3xl"
          variants={float}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "1s", filter: "hue-rotate(-30deg)" }}
        />
        
        {/* Decorative tech-themed SVG shapes */}
        <motion.div 
          className="hidden md:block absolute top-24 right-1/4 text-primary-500/20 dark:text-primary-400/20"
          animate={{ 
            rotate: [0, 15, 0], 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Code size={70} strokeWidth={1} />
        </motion.div>
        
        <motion.div 
          className="hidden md:block absolute bottom-1/4 right-40 text-pink-500/20 dark:text-pink-400/20"
          animate={{ 
            rotate: [0, -10, 0], 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        >
          <GitMerge size={60} strokeWidth={1} />
        </motion.div>
        
        <motion.div 
          className="hidden md:block absolute top-[40%] left-40 text-violet-500/20 dark:text-violet-400/20"
          animate={{ 
            rotate: [0, 20, 0], 
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        >
          <Layers size={80} strokeWidth={1} />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 mb-6 sm:mb-8 lg:mb-0 order-2 lg:order-1"
          initial="initial"
          animate="animate"
          variants={fadeIn("right")}
        >
          {/* New highlight badge */}
          <motion.div
            className="inline-block mb-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-100 font-medium text-xs sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="mr-2">✦</span>Full-stack Developer
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight">
            <span>{t("hero.greeting")} </span>
            <motion.span 
              className="text-gradient relative inline-block"
              variants={gradientAnimation}
              initial="initial"
              animate="animate"
            >
              <span className="block sm:inline">Dakshith Thior Narayana</span>
            </motion.span>
          </h1>
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 overflow-hidden"
            variants={typingContainer}
            initial="initial"
            animate="animate"
          >
            {t("hero.role").split("").map((char, index) => (
              <motion.span key={index} variants={typingCharacter}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
            {t("hero.tagline")}
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6">
            <motion.a 
              href={resumePdf}
              download="Dakshith_Thior_Narayana_CV.pdf"
              className="inline-flex items-center px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-primary-600 to-pink-500 hover:from-primary-700 hover:to-pink-600 text-white rounded-xl shadow-lg shadow-primary-500/20 transition-all transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={elasticBounce}
              initial="initial"
              animate="animate"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t("hero.resume_button")}
            </motion.a>
            
            <motion.a 
              href="#contact"
              className="inline-flex items-center px-4 sm:px-6 py-3 sm:py-3.5 backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 border-2 border-primary-200 dark:border-primary-900/50 hover:border-primary-600 dark:hover:border-primary-400 hover:bg-primary-600/10 text-primary-600 dark:text-primary-400 rounded-xl transition-all transform hover:-translate-y-1 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={elasticBounce}
              initial="initial"
              animate="animate"
              style={{ animationDelay: "0.1s" }}
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              {t("hero.contact_button")}
            </motion.a>
          </div>
          
          {/* Tech stack pills */}
          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mr-2 py-1">
              Tech Stack:
            </div>
            {["Python", "Django", "React", "React Native", "AWS","NodeJS"].map((tech, index) => (
              <motion.span 
                key={tech}
                className="px-2.5 sm:px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs sm:text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "var(--color-primary-100)", 
                  color: "var(--color-primary-900)"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          initial="initial"
          animate="animate"
          variants={fadeIn("left", 0.3)}
        >
          {/* Enhanced 3D Profile card with backdrop glow and parallax effect */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glow effect behind the image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
            
            <motion.div 
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-white/80 dark:border-gray-800/80 shadow-[0_0_25px_rgba(0,0,0,0.2),_inset_0_0_15px_rgba(255,255,255,0.5)] dark:shadow-[0_0_35px_rgba(0,0,0,0.4),_inset_0_0_15px_rgba(255,255,255,0.1)] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm"
              variants={rotate3d}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
              drag
              dragConstraints={{ 
                top: -10, 
                left: -10, 
                right: 10, 
                bottom: 10 
              }}
              dragElastic={0.1}
            >
              <motion.img 
                src={profileImage} 
                alt="Dakshith Thior Narayana" 
                className="object-cover w-full h-full"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Enhanced reflection effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-500/10 to-white/30 dark:from-transparent dark:via-primary-500/20 dark:to-primary-400/30 opacity-0 mix-blend-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Interactive circle position indicators - Hidden on smaller screens */}
              <div className="absolute w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity hidden sm:flex">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full" />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
              </div>
            </motion.div>
            
            {/* Caption below the image */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400">
                Based in Germany
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">Scroll Down</div>
        <a 
          href="#about" 
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-primary-600 to-pink-500 hover:from-primary-700 hover:to-pink-600 transition-colors shadow-lg shadow-primary-500/20"
        >
          <ArrowDown size={16} className="sm:hidden" />
          <ArrowDown size={20} className="hidden sm:block" />
        </a>
      </motion.div>
    </section>
  );
}

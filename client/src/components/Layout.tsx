import { ReactNode } from "react";
import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { Menu, X, ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/language-context";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { t } = useLanguage();
  
  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.testimonials"), href: "#testimonials" },
    { name: t("nav.contact"), href: "#contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-[10px] border-b border-gray-200/10 dark:border-gray-800/10 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <a href="#hero" className="text-lg sm:text-xl font-bold font-['Inter'] bg-gradient-to-r from-primary-600 to-pink-500 bg-clip-text text-transparent">
            Dakshith T. N.
          </a>
          
          <nav className="hidden lg:flex space-x-3 xl:space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm xl:text-base hover:text-primary-600 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center">
            <div className="hidden sm:flex space-x-2 mr-3">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white/5 backdrop-blur-[10px] border-t border-gray-200/10 dark:border-gray-800/10 shadow-md"
            >
              <div className="container mx-auto px-4 py-3 flex flex-col">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    className="py-3 border-b border-gray-200/10 dark:border-gray-800/10 last:border-0 hover:text-primary-600 transition-colors flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="sm:hidden flex items-center justify-between py-3 mt-2 border-t border-gray-200/10 dark:border-gray-800/10">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Appearance</span>
                  <div className="flex space-x-3">
                    <ThemeToggle />
                    <LanguageToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="min-h-screen">
        {children}
      </main>

      <footer className="py-10 sm:py-12 bg-gray-800 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold font-['Inter'] bg-gradient-to-r from-primary-400 to-pink-400 text-transparent bg-clip-text mb-2">
                Dakshith Thior Narayana
              </h2>
              <p className="text-gray-400">{t("hero.role")}</p>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-700/50 rounded-full" 
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dakshith-tn/" 
                className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-700/50 rounded-full" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-700/50 rounded-full" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors shadow-lg"
                aria-label="Back to top"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Dakshith Thior Narayana. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

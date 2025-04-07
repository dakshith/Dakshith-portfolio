import { useLanguage } from "../context/language-context";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors font-medium"
      aria-label="Toggle language"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        key={language}
      >
        {t("language")}
      </motion.div>
    </button>
  );
}
import { ReactNode } from "react";
import { motion, MotionProps, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { rotate3d, elasticBounce } from "@/lib/framer-animations";

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "enhanced" | "gradient" | "3d" | "minimal";
  hoverEffect?: boolean;
  animateOnScroll?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default", 
  hoverEffect = false,
  animateOnScroll = true,
  ...motionProps 
}: GlassCardProps) {
  
  // Define design variants based on the variant prop
  const getCardStyle = () => {
    switch(variant) {
      case "enhanced":
        return "bg-white/10 backdrop-blur-[15px] border border-white/20 dark:bg-gray-800/70 dark:border-gray-700/30 rounded-2xl shadow-2xl";
      case "gradient":
        return "bg-gradient-to-br from-white/20 to-white/5 dark:from-gray-800/80 dark:to-gray-900/60 backdrop-blur-[12px] border border-white/10 dark:border-gray-700/20 rounded-2xl shadow-xl";
      case "3d":
        return "bg-white/10 backdrop-blur-[12px] border border-white/20 dark:bg-gray-800/70 dark:border-gray-700/20 rounded-2xl shadow-2xl perspective-1000";
      case "minimal":
        return "bg-white/5 backdrop-blur-[8px] border border-white/5 dark:bg-gray-800/50 dark:border-gray-700/10 rounded-xl shadow-lg";
      default:
        return "bg-white/5 backdrop-blur-[10px] border border-white/10 dark:bg-gray-800/70 dark:border-gray-700/20 rounded-2xl shadow-xl";
    }
  };

  // Choose animation variants based on the variant type
  const getAnimationVariant = (): Variants => {
    if (variant === "3d") return rotate3d;
    if (variant === "enhanced") return elasticBounce;
    return {
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.4 }
      },
      hover: hoverEffect ? {
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      } : {}
    };
  };

  return (
    <motion.div
      className={cn(getCardStyle(), className)}
      variants={getAnimationVariant()}
      initial={animateOnScroll ? "initial" : undefined}
      whileInView={animateOnScroll ? "animate" : undefined}
      whileHover={hoverEffect ? "hover" : undefined}
      viewport={{ once: true, amount: 0.1 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

import { Variants } from "framer-motion";

// Animation easing presets for more professional, polished movements
export const spring = {
  type: "spring",
  stiffness: 100,
  damping: 10
};

export const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut"
  }
};

export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay,
      },
    },
  };
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 0, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const slideIn = (direction: "up" | "down" | "left" | "right" = "up"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
    exit: {
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };
};

// 3D rotation animation for cards and images
export const rotate3d: Variants = {
  initial: { 
    rotateY: 45, 
    opacity: 0 
  },
  animate: { 
    rotateY: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    rotateY: 15,
    scale: 1.05,
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3
    }
  }
};

// Gradient animation with changing colors
export const gradientAnimation: Variants = {
  initial: { background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)" },
  animate: {
    background: [
      "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
      "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
      "linear-gradient(90deg, #FBAB7E 0%, #F7CE68 100%)",
      "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)"
    ],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// Elastic bounce animation
export const elasticBounce: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  }
};

// Staggered typing text animation (for hero sections)
export const typingContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.3
    }
  }
};

export const typingCharacter: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  }
};

// Scroll-triggered reveal animation
export const scrollReveal: Variants = {
  initial: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

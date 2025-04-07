import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";
import { GlassCard } from "@/components/ui/glass-card";
import { Testimonial } from "@/lib/types";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Dakshith is one of the most talented developers I've worked with. His technical expertise and leadership skills transformed our development process and significantly improved our product quality.",
      name: "Michael Johnson",
      position: "CTO",
      company: "TechInnovate",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      content: "Working with Dakshith was a game-changer for our startup. His ability to understand complex business requirements and translate them into elegant technical solutions is remarkable.",
      name: "Sarah Williams",
      position: "Founder",
      company: "GrowthFocus",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
      id: 3,
      content: "Dakshith's problem-solving abilities and attention to detail make him an exceptional developer. He consistently delivered high-quality solutions that exceeded our expectations.",
      name: "David Chen",
      position: "Product Manager",
      company: "InnovateTech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}
        >
          Client <span className="bg-gradient-to-r from-primary-600 to-pink-500 text-transparent bg-clip-text">Testimonials</span>
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mx-4"
            >
              <GlassCard className="p-8">
                <div className="text-4xl text-primary-400 mb-6">
                  <Quote size={40} />
                </div>
                
                <p className="text-lg mb-6 italic">
                  {testimonials[currentTestimonial].content}
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-gray-200 z-10 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-gray-200 z-10 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                index === currentTestimonial 
                  ? "bg-primary-600" 
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

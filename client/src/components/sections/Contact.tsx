import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";
import { GlassCard } from "@/components/ui/glass-card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react";
import { ContactFormData } from "@/lib/types";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters long" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

export default function Contact() {
  const { toast } = useToast();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. Your message has been received and I will get back to you soon via email.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn()}
        >
          Get In <span className="bg-gradient-to-r from-primary-600 to-pink-500 text-transparent bg-clip-text">Touch</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
          <motion.div 
            className="w-full lg:w-2/5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn("right", 0.2)}
          >
            <GlassCard className="p-6 sm:p-8 h-full" variant="gradient">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold">Contact Information</h3>
                <div className="rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm p-1.5 sm:p-2 shadow-lg">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white dark:text-primary-400" />
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="group transition-all p-3 sm:p-4 rounded-xl hover:bg-white/10 dark:hover:bg-gray-800/20 hover:backdrop-blur-sm">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-600/80 to-pink-500/80 flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-0.5 sm:mb-1 text-base sm:text-lg">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-sm sm:text-base">+49-15510825813</p>
                    </div>
                  </div>
                </div>
                
                <div className="group transition-all p-3 sm:p-4 rounded-xl hover:bg-white/10 dark:hover:bg-gray-800/20 hover:backdrop-blur-sm">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-600/80 to-pink-500/80 flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-0.5 sm:mb-1 text-base sm:text-lg">Email</h4>
                      <a 
                        href="mailto:dakshith.narayana@gmail.com" 
                        className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors underline-offset-4 hover:underline text-sm sm:text-base break-all"
                      >
                        dakshith.narayana@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group transition-all p-3 sm:p-4 rounded-xl hover:bg-white/10 dark:hover:bg-gray-800/20 hover:backdrop-blur-sm">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-600/80 to-pink-500/80 flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 transition-transform">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-0.5 sm:mb-1 text-base sm:text-lg">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-sm sm:text-base">Munich, Germany</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-800/50">
                  <h4 className="font-medium mb-4 sm:mb-5 text-center text-sm sm:text-base">Connect with me</h4>
                  <div className="flex justify-center space-x-4 sm:space-x-5">
                    <motion.a 
                      href="https://www.linkedin.com/in/dakshith-tn/" 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500/80 to-blue-700/80 flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/20 transition-all" 
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={18} className="sm:hidden" />
                      <Linkedin size={22} className="hidden sm:block" />
                    </motion.a>
                    <motion.a 
                      href="https://github.com/" 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gray-700/80 to-gray-900/80 flex items-center justify-center text-white shadow-lg hover:shadow-gray-500/20 transition-all" 
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} className="sm:hidden" />
                      <Github size={22} className="hidden sm:block" />
                    </motion.a>
                    <motion.a 
                      href="https://twitter.com/" 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-sky-400/80 to-sky-600/80 flex items-center justify-center text-white shadow-lg hover:shadow-sky-500/20 transition-all" 
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter size={18} className="sm:hidden" />
                      <Twitter size={22} className="hidden sm:block" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-3/5"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn("left", 0.3)}
          >
            <GlassCard className="p-6 sm:p-8" variant="enhanced">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold">Send Me a Message</h3>
                <div className="rounded-full bg-primary-100 dark:bg-primary-900/30 p-1.5 sm:p-2">
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400 transition-colors">Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name"
                        {...register("name")}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 transition-all" 
                        placeholder="Your name"
                      />
                      <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity opacity-0 group-focus-within:opacity-100 border border-primary-500 dark:border-primary-400 shadow-[0_0_0_4px_rgba(var(--primary),0.1)]"></div>
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center">
                        <span className="mr-1.5">⚠️</span>
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2 group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400 transition-colors">Email</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email"
                        {...register("email")}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 transition-all" 
                        placeholder="your.email@example.com"
                      />
                      <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity opacity-0 group-focus-within:opacity-100 border border-primary-500 dark:border-primary-400 shadow-[0_0_0_4px_rgba(var(--primary),0.1)]"></div>
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center">
                        <span className="mr-1.5">⚠️</span>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mb-8 group">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400 transition-colors">Subject</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="subject"
                      {...register("subject")}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 transition-all" 
                      placeholder="What is this regarding?"
                    />
                    <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity opacity-0 group-focus-within:opacity-100 border border-primary-500 dark:border-primary-400 shadow-[0_0_0_4px_rgba(var(--primary),0.1)]"></div>
                  </div>
                  {errors.subject && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <span className="mr-1.5">⚠️</span>
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                
                <div className="mb-8 group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400 transition-colors">Message</label>
                  <div className="relative">
                    <textarea 
                      id="message"
                      {...register("message")}
                      rows={5} 
                      className="w-full px-4 py-3.5 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:border-primary-400 dark:focus:ring-primary-400/20 transition-all resize-none" 
                      placeholder="Write your message here..."
                    />
                    <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity opacity-0 group-focus-within:opacity-100 border border-primary-500 dark:border-primary-400 shadow-[0_0_0_4px_rgba(var(--primary),0.1)]"></div>
                  </div>
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <span className="mr-1.5">⚠️</span>
                      {errors.message.message}
                    </p>
                  )}
                </div>
                
                <motion.button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-pink-500 hover:from-primary-700 hover:to-pink-600 text-white rounded-xl shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-1 text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <div className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </motion.button>
                
                <div className="mt-3 sm:mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
                  Your message will be stored securely and I'll respond as soon as possible.
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

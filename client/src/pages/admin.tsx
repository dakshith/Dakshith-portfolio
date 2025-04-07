import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import { GlassCard } from "@/components/ui/glass-card";
import { ContactMessage } from "@shared/schema";

export default function Admin() {
  const { toast } = useToast();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  
  // The password is hardcoded here for simplicity
  // In a real-world app, you would use proper authentication
  const ADMIN_PASSWORD = "portfolio-admin";

  const { data: messages, isLoading, error } = useQuery<{ success: boolean, data: ContactMessage[] }>({
    queryKey: ['/api/contact'],
    enabled: isAuthorized,
  });

  useEffect(() => {
    // Check if already authorized via localStorage
    const storedAuth = localStorage.getItem("portfolio-admin-auth");
    if (storedAuth === "true") {
      setIsAuthorized(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthorized(true);
      localStorage.setItem("portfolio-admin-auth", "true");
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    localStorage.removeItem("portfolio-admin-auth");
  };

  // Format date to readable format
  const formatDate = (date: Date | string | null) => {
    if (!date) return "Unknown date";
    const dateObj = date instanceof Date ? date : new Date(date);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(dateObj);
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <motion.div
          className="w-full max-w-md"
          initial="initial"
          animate="animate"
          variants={fadeIn()}
        >
          <GlassCard className="p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Access</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors"
                  placeholder="Enter admin password"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-pink-500 hover:from-primary-700 hover:to-pink-600 text-white rounded-xl shadow-lg shadow-primary-500/20 transition-all transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Access Dashboard
              </motion.button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Contact Messages</h1>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Logout
            </button>
          </div>
          <div className="flex items-center justify-center h-64">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-500 border-t-transparent"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Contact Messages</h1>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Logout
            </button>
          </div>
          <GlassCard className="p-8">
            <h2 className="text-xl font-semibold text-red-500 mb-4">Error Loading Messages</h2>
            <p>There was a problem fetching the contact messages. Please try again later.</p>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Contact Messages</h1>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Logout
          </button>
        </div>

        {messages?.data.length === 0 ? (
          <GlassCard className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">No Messages Yet</h2>
            <p>You haven't received any contact form submissions yet.</p>
          </GlassCard>
        ) : (
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {messages?.data.map((message) => (
              <motion.div key={message.id} variants={fadeIn("up", 0.2)}>
                <GlassCard className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">{message.subject}</h2>
                    <span className="text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-100 px-3 py-1 rounded-full">
                      {formatDate(message.createdAt)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">From:</span>
                      <p className="font-medium">{message.name}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Email:</span>
                      <p className="font-medium">{message.email}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Message:</span>
                    <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{message.message}</p>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <a
                      href={`mailto:${message.email}?subject=Re: ${message.subject}`}
                      className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                    >
                      Reply via Email
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
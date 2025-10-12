"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp, Heart, Coffee, MessageCircle, Sparkles } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

// Floating particle component
function FloatingParticle({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-hgreen-400 rounded-full opacity-40"
      initial={{
        x: Math.random() * 100 - 50,
        y: 0,
        scale: 0,
      }}
      animate={{
        x: Math.random() * 100 - 50,
        y: -100,
        scale: [0, 1, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay: delay + Math.random() * 2,
        ease: "easeOut",
      }}
    />
  );
}

// Interactive background grid
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-full bg-hgreen-400"
          style={{ left: `${(i / 20) * 100}%` }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-hgreen-400"
          style={{ top: `${(i / 10) * 100}%` }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

// Interactive social link with hover effects
function SocialLink({ 
  href, 
  icon: Icon, 
  label, 
  delay = 0,
  color = "text-hgreen-700"
}: { 
  href: string; 
  icon: React.ComponentType<{ size: number }>;
  label: string;
  delay?: number;
  color?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`relative glass p-4 rounded-2xl hover:bg-hgreen-100 ${color} transition-all duration-300 group`}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        scale: 1.1, 
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-hgreen-400/20 to-hgreen-600/20 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon */}
      <div className="relative z-10">
        <Icon size={24} />
      </div>
      
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-hgreen-800 text-white text-xs rounded-lg whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {label}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-hgreen-800 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [coffeeClicks, setCoffeeClicks] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCoffeeClick = () => {
    setCoffeeClicks(prev => prev + 1);
    // You could integrate with a coffee donation service here
    window.open("https://buymeacoffee.com", "_blank");
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/hannanahmed100/",
      label: "Connect on LinkedIn",
      delay: 0.1
    },
    {
      icon: FaGithub,
      href: "https://github.com/hannanahmed100",
      label: "Check my GitHub",
      delay: 0.2
    },
    {
      icon: FaEnvelope,
      href: "mailto:hannan.ahmed.dev@gmail.com",
      label: "Send me an email",
      delay: 0.3
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/hannanahmed100",
      label: "Follow on Twitter",
      delay: 0.4
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/your-server",
      label: "Join Discord",
      delay: 0.5
    },
  ];

  return (
    <footer className="relative mt-20 py-16 bg-transparent flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <AnimatedGrid />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Interactive CTA Section */}
        <motion.div
          className="mb-12 p-8 rounded-3xl glass card-shadow border border-hgreen-200/50"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold text-hgreen-800 mb-4 flex items-center justify-center gap-3"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6" />
            Let's Build Something Amazing
            <Sparkles className="w-6 h-6" />
          </motion.h3>
          <p className="text-slate-600 mb-6 text-lg">
            Ready to bring your ideas to life? Let's start a conversation about your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:hannan.ahmed.dev@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-hgreen-600 to-hgreen-700 text-white rounded-xl font-semibold hover:from-hgreen-700 hover:to-hgreen-800 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Start Conversation
            </motion.a>
            
            <motion.button
              onClick={handleCoffeeClick}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Coffee className="w-5 h-5" />
              Buy me a Coffee
              {coffeeClicks > 0 && (
                <motion.span
                  className="text-xs bg-amber-600 px-2 py-1 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {coffeeClicks}
                </motion.span>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          className="flex flex-wrap gap-4 mb-8 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </motion.div>

        {/* Copyright with love */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm text-slate-600 flex items-center gap-2"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Hannan Ahmed
          </motion.p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} All Rights Reserved • Crafted with care
          </p>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll to Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-hgreen-600 to-hgreen-700 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all z-50 group"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <ArrowUp size={20} />
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-hgreen-400"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Enhanced Background Glow */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-hgreen-400/20 to-transparent blur-[100px] opacity-30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden
      />
    </footer>
  );
}
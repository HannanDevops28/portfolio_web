'use client'
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, Phone, Calendar, MessageCircle, Sparkles, Send, CheckCircle } from "lucide-react";

function TiltCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  return (
    <motion.div
      style={{ rotateX, rotateY, x, y }}
      className="glass card-shadow rounded-2xl p-8 text-center cursor-pointer transition-transform relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const posX = e.clientX - rect.left - rect.width / 2;
        const posY = e.clientY - rect.top - rect.height / 2;
        x.set(posX / 10);
        y.set(posY / 10);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {/* Animated background gradient on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-hgreen-400/10 to-hgreen-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      />
      {children}
    </motion.div>
  );
}

export default function ContactSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-28 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-32 left-1/4 w-[28rem] h-[28rem] rounded-full  blur-[120px] opacity-20"
          animate={{ 
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-32 right-1/4 w-[36rem] h-[36rem] rounded-full  blur-[150px] opacity-15"
          animate={{ 
            y: [0, -30, 0],
            x: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2  rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="text-center mb-20 relative">
        <motion.div
          className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full  text-hgreen-700 text-sm font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-4 h-4" />
          Let's Start a Conversation
        </motion.div>
        
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-center text-hgreen-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Ready to Bring Your
          <motion.span 
            className="block bg-gradient-to-r from-hgreen-600 to-hgreen-800 bg-clip-text my-1 text-transparent"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            style={{ backgroundSize: "200% 100%" }}
          >
            Vision to Life?
          </motion.span>
        </motion.h2>
        
        <motion.p
          className="text-center text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Let's transform your ideas into exceptional digital experiences. 
          Whether you're launching a new project or scaling your business, 
          I'm here to help you succeed.
        </motion.p>
      </div>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: Mail,
            title: "Email",
            text: "ahmedhannan846@gmail.com",
            link: "mailto:ahmedhannan846@gmail.com",
            cta: "Send an Email",
            delay: 0.1
          },
          {
            icon: Phone,
            title: "Phone",
            text: "+92-3275475390",
            link: "tel:+92XXXXXXXXX",
            cta: "Call Now",
            delay: 0.2
          },
          {
            icon: Calendar,
            title: "1:1 Consultation",
            text: "Schedule a free discovery call to discuss your project.",
            link: "https://calendly.com/hannanahmed100/30min",
            cta: "Book a Call",
            delay: 0.3
          },
        ].map((card, i) => (
          <TiltCard key={i} delay={card.delay}>
            <motion.div
              className="relative z-10"
              onHoverStart={() => setActiveCard(i)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-hgreen-100 text-hgreen-700 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <card.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-bold text-hgreen-800 mb-2">{card.title}</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">{card.text}</p>
              <motion.a
                href={card.link}
                target={card.title === "1:1 Consultation" ? "_blank" : "_self"}
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-hgreen-600 hover:bg-hgreen-700 text-white rounded-xl font-semibold transition-all duration-300 group/btn"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {card.cta}
                <motion.span
                  animate={{ x: activeCard === i ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </TiltCard>
        ))}
      </div>

    </section>
  );
}
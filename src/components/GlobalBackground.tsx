// components/GlobalBackground.tsx
"use client";
import { motion } from "framer-motion";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-hgreen-50/30 to-blue-50/20" />
      
      {/* Animated Radial Gradients */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(120,220,180,0.15),transparent_50%)]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(100,200,255,0.1),transparent_50%)]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120, 200, 150, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 200, 150, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-hgreen-200/10 to-emerald-300/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/8 to-cyan-300/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.15, 0.08],
          x: [0, -15, 0],
          y: [0, 10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Animated Dot Pattern */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-hgreen-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Light Beams */}
      <motion.div
        className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-hgreen-200/10 to-transparent"
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200/8 to-transparent"
        animate={{ opacity: [0, 0.08, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
}
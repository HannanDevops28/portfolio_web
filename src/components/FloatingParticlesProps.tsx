"use client";
import { motion } from "framer-motion";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  opacity?: number;
  movementDistance?: number;
  duration?: number;
  className?: string;
}

export function FloatingParticles({
  count = 8,
  color = "bg-hgreen-400",
  size = 8,
  opacity = 0.4,
  movementDistance = 30,
  duration = 4,
  className = ""
}: FloatingParticlesProps) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${color} ${className}`}
          style={{
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: opacity,
          }}
          animate={{
            y: [0, -movementDistance, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [opacity * 0.5, opacity, opacity * 0.5],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: duration + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
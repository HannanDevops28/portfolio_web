
"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaJenkins,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiContentful,
  SiJenkins,
  SiTerraform,
  SiAnsible,
} from "react-icons/si";
import { FloatingParticles } from "./FloatingParticlesProps";
import { useState } from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* === Enhanced Smooth Background Elements === */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gentle gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-hgreen-50/40 via-transparent to-emerald-100/30"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Soft floating blobs with smooth edges */}
        <motion.div
          className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-hgreen-200/30 to-emerald-300/20 blur-[120px] rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/25 to-hgreen-300/30 blur-[110px] rounded-full"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -10, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Additional subtle background layers */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-100/10 to-transparent blur-[100px] rounded-full"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* === Enhanced Floating Particles === */}
      <FloatingParticles 
        count={50} 
        color="bg-hgreen-400"
        movementDistance={60}
        duration={7}
        size={3}
      />
     

      {/* === Main Content === */}
      <div className="relative z-10 text-center max-w-6xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-hgreen-700 via-hgreen-600 to-emerald-500 py-3"
          whileHover={{ scale: 1.02 }}
        >
          Engineering{" "}
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Scalable
          </motion.span>{" "}
          Web Systems
          <br />
          with{" "}
          <motion.span
            className="inline-block py-3 bg-gradient-to-r from-emerald-500 to-hgreen-600 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Agile Automation
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/30 rounded-2xl p-6 border border-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            backgroundColor: "rgba(255,255,255,0.4)",
            transition: { duration: 0.3 }
          }}
        >
          I'm <strong className="text-hgreen-700">Hannan Ahmed</strong> — a Senior Software Engineer
          crafting modern web applications with <b>Next.js, Nest.js, and
          microservice architectures</b>, while integrating <b>DevOps automation
          through Terraform, Jenkins, and AWS</b>.
        </motion.p>

        {/* === INTERACTIVE SOFTWARE ENGINEERING FLOW === */}
        <div className="mt-20 flex flex-col items-center justify-center gap-16">
          {/* Top Flow — Software Development */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: <FaReact size={36} />, label: "Frontend", color: "#61DAFB", tech: "React/Next.js" },
              { icon: <SiExpress size={36} />, label: "Backend", color: "#E0234E", tech: "Express.js/Nest.js" },
              { icon: <SiMongodb size={36} />, label: "Database", color: "#4FAA41", tech: "MongoDB/PostgreSQL" },
              { icon: <SiStripe size={36} />, label: "Payments", color: "#635BFF", tech: "Stripe/Payment" },
              { icon: <SiContentful size={36} />, label: "CMS", color: "#00B6F1", tech: "Contentful/APIs" },
            ].map((item, index) => (
              <InteractiveFlowNode
                key={item.label}
                icon={item.icon}
                label={item.label}
                tech={item.tech}
                color={item.color}
                delay={index * 0.15}
                index={index}
              />
            ))}
          </motion.div>

          {/* Animated Connecting Path */}
          <motion.div
            className="relative w-full max-w-4xl h-20 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 800 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M50,100 Q200,50 350,100 T650,100"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#47c485" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              
              {/* Animated dot along the path */}
              <motion.circle
                r="8"
                fill="#47c485"
                initial={{ pathOffset: 0 }}
                animate={{ pathOffset: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path="M50,100 Q200,50 350,100 T650,100"
                />
              </motion.circle>
            </svg>
          </motion.div>

          {/* Bottom Flow — DevOps Automation */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: <FaGitAlt size={36} />, label: "Version Control", color: "#F1502F", tech: "Git/GitHub" },
              { icon: <FaJenkins size={36} />, label: "CI/CD", color: "#D33833", tech: "Jenkins/GitHub Actions" },
              { icon: <SiTerraform size={36} />, label: "IaC", color: "#7B42BC", tech: "Terraform/Ansible" },
              { icon: <FaAws size={36} />, label: "Cloud", color: "#FF9900", tech: "AWS/Cloud" },
              { icon: <FaDocker size={36} />, label: "Containers", color: "#2496ED", tech: "Docker/K8s" },
            ].map((item, index) => (
              <InteractiveFlowNode
                key={item.label}
                icon={item.icon}
                label={item.label}
                tech={item.tech}
                color={item.color}
                delay={index * 0.15 + 0.5}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Enhanced Floating Tech Icons */}
        <InteractiveTechIcons />
      </div>

      {/* === Smooth Texture Overlay === */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/5 pointer-events-none" />
      
      {/* === Subtle Grid Pattern === */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(72,187,120,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(72,187,120,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </section>
  );
}

/* ========= Enhanced Interactive Flow Node ========= */

function InteractiveFlowNode({
  icon,
  label,
  tech,
  color,
  delay,
  index,
}: {
  icon: React.ReactNode;
  label: string;
  tech: string;
  color: string;
  delay: number;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center gap-3 group cursor-pointer"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-24 h-24 flex items-center justify-center rounded-3xl backdrop-blur-xl border border-white/50 shadow-2xl"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8))",
        }}
        whileHover={{ 
          scale: 1.15,
          rotateY: 10,
          transition: { type: "spring", stiffness: 300 }
        }}
        animate={{
          boxShadow: isHovered 
            ? [`0 0 0px ${color}60`, `0 0 30px ${color}80`, `0 0 0px ${color}60`]
            : [`0 0 0px ${color}40`, `0 0 15px ${color}60`, `0 0 0px ${color}40`],
          y: isHovered ? -8 : 0
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Hover effect background */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-100"
          style={{ backgroundColor: `${color}20` }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          style={{ color }}
          animate={{ 
            scale: isHovered ? 1.2 : 1,
            rotateZ: isHovered ? [0, -5, 5, 0] : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>

        {/* Pulse ring effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-3xl border-2"
            style={{ borderColor: color }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.div>
      
      <div className="text-center">
        <motion.span 
          className="text-sm font-semibold text-slate-700 block"
          animate={{ color: isHovered ? color : "#374151" }}
        >
          {label}
        </motion.span>
        <motion.span 
          className="text-xs text-slate-500 block mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          {tech}
        </motion.span>
      </div>
    </motion.div>
  );
}

/* ========= Enhanced Tech Icons ========= */

function InteractiveTechIcons() {
  const leftTech = [
    { icon: <FaReact size={26} />, color: "#61DAFB" },
    { icon: <SiNextdotjs size={26} />, color: "#000000" },
    { icon: <FaNodeJs size={26} />, color: "#68A063" },
  ];

  const rightTech = [
    { icon: <FaAws size={26} />, color: "#FF9900" },
    { icon: <SiTerraform size={26} />, color: "#7B42BC" },
    { icon: <SiAnsible size={26} />, color: "#EE0000" },
  ];

  return (
    <>
      {/* Left side tech stack */}
      <motion.div
        className="absolute left-[5%] top-1/2 hidden md:flex flex-col gap-6"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {leftTech.map((tech, index) => (
          <motion.div
            key={index}
            className="p-3 rounded-2xl backdrop-blur-lg bg-white/40 border border-white/50 shadow-lg cursor-pointer"
            whileHover={{ 
              scale: 1.2, 
              x: 10,
              backgroundColor: "rgba(255,255,255,0.8)",
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.9 }}
            style={{ color: tech.color }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>

      {/* Right side tech stack */}
      <motion.div
        className="absolute right-[5%] top-1/3 hidden md:flex flex-col gap-6"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      >
        {rightTech.map((tech, index) => (
          <motion.div
            key={index}
            className="p-3 rounded-2xl backdrop-blur-lg bg-white/40 border border-white/50 shadow-lg cursor-pointer"
            whileHover={{ 
              scale: 1.2, 
              x: -10,
              backgroundColor: "rgba(255,255,255,0.8)",
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.9 }}
            style={{ color: tech.color }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FloatingParticles } from "./FloatingParticlesProps";

const DynamicOrbit = dynamic(() => import("./OrbitCanvas"), { ssr: false });

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-32 flex flex-col items-center justify-center overflow-hidden"
    >

      {/* === Subtle 3D Canvas Background === */}
      <div className="absolute inset-0 z-0 opacity-70">
        <DynamicOrbit />
      </div>
<FloatingParticles 
    count={6} 
    color="to-hgreen-400"
    size={3}
    movementDistance={25}
  />
      {/* === Text Content === */}
      <div className="relative z-10 text-center max-w-3xl">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-hgreen-700 to-emerald-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Driven by Craft. Fueled by Curiosity.
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-slate-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I'm <strong>Hannan Ahmed</strong> — a software engineer who believes that great
          products blend <span className="text-hgreen-700 font-medium">clarity</span>,
          <span className="text-hgreen-700 font-medium"> design</span>, and
          <span className="text-hgreen-700 font-medium"> performance</span>.  
          My passion lies in turning ideas into reliable, elegant systems — where every pixel
          and pipeline tells a story of precision and intent.
        </motion.p>

        <motion.p
          className="mt-4 text-slate-600 text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Whether it's architecting <strong>microservices</strong> on the cloud, crafting
          seamless <strong>Next.js experiences</strong>, or building <strong>CI/CD pipelines</strong>,
          I thrive at the intersection of creativity and automation.  
          For me, engineering isn’t just about shipping code — it’s about <em>shaping possibilities</em>.
        </motion.p>

        {/* === Interactive CTA Buttons === */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl-2 bg-gradient-to-r from-hgreen-600 to-hgreen-500 text-white font-medium shadow-lg hover:shadow-hgreen-400/40 transition-all duration-300"
          >
            Let’s Collaborate
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl-2 bg-white/70 backdrop-blur-md border border-hgreen-200 text-hgreen-800 font-medium hover:bg-hgreen-100/80 transition-all duration-300"
          >
            Explore My Work
          </a>
        </motion.div>

        {/* === Floating Motivational Words === */}
        <motion.div
          className="mt-20 relative text-center flex flex-wrap justify-center gap-6 text-hgreen-700 font-semibold"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {["Innovation", "Discipline", "Integrity", "Impact", "Curiosity"].map(
            (word, i) => (
              <motion.span
                key={i}
                className="text-lg px-5 py-2 rounded-full bg-hgreen-100/60 shadow-sm border border-hgreen-200 backdrop-blur-md"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

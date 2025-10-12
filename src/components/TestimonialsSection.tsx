"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Quote, 
  Star, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Pause,
  ThumbsUp,
  Share2
} from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at TechNova",
    company: "TechNova Inc.",
    image: "👩‍💼",
    content: "Hannan delivered exceptional work on our e-commerce platform. His expertise in Next.js and microservices architecture helped us scale to handle 10x more traffic while reducing costs by 40%.",
    rating: 5,
    project: "E-commerce Platform",
    duration: "6-month project",
    tags: ["Next.js", "Microservices", "AWS", "Performance"],
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Product Director",
    company: "Finova Solutions",
    image: "👨‍💼",
    content: "The DevOps pipeline Hannan set up reduced our deployment time from 2 hours to 15 minutes. His Terraform and Jenkins expertise transformed our development workflow.",
    rating: 5,
    project: "DevOps Automation",
    duration: "3-month engagement",
    tags: ["Terraform", "Jenkins", "CI/CD", "Automation"],
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Startup Founder",
    company: "EcoCart",
    image: "👩‍🎓",
    content: "Working with Hannan was a game-changer. He not only built our MVP but also mentored our team on best practices. We launched 3 weeks ahead of schedule!",
    rating: 5,
    project: "GreenTech Startup MVP",
    duration: "4-month collaboration",
    tags: ["React", "Node.js", "MongoDB", "Startup"],
  },
  {
    id: 4,
    name: "David Kim",
    role: "Engineering Manager",
    company: "StreamLine AI",
    image: "👨‍🔬",
    content: "Hannan's architectural decisions on our SaaS platform saved us countless hours of refactoring. His code is clean, scalable, and well-documented.",
    rating: 5,
    project: "SaaS Platform Architecture",
    duration: "8-month contract",
    tags: ["System Design", "SaaS", "Scalability", "Documentation"],
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-hgreen-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-hgreen-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-hgreen-800 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[500px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-5">
            <motion.button
              onClick={prevTestimonial}
              className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:bg-white hover:border-hgreen-300 hover:shadow-lg transition-all group"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 text-slate-600 group-hover:text-hgreen-600" />
            </motion.button>

            {/* Play/Pause */}
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:bg-white hover:border-hgreen-300 hover:shadow-lg transition-all group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-slate-600 group-hover:text-hgreen-600" />
              ) : (
                <Play className="w-5 h-5 text-slate-600 group-hover:text-hgreen-600" />
              )}
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:bg-white hover:border-hgreen-300 hover:shadow-lg transition-all group"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-hgreen-600" />
            </motion.button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-hgreen-600 scale-125"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-hgreen-600">50+</div>
            <div className="text-slate-600 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-hgreen-600">100%</div>
            <div className="text-slate-600 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-hgreen-600">5.0</div>
            <div className="text-slate-600 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-hgreen-600">2M+</div>
            <div className="text-slate-600 text-sm">Users Impacted</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative max-w-4xl mx-auto"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Main Card */}
      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
        {/* Quote Icon */}
        <motion.div
          className="absolute -top-6 -left-6 w-12 h-12 bg-hgreen-600 rounded-2xl flex items-center justify-center text-white shadow-lg"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <Quote className="w-6 h-6" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1 * i, type: "spring" }}
              >
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </motion.div>
            ))}
          </div>

          {/* Text - Original content size */}
          <motion.blockquote
            className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "{isExpanded ? testimonial.content : `${testimonial.content.slice(0, 200)}...`}"
            {testimonial.content.length > 200 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 text-hgreen-600 hover:text-hgreen-700 font-medium text-sm"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </motion.blockquote>

          {/* Project Info */}
          <motion.div
            className="flex items-center gap-4 mb-8 p-4 bg-hgreen-50/50 rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex-1">
              <div className="font-semibold text-slate-800">{testimonial.project}</div>
              <div className="text-sm text-slate-600">{testimonial.duration}</div>
            </div>
            <div className="flex gap-2">
              <motion.button
                className="p-2 rounded-xl bg-white border border-slate-200 hover:border-hgreen-300 hover:bg-hgreen-50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThumbsUp className="w-4 h-4 text-slate-600" />
              </motion.button>
              <motion.button
                className="p-2 rounded-xl bg-white border border-slate-200 hover:border-hgreen-300 hover:bg-hgreen-50 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-4 h-4 text-slate-600" />
              </motion.button>
            </div>
          </motion.div>

          {/* Author */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-4xl">{testimonial.image}</div>
            <div className="flex-1">
              <div className="font-bold text-slate-800">{testimonial.name}</div>
              <div className="text-slate-600">{testimonial.role}</div>
              <div className="text-sm text-slate-500">{testimonial.company}</div>
            </div>
            {/* Tags */}
            <div className="hidden md:flex gap-2">
              {testimonial.tags.slice(0, 2).map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 bg-hgreen-100 text-hgreen-700 rounded-full text-xs font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-hgreen-100/50 to-transparent rounded-tr-3xl rounded-bl-3xl" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-8 h-8 bg-green-300 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
    </motion.div>
  );
}
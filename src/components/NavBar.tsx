"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { FaMediumM } from "react-icons/fa";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-white/60 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left — Logo + Name */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/og-image.png"
              alt="Hannan Logo"
              fill
              className="object-cover rounded-full border border-hgreen-300"
            />
          </div>
          <motion.span
            className="font-semibold text-lg text-hgreen-700 tracking-tight"
            animate={{
              textShadow: [
                "0 0 0px rgba(71,196,133,0.3)",
                "0 0 6px rgba(71,196,133,0.7)",
                "0 0 0px rgba(71,196,133,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Hannan Ahmed
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {["projects", "about", "contact"].map((link) => (
            <motion.a
              key={link}
              href={`#${link}`}
              whileHover={{ scale: 1.05, color: "#2fa46a" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer relative py-2"
              onHoverStart={() => setActiveLink(link)}
              onHoverEnd={() => setActiveLink("")}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              
              {/* Animated underline - Only shows on hover */}
              <motion.span
                className="absolute left-0 bottom-0 h-0.5 w-full bg-hgreen-500 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeLink === link ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
          ))}

          {/* Freelancer Links */}
          <div className="flex gap-4 items-center text-hgreen-700">
            <a
              href="https://www.linkedin.com/in/hannanahmed100/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform p-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://medium.com/@hannandevops90"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform p-1"
              aria-label="Medium"
            >
              <FaMediumM size={18} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01a2951ef3dff411f7"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform p-1"
              aria-label="Upwork"
            >
              <SiUpwork size={18} />
            </a>
            <a
              href="https://www.fiverr.com/users/hannanahmed10"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform p-1"
              aria-label="Fiverr"
            >
              <TbBrandFiverr size={18} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-hgreen-700 text-xl p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/80 backdrop-blur-md shadow-lg px-6 py-5 flex flex-col gap-4 items-start"
          >
            {["Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-slate-800 hover:text-hgreen-700 text-base py-1 transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Freelancer Links (Mobile) */}
            <div className="flex gap-5 pt-2">
              <a
                href="https://www.linkedin.com/in/hannanahmed100/"
                target="_blank"
                rel="noreferrer"
                className="p-1"
              >
                <FaLinkedin size={20} className="text-hgreen-700" />
              </a>
              <a
                href="https://medium.com/@hannanahmed100"
                target="_blank"
                rel="noreferrer"
                className="p-1"
              >
                <FaMediumM size={20} className="text-hgreen-700" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~your_upwork_profile"
                target="_blank"
                rel="noreferrer"
                className="p-1"
              >
                <SiUpwork size={20} className="text-hgreen-700" />
              </a>
              <a
                href="https://www.fiverr.com/your_fiverr_username"
                target="_blank"
                rel="noreferrer"
                className="p-1"
              >
                <TbBrandFiverr size={20} className="text-hgreen-700" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating background animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(71,196,133,0.2) 0%, transparent 60%)",
            "radial-gradient(circle at 80% 20%, rgba(71,196,133,0.25) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(71,196,133,0.2) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
    </motion.header>
  );
}
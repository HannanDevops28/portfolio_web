"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiX, FiZoomIn } from "react-icons/fi";
import { useState } from "react";

export default function ProjectCard({
  title,
  desc,
  tags,
  github,
  live,
  image,
  index,
}: {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  live?: string;
  image?: string;
  index?: number;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index! * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="
          group relative rounded-2xl overflow-hidden 
          border border-gray-200 bg-white
          shadow-[0_4px_20px_rgba(0,0,0,0.06)]
          hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          transition-all duration-500
          hover:border-hgreen-300/60 hover:bg-hgreen-50/10
        "
      >
        {/* === Image block === */}
        <div
          className="relative w-full h-44 overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={image || "/placeholder.jpg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-all duration-700"
          />

          {/* Top subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Zoom icon */}
          <div className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md 
              rounded-full text-white opacity-0 group-hover:opacity-100 
              transition-all duration-300">
            <FiZoomIn size={17} />
          </div>
        </div>

        {/* === Content === */}
        <div className="p-5">
          <h3 className="font-semibold text-xl text-hgreen-900 mb-2">
            {title}
          </h3>

          <p className="text-sm text-slate-600 line-clamp-3">
            {desc}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="
                  text-[11px] px-2.5 py-1
                  bg-gradient-to-r from-hgreen-100 to-hgreen-50 
                  text-hgreen-700 border border-hgreen-200/60
                  rounded-full shadow-sm
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* === Buttons === */}
        <div className="
          absolute bottom-3 right-3 flex gap-3
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300
        ">
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="
              p-2 rounded-full bg-white/70 backdrop-blur-md 
              shadow-md border border-gray-200
              text-hgreen-700 hover:shadow-lg transition
            "
          >
            <FaGithub size={18} />
          </motion.a>

          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              className="
                p-2 rounded-full bg-white/70 backdrop-blur-md 
                shadow-md border border-gray-200
                text-hgreen-700 hover:shadow-lg transition
              "
            >
              <FiExternalLink size={18} />
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* === Modal === */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50 flex items-center justify-center 
              bg-black/90 backdrop-blur-md
            "
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close */}
            <button
              className="
                absolute top-5 right-5 p-3 text-white 
                bg-white/10 hover:bg-white/20
                rounded-full backdrop-blur-sm transition
              "
              onClick={() => setIsModalOpen(false)}
            >
              <FiX size={26} />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-5xl max-h-[85vh] mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={image || "/placeholder.jpg"}
                alt={title}
                width={1400}
                height={900}
                className="object-contain max-h-[85vh] rounded-2xl"
              />

              {/* Caption */}
              <div className="
                absolute bottom-0 left-0 right-0 
                bg-gradient-to-t from-black/80 to-transparent 
                p-6 rounded-b-2xl
              ">
                <h3 className="text-white font-semibold text-xl mb-1">
                  {title}
                </h3>
                <p className="text-white/85 text-sm">
                  {desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index! * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative rounded-xl overflow-hidden border border-gray-200 bg-white transition-all"
    >
      {/* === Image === */}
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={image || "/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t  via-white/40 to-transparent" />
      </div>

      {/* === Content === */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-hgreen-800 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-3">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-1 bg-hgreen-100 text-hgreen-700 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* === Buttons === */}
      <div className="absolute bottom-3 right-3 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="p-2  rounded-full shadow-md text-hgreen-700"
        >
          <FaGithub size={16} />
        </motion.a>
        {live && (
          <motion.a
            href={live}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="p-2  rounded-full shadow-md text-hgreen-700"
          >
            <FiExternalLink size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
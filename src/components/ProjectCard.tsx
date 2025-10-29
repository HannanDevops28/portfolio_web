// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";

// export default function ProjectCard({
//   title,
//   desc,
//   tags,
//   github,
//   live,
//   image,
//   index,
// }: {
//   title: string;
//   desc: string;
//   tags: string[];
//   github: string;
//   live?: string;
//   image?: string;
//   index?: number;
// }) {
//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.02 }}
//       whileTap={{ scale: 0.99 }}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: index! * 0.1, duration: 0.5 }}
//       viewport={{ once: true }}
//       className="group relative rounded-xl overflow-hidden border border-gray-200 bg-white transition-all"
//     >
//       {/* === Image === */}
//       <div className="relative w-full h-40 overflow-hidden">
//         <Image
//           src={image || "/placeholder.jpg"}
//           alt={title}
//           fill
//           className="object-cover group-hover:scale-105 transition-transform duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t  via-white/40 to-transparent" />
//       </div>

//       {/* === Content === */}
//       <div className="p-5">
//         <h3 className="font-semibold text-lg text-hgreen-800 mb-2">
//           {title}
//         </h3>
//         <p className="text-sm text-slate-600 line-clamp-3">{desc}</p>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((t) => (
//             <span
//               key={t}
//               className="text-[11px] px-2 py-1 bg-hgreen-100 text-hgreen-700 rounded-full"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* === Buttons === */}
//       <div className="absolute bottom-3 right-3 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
//         <motion.a
//           href={github}
//           target="_blank"
//           rel="noreferrer"
//           className="p-2  rounded-full shadow-md text-hgreen-700"
//         >
//           <FaGithub size={16} />
//         </motion.a>
//         {live && (
//           <motion.a
//             href={live}
//             target="_blank"
//             rel="noreferrer"
//             whileHover={{ scale: 1.15 }}
//             className="p-2  rounded-full shadow-md text-hgreen-700"
//           >
//             <FiExternalLink size={16} />
//           </motion.a>
//         )}
//       </div>
//     </motion.div>
//   );
// }
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
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index! * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative rounded-xl overflow-hidden border border-gray-200 bg-white transition-all"
      >
        {/* === Image with click handler === */}
        <div 
          className="relative w-full h-40 overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={image || "/placeholder.jpg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t via-white/40 to-transparent" />
          
          {/* Zoom icon overlay */}
          <div className="absolute top-2 right-2 p-1.5 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <FiZoomIn size={16} />
          </div>
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
            className="p-2 rounded-full shadow-md text-hgreen-700"
          >
            <FaGithub size={16} />
          </motion.a>
          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15 }}
              className="p-2 rounded-full shadow-md text-hgreen-700"
            >
              <FiExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </motion.div>

      {/* === Full Screen Image Modal === */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors z-10"
              onClick={() => setIsModalOpen(false)}
            >
              <FiX size={24} />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={image || "/placeholder.jpg"}
                alt={title}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] rounded-lg"
              />
              
              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
                <p className="text-white/80 text-sm">{desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
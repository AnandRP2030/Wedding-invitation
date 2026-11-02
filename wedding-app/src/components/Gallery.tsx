import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoldDivider from './GoldDivider';

// Import couple photos
import pStanding from '../assets/images/IMG-20261102-WA0058.jpg';
import pMirror from '../assets/images/IMG-20261102-WA0060.jpg';
import pSeated from '../assets/images/IMG-20261102-WA0057.jpg';
import pArch from '../assets/images/IMG-20261102-WA0056.jpg';

const coupleGallery = [
  {
    src: pStanding,
    title: 'Forever In Love',
    subtitle: 'Aparna & Vishal',
    aspect: 'aspect-[3/4]',
  },
  {
    src: pMirror,
    title: 'Shared Smiles',
    subtitle: 'Moments of Joy',
    aspect: 'aspect-[3/4]',
  },
  {
    src: pSeated,
    title: 'Peaceful Moments',
    subtitle: 'Quiet Grace',
    aspect: 'aspect-[3/4]',
  },
  {
    src: pArch,
    title: 'Traditional Grace',
    subtitle: 'Under Sacred Arches',
    aspect: 'aspect-[3/4]',
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative w-full py-24 md:py-36 bg-[#FCF9F2] overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#9A6F20] font-medium mb-3">
            Cherished Memories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#221B10]">
            Our Gallery
          </h2>
          <GoldDivider style="wave" />
        </motion.div>

        {/* 4-Item Balanced Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {coupleGallery.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-2xl luxury-card p-3 flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item.src)}
            >
              <div className={`w-full ${item.aspect} overflow-hidden rounded-xl bg-[#FAF4E6]`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with delicate gold border */}
              <div className="absolute inset-3 rounded-xl bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <p className="font-serif text-lg tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </p>
                <p className="text-xs text-[#FFF0B8] tracking-widest uppercase mt-0.5">
                  {item.subtitle}
                </p>
                <div className="h-0.5 w-10 bg-[#C9A84C] mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden p-2 sm:p-3 bg-gradient-to-b from-[#C9A84C]/40 to-[#9A6F20]/40 shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Gallery Preview"
                  className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1A0E00] cursor-pointer shadow-lg transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

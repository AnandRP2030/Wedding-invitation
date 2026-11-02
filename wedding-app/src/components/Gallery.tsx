import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoldDivider from './GoldDivider';

// Import couple photos
import pArch from '../assets/images/IMG-20261102-WA0056.jpg';
import pSeated from '../assets/images/IMG-20261102-WA0057.jpg';
import pStanding from '../assets/images/IMG-20261102-WA0058.jpg';
import pMirror from '../assets/images/IMG-20261102-WA0060.jpg';
import pCafe from '../assets/images/1000414078.jpg';
import pCasual from '../assets/images/1000414079.jpg';

const galleryItems = [
  { src: pStanding, title: 'Forever In Love', span: 'col-span-1 md:col-span-2 md:row-span-2' },
  { src: pMirror, title: 'Shared Smiles', span: 'col-span-1' },
  { src: pSeated, title: 'Peaceful Moments', span: 'col-span-1' },
  { src: pArch, title: 'Traditional Grace', span: 'col-span-1 md:col-span-2' },
  { src: pCafe, title: 'Where Our Story Grew', span: 'col-span-1' },
  { src: pCasual, title: 'Together Always', span: 'col-span-1' },
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

        {/* Curated Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative group cursor-pointer overflow-hidden rounded-xl luxury-card ${item.span}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="w-full h-72 sm:h-80 md:h-96 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with delicate gold border */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-serif text-lg tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </p>
                <div className="h-0.5 w-12 bg-[#C9A84C] mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Subtle gold inner border on hover */}
              <div className="absolute inset-3 border border-[#C9A84C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#C9A84C]/40 to-[#9A6F20]/40 shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Gallery Preview"
                  className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#1A0E00] transition-colors"
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoldDivider from './GoldDivider';

// Couple photos
import imgWalkTree1 from '../assets/images/std51.jpg';
import imgCloseSunlight from '../assets/images/std52.png';
import imgMirrorSmile from '../assets/images/std53.png';
import imgWalkTree2 from '../assets/images/std54.jpg';
import imgStandingGarland from '../assets/images/IMG-20261102-WA0058.jpg';
import imgTempleDoorway from '../assets/images/IMG-20261102-WA0056.jpg';
import imgWoodenScreen from '../assets/images/IMG-20261102-WA0057.jpg';
import imgMirrorGaze from '../assets/images/IMG-20261102-WA0060.jpg';

const coupleGallery = [
  {
    src: imgCloseSunlight,
    title: 'Golden Hour Embrace',
    subtitle: 'Warmth & Tender Love',
    aspect: 'aspect-[3/4]',
  },
  {
    src: imgWalkTree1,
    title: 'Walking Together',
    subtitle: 'Under The Sacred Banyan',
    aspect: 'aspect-[3/4]',
  },
  {
    src: imgMirrorSmile,
    title: 'Shy Glances',
    subtitle: 'Reflections of Joy',
    aspect: 'aspect-[3/4]',
  },
  {
    src: imgStandingGarland,
    title: 'Forever In Love',
    subtitle: 'Jasmine Garland & Grace',
    aspect: 'aspect-[3/4]',
  },
  {
    src: imgTempleDoorway,
    title: 'Traditional Majesty',
    subtitle: 'Heritage Temple Arch',
    aspect: 'aspect-[3/4]',
  },
  {
    src: imgWoodenScreen,
    title: 'Quiet Serenity',
    subtitle: 'Peaceful Moments Together',
    aspect: 'aspect-[3/4]',
  },
  {
    src: imgWalkTree2,
    title: 'Hand In Hand',
    subtitle: 'Our Journey Begins',
    aspect: 'aspect-[3/4]',
  },
  {
    src: imgMirrorGaze,
    title: 'Shared Smiles',
    subtitle: 'A Lifetime of Happiness',
    aspect: 'aspect-[3/4]',
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative w-full py-24 md:py-36 bg-[#FCF9F2] overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
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

        {/* 8-Photo Balanced Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {coupleGallery.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group cursor-pointer overflow-hidden rounded-2xl luxury-card p-3 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (idx % 4) * 0.1 }}
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
              <div className="absolute inset-3 rounded-xl bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
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

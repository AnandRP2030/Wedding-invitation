import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoldDivider from './GoldDivider';

// God Images
import imgHands from '../assets/images/god-images/1000414154.jpg'; // Shiva & Parvathi Panigrahana hands (1440x2569)
import imgBoatPanorama from '../assets/images/god-images/1000414171.jpg'; // Radha Krishna Boat (2178x1080 - 2:1)
import imgShivaParvathi from '../assets/images/god-images/1000414155.jpg'; // Shiva & Parvathi Embrace (1440x2569)
import imgRadhaKrishnaMoon from '../assets/images/god-images/1000414137.jpg'; // Radha Krishna Moon & Flute (1440x2569)
import imgRadhaKrishnaTree from '../assets/images/god-images/1000414152.jpg'; // Radha Krishna Glowing Tree (1440x2560)
import imgRadhaKrishnaVibrant from '../assets/images/god-images/1000414160.jpg'; // Radha Krishna Cosmic (1080x2340)

const divineGallery = [
  {
    title: 'Divine Eternal Bond',
    deity: 'Lord Shiva & Goddess Parvathi',
    src: imgShivaParvathi,
    aspect: 'aspect-[9/16]',
  },
  {
    title: 'Flute of Pure Love',
    deity: 'Shri Radha & Lord Krishna',
    src: imgRadhaKrishnaMoon,
    aspect: 'aspect-[9/16]',
  },
  {
    title: 'Celestial Illumination',
    deity: 'Shri Radha & Lord Krishna',
    src: imgRadhaKrishnaTree,
    aspect: 'aspect-[9/16]',
  },
  {
    title: 'Eternal Melody',
    deity: 'Shri Radha & Lord Krishna',
    src: imgRadhaKrishnaVibrant,
    aspect: 'aspect-[9/16]',
  },
];

const DivineBlessings: React.FC = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/35 text-[#9A6F20] text-xs uppercase tracking-widest font-medium mb-4">
            Divine Blessings
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#221B10]">
            Sacred Union & Eternal Grace
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B5D4D] font-light max-w-lg mx-auto">
            Seeking the sacred blessings of Lord Shiva & Goddess Parvathi, Shri Radha & Lord Krishna as two souls unite in holy matrimony.
          </p>
          <GoldDivider style="wave" />
        </motion.div>

        {/* FEATURED: The Sacred Panigrahana (Holding of Hands) */}
        <motion.div
          className="luxury-card rounded-2xl p-6 sm:p-10 md:p-12 mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle gold corner accents */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#C9A84C]/50" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#C9A84C]/50" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#C9A84C]/50" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#C9A84C]/50" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Hand Union Image */}
            <div className="md:col-span-5 flex justify-center">
              <div
                className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden border-2 border-[#C9A84C]/40 shadow-xl cursor-pointer group"
                onClick={() => setSelectedImage(imgHands)}
              >
                <img
                  src={imgHands}
                  alt="Panigrahana — Sacred Hand Union in Hindu Marriage"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white/90 text-xs text-[#221B10] uppercase tracking-wider font-semibold shadow">
                    View Image
                  </span>
                </div>
              </div>
            </div>

            {/* Sacred Shlokas & Meaning */}
            <div className="md:col-span-7 text-center md:text-left space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] font-semibold">
                  Panigrahana
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#221B10] mt-1 mb-4">
                  The Sacred Vow of Matrimony
                </h3>
              </div>

              {/* Sacred Mangalasutra Shloka */}
              <div className="p-5 rounded-xl bg-[#FAF4E6]/80 border-l-4 border-[#C9A84C] text-[#4A3D2D]">
                <p className="text-base sm:text-lg font-script italic leading-relaxed">
                  "Mangalyam Tantunanena Mama Jeevana Hetuna |<br />
                  Kanthe Badhnami Subhage Tvam Jeeva Sharadah Shatam ||"
                </p>
                <p className="text-xs text-[#7A6347] mt-3 uppercase tracking-wider">
                  — The Sacred Mangalasutra Shloka
                </p>
              </div>

              {/* English Meaning */}
              <p className="text-sm sm:text-base text-[#6B5D4D] leading-relaxed font-light">
                “This sacred thread is the symbol of my life; I tie it around your neck, O blessed one. May we live together in harmony, devotion, and boundless joy for a hundred autumns.”
              </p>

            </div>
          </div>
        </motion.div>

        {/* PANORAMIC BANNER: Radha & Krishna on Sacred Waters (2:1 Widescreen) */}
        <motion.div
          className="luxury-card rounded-2xl p-3 sm:p-4 mb-16 overflow-hidden cursor-pointer group relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          onClick={() => setSelectedImage(imgBoatPanorama)}
        >
          <div className="relative w-full aspect-[2/1] sm:aspect-[21/9] rounded-xl overflow-hidden shadow-md">
            <img
              src={imgBoatPanorama}
              alt="Radha & Krishna on Sacred Waters"
              className="w-full h-full object-cover object-center filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Subtle gradient vignette at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="text-xs uppercase tracking-[0.3em] text-[#FFF0B8] font-medium mb-1">
                The Eternal Voyage
              </span>
              <p className="text-lg sm:text-2xl font-serif text-white max-w-xl">
                Two souls embarking on life's eternal voyage together.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CELESTIAL LOVE GALLERY (Grid of 4 portraits) */}
        <div>
          <div className="text-center mb-10">
            <h4 className="text-2xl sm:text-3xl font-serif text-[#221B10]">
              Divine Pair of Eternity
            </h4>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9A6F20] mt-1">
              Embodiment of Love, Loyalty & Devotion
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {divineGallery.map((item, idx) => (
              <motion.div
                key={idx}
                className="luxury-card rounded-xl p-2.5 sm:p-3 cursor-pointer group overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => setSelectedImage(item.src)}
              >
                <div className={`relative w-full ${item.aspect} rounded-lg overflow-hidden bg-[#FAF4E6]`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                    <span className="text-[11px] text-white uppercase tracking-wider font-semibold">
                      Enlarge
                    </span>
                  </div>
                </div>

                <div className="pt-3 pb-1 text-center">
                  <p className="font-serif text-xs sm:text-sm text-[#221B10] font-medium truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-[#9A6F20] tracking-wider uppercase truncate mt-0.5">
                    {item.deity}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[92vh] rounded-2xl overflow-hidden p-2 bg-gradient-to-b from-[#C9A84C]/50 to-[#9A6F20]/50 shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Divine Blessing Full Preview"
                  className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
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

export default DivineBlessings;

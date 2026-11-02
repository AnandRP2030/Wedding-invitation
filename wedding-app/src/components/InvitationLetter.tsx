import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoldDivider from './GoldDivider';

import letterCover from '../assets/images/invitation-letter/1000414079.jpg';
import letterDetail from '../assets/images/invitation-letter/1000414078.jpg';

const InvitationLetter: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'both' | 'cover' | 'letter'>('both');

  const cards = [
    {
      id: 'cover',
      title: 'Traditional Wedding Patrika — Cover',
      subtitle: 'Mandapam & Marigold Auspicious Cover',
      src: letterCover,
    },
    {
      id: 'letter',
      title: 'Formal Invitation Letter',
      subtitle: 'Official Auspicious Muhurtham & Family Details',
      src: letterDetail,
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-36 bg-gradient-to-b from-[#FCF9F2] via-[#F6EEDC] to-[#FCF9F2] overflow-hidden border-y border-[#C9A84C]/25">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#9A6F20] text-xs uppercase tracking-widest font-medium mb-4">
            Traditional Patrika
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#221B10]">
            The Wedding Invitation Card
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B5D4D] font-light max-w-lg mx-auto">
            Click on either card to view in full size and read the complete invitation details.
          </p>
          <GoldDivider style="wave" />
        </motion.div>

        {/* View Switcher for Mobile */}
        <div className="flex sm:hidden justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'both'
                ? 'bg-[#221504] text-[#F0D999] border border-[#C9A84C]'
                : 'bg-white/80 text-[#6B5D4D] border border-black/10'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('cover')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'cover'
                ? 'bg-[#221504] text-[#F0D999] border border-[#C9A84C]'
                : 'bg-white/80 text-[#6B5D4D] border border-black/10'
            }`}
          >
            Cover
          </button>
          <button
            onClick={() => setActiveTab('letter')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
              activeTab === 'letter'
                ? 'bg-[#221504] text-[#F0D999] border border-[#C9A84C]'
                : 'bg-white/80 text-[#6B5D4D] border border-black/10'
            }`}
          >
            Letter
          </button>
        </div>

        {/* Invitation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch max-w-4xl mx-auto">
          {cards
            .filter((c) => activeTab === 'both' || activeTab === c.id)
            .map((card, idx) => (
              <motion.div
                key={card.id}
                className="luxury-card rounded-2xl p-4 sm:p-6 flex flex-col justify-between group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                onClick={() => setSelectedImage(card.src)}
              >
                {/* Image Container with precise aspect ratio */}
                <div className="relative w-full aspect-[1158/1600] rounded-xl overflow-hidden bg-[#FAF4E6] border border-[#C9A84C]/30 shadow-inner">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-contain filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm text-[#221B10] text-xs font-semibold uppercase tracking-wider shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      Click to View Full Size
                    </div>
                  </div>
                </div>

                {/* Caption below */}
                <div className="mt-5 text-center px-2">
                  <h4 className="font-serif text-lg sm:text-xl text-[#221B10] font-medium">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#9A6F20] uppercase tracking-widest mt-1">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
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
                className="relative max-w-3xl max-h-[92vh] rounded-2xl overflow-hidden p-2 sm:p-3 bg-gradient-to-b from-[#C9A84C]/50 to-[#9A6F20]/50 shadow-2xl flex flex-col items-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Wedding Invitation Full Preview"
                  className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-2xl bg-[#FCF9F2]"
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

export default InvitationLetter;

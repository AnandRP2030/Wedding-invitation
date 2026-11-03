import React from 'react';
import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

// Import couple photos
import photo1 from '../assets/images/IMG-20261102-WA0060.jpg';
import photo2 from '../assets/images/IMG-20261102-WA0060.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FCF9F2] pt-14 pb-20 md:pt-20 md:pb-32">
      {/* Background subtle mandala pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none flex items-center justify-center">
        <svg width="900" height="900" viewBox="0 0 100 100" fill="none">
          {Array.from({ length: 16 }, (_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="20"
              rx="6"
              ry="20"
              fill="#C9A84C"
              transform={`rotate(${i * 22.5} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="16" fill="#C9A84C" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Top traditional invocation */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center gap-3">
            <div className="h-px w-10 md:w-16 bg-[#C9A84C]/60" />
            <span className="text-[#C9A84C] font-serif text-lg tracking-widest">ॐ</span>
            <div className="h-px w-10 md:w-16 bg-[#C9A84C]/60" />
          </div>
          <p className="mt-2 text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#9A6F20] font-medium">
            Together with their families
          </p>
        </motion.div>

        {/* Hero Photos — elegant centered dual-portrait composition */}
        <motion.div
          className="relative mx-auto my-10 md:my-14 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <div className="relative flex items-center justify-center">
            {/* Primary Portrait Photo */}
            <motion.div
              className="relative z-10 rounded-sm overflow-hidden bg-white p-2 md:p-3"
              style={{
                boxShadow: '0 25px 60px -15px rgba(45, 27, 0, 0.22), 0 0 0 1px rgba(201, 168, 76, 0.25)',
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-[220px] h-[310px] sm:w-[260px] sm:h-[370px] md:w-[300px] md:h-[430px] overflow-hidden rounded-[2px]">
                <img
                  src={photo1}
                  alt="Aparna & Vishal"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
              </div>
              <div className="absolute inset-2 md:inset-3 border border-[#C9A84C]/30 pointer-events-none" />
            </motion.div>

            {/* Overlapping Secondary Accent Photo */}
            <motion.div
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-12 z-20 rounded-sm overflow-hidden bg-white p-1.5 md:p-2 hidden xs:block"
              style={{
                boxShadow: '0 20px 45px -10px rgba(45, 27, 0, 0.25), 0 0 0 1px rgba(201, 168, 76, 0.3)',
              }}
              initial={{ opacity: 0, x: 20, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
            >
              <div className="w-[120px] h-[160px] sm:w-[150px] sm:h-[200px] md:w-[180px] md:h-[240px] overflow-hidden rounded-[2px]">
                <img
                  src={photo2}
                  alt="Aparna & Vishal candid"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
              </div>
              <div className="absolute inset-1.5 md:inset-2 border border-[#C9A84C]/35 pointer-events-none" />
            </motion.div>

            {/* Subtle luxury gold corner accents behind main photo */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]/50 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#C9A84C]/50 pointer-events-none" />
          </div>
        </motion.div>

        {/* Couple Names */}
        <div className="mt-12 md:mt-16 space-y-2">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-script italic text-[#221B10] tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Aparna
          </motion.h1>

          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl font-script italic text-[#C9A84C] py-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            &
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-script italic text-[#221B10] tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Vishal
          </motion.h1>
        </div>

        {/* Elegant Wave Divider */}
        <div className="my-8 md:my-10">
          <GoldDivider style="wave" />
        </div>

        {/* Romantic Quote with generous white space */}
        <motion.div
          className="max-w-xl mx-auto px-4 my-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-script italic text-[#5C4D3C] leading-relaxed">
            “Our love began as a story, and today we make a promise to turn it into forever.”
          </blockquote>
        </motion.div>

        {/* Date & Venue Subtitle */}
        <motion.div
          className="mt-8 pt-4 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-block px-5 py-2 rounded-full border border-[#C9A84C]/30 bg-[#FAF4E6]/60 backdrop-blur-sm">
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#9A6F20] font-medium">
              15th November 2026 · Poovar, Trivandrum
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

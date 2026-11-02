import React from 'react';
import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full pt-28 pb-36 md:pt-36 md:pb-48 bg-gradient-to-b from-[#1C1204] via-[#150D02] to-[#0D0801] text-white overflow-hidden border-t border-[#C9A84C]/30">
      {/* Background delicate floating sparkles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="footerDots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" fill="#C9A84C" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerDots)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        {/* Sacred OM Symbol */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-serif text-3xl text-[#F0D999] leading-none">ॐ</span>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-script italic text-[#FCF9F2] mb-3">
            Aparna <span className="text-[#C9A84C]">&</span> Vishal
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#C9A84C] font-light mt-4">
            15 · November · 2026
          </p>
        </motion.div>

        <div className="my-10">
          <GoldDivider style="wave" />
        </div>

        {/* Heartfelt closing message */}
        <motion.p
          className="text-xl sm:text-2xl font-script italic text-[#D8CBBC] max-w-xl mx-auto leading-relaxed mb-12 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          Two hearts united, two souls intertwined —<br />
          We begin our journey as one.
        </motion.p>

        {/* Quick event summary pills */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-[#C9A84C]/80 uppercase tracking-widest mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="px-3 py-1 rounded-full border border-[#C9A84C]/25 bg-white/5">
            Reception: 14 Nov, 5 PM
          </span>
          <span className="hidden sm:inline text-[#C9A84C]/40">•</span>
          <span className="px-3 py-1 rounded-full border border-[#C9A84C]/25 bg-white/5">
            Muhurtham: 15 Nov, 11:10 AM
          </span>
        </motion.div>

        {/* Footer bottom line */}
        <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent mb-8" />

        <p className="text-[11px] text-[#A08F7B] tracking-wider uppercase font-light">
          With prayers, love & heartfelt blessings
        </p>
      </div>
    </footer>
  );
};

export default Footer;

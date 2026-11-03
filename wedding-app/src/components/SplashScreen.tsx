import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Couple opening portrait — updated to IMG-20261102-WA0060.jpg
import coupleOpeningPhoto from '../assets/images/IMG-20261102-WA0060.jpg';

interface SplashScreenProps {
  onOpen: () => void;
}

const Petal: React.FC<{ index: number }> = ({ index }) => {
  const size = 10 + (index % 5) * 3;
  const left = (index * 5.5) % 100;
  const delay = (index * 0.25) % 3;
  const duration = 5 + (index % 4);
  const drift = (index % 2 === 0 ? 1 : -1) * (30 + (index % 4) * 15);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        top: '-30px',
        animation: `petalFall ${duration}s ${delay}s ease-in infinite`,
        ['--drift' as string]: `${drift}px`,
      }}
    >
      <svg width={size} height={size * 1.3} viewBox="0 0 20 26" fill="none">
        <ellipse
          cx="10"
          cy="13"
          rx="7"
          ry="12"
          fill="#E8C87A"
          fillOpacity="0.45"
          transform={`rotate(${index * 42} 10 13)`}
        />
      </svg>
    </div>
  );
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onOpen }) => {
  const [petals] = useState(() => Array.from({ length: 20 }, (_, i) => i));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1C1002] via-[#120B01] to-[#0A0500] px-6 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Falling Flower Petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {petals.map((i) => (
          <Petal key={i} index={i} />
        ))}
      </div>

      {/* Central Rotating Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
            animation: 'spinSlow 25s linear infinite',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
        {/* Sacred OM Symbol */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/10 shadow-md">
            <span className="font-serif text-2xl text-[#F0D999] leading-none">ॐ</span>
          </div>
        </motion.div>

        {/* ROYAL TEMPLE ARCH (Jharokha Arch) FRAME */}
        <motion.div
          className="relative mb-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Top Arch Crown Ornament */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
            <div className="w-7 h-7 rotate-45 border border-[#FFF0B8] bg-gradient-to-br from-[#E8C87A] to-[#9A6F20] flex items-center justify-center shadow-md">
              <span className="text-[10px] text-[#1C1002] font-bold -rotate-45">✦</span>
            </div>
          </div>

          {/* Outer Gold Gradient Frame */}
          <div
            className="p-1.5 rounded-t-[72px] sm:rounded-t-[88px] rounded-b-2xl shadow-2xl relative"
            style={{
              background: 'linear-gradient(180deg, #FFF0B8 0%, #C9A84C 45%, #9A6F20 100%)',
              boxShadow: '0 20px 45px -10px rgba(0,0,0,0.7), 0 0 25px rgba(201, 168, 76, 0.25)',
            }}
          >
            {/* Inner Arched Photo Container */}
            <div className="w-40 h-52 sm:w-48 sm:h-64 md:w-52 md:h-72 rounded-t-[66px] sm:rounded-t-[82px] rounded-b-xl overflow-hidden bg-[#1C1002] relative">
              <img
                src={coupleOpeningPhoto}
                alt="Aparna & Vishal"
                className="w-full h-full object-cover object-top filter contrast-[1.03]"
              />

              {/* Delicate Inner Gold Filigree Inset Border */}
              <div className="absolute inset-1.5 rounded-t-[60px] sm:rounded-t-[76px] rounded-b-lg border border-[#FFF0B8]/40 pointer-events-none" />

              {/* Soft bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#1C1002]/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          className="my-1 space-y-0.5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-script italic text-[#FCF9F2] leading-tight">
            Aparna
          </h1>
          <p className="text-xl sm:text-2xl font-script italic text-[#C9A84C]">&</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-script italic text-[#FCF9F2] leading-tight">
            Vishal
          </h1>
        </motion.div>

        {/* Gold divider line */}
        <div className="w-28 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent my-3.5" />

        <motion.p
          className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#D8CBBC]/80 font-light mb-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Wedding Invitation · 15 Nov 2026
        </motion.p>

        {/* Open Invitation Button */}
        <motion.button
          onClick={onOpen}
          className="relative group px-9 py-3.5 rounded-full border border-[#C9A84C] bg-gradient-to-r from-[#C9A84C]/25 via-[#C9A84C]/15 to-[#C9A84C]/25 text-[#FFF0B8] text-xs sm:text-sm uppercase tracking-[0.25em] font-medium shadow-xl hover:shadow-2xl hover:border-[#FFF0B8] cursor-pointer transition-all duration-300 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="relative z-10 flex items-center gap-2.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Open Invitation
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SplashScreen;

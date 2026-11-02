import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(onOpen, 800);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1E1202] via-[#140B01] to-[#0A0500] px-6 text-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Falling Flower Petals */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {petals.map((i) => (
              <Petal key={i} index={i} />
            ))}
          </div>

          {/* Central Mandala Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[450px] h-[450px] rounded-full opacity-15"
              style={{
                background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
                animation: 'spinSlow 25s linear infinite',
              }}
            />
          </div>

          <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center">
            {/* Ganapathi / OM Emblem */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="w-20 h-20 rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/10 flex items-center justify-center shadow-lg">
                <span className="font-serif text-4xl text-[#F0D999] leading-none">ॐ</span>
              </div>
            </motion.div>

            {/* Auspicious Greeting in Malayalam */}
            <motion.p
              className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#C9A84C] font-light mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ശുഭ വിവാഹം
            </motion.p>

            {/* Couple Names */}
            <motion.div
              className="my-3 space-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-script italic text-[#FCF9F2] leading-tight">
                Aparna
              </h1>
              <p className="text-2xl sm:text-3xl font-script italic text-[#C9A84C]">&</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-script italic text-[#FCF9F2] leading-tight">
                Vishal
              </h1>
            </motion.div>

            {/* Gold divider line */}
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent my-6" />

            <motion.p
              className="text-xs tracking-[0.3em] uppercase text-[#D8CBBC]/80 font-light mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Wedding Invitation
            </motion.p>

            {/* Open Invitation Button */}
            <motion.button
              onClick={handleOpen}
              className="relative group px-10 py-4 rounded-full border border-[#C9A84C] bg-gradient-to-r from-[#C9A84C]/20 via-[#C9A84C]/10 to-[#C9A84C]/20 text-[#FFF0B8] text-xs sm:text-sm uppercase tracking-[0.25em] font-medium shadow-lg hover:shadow-2xl hover:border-[#FFF0B8] transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Open Invitation
              </span>
            </motion.button>

            <p className="mt-8 text-[11px] tracking-widest text-[#C9A84C]/60 uppercase font-light">
              15 · 11 · 2026
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SplashScreen;

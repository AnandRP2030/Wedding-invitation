import React from 'react';
import { motion } from 'framer-motion';

interface GoldDividerProps {
  style?: 'wave' | 'dots' | 'ornament';
  className?: string;
}

const GoldDivider: React.FC<GoldDividerProps> = ({ style = 'ornament', className = '' }) => {
  if (style === 'dots') {
    return (
      <div className={`flex items-center justify-center gap-3.5 py-6 my-2 ${className}`}>
        <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent to-[#C9A84C]/80" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#C9A84C] shadow-sm" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
        <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent to-[#C9A84C]/80" />
      </div>
    );
  }

  if (style === 'wave') {
    return (
      <motion.div
        className={`flex justify-center py-6 my-2 ${className}`}
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <svg width="240" height="20" viewBox="0 0 240 20" fill="none" className="max-w-full">
          <path
            d="M0 10 Q30 3 60 10 Q90 17 120 10 Q150 3 180 10 Q210 17 240 10"
            stroke="url(#goldWaveGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="120" cy="10" r="3" fill="#C9A84C" />
          <circle cx="112" cy="10" r="1.5" fill="#C9A84C" fillOpacity="0.7" />
          <circle cx="128" cy="10" r="1.5" fill="#C9A84C" fillOpacity="0.7" />
          <defs>
            <linearGradient id="goldWaveGrad" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
              <stop offset="25%" stopColor="#C9A84C" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FFF0B8" />
              <stop offset="75%" stopColor="#C9A84C" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    );
  }

  // ornament (default)
  return (
    <motion.div
      className={`flex items-center justify-center gap-4 py-8 my-3 ${className}`}
      initial={{ opacity: 0, scaleX: 0.8 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <div className="flex items-center">
        <div className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-[#C9A84C]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] ml-2" />
      </div>
      <div className="flex items-center justify-center p-1.5 rounded-full border border-[#C9A84C]/40 bg-[#FAF4E6]/50">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 L14 8 L20 10 L15 14 L17 21 L12 17 L7 21 L9 14 L4 10 L10 8 Z"
            fill="#C9A84C"
          />
        </svg>
      </div>
      <div className="flex items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-2" />
        <div className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-[#C9A84C]/60 to-[#C9A84C]" />
      </div>
    </motion.div>
  );
};

export default GoldDivider;

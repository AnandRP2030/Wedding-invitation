import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.button
        onClick={onToggle}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl border border-[#C9A84C]/60 bg-gradient-to-br from-[#2A1804] to-[#120B02] text-[#F0D999] hover:border-[#FFF0B8] hover:text-[#FFF0B8] cursor-pointer transition-all duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        title={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
        aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
      >
        {/* Pulsing ring animation when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#C9A84C]"
            animate={{ scale: [1, 1.45, 1.45], opacity: [0.6, 0, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          />
        )}

        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              className="flex items-end gap-0.5 h-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span className="w-1 bg-[#C9A84C] rounded-full animate-bounce h-3" />
              <span className="w-1 bg-[#C9A84C] rounded-full animate-bounce h-4" />
              <span className="w-1 bg-[#C9A84C] rounded-full animate-bounce h-2" />
            </motion.div>
          ) : (
            <motion.svg
              key="paused"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F0D999"
              strokeWidth="1.8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MUSIC_ENABLED = true;
import weddingSong from '../assets/audio/wedding-song.mp3';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!MUSIC_ENABLED) return;

    // audioRef.current = new Audio(weddingSong);
    // audioRef.current.loop = true;
    // audioRef.current.volume = 0.6;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!MUSIC_ENABLED || !autoPlay) return;
    togglePlay();
  }, [autoPlay]);

  const togglePlay = () => {
    if (!MUSIC_ENABLED || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log('Audio playback prevented:', e));
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.button
        onClick={togglePlay}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl border border-[#C9A84C]/50 bg-gradient-to-br from-[#2A1804] to-[#120B02] text-[#F0D999] hover:border-[#FFF0B8] transition-all duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        title={
          MUSIC_ENABLED
            ? isPlaying
              ? 'Pause wedding music'
              : 'Play wedding music'
            : 'Add your MP3 in assets/audio/ to play song'
        }
      >
        {/* Pulsing ring animation when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#C9A84C]"
            animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
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

        {/* Music indicator badge */}
        {!MUSIC_ENABLED && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9A84C] text-[#1A0E00] text-[9px] font-bold flex items-center justify-center">
            ♪
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;

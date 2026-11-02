import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('2026-11-15T11:10:00+05:30');
const RECEPTION_DATE = new Date('2026-11-14T17:00:00+05:30');

interface TimeUnit {
  value: number;
  label: string;
}

const FlipCard: React.FC<{ value: number; label: string; index: number }> = ({ value, label, index }) => {
  const padded = String(Math.max(0, value)).padStart(2, '0');

  return (
    <motion.div
      className="flex flex-col items-center flex-1 min-w-[70px] max-w-[100px]"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Box */}
      <div
        className="relative w-full aspect-[4/5] flex items-center justify-center rounded-lg overflow-hidden"
        style={{
          background: 'linear-gradient(150deg, #2A1A06 0%, #150D02 100%)',
          border: '1px solid rgba(201, 168, 76, 0.45)',
          boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Delicate gold corner ticks */}
        <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C9A84C]/60" />
        <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#C9A84C]/60" />
        <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#C9A84C]/60" />
        <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C9A84C]/60" />

        {/* Center fold divider */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-black/40 shadow-sm" />

        <span
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal"
          style={{
            background: 'linear-gradient(180deg, #FFF0B8 0%, #C9A84C 70%, #9A6F20 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {padded}
        </span>
      </div>

      <p className="mt-3 text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#7D6B58] font-medium">
        {label}
      </p>
    </motion.div>
  );
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);
  const [targetLabel, setTargetLabel] = useState('');
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      let target = RECEPTION_DATE;
      let label = 'Reception';

      if (now >= RECEPTION_DATE) {
        target = WEDDING_DATE;
        label = 'Wedding Ceremony';
      }

      if (now >= WEDDING_DATE) {
        setIsPast(true);
        return;
      }

      setTargetLabel(label);

      const diff = target.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft([
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: minutes, label: 'Minutes' },
        { value: seconds, label: 'Seconds' },
      ]);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#FCF9F2] via-[#F6EEDC] to-[#FCF9F2] border-y border-[#C9A84C]/20">
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#9A6F20] font-medium mb-3">
            Counting Down To
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#221B10] mb-3">
            {isPast ? 'We Are Married! 🎉' : `The ${targetLabel}`}
          </h2>

          {!isPast && (
            <p className="text-sm sm:text-base text-[#6B5D4D] font-light">
              {targetLabel === 'Reception'
                ? 'Saturday, 14th November 2026 · 5:00 PM Onwards'
                : 'Sunday, 15th November 2026 · Muhurtham: 11:10 AM – 11:50 AM'}
            </p>
          )}
        </motion.div>

        {isPast ? (
          <p className="text-2xl font-script italic text-[#6B5D4D]">
            Thank you for being part of our beautiful journey! ❤️
          </p>
        ) : (
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center items-center gap-3 sm:gap-6">
              {timeLeft.map((unit, i) => (
                <React.Fragment key={unit.label}>
                  <FlipCard value={unit.value} label={unit.label} index={i} />
                  {i < timeLeft.length - 1 && (
                    <span className="text-2xl sm:text-3xl font-serif text-[#C9A84C]/60 pb-7 select-none">
                      :
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <motion.p
              className="mt-12 text-lg sm:text-xl font-script italic text-[#6B5D4D]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Every second brings us closer to forever ✨
            </motion.p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;

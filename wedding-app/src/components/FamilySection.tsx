import React from 'react';
import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

const FamilySection: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#FCF9F2] overflow-hidden">
      {/* Background soft mandala watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <svg width="700" height="700" viewBox="0 0 100 100" fill="none">
          {Array.from({ length: 12 }, (_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="15"
              rx="4"
              ry="18"
              fill="#C9A84C"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="14" fill="#C9A84C" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#9A6F20] font-medium mb-3">
            With The Blessings Of
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#221B10]">
            Our Families
          </h2>
          <GoldDivider style="wave" />
        </motion.div>

        {/* Families Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Bride's Family */}
          <motion.div
            className="text-center p-8 sm:p-10 rounded-2xl bg-white/70 border border-[#C9A84C]/25 shadow-sm"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] font-semibold mb-6">
              Bride's Family
            </p>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#221B10] font-medium mb-1">
              Mr. Babu A
            </h3>
            <p className="text-xl sm:text-2xl font-script italic text-[#6B5D4D] mb-6">
              & Mrs. Usha C
            </p>

            <div className="w-12 h-px mx-auto bg-[#C9A84C]/40 mb-6" />

            <div className="text-sm text-[#6B5D4D] leading-loose space-y-1 font-light">
              <p className="font-medium text-[#221B10]">Babu Bhavan</p>
              <p>Kallingavilakam</p>
              <p>Poovar P.O., Trivandrum</p>
            </div>
          </motion.div>

          {/* Groom's Family */}
          <motion.div
            className="text-center p-8 sm:p-10 rounded-2xl bg-white/70 border border-[#C9A84C]/25 shadow-sm"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] font-semibold mb-6">
              Groom's Family
            </p>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#221B10] font-medium mb-1">
              Sri. Vishwambaran M
            </h3>
            <p className="text-xl sm:text-2xl font-script italic text-[#6B5D4D] mb-6">
              & Smt. Shobana M
            </p>

            <div className="w-12 h-px mx-auto bg-[#C9A84C]/40 mb-6" />

            <div className="text-sm text-[#6B5D4D] leading-loose space-y-1 font-light">
              <p className="font-medium text-[#221B10]">Maruthara Thalavila Veedu</p>
              <p>Thirparappu P.O.</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Ornament */}
        <div className="mt-16 text-center">
          <GoldDivider style="dots" />
          <p className="mt-4 text-xs tracking-[0.25em] uppercase text-[#9A6F20] font-medium">
            With Love & Blessings Always
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;

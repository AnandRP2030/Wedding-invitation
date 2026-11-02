import React from 'react';
import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

// Flutter SVG icon
const FlutterIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M13 29l11-11 11 11-5.5 5.5L24 40l-5.5-5.5L13 29z" fill="#02569B" />
    <path d="M13 29l5.5 5.5L24 40l-11-11z" fill="#01579B" />
    <path d="M13 19L24 8l11 11-5.5 5.5L24 30l-5.5-5.5L13 19z" fill="#40C4FF" />
  </svg>
);

// Java SVG icon
const JavaIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M16 36c0 0 -2 1.2 5 2.2 8 1.2 12.5 1 17-0.5 0 0 1.9 1.2 -2.3 2.1 -9.6 2.7 -28.5 -1.4 -19.7 -3.8z" fill="#E76F00" />
    <path d="M14.3 31.1c0 0 -2.3 1.7 4.8 2.1 9 0.5 16.1 0.5 18.4-0.6 0 0 1.6 1.6-1.8 2.3-9.6 2-27.9 -0.8-21.4-3.8z" fill="#E76F00" />
    <path d="M26.5 22.1c2.6 3 0.7 5.7 0.7 5.7s6.7-3.5 3.6-7.8c-2.9-4.1-5.1-6.1 6.9-13.1 0 0-18.9 4.7-11.2 15.2z" fill="#E76F00" />
    <path d="M38.1 40.9c0 0 1.7 1.4-1.9 2.4-6.8 2.1-28.3 2.7-34.2 0.1-2.1-0.9 1.9-2.2 3.2-2.5 1.3-0.3 2-0.3 2-0.3-2.3-1.6-14.9 3.2-6.4 4.6 23.3 3.8 42.5-1.7 37.3-4.3z" fill="#E76F00" />
    <path d="M31 10c0 0 4.9 4.9 -4.7 12.4-7.7 6.1-1.8 9.6 0 13.6-4.5-4.1-7.8-7.7-5.6-11 3.3-4.9 12.4-7.3 10.3-15z" fill="#E76F00" />
  </svg>
);

const CoupleSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#FCF9F2] overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#9A6F20] font-medium mb-3">
            With the blessings of our families
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#221B10]">
            The Couple
          </h2>
          <GoldDivider style="wave" />
        </motion.div>

        {/* Two spacious luxury cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* BRIDE CARD */}
          <motion.div
            className="luxury-card rounded-xl p-8 sm:p-12 text-center flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Corner gold ornaments */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C9A84C]/60" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C9A84C]/60" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C9A84C]/60" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C9A84C]/60" />

            <div>
              {/* Role badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E76F00]/10 border border-[#E76F00]/25 mb-6">
                <JavaIcon size={16} />
                <span className="text-xs font-mono font-medium text-[#A0520A] tracking-wider">
                  Java Developer
                </span>
              </div>

              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] font-medium mb-3">
                Bride
              </p>

              <h3 className="text-4xl sm:text-5xl md:text-6xl font-script italic text-[#221B10] mb-4">
                Aparna B
              </h3>

              <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent my-6" />

              <p className="text-sm font-script italic text-[#6B5D4D] text-lg mb-2">
                Beloved daughter of
              </p>

              <p className="text-lg sm:text-xl font-serif text-[#221B10] font-medium mb-5">
                Mr. Babu A & Mrs. Usha C
              </p>

              <p className="text-sm text-[#6B5D4D] leading-relaxed">
                Babu Bhavan, Kallingavilakam<br />
                Poovar P.O., Trivandrum
              </p>
            </div>

            <div className="pt-8">
              <span className="text-sm text-[#C9A84C] font-script italic text-xl">
                Aparna
              </span>
            </div>
          </motion.div>

          {/* GROOM CARD */}
          <motion.div
            className="luxury-card rounded-xl p-8 sm:p-12 text-center flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Corner gold ornaments */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C9A84C]/60" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C9A84C]/60" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C9A84C]/60" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C9A84C]/60" />

            <div>
              {/* Role badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#02569B]/10 border border-[#02569B]/25 mb-6">
                <FlutterIcon size={16} />
                <span className="text-xs font-mono font-medium text-[#01579B] tracking-wider">
                  Flutter Developer
                </span>
              </div>

              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] font-medium mb-3">
                Groom
              </p>

              <h3 className="text-4xl sm:text-5xl md:text-6xl font-script italic text-[#221B10] mb-4">
                Vishal V.S
              </h3>

              <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent my-6" />

              <p className="text-sm font-script italic text-[#6B5D4D] text-lg mb-2">
                Beloved son of
              </p>

              <p className="text-lg sm:text-xl font-serif text-[#221B10] font-medium mb-5">
                Sri. Vishwambaran M & Smt. Shobana M
              </p>

              <p className="text-sm text-[#6B5D4D] leading-relaxed">
                Maruthara Thalavila Veedu<br />
                Thirparappu P.O.
              </p>
            </div>

            <div className="pt-8">
              <span className="text-sm text-[#C9A84C] font-script italic text-xl">
                Vishal
              </span>
            </div>
          </motion.div>
        </div>

        {/* Tech Easter Egg banner */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-block max-w-2xl px-8 py-6 rounded-lg bg-gradient-to-r from-[#FAF4E6]/80 via-white to-[#FAF4E6]/80 border border-[#C9A84C]/35 shadow-sm">
            <p className="text-base sm:text-lg text-[#5C4D3C] font-script italic leading-relaxed">
              <span className="font-mono text-sm not-italic text-[#A0520A] bg-[#E76F00]/10 px-2 py-0.5 rounded">
                She codes in Java
              </span>
              {' '}—{' '}
              <span className="font-mono text-sm not-italic text-[#01579B] bg-[#02569B]/10 px-2 py-0.5 rounded">
                He builds in Flutter
              </span>
              <br />
              <span className="text-lg sm:text-xl font-semibold text-[#9A6F20] mt-1 inline-block">
                Together they compile a lifetime of love ❤️
              </span>
            </p>
          </div>
        </motion.div>

        {/* Arya happiness note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-[#6B5D4D] tracking-wide">
            Sharing the happiness:{' '}
            <span className="font-serif font-semibold text-[#9A6F20] text-base">
              ARYA
            </span>{' '}
            💛
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;

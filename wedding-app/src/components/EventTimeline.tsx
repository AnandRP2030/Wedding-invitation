import React from 'react';
import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

const EventTimeline: React.FC = () => {
  // Google Calendar Links for guests
  const receptionCalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Vishal+%26+Aparna+Wedding+Reception&dates=20261114T113000Z/20261114T173000Z&details=Wedding+Reception+of+Vishal+V.S+and+Aparna+B&location=Sruthi+Royal+Auditorium,+Poovar,+Trivandrum';
  const weddingCalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Vishal+%26+Aparna+Wedding+Ceremony&dates=20261115T054000Z/20261115T062000Z&details=Wedding+Ceremony+(Muhurtham+11:10+AM+-+11:50+AM)+of+Vishal+V.S+and+Aparna+B&location=Sruthi+Royal+Auditorium,+Vizhinjam+Road,+Poovar,+Trivandrum';
  const groomReceptionCalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Vishal+%26+Aparna+Reception+(Groom%27s+Family)&dates=20261115T113000Z/20261115T153000Z&details=Reception+hosted+by+Groom%27s+Family+for+Vishal+V.S+and+Aparna+B&location=Lekshmi+Priya+Auditorium,+Near+Water+Falls,+Thirparappu';

  return (
    <section className="relative w-full py-24 md:py-36 bg-gradient-to-b from-[#FCF9F2] via-[#F7F1E3] to-[#FCF9F2] overflow-hidden">
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
            Save The Dates
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#221B10]">
            Wedding Events
          </h2>
          <GoldDivider style="wave" />
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch mb-20">
          {/* EVENT 1 — RECEPTION */}
          <motion.div
            className="luxury-card rounded-2xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Top gold corner accent */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#C9A84C]/50" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#C9A84C]/50" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#C9A84C]/50" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#C9A84C]/50" />

            <div>
              {/* Event Header Badge */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#FAF4E6] border border-[#C9A84C]/40 flex items-center justify-center text-[#9A6F20]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#9A6F20] font-semibold">
                    Celebration 01
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif text-[#221B10]">
                    Reception
                  </h4>
                </div>
              </div>

              {/* Day & Date */}
              <div className="my-6 py-4 border-y border-[#C9A84C]/20">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C9A84C] mb-1">
                  Saturday
                </p>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#221B10] font-normal">
                  14th November 2026
                </h3>
              </div>

              {/* Time Capsule */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#FAF4E6] border border-[#C9A84C]/35 text-[#9A6F20] mb-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm font-medium tracking-wide">
                  5:00 PM Onwards
                </span>
              </div>

              {/* Venue details */}
              <div className="space-y-2 mt-4 text-[#6B5D4D]">
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A6F20" strokeWidth="1.8" className="mt-1 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-serif text-lg text-[#221B10] font-medium">
                      Sruthi Royal Auditorium
                    </p>
                    <p className="text-sm text-[#7D6B58] leading-relaxed mt-1">
                      Poovar, Trivandrum, Kerala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Calendar button */}
            <div className="pt-10 mt-6 border-t border-[#C9A84C]/15">
              <a
                href={receptionCalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-[#C9A84C]/40 bg-[#FCF9F2] text-[#9A6F20] text-xs uppercase tracking-widest font-medium hover:bg-[#C9A84C] hover:text-white transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Add to Calendar
              </a>
            </div>
          </motion.div>

          {/* EVENT 2 — WEDDING CEREMONY */}
          <motion.div
            className="luxury-card-dark rounded-2xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-2xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Top gold corner accent */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#C9A84C]" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#C9A84C]" />

            <div>
              {/* Event Header Badge */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C] flex items-center justify-center text-[#F0D999]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#F0D999] font-semibold">
                    The Auspicious Day
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif text-[#FCF9F2]">
                    Wedding Ceremony
                  </h4>
                </div>
              </div>

              {/* Day & Date */}
              <div className="my-6 py-4 border-y border-[#C9A84C]/30">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#F0D999] mb-1">
                  Sunday
                </p>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#FCF9F2] font-normal">
                  15th November 2026
                </h3>
              </div>

              {/* Muhurtham capsule */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#C9A84C]/20 border border-[#C9A84C]/60 text-[#FFF0B8] mb-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm font-medium tracking-wide">
                  Muhurtham: 11:10 AM – 11:50 AM
                </span>
              </div>

              {/* Venue details */}
              <div className="space-y-2 mt-4 text-[#D8CBBC]">
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F0D999" strokeWidth="1.8" className="mt-1 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-serif text-lg text-[#FCF9F2] font-medium">
                      Sruthi Royal Auditorium
                    </p>
                    <p className="text-sm text-[#C8B8A6] leading-relaxed mt-1">
                      Vizhinjam Road, Poovar, TVM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Calendar button */}
            <div className="pt-10 mt-6 border-t border-[#C9A84C]/25">
              <a
                href={weddingCalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-[#C9A84C] bg-[#C9A84C] text-[#1E1405] text-xs uppercase tracking-widest font-semibold hover:bg-[#FFF0B8] transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Add to Calendar
              </a>
            </div>
          </motion.div>

          {/* EVENT 3 — GROOM'S FAMILY RECEPTION */}
          <motion.div
            className="luxury-card rounded-2xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Top gold corner accent */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#C9A84C]/50" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#C9A84C]/50" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#C9A84C]/50" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#C9A84C]/50" />

            {/* Groom's Family ribbon */}
            <div className="absolute top-0 right-0">
              <div className="bg-[#8B5E2E] text-[#FAF4E6] text-[10px] tracking-widest uppercase font-semibold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
                Groom's Family
              </div>
            </div>

            <div>
              {/* Event Header Badge */}
              <div className="flex items-center gap-3 mb-8 mt-2">
                <div className="w-10 h-10 rounded-full bg-[#FAF4E6] border border-[#C9A84C]/40 flex items-center justify-center text-[#9A6F20]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#9A6F20] font-semibold">
                    Celebration 03
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif text-[#221B10]">
                    Reception
                  </h4>
                </div>
              </div>

              {/* Day & Date */}
              <div className="my-6 py-4 border-y border-[#C9A84C]/20">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C9A84C] mb-1">
                  Sunday
                </p>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#221B10] font-normal">
                  15th November 2026
                </h3>
              </div>

              {/* Time Capsule */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#FAF4E6] border border-[#C9A84C]/35 text-[#9A6F20] mb-8">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm font-medium tracking-wide">
                  5:00 PM – 9:00 PM
                </span>
              </div>

              {/* Venue details */}
              <div className="space-y-2 mt-4 text-[#6B5D4D]">
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A6F20" strokeWidth="1.8" className="mt-1 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-serif text-lg text-[#221B10] font-medium">
                      Lekshmi Priya Auditorium
                    </p>
                    <p className="text-sm text-[#7D6B58] leading-relaxed mt-1">
                      Near Water Falls, Thirparappu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add to Calendar button */}
            <div className="pt-10 mt-6 border-t border-[#C9A84C]/15">
              <a
                href={groomReceptionCalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-[#C9A84C]/40 bg-[#FCF9F2] text-[#9A6F20] text-xs uppercase tracking-widest font-medium hover:bg-[#C9A84C] hover:text-white transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Add to Calendar
              </a>
            </div>
          </motion.div>
        </div>

        {/* Invitation Message Card */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-[#C9A84C]/35 shadow-sm relative">
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#C9A84C]" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#C9A84C]" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#C9A84C]" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#C9A84C]" />

            <p className="text-xl sm:text-2xl font-script italic text-[#5C4D3C] leading-relaxed mb-6">
              “Your presence and heartfelt blessings will make our special day even more joyful and memorable.”
            </p>

            <div className="w-12 h-px mx-auto bg-[#C9A84C]/50 mb-4" />

            <p className="text-xs uppercase tracking-[0.25em] text-[#9A6F20] font-medium">
              Invitation from: Mr. Babu A & Mrs. Usha C
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventTimeline;

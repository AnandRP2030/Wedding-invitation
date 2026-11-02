import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

const Location: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // Sruthi Royal Auditorium, Poovar, Trivandrum coordinates (approx)
  const venueLat = 8.3183;
  const venueLng = 77.0674;
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Sruthi+Royal+Auditorium+Poovar+Trivandrum';

  useEffect(() => {
    let isMounted = true;

    const loadMap = async () => {
      try {
        const L = await import('leaflet');

        if (!isMounted || !mapContainerRef.current) return;

        // Prevent double init
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }

        const map = L.map(mapContainerRef.current, {
          center: [venueLat, venueLng],
          zoom: 14,
          scrollWheelZoom: false,
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
        }).addTo(map);

        // Custom Gold Marker
        const goldIcon = L.divIcon({
          className: 'custom-gold-marker',
          html: `
            <div style="
              width: 36px;
              height: 48px;
              display: flex;
              flex-direction: column;
              align-items: center;
              filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
            ">
              <div style="
                width: 34px;
                height: 34px;
                border-radius: 50% 50% 50% 0;
                background: linear-gradient(135deg, #C9A84C, #9A6F20);
                transform: rotate(-45deg);
                border: 2px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <span style="transform: rotate(45deg); font-size: 16px;">💍</span>
              </div>
            </div>
          `,
          iconSize: [36, 48],
          iconAnchor: [18, 48],
          popupAnchor: [0, -46],
        });

        const marker = L.marker([venueLat, venueLng], { icon: goldIcon }).addTo(map);

        marker.bindPopup(`
          <div style="font-family: 'Playfair Display', serif; text-align: center; padding: 4px;">
            <p style="color: #9A6F20; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 4px;">Venue</p>
            <h4 style="font-size: 15px; margin: 0 0 4px; color: #221B10; font-weight: 600;">Sruthi Royal Auditorium</h4>
            <p style="font-size: 12px; margin: 0; color: #6B5D4D; font-family: 'Plus Jakarta Sans', sans-serif;">Vizhinjam Road, Poovar, Trivandrum</p>
          </div>
        `).openPopup();

        mapInstanceRef.current = map;

        // Invalidate size once rendered
        setTimeout(() => {
          if (map) map.invalidateSize();
        }, 300);
      } catch (err) {
        console.warn('Leaflet map error:', err);
      }
    };

    loadMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative w-full py-24 md:py-36 bg-gradient-to-b from-[#FCF9F2] via-[#F7F1E3] to-[#FCF9F2] overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#9A6F20] font-medium mb-3">
            Location & Directions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#221B10]">
            The Venue
          </h2>
          <GoldDivider style="wave" />
        </motion.div>

        {/* Venue Information Card */}
        <motion.div
          className="luxury-card rounded-2xl p-8 sm:p-12 mb-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-12 rounded-full bg-[#FAF4E6] border border-[#C9A84C]/40 mx-auto flex items-center justify-center text-[#9A6F20] mb-6">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#221B10] font-medium mb-3">
            Sruthi Royal Auditorium
          </h3>

          <p className="text-base sm:text-lg text-[#6B5D4D] max-w-lg mx-auto leading-relaxed mb-6 font-light">
            Vizhinjam Road, Poovar, Trivandrum, Kerala
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-medium">
            Reception & Wedding Ceremony Venue
          </p>
        </motion.div>

        {/* Interactive Map with Gold Luxury Border */}
        <motion.div
          className="luxury-card rounded-2xl overflow-hidden p-2 sm:p-3 relative"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            ref={mapContainerRef}
            className="w-full h-80 sm:h-96 md:h-[420px] rounded-xl overflow-hidden relative z-0"
            style={{ background: '#F2E8D5' }}
          />
        </motion.div>

        {/* Get Directions Button */}
        <div className="mt-10 text-center">
          <motion.a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#221504] to-[#170E02] text-[#F0D999] border border-[#C9A84C]/60 font-serif text-sm uppercase tracking-widest hover:border-[#FFF0B8] hover:text-[#FFF0B8] shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open in Google Maps
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Location;

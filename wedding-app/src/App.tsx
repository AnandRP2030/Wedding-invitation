import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './styles/globals.css';
import 'leaflet/dist/leaflet.css';

import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import CoupleSection from './components/CoupleSection';
import EventTimeline from './components/EventTimeline';
import InvitationLetter from './components/InvitationLetter';
import DivineBlessings from './components/DivineBlessings';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FamilySection from './components/FamilySection';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

// Automatically discover all mp3 files in assets/audio/ (wedding-song1.mp3, wedding-song2.mp3, wedding-song3.mp3, etc.)
const audioModules = import.meta.glob<{ default: string }>('./assets/audio/*.mp3', {
  eager: true,
});

const weddingSongs: string[] = Object.values(audioModules).map((mod) => mod.default);

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSongIndexRef = useRef<number>(0);

  // Pick a random song from the available tracks
  const pickRandomIndex = (excludeIndex?: number): number => {
    if (weddingSongs.length <= 1) return 0;
    let nextIndex: number;
    do {
      nextIndex = Math.floor(Math.random() * weddingSongs.length);
    } while (nextIndex === excludeIndex && weddingSongs.length > 1);
    return nextIndex;
  };

  // Initialize audio with a random song on mount
  useEffect(() => {
    if (weddingSongs.length === 0) return;

    const initialIndex = pickRandomIndex();
    currentSongIndexRef.current = initialIndex;

    const audio = new Audio(weddingSongs[initialIndex]);
    audio.volume = 0.6;
    audio.preload = 'auto';

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onerror = (e) => console.warn('Audio element error:', e);

    // When the song ends, automatically transition to another random song!
    audio.onended = () => {
      const nextIndex = pickRandomIndex(currentSongIndexRef.current);
      currentSongIndexRef.current = nextIndex;
      audio.src = weddingSongs[nextIndex];
      audio.play().catch(console.warn);
    };

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Called immediately when user clicks "Open Invitation"
  const handleSplashOpen = () => {
    setSplashDone(true);
    document.body.classList.remove('splash-open');

    // Trigger audio synchronously within the user gesture window
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn('Playback prevented by browser policy:', err);
      });
    }
  };

  // Toggle music via floating button
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().catch((err) => {
        console.warn('Playback error on toggle:', err);
      });
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#FCF9F2]">
      {/* Splash Screen Gate with smooth AnimatePresence exit */}
      <AnimatePresence>
        {!splashDone && <SplashScreen key="splash" onOpen={handleSplashOpen} />}
      </AnimatePresence>

      {/* Main Wedding Invitation Website */}
      <main
        className={`w-full flex flex-col transition-opacity duration-1000 ${
          splashDone ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Hero />
        <Countdown />
        <CoupleSection />
        <EventTimeline />
        <InvitationLetter />
        <DivineBlessings />
        <Gallery />
        <Location />
        <FamilySection />
        <Footer />
      </main>

      {/* Floating Music Button */}
      {splashDone && weddingSongs.length > 0 && (
        <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './styles/globals.css';
import 'leaflet/dist/leaflet.css';

import SplashScreen from './components/SplashScreen';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import CoupleSection from './components/CoupleSection';
import EventTimeline from './components/EventTimeline';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FamilySection from './components/FamilySection';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [musicAutoPlay, setMusicAutoPlay] = useState(false);

  const handleSplashOpen = () => {
    setSplashDone(true);
    setMusicAutoPlay(true);
    document.body.classList.remove('splash-open');
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#FCF9F2]">
      {/* Splash Screen Gate */}
      {!splashDone && <SplashScreen onOpen={handleSplashOpen} />}

      {/* Main Wedding Invitation Website */}
      <main
        className={`w-full flex flex-col transition-opacity duration-700 ${
          splashDone ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Hero />
        <Countdown />
        <CoupleSection />
        <EventTimeline />
        <Gallery />
        <Location />
        <FamilySection />
        <Footer />
      </main>

      {/* Floating Music Button */}
      {splashDone && <MusicPlayer autoPlay={musicAutoPlay} />}
    </div>
  );
}

export default App;

# 💍 Aparna & Vishal — Wedding Invitation

A beautiful, animated wedding invitation website built with React + TypeScript + Vite.

## ✨ Features

- 🪷 **Ganapathi Splash Screen** — Animated entrance gate with OM symbol
- 🌸 **Jasmine petal rain** animation
- ✍️ **Letter-by-letter name reveal** with Cormorant Garamond script font
- ⏱️ **Live countdown timer** to Reception & Wedding
- 💻 **Flutter & Java developer Easter egg** for Vishal & Aparna
- 🗺️ **Interactive map** (OpenStreetMap via Leaflet — free, no API key)
- 🖼️ **Masonry photo gallery** with lightbox
- 🎵 **Music player** (add MP3 to enable)
- 📱 **Fully responsive** — mobile-first design

## 🎨 Theme

Kerala traditional palette: antique gold + ivory cream + deep crimson + forest green

## 🚀 Deploy to Vercel

1. Push this folder (`wedding-app/`) to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output dir: `dist`
6. Deploy!

## 🎵 Adding the Wedding Song

1. Place your MP3 at: `src/assets/audio/wedding-song.mp3`
2. Open `src/components/MusicPlayer.tsx`
3. Set `MUSIC_ENABLED = true`
4. Uncomment `import weddingSong from '../assets/audio/wedding-song.mp3';`
5. Pass `weddingSong` to `new Audio(weddingSong)`

**Recommended**: MP3, ~1-3 MB, 45-60 seconds

## 🗺️ Updating Venue Pin

Open `src/components/Location.tsx` and update:
```ts
const venueCoords: [number, number] = [8.3067, 77.0832]; // ← exact lat/lng here
```

## 🛠️ Development

```bash
npm install
npm run dev
```


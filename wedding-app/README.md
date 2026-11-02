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
- 🎵 **Dynamic Random Music Player** (random song selection + auto-next track)
- 📱 **Fully responsive** — mobile-first luxury design

## 🎨 Theme

Kerala traditional palette: antique gold + ivory cream + deep crimson + forest green

## 🎵 Adding More Wedding Songs in the Future

The audio player is configured to **automatically detect and bundle all songs** in the folder!

1. Place your new MP3 in `src/assets/audio/` (e.g. `wedding-song3.mp3`, `wedding-song4.mp3`, etc.).
2. That's it! **No code changes are needed.**
3. Every time a guest visits or refreshes the website, a random song is selected.
4. When a song finishes playing, it will automatically transition to another song from the playlist.

## 🚀 Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Root Directory: `wedding-app` (if importing the parent repo) or root if `wedding-app` is its own repo
4. Framework: **Vite**
5. Build command: `npm run build`
6. Output dir: `dist`
7. Deploy!

## 🗺️ Updating Venue Pin

Open `src/components/Location.tsx` and update:
```ts
const venueLat = 8.3183;
const venueLng = 77.0674;
```

## 🛠️ Development

```bash
cd wedding-app
npm install
npm run dev
```

# 🌸 A Little Universe for Gargi

An enchanting, production-ready romantic website crafted with love for Gargi by her boyfriend. Designed as a magical pink anime fairytale world, it features a blooming interactive rose garden, a library of 18 original love letters, 30 reason cards, a relationship memory scrapbook, a photo gallery, 4 mini-games, daily love messages, a persistent music player, future dreams, and an emotional finale.

---

## ✨ Features

1. **Interactive Opening Scene**: Animated pink clouds, stars, sparkles, a cute anime kitten mascot, personal welcome, and smooth entry.
2. **The Enchanted World Map**: Illustrated fairytale navigation hub with animated destinations, responsive vertical journey for mobile, and hidden secrets.
3. **Interactive Rose Garden**: Clickable rose bushes that bloom, hydration watering can, color variations, garden journal, bouquet creator, and day/night mode.
4. **Love Letters Library**: 18 substantial original love letters + 20 short notes, clickable envelopes, animated reading view modal, category filtering, favorites, and random letter picker.
5. **30 Reasons Why I Love You**: 30 unique reasons covering individuality, smile, personality, dreams, effort & growth, safe space, and a secret 31st reason.
6. **Little Things I Adore About You**: Scrapbook spread with 16 sticky notes with washi tape, doodles, expressions, quirks, and pinned keepsakes.
7. **Daily Love Messages**: 44 messages across 8 emotional categories, date-based message of the day, copy-to-clipboard, and favorites.
8. **4 Working Mini-Games**:
   - **Catch the Hearts**: Timed touch/click collection game with score, countdown, and reward screen.
   - **Find the Hidden Roses**: Illustrated garden scene with hidden roses and a kitten.
   - **Love Quiz**: Affectionate, editable relationship quiz with sweet reactions.
   - **Build a Bouquet Studio**: Custom rose shades, ribbons, and gift card message.
   - **Bonus Activities**: Virtual warm hugs and random compliment generator.
9. **Relationship Memory Map & Timeline**: Chronological milestones, scrapbook spreads, interactive map coordinates, and secret keepsakes.
10. **Photo Gallery & Lightbox**: Responsive photo grid, full-screen lightbox with previous/next controls, keyboard support (Arrow keys + Escape), and graceful missing-image protection.
11. **Starry Observatory & Future Dreams**: Dream book where hopes can be added, edited, and deleted in real-time, persisted in `localStorage`.
12. **Secret Discoveries & Easter Eggs**: 6 hidden secrets to uncover (sleeping kitten, golden rose, wishing star, footer heart, scrapbook stamp, secret rose letter) with a discoveries journal.
13. **Persistent Music Player**: Play/pause, track seeking, volume/mute, playlist drawer, and Web Audio API synthesizer chime fallback so audio works instantly.
14. **Emotional Final Reveal**: Peaceful night sky transition, kitten guide, wax seal break, substantial 650-word final letter, and blooming eternal rose.
15. **Full Persistence & Accessibility**: Favourites, discoveries, and settings saved in versioned `localStorage`. Fully responsive and respects `prefers-reduced-motion`.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom fairycore tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: CSS animations + [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Fonts**: Playfair Display, Cormorant Garamond, Sacramento, Outfit (Google Fonts)

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel

This project is built and optimized for seamless zero-configuration deployment on **Vercel**:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of A Little Universe for Gargi"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New Project** and select your GitHub repository.
   - The framework preset will automatically detect **Next.js**.
   - No custom environment variables or backend configurations are required.
   - Click **Deploy**.
3. **Updating Content**:
   - Whenever you push new commits to GitHub (e.g., after adding your photos to `public/images/gallery/` or updating letters in `src/data/`), Vercel will automatically rebuild and redeploy your website within seconds!

---

## 🎨 Personalization Guide

See [`CUSTOMIZATION.md`](./CUSTOMIZATION.md) for full details on how to edit letters, daily messages, quiz questions, memories, dreams, reasons, photos, and music tracks.

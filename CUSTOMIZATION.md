# 🌸 Customization Guide: A Little Universe for Gargi

Welcome to the personalization guide for **A Little Universe for Gargi**. This document outlines how you can personalize every aspect of this website—including your love letters, daily messages, quiz questions, relationship memories, future dreams, photo gallery, and background music.

All customizable data is kept in strongly typed TypeScript files located in `src/data/`, and all media assets live in `public/`.

---

## 📁 File Structure Overview

| Feature | Data File Location | Asset Location |
| :--- | :--- | :--- |
| **Love Letters** | `src/data/letters.ts` | — |
| **30 Reasons I Love You** | `src/data/reasons.ts` | — |
| **Little Things I Adore** | `src/data/littleThings.ts` | — |
| **Daily Love Messages** | `src/data/dailyMessages.ts` | — |
| **Love Quiz** | `src/data/quiz.ts` | — |
| **Relationship Memories** | `src/data/memories.ts` | `public/images/memories/` |
| **Photo Gallery** | `src/data/gallery.ts` | `public/images/gallery/` |
| **Music Tracks** | `src/data/music.ts` | `public/music/` |
| **Future Dreams** | `src/data/dreams.ts` | (Also editable in browser!) |
| **Secret Discoveries** | `src/data/discoveries.ts` | — |

---

## 1. 💌 Editing Love Letters (`src/data/letters.ts`)

Open `src/data/letters.ts` to edit or add new letters. Each letter has the following structure:

```typescript
{
  id: "letter-for-my-baby",
  title: "A Letter for My Baby",
  subtitle: "Because one message could never hold everything I feel",
  category: "tender", // "reassurance" | "sweet" | "tender" | "promises" | "playful" | "secret"
  datePrompt: "To open whenever you need a soft place to land",
  preview: "Baby, if I could tuck one feeling into your pocket...",
  content: [
    "Paragraph 1...",
    "Paragraph 2...",
    "Paragraph 3..."
  ],
  signature: "Always yours, with all my love",
  sealedWith: "rose" // "rose" | "heart" | "bow" | "kitten" | "sparkle"
}
```

- **Adding a new letter**: Add a new object to the `LOVE_LETTERS` array.
- **Short Notes**: Scroll to `SHORT_LOVE_NOTES` at the bottom of the same file to customize the 20 tiny sticky notes scattered around the world.

---

## 2. 🌹 Adding Your Photos (`public/images/gallery/` & `src/data/gallery.ts`)

The website includes built-in protection: **if an image file does not exist yet, an aesthetic fairycore placeholder with a gentle prompt is shown automatically, and the site will never crash!**

### Step-by-step instructions:
1. Place your photo files into `public/images/gallery/`.
2. Name them `photo-1.jpg`, `photo-2.jpg`, etc., or use any filename you like.
3. Open `src/data/gallery.ts` and update the title, date, and description:

```typescript
{
  id: "photo-1",
  src: "/images/gallery/my-favorite-picture-of-gargi.jpg",
  title: "The Prettiest Princess",
  caption: "Taken on a sunny afternoon in the park.",
  date: "October 14",
  category: "portraits", // "portraits" | "candid" | "adventures" | "sweet-moments"
  aspectRatio: "portrait"
}
```

---

## 3. 🎶 Adding Your Music (`public/music/` & `src/data/music.ts`)

The website includes a persistent floating music player with play/pause, playlist support, seeking, volume controls, and a built-in soothing Web Audio melody box chime fallback.

### Easy Way:
1. Copy 3 of your favourite songs into `public/music/`.
2. Rename them to:
   - `track-1.mp3`
   - `track-2.mp3`
   - `track-3.mp3`
3. That's it! They will play immediately.

### Custom Playlist Way:
1. Place your audio files (`.mp3`, `.m4a`, or `.wav`) into `public/music/`.
2. Open `src/data/music.ts` and edit `PLAYLIST_TRACKS`:

```typescript
{
  id: "track-1",
  title: "Our Special Song",
  artist: "Her Favourite Artist",
  duration: "3:42",
  src: "/music/our-song.mp3"
}
```

---

## 4. 📖 Customizing Relationship Memories (`src/data/memories.ts`)

Open `src/data/memories.ts`. Each memory appears in the timeline, on the illustrated memory map, and in the scrapbook view:

```typescript
{
  id: "mem-1",
  title: "The Day We Met",
  chapter: "Chapter 1: The Beginning",
  datePrompt: "That Unforgettable Day",
  place: "Our Special Cafe",
  mapCoords: { x: 25, y: 40 }, // Percentage on map (0 to 100)
  photoUrl: "/images/memories/memory-1.jpg",
  photoPlaceholderText: "Add your first photo together here",
  caption: "The start of something infinitely gentle and sweet.",
  personalNote: "Write your real memories and thoughts here...",
  associatedLetterId: "a-letter-about-us", // Links to a letter in letters.ts
  tag: "milestone"
}
```

---

## 5. 💖 Editing 30 Reasons I Love You (`src/data/reasons.ts`)

Open `src/data/reasons.ts`. Each card has a summary and an unfolded detail.
- To change a reason, edit the `title`, `summary`, and `detail`.
- Card #31 is the **Secret Reason** unlocked when the user explores.

---

## 6. ☕ Editing Daily Love Messages (`src/data/dailyMessages.ts`)

Open `src/data/dailyMessages.ts`. Contains 40+ messages categorized into 8 themes:
- `miss-me`: When you miss me
- `reassurance`: Need reassurance
- `hard-day`: Having a hard day
- `want-to-smile`: Want to smile
- `confidence`: Need confidence
- `feel-adored`: Want to feel adored
- `future`: Imagining our future
- `cute`: Something cute

You can edit existing messages or add new ones to each category array.

---

## 7. 🎮 Customizing the Love Quiz (`src/data/quiz.ts`)

Open `src/data/quiz.ts`. You can change questions, options, and your boyfriend reactions:

```typescript
{
  id: 1,
  question: "What is Gargi's official title in this universe?",
  subtitle: "Just for fun!",
  options: [
    { id: "a", text: "Baby", isCorrect: true, sweetReaction: "My sweet baby, always!" },
    { id: "b", text: "Princess", isCorrect: true, sweetReaction: "The one and only princess!" }
  ],
  boyfriendNote: "Every one of those names was picked because you are so special to me."
}
```

---

## 8. ✨ Editing Future Dreams (`src/data/dreams.ts`)

You can edit default dreams in `src/data/dreams.ts`, OR **Gargi and you can add, edit, and delete dreams directly in the browser on the `/dreams` page!** Custom dreams are saved in the browser's local storage.

---

## 9. 🎨 Changing Colors & Rose Garden Settings

To adjust global theme colors, open `tailwind.config.ts` or `src/app/globals.css`.
Default Palette:
- Background blush: `#FFF0F5`
- Cotton candy: `#FFD6E7`
- Rose pink: `#F4A7C5`
- Deep rose: `#D85A88`
- Berry text: `#873D62`
- Warm ivory: `#FFFCF8`
- Lavender: `#E9DDFB`
- Sage: `#A8C5A5`

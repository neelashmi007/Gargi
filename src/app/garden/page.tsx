"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  Sparkles,
  Droplets,
  Flower2,
  Heart,
  Moon,
  Sun,
  RotateCcw,
  BookOpen,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";

interface RoseBush {
  id: number;
  variety: "Blush Whispers" | "Princess Velvet" | "Cotton Candy Bloom" | "Starlight Blossom" | "Sweet Kitten Rose" | "Golden Devotion";
  colorHex: string;
  petalClass: string;
  note: string;
}

const GARDEN_ROSES: RoseBush[] = [
  {
    id: 1,
    variety: "Blush Whispers",
    colorHex: "#F4A7C5",
    petalClass: "from-pink-200 to-rose-300",
    note: "Planting a reminder that your gentle voice brings immediate peace to my soul.",
  },
  {
    id: 2,
    variety: "Princess Velvet",
    colorHex: "#D85A88",
    petalClass: "from-rose-400 to-deep-rose",
    note: "Dedicated to the girl who deserves to be treated like absolute royalty every single day.",
  },
  {
    id: 3,
    variety: "Cotton Candy Bloom",
    colorHex: "#FFD6E7",
    petalClass: "from-pink-100 to-pink-300",
    note: "For your sweet smiles and the cute giggles that make my heart melt.",
  },
  {
    id: 4,
    variety: "Sweet Kitten Rose",
    colorHex: "#F8B4D9",
    petalClass: "from-rose-200 to-pink-400",
    note: "To remind you: when the world gets loud, curl right into my arms and let me protect you.",
  },
  {
    id: 5,
    variety: "Starlight Blossom",
    colorHex: "#E9DDFB",
    petalClass: "from-purple-200 to-pink-300",
    note: "Our dreams for the future are woven right into these petals.",
  },
  {
    id: 6,
    variety: "Golden Devotion",
    colorHex: "#FDE68A",
    petalClass: "from-amber-200 to-pink-200",
    note: "You unlocked the secret devotion rose! A symbol of steady, unbreakable loyalty.",
  },
];

export default function RoseGardenPage() {
  const {
    gardenStats,
    waterRoseGarden,
    toggleRoseBloom,
    themeMode,
    setThemeMode,
    unlockDiscovery,
    reducedMotion,
  } = useApp();

  const [selectedRose, setSelectedRose] = useState<RoseBush | null>(null);
  const [isWatering, setIsWatering] = useState(false);
  const [builtBouquet, setBuiltBouquet] = useState<number[]>([]);
  const [bouquetMessage, setBouquetMessage] = useState<string | null>(null);

  const handleWater = () => {
    setIsWatering(true);
    waterRoseGarden();
    if (!reducedMotion) {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.7 },
        colors: ["#A8C5A5", "#F4A7C5", "#FFD6E7"],
      });
    }
    setTimeout(() => setIsWatering(false), 900);
  };

  const handleRoseClick = (rose: RoseBush) => {
    toggleRoseBloom(rose.id);
    setSelectedRose(rose);

    if (rose.id === 6 || gardenStats.bloomedRoses.length >= 4) {
      unlockDiscovery("disc-golden-rose");
    }
  };

  const addToBouquet = (id: number) => {
    if (builtBouquet.includes(id)) {
      setBuiltBouquet(builtBouquet.filter((b) => b !== id));
    } else {
      if (builtBouquet.length < 5) {
        setBuiltBouquet([...builtBouquet, id]);
      }
    }
  };

  const finishBouquet = () => {
    if (builtBouquet.length === 0) return;
    if (!reducedMotion) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.5 },
        colors: ["#F4A7C5", "#D85A88", "#FFFCF8"],
      });
    }
    setBouquetMessage("Bouquet lovingly arranged and wrapped in pink ribbons for Princess Gargi! 💐");
    setTimeout(() => setBouquetMessage(null), 5000);
  };

  return (
    <div className="space-y-8 animate-bloom-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cotton-candy text-deep-rose text-xs font-semibold uppercase tracking-wider mb-2">
          <Flower2 className="w-4 h-4" /> Virtual Sanctuary
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-deep-rose">
          The Enchanted Rose Garden
        </h1>
        <p className="text-sm sm:text-base text-berry/80 mt-2 font-serif italic max-w-2xl mx-auto">
          &ldquo;If I could plant a little reminder of my love somewhere you could visit whenever you wanted, it would look something like this.&rdquo;
        </p>
      </div>

      {/* Garden Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-rose-pink/50 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Watering Can Action Button */}
          <button
            type="button"
            onClick={handleWater}
            disabled={isWatering}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs shadow-sm transition-all ${
              isWatering
                ? "bg-rose-pink text-white animate-pulse"
                : "bg-gradient-to-r from-rose-pink to-deep-rose text-white hover:scale-105 active:scale-95"
            }`}
          >
            <Droplets className="w-4 h-4" />
            <span>{isWatering ? "Watering with Love..." : "Water the Garden"}</span>
          </button>

          {/* Water Meter */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-berry font-medium">
            <span>Hydration:</span>
            <div className="w-24 h-2.5 bg-cotton-candy rounded-full overflow-hidden">
              <div
                className="h-full bg-deep-rose rounded-full transition-all duration-500"
                style={{ width: `${gardenStats.waterLevel}%` }}
              />
            </div>
            <span>{gardenStats.waterLevel}%</span>
          </div>
        </div>

        {/* Day/Sunset/Night Mode Toggle */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-berry/75 font-medium hidden md:inline">Atmosphere:</span>
          <div className="inline-flex bg-warm-ivory border border-rose-pink/40 rounded-full p-0.5 shadow-sm">
            <button
              type="button"
              onClick={() => setThemeMode("day")}
              className={`px-3 py-1 rounded-full flex items-center gap-1 ${
                themeMode === "day" ? "bg-rose-pink text-white font-bold" : "text-berry hover:text-deep-rose"
              }`}
            >
              <Sun className="w-3.5 h-3.5" /> Day
            </button>
            <button
              type="button"
              onClick={() => setThemeMode("night")}
              className={`px-3 py-1 rounded-full flex items-center gap-1 ${
                themeMode === "night" ? "bg-deep-rose text-white font-bold" : "text-berry hover:text-deep-rose"
              }`}
            >
              <Moon className="w-3.5 h-3.5" /> Moonlight
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Garden Bed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GARDEN_ROSES.map((rose) => {
          const isBloomed = gardenStats.bloomedRoses.includes(rose.id);
          const inBouquet = builtBouquet.includes(rose.id);

          return (
            <div
              key={rose.id}
              className={`relative p-6 rounded-3xl transition-all duration-500 border-2 flex flex-col justify-between ${
                isBloomed
                  ? "glass-panel border-rose-pink shadow-romantic bg-warm-ivory/95"
                  : "bg-warm-ivory/60 border-rose-pink/30 hover:border-rose-pink"
              }`}
            >
              {/* Variety Tag & Bouquet Checkbox */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-deep-rose bg-cotton-candy/50 px-2.5 py-0.5 rounded-full border border-rose-pink/30">
                  {rose.variety}
                </span>

                <button
                  type="button"
                  onClick={() => addToBouquet(rose.id)}
                  title={inBouquet ? "Remove from bouquet" : "Add to custom bouquet"}
                  className={`text-xs px-2.5 py-1 rounded-full flex items-center gap-1 transition-all ${
                    inBouquet
                      ? "bg-deep-rose text-white font-semibold"
                      : "bg-cotton-candy/40 text-berry hover:bg-cotton-candy"
                  }`}
                >
                  {inBouquet ? <Check className="w-3 h-3" /> : "+"} Bouquet
                </button>
              </div>

              {/* Clickable Rose SVG Flower */}
              <div className="flex flex-col items-center my-4">
                <button
                  type="button"
                  onClick={() => handleRoseClick(rose)}
                  aria-label={`Interact with ${rose.variety} rose`}
                  className="group relative focus:outline-none focus:ring-2 focus:ring-deep-rose rounded-full p-2"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className={`w-28 h-28 drop-shadow-md transition-transform duration-500 group-hover:scale-110 active:scale-95 ${
                      isBloomed ? "scale-105" : "scale-90 opacity-80"
                    }`}
                  >
                    {/* Stem & Leaves */}
                    <path d="M 50 65 Q 48 85 50 95" stroke="#A8C5A5" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M 50 75 Q 35 70 32 78 Q 42 82 50 78" fill="#BFD8BD" stroke="#A8C5A5" strokeWidth="1.5" />
                    <path d="M 50 82 Q 65 77 68 85 Q 58 89 50 85" fill="#BFD8BD" stroke="#A8C5A5" strokeWidth="1.5" />

                    {/* Rose Petals (Bud vs Full Bloom) */}
                    {isBloomed ? (
                      <g className="animate-bloom-in origin-center">
                        {/* Outer blooming petals */}
                        <circle cx="50" cy="45" r="30" fill={rose.colorHex} opacity="0.35" />
                        <path d="M 28 45 C 28 30, 40 22, 50 25 C 60 22, 72 30, 72 45 C 72 60, 60 65, 50 65 C 40 65, 28 60, 28 45 Z" fill={rose.colorHex} />
                        <path d="M 35 40 C 35 30, 44 26, 50 28 C 56 26, 65 30, 65 40 C 65 52, 56 56, 50 56 C 44 56, 35 52, 35 40 Z" fill="#FFFCF8" opacity="0.25" />
                        <path d="M 42 42 C 42 36, 46 34, 50 35 C 54 34, 58 36, 58 42 C 58 48, 54 50, 50 50 C 46 50, 42 48, 42 42 Z" fill="#D85A88" opacity="0.8" />
                        <circle cx="50" cy="43" r="4" fill="#FFFCF8" />
                      </g>
                    ) : (
                      /* Closed Bud */
                      <g>
                        <ellipse cx="50" cy="50" rx="16" ry="22" fill={rose.colorHex} />
                        <path d="M 44 40 Q 50 30 56 40 Q 50 60 44 40" fill="#D85A88" opacity="0.6" />
                        <path d="M 40 55 Q 50 48 60 55 Q 50 68 40 55" fill="#A8C5A5" opacity="0.8" />
                      </g>
                    )}
                  </svg>

                  <span className="mt-2 block text-center text-xs font-semibold text-deep-rose group-hover:underline">
                    {isBloomed ? "✦ Fully Bloomed ✦" : "Tap to Bloom"}
                  </span>
                </button>
              </div>

              {/* Secret Note Beneath Rose */}
              {isBloomed && (
                <div className="mt-3 p-3 bg-blush/80 rounded-2xl border border-rose-pink/40 text-xs text-berry leading-relaxed font-sans animate-bloom-in">
                  <p className="font-serif italic text-deep-rose mb-1">Whisper from this rose:</p>
                  <p>{rose.note}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bouquet Builder Drawer / Tray */}
      <section className="rounded-3xl parchment-paper p-6 sm:p-8 border-2 border-rose-pink shadow-romantic">
        <div className="max-w-xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-serif font-bold text-deep-rose">
            Build a Custom Rose Bouquet
          </h2>
          <p className="text-xs sm:text-sm text-berry/80">
            Pick your favourite roses from the garden above ({builtBouquet.length}/5 chosen), and tie them into a sweet keepsake for Gargi.
          </p>

          <div className="flex items-center justify-center gap-3 py-3">
            {builtBouquet.length === 0 ? (
              <p className="text-xs italic text-berry/60">No roses added to your bouquet yet. Click &quot;+ Bouquet&quot; above!</p>
            ) : (
              builtBouquet.map((id) => {
                const rose = GARDEN_ROSES.find((r) => r.id === id);
                if (!rose) return null;
                return (
                  <div
                    key={id}
                    className="flex flex-col items-center text-center p-2 rounded-xl bg-white border border-rose-pink shadow-sm"
                  >
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: rose.colorHex }}
                    >
                      ♥
                    </div>
                    <span className="text-[10px] font-medium text-berry mt-1 truncate max-w-[80px]">
                      {rose.variety}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          {bouquetMessage && (
            <p className="text-xs sm:text-sm font-serif font-bold text-deep-rose bg-cotton-candy/60 p-2.5 rounded-xl border border-rose-pink animate-bloom-in">
              {bouquetMessage}
            </p>
          )}

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={finishBouquet}
              disabled={builtBouquet.length === 0}
              className={`px-6 py-2.5 rounded-full font-serif font-bold text-xs shadow-romantic transition-all ${
                builtBouquet.length > 0
                  ? "bg-deep-rose hover:bg-berry text-white active:scale-95"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Tie With Pink Bow & Save
            </button>
            {builtBouquet.length > 0 && (
              <button
                type="button"
                onClick={() => setBuiltBouquet([])}
                className="text-xs text-berry/70 hover:text-deep-rose underline font-medium"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Navigation link to Love Letters */}
      <div className="text-center pt-4">
        <Link
          href="/letters"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass-panel border border-rose-pink text-xs font-bold text-deep-rose hover:bg-cotton-candy/40 transition-all shadow-sm"
        >
          <BookOpen className="w-4 h-4" /> Wander to the Love Letters Library →
        </Link>
      </div>
    </div>
  );
}

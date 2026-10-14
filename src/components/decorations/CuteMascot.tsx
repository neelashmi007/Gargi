"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

export const CuteMascot: React.FC = () => {
  const { unlockDiscovery } = useApp();
  const [speech, setSpeech] = useState<string | null>(null);
  const [isBouncing, setIsBouncing] = useState(false);

  const messages = [
    "Purrrr! Princess Gargi is the most loved girl ever! 🌸",
    "Baby deserves all the cuddles and strawberry treats today! 🍓",
    "Did you remember to take a deep, soft breath? You're doing wonderful! 💕",
    "*Bumps forehead softly against yours* Meow! 🐾",
    "Whenever you miss your boy, just remember: you are his whole universe! ✨",
  ];

  const handlePet = () => {
    setIsBouncing(true);
    unlockDiscovery("disc-sleeping-cat");
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setSpeech(randomMsg);
    setTimeout(() => setIsBouncing(false), 800);
    setTimeout(() => setSpeech(null), 4500);
  };

  return (
    <div className="fixed bottom-20 right-4 md:right-8 z-40 flex flex-col items-end">
      {speech && (
        <div className="mb-2 max-w-xs bg-warm-ivory border-2 border-rose-pink rounded-2xl p-3 shadow-romantic text-xs md:text-sm text-berry font-medium animate-bloom-in relative">
          <p>{speech}</p>
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-warm-ivory border-r-2 border-b-2 border-rose-pink rotate-45" />
        </div>
      )}

      <button
        type="button"
        onClick={handlePet}
        aria-label="Pet the sweet little kitten"
        title="Click to pet me!"
        className={`group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-cotton-candy to-warm-ivory border-2 border-rose-pink shadow-romantic hover:scale-110 active:scale-95 transition-all duration-300 ${
          isBouncing ? "animate-bounce" : "animate-float-gentle"
        }`}
      >
        {/* Cute Anime Kitten SVG */}
        <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-sm">
          {/* Ears */}
          <polygon points="20,40 32,15 48,32" fill="#FFD6E7" stroke="#D85A88" strokeWidth="2.5" />
          <polygon points="26,35 34,20 44,32" fill="#F4A7C5" />
          <polygon points="80,40 68,15 52,32" fill="#FFD6E7" stroke="#D85A88" strokeWidth="2.5" />
          <polygon points="74,35 66,20 56,32" fill="#F4A7C5" />
          {/* Head */}
          <ellipse cx="50" cy="55" rx="35" ry="30" fill="#FFFDFC" stroke="#D85A88" strokeWidth="2.5" />
          {/* Blush */}
          <ellipse cx="28" cy="62" rx="6" ry="3.5" fill="#F4A7C5" opacity="0.8" />
          <ellipse cx="72" cy="62" rx="6" ry="3.5" fill="#F4A7C5" opacity="0.8" />
          {/* Cute Anime Eyes (Curved happy eyes) */}
          <path d="M 32 50 Q 38 43 44 50" fill="none" stroke="#873D62" strokeWidth="3" strokeLinecap="round" />
          <path d="M 56 50 Q 62 43 68 50" fill="none" stroke="#873D62" strokeWidth="3" strokeLinecap="round" />
          {/* Cute Nose and Mouth */}
          <polygon points="48,56 52,56 50,59" fill="#D85A88" />
          <path d="M 46 60 Q 50 63 54 60" fill="none" stroke="#873D62" strokeWidth="2" strokeLinecap="round" />
          {/* Whiskers */}
          <line x1="16" y1="56" x2="28" y2="58" stroke="#D85A88" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="64" x2="28" y2="62" stroke="#D85A88" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="84" y1="56" x2="72" y2="58" stroke="#D85A88" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="82" y1="64" x2="72" y2="62" stroke="#D85A88" strokeWidth="1.5" strokeLinecap="round" />
          {/* Little Pink Bow */}
          <path d="M 68 28 C 64 22, 60 30, 68 33 C 76 30, 72 22, 68 28 Z" fill="#D85A88" />
          <circle cx="68" cy="29" r="2.5" fill="#FFFCF8" />
        </svg>

        {/* Floating Heart Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-pink opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-deep-rose text-[9px] text-white font-bold items-center justify-center">
            ♥
          </span>
        </span>
      </button>
    </div>
  );
};

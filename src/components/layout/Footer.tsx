"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Heart, Sparkles, Feather } from "lucide-react";

export const Footer: React.FC = () => {
  const { unlockDiscovery, replayIntro } = useApp();

  const handleHeartEasterEgg = () => {
    unlockDiscovery("disc-footer-heart");
  };

  return (
    <footer className="w-full bg-gradient-to-b from-transparent to-cotton-candy/40 border-t border-rose-pink/30 py-12 px-4 sm:px-6 mt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Decorative Top Rose Icon */}
        <div className="w-10 h-10 rounded-full bg-rose-pink/20 flex items-center justify-center text-deep-rose mb-4 shadow-sm">
          <Sparkles className="w-5 h-5 text-deep-rose animate-sparkle-spin" />
        </div>

        <h3 className="text-xl sm:text-2xl font-serif font-bold text-deep-rose">
          A Little Universe for Gargi
        </h3>

        <p className="max-w-md text-xs sm:text-sm text-berry/80 mt-2 font-sans leading-relaxed">
          Built with infinite love, roses, and devotion for my Baby, my Princess, and my favourite Kitten.
          May this little universe always remind you that you are cherished beyond words.
        </p>

        {/* Quick Footer Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-berry/75 mt-6 mb-8">
          <Link href="/" className="hover:text-deep-rose underline">World Map</Link>
          <Link href="/garden" className="hover:text-deep-rose underline">Rose Garden</Link>
          <Link href="/letters" className="hover:text-deep-rose underline">Love Letters</Link>
          <Link href="/memories" className="hover:text-deep-rose underline">Memories</Link>
          <Link href="/gallery" className="hover:text-deep-rose underline">Gallery</Link>
          <Link href="/reasons" className="hover:text-deep-rose underline">30 Reasons</Link>
          <Link href="/little-things" className="hover:text-deep-rose underline">Little Things</Link>
          <Link href="/daily-love" className="hover:text-deep-rose underline">Daily Messages</Link>
          <Link href="/play" className="hover:text-deep-rose underline">Mini-Games</Link>
          <Link href="/dreams" className="hover:text-deep-rose underline">Future Dreams</Link>
          <Link href="/final-letter" className="hover:text-deep-rose underline">Final Letter</Link>
        </div>

        <div className="pt-6 border-t border-rose-pink/30 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-berry/60 gap-4">
          <div className="flex items-center gap-1.5">
            <Feather className="w-3.5 h-3.5 text-deep-rose" />
            <span>Forever your boy • Every rose planted in your honor</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={replayIntro}
              className="hover:text-deep-rose underline"
            >
              Replay Intro
            </button>
            <span>•</span>
            {/* Secret Easter Egg Heart */}
            <button
              type="button"
              onClick={handleHeartEasterEgg}
              aria-label="A tiny secret heart"
              title="A tiny secret heart for Gargi"
              className="p-1 hover:scale-125 transition-transform text-rose-pink hover:text-deep-rose"
            >
              <Heart className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { Sparkles, X } from "lucide-react";
import confetti from "canvas-confetti";

export const DiscoveryToast: React.FC<{ onOpenJournal: () => void }> = ({ onOpenJournal }) => {
  const { latestUnlocked, clearLatestUnlocked, reducedMotion } = useApp();

  useEffect(() => {
    if (latestUnlocked) {
      if (!reducedMotion) {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.85 },
          colors: ["#F4A7C5", "#D85A88", "#FFD6E7", "#E9DDFB"],
        });
      }
      const timer = setTimeout(() => {
        clearLatestUnlocked();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [latestUnlocked, clearLatestUnlocked, reducedMotion]);

  if (!latestUnlocked) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-8 z-50 max-w-sm w-full bg-warm-ivory border-2 border-deep-rose rounded-2xl p-4 shadow-romantic-lg animate-bloom-in">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-cotton-candy text-deep-rose flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-5 h-5 animate-sparkle-spin" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-deep-rose">Secret Unlocked!</h4>
            <button
              type="button"
              onClick={clearLatestUnlocked}
              className="text-berry/60 hover:text-deep-rose"
              aria-label="Dismiss secret toast"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm font-serif font-bold text-berry mt-0.5 truncate">{latestUnlocked.name}</p>
          <p className="text-xs text-berry/80 mt-1">{latestUnlocked.revealedMessage}</p>
          <button
            type="button"
            onClick={() => {
              clearLatestUnlocked();
              onOpenJournal();
            }}
            className="mt-2 text-xs font-semibold text-deep-rose underline hover:text-berry"
          >
            View Journal →
          </button>
        </div>
      </div>
    </div>
  );
};

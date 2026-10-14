"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { DISCOVERIES_LIST } from "@/data/discoveries";
import { Sparkles, X, CheckCircle2, Lock, Gift } from "lucide-react";

interface DiscoveriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiscoveriesModal: React.FC<DiscoveriesModalProps> = ({ isOpen, onClose }) => {
  const { discoveries } = useApp();

  if (!isOpen) return null;

  const unlockedCount = discoveries.length;
  const totalCount = DISCOVERIES_LIST.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-berry/40 backdrop-blur-sm animate-bloom-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="discoveries-modal-title"
    >
      <div className="relative w-full max-w-lg bg-warm-ivory rounded-3xl p-6 shadow-romantic-lg border-2 border-rose-pink max-h-[85vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-berry hover:text-deep-rose hover:bg-cotton-candy/40 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cotton-candy text-deep-rose mb-2 shadow-sm">
            <Sparkles className="w-6 h-6 animate-sparkle-spin" />
          </div>
          <h2 id="discoveries-modal-title" className="text-2xl font-serif font-bold text-deep-rose">
            Journal of Secret Discoveries
          </h2>
          <p className="text-xs sm:text-sm text-berry/80 mt-1">
            Hidden treasures, easter eggs, and secret notes scattered throughout Gargi&apos;s universe.
          </p>
          <div className="mt-3 inline-block bg-cotton-candy/60 text-deep-rose text-xs font-semibold px-3 py-1 rounded-full border border-rose-pink/40">
            {unlockedCount} of {totalCount} Secrets Unlocked
          </div>
        </div>

        {/* List of Discoveries */}
        <div className="space-y-3">
          {DISCOVERIES_LIST.map((item) => {
            const isUnlocked = discoveries.includes(item.id);

            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-2xl border transition-all ${
                  isUnlocked
                    ? "bg-blush/60 border-rose-pink shadow-sm"
                    : "bg-gray-50/60 border-gray-200 opacity-75"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isUnlocked ? "bg-rose-pink text-white shadow-sm" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {isUnlocked ? <CheckCircle2 className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-serif font-semibold text-deep-rose truncate">
                        {item.name}
                      </h3>
                      <span className="text-[10px] text-berry/60 uppercase tracking-wider font-semibold">
                        {item.location}
                      </span>
                    </div>

                    {isUnlocked ? (
                      <p className="text-xs text-berry mt-1 font-sans bg-warm-ivory p-2 rounded-xl border border-rose-pink/30">
                        {item.revealedMessage}
                      </p>
                    ) : (
                      <p className="text-xs text-berry/70 italic mt-1">
                        Hint: {item.hint}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion Message */}
        {unlockedCount === totalCount && (
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-cotton-candy to-rose-pink text-center text-deep-rose border border-deep-rose/30 shadow-romantic animate-pulse-soft">
            <Gift className="w-6 h-6 mx-auto mb-1 text-deep-rose" />
            <p className="font-serif font-bold text-sm">You found every single secret, Princess!</p>
            <p className="text-xs mt-1">
              There is nothing in this world that can hide how much you are cherished.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

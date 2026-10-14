"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IntroStoryState, KITTEN_PURR_REACTIONS } from "./introData";
import { Heart, Sparkles } from "lucide-react";

interface KittenCharacterProps {
  storyState: IntroStoryState;
  reducedMotion?: boolean;
  onKittenPet?: (purrMsg: string) => void;
}

export const KittenCharacter: React.FC<KittenCharacterProps> = ({
  storyState,
  reducedMotion,
  onKittenPet,
}) => {
  const [isPurring, setIsPurring] = useState(false);
  const [purrEffectPos, setPurrEffectPos] = useState({ x: 0, y: 0 });

  // Map story state to the exact consistent illustration pose
  let poseSrc = "/images/intro/kitten_greeting.png";
  let altText = "Tiny white fluffy anime kitten with pink ribbons and bell smiling happily";

  if (storyState === "discovering") {
    poseSrc = "/images/intro/kitten_curious.png";
    altText = "Tiny white anime kitten curiously investigating a discovery with paw raised";
  } else if (storyState === "presenting" || storyState === "opening") {
    poseSrc = "/images/intro/kitten_presenting.png";
    altText = "Tiny white anime kitten lovingly holding up a sealed ivory love letter envelope";
  }

  // Handle gentle pet interaction
  const handlePet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsPurring(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setPurrEffectPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    const randomPurr =
      KITTEN_PURR_REACTIONS[Math.floor(Math.random() * KITTEN_PURR_REACTIONS.length)];
    if (onKittenPet) {
      onKittenPet(randomPurr);
    }

    setTimeout(() => {
      setIsPurring(false);
    }, 1200);
  };

  // State-specific positioning and entrance dynamics
  const getPositionClasses = () => {
    switch (storyState) {
      case "entering":
        return "translate-y-4 scale-95 opacity-90";
      case "meeting":
        return "translate-y-0 scale-100 opacity-100";
      case "following":
        return "translate-x-2 md:translate-x-6 scale-95 opacity-100";
      case "discovering":
        return "translate-y-1 scale-100 opacity-100";
      case "presenting":
      case "opening":
        return "scale-105 opacity-100";
      case "transitioning":
        return "scale-110 opacity-90 blur-[1px]";
      default:
        return "scale-100 opacity-100";
    }
  };

  return (
    <div
      className={`relative transition-all duration-700 ease-out flex flex-col items-center select-none ${getPositionClasses()}`}
    >
      {/* Gentle Floating Glow Behind Kitten */}
      <div
        className="absolute -inset-4 rounded-full bg-gradient-to-tr from-pink-300/40 via-warm-ivory/50 to-cotton-candy/40 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Purr Hearts Animation */}
      {isPurring && (
        <div
          className="absolute z-30 pointer-events-none animate-float-gentle"
          style={{ top: `${purrEffectPos.y - 20}px`, left: `${purrEffectPos.x - 10}px` }}
        >
          <div className="flex items-center gap-1 bg-white/95 text-deep-rose text-xs font-serif font-bold px-3 py-1 rounded-full shadow-romantic border border-rose-pink/60 animate-bloom-in">
            <Heart className="w-3.5 h-3.5 fill-rose-pink text-deep-rose" />
            <span>*purrrr* 💕</span>
          </div>
        </div>
      )}

      {/* Interactive Kitten Character Container */}
      <button
        type="button"
        onClick={handlePet}
        aria-label="Pet the cute white anime kitten"
        title="Click to pet me! 🐾"
        className={`relative z-10 group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-deep-rose/80 rounded-3xl p-2 transition-transform duration-300 ${
          !reducedMotion ? "hover:scale-105 active:scale-95 animate-float-gentle" : ""
        }`}
      >
        {/* Responsive Kitten Artwork */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 drop-shadow-romantic-lg transition-transform duration-500">
          <Image
            src={poseSrc}
            alt={altText}
            fill
            sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
            priority
            className="object-contain drop-shadow-[0_12px_24px_rgba(216,90,136,0.35)]"
          />

          {/* Sparkle highlight indicator on ribbon */}
          <div className="absolute top-4 right-8 text-amber-200 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-5 h-5 animate-spin-slow" />
          </div>
        </div>

        {/* Small "Pet me" tooltip affordance on hover */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-warm-ivory/95 text-deep-rose text-[11px] font-sans font-semibold px-3 py-0.5 rounded-full border border-rose-pink/50 shadow-sm pointer-events-none whitespace-nowrap">
          🐾 Click to pet kitten
        </div>
      </button>

      <style jsx>{`
        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

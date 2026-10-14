"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface EnvelopeRevealProps {
  onCompleteOpening: () => void;
  reducedMotion?: boolean;
}

export const EnvelopeReveal: React.FC<EnvelopeRevealProps> = ({
  onCompleteOpening,
  reducedMotion,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen || isAnimating) return;
    setIsAnimating(true);

    if (!reducedMotion) {
      // Gentle romantic floral confetti burst
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.55 },
        colors: ["#F4A7C5", "#FFD6E7", "#D85A88", "#FFFCF8", "#E9DDFB"],
      });
    }

    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="relative z-30 flex flex-col items-center justify-center max-w-lg w-full mx-auto px-4">
      {/* Outer Envelope Wrapper */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
        {/* Warm Golden-Pink Aura Glow */}
        <div
          className={`absolute -inset-6 rounded-full bg-gradient-to-tr from-rose-pink/50 via-warm-ivory/60 to-cotton-candy/50 blur-3xl transition-all duration-700 pointer-events-none ${
            isOpen ? "scale-125 opacity-90" : "scale-100 opacity-60 animate-pulse-soft"
          }`}
          aria-hidden="true"
        />

        {/* Sliding Letter Card (slides up out of envelope once opened) */}
        <div
          className={`absolute z-20 w-[90%] sm:w-[92%] bg-[#FFFCF8] border-2 border-rose-pink/80 rounded-2xl p-5 sm:p-6 shadow-romantic-lg transition-all duration-700 ease-out flex flex-col items-center text-center ${
            isOpen
              ? "-translate-y-20 sm:-translate-y-24 scale-100 opacity-100"
              : "translate-y-6 scale-90 opacity-0 pointer-events-none"
          }`}
        >
          {/* Decorative Stamp Header */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cotton-candy/70 text-deep-rose text-[11px] font-serif font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-rose-pink text-deep-rose" />
            <span>To My Girl, Gargi</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-deep-rose">
            Made with all my love, just for you.
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-berry/85 font-serif italic leading-relaxed">
            &ldquo;Every single blooming rose, every handwritten note, and every quiet path in this little world was created to remind you how deeply and endlessly you are cherished.&rdquo;
          </p>

          <p className="mt-3 text-xs text-deep-rose/80 font-handwriting text-xl sm:text-2xl">
            Welcome home to your little universe, Baby 🌸
          </p>

          {/* Final Call to Action Button */}
          <button
            type="button"
            onClick={onCompleteOpening}
            className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-pink to-deep-rose hover:from-deep-rose hover:to-berry text-white font-serif font-semibold text-sm shadow-romantic hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group focus:outline-none focus-visible:ring-4 focus-visible:ring-deep-rose/80"
          >
            <span>Enter Our Universe Together</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* The Illustrated Magical Envelope */}
        <div
          className={`relative z-10 w-full h-full transition-transform duration-500 ${
            isOpen ? "translate-y-12 sm:translate-y-16 scale-95" : ""
          }`}
        >
          <Image
            src="/images/intro/magical_envelope.png"
            alt="Magical vintage ivory love letter envelope with hot-pink heart wax seal and silk ribbon"
            fill
            priority
            sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
            className="object-contain drop-shadow-[0_16px_32px_rgba(216,90,136,0.4)]"
          />

          {/* Interactive Heart Wax Seal Touch Target (Before Opening) */}
          {!isOpen && (
            <button
              type="button"
              onClick={handleOpenEnvelope}
              disabled={isAnimating}
              aria-label="Break the heart wax seal and open the letter"
              title="Click to break seal & open letter"
              className="absolute inset-0 m-auto w-24 h-24 rounded-full flex items-center justify-center cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-deep-rose"
            >
              {/* Pulsing ring indicator around heart seal */}
              <span className="absolute w-20 h-20 rounded-full bg-rose-pink/30 animate-ping pointer-events-none opacity-60" />

              <span className="sr-only">Open Letter</span>

              {/* Sparkling hover feedback */}
              <div className="absolute -top-3 text-amber-200 opacity-90 group-hover:scale-125 transition-transform">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Helper Affordance Text Below Envelope */}
      {!isOpen && (
        <div className="mt-2 text-center animate-bloom-in">
          <p className="text-sm font-serif font-semibold text-deep-rose bg-warm-ivory/90 px-4 py-1 rounded-full border border-rose-pink/50 shadow-sm inline-flex items-center gap-1.5">
            <Heart className="w-4 h-4 fill-rose-pink text-deep-rose animate-pulse" />
            <span>Tap the heart wax seal to open 💌</span>
          </p>
        </div>
      )}
    </div>
  );
};

"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface DialogueBubbleProps {
  dialogueLines: string[];
  currentLineIndex: number;
  onNextLine: () => void;
  actionLabel?: string;
  isLastLine: boolean;
  speakerName?: string;
  purrToast?: string | null;
}

export const DialogueBubble: React.FC<DialogueBubbleProps> = ({
  dialogueLines,
  currentLineIndex,
  onNextLine,
  actionLabel,
  isLastLine,
  speakerName = "Kitten with Pink Ribbons 🎀",
  purrToast,
}) => {
  const currentText = dialogueLines[currentLineIndex] || "";

  return (
    <div className="relative w-full max-w-xl mx-auto z-30 px-3 sm:px-0">
      {/* Outer Romantic Coquette Speech Card */}
      <div className="relative bg-warm-ivory/95 border-2 border-rose-pink/80 rounded-3xl p-5 sm:p-7 shadow-romantic-lg backdrop-blur-md animate-bloom-in">
        {/* Decorative Top Stamp Badge */}
        <div className="absolute -top-3.5 left-6 sm:left-8 px-4 py-0.5 rounded-full bg-gradient-to-r from-rose-pink to-deep-rose text-white text-[11px] sm:text-xs font-serif font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-200" />
          <span>{speakerName}</span>
        </div>

        {/* Small Progress Dots when multiple lines exist */}
        {dialogueLines.length > 1 && (
          <div className="absolute top-4 right-5 sm:right-7 flex items-center gap-1.5" aria-hidden="true">
            {dialogueLines.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentLineIndex
                    ? "bg-deep-rose w-4"
                    : idx < currentLineIndex
                    ? "bg-rose-pink/80"
                    : "bg-cotton-candy/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Main Dialogue Content */}
        <div className="mt-1 min-h-[64px] flex items-center">
          <p
            key={currentLineIndex}
            className="text-base sm:text-lg md:text-xl font-serif text-berry leading-relaxed font-medium animate-fade-in"
          >
            &ldquo;{currentText}&rdquo;
          </p>
        </div>

        {/* Dynamic Pet Purr Feedback if user clicked kitten */}
        {purrToast && (
          <div className="mt-2 text-xs font-handwriting text-deep-rose italic animate-bloom-in">
            {purrToast}
          </div>
        )}

        {/* Bottom Interaction Controls */}
        <div className="mt-4 pt-3 border-t border-rose-pink/25 flex items-center justify-between gap-3">
          <span className="text-[11px] text-berry/65 font-medium hidden sm:inline-block">
            Press <kbd className="px-1.5 py-0.5 bg-cotton-candy/40 border border-rose-pink/40 rounded text-[10px] font-mono">Space</kbd> or click to continue
          </span>

          <button
            type="button"
            onClick={onNextLine}
            className="ml-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-pink to-deep-rose hover:from-deep-rose hover:to-berry text-white font-serif font-semibold text-sm shadow-romantic hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group focus:outline-none focus-visible:ring-4 focus-visible:ring-deep-rose/80"
          >
            <span>{isLastLine && actionLabel ? actionLabel : "Continue 🐾"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Speech Bubble Pointer Tail (points down toward kitten) */}
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-warm-ivory border-r-2 border-b-2 border-rose-pink/80 rotate-45"
          aria-hidden="true"
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

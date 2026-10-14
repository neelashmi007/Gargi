"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  Sparkles,
  Heart,
  Mail,
  RotateCcw,
  BookOpen,
  Flower2,
  Compass,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function FinalLetterPage() {
  const { reducedMotion, setThemeMode } = useApp();
  const [step, setStep] = useState<"night" | "envelope" | "letter" | "bloom">("night");

  // Step 1: Automatically transition atmosphere to romantic night sky
  useEffect(() => {
    setThemeMode("night");
    const timer = setTimeout(() => {
      setStep("envelope");
    }, 2200);
    return () => clearTimeout(timer);
  }, [setThemeMode]);

  const handleOpenFinalLetter = () => {
    setStep("letter");
    if (!reducedMotion) {
      confetti({
        particleCount: 65,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#F4A7C5", "#D85A88", "#FFD6E7", "#E9DDFB", "#FFFCF8"],
      });
    }
  };

  const handleFinalBloom = () => {
    setStep("bloom");
    if (!reducedMotion) {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.5 },
        colors: ["#F4A7C5", "#D85A88", "#FFFCF8"],
      });
    }
  };

  const handleReplayFinale = () => {
    setStep("night");
    setTimeout(() => {
      setStep("envelope");
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-bloom-in min-h-[85vh] flex flex-col justify-center">
      {/* 1. CINEMATIC NIGHT SKY TRANSITION INTRO */}
      {step === "night" && (
        <div className="text-center py-24 space-y-6 animate-bloom-in">
          <div className="w-16 h-16 rounded-full bg-rose-pink/20 text-rose-pink flex items-center justify-center mx-auto shadow-glow-pink">
            <Sparkles className="w-8 h-8 animate-sparkle-spin" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-pink-100">
            The Stars Settle Over Our Little World...
          </h2>
          <p className="text-xs sm:text-sm text-pink-200/80 italic font-serif max-w-md mx-auto">
            Soft pink clouds drift away to reveal the quiet midnight sky. Someone special left one final keepsake just for you.
          </p>
        </div>
      )}

      {/* 2. THE KITTEN GUIDES GARGI TO THE FINAL WAX-SEALED ENVELOPE */}
      {step === "envelope" && (
        <div className="max-w-xl mx-auto text-center p-8 sm:p-12 rounded-3xl glass-panel border-2 border-rose-pink shadow-glow-rose animate-bloom-in space-y-6">
          <div className="w-16 h-16 rounded-full bg-cotton-candy text-deep-rose flex items-center justify-center mx-auto shadow-romantic">
            <Mail className="w-8 h-8 text-deep-rose animate-bounce" />
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-deep-rose bg-cotton-candy px-3 py-1 rounded-full border border-rose-pink/40">
              Final Kept Secret
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-deep-rose mt-3">
              An Envelope Under Moonlight
            </h2>
            <p className="text-xs sm:text-sm text-berry/80 mt-2 font-serif italic max-w-sm mx-auto">
              Our sweet kitten nudged this final envelope into your hands. It carries every quiet promise I hold for you.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleOpenFinalLetter}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-pink to-deep-rose hover:from-deep-rose hover:to-berry text-white font-serif font-bold text-base shadow-romantic-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto"
            >
              <span>Break Wax Seal & Read</span>
              <Heart className="w-5 h-5 fill-white" />
            </button>
          </div>
        </div>
      )}

      {/* 3. THE SUBSTANTIAL FINAL LETTER (500 - 800 WORDS) */}
      {(step === "letter" || step === "bloom") && (
        <div className="max-w-3xl mx-auto bg-[#FFFCF8] rounded-3xl p-6 sm:p-12 shadow-romantic-lg border-4 border-rose-pink/60 animate-bloom-in space-y-6 text-berry">
          {/* Letter Header */}
          <div className="text-center pb-6 border-b border-rose-pink/30">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-deep-rose bg-cotton-candy/70 px-4 py-1 rounded-full border border-rose-pink/40">
              Under Midnight Stars • Written Exclusively for Gargi
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-deep-rose mt-3">
              My Final Letter to You, Baby
            </h1>
            <p className="text-xs sm:text-sm font-serif italic text-berry/75 mt-1">
              Read slowly, breathe gently, and know every word comes from the depths of my heart.
            </p>
          </div>

          {/* Substantial, Emotionally Mature, Deeply Romantic Letter Content (~650 words) */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed font-sans px-2 sm:px-6">
            <p className="font-serif text-lg sm:text-xl text-deep-rose italic font-bold">
              My dearest Gargi,
            </p>

            <p className="first-letter:text-3xl first-letter:font-serif first-letter:text-deep-rose">
              If you have walked through every corner of this little universe—past the rose bushes you watered, through the letters you unsealed, and among the quiet memories we sketched under the clouds—I hope you have begun to feel what words on their own could never fully communicate: you are profoundly, unconditionally, and tenderly cherished.
            </p>

            <p>
              I want to remind you of something very important: you do not have to be extraordinary every day to be loved by me. You do not have to perform, you do not have to hide your exhaustion, and you never have to put on a brave smile when your spirit is weary. Life asks so much of you already; when you are with me, my greatest hope is that you feel completely safe to set your burdens down, take off your invisible armor, and simply breathe.
            </p>

            <p>
              I love the woman you are. I love your sharp mind, your thoughtful observations, the sweet cadence of your laughter, and the quiet resilience you carry even when you feel unsure of yourself. I love that you are your own person with your own passions, your own ambitions, and your own path in this world. Being your boyfriend is not about confining you or trying to control your steps; it is about standing steadfastly by your side, admiring the wings you grow, and making sure you always have a soft, warm haven to return to whenever you are tired.
            </p>

            <p>
              And when you choose to lean into me, when you let me take the lead and take care of the details, I hold that trust with the deepest reverence. It is an honor to look after you—to bring you tea, to hold your hand through crowded rooms, to protect your peace, and to be the person who makes sure your days feel lighter and sweeter. Trust is something we build together, day by ordinary day, through honesty, consistency, and genuine respect.
            </p>

            <p>
              I cannot promise a life untouched by stormy weather or difficult seasons. But I can promise you this: you will never have to face the storm alone. I will listen when you speak, celebrate your victories as if they were my own, and hold your hand through the uncertainties of tomorrow. You are a treasure, Princess. A rare, radiant gift in my life, and having you to love is something I will never take for granted.
            </p>

            <p>
              Whenever you feel lonely, whenever self-doubt tries to whisper lies into your ear, open this little universe. Every flower planted here was placed in your honor, and every word was written to give you a soft sanctuary.
            </p>

            {/* Memorable Closing Quotation */}
            <div className="my-6 p-6 rounded-2xl bg-blush/80 border-2 border-rose-pink/50 text-center font-serif text-deep-rose italic text-base sm:text-lg leading-relaxed shadow-sm">
              &ldquo;Whatever tomorrow looks like, Baby, I hope you never forget that you are someone worth loving, someone worth listening to, and someone I feel lucky to keep choosing. This little world is only made of pixels and flowers. What I feel for you is something I want to keep showing you, one ordinary day at a time.&rdquo;
            </div>
          </div>

          {/* Letter Signoff */}
          <div className="pt-6 border-t border-rose-pink/30 flex flex-col sm:flex-row items-center justify-between gap-4 px-2 sm:px-6">
            <div>
              <p className="font-handwriting text-3xl sm:text-4xl text-deep-rose">
                Forever yours, with all my devotion
              </p>
              <p className="text-xs text-berry/70 font-sans mt-0.5">
                Your boyfriend, your protector, and your biggest admirer
              </p>
            </div>

            {step !== "bloom" ? (
              <button
                type="button"
                onClick={handleFinalBloom}
                className="px-6 py-2.5 rounded-full bg-deep-rose hover:bg-berry text-white text-xs font-serif font-bold shadow-romantic transition-all flex items-center gap-2 active:scale-95"
              >
                <Flower2 className="w-4 h-4" />
                <span>Bloom the Eternal Rose</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs font-serif font-bold text-deep-rose bg-cotton-candy px-4 py-2 rounded-full border border-rose-pink animate-pulse-soft">
                <Flower2 className="w-4 h-4 fill-rose-pink" />
                <span>The Eternal Rose Blooms Forever for Gargi 🌸</span>
              </div>
            )}
          </div>

          {/* Post-Finale Navigation & Replay */}
          <div className="mt-8 pt-6 border-t border-rose-pink/20 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-deep-rose">
            <button
              type="button"
              onClick={handleReplayFinale}
              className="flex items-center gap-1 hover:text-berry underline"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Replay Final Reveal
            </button>
            <span>•</span>
            <Link href="/" className="flex items-center gap-1 hover:text-berry underline">
              <Compass className="w-3.5 h-3.5" /> Return to World Map
            </Link>
            <span>•</span>
            <Link href="/letters" className="flex items-center gap-1 hover:text-berry underline">
              <BookOpen className="w-3.5 h-3.5" /> Love Letters Library
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

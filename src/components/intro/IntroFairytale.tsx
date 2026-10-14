"use client";

import React, { useState, useEffect, useCallback } from "react";
import { INTRO_STORY_STEPS, IntroStoryState, StoryStateConfig } from "./introData";
import { GardenScene } from "./GardenScene";
import { GardenAtmosphere } from "./GardenAtmosphere";
import { KittenCharacter } from "./KittenCharacter";
import { DialogueBubble } from "./DialogueBubble";
import { EnvelopeReveal } from "./EnvelopeReveal";
import { Sparkles, Heart } from "lucide-react";

interface IntroFairytaleProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

export const IntroFairytale: React.FC<IntroFairytaleProps> = ({
  onComplete,
  reducedMotion = false,
}) => {
  const [currentState, setCurrentState] = useState<IntroStoryState>("entering");
  const [lineIndex, setLineIndex] = useState(0);
  const [purrToast, setPurrToast] = useState<string | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const currentStepConfig: StoryStateConfig = INTRO_STORY_STEPS[currentState];
  const dialogueLines = currentStepConfig.kittenDialogue;
  const isLastLineOfState = lineIndex >= dialogueLines.length - 1;

  // Handle smooth transition to homepage
  const finishIntro = useCallback(() => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 750);
  }, [isFadingOut, onComplete]);

  // Advance through dialogue or move to next story state
  const handleAdvance = useCallback(() => {
    if (isFadingOut) return;

    if (!isLastLineOfState) {
      setLineIndex((prev) => prev + 1);
      return;
    }

    // State progression
    switch (currentState) {
      case "entering":
        setCurrentState("meeting");
        setLineIndex(0);
        break;
      case "meeting":
        setCurrentState("following");
        setLineIndex(0);
        break;
      case "following":
        setCurrentState("discovering");
        setLineIndex(0);
        break;
      case "discovering":
        setCurrentState("presenting");
        setLineIndex(0);
        break;
      case "presenting":
        setCurrentState("opening");
        setLineIndex(0);
        break;
      case "opening":
        finishIntro();
        break;
      default:
        finishIntro();
        break;
    }
  }, [currentState, isLastLineOfState, finishIntro, isFadingOut]);

  // Pet kitten purr reaction
  const handleKittenPet = (purrMsg: string) => {
    setPurrToast(purrMsg);
    setTimeout(() => setPurrToast(null), 3500);
  };

  // Lock body scroll during full-screen fairytale intro
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard accessibility: Space/Enter advances, Escape skips
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finishIntro();
      } else if (e.key === " " || e.key === "Enter") {
        // Prevent default space scroll
        if (e.target instanceof HTMLButtonElement) {
          // Allow normal button click
          return;
        }
        e.preventDefault();
        handleAdvance();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleAdvance, finishIntro]);

  // Story step indicator text
  const getStepIndicator = () => {
    switch (currentState) {
      case "entering":
        return "Prologue ✦ The Rose Garden Awakes";
      case "meeting":
        return "Act I ✦ Meeting the Kitten";
      case "following":
        return "Act II ✦ The Winding Garden Path";
      case "discovering":
        return "Act III ✦ A Secret in the Petals";
      case "presenting":
      case "opening":
        return "Act IV ✦ The Heart-Sealed Letter";
      default:
        return "A Fairytale for Gargi";
    }
  };

  return (
    <div
      role="region"
      aria-label="Magical Anime Rose Garden Fairytale Introduction"
      className={`fixed inset-0 z-50 w-screen h-[100dvh] flex flex-col justify-between overflow-hidden bg-blush select-none transition-opacity duration-700 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* 1. Cinematic 2D Anime Garden Scene */}
      <GardenScene storyState={currentState} reducedMotion={reducedMotion} />

      {/* 2. Floating Petals, Light Rays, and Butterflies */}
      <GardenAtmosphere reducedMotion={reducedMotion} />

      {/* 3. Top Navigation & Story Progress Bar */}
      <header className="relative z-40 w-full px-4 sm:px-8 pt-4 sm:pt-6 flex items-center justify-between gap-4 pointer-events-auto">
        {/* Story Step Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warm-ivory/90 border border-rose-pink/60 text-deep-rose text-xs font-serif font-semibold shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-rose-pink" />
          <span>{getStepIndicator()}</span>
        </div>

        {/* Ambient Top Line (on entering state) */}
        {currentState === "entering" && currentStepConfig.ambientLine && (
          <div className="hidden md:block text-center flex-1 max-w-md mx-auto">
            <p className="text-sm font-handwriting text-deep-rose text-2xl drop-shadow-sm animate-pulse-soft">
              {currentStepConfig.ambientLine}
            </p>
          </div>
        )}

        {/* Skip Intro Button */}
        <button
          type="button"
          onClick={finishIntro}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-warm-ivory/80 hover:bg-warm-ivory text-berry hover:text-deep-rose text-xs font-serif font-medium border border-rose-pink/40 hover:border-rose-pink shadow-sm transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-rose"
          aria-label="Skip fairytale intro and enter homepage"
        >
          <span>Skip to Little Universe</span>
          <Heart className="w-3 h-3 fill-rose-pink text-deep-rose" />
        </button>
      </header>

      {/* 4. Central Visual Stage (Kitten or Interactive Envelope Reveal) */}
      <main className="relative z-30 flex-1 w-full max-w-4xl mx-auto flex flex-col items-center justify-center p-4">
        {currentState === "opening" ? (
          <EnvelopeReveal
            onCompleteOpening={finishIntro}
            reducedMotion={reducedMotion}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3">
            <KittenCharacter
              storyState={currentState}
              reducedMotion={reducedMotion}
              onKittenPet={handleKittenPet}
            />

            {/* Quick interactive hint when on 'presenting' state */}
            {currentState === "presenting" && (
              <div className="animate-bloom-in mt-1">
                <button
                  type="button"
                  onClick={handleAdvance}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-pink to-deep-rose hover:from-deep-rose hover:to-berry text-white font-serif font-bold text-sm shadow-romantic-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Take the letter from kitten 💌</span>
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* 5. Bottom Dialogue Area (when not on opening card stage) */}
      <footer className="relative z-40 w-full pb-6 sm:pb-8 px-4 flex flex-col items-center pointer-events-auto">
        {currentState !== "opening" && (
          <DialogueBubble
            dialogueLines={dialogueLines}
            currentLineIndex={lineIndex}
            onNextLine={handleAdvance}
            actionLabel={currentStepConfig.actionLabel}
            isLastLine={isLastLineOfState}
            purrToast={purrToast}
          />
        )}
      </footer>
    </div>
  );
};

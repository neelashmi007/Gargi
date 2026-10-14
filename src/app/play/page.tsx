"use client";

import React, { useState, useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";
import { LOVE_QUIZ_QUESTIONS } from "@/data/quiz";
import {
  Gamepad2,
  Heart,
  Sparkles,
  RotateCcw,
  Trophy,
  Play,
  Pause,
  Flower2,
  HelpCircle,
  Gift,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function PlayGamesPage() {
  const { reducedMotion } = useApp();
  const [activeTab, setActiveTab] = useState<"hearts" | "hidden" | "quiz" | "bouquet" | "hug">("hearts");

  // ==========================================
  // GAME A: CATCH THE HEARTS
  // ==========================================
  const [gameActive, setGameActive] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);
  const [heartTargets, setHeartTargets] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startCatchGame = () => {
    setGameScore(0);
    setTimeLeft(25);
    setGameActive(true);
    spawnHearts();
  };

  const spawnHearts = () => {
    const hearts = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 70 + 15,
      size: Math.random() * 15 + 32,
    }));
    setHeartTargets(hearts);
  };

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      gameTimerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
        if (Math.random() > 0.4) spawnHearts();
      }, 1000);
    } else if (timeLeft === 0 && gameActive) {
      setGameActive(false);
      if (!reducedMotion) {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#F4A7C5", "#D85A88", "#FFD6E7"],
        });
      }
    }
    return () => {
      if (gameTimerRef.current) clearTimeout(gameTimerRef.current);
    };
  }, [gameActive, timeLeft, reducedMotion]);

  const catchHeart = (id: number) => {
    setGameScore((prev) => prev + 1);
    setHeartTargets((prev) => prev.filter((h) => h.id !== id));
    if (heartTargets.length <= 1) spawnHearts();
  };

  // ==========================================
  // GAME B: FIND THE HIDDEN ROSES
  // ==========================================
  const [foundItems, setFoundItems] = useState<number[]>([]);
  const hiddenItems = [
    { id: 1, name: "Blush Rose in Tree", x: 22, y: 35, type: "rose" },
    { id: 2, name: "Rose Behind Garden Bench", x: 78, y: 72, type: "rose" },
    { id: 3, name: "Kitten Napping in Flowerpot", x: 48, y: 80, type: "cat" },
    { id: 4, name: "Velvet Rose by Fountain", x: 82, y: 28, type: "rose" },
    { id: 5, name: "Secret Rose in Cloud", x: 15, y: 15, type: "rose" },
  ];

  const handleFindItem = (id: number) => {
    if (!foundItems.includes(id)) {
      setFoundItems([...foundItems, id]);
      if (foundItems.length + 1 === hiddenItems.length && !reducedMotion) {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#F4A7C5", "#D85A88"],
        });
      }
    }
  };

  // ==========================================
  // GAME C: LOVE QUIZ
  // ==========================================
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuizQ = LOVE_QUIZ_QUESTIONS[quizIndex];

  const handleSelectQuizOption = (optId: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuizQ.id]: optId });
  };

  const handleNextQuiz = () => {
    if (quizIndex < LOVE_QUIZ_QUESTIONS.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizFinished(true);
      if (!reducedMotion) {
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#F4A7C5", "#D85A88", "#FFD6E7", "#E9DDFB"],
        });
      }
    }
  };

  const restartQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswers({});
    setQuizFinished(false);
  };

  // ==========================================
  // GAME D: BUILD A BOUQUET
  // ==========================================
  const [bouquetColor, setBouquetColor] = useState<string>("#F4A7C5");
  const [ribbonStyle, setRibbonStyle] = useState<string>("Silky Deep Rose Bow");
  const [cardMessage, setCardMessage] = useState<string>("To Princess Gargi, the only rose I'll ever need. 🌸");
  const [bouquetSaved, setBouquetSaved] = useState(false);

  // ==========================================
  // EXTRA: VIRTUAL HUG & COMPLIMENT
  // ==========================================
  const [hugCount, setHugCount] = useState(0);
  const [compliment, setCompliment] = useState<string | null>(null);

  const compliments = [
    "Your natural grace makes the whole room brighter.",
    "I love the gentle and kind way you treat people.",
    "You are remarkably smart, resilient, and brave.",
    "Your laugh is my absolute favourite soundtrack in the world.",
    "You have the sweetest, softest heart, Baby.",
  ];

  const giveVirtualHug = () => {
    setHugCount((prev) => prev + 1);
    if (!reducedMotion) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#FFD6E7", "#F4A7C5", "#D85A88"],
      });
    }
  };

  const getRandomCompliment = () => {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(random);
  };

  return (
    <div className="space-y-8 animate-bloom-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cotton-candy text-deep-rose text-xs font-semibold uppercase tracking-wider mb-2">
          <Gamepad2 className="w-4 h-4" /> Playful Fairytale
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-deep-rose">
          Interactive Fairytale Games
        </h1>
        <p className="text-xs sm:text-sm text-berry/80 mt-2 font-serif italic max-w-xl mx-auto">
          &ldquo;Because love is playful, sweet, and filled with gentle smiles. Pick a game to enjoy together!&rdquo;
        </p>
      </div>

      {/* Game Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("hearts")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "hearts"
              ? "bg-deep-rose text-white shadow-romantic"
              : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/30"
          }`}
        >
          <Heart className="w-3.5 h-3.5" /> Catch the Hearts
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("hidden")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "hidden"
              ? "bg-deep-rose text-white shadow-romantic"
              : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/30"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" /> Find Hidden Roses
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("quiz")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "quiz"
              ? "bg-deep-rose text-white shadow-romantic"
              : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/30"
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" /> Love Quiz
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("bouquet")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "bouquet"
              ? "bg-deep-rose text-white shadow-romantic"
              : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/30"
          }`}
        >
          <Flower2 className="w-3.5 h-3.5" /> Bouquet Studio
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("hug")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "hug"
              ? "bg-deep-rose text-white shadow-romantic"
              : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/30"
          }`}
        >
          <Gift className="w-3.5 h-3.5" /> Virtual Hugs & Compliments
        </button>
      </div>

      {/* ========================================================= */}
      {/* GAME A: CATCH THE HEARTS */}
      {/* ========================================================= */}
      {activeTab === "hearts" && (
        <div className="max-w-3xl mx-auto rounded-3xl glass-panel border-2 border-rose-pink p-6 sm:p-10 shadow-romantic-lg animate-bloom-in text-center">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-rose-pink/30">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-deep-rose uppercase tracking-wider">Score:</span>
              <span className="text-lg font-serif font-bold text-berry">{gameScore}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-deep-rose uppercase tracking-wider">Time:</span>
              <span className="text-lg font-serif font-bold text-berry">{timeLeft}s</span>
            </div>
          </div>

          {/* Game Playing Canvas */}
          <div className="relative w-full h-80 bg-gradient-to-b from-blush to-cotton-candy/50 rounded-2xl border border-rose-pink/50 overflow-hidden shadow-inner flex items-center justify-center">
            {!gameActive && timeLeft === 25 ? (
              <div className="space-y-4">
                <Heart className="w-14 h-14 mx-auto text-deep-rose fill-rose-pink animate-pulse-soft" />
                <h3 className="text-2xl font-serif font-bold text-deep-rose">Catch Baby&apos;s Flying Hearts</h3>
                <p className="text-xs text-berry/80 max-w-sm mx-auto">
                  Hearts will drift across the canvas. Click or tap them as quickly as you can before time runs out!
                </p>
                <button
                  type="button"
                  onClick={startCatchGame}
                  className="px-8 py-3 rounded-full bg-deep-rose hover:bg-berry text-white text-sm font-serif font-bold shadow-romantic transition-all active:scale-95"
                >
                  Start Game
                </button>
              </div>
            ) : !gameActive && timeLeft === 0 ? (
              <div className="space-y-3 animate-bloom-in">
                <Trophy className="w-14 h-14 mx-auto text-deep-rose" />
                <h3 className="text-2xl font-serif font-bold text-deep-rose">Splendid Job, Princess!</h3>
                <p className="text-sm text-berry">
                  You caught <span className="font-bold text-deep-rose">{gameScore}</span> hearts of love!
                </p>
                <p className="text-xs italic text-berry/75">
                  &ldquo;Every single heart caught belongs to you, Baby.&rdquo;
                </p>
                <button
                  type="button"
                  onClick={startCatchGame}
                  className="mt-3 px-6 py-2.5 rounded-full bg-deep-rose hover:bg-berry text-white text-xs font-serif font-bold shadow-romantic transition-all"
                >
                  Play Again
                </button>
              </div>
            ) : (
              heartTargets.map((h) => (
                <button
                  key={h.id}
                  type="button"
                  onClick={() => catchHeart(h.id)}
                  style={{
                    left: `${h.x}%`,
                    top: `${h.y}%`,
                    width: `${h.size}px`,
                    height: `${h.size}px`,
                  }}
                  className="absolute p-0 border-0 bg-transparent cursor-pointer animate-float-gentle hover:scale-125 active:scale-90 transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="#D85A88" className="w-full h-full drop-shadow-md">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* GAME B: FIND THE HIDDEN ROSES */}
      {/* ========================================================= */}
      {activeTab === "hidden" && (
        <div className="max-w-3xl mx-auto rounded-3xl glass-panel border-2 border-rose-pink p-6 sm:p-10 shadow-romantic-lg animate-bloom-in">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-rose-pink/30">
            <div>
              <h3 className="text-xl font-serif font-bold text-deep-rose">Find the Hidden Secret Items</h3>
              <p className="text-xs text-berry/80">Click on the garden scene to discover 5 hidden treasures.</p>
            </div>
            <span className="text-xs font-bold text-deep-rose bg-cotton-candy px-3 py-1 rounded-full">
              Found: {foundItems.length} of {hiddenItems.length}
            </span>
          </div>

          {/* Illustrated Interactive Scene */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-tr from-rose-100 via-pink-50 to-purple-100 border-2 border-rose-pink/50 overflow-hidden shadow-inner">
            {/* Illustrated background items */}
            <div className="absolute bottom-4 left-6 w-32 h-20 bg-sage/30 rounded-t-full border border-sage/40" />
            <div className="absolute top-10 left-16 w-40 h-16 bg-white/70 rounded-full blur-sm" />
            <div className="absolute bottom-6 right-8 w-44 h-16 bg-rose-pink/20 rounded-2xl border border-rose-pink/30" />

            {/* Clickable Hidden Items */}
            {hiddenItems.map((item) => {
              const isFound = foundItems.includes(item.id);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleFindItem(item.id)}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  aria-label={`Find ${item.name}`}
                  className={`absolute p-1 rounded-full transition-all duration-300 ${
                    isFound
                      ? "ring-4 ring-deep-rose scale-125 bg-warm-ivory shadow-romantic"
                      : "opacity-40 hover:opacity-100 hover:scale-110"
                  }`}
                >
                  {item.type === "rose" ? (
                    <Flower2 className={`w-6 h-6 ${isFound ? "text-deep-rose" : "text-rose-pink"}`} />
                  ) : (
                    <span className="text-lg">🐱</span>
                  )}
                </button>
              );
            })}
          </div>

          {foundItems.length === hiddenItems.length && (
            <div className="mt-4 p-4 rounded-2xl bg-cotton-candy text-center text-deep-rose border border-rose-pink animate-bloom-in">
              <p className="font-serif font-bold text-sm">You found every single hidden treasure! 🌸</p>
              <p className="text-xs mt-0.5">Nothing stays hidden from Baby&apos;s sharp and pretty eyes!</p>
              <button
                type="button"
                onClick={() => setFoundItems([])}
                className="mt-2 text-xs font-semibold text-deep-rose underline"
              >
                Reset & Hide Again
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* GAME C: AFFECTIONATE LOVE QUIZ */}
      {/* ========================================================= */}
      {activeTab === "quiz" && (
        <div className="max-w-2xl mx-auto rounded-3xl glass-panel border-2 border-rose-pink p-6 sm:p-10 shadow-romantic-lg animate-bloom-in">
          {!quizFinished ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-rose-pink/30">
                <span className="text-xs font-bold text-deep-rose uppercase tracking-wider">
                  Question {quizIndex + 1} of {LOVE_QUIZ_QUESTIONS.length}
                </span>
                <span className="text-xs text-berry/70 italic">Just for fun • 100% love!</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-deep-rose">
                  {currentQuizQ.question}
                </h3>
                <p className="text-xs font-serif italic text-berry/75 mt-1">
                  {currentQuizQ.subtitle}
                </p>
              </div>

              <div className="space-y-2.5">
                {currentQuizQ.options.map((opt) => {
                  const isSelected = selectedAnswers[currentQuizQ.id] === opt.id;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectQuizOption(opt.id)}
                      className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm transition-all border-2 flex items-center justify-between ${
                        isSelected
                          ? "bg-rose-pink/20 border-deep-rose text-deep-rose font-bold shadow-sm"
                          : "bg-warm-ivory border-rose-pink/30 hover:border-rose-pink text-berry"
                      }`}
                    >
                      <span>{opt.text}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-deep-rose" />}
                    </button>
                  );
                })}
              </div>

              {selectedAnswers[currentQuizQ.id] && (
                <div className="p-3.5 bg-blush/80 rounded-2xl border border-rose-pink/40 text-xs text-berry animate-bloom-in">
                  <p className="font-serif italic font-bold text-deep-rose">Boyfriend note:</p>
                  <p>{currentQuizQ.boyfriendNote}</p>
                </div>
              )}

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextQuiz}
                  disabled={!selectedAnswers[currentQuizQ.id]}
                  className={`px-6 py-2.5 rounded-full font-serif font-bold text-xs shadow-romantic transition-all ${
                    selectedAnswers[currentQuizQ.id]
                      ? "bg-deep-rose text-white hover:bg-berry active:scale-95"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {quizIndex < LOVE_QUIZ_QUESTIONS.length - 1 ? "Next Question →" : "See Final Score 🌸"}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4 animate-bloom-in">
              <Trophy className="w-16 h-16 mx-auto text-deep-rose" />
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-deep-rose">
                Quiz Result: 100% Supreme Adoration!
              </h3>
              <p className="text-sm text-berry max-w-md mx-auto leading-relaxed">
                You scored a perfect 100% on being the most cherished, spoiled, and loved girl in this entire universe!
              </p>
              <button
                type="button"
                onClick={restartQuiz}
                className="mt-4 px-6 py-2.5 rounded-full bg-deep-rose hover:bg-berry text-white text-xs font-serif font-bold shadow-romantic transition-all"
              >
                Replay Quiz
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* GAME D: BUILD A BOUQUET STUDIO */}
      {/* ========================================================= */}
      {activeTab === "bouquet" && (
        <div className="max-w-3xl mx-auto rounded-3xl glass-panel border-2 border-rose-pink p-6 sm:p-10 shadow-romantic-lg animate-bloom-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Bouquet SVG Visual Preview */}
            <div className="flex flex-col items-center justify-center p-6 bg-blush/60 rounded-3xl border border-rose-pink/40 shadow-inner">
              <svg viewBox="0 0 100 120" className="w-40 h-48 drop-shadow-lg">
                {/* Wrapping paper */}
                <polygon points="20,110 50,45 80,110" fill="#FFFCF8" stroke="#F4A7C5" strokeWidth="2" />
                {/* 3 Blooming Roses */}
                <circle cx="50" cy="40" r="16" fill={bouquetColor} />
                <circle cx="36" cy="50" r="14" fill={bouquetColor} opacity="0.85" />
                <circle cx="64" cy="50" r="14" fill={bouquetColor} opacity="0.85" />
                {/* Rose Centers */}
                <circle cx="50" cy="40" r="6" fill="#D85A88" />
                <circle cx="36" cy="50" r="5" fill="#D85A88" />
                <circle cx="64" cy="50" r="5" fill="#D85A88" />
                {/* Ribbon Bow */}
                <path d="M 40 85 Q 50 80 60 85 Q 50 95 40 85" fill="#D85A88" />
                <circle cx="50" cy="85" r="4" fill="#FFFCF8" />
              </svg>
              <span className="mt-3 text-xs font-serif italic text-berry/80 text-center">
                &ldquo;{cardMessage}&rdquo;
              </span>
            </div>

            {/* Customization Options */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-deep-rose">Bouquet Customizer</h3>

              <div>
                <label className="text-xs font-semibold text-berry/80 block mb-1">Pick Rose Shade:</label>
                <div className="flex gap-2">
                  {[
                    { label: "Blush", hex: "#F4A7C5" },
                    { label: "Cotton", hex: "#FFD6E7" },
                    { label: "Velvet", hex: "#D85A88" },
                    { label: "Lilac", hex: "#E9DDFB" },
                  ].map((c) => (
                    <button
                      key={c.hex}
                      type="button"
                      onClick={() => setBouquetColor(c.hex)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        bouquetColor === c.hex ? "border-deep-rose scale-110 shadow-sm" : "border-white"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.label}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-berry/80 block mb-1">Gift Card Message:</label>
                <input
                  type="text"
                  value={cardMessage}
                  onChange={(e) => setCardMessage(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-rose-pink/50 text-xs text-berry bg-white focus:outline-none focus:ring-2 focus:ring-deep-rose"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  setBouquetSaved(true);
                  if (!reducedMotion) {
                    confetti({
                      particleCount: 25,
                      spread: 50,
                      origin: { y: 0.6 },
                      colors: ["#F4A7C5", "#D85A88"],
                    });
                  }
                  setTimeout(() => setBouquetSaved(false), 3000);
                }}
                className="w-full py-2.5 rounded-full bg-deep-rose hover:bg-berry text-white text-xs font-serif font-bold shadow-romantic transition-all"
              >
                {bouquetSaved ? "Bouquet Wrapped & Dedicated! 💐" : "Wrap & Save Bouquet"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* GAME E: VIRTUAL HUG & COMPLIMENT */}
      {/* ========================================================= */}
      {activeTab === "hug" && (
        <div className="max-w-xl mx-auto rounded-3xl glass-panel border-2 border-rose-pink p-8 shadow-romantic-lg animate-bloom-in text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-cotton-candy text-deep-rose flex items-center justify-center mx-auto shadow-sm">
            <Heart className="w-8 h-8 fill-rose-pink stroke-deep-rose animate-pulse-soft" />
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold text-deep-rose">Unlimited Warm Hugs</h3>
            <p className="text-xs sm:text-sm text-berry/80 mt-1">
              Press the button whenever you need to feel wrapped in comfort.
            </p>
          </div>

          <div className="py-2">
            <button
              type="button"
              onClick={giveVirtualHug}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-pink to-deep-rose hover:from-deep-rose hover:to-berry text-white font-serif font-bold text-base shadow-romantic-lg hover:scale-105 active:scale-95 transition-all"
            >
              Receive Virtual Warm Hug ({hugCount} Sent)
            </button>
          </div>

          <div className="pt-4 border-t border-rose-pink/30 space-y-3">
            <button
              type="button"
              onClick={getRandomCompliment}
              className="px-5 py-2 rounded-full bg-warm-ivory border border-rose-pink/50 text-deep-rose hover:bg-cotton-candy/40 text-xs font-semibold shadow-sm"
            >
              Generate a Sweet Compliment ✨
            </button>
            {compliment && (
              <p className="text-sm font-serif italic text-berry bg-blush/70 p-3 rounded-2xl border border-rose-pink/30 animate-bloom-in">
                &ldquo;{compliment}&rdquo;
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

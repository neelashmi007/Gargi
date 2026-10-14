"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { LOVE_LETTERS, LoveLetter, SHORT_LOVE_NOTES } from "@/data/letters";
import {
  Heart,
  Sparkles,
  BookOpen,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  X,
  Lock,
  Mail,
  Check,
  Feather,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function LoveLettersPage() {
  const { favorites, toggleFavorite, isFavorite, unlockDiscovery, reducedMotion } = useApp();
  const [selectedLetter, setSelectedLetter] = useState<LoveLetter | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [readLetters, setReadLetters] = useState<string[]>([]);
  const [filterFavoritesOnly, setFilterFavoritesOnly] = useState(false);

  const categories = [
    { id: "all", label: "All Letters" },
    { id: "tender", label: "Tender Hearts" },
    { id: "reassurance", label: "Reassurance" },
    { id: "sweet", label: "Sweet Whispers" },
    { id: "promises", label: "My Promises" },
    { id: "playful", label: "Playful Kitten" },
    { id: "secret", label: "Secret Envelopes" },
  ];

  const handleOpenLetter = (letter: LoveLetter) => {
    setSelectedLetter(letter);
    if (!readLetters.includes(letter.id)) {
      setReadLetters([...readLetters, letter.id]);
    }
    if (letter.isSecret) {
      unlockDiscovery("disc-secret-letter");
    }
    if (!reducedMotion) {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#F4A7C5", "#D85A88", "#FFD6E7"],
      });
    }
  };

  const handleRandomLetter = () => {
    const randomIndex = Math.floor(Math.random() * LOVE_LETTERS.length);
    handleOpenLetter(LOVE_LETTERS[randomIndex]);
  };

  const handlePrevLetter = () => {
    if (!selectedLetter) return;
    const currentIndex = LOVE_LETTERS.findIndex((l) => l.id === selectedLetter.id);
    const prevIndex = (currentIndex - 1 + LOVE_LETTERS.length) % LOVE_LETTERS.length;
    handleOpenLetter(LOVE_LETTERS[prevIndex]);
  };

  const handleNextLetter = () => {
    if (!selectedLetter) return;
    const currentIndex = LOVE_LETTERS.findIndex((l) => l.id === selectedLetter.id);
    const nextIndex = (currentIndex + 1) % LOVE_LETTERS.length;
    handleOpenLetter(LOVE_LETTERS[nextIndex]);
  };

  const filteredLetters = LOVE_LETTERS.filter((letter) => {
    if (filterFavoritesOnly && !isFavorite("letters", letter.id)) return false;
    if (activeCategory === "all") return true;
    return letter.category === activeCategory;
  });

  return (
    <div className="space-y-8 animate-bloom-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cotton-candy text-deep-rose text-xs font-semibold uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" /> Library of the Heart
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-deep-rose">
          Letters Written for Gargi
        </h1>
        <p className="text-xs sm:text-sm text-berry/80 mt-2 font-serif italic max-w-xl mx-auto">
          &ldquo;Because there are so many things I want you to know, and one message could never hold all of them.&rdquo;
        </p>

        {/* Progress & Quick Actions */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-semibold text-deep-rose bg-warm-ivory px-3 py-1 rounded-full border border-rose-pink/40 shadow-sm">
            Read: {readLetters.length} of {LOVE_LETTERS.length} Letters
          </span>

          <button
            type="button"
            onClick={handleRandomLetter}
            className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-cotton-candy text-deep-rose hover:bg-rose-pink hover:text-white transition-all text-xs font-semibold shadow-sm"
          >
            <Shuffle className="w-3.5 h-3.5" /> Pick a Random Letter
          </button>

          <button
            type="button"
            onClick={() => setFilterFavoritesOnly(!filterFavoritesOnly)}
            className={`flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-semibold transition-all border ${
              filterFavoritesOnly
                ? "bg-deep-rose text-white border-deep-rose"
                : "bg-warm-ivory text-berry border-rose-pink/40 hover:bg-cotton-candy/40"
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${filterFavoritesOnly ? "fill-white" : "text-deep-rose"}`} />
            <span>Favourites Only ({favorites.letters.length})</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setActiveCategory(cat.id);
              setFilterFavoritesOnly(false);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat.id && !filterFavoritesOnly
                ? "bg-deep-rose text-white shadow-romantic"
                : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/30"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Clickable Wax-Sealed Envelopes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLetters.map((letter) => {
          const isFav = isFavorite("letters", letter.id);
          const isRead = readLetters.includes(letter.id);

          return (
            <div
              key={letter.id}
              className="group relative flex flex-col justify-between p-6 rounded-3xl parchment-paper hover:shadow-romantic-lg transition-all duration-300 border-2 border-rose-pink/50 hover:border-deep-rose hover:-translate-y-1"
            >
              <div>
                {/* Envelope Header / Wax Seal Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-8 h-8 rounded-full bg-cotton-candy text-deep-rose flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </span>
                    {letter.isSecret && (
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full border border-amber-300 flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Secret
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite("letters", letter.id);
                    }}
                    aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
                    className="p-1.5 rounded-full hover:bg-cotton-candy/50 text-rose-pink transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-deep-rose text-deep-rose" : "text-rose-pink"}`} />
                  </button>
                </div>

                <h3 className="text-lg font-serif font-bold text-deep-rose group-hover:text-berry transition-colors">
                  {letter.title}
                </h3>
                <p className="text-xs font-serif italic text-berry/75 mt-0.5">
                  {letter.subtitle}
                </p>
                <p className="text-xs text-berry/80 mt-3 line-clamp-2 font-sans">
                  {letter.preview}
                </p>
              </div>

              {/* Envelope Footer Action */}
              <div className="mt-5 pt-3 border-t border-rose-pink/30 flex items-center justify-between">
                <span className="text-[10px] text-berry/60 font-semibold uppercase tracking-wider">
                  {isRead ? "✓ Read" : "Unopened"}
                </span>

                <button
                  type="button"
                  onClick={() => handleOpenLetter(letter)}
                  className="px-4 py-1.5 rounded-full bg-deep-rose text-white hover:bg-berry text-xs font-serif font-bold shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Open Letter</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* READING VIEW MODAL */}
      {selectedLetter && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-berry/50 backdrop-blur-sm animate-bloom-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reading-letter-title"
        >
          <div className="relative w-full max-w-2xl bg-[#FFFCF8] rounded-3xl p-6 sm:p-10 shadow-romantic-lg border-4 border-rose-pink/60 max-h-[90vh] overflow-y-auto">
            {/* Top Navigation & Controls */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-rose-pink/30">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevLetter}
                  aria-label="Previous letter"
                  className="p-1.5 rounded-full text-berry hover:text-deep-rose hover:bg-cotton-candy/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-berry/70">
                  {LOVE_LETTERS.findIndex((l) => l.id === selectedLetter.id) + 1} of {LOVE_LETTERS.length}
                </span>
                <button
                  type="button"
                  onClick={handleNextLetter}
                  aria-label="Next letter"
                  className="p-1.5 rounded-full text-berry hover:text-deep-rose hover:bg-cotton-candy/40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleFavorite("letters", selectedLetter.id)}
                  aria-label="Toggle favourite"
                  className="p-2 rounded-full hover:bg-cotton-candy/40 text-rose-pink transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite("letters", selectedLetter.id)
                        ? "fill-deep-rose text-deep-rose"
                        : "text-rose-pink"
                    }`}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLetter(null)}
                  aria-label="Close letter"
                  className="p-2 rounded-full text-berry hover:text-deep-rose hover:bg-cotton-candy/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Letter Title & Header */}
            <div className="text-center mb-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-deep-rose bg-cotton-candy/60 px-3 py-0.5 rounded-full border border-rose-pink/30">
                {selectedLetter.datePrompt}
              </span>
              <h2 id="reading-letter-title" className="text-2xl sm:text-3xl font-serif font-bold text-deep-rose mt-2">
                {selectedLetter.title}
              </h2>
              <p className="text-xs sm:text-sm font-serif italic text-berry/75 mt-1">
                {selectedLetter.subtitle}
              </p>
            </div>

            {/* Substantial Letter Paragraphs */}
            <div className="space-y-4 text-berry text-sm sm:text-base leading-relaxed font-sans px-2 sm:px-6">
              {selectedLetter.content.map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-2xl first-letter:font-serif first-letter:text-deep-rose">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Letter Signoff */}
            <div className="mt-8 pt-6 border-t border-rose-pink/30 text-right pr-6">
              <p className="font-handwriting text-2xl sm:text-3xl text-deep-rose">
                {selectedLetter.signature}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-berry/60 mt-1">
                <Feather className="w-3.5 h-3.5" /> Sealed with {selectedLetter.sealedWith} & endless tenderness
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 20 SHORT LOVE NOTES SCRAPBOOK TICKER */}
      <section className="pt-8">
        <div className="text-center mb-4">
          <h3 className="text-xl font-serif font-bold text-deep-rose">
            Whispers from the Corners
          </h3>
          <p className="text-xs text-berry/75">
            Tiny short notes tucked into everyday corners of our world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SHORT_LOVE_NOTES.slice(0, 8).map((note) => (
            <div
              key={note.id}
              className="p-4 rounded-2xl bg-warm-ivory border border-rose-pink/40 shadow-sm hover:shadow-romantic transition-all flex flex-col justify-between"
            >
              <span className="text-[10px] font-bold text-deep-rose uppercase tracking-wider bg-cotton-candy/50 px-2 py-0.5 rounded-full inline-block w-fit mb-2">
                {note.location}
              </span>
              <p className="text-xs text-berry italic font-serif leading-relaxed">
                &ldquo;{note.note}&rdquo;
              </p>
              <span className="text-[10px] text-right font-handwriting text-rose-pink font-bold mt-2">
                — {note.author}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

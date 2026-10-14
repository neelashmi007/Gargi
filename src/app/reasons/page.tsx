"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { REASONS_I_LOVE_YOU, ReasonCard } from "@/data/reasons";
import { Gift, Heart, Sparkles, Shuffle, Lock, Check } from "lucide-react";
import confetti from "canvas-confetti";

export default function ReasonsPage() {
  const { favorites, toggleFavorite, isFavorite, reducedMotion } = useApp();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [filterFavoritesOnly, setFilterFavoritesOnly] = useState(false);
  const [activeTag, setActiveTag] = useState<string>("all");

  const tags = [
    { id: "all", label: "All Reasons" },
    { id: "tenderness", label: "Tenderness" },
    { id: "comfort", label: "Safe Haven" },
    { id: "individuality", label: "Individuality" },
    { id: "growth", label: "Dreams & Growth" },
    { id: "playful", label: "Playful Kitten" },
    { id: "secret", label: "Secret Truth" },
  ];

  const handleCardClick = (id: number) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter((c) => c !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
      if (id === 31 && !reducedMotion) {
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#F4A7C5", "#D85A88", "#FFD6E7"],
        });
      }
    }
  };

  const handleFlipAll = () => {
    if (flippedCards.length === REASONS_I_LOVE_YOU.length) {
      setFlippedCards([]);
    } else {
      setFlippedCards(REASONS_I_LOVE_YOU.map((r) => r.id));
    }
  };

  const handleRandomReason = () => {
    const randomCard = REASONS_I_LOVE_YOU[Math.floor(Math.random() * REASONS_I_LOVE_YOU.length)];
    if (!flippedCards.includes(randomCard.id)) {
      setFlippedCards([...flippedCards, randomCard.id]);
    }
    const elem = document.getElementById(`reason-card-${randomCard.id}`);
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const filteredCards = REASONS_I_LOVE_YOU.filter((card) => {
    if (filterFavoritesOnly && !isFavorite("reasons", card.id)) return false;
    if (activeTag === "all") return true;
    return card.tag === activeTag;
  });

  return (
    <div className="space-y-8 animate-bloom-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cotton-candy text-deep-rose text-xs font-semibold uppercase tracking-wider mb-2">
          <Gift className="w-4 h-4" /> 30 Reasons
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-deep-rose">
          Reasons Why I Love You, Gargi
        </h1>
        <p className="text-xs sm:text-sm text-berry/80 mt-2 font-serif italic max-w-xl mx-auto">
          &ldquo;Tap any card to unfold the reason beneath. Every card is an honest truth about why you are so precious to me.&rdquo;
        </p>

        {/* Action Controls */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleRandomReason}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cotton-candy text-deep-rose hover:bg-rose-pink hover:text-white transition-all text-xs font-semibold shadow-sm"
          >
            <Shuffle className="w-3.5 h-3.5" /> Random Reason
          </button>

          <button
            type="button"
            onClick={handleFlipAll}
            className="px-4 py-1.5 rounded-full bg-warm-ivory text-berry hover:bg-cotton-candy/40 border border-rose-pink/40 text-xs font-semibold shadow-sm transition-all"
          >
            {flippedCards.length === REASONS_I_LOVE_YOU.length ? "Close All Cards" : "Unfold All Cards"}
          </button>

          <button
            type="button"
            onClick={() => setFilterFavoritesOnly(!filterFavoritesOnly)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
              filterFavoritesOnly
                ? "bg-deep-rose text-white border-deep-rose"
                : "bg-warm-ivory text-berry border-rose-pink/40 hover:bg-cotton-candy/40"
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${filterFavoritesOnly ? "fill-white" : "text-deep-rose"}`} />
            <span>Favourites ({favorites.reasons.length})</span>
          </button>
        </div>
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            onClick={() => {
              setActiveTag(tag.id);
              setFilterFavoritesOnly(false);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTag === tag.id && !filterFavoritesOnly
                ? "bg-deep-rose text-white shadow-romantic"
                : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/30"
            }`}
          >
            {tag.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => {
          const isFlipped = flippedCards.includes(card.id);
          const isFav = isFavorite("reasons", card.id);

          return (
            <div
              key={card.id}
              id={`reason-card-${card.id}`}
              onClick={() => handleCardClick(card.id)}
              className={`group relative min-h-[220px] p-6 rounded-3xl cursor-pointer transition-all duration-500 border-2 flex flex-col justify-between ${
                isFlipped
                  ? "bg-warm-ivory border-deep-rose shadow-romantic-lg -translate-y-1"
                  : "parchment-paper border-rose-pink/50 hover:border-deep-rose hover:shadow-romantic"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-cotton-candy/80 text-deep-rose flex items-center justify-center text-xs font-serif font-bold shadow-sm">
                    #{card.id}
                  </span>
                  {card.isSecret && (
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full border border-amber-300 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Secret
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite("reasons", card.id);
                  }}
                  aria-label={isFav ? "Remove favourite" : "Add favourite"}
                  className="p-1.5 rounded-full hover:bg-cotton-candy/50 transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isFav ? "fill-deep-rose text-deep-rose" : "text-rose-pink"}`} />
                </button>
              </div>

              {/* Card Content (Unfolded detail vs Summary) */}
              <div className="my-3 flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-serif font-bold text-deep-rose group-hover:text-berry transition-colors">
                  {card.title}
                </h3>
                {isFlipped ? (
                  <p className="mt-2 text-xs sm:text-sm text-berry leading-relaxed font-sans bg-blush/60 p-3 rounded-2xl border border-rose-pink/30 animate-bloom-in">
                    {card.detail}
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-berry/80 font-sans leading-relaxed">
                    {card.summary}
                  </p>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-2 border-t border-rose-pink/20 flex items-center justify-between text-[11px] font-semibold text-deep-rose">
                <span>{isFlipped ? "✦ Unfolded ✦" : "Tap to Unfold"}</span>
                <span className="text-[10px] text-berry/50 uppercase tracking-wider">{card.tag}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

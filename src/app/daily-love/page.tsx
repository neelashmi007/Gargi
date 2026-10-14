"use client";

import React, { useState, useMemo } from "react";
import { useApp } from "@/context/AppContext";
import { DAILY_MESSAGES, MESSAGE_CATEGORIES, MessageCategory, DailyMessage } from "@/data/dailyMessages";
import { Heart, Sparkles, Shuffle, Copy, Check, Calendar, Coffee, X } from "lucide-react";
import confetti from "canvas-confetti";

export default function DailyLovePage() {
  const { favorites, toggleFavorite, isFavorite, reducedMotion } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<MessageCategory | "all">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [randomMessage, setRandomMessage] = useState<DailyMessage | null>(null);

  // Local-date-based Message of the Day
  const messageOfTheDay = useMemo(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    const index = dayOfYear % DAILY_MESSAGES.length;
    return DAILY_MESSAGES[index];
  }, []);

  const handleCopy = (msg: DailyMessage) => {
    navigator.clipboard.writeText(`${msg.text}\n\n— ${msg.signoff}`);
    setCopiedId(msg.id);
    if (!reducedMotion) {
      confetti({
        particleCount: 15,
        spread: 40,
        origin: { y: 0.7 },
        colors: ["#F4A7C5", "#FFD6E7"],
      });
    }
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleRandomComfort = () => {
    const randomMsg = DAILY_MESSAGES[Math.floor(Math.random() * DAILY_MESSAGES.length)];
    setRandomMessage(randomMsg);
  };

  const filteredMessages = DAILY_MESSAGES.filter((msg) => {
    if (favoritesOnly && !isFavorite("messages", msg.id)) return false;
    if (selectedCategory === "all") return true;
    return msg.category === selectedCategory;
  });

  return (
    <div className="space-y-8 animate-bloom-in pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cotton-candy text-deep-rose text-xs font-serif font-bold uppercase tracking-wider mb-2 shadow-xs">
          <Coffee className="w-4 h-4" /> Daily Love Hearth
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-deep-rose">
          Daily Love Hearth — A Corner of Comfort
        </h1>
        <p className="text-xs sm:text-sm text-berry/85 mt-2 font-serif italic max-w-xl mx-auto leading-relaxed">
          &ldquo;A warm, gentle corner of our universe where Gargi can find reassurance, affection, and comfort whenever she needs it.&rdquo;
        </p>
      </div>

      {/* FEATURED: Message of the Day */}
      <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel border-2 border-deep-rose/40 shadow-romantic-lg relative text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deep-rose text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
          <Calendar className="w-3.5 h-3.5" /> Message of the Day
        </div>
        <p className="text-base sm:text-xl font-serif font-medium text-berry leading-relaxed">
          &ldquo;{messageOfTheDay.text}&rdquo;
        </p>
        <p className="mt-3 font-handwriting text-2xl text-deep-rose font-bold">
          — {messageOfTheDay.signoff}
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => handleCopy(messageOfTheDay)}
            className="flex items-center gap-1.5 text-xs text-deep-rose hover:text-berry font-semibold underline"
          >
            {copiedId === messageOfTheDay.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedId === messageOfTheDay.id ? "Copied with love!" : "Copy Note"}</span>
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => toggleFavorite("messages", messageOfTheDay.id)}
            className="flex items-center gap-1 text-xs text-deep-rose hover:text-berry font-semibold underline"
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                isFavorite("messages", messageOfTheDay.id) ? "fill-deep-rose" : ""
              }`}
            />
            <span>{isFavorite("messages", messageOfTheDay.id) ? "Saved to Favourites" : "Save to Favourites"}</span>
          </button>
        </div>
      </div>

      {/* Category Pills & Action Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => {
            setSelectedCategory("all");
            setFavoritesOnly(false);
          }}
          className={`px-4 py-1.5 rounded-full text-xs font-serif font-semibold transition-all ${
            selectedCategory === "all" && !favoritesOnly
              ? "bg-deep-rose text-white shadow-romantic"
              : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/30"
          }`}
        >
          All Categories ({DAILY_MESSAGES.length})
        </button>

        {MESSAGE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setSelectedCategory(cat.id);
              setFavoritesOnly(false);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-serif font-semibold transition-all ${
              selectedCategory === cat.id && !favoritesOnly
                ? "bg-deep-rose text-white shadow-romantic"
                : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/30"
            }`}
          >
            {cat.label}
          </button>
        ))}

        <button
          type="button"
          onClick={handleRandomComfort}
          className="px-4 py-1.5 rounded-full text-xs font-serif font-semibold bg-cotton-candy text-deep-rose hover:bg-rose-pink hover:text-white transition-all flex items-center gap-1.5 shadow-sm border border-rose-pink/30"
        >
          <Shuffle className="w-3.5 h-3.5" />
          <span>Random Comfort</span>
        </button>

        <button
          type="button"
          onClick={() => setFavoritesOnly(!favoritesOnly)}
          className={`px-4 py-1.5 rounded-full text-xs font-serif font-semibold transition-all flex items-center gap-1.5 border ${
            favoritesOnly
              ? "bg-deep-rose text-white border-deep-rose shadow-romantic"
              : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border-rose-pink/30"
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${favoritesOnly ? "fill-white" : "text-deep-rose"}`} />
          <span>Favourites ({favorites.messages.length})</span>
        </button>
      </div>

      {/* Grid of Messages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMessages.map((msg) => {
          const isFav = isFavorite("messages", msg.id);
          const isCopied = copiedId === msg.id;

          return (
            <div
              key={msg.id}
              className="p-6 rounded-3xl parchment-paper border-2 border-rose-pink/40 hover:border-deep-rose hover:shadow-romantic transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-deep-rose bg-cotton-candy/60 px-2.5 py-0.5 rounded-full">
                    {msg.categoryLabel}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleFavorite("messages", msg.id)}
                    aria-label={isFav ? "Remove favourite" : "Add favourite"}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? "fill-deep-rose text-deep-rose" : "text-rose-pink"}`} />
                  </button>
                </div>

                <p className="text-sm font-sans text-berry leading-relaxed">
                  &ldquo;{msg.text}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-rose-pink/20 flex items-center justify-between">
                <span className="text-xs font-handwriting text-deep-rose font-bold text-lg">
                  — {msg.signoff}
                </span>

                <button
                  type="button"
                  onClick={() => handleCopy(msg)}
                  aria-label="Copy note to clipboard"
                  className="flex items-center gap-1 text-[11px] font-semibold text-deep-rose hover:text-berry"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Random Comfort Modal */}
      {randomMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-berry/60 backdrop-blur-sm animate-bloom-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-warm-ivory rounded-3xl p-6 sm:p-8 shadow-romantic-lg border-2 border-rose-pink text-center">
            <button
              type="button"
              onClick={() => setRandomMessage(null)}
              className="absolute top-4 right-4 p-2 text-berry hover:text-deep-rose rounded-full hover:bg-cotton-candy/40 transition-colors"
              aria-label="Close message"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-wider text-deep-rose bg-cotton-candy px-2.5 py-0.5 rounded-full shadow-xs">
              {randomMessage.categoryLabel}
            </span>
            <p className="text-base sm:text-xl font-serif font-medium text-berry leading-relaxed mt-4">
              &ldquo;{randomMessage.text}&rdquo;
            </p>
            <p className="mt-3 font-handwriting text-2xl text-deep-rose font-bold">
              — {randomMessage.signoff}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleRandomComfort}
                className="px-5 py-2 rounded-full bg-deep-rose text-white text-xs font-serif font-bold shadow-sm hover:bg-berry transition-all flex items-center gap-1.5 active:scale-95"
              >
                <Shuffle className="w-3.5 h-3.5" /> Another Whisper
              </button>
              <button
                type="button"
                onClick={() => setRandomMessage(null)}
                className="px-4 py-2 rounded-full border border-rose-pink/60 text-xs font-serif font-semibold text-berry hover:bg-cotton-candy/40 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


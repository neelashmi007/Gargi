"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { LITTLE_THINGS_I_ADORE, LittleThing } from "@/data/littleThings";
import { Feather, Heart, Sparkles, Pin } from "lucide-react";

export default function LittleThingsPage() {
  const { favorites, toggleFavorite, isFavorite } = useApp();
  const [pinnedFilter, setPinnedFilter] = useState(false);

  const getTapeBg = (color: LittleThing["tapeColor"]) => {
    switch (color) {
      case "pink":
        return "bg-rose-pink/60 border-rose-pink";
      case "lavender":
        return "bg-purple-200/60 border-purple-300";
      case "rose":
        return "bg-deep-rose/50 border-deep-rose";
      case "cream":
        return "bg-amber-100/70 border-amber-200";
      case "sage":
        return "bg-sage/60 border-sage";
      default:
        return "bg-rose-pink/50 border-rose-pink";
    }
  };

  const filteredThings = pinnedFilter
    ? LITTLE_THINGS_I_ADORE.filter((t) => t.pinned || isFavorite("littleThings", t.id))
    : LITTLE_THINGS_I_ADORE;

  return (
    <div className="space-y-8 animate-bloom-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cotton-candy text-deep-rose text-xs font-serif font-bold uppercase tracking-wider mb-2 shadow-xs">
          <Feather className="w-4 h-4" /> Little Things of Us
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-deep-rose">
          Little Things That Are So Us
        </h1>
        <p className="text-xs sm:text-sm text-berry/85 mt-2 font-serif italic max-w-xl mx-auto leading-relaxed">
          &ldquo;The small, seemingly ordinary details that make Gargi feel like Gargi, and make our relationship feel like ours.&rdquo;
        </p>

        {/* Action Toggle */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setPinnedFilter(!pinnedFilter)}
            className={`px-4 py-1.5 rounded-full text-xs font-serif font-semibold transition-all flex items-center gap-1.5 shadow-sm border ${
              pinnedFilter
                ? "bg-deep-rose text-white border-deep-rose"
                : "bg-warm-ivory text-berry border-rose-pink/40 hover:bg-cotton-candy/40"
            }`}
          >
            <Pin className="w-3.5 h-3.5" />
            <span>{pinnedFilter ? "Show All Notes" : "View Pinned Keepsakes"}</span>
          </button>
        </div>
      </div>

      {/* Scrapbook Board with Sticky Notes & Washi Tape */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#FFFDF9] border-2 border-rose-pink/50 shadow-romantic-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {filteredThings.map((item) => {
          const isFav = isFavorite("littleThings", item.id);

          return (
            <div
              key={item.id}
              style={{ transform: `rotate(${item.rotation})` }}
              className="relative p-6 rounded-2xl bg-[#FFFCF7] border border-rose-pink/30 shadow-md hover:shadow-romantic-lg transition-all duration-300 hover:scale-105 hover:z-20 group flex flex-col justify-between"
            >
              {/* Washi Tape Strip at top */}
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-sm opacity-85 border-dashed border ${getTapeBg(
                  item.tapeColor
                )} shadow-xs`}
              />

              <div>
                <div className="flex items-center justify-between mb-3 mt-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-deep-rose bg-cotton-candy/60 px-2.5 py-0.5 rounded-full border border-rose-pink/20">
                    {item.highlightTag || `#${item.id} • ${item.theme}`}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleFavorite("littleThings", item.id)}
                    aria-label={isFav ? "Unsave note" : "Save note"}
                    className="p-1 hover:scale-110 transition-transform rounded-full hover:bg-cotton-candy/40"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFav ? "fill-deep-rose text-deep-rose" : "text-rose-pink group-hover:text-deep-rose"
                      }`}
                    />
                  </button>
                </div>

                <p className="font-handwriting text-xl sm:text-2xl text-berry leading-relaxed pt-2">
                  &ldquo;{item.note}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-rose-pink/20 flex items-center justify-between text-[11px] text-berry/60">
                <span className="font-serif italic">— Noticed with love 🌸</span>
                <Sparkles className="w-3.5 h-3.5 text-rose-pink" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


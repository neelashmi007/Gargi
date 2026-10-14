"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { MEMORIES_DATA, RelationshipMemory } from "@/data/memories";
import {
  Heart,
  Sparkles,
  MapPin,
  Calendar,
  BookOpen,
  Camera,
  Shuffle,
  Lock,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function MemoriesPage() {
  const { favorites, toggleFavorite, isFavorite, unlockDiscovery, reducedMotion } = useApp();
  const [selectedMemory, setSelectedMemory] = useState<RelationshipMemory | null>(null);
  const [viewMode, setViewMode] = useState<"timeline" | "map" | "scrapbook">("scrapbook");
  const [filterFavoritesOnly, setFilterFavoritesOnly] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleSelectMemory = (mem: RelationshipMemory) => {
    setSelectedMemory(mem);
    if (mem.isSecret) {
      unlockDiscovery("disc-scrapbook-stamp");
    }
  };

  const handleRandomMemory = () => {
    const randomMem = MEMORIES_DATA[Math.floor(Math.random() * MEMORIES_DATA.length)];
    handleSelectMemory(randomMem);
  };

  const filteredMemories = MEMORIES_DATA.filter((mem) => {
    if (filterFavoritesOnly && !isFavorite("memories", mem.id)) return false;
    return true;
  });

  return (
    <div className="space-y-8 animate-bloom-in pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cotton-candy text-deep-rose text-xs font-serif font-bold uppercase tracking-wider mb-2 shadow-sm">
          <Heart className="w-4 h-4 fill-rose-pink" /> Memory Keepsakes
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-deep-rose">
          Our Story &amp; Memory Scrapbook
        </h1>
        <p className="text-xs sm:text-sm text-berry/85 mt-2 font-serif italic max-w-xl mx-auto leading-relaxed">
          &ldquo;Every chapter of our connection, woven with tenderness, honest affection, and quiet milestones.&rdquo;
        </p>

        {/* View Mode Controls */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex p-1 rounded-full bg-warm-ivory border border-rose-pink/40 shadow-sm">
            {(["timeline", "map", "scrapbook"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setViewMode(mode)}
                className={`px-4 py-1.5 rounded-full capitalize text-xs font-serif font-semibold transition-all ${
                  viewMode === mode
                    ? "bg-deep-rose text-white shadow-sm"
                    : "text-berry hover:text-deep-rose hover:bg-cotton-candy/30"
                }`}
              >
                {mode} View
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleRandomMemory}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cotton-candy text-deep-rose hover:bg-rose-pink hover:text-white transition-all text-xs font-serif font-semibold shadow-sm"
          >
            <Shuffle className="w-3.5 h-3.5" /> Random Memory
          </button>

          <button
            type="button"
            onClick={() => setFilterFavoritesOnly(!filterFavoritesOnly)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-serif font-semibold transition-all border ${
              filterFavoritesOnly
                ? "bg-deep-rose text-white border-deep-rose"
                : "bg-warm-ivory text-berry border-rose-pink/40 hover:bg-cotton-candy/40"
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${filterFavoritesOnly ? "fill-white" : "text-deep-rose"}`} />
            <span>Favourites ({favorites.memories.length})</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. TIMELINE VIEW */}
      {/* ========================================================= */}
      {viewMode === "timeline" && (
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 space-y-8 before:content-[''] before:absolute before:left-2 sm:before:left-4 before:top-4 before:bottom-4 before:w-1 before:bg-rose-pink/40">
          {filteredMemories.map((mem) => {
            const isFav = isFavorite("memories", mem.id);
            const hasPhoto = mem.photoUrl && !imageErrors[mem.id];

            return (
              <div key={mem.id} className="relative group">
                {/* Timeline Node Pin */}
                <div className="absolute -left-6 sm:-left-10 top-5 w-5 h-5 rounded-full bg-deep-rose border-4 border-warm-ivory shadow-sm group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-7 rounded-3xl parchment-paper border-2 border-rose-pink/40 hover:border-deep-rose hover:shadow-romantic transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-deep-rose bg-cotton-candy/70 px-3 py-0.5 rounded-full shadow-xs">
                      {mem.chapter}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-berry/75 flex items-center gap-1 font-sans">
                        <Calendar className="w-3.5 h-3.5" /> {mem.datePrompt}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleFavorite("memories", mem.id)}
                        className="p-1.5 hover:scale-110 transition-transform rounded-full hover:bg-cotton-candy/40"
                        aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? "fill-deep-rose text-deep-rose" : "text-rose-pink"}`} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                    {hasPhoto && (
                      <div
                        onClick={() => handleSelectMemory(mem)}
                        className="md:col-span-4 relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border-2 border-rose-pink/40 cursor-pointer shadow-sm group/thumb bg-gradient-to-tr from-pink-50 to-rose-100"
                      >
                        <Image
                          src={mem.photoUrl!}
                          alt={mem.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover/thumb:scale-105 transition-transform duration-700 ease-out"
                          onError={() => handleImageError(mem.id)}
                        />
                        <div className="absolute inset-0 bg-deep-rose/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-warm-ivory text-deep-rose text-[11px] font-serif font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                            <Maximize2 className="w-3 h-3" /> View Photo
                          </span>
                        </div>
                      </div>
                    )}
                    <div className={hasPhoto ? "md:col-span-8" : "md:col-span-12"}>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-deep-rose">{mem.title}</h3>
                      <p className="text-xs font-serif italic text-berry/75 mt-0.5">
                        Location: {mem.place}
                      </p>

                      <p className="text-xs sm:text-sm text-berry/90 mt-2.5 leading-relaxed font-sans">
                        {mem.personalNote}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-rose-pink/20 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs italic text-berry/75 font-serif">
                      &ldquo;{mem.caption}&rdquo;
                    </span>

                    <button
                      type="button"
                      onClick={() => handleSelectMemory(mem)}
                      className="px-4 py-1.5 rounded-full bg-deep-rose text-white hover:bg-berry text-xs font-serif font-bold shadow-sm transition-all"
                    >
                      View Memory Spread →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. ILLUSTRATED MEMORY MAP VIEW */}
      {/* ========================================================= */}
      {viewMode === "map" && (
        <div className="max-w-4xl mx-auto rounded-3xl parchment-paper p-6 sm:p-10 border-2 border-rose-pink shadow-romantic-lg relative min-h-[480px]">
          <div className="text-center mb-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-deep-rose">Memory Constellation Map</h3>
            <p className="text-xs text-berry/75 mt-1 font-serif italic">
              Tap any pin on the map to open the memory preserved at that coordinate.
            </p>
          </div>

          <div className="relative w-full h-[400px] bg-blush/40 rounded-2xl border border-rose-pink/40 overflow-hidden shadow-inner">
            {filteredMemories.map((mem) => (
              <button
                key={mem.id}
                type="button"
                onClick={() => handleSelectMemory(mem)}
                style={{ left: `${mem.mapCoords.x}%`, top: `${mem.mapCoords.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-deep-rose text-white shadow-romantic flex items-center justify-center group-hover:scale-125 transition-transform animate-float-gentle">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="mt-1 bg-warm-ivory px-2 py-0.5 rounded-md border border-rose-pink/60 text-[10px] font-bold text-berry shadow-sm whitespace-nowrap opacity-90 group-hover:opacity-100">
                    {mem.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. SCRAPBOOK SPREAD VIEW */}
      {/* ========================================================= */}
      {viewMode === "scrapbook" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {filteredMemories.map((mem) => {
            const hasPhoto = mem.photoUrl && !imageErrors[mem.id];

            return (
              <div
                key={mem.id}
                onClick={() => handleSelectMemory(mem)}
                className="group relative p-6 rounded-3xl bg-[#FFFDF9] border-2 border-rose-pink/50 shadow-romantic hover:shadow-romantic-lg transition-all flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
              >
                {/* Washi tape accent on top */}
                <div
                  className="absolute -top-2 left-8 w-16 h-4 bg-cotton-candy/90 border-t border-b border-rose-pink/50 -rotate-2 shadow-xs pointer-events-none z-10"
                  aria-hidden="true"
                />

                <div>
                  {/* Photo area */}
                  <div className="relative h-60 sm:h-72 w-full rounded-2xl bg-gradient-to-tr from-pink-100 to-rose-200 border border-rose-pink/40 flex flex-col items-center justify-center text-center overflow-hidden shadow-xs">
                    {hasPhoto ? (
                      <Image
                        src={mem.photoUrl!}
                        alt={mem.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={() => handleImageError(mem.id)}
                      />
                    ) : (
                      <div className="p-4 flex flex-col items-center">
                        <Camera className="w-8 h-8 text-deep-rose mb-1 opacity-70" />
                        <p className="text-xs text-berry/80 font-medium max-w-xs font-serif italic">
                          {mem.photoPlaceholderText}
                        </p>
                      </div>
                    )}
                    <span className="absolute bottom-2.5 left-2.5 z-10 text-[10px] font-bold uppercase tracking-wider text-deep-rose bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full shadow-xs border border-rose-pink/30">
                      {mem.chapter}
                    </span>
                    <div className="absolute inset-0 bg-deep-rose/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-warm-ivory text-deep-rose text-xs font-serif font-bold px-4 py-1.5 rounded-full shadow-romantic flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5" /> View Keepsake
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-deep-rose mt-4 group-hover:text-berry transition-colors">
                    {mem.title}
                  </h3>
                  <p className="text-xs text-berry/85 mt-1 font-serif italic">&ldquo;{mem.caption}&rdquo;</p>
                  <p className="text-xs sm:text-sm text-berry/90 mt-2 leading-relaxed font-sans">{mem.personalNote}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-rose-pink/20 flex items-center justify-between">
                  <span className="text-[10px] text-berry/65 flex items-center gap-1 font-sans">
                    <Calendar className="w-3 h-3" /> {mem.datePrompt}
                  </span>
                  {mem.associatedLetterId && (
                    <Link
                      href="/letters"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-semibold text-deep-rose hover:text-berry underline flex items-center gap-1 font-serif"
                    >
                      <BookOpen className="w-3.5 h-3.5" /> Letter Attached
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MEMORY DETAIL MODAL */}
      {selectedMemory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-berry/60 backdrop-blur-sm animate-bloom-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-warm-ivory rounded-3xl p-6 sm:p-8 shadow-romantic-lg border-2 border-rose-pink max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 p-2 text-berry hover:text-deep-rose rounded-full hover:bg-cotton-candy/40 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold uppercase tracking-wider text-deep-rose bg-cotton-candy px-2.5 py-0.5 rounded-full shadow-xs">
              {selectedMemory.chapter}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-deep-rose mt-2">
              {selectedMemory.title}
            </h3>
            <p className="text-xs font-serif italic text-berry/75 mt-0.5">
              {selectedMemory.datePrompt} • {selectedMemory.place}
            </p>

            {selectedMemory.photoUrl && !imageErrors[selectedMemory.id] ? (
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-rose-pink/50 my-4 shadow-romantic bg-gradient-to-tr from-pink-50 to-rose-100 flex items-center justify-center">
                <Image
                  src={selectedMemory.photoUrl}
                  alt={selectedMemory.title}
                  fill
                  className="object-contain p-2"
                  onError={() => handleImageError(selectedMemory.id)}
                />
              </div>
            ) : (
              <div className="mt-4 p-6 rounded-2xl bg-blush/60 border border-rose-pink/40 text-center">
                <Camera className="w-8 h-8 text-deep-rose mx-auto mb-2 opacity-60" />
                <p className="text-xs sm:text-sm text-berry/80 italic font-medium font-serif">
                  {selectedMemory.photoPlaceholderText}
                </p>
              </div>
            )}

            <div className="p-3.5 rounded-xl bg-cotton-candy/30 border border-rose-pink/30 mb-3">
              <p className="text-xs sm:text-sm font-serif italic text-deep-rose font-medium text-center">
                &ldquo;{selectedMemory.caption}&rdquo;
              </p>
            </div>

            <p className="text-xs sm:text-sm text-berry/90 leading-relaxed font-sans">
              {selectedMemory.personalNote}
            </p>

            {selectedMemory.associatedLetterId && (
              <div className="mt-5 p-4 rounded-2xl bg-cotton-candy/50 border border-rose-pink/50 flex items-center justify-between">
                <div>
                  <p className="text-xs font-serif font-bold text-deep-rose">Associated Love Letter</p>
                  <p className="text-[11px] text-berry/80">Read the letter written for this chapter</p>
                </div>
                <Link
                  href="/letters"
                  className="px-4 py-2 rounded-full bg-deep-rose text-white text-xs font-serif font-bold shadow-sm hover:bg-berry transition-all"
                >
                  Read Letter
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


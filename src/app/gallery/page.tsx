"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { GALLERY_ITEMS, GALLERY_CHAPTERS, GalleryItem } from "@/data/gallery";
import {
  Camera,
  Heart,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Maximize2,
  Flower2,
  BookOpen,
  Calendar,
  Star,
} from "lucide-react";

export default function PhotoGalleryPage() {
  const { favorites, toggleFavorite, isFavorite } = useApp();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeChapter, setActiveChapter] = useState<string>("all");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const touchStartX = useRef<number | null>(null);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handlePrev = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[prevIndex]);
  }, [selectedItem]);

  const handleNext = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[nextIndex]);
  }, [selectedItem]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, handlePrev, handleNext]);

  // Touch Swipe for Mobile Lightbox
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext(); // Swiped left -> Next
    } else if (diff < -50) {
      handlePrev(); // Swiped right -> Prev
    }
    touchStartX.current = null;
  };

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeChapter === "all") return true;
    return item.chapterId === activeChapter;
  });

  const currentChapterInfo = GALLERY_CHAPTERS.find((c) => c.id === activeChapter);

  return (
    <div className="space-y-10 animate-bloom-in pb-12">
      {/* 1. Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cotton-candy text-deep-rose text-xs font-serif font-bold uppercase tracking-wider mb-2 shadow-sm">
          <Camera className="w-4 h-4" /> Keepsake Album & Scrapbook
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-deep-rose">
          Gargi&apos;s Memory Pavilion
        </h1>
        <p className="text-xs sm:text-sm text-berry/85 mt-2 font-serif italic max-w-xl mx-auto leading-relaxed">
          &ldquo;A scrapbook of her life, the girl she is, the dreams she pursues, and the moments we share together.&rdquo;
        </p>
      </div>

      {/* 2. Chapter Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
        <button
          type="button"
          onClick={() => setActiveChapter("all")}
          className={`px-4 py-2 rounded-full text-xs font-serif font-semibold transition-all shadow-sm ${
            activeChapter === "all"
              ? "bg-deep-rose text-white shadow-romantic scale-105"
              : "bg-warm-ivory text-berry hover:bg-cotton-candy/50 border border-rose-pink/40"
          }`}
        >
          All Chapters ({GALLERY_CHAPTERS.length})
        </button>

        {GALLERY_CHAPTERS.map((ch) => (
          <button
            key={ch.id}
            type="button"
            onClick={() => setActiveChapter(ch.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-serif font-medium transition-all ${
              activeChapter === ch.id
                ? "bg-deep-rose text-white shadow-romantic scale-105 font-bold"
                : "bg-warm-ivory/90 text-berry/80 hover:bg-cotton-candy/40 border border-rose-pink/30"
            }`}
          >
            <span className="font-bold text-[11px] opacity-75 mr-1">{ch.number}.</span>
            <span>{ch.title}</span>
          </button>
        ))}
      </div>

      {/* 3. Selected Chapter Banner Introduction */}
      {currentChapterInfo && (
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-7 glass-panel border-2 border-rose-pink/60 shadow-romantic text-center animate-fade-in relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cotton-candy/60 text-deep-rose text-[11px] font-serif font-bold uppercase tracking-wider mb-2">
            <span>Chapter {currentChapterInfo.number}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-deep-rose">
            {currentChapterInfo.title}
          </h2>
          <p className="text-xs sm:text-sm font-handwriting text-deep-rose text-xl sm:text-2xl mt-1">
            {currentChapterInfo.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-berry/80 font-serif italic max-w-xl mx-auto mt-2 leading-relaxed">
            &ldquo;{currentChapterInfo.description}&rdquo;
          </p>
        </div>
      )}

      {/* 4. Scrapbook Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {filteredItems.map((item) => {
          const isFav = isFavorite("photos", item.id);
          const hasError = imageErrors[item.id];

          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-3xl bg-[#FFFDF9] border-2 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between shadow-romantic hover:shadow-romantic-lg hover:-translate-y-1.5 ${
                item.isFeatured
                  ? "border-deep-rose/70 ring-2 ring-cotton-candy/60 sm:col-span-2 lg:col-span-1"
                  : "border-rose-pink/40 hover:border-deep-rose"
              }`}
            >
              {/* Decorative Washi Tape Accent on Top Edge */}
              <div
                className="absolute top-2 left-6 z-20 w-16 h-4 bg-cotton-candy/80 border-t border-b border-rose-pink/50 -rotate-3 shadow-xs pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />

              {item.isFeatured && (
                <div className="absolute top-3 right-4 z-20 flex items-center gap-1 bg-warm-ivory/95 border border-rose-pink/60 text-deep-rose text-[10px] font-serif font-bold px-2.5 py-0.5 rounded-full shadow-sm pointer-events-none">
                  <Star className="w-3 h-3 fill-amber-300 text-amber-500" />
                  <span>Featured Snapshot</span>
                </div>
              )}

              {/* Media Photo Container */}
              <div
                className={`relative w-full ${
                  item.aspectRatio === "portrait"
                    ? "h-80 sm:h-96"
                    : item.aspectRatio === "landscape"
                    ? "h-64 sm:h-72"
                    : "h-72 sm:h-80"
                } bg-gradient-to-tr ${
                  item.placeholderTheme.bgGradient
                } flex flex-col items-center justify-center p-6 text-center overflow-hidden`}
              >
                {!hasError ? (
                  <Image
                    src={item.src}
                    alt={item.photoDescription}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={() => handleImageError(item.id)}
                  />
                ) : (
                  /* Aesthetic Keepsake Polaroid Placeholder */
                  <div className="relative z-10 flex flex-col items-center p-5 max-w-xs animate-bloom-in">
                    <div className="w-14 h-14 rounded-full bg-white/90 border-2 border-rose-pink flex items-center justify-center text-deep-rose shadow-md mb-3 group-hover:scale-110 transition-transform">
                      {item.placeholderTheme.icon === "rose" ? (
                        <Flower2 className="w-7 h-7 text-rose-pink" />
                      ) : item.placeholderTheme.icon === "flower" ? (
                        <Flower2 className="w-7 h-7 text-deep-rose" />
                      ) : item.placeholderTheme.icon === "heart" ? (
                        <Heart className="w-7 h-7 fill-cotton-candy text-deep-rose" />
                      ) : (
                        <Camera className="w-7 h-7 text-deep-rose" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-deep-rose bg-white/80 px-2.5 py-0.5 rounded-full border border-rose-pink/30 mb-2">
                      {item.chapterTitle.split(":")[0]}
                    </span>
                    <p className="text-sm font-serif font-bold text-deep-rose leading-tight">
                      {item.title}
                    </p>
                    <p className="text-xs text-berry/80 mt-2 font-serif italic leading-relaxed">
                      {item.placeholderTheme.suggestion}
                    </p>
                  </div>
                )}

                {/* Hover Reveal Affordance */}
                <div className="absolute inset-0 bg-deep-rose/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-warm-ivory text-deep-rose text-xs font-serif font-bold px-4 py-2 rounded-full shadow-romantic flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-3.5 h-3.5" /> View Keepsake
                  </span>
                </div>
              </div>

              {/* Scrapbook Caption Card Body */}
              <div className="p-5 bg-[#FFFDF9] flex flex-col justify-between flex-1 border-t border-rose-pink/25">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-deep-rose/80">
                      {item.chapterTitle}
                    </span>
                    {item.datePrompt && (
                      <span className="text-[10px] text-berry/60 flex items-center gap-1 font-sans">
                        <Calendar className="w-3 h-3" /> {item.datePrompt}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-deep-rose group-hover:text-berry transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-berry/85 mt-1.5 font-serif italic leading-relaxed">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-rose-pink/20 flex items-center justify-between">
                  <span className="text-[11px] text-deep-rose font-medium font-handwriting text-lg sm:text-xl">
                    For Gargi 🌸
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite("photos", item.id);
                    }}
                    aria-label={isFav ? "Remove from favourites" : "Save to favourites"}
                    className="p-1.5 rounded-full hover:bg-cotton-candy/40 transition-colors focus:outline-none focus:ring-2 focus:ring-deep-rose"
                  >
                    <Heart
                      className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        isFav ? "fill-deep-rose text-deep-rose" : "text-rose-pink"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Full-Screen Cinematic Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous / Next Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Lightbox Keepsake Card */}
          <div className="max-w-4xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-rose-pink shadow-romantic-lg max-h-[92vh] flex flex-col justify-between animate-bloom-in">
            {/* Image / Fallback View Area */}
            <div
              className={`relative w-full h-80 sm:h-[460px] md:h-[500px] bg-gradient-to-tr ${
                selectedItem.placeholderTheme.bgGradient
              } flex flex-col items-center justify-center p-6 text-center overflow-hidden`}
            >
              {!imageErrors[selectedItem.id] ? (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.photoDescription}
                  fill
                  priority
                  className="object-contain p-2 sm:p-4"
                  onError={() => handleImageError(selectedItem.id)}
                />
              ) : (
                <div className="flex flex-col items-center p-6 max-w-md">
                  <div className="w-20 h-20 rounded-full bg-white/90 border-2 border-rose-pink flex items-center justify-center text-deep-rose shadow-md mb-4 animate-float-gentle">
                    <Flower2 className="w-10 h-10 text-deep-rose" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-deep-rose bg-cotton-candy/70 px-3 py-1 rounded-full mb-2">
                    {selectedItem.chapterTitle}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-deep-rose">
                    {selectedItem.title}
                  </p>
                  <p className="text-xs sm:text-sm text-berry/80 mt-2 font-serif italic max-w-sm leading-relaxed">
                    {selectedItem.placeholderTheme.suggestion}
                  </p>
                </div>
              )}
            </div>

            {/* Lightbox Information Bar */}
            <div className="p-5 sm:p-6 bg-warm-ivory border-t border-rose-pink/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-serif font-bold text-deep-rose uppercase tracking-wider">
                    {selectedItem.chapterTitle}
                  </span>
                  {selectedItem.datePrompt && (
                    <span className="text-xs text-berry/60">• {selectedItem.datePrompt}</span>
                  )}
                </div>
                <h2 id="lightbox-title" className="text-lg sm:text-xl font-serif font-bold text-deep-rose">
                  {selectedItem.title}
                </h2>
                <p className="text-xs sm:text-sm text-berry/90 mt-1 font-serif italic max-w-2xl leading-relaxed">
                  &ldquo;{selectedItem.caption}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => toggleFavorite("photos", selectedItem.id)}
                  className="px-4 py-2 rounded-full border border-rose-pink text-xs font-serif font-semibold flex items-center gap-2 hover:bg-cotton-candy/40 transition-colors shadow-sm"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isFavorite("photos", selectedItem.id)
                        ? "fill-deep-rose text-deep-rose"
                        : "text-rose-pink"
                    }`}
                  />
                  <span>
                    {isFavorite("photos", selectedItem.id) ? "Favourited" : "Save to Favourites"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

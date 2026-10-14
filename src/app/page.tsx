"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  Sparkles,
  Heart,
  Compass,
  ArrowRight,
  BookOpen,
  Camera,
  Gift,
  Gamepad2,
  Cloud,
  Feather,
  Flower2,
  Coffee,
  Star,
  RotateCcw,
} from "lucide-react";
import confetti from "canvas-confetti";
import { IntroFairytale } from "@/components/intro/IntroFairytale";

export default function HomePage() {
  const { hasEntered, enterWorld, replayIntro, reducedMotion, unlockDiscovery } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEnter = () => {
    if (!reducedMotion) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F4A7C5", "#D85A88", "#FFD6E7", "#E9DDFB"],
      });
    }
    enterWorld();
  };

  const mapDestinations = [
    {
      id: "dest-garden",
      title: "Rose Garden",
      subtitle: "Where roses bloom at your touch",
      href: "/garden",
      icon: Flower2,
      badge: "Interactive",
      accent: "from-pink-100 to-rose-200",
      description: "A sanctuary of blush roses, virtual watering cans, blooming petals, and hidden garden journals.",
      coords: "top-[15%] left-[12%]",
    },
    {
      id: "dest-letters",
      title: "Letter Castle",
      subtitle: "20 handwritten love letters",
      href: "/letters",
      icon: BookOpen,
      badge: "20 Letters",
      accent: "from-rose-100 to-pink-200",
      description: "Clickable envelopes, wax seals, and letters written to remind you how deeply you are adored.",
      coords: "top-[12%] right-[14%]",
    },
    {
      id: "dest-reasons",
      title: "30 Reasons Bower",
      subtitle: "Why you are completely irreplaceable",
      href: "/reasons",
      icon: Gift,
      badge: "30 Cards",
      accent: "from-purple-100 to-pink-200",
      description: "Flippable cards covering your individuality, smile, dreams, growth, and right to be human.",
      coords: "top-[38%] left-[8%]",
    },
    {
      id: "dest-catcafe",
      title: "Cat Café & Games",
      subtitle: "4 fun mini-games & cuddles",
      href: "/play",
      icon: Gamepad2,
      badge: "4 Games",
      accent: "from-amber-100 to-pink-100",
      description: "Catch the Hearts, Find Hidden Roses, Affectionate Quiz, and Build a Bouquet.",
      coords: "top-[36%] right-[10%]",
    },
    {
      id: "dest-memories",
      title: "Memory Meadow",
      subtitle: "Illustrated timeline & scrapbook",
      href: "/memories",
      icon: Heart,
      badge: "Timeline",
      accent: "from-rose-100 to-purple-100",
      description: "Our milestones, cherished moments, and secret coordinates woven into a lovely scrapbook.",
      coords: "top-[58%] left-[16%]",
    },
    {
      id: "dest-gallery",
      title: "Scrapbook Pavilion",
      subtitle: "Our photo album & lightbox",
      href: "/gallery",
      icon: Camera,
      badge: "Photos",
      accent: "from-pink-100 to-rose-100",
      description: "Dedicated frames ready for your photos of Gargi with full-screen lightbox viewing.",
      coords: "top-[56%] right-[18%]",
    },
    {
      id: "dest-littlethings",
      title: "Little Things Cottage",
      subtitle: "Small details I adore about you",
      href: "/little-things",
      icon: Feather,
      badge: "Observations",
      accent: "from-pink-50 to-purple-100",
      description: "Sticky notes, sweet expressions, and little observations pinned with colorful washi tape.",
      coords: "bottom-[22%] left-[10%]",
    },
    {
      id: "dest-daily",
      title: "Daily Love Hearth",
      subtitle: "40+ comforting messages",
      href: "/daily-love",
      icon: Coffee,
      badge: "40+ Notes",
      accent: "from-rose-100 to-amber-100",
      description: "For when you miss me, need reassurance, had a hard day, or simply want to smile.",
      coords: "bottom-[20%] right-[12%]",
    },
    {
      id: "dest-observatory",
      title: "Starry Observatory",
      subtitle: "Future dreams & wishes",
      href: "/dreams",
      icon: Cloud,
      badge: "Dreams",
      accent: "from-purple-100 to-sky-100",
      description: "Hopes for our relationship, custom dream cards, and constellations under the stars.",
      coords: "bottom-[8%] left-[32%]",
    },
    {
      id: "dest-finale",
      title: "Moonlit Finale",
      subtitle: "The final emotional reveal",
      href: "/final-letter",
      icon: Star,
      badge: "Special",
      accent: "from-rose-200 via-purple-200 to-pink-300",
      description: "A peaceful night sky transition leading to a heartfelt final letter just for you.",
      coords: "bottom-[6%] right-[32%]",
    },
  ];

  return (
    <div className="space-y-12">
      {/* 1. MAGICAL 2D ANIME ROSE GARDEN INTRO */}
      {!hasEntered ? (
        <IntroFairytale
          onComplete={handleEnter}
          reducedMotion={reducedMotion}
        />
      ) : (
        /* Welcome Back Banner when return visit */
        <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-rose-pink/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm animate-bloom-in">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-cotton-candy text-deep-rose flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 fill-rose-pink" />
            </div>
            <div>
              <p className="text-sm font-serif font-bold text-deep-rose">
                Welcome back to your little world, Gargi 🌸
              </p>
              <p className="text-xs text-berry/80">
                Every rose is still blooming and waiting for your gentle touch.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={replayIntro}
            className="text-xs text-deep-rose hover:text-berry underline flex items-center gap-1 font-semibold"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Replay Introduction Scene
          </button>
        </div>
      )}

      {/* 2. MAGICAL WORLD MAP SECTION */}
      <section aria-labelledby="map-heading" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cotton-candy text-deep-rose text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" /> Fairytale Navigator
          </div>
          <h2 id="map-heading" className="text-3xl sm:text-4xl font-serif font-bold text-deep-rose">
            The Enchanted World Map
          </h2>
          <p className="text-xs sm:text-sm text-berry/80 mt-1">
            Choose a destination below to wander through our little sanctuary. Each corner holds its own quiet magic.
          </p>
        </div>

        {/* Illustrated Map Canvas / Visual Hub */}
        <div className="relative w-full rounded-3xl parchment-paper p-6 sm:p-10 border-2 border-rose-pink shadow-romantic-lg overflow-hidden">
          {/* Decorative Map Flourishes */}
          <div className="absolute top-4 left-4 text-xs font-serif italic text-rose-pink/70 select-none">
            ✦ Realm of Gentle Love ✦
          </div>
          <div className="absolute bottom-4 right-4 text-xs font-serif italic text-rose-pink/70 select-none">
            ✦ Gargi&apos;s Sanctuary ✦
          </div>

          {/* Interactive Easter Egg in Map: Star in Top Right */}
          <button
            type="button"
            onClick={() => unlockDiscovery("disc-hidden-star")}
            title="A sparkling star in the sky"
            aria-label="Touch the wishing star"
            className="absolute top-6 right-8 text-rose-pink hover:text-deep-rose hover:scale-125 transition-all p-1"
          >
            <Star className="w-5 h-5 fill-cotton-candy stroke-deep-rose animate-sparkle-spin" />
          </button>

          {/* Interactive Map Grid: Accessible & Mobile Responsive Journey */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {mapDestinations.map((dest) => {
              const Icon = dest.icon;
              return (
                <Link
                  key={dest.id}
                  href={dest.href}
                  className="group relative flex flex-col p-5 rounded-2xl bg-warm-ivory/90 hover:bg-white border-2 border-rose-pink/40 hover:border-deep-rose shadow-sm hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-deep-rose"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${dest.accent} flex items-center justify-center text-deep-rose shadow-sm group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-deep-rose bg-cotton-candy/50 px-2.5 py-0.5 rounded-full border border-rose-pink/40">
                      {dest.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-deep-rose group-hover:text-berry transition-colors">
                    {dest.title}
                  </h3>
                  <p className="text-xs font-medium text-berry/70 mb-2">
                    {dest.subtitle}
                  </p>
                  <p className="text-xs text-berry/80 flex-1 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-rose-pink/20 flex items-center justify-between text-xs font-semibold text-deep-rose group-hover:text-berry">
                    <span>Visit Destination</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. QUICK LOVE NOTE CAROUSEL / HIGHLIGHTS */}
      <section className="rounded-3xl glass-panel p-6 sm:p-8 border border-rose-pink/50 text-center shadow-romantic">
        <div className="max-w-xl mx-auto">
          <Heart className="w-7 h-7 mx-auto text-rose-pink fill-rose-pink/30 mb-2" />
          <h3 className="text-xl font-serif font-bold text-deep-rose">
            A Note Tucked Under the Gate
          </h3>
          <p className="mt-2 text-sm text-berry/85 italic font-serif">
            &ldquo;You never have to prove your worth to me, Baby. I love the real, quiet, wonderful girl you are every single day.&rdquo;
          </p>
          <div className="mt-4">
            <Link
              href="/letters"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-deep-rose hover:text-berry underline"
            >
              Open the Library of Love Letters →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

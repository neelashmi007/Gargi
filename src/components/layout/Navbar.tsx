"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import {
  Heart,
  Sparkles,
  Menu,
  X,
  Compass,
  Settings,
  RotateCcw,
  Volume2,
  VolumeX,
  Eye,
  BookOpen,
  Camera,
  Gift,
  Gamepad2,
  Cloud,
  Feather,
  SkipForward,
  Shuffle,
  Music,
} from "lucide-react";

interface NavbarProps {
  onOpenJournal: () => void;
  onOpenReset: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJournal, onOpenReset }) => {
  const pathname = usePathname();
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    volume,
    setVolume,
    isShuffle,
    toggleShuffle,
    discoveries,
    reducedMotion,
    toggleReducedMotion,
    replayIntro,
    themeMode,
    setThemeMode,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "World Map", icon: Compass },
    { href: "/garden", label: "Rose Garden", icon: Sparkles },
    { href: "/letters", label: "Love Letters", icon: BookOpen },
    { href: "/memories", label: "Memories", icon: Heart },
    { href: "/gallery", label: "Gallery", icon: Camera },
    { href: "/reasons", label: "30 Reasons", icon: Gift },
    { href: "/little-things", label: "Little Things", icon: Feather },
    { href: "/daily-love", label: "Daily Messages", icon: Heart },
    { href: "/play", label: "Mini-Games", icon: Gamepad2 },
    { href: "/dreams", label: "Future Dreams", icon: Cloud },
    { href: "/final-letter", label: "Finale", icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-rose-pink/40 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-deep-rose rounded-xl px-1.5 py-1"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cotton-candy to-rose-pink flex items-center justify-center text-deep-rose shadow-sm group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-rose-pink stroke-deep-rose" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base sm:text-lg text-deep-rose tracking-wide leading-tight group-hover:text-berry transition-colors">
              A Little Universe
            </span>
            <span className="text-[10px] text-berry/80 font-handwriting tracking-wider text-xs">
              Handcrafted for Princess Gargi
            </span>
          </div>
        </Link>

        {/* Desktop Quick Nav Links (Primary destinations) */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          {navLinks.slice(0, 7).map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-rose-pink/30 text-deep-rose shadow-sm font-bold border border-rose-pink"
                    : "text-berry/90 hover:text-deep-rose hover:bg-cotton-candy/40"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action Tools */}
        <div className="flex items-center gap-2">
          {/* Secret Discoveries Journal Button */}
          <button
            type="button"
            onClick={onOpenJournal}
            title="Discoveries Journal"
            aria-label="Open discoveries journal"
            className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-warm-ivory border border-rose-pink/50 text-deep-rose text-xs font-medium shadow-sm hover:bg-cotton-candy/30 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Secrets</span>
            <span className="bg-rose-pink text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
              {discoveries.length}/6
            </span>
          </button>

          {/* Top Sound Option */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            title={isPlaying ? `Now Playing: "${currentTrack.title}" (Click to pause)` : "Play romantic music"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${
              isPlaying
                ? "bg-deep-rose text-white border-deep-rose shadow-romantic animate-pulse-soft"
                : "bg-warm-ivory border-rose-pink/50 text-berry hover:text-deep-rose hover:bg-cotton-candy/40"
            }`}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 flex-shrink-0 animate-bounce-gentle" />
                <span className="text-[11px] font-serif font-medium hidden sm:inline max-w-[120px] truncate">
                  {currentTrack.title}
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 flex-shrink-0 opacity-70" />
                <span className="text-[11px] font-serif font-medium hidden sm:inline">
                  Sound Off
                </span>
              </>
            )}
          </button>

          {/* Settings Menu Toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSettingsOpen(!settingsOpen)}
              aria-label="Experience settings"
              className="p-2 rounded-full bg-warm-ivory border border-rose-pink/50 text-berry hover:text-deep-rose transition-all"
            >
              <Settings className="w-4 h-4" />
            </button>

            {settingsOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-warm-ivory rounded-2xl p-4 shadow-romantic-lg border-2 border-rose-pink/60 animate-bloom-in text-xs text-berry z-50">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-rose-pink/30">
                  <span className="font-serif font-bold text-deep-rose text-sm">Settings & Experience</span>
                  <button
                    type="button"
                    onClick={() => setSettingsOpen(false)}
                    className="text-berry/60 hover:text-deep-rose"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Romantic Music Controls */}
                  <div className="p-2.5 rounded-xl bg-cotton-candy/30 border border-rose-pink/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-deep-rose flex items-center gap-1">
                        <Music className="w-3.5 h-3.5" /> Background Music
                      </span>
                      <button
                        type="button"
                        onClick={toggleShuffle}
                        className={`text-[10px] px-2 py-0.5 rounded-full font-serif flex items-center gap-1 transition-all ${
                          isShuffle
                            ? "bg-deep-rose text-white font-semibold shadow-xs"
                            : "bg-warm-ivory text-berry hover:text-deep-rose border border-rose-pink/30"
                        }`}
                        title={isShuffle ? "Shuffle is ON (Randomized)" : "Shuffle is OFF"}
                      >
                        <Shuffle className="w-2.5 h-2.5" />
                        <span>{isShuffle ? "Random" : "Sequential"}</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="font-serif font-semibold text-deep-rose truncate">{currentTrack.title}</p>
                        <p className="text-[10px] opacity-70 truncate">{currentTrack.artist}</p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <button
                          type="button"
                          onClick={togglePlay}
                          className="w-7 h-7 rounded-full bg-deep-rose text-white flex items-center justify-center hover:bg-berry active:scale-95 transition-all shadow-xs"
                          title={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          type="button"
                          onClick={nextTrack}
                          className="w-7 h-7 rounded-full bg-warm-ivory border border-rose-pink/40 text-deep-rose flex items-center justify-center hover:bg-cotton-candy/50 active:scale-95 transition-all"
                          title="Skip to next randomized track"
                        >
                          <SkipForward className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-rose-pink/20">
                      <Volume2 className="w-3 h-3 text-deep-rose opacity-70 flex-shrink-0" />
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        aria-label="Adjust volume"
                        className="w-full h-1 bg-warm-ivory rounded-lg appearance-none cursor-pointer accent-deep-rose"
                      />
                    </div>
                  </div>
                  {/* Sky Theme Mode */}
                  <div>
                    <span className="text-[11px] font-semibold text-berry/70 block mb-1">Atmosphere</span>
                    <div className="grid grid-cols-3 gap-1">
                      {(["day", "sunset", "night"] as const).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setThemeMode(mode)}
                          className={`py-1 rounded-lg capitalize text-center text-[11px] font-medium border ${
                            themeMode === mode
                              ? "bg-rose-pink text-white border-rose-pink shadow-sm"
                              : "bg-cotton-candy/30 border-rose-pink/30 text-berry"
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Reduced Motion Toggle */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Eye className="w-3.5 h-3.5 text-deep-rose" /> Reduced Motion
                    </span>
                    <input
                      type="checkbox"
                      checked={reducedMotion}
                      onChange={toggleReducedMotion}
                      className="accent-deep-rose w-4 h-4 cursor-pointer"
                    />
                  </div>

                  {/* Replay Opening Intro */}
                  <button
                    type="button"
                    onClick={() => {
                      replayIntro();
                      setSettingsOpen(false);
                      if (pathname !== "/") window.location.href = "/";
                    }}
                    className="w-full flex items-center justify-start gap-2 py-1.5 px-2 rounded-xl hover:bg-cotton-candy/40 text-left font-medium"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-deep-rose" /> Replay Introduction
                  </button>

                  {/* Reset All Progress */}
                  <button
                    type="button"
                    onClick={() => {
                      setSettingsOpen(false);
                      onOpenReset();
                    }}
                    className="w-full flex items-center justify-start gap-2 py-1.5 px-2 rounded-xl hover:bg-rose-100 text-left text-deep-rose font-medium border-t border-rose-pink/20 pt-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-deep-rose" /> Reset Progress...
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden p-2 rounded-xl bg-warm-ivory border border-rose-pink/50 text-deep-rose"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 glass-panel border-t border-rose-pink/40 animate-bloom-in space-y-1 max-h-[80vh] overflow-y-auto">
          <p className="text-[10px] uppercase font-bold tracking-widest text-deep-rose px-3 pt-2 pb-1">
            Fairytale Destinations
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-rose-pink text-white font-bold shadow-sm"
                      : "bg-warm-ivory/80 text-berry hover:bg-cotton-candy/50"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

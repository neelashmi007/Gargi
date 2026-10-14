"use client";

import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from "react";
import { PLAYLIST_TRACKS, AudioTrack } from "@/data/music";
import { DISCOVERIES_LIST, DiscoveryItem } from "@/data/discoveries";

interface AppContextType {
  // Audio state
  currentTrack: AudioTrack;
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  playlist: AudioTrack[];
  togglePlay: () => void;
  playTrack: (index: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  isShuffle: boolean;
  toggleShuffle: () => void;
  setVolume: (val: number) => void;
  toggleMute: () => void;
  seek: (seconds: number) => void;
  isAudioSynthesizing: boolean;

  // Preferences & Navigation
  hasEntered: boolean;
  enterWorld: () => void;
  replayIntro: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  themeMode: "day" | "sunset" | "night";
  setThemeMode: (mode: "day" | "sunset" | "night") => void;

  // Discoveries & Secrets
  discoveries: string[];
  unlockDiscovery: (id: string) => void;
  latestUnlocked: DiscoveryItem | null;
  clearLatestUnlocked: () => void;

  // Favourites
  favorites: {
    letters: string[];
    reasons: number[];
    littleThings: number[];
    messages: string[];
    memories: string[];
    photos: string[];
    dreams: string[];
  };
  toggleFavorite: (type: "letters" | "reasons" | "littleThings" | "messages" | "memories" | "photos" | "dreams", id: string | number) => void;
  isFavorite: (type: "letters" | "reasons" | "littleThings" | "messages" | "memories" | "photos" | "dreams", id: string | number) => boolean;

  // Garden state
  gardenStats: {
    waterLevel: number;
    bloomedRoses: number[];
    bouquetCount: number;
  };
  waterRoseGarden: () => void;
  toggleRoseBloom: (id: number) => void;

  // Reset progress
  resetAllProgress: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  ENTERED: "gargi_universe_entered_v1",
  DISCOVERIES: "gargi_universe_discoveries_v1",
  FAVORITES: "gargi_universe_favorites_v1",
  REDUCED_MOTION: "gargi_universe_reduced_motion_v1",
  THEME_MODE: "gargi_universe_theme_mode_v1",
  GARDEN: "gargi_universe_garden_v1",
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Audio state
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(true);
  const [volume, setVolumeState] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(235);
  const [isAudioSynthesizing, setIsAudioSynthesizing] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthTimerRef = useRef<NodeJS.Timeout | null>(null);
  const synthCtxRef = useRef<AudioContext | null>(null);
  const playedHistoryRef = useRef<number[]>([]);
  const shuffleQueueRef = useRef<number[]>([]);

  // Experience state
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<"day" | "sunset" | "night">("day");
  const [discoveries, setDiscoveries] = useState<string[]>([]);
  const [latestUnlocked, setLatestUnlocked] = useState<DiscoveryItem | null>(null);

  const [favorites, setFavorites] = useState<{
    letters: string[];
    reasons: number[];
    littleThings: number[];
    messages: string[];
    memories: string[];
    photos: string[];
    dreams: string[];
  }>({
    letters: [],
    reasons: [],
    littleThings: [],
    messages: [],
    memories: [],
    photos: [],
    dreams: [],
  });

  const [gardenStats, setGardenStats] = useState<{
    waterLevel: number;
    bloomedRoses: number[];
    bouquetCount: number;
  }>({
    waterLevel: 50,
    bloomedRoses: [1, 2],
    bouquetCount: 0,
  });

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const savedEntered = localStorage.getItem(STORAGE_KEYS.ENTERED);
      if (savedEntered === "true") setHasEntered(true);

      const savedDisc = localStorage.getItem(STORAGE_KEYS.DISCOVERIES);
      if (savedDisc) setDiscoveries(JSON.parse(savedDisc));

      const savedFavs = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      if (savedFavs) setFavorites(JSON.parse(savedFavs));

      const savedMotion = localStorage.getItem(STORAGE_KEYS.REDUCED_MOTION);
      if (savedMotion) setReducedMotion(savedMotion === "true");

      const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME_MODE);
      if (savedTheme === "sunset" || savedTheme === "night" || savedTheme === "day") {
        setThemeMode(savedTheme);
      }

      const savedGarden = localStorage.getItem(STORAGE_KEYS.GARDEN);
      if (savedGarden) setGardenStats(JSON.parse(savedGarden));
    } catch (e) {
      console.warn("Storage not accessible:", e);
    }
  }, []);

  // Web Audio ambient music box synthesizer fallback
  const playSynthesizedMelody = useCallback(() => {
    try {
      if (!synthCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        synthCtxRef.current = new AudioContextClass();
      }
      const ctx = synthCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      setIsAudioSynthesizing(true);
      // Gentle romantic music box notes (Pentatonic blush scale: C5, D5, E5, G5, A5, C6)
      const notes = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
      let step = 0;

      if (synthTimerRef.current) clearInterval(synthTimerRef.current);

      synthTimerRef.current = setInterval(() => {
        if (!isPlaying || isMuted) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Music box bell timbre
        osc.type = "sine";
        const noteIndex = (step * 3) % notes.length;
        osc.frequency.setValueAtTime(notes[noteIndex], ctx.currentTime);

        const currentVol = isMuted ? 0 : volume * 0.15;
        gain.gain.setValueAtTime(currentVol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.4);

        step++;
        setCurrentTime((prev) => (prev >= duration ? 0 : prev + 1));
      }, 750);
    } catch {
      // AudioContext unavailable
    }
  }, [isPlaying, isMuted, volume, duration]);

  const stopSynthesizedMelody = useCallback(() => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    setIsAudioSynthesizing(false);
  }, []);

  // Audio controller
  const currentTrack = PLAYLIST_TRACKS[currentTrackIndex] || PLAYLIST_TRACKS[0];

  // Pick random starting track on client mount
  useEffect(() => {
    if (PLAYLIST_TRACKS.length > 0) {
      const randomIndex = Math.floor(Math.random() * PLAYLIST_TRACKS.length);
      setCurrentTrackIndex(randomIndex);
    }
  }, []);

  const getNextShuffleIndex = useCallback((currentIndex: number) => {
    if (PLAYLIST_TRACKS.length <= 1) return 0;
    if (shuffleQueueRef.current.length === 0) {
      const pool = PLAYLIST_TRACKS.map((_, i) => i).filter((i) => i !== currentIndex);
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      shuffleQueueRef.current = pool;
    }
    return shuffleQueueRef.current.shift() ?? 0;
  }, []);

  const nextTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => {
      playedHistoryRef.current.push(prev);
      if (isShuffle) {
        return getNextShuffleIndex(prev);
      }
      return (prev + 1) % PLAYLIST_TRACKS.length;
    });
  }, [isShuffle, getNextShuffleIndex]);

  const prevTrack = useCallback(() => {
    if (playedHistoryRef.current.length > 0) {
      const last = playedHistoryRef.current.pop()!;
      setCurrentTrackIndex(last);
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST_TRACKS.length) % PLAYLIST_TRACKS.length);
    }
  }, []);

  const toggleShuffle = useCallback(() => {
    setIsShuffle((prev) => !prev);
    shuffleQueueRef.current = [];
  }, []);

  const playTrack = useCallback((index: number) => {
    setCurrentTrackIndex((prev) => {
      playedHistoryRef.current.push(prev);
      return index;
    });
    setIsPlaying(true);
  }, []);

  const nextTrackRef = useRef(nextTrack);
  useEffect(() => {
    nextTrackRef.current = nextTrack;
  }, [nextTrack]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.src = currentTrack.src;
    audio.volume = isMuted ? 0 : volume;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(Math.floor(audio.duration));
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(Math.floor(audio.currentTime));
    };

    const handleEnded = () => {
      nextTrackRef.current();
    };

    const handleError = () => {
      // Audio file missing / 404: activate synthesizer fallback gracefully
      if (isPlaying) {
        playSynthesizedMelody();
      }
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    if (isPlaying) {
      audio.play().catch(() => {
        // Autoplay policy or 404 -> fallback to synthesized sound
        playSynthesizedMelody();
      });
    } else {
      audio.pause();
      stopSynthesizedMelody();
    }

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [currentTrackIndex, isPlaying, playSynthesizedMelody, stopSynthesizedMelody, isMuted, volume]);

  const togglePlay = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (!next) {
        if (audioRef.current) audioRef.current.pause();
        stopSynthesizedMelody();
      }
      return next;
    });
  };

  const setVolume = (val: number) => {
    setVolumeState(val);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : val;
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (audioRef.current) {
        audioRef.current.volume = next ? 0 : volume;
      }
      return next;
    });
  };

  const seek = (seconds: number) => {
    if (audioRef.current && !isNaN(seconds)) {
      audioRef.current.currentTime = seconds;
    }
    setCurrentTime(seconds);
  };

  // User Actions
  const enterWorld = () => {
    setHasEntered(true);
    try {
      localStorage.setItem(STORAGE_KEYS.ENTERED, "true");
    } catch {}
  };

  const replayIntro = () => {
    setHasEntered(false);
    try {
      localStorage.removeItem(STORAGE_KEYS.ENTERED);
    } catch {}
  };

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEYS.REDUCED_MOTION, String(next));
      } catch {}
      return next;
    });
  };

  const unlockDiscovery = (id: string) => {
    if (!discoveries.includes(id)) {
      const updated = [...discoveries, id];
      setDiscoveries(updated);
      const foundItem = DISCOVERIES_LIST.find((d) => d.id === id);
      if (foundItem) {
        setLatestUnlocked(foundItem);
      }
      try {
        localStorage.setItem(STORAGE_KEYS.DISCOVERIES, JSON.stringify(updated));
      } catch {}
    }
  };

  const clearLatestUnlocked = () => setLatestUnlocked(null);

  const toggleFavorite = (type: "letters" | "reasons" | "littleThings" | "messages" | "memories" | "photos" | "dreams", id: string | number) => {
    setFavorites((prev) => {
      const list = prev[type] as (string | number)[];
      const exists = list.includes(id);
      const updatedList = exists ? list.filter((item) => item !== id) : [...list, id];
      const updated = { ...prev, [type]: updatedList };
      try {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));
      } catch {}
      return updated as typeof prev;
    });
  };

  const isFavorite = (type: "letters" | "reasons" | "littleThings" | "messages" | "memories" | "photos" | "dreams", id: string | number) => {
    return (favorites[type] as (string | number)[]).includes(id);
  };

  const waterRoseGarden = () => {
    setGardenStats((prev) => {
      const nextLevel = Math.min(100, prev.waterLevel + 25);
      const updated = { ...prev, waterLevel: nextLevel };
      try {
        localStorage.setItem(STORAGE_KEYS.GARDEN, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const toggleRoseBloom = (id: number) => {
    setGardenStats((prev) => {
      const isBloomed = prev.bloomedRoses.includes(id);
      const updatedRoses = isBloomed ? prev.bloomedRoses.filter((r) => r !== id) : [...prev.bloomedRoses, id];
      const updated = { ...prev, bloomedRoses: updatedRoses };
      try {
        localStorage.setItem(STORAGE_KEYS.GARDEN, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const resetAllProgress = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.ENTERED);
      localStorage.removeItem(STORAGE_KEYS.DISCOVERIES);
      localStorage.removeItem(STORAGE_KEYS.FAVORITES);
      localStorage.removeItem(STORAGE_KEYS.GARDEN);
      localStorage.removeItem(STORAGE_KEYS.THEME_MODE);
    } catch {}
    setHasEntered(false);
    setDiscoveries([]);
    setFavorites({
      letters: [],
      reasons: [],
      littleThings: [],
      messages: [],
      memories: [],
      photos: [],
      dreams: [],
    });
    setGardenStats({
      waterLevel: 50,
      bloomedRoses: [1, 2],
      bouquetCount: 0,
    });
  };

  return (
    <AppContext.Provider
      value={{
        currentTrack,
        isPlaying,
        volume,
        isMuted,
        currentTime,
        duration,
        playlist: PLAYLIST_TRACKS,
        togglePlay,
        playTrack,
        nextTrack,
        prevTrack,
        isShuffle,
        toggleShuffle,
        setVolume,
        toggleMute,
        seek,
        isAudioSynthesizing,
        hasEntered,
        enterWorld,
        replayIntro,
        reducedMotion,
        toggleReducedMotion,
        themeMode,
        setThemeMode,
        discoveries,
        unlockDiscovery,
        latestUnlocked,
        clearLatestUnlocked,
        favorites,
        toggleFavorite,
        isFavorite,
        gardenStats,
        waterRoseGarden,
        toggleRoseBloom,
        resetAllProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

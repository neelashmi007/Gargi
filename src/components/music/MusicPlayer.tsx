"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ListMusic, Sparkles, ChevronUp, ChevronDown } from "lucide-react";

export const MusicPlayer: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    volume,
    isMuted,
    currentTime,
    duration,
    playlist,
    togglePlay,
    playTrack,
    nextTrack,
    prevTrack,
    setVolume,
    toggleMute,
    seek,
    isAudioSynthesizing,
  } = useApp();

  const [isExpanded, setIsExpanded] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remaining = Math.floor(secs % 60);
    return `${mins}:${remaining < 10 ? "0" : ""}${remaining}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 pb-2 pointer-events-auto">
        {/* Playlist Drawer */}
        {showPlaylist && (
          <div className="mb-2 p-4 rounded-2xl glass-panel shadow-romantic border border-rose-pink animate-bloom-in max-h-60 overflow-y-auto">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-rose-pink/30">
              <span className="text-xs font-semibold tracking-wider uppercase text-deep-rose flex items-center gap-1.5">
                <ListMusic className="w-4 h-4" /> Romantic Playlist for Gargi
              </span>
              <button
                type="button"
                onClick={() => setShowPlaylist(false)}
                className="text-xs text-berry hover:text-deep-rose font-medium underline"
              >
                Close
              </button>
            </div>
            <div className="space-y-1">
              {playlist.map((track, idx) => {
                const isSelected = track.id === currentTrack.id;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => {
                      playTrack(idx);
                      setShowPlaylist(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-xs transition-all ${
                      isSelected
                        ? "bg-rose-pink/25 text-deep-rose font-bold"
                        : "hover:bg-cotton-candy/40 text-berry"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 text-center text-xs opacity-60">{idx + 1}</span>
                      <div>
                        <p className="font-serif">{track.title}</p>
                        <p className="text-[10px] opacity-70">{track.artist}</p>
                      </div>
                    </div>
                    <span className="text-[11px] opacity-60">{track.duration}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Player Bar */}
        <div className="rounded-2xl glass-panel shadow-romantic-lg border-2 border-rose-pink/60 p-2.5 sm:p-3 transition-all duration-300">
          <div className="flex items-center justify-between gap-3">
            {/* Track Info */}
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                type="button"
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cotton-candy to-rose-pink flex items-center justify-center text-deep-rose shadow-sm flex-shrink-0 group hover:scale-105 transition-transform"
                title="View Playlist"
              >
                <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 ${isPlaying ? "animate-sparkle-spin" : ""}`} />
              </button>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs sm:text-sm font-serif font-semibold text-deep-rose truncate">
                    {currentTrack.title}
                  </p>
                  {isAudioSynthesizing && (
                    <span className="text-[9px] bg-cotton-candy text-deep-rose px-1.5 py-0.5 rounded-full font-medium">
                      Melody Box
                    </span>
                  )}
                </div>
                <p className="text-[10px] sm:text-xs text-berry/75 truncate">{currentTrack.artist}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={prevTrack}
                aria-label="Previous track"
                className="p-1.5 text-berry hover:text-deep-rose hover:bg-cotton-candy/40 rounded-full transition-colors"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause music" : "Play music"}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-deep-rose text-white flex items-center justify-center shadow-romantic hover:bg-berry active:scale-95 transition-all"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>

              <button
                type="button"
                onClick={nextTrack}
                aria-label="Next track"
                className="p-1.5 text-berry hover:text-deep-rose hover:bg-cotton-candy/40 rounded-full transition-colors"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              {/* Volume / Mute button */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="p-1.5 text-berry hover:text-deep-rose hover:bg-cotton-candy/40 rounded-full transition-colors hidden sm:inline-flex"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Volume Slider for Desktop */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                aria-label="Adjust volume"
                className="w-16 h-1 bg-cotton-candy rounded-lg appearance-none cursor-pointer accent-deep-rose hidden md:inline-block"
              />

              {/* Expand/Collapse Toggle */}
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label="Toggle seeker"
                className="p-1.5 text-berry hover:text-deep-rose hover:bg-cotton-candy/40 rounded-full transition-colors"
              >
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Progress Bar (Always visible or expanded on mobile) */}
          {(isExpanded || progressPercent > 0) && (
            <div className="mt-2 pt-1 border-t border-rose-pink/20 flex items-center gap-2 text-[10px] text-berry/75">
              <span>{formatTime(currentTime)}</span>
              <div
                className="relative flex-1 h-2 bg-cotton-candy/60 rounded-full overflow-hidden cursor-pointer group"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  seek(pos * duration);
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-rose-pink to-deep-rose rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span>{formatTime(duration)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

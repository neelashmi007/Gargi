"use client";

import React, { useMemo } from "react";

interface GardenAtmosphereProps {
  reducedMotion?: boolean;
}

export const GardenAtmosphere: React.FC<GardenAtmosphereProps> = ({ reducedMotion }) => {
  // Generate a fixed set of floating rose petals for consistent client-side rendering
  const petals = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${(i * 5.8 + 2) % 96}%`,
      delay: `${(i * 0.7) % 8}s`,
      duration: `${10 + (i % 6) * 2}s`,
      size: `${14 + (i % 4) * 6}px`,
      opacity: 0.55 + ((i % 5) * 0.08),
      swayDuration: `${4 + (i % 3) * 1.5}s`,
      rotation: (i * 27) % 360,
    }));
  }, []);

  // Soft sparkle particles
  const sparkles = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${(i * 7.3 + 5) % 92}%`,
      top: `${(i * 8.1 + 10) % 80}%`,
      delay: `${(i * 0.5) % 5}s`,
      duration: `${3 + (i % 3)}s`,
      size: `${8 + (i % 3) * 4}px`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20" aria-hidden="true">
      {/* 1. Soft Warm Anime Sunlight Rays & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-rose/25 via-transparent to-pink-200/20 mix-blend-overlay" />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-100/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full bg-rose-pink/20 blur-3xl" />

      {/* 2. Floating Anime Butterflies */}
      {!reducedMotion && (
        <>
          <div
            className="absolute top-1/3 left-[20%] animate-float-slow opacity-90 transition-transform duration-1000"
            style={{ animationDuration: "12s" }}
          >
            <svg
              viewBox="0 0 60 40"
              className="w-10 h-7 text-pink-300 drop-shadow-sm animate-pulse-soft"
              style={{ animationDuration: "2.2s" }}
            >
              {/* Fluttering anime butterfly wings */}
              <ellipse cx="22" cy="18" rx="14" ry="10" fill="#FFD6E7" stroke="#D85A88" strokeWidth="1" opacity="0.85" />
              <ellipse cx="38" cy="18" rx="14" ry="10" fill="#FFD6E7" stroke="#D85A88" strokeWidth="1" opacity="0.85" />
              <ellipse cx="24" cy="26" rx="9" ry="7" fill="#F4A7C5" opacity="0.75" />
              <ellipse cx="36" cy="26" rx="9" ry="7" fill="#F4A7C5" opacity="0.75" />
              <line x1="30" y1="12" x2="30" y2="30" stroke="#873D62" strokeWidth="2" strokeLinecap="round" />
              <circle cx="30" cy="11" r="2.5" fill="#873D62" />
            </svg>
          </div>

          <div
            className="absolute top-1/4 right-[28%] animate-float-gentle opacity-85"
            style={{ animationDuration: "9s", animationDelay: "2s" }}
          >
            <svg
              viewBox="0 0 60 40"
              className="w-8 h-6 text-lavender drop-shadow-sm animate-pulse-soft"
              style={{ animationDuration: "1.8s" }}
            >
              <ellipse cx="22" cy="18" rx="13" ry="9" fill="#E9DDFB" stroke="#D85A88" strokeWidth="1" opacity="0.85" />
              <ellipse cx="38" cy="18" rx="13" ry="9" fill="#E9DDFB" stroke="#D85A88" strokeWidth="1" opacity="0.85" />
              <ellipse cx="25" cy="25" rx="8" ry="6" fill="#F4A7C5" opacity="0.7" />
              <ellipse cx="35" cy="25" rx="8" ry="6" fill="#F4A7C5" opacity="0.7" />
              <line x1="30" y1="12" x2="30" y2="30" stroke="#873D62" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="30" cy="11" r="2" fill="#873D62" />
            </svg>
          </div>
        </>
      )}

      {/* 3. Floating Drifting Rose Petals */}
      {!reducedMotion &&
        petals.map((p) => (
          <div
            key={p.id}
            className="absolute -top-10"
            style={{
              left: p.left,
              animation: `petalFall ${p.duration} linear infinite, petalSway ${p.swayDuration} ease-in-out infinite alternate`,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          >
            <svg
              viewBox="0 0 30 30"
              style={{
                width: p.size,
                height: p.size,
                transform: `rotate(${p.rotation}deg)`,
              }}
              className="drop-shadow-xs"
            >
              <path
                d="M 15 2 C 24 6, 28 17, 20 25 C 13 30, 4 23, 3 14 C 2 7, 9 2, 15 2 Z"
                fill="url(#petalGradient)"
                stroke="#D85A88"
                strokeWidth="0.5"
                opacity="0.9"
              />
            </svg>
          </div>
        ))}

      {/* 4. Magical Sparkles / Fairy Dust */}
      {!reducedMotion &&
        sparkles.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animation: `sparkleTwinkle ${s.duration} ease-in-out infinite`,
              animationDelay: s.delay,
            }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full text-warm-ivory fill-warm-ivory drop-shadow-glow">
              <path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" />
            </svg>
          </div>
        ))}

      {/* Petal Gradient Definition */}
      <svg className="hidden">
        <defs>
          <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD6E7" />
            <stop offset="60%" stopColor="#F4A7C5" />
            <stop offset="100%" stopColor="#D85A88" />
          </linearGradient>
        </defs>
      </svg>

      <style jsx>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-20px) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
        @keyframes petalSway {
          0% {
            margin-left: -25px;
          }
          100% {
            margin-left: 25px;
          }
        }
        @keyframes sparkleTwinkle {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(0.6);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.15);
          }
        }
      `}</style>
    </div>
  );
};

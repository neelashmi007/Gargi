"use client";

import React, { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: "petal" | "heart" | "sparkle";
}

export const FloatingPetals: React.FC = () => {
  const { reducedMotion } = useApp();
  const [items, setItems] = useState<Petal[]>([]);

  useEffect(() => {
    if (reducedMotion) {
      setItems([]);
      return;
    }

    const generated: Petal[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 96 + 2,
      delay: Math.random() * 8,
      duration: Math.random() * 7 + 9, // 9 to 16 seconds
      size: Math.random() * 10 + 12, // 12px to 22px
      type: i % 3 === 0 ? "heart" : i % 3 === 1 ? "petal" : "sparkle",
    }));

    setItems(generated);
  }, [reducedMotion]);

  if (reducedMotion || items.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute opacity-60 animate-float-slow transition-opacity"
          style={{
            left: `${item.left}%`,
            top: `-40px`,
            animation: `drift ${item.duration}s linear infinite`,
            animationDelay: `${item.delay}s`,
            width: `${item.size}px`,
            height: `${item.size}px`,
          }}
        >
          {item.type === "petal" && (
            <svg viewBox="0 0 24 24" fill="#F4A7C5" className="w-full h-full drop-shadow-sm rotate-45 opacity-75">
              <path d="M12 2C7 2 3 7 3 12c0 6 7 10 9 10s9-4 9-10c0-5-4-10-9-10z" />
            </svg>
          )}
          {item.type === "heart" && (
            <svg viewBox="0 0 24 24" fill="#FFD6E7" className="w-full h-full drop-shadow-sm opacity-60">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {item.type === "sparkle" && (
            <svg viewBox="0 0 24 24" fill="#E9DDFB" className="w-full h-full opacity-70">
              <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
            </svg>
          )}
        </div>
      ))}
      <style jsx>{`
        @keyframes drift {
          0% {
            transform: translateY(0vh) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(45px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

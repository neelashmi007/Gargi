"use client";

import React from "react";
import Image from "next/image";
import { IntroStoryState } from "./introData";

interface GardenSceneProps {
  storyState: IntroStoryState;
  reducedMotion?: boolean;
}

export const GardenScene: React.FC<GardenSceneProps> = ({ storyState, reducedMotion }) => {
  const isDeeperGarden =
    storyState === "following" ||
    storyState === "discovering" ||
    storyState === "presenting" ||
    storyState === "opening" ||
    storyState === "transitioning";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
      {/* Background Layer 1: Opening Rose Garden Archway */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          isDeeperGarden ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`relative w-full h-full ${
            !reducedMotion ? "animate-slow-pan" : ""
          }`}
        >
          <Image
            src="/images/intro/garden_bg.jpg"
            alt="Dreamy 2D anime hot-pink rose garden fairytale background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter saturate-[1.1] brightness-[1.02]"
          />
        </div>
      </div>

      {/* Background Layer 2: Deeper Rose Garden Path */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          isDeeperGarden ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`relative w-full h-full ${
            !reducedMotion ? "animate-slow-zoom" : ""
          }`}
        >
          <Image
            src="/images/intro/garden_path_bg.jpg"
            alt="Cinematic 2D anime rose garden path deeper view with pink ribbons and blooming arches"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter saturate-[1.12] brightness-[1.03]"
          />
        </div>
      </div>

      {/* Foreground Romantic Edge Vignette & Floral Gradient Framing */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-deep-rose/30 via-transparent to-pink-900/15" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-pink-950/40 to-transparent" />
      
      {/* Coquette Delicate Lace Trim at Top & Bottom */}
      <div className="absolute top-0 inset-x-0 h-4 bg-repeat-x opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10px 0, transparent 8px, rgba(255, 252, 248, 0.7) 8.5px)",
          backgroundSize: "20px 10px",
        }}
      />

      <style jsx>{`
        @keyframes slowPan {
          0% {
            transform: scale(1.03) translate(0%, 0%);
          }
          50% {
            transform: scale(1.06) translate(-1.2%, -0.8%);
          }
          100% {
            transform: scale(1.03) translate(0%, 0%);
          }
        }
        @keyframes slowZoom {
          0% {
            transform: scale(1.02) translate(0%, 0%);
          }
          50% {
            transform: scale(1.07) translate(0.8%, -0.6%);
          }
          100% {
            transform: scale(1.02) translate(0%, 0%);
          }
        }
        .animate-slow-pan {
          animation: slowPan 28s ease-in-out infinite alternate;
        }
        .animate-slow-zoom {
          animation: slowZoom 24s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

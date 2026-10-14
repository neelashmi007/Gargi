"use client";

import React, { useState } from "react";
import { AppProvider, useApp } from "@/context/AppContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MusicPlayer } from "@/components/music/MusicPlayer";
import { FloatingPetals } from "@/components/decorations/FloatingPetals";
import { CuteMascot } from "@/components/decorations/CuteMascot";
import { DiscoveriesModal } from "@/components/modals/DiscoveriesModal";
import { ResetConfirmModal } from "@/components/modals/ResetConfirmModal";
import { DiscoveryToast } from "@/components/modals/DiscoveryToast";

const InnerShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { themeMode, resetAllProgress } = useApp();
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);

  // Background atmosphere styling based on themeMode
  const themeClass =
    themeMode === "night"
      ? "bg-slate-950 text-pink-100"
      : themeMode === "sunset"
      ? "bg-gradient-to-b from-[#FFF0F5] via-[#FFE4E1] to-[#E9DDFB]"
      : "bg-blush";

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 relative ${themeClass}`}>
      <FloatingPetals />
      <Navbar
        onOpenJournal={() => setIsJournalOpen(true)}
        onOpenReset={() => setIsResetOpen(true)}
      />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 z-10">
        {children}
      </main>
      <Footer />
      <CuteMascot />
      <MusicPlayer />

      {/* Modals & Toasts */}
      <DiscoveriesModal isOpen={isJournalOpen} onClose={() => setIsJournalOpen(false)} />
      <ResetConfirmModal
        isOpen={isResetOpen}
        onClose={() => setIsResetOpen(false)}
        onConfirm={resetAllProgress}
      />
      <DiscoveryToast onOpenJournal={() => setIsJournalOpen(true)} />
    </div>
  );
};

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppProvider>
      <InnerShell>{children}</InnerShell>
    </AppProvider>
  );
};

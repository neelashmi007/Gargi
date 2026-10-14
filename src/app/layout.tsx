import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "A Little Universe for Gargi 🌸",
  description: "A magical pink fairytale world, blooming rose garden, and library of love letters crafted especially for Gargi.",
  keywords: ["Gargi", "Love Letters", "Rose Garden", "Romantic Fairytale", "Little Universe"],
  authors: [{ name: "Her Devoted Boyfriend" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased selection:bg-rose-pink selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

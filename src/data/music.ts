export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  duration: string;
  src: string; // e.g. "/music/fairytale-waltz.mp3"
  ambientType?: "musicbox" | "rain-piano" | "starlight"; // Web Audio synthesis fallback if file missing
}

export const PLAYLIST_TRACKS: AudioTrack[] = [
  {
    id: "track-1",
    title: "Fairytale Rose Waltz",
    artist: "A Little Universe for Gargi",
    duration: "3:55",
    src: "/music/track-1.mp3",
    ambientType: "musicbox"
  },
  {
    id: "track-2",
    title: "Pink Clouds & Starlight",
    artist: "A Little Universe for Gargi",
    duration: "5:38",
    src: "/music/track-2.mp3",
    ambientType: "starlight"
  },
  {
    id: "track-3",
    title: "Gentle Rain on Rose Petals",
    artist: "A Little Universe for Gargi",
    duration: "3:58",
    src: "/music/track-3.mp3",
    ambientType: "rain-piano"
  },
  {
    id: "track-4",
    title: "Moonlight & Whispered Dreams",
    artist: "A Little Universe for Gargi",
    duration: "3:55",
    src: "/music/track-4.mp3",
    ambientType: "starlight"
  }
];

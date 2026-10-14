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
    title: "Music 1",
    artist: "Music for Gargi",
    duration: "3:55",
    src: "/music/track-1.mp3",
    ambientType: "musicbox"
  },
  {
    id: "track-2",
    title: "Music 2",
    artist: "Music for Gargi",
    duration: "5:38",
    src: "/music/track-2.mp3",
    ambientType: "starlight"
  },
  {
    id: "track-3",
    title: "Music 3",
    artist: "Music for Gargi",
    duration: "3:58",
    src: "/music/track-3.mp3",
    ambientType: "rain-piano"
  },
  {
    id: "track-4",
    title: "Music 4",
    artist: "Music for Gargi",
    duration: "3:55",
    src: "/music/track-4.mp3",
    ambientType: "starlight"
  }
];

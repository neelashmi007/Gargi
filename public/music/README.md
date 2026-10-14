# Music Files for "A Little Universe for Gargi"

Add your own romantic MP3 or audio files to this directory.

## Default Track Mapping
By default, the music player is configured to look for these files:
- `track-1.mp3` - Fairytale Rose Waltz
- `track-2.mp3` - Pink Clouds & Starlight
- `track-3.mp3` - Gentle Rain on Rose Petals

## How to Add Your Music:
1. Place your `.mp3`, `.m4a`, or `.wav` files directly into this `public/music/` folder.
2. If you name them `track-1.mp3`, `track-2.mp3`, and `track-3.mp3`, they will play automatically with zero code changes!
3. If you want custom names, open `src/data/music.ts` and update the `title`, `artist`, and `src` fields
   ```ts
   {
     id: "track-1",
     title: "Your Song Name",
     artist: "Artist Name",
     duration: "3:45",
     src: "/music/your-custom-song.mp3"
   }
   ```

*Note: If no audio file is provided yet, the website includes a built-in soothing Web Audio chime so you and Gargi can enjoy sweet ambient sound right away without broken links or errors.*

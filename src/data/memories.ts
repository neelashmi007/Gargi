export interface RelationshipMemory {
  id: string;
  title: string;
  chapter: string;
  datePrompt: string; // e.g. "Chapter 1: The Beginning"
  place: string;
  mapCoords: { x: number; y: number }; // percentage on illustrated memory map
  photoUrl?: string; // Path under /images/gallery/ or /images/memories/
  photoPlaceholderText: string;
  caption: string;
  personalNote: string;
  associatedLetterId?: string;
  isSecret?: boolean;
  tag: "milestone" | "ordinary-magic" | "cozy" | "adventure";
}

export const MEMORIES_DATA: RelationshipMemory[] = [
  {
    id: "mem-1",
    title: "19 February 2026: The Midnight You Said Yes",
    chapter: "Chapter 1: Our Beginning",
    datePrompt: "19 February 2026",
    place: "Over Text at Midnight",
    mapCoords: { x: 20, y: 35 },
    photoUrl: "/images/memories/memory-1.jpg",
    photoPlaceholderText: "Add a screenshot of our midnight message or a photo from around when we started",
    caption: "Four words that changed my whole world: 'i love you too'.",
    personalNote: "On the night of 18 February 2026, I sent you a message proposing to you. At midnight on 19 February, your reply arrived: 'i love you too'. That moment became our official relationship date, and the beginning of the happiest journey of my life.",
    associatedLetterId: "the-night-you-said-yes",
    tag: "milestone"
  },
  {
    id: "mem-2",
    title: "Our First Hug",
    chapter: "Chapter 2: Gentle Closeness",
    datePrompt: "A Sweet Memory",
    place: "Wrapped in Your Arms",
    mapCoords: { x: 38, y: 25 },
    photoUrl: "/images/memories/memory-2.jpg",
    photoPlaceholderText: "Add a photo together or a keepsake from our early days",
    caption: "The feeling of resting against someone and finally feeling at peace.",
    personalNote: "The first time I hugged you, it felt so deeply comforting. All the background noise of life just quieted down. It was simple, warm, and made me feel like I was right where I belonged.",
    associatedLetterId: "my-favourite-place-is-with-you",
    tag: "cozy"
  },
  {
    id: "mem-3",
    title: "The Attack on Titan Keychain",
    chapter: "Chapter 3: Pure Sunshine",
    datePrompt: "A Little Surprise",
    place: "Your Radiant Smile",
    mapCoords: { x: 55, y: 48 },
    photoUrl: "/images/memories/memory-3.jpg",
    photoPlaceholderText: "Add a photo of Gargi's smile or the Attack on Titan keychain",
    caption: "Your giggles over a little keychain melted my heart completely.",
    personalNote: "When I gave you that Attack on Titan keychain, you giggled so much. Your reaction was the cutest, most heartwarming thing I had ever seen. Seeing your face light up with that genuine, radiant smile is something I will treasure forever.",
    associatedLetterId: "the-little-things-i-notice-about-you",
    tag: "ordinary-magic"
  },
  {
    id: "mem-4",
    title: "Comfort and Cheek Kisses in GLT",
    chapter: "Chapter 4: A Safe Harbor",
    datePrompt: "When We Needed Each Other",
    place: "GLT (General Lecture Theatre)",
    mapCoords: { x: 70, y: 30 },
    photoUrl: "/images/memories/memory-4.jpg",
    photoPlaceholderText: "Add a photo around campus or a quiet moment we shared",
    caption: "Finding shelter and comfort in your arms on a difficult day.",
    personalNote: "I was going through a tough time that day. In GLT, I hugged you tightly because I needed comfort so badly, and kissed your cheeks. In that gentle moment, you became the person I could turn to whenever life felt heavy.",
    associatedLetterId: "my-favourite-place-is-with-you",
    tag: "cozy"
  },
  {
    id: "mem-5",
    title: "How Our Trust and Closeness Grew",
    chapter: "Chapter 5: Trust and Softness",
    datePrompt: "Our Quiet Milestone",
    place: "In Safe Conversations",
    mapCoords: { x: 45, y: 70 },
    photoUrl: "/images/memories/memory-5.jpg",
    photoPlaceholderText: "Add a screenshot of a comforting chat or a cozy evening photo",
    caption: "From shy hesitations to sharing your heart whenever you feel off.",
    personalNote: "At first, you were shy and found it difficult to express what you felt, sometimes shutting me out when things were wrong. But as we learned each other with patience and care, you became comfortable with me. Now, whenever you open up and talk to me when you feel off, I treasure that trust more than anything.",
    associatedLetterId: "you-can-let-your-guard-down-with-me",
    tag: "milestone"
  },
  {
    id: "mem-6",
    title: "Our Playful World of Dudu-Bubu",
    chapter: "Chapter 6: Our Silly Dynamic",
    datePrompt: "Everyday Warmth",
    place: "Our Warm Bubble",
    mapCoords: { x: 80, y: 65 },
    photoUrl: "/images/memories/memory-6.jpg",
    photoPlaceholderText: "Add a cute doodle, Dudu-Bubu illustration, or silly selfie",
    caption: "'naaaa ami kotha bobbona' with your cute puppy-eye emojis.",
    personalNote: "Our sweet everyday world of Dudu-Bubu cuddles, you sending puppy-eye emojis, and pretending to be angry with 'naaaa ami kotha bobbona'. You think you're being so dramatic, but to me, my pretty little kitten is just the cutest girl in existence.",
    associatedLetterId: "for-my-favourite-kitten",
    tag: "ordinary-magic"
  },
  {
    id: "mem-7",
    title: "4 October: A Private Milestone",
    chapter: "Secret Chapter: Sacred Closeness",
    datePrompt: "4 October",
    place: "Our Private Sanctuary",
    mapCoords: { x: 28, y: 80 },
    photoUrl: "/images/memories/memory-7.jpg",
    photoPlaceholderText: "A private keepsake kept safe between us",
    caption: "Our first makeout and taking our first step into intimacy together.",
    personalNote: "4 October is a private milestone held with deep tenderness. It was our first makeout and the first time we explored that kind of closeness together. What made it so meaningful was the quiet trust, care, and vulnerability we shared.",
    associatedLetterId: "a-letter-hidden-among-the-roses",
    isSecret: true,
    tag: "milestone"
  },
  {
    id: "mem-8",
    title: "Growing Old in Every Life",
    chapter: "Chapter 7: Our Tomorrow",
    datePrompt: "Looking Toward Forever",
    place: "Our Future Home",
    mapCoords: { x: 50, y: 88 },
    photoUrl: "/images/memories/memory-8.jpg",
    photoPlaceholderText: "Add a picture of a dream home, a cozy vision, or a wish for the future",
    caption: "I want to marry you, have a home, raise children, and grow old with you in every life.",
    personalNote: "My greatest hope is to build a life with you—to marry you, create our own home, have children together, and hold your hand through every chapter. In this life, and in every life to come, I will always choose you.",
    associatedLetterId: "the-home-i-dream-of-building-with-you",
    tag: "adventure"
  }
];

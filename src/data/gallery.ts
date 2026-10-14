export interface GalleryChapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  themeColor: string;
}

export const GALLERY_CHAPTERS: GalleryChapter[] = [
  {
    id: "before-i-knew-you",
    number: 1,
    title: "Before I Knew You",
    subtitle: "Her Childhood & School Years",
    description: "Looking through an old scrapbook, discovering all the innocent, sweet, little versions of the girl I love.",
    themeColor: "from-amber-100 to-rose-100",
  },
  {
    id: "spotlight",
    number: 2,
    title: "The Girl Who Steals the Spotlight",
    subtitle: "Laughter, Playfulness & Radiance",
    description: "Spontaneous, alive, and glowing—the genuine, crinkly-eyed laughter that naturally draws every gaze.",
    themeColor: "from-pink-100 to-rose-200",
  },
  {
    id: "college-era",
    number: 3,
    title: "Her College Era",
    subtitle: "Growing Into Who She Is Today",
    description: "Freshers excitement, first medical conferences, and sunny afternoons at College Square.",
    themeColor: "from-purple-100 to-pink-100",
  },
  {
    id: "doctor-i-admire",
    number: 4,
    title: "The Doctor I Admire",
    subtitle: "White Coat, Stethoscope & Healing Hands",
    description: "Quiet pride and deep affection for the medical student with a healing heart and a brave mind.",
    themeColor: "from-sky-100 to-pink-100",
  },
  {
    id: "so-gargi",
    number: 5,
    title: "Little Things That Are So Her",
    subtitle: "Unfiltered, Natural & Intimate",
    description: "Unposed moments and no-makeup home selfies she sent me—the quiet, honest side of her she trusts me with.",
    themeColor: "from-rose-100 to-purple-100",
  },
  {
    id: "done-for-me",
    number: 6,
    title: "Little Things She Does for Me",
    subtitle: "Quiet Acts of Tenderness",
    description: "Tying a knot because I didn't know how, and holding flowers with that soft, unforgettable smile.",
    themeColor: "from-pink-100 to-amber-100",
  },
  {
    id: "memories-together",
    number: 7,
    title: "Our Memories Together",
    subtitle: "The Emotional Centre of Us",
    description: "Moments, warmth, and milestones that belong to us—growing closer with every step.",
    themeColor: "from-rose-200 to-pink-200",
  },
  {
    id: "days-with-you",
    number: 8,
    title: "Days With You",
    subtitle: "Celebrations & Shared Happiness",
    description: "Having her present by my side at my birthday and shared occasions made every celebration unforgettable.",
    themeColor: "from-amber-100 to-pink-200",
  },
];

export interface GalleryItem {
  id: string;
  src: string;
  chapterId: string;
  chapterTitle: string;
  title: string;
  caption: string;
  datePrompt?: string;
  aspectRatio: "portrait" | "landscape" | "square";
  isFeatured?: boolean;
  photoDescription: string;
  placeholderTheme: {
    bgGradient: string;
    icon: "rose" | "heart" | "sparkle" | "camera" | "bow" | "flower";
    suggestion: string;
  };
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // ==========================================
  // CHAPTER 1: Before I Knew You
  // ==========================================
  {
    id: "photo-childhood-baby",
    src: "/images/gallery/gallery1.jpg",
    chapterId: "before-i-knew-you",
    chapterTitle: "Chapter 1: Before I Knew You",
    title: "A Little Bundle of Wonder",
    caption: "Long before I ever entered your life, this sweet little soul was already bringing light into the world.",
    datePrompt: "Baby Days",
    aspectRatio: "portrait",
    photoDescription: "Gargi's baby photograph",
    placeholderTheme: {
      bgGradient: "from-amber-50 via-rose-50 to-pink-100",
      icon: "heart",
      suggestion: "Place Gargi's baby photograph here (e.g. childhood-baby.jpg)",
    },
  },
  {
    id: "photo-childhood-toddler",
    src: "/images/gallery/gallery2.jpg",
    chapterId: "before-i-knew-you",
    chapterTitle: "Chapter 1: Before I Knew You",
    title: "Tiny Steps, Big World",
    caption: "Toddler Gargi exploring everything with innocent curiosity and chubby cheeks.",
    datePrompt: "Toddler Years",
    aspectRatio: "portrait",
    photoDescription: "Gargi as a toddler",
    placeholderTheme: {
      bgGradient: "from-pink-100 via-rose-100 to-amber-50",
      icon: "sparkle",
      suggestion: "Place Gargi's toddler photograph here (e.g. childhood-toddler.jpg)",
    },
  },
  {
    id: "photo-childhood-flower",
    src: "/images/gallery/gallery3.jpg",
    chapterId: "before-i-knew-you",
    chapterTitle: "Chapter 1: Before I Knew You",
    title: "The Girl Holding a Flower",
    caption: "One of my absolute favourite photographs of you. The little girl holding a flower, looking right at the camera with gentle, timeless wonder.",
    datePrompt: "School Days Keepsake",
    aspectRatio: "portrait",
    isFeatured: true,
    photoDescription: "School photograph of Gargi holding a flower",
    placeholderTheme: {
      bgGradient: "from-rose-100 via-pink-100 to-rose-200",
      icon: "flower",
      suggestion: "Place the school photograph of Gargi holding a flower here (e.g. childhood-flower.jpg)",
    },
  },
  {
    id: "photo-school-life",
    src: "/images/gallery/gallery4.jpg",
    chapterId: "before-i-knew-you",
    chapterTitle: "Chapter 1: Before I Knew You",
    title: "School Days & Quiet Smiles",
    caption: "Walking school corridors with ribbons in your hair, long before our paths crossed.",
    datePrompt: "School Life",
    aspectRatio: "portrait",
    photoDescription: "Gargi during her school years",
    placeholderTheme: {
      bgGradient: "from-pink-50 via-purple-50 to-rose-100",
      icon: "camera",
      suggestion: "Place a school-life photograph of Gargi here (e.g. school-days.jpg)",
    },
  },

  // ==========================================
  // CHAPTER 2: The Girl Who Steals the Spotlight
  // ==========================================
  {
    id: "photo-spotlight-laugh",
    src: "/images/gallery/gallery5.jpg",
    chapterId: "spotlight",
    chapterTitle: "Chapter 2: The Girl Who Steals the Spotlight",
    title: "That Unstoppable Laughter",
    caption: "Mid-laugh, completely lost in the moment. That crinkly-eyed smile melts every bit of stress right out of me.",
    datePrompt: "Pure Joy",
    aspectRatio: "landscape",
    isFeatured: true,
    photoDescription: "Candid photograph of Gargi laughing freely",
    placeholderTheme: {
      bgGradient: "from-pink-100 via-purple-100 to-rose-200",
      icon: "sparkle",
      suggestion: "Place a photograph of Gargi laughing spontaneously here (e.g. spotlight-laughter.jpg)",
    },
  },
  {
    id: "photo-spotlight-friend",
    src: "/images/gallery/gallery6.jpg",
    chapterId: "spotlight",
    chapterTitle: "Chapter 2: The Girl Who Steals the Spotlight",
    title: "Naturally Stealing the Spotlight",
    caption: "Standing with friends and naturally drawing every gaze. You just radiate effortless warmth.",
    datePrompt: "Effortless Glow",
    aspectRatio: "landscape",
    photoDescription: "Gargi with friends, naturally drawing the spotlight",
    placeholderTheme: {
      bgGradient: "from-rose-100 via-pink-100 to-amber-50",
      icon: "camera",
      suggestion: "Place a photograph where Gargi naturally steals the spotlight (e.g. spotlight-friend.jpg)",
    },
  },
  {
    id: "photo-spotlight-playful",
    src: "/images/gallery/gallery7.jpg",
    chapterId: "spotlight",
    chapterTitle: "Chapter 2: The Girl Who Steals the Spotlight",
    title: "Playful Sparkle",
    caption: "That mischievous, sweet glint in your eyes when you're about to make everyone burst out laughing.",
    datePrompt: "Silly Moment",
    aspectRatio: "portrait",
    photoDescription: "Playful candid of Gargi being silly and charming",
    placeholderTheme: {
      bgGradient: "from-purple-100 via-pink-100 to-rose-100",
      icon: "heart",
      suggestion: "Place a playful or silly candid of Gargi here (e.g. spotlight-playful.jpg)",
    },
  },

  // ==========================================
  // CHAPTER 3: Her College Era
  // ==========================================
  {
    id: "photo-college-freshers",
    src: "/images/gallery/gallery8.jpg",
    chapterId: "college-era",
    chapterTitle: "Chapter 3: Her College Era",
    title: "College Freshers",
    caption: "Dressed up, stepping into a brand-new world with excitement, hope, and fresh beginnings.",
    datePrompt: "Freshers Welcome",
    aspectRatio: "portrait",
    isFeatured: true,
    photoDescription: "Gargi at her college freshers event",
    placeholderTheme: {
      bgGradient: "from-rose-100 via-pink-100 to-purple-200",
      icon: "sparkle",
      suggestion: "Place a college freshers photograph of Gargi here (e.g. college-freshers.jpg)",
    },
  },
  {
    id: "photo-medical-conference",
    src: "/images/gallery/gallery9.jpg",
    chapterId: "college-era",
    chapterTitle: "Chapter 3: Her College Era",
    title: "First Medical Conference",
    caption: "Attending her very first medical conference. Watching her pursue her passion with focus makes me so proud.",
    datePrompt: "First Medical Conference",
    aspectRatio: "portrait",
    photoDescription: "Gargi attending her first medical conference",
    placeholderTheme: {
      bgGradient: "from-sky-100 via-pink-50 to-rose-100",
      icon: "camera",
      suggestion: "Place a photograph from her first medical conference here (e.g. medical-conference.jpg)",
    },
  },
  {
    id: "photo-college-square",
    src: "/images/gallery/gallery10.jpg",
    chapterId: "college-era",
    chapterTitle: "Chapter 3: Her College Era",
    title: "Afternoons at College Square",
    caption: "Strolling through College Square, surrounded by heritage, books, and gentle city breezes.",
    datePrompt: "College Square",
    aspectRatio: "portrait",
    photoDescription: "Gargi at College Square",
    placeholderTheme: {
      bgGradient: "from-amber-50 via-rose-50 to-pink-100",
      icon: "camera",
      suggestion: "Place a photograph of Gargi at College Square here (e.g. college-square.jpg)",
    },
  },

  // ==========================================
  // CHAPTER 4: The Doctor I Admire
  // ==========================================
  {
    id: "photo-doctor-village-trip",
    src: "/images/gallery/gallery11.jpg",
    chapterId: "doctor-i-admire",
    chapterTitle: "Chapter 4: The Doctor I Admire",
    title: "White Coat & Stethoscope",
    caption: "On our first Community Medicine village trip. Seeing you in your white coat, stethoscope ready, caring for people—I looked at you with endless pride.",
    datePrompt: "First Community Medicine Village Trip",
    aspectRatio: "portrait",
    isFeatured: true,
    photoDescription: "Gargi wearing her white coat and stethoscope during the village trip",
    placeholderTheme: {
      bgGradient: "from-sky-100 via-pink-100 to-rose-200",
      icon: "rose",
      suggestion: "Place the village trip photograph in white coat & stethoscope here (e.g. village-trip-stethoscope.jpg)",
    },
  },
  {
    id: "photo-doctor-fieldwork",
    src: "/images/gallery/gallery12.jpg",
    chapterId: "doctor-i-admire",
    chapterTitle: "Chapter 4: The Doctor I Admire",
    title: "Fieldwork with a Gentle Heart",
    caption: "Navigating rural rounds and patient discussions. Medicine looks so noble and gentle on you.",
    datePrompt: "Community Medicine Posting",
    aspectRatio: "portrait",
    photoDescription: "Gargi during Community Medicine village posting",
    placeholderTheme: {
      bgGradient: "from-emerald-50 via-pink-50 to-sky-100",
      icon: "camera",
      suggestion: "Place another photograph from the village trip here (e.g. village-trip-fieldwork.jpg)",
    },
  },

  // ==========================================
  // CHAPTER 5: Little Things That Are So Her
  // ==========================================
  {
    id: "photo-home-selfie-1",
    src: "/images/gallery/gallery13.jpg",
    chapterId: "so-gargi",
    chapterTitle: "Chapter 5: Little Things That Are So Her",
    title: "Home Selfie, Just for Me",
    caption: "No makeup, comfortable clothes, and gentle eyes. The pure, unfiltered version of you that you share with me privately.",
    datePrompt: "Sent With Love",
    aspectRatio: "portrait",
    isFeatured: true,
    photoDescription: "A natural, unmade-up home selfie Gargi sent him",
    placeholderTheme: {
      bgGradient: "from-rose-100 via-pink-50 to-purple-100",
      icon: "heart",
      suggestion: "Place an unmade-up home selfie she sent you here (e.g. home-selfie-1.jpg)",
    },
  },
  {
    id: "photo-casual-candid",
    src: "/images/gallery/gallery14.jpg",
    chapterId: "so-gargi",
    chapterTitle: "Chapter 5: Little Things That Are So Her",
    title: "Quiet Everyday Magic",
    caption: "Unaware of the camera, lost in thought. You are lovely in the most effortless, quiet way.",
    datePrompt: "Ordinary Afternoon",
    aspectRatio: "portrait",
    photoDescription: "Candid everyday photo of Gargi being herself",
    placeholderTheme: {
      bgGradient: "from-amber-50 via-rose-50 to-pink-100",
      icon: "sparkle",
      suggestion: "Place a casual everyday candid of Gargi here (e.g. casual-candid.jpg)",
    },
  },

  // ==========================================
  // CHAPTER 6: Little Things She Does for Me
  // ==========================================
  {
    id: "photo-tying-knot",
    src: "/images/gallery/gallery15.jpg",
    chapterId: "done-for-me",
    chapterTitle: "Chapter 6: Little Things She Does for Me",
    title: "Tying the Knot for Me",
    caption: "Patiently tying a knot for me because I didn't know how. You quietly took over and fixed it, and my heart melted completely.",
    datePrompt: "Gentle Care",
    aspectRatio: "portrait",
    isFeatured: true,
    photoDescription: "Gargi tying a knot for him",
    placeholderTheme: {
      bgGradient: "from-pink-100 via-rose-100 to-amber-100",
      icon: "bow",
      suggestion: "Place the photograph of Gargi tying a knot for you here (e.g. tying-knot.jpg)",
    },
  },
  {
    id: "photo-holding-bouquet",
    src: "/images/gallery/gallery16.jpg",
    chapterId: "done-for-me",
    chapterTitle: "Chapter 6: Little Things She Does for Me",
    title: "Holding the Bouquet",
    caption: "Cradling the flowers I brought for you. Your smile behind those petals made the blossoms pale in comparison.",
    datePrompt: "Flowers for Princess",
    aspectRatio: "portrait",
    isFeatured: true,
    photoDescription: "Gargi holding the bouquet he brought her",
    placeholderTheme: {
      bgGradient: "from-rose-100 via-pink-200 to-rose-200",
      icon: "flower",
      suggestion: "Place the photograph of Gargi holding the bouquet here (e.g. holding-bouquet.jpg)",
    },
  },

  // ==========================================
  // CHAPTER 7: Our Memories Together
  // ==========================================
  {
    id: "photo-couple-moment",
    src: "/images/gallery/gallery17.jpg",
    chapterId: "memories-together",
    chapterTitle: "Chapter 7: Our Memories Together",
    title: "Together in Our Universe",
    caption: "Side by side, exactly where we belong. Every moment with you feels like home.",
    datePrompt: "Our Moments",
    aspectRatio: "portrait",
    isFeatured: true,
    photoDescription: "Photograph of us together",
    placeholderTheme: {
      bgGradient: "from-rose-200 via-pink-100 to-purple-200",
      icon: "heart",
      suggestion: "Place a favourite photograph of you two together here (e.g. couple-moment-1.jpg)",
    },
  },
  {
    id: "photo-couple-hug",
    src: "/images/gallery/gallery18.jpg",
    chapterId: "memories-together",
    chapterTitle: "Chapter 7: Our Memories Together",
    title: "Safe in Each Other's Arms",
    caption: "Holding each other close. The peace of knowing I have you by my side.",
    datePrompt: "Comfort & Peace",
    aspectRatio: "portrait",
    photoDescription: "Photograph of us hugging and smiling together",
    placeholderTheme: {
      bgGradient: "from-pink-100 via-purple-100 to-rose-100",
      icon: "heart",
      suggestion: "Place a warm hug or close photo of you two here (e.g. couple-hug.jpg)",
    },
  },
  {
    id: "photo-couple-walk",
    src: "/images/gallery/gallery19.jpg",
    chapterId: "memories-together",
    chapterTitle: "Chapter 7: Our Memories Together",
    title: "Every Step With You",
    caption: "Hand in hand, matching our strides through ordinary days made golden.",
    datePrompt: "Walking Together",
    aspectRatio: "portrait",
    photoDescription: "Photograph of us on an outing together",
    placeholderTheme: {
      bgGradient: "from-amber-50 via-rose-100 to-pink-100",
      icon: "camera",
      suggestion: "Place a photo from an outing or walk together here (e.g. couple-walk.jpg)",
    },
  },

  // ==========================================
  // CHAPTER 8: Days With You
  // ==========================================
  {
    id: "photo-birthday-party",
    src: "/images/gallery/gallery20.jpg",
    chapterId: "days-with-you",
    chapterTitle: "Chapter 8: Days With You",
    title: "My Birthday With You",
    caption: "Having you there at my birthday celebration made it the happiest, warmest birthday I have ever had.",
    datePrompt: "My Birthday Celebration",
    aspectRatio: "portrait",
    isFeatured: true,
    photoDescription: "Gargi celebrating at his birthday party",
    placeholderTheme: {
      bgGradient: "from-amber-100 via-pink-100 to-rose-200",
      icon: "sparkle",
      suggestion: "Place the photograph of Gargi at your birthday party here (e.g. my-birthday-party.jpg)",
    },
  },
  {
    id: "photo-shared-celebration",
    src: "/images/gallery/gallery21.jpg",
    chapterId: "days-with-you",
    chapterTitle: "Chapter 8: Days With You",
    title: "Moments of Joy",
    caption: "Laughing together, celebrating little victories, and making memories to keep for a lifetime.",
    datePrompt: "Shared Celebration",
    aspectRatio: "portrait",
    photoDescription: "Photograph from a shared occasion",
    placeholderTheme: {
      bgGradient: "from-pink-100 via-rose-50 to-purple-100",
      icon: "camera",
      suggestion: "Place a photograph from a celebration or special day together here (e.g. shared-celebration.jpg)",
    },
  },
];

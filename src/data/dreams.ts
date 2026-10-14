export interface DreamItem {
  id: string;
  title: string;
  description: string;
  category: "admiration" | "character" | "trust" | "milestone" | "ordinary-magic" | "future" | "forever";
  iconName: "cloud" | "star" | "rose" | "sparkles" | "coffee" | "camera" | "book-heart" | "compass" | "heart";
  isCustom?: boolean;
}

export const INITIAL_DREAMS: DreamItem[] = [
  {
    id: "obs-1",
    title: "The Quiet Warmth of Your Smile",
    description: "There is a particular gentleness to your smile that immediately softens my day. It isn't loud or staged; it is a quiet, genuine warmth that reminds me why I feel so lucky to be close to you.",
    category: "admiration",
    iconName: "star",
  },
  {
    id: "obs-2",
    title: "The Sound of Your Laughter",
    description: "I will always remember how much you giggled when I surprised you with the Attack on Titan keychain. Hearing your laughter unfold naturally, with no hesitation and pure delight, is one of the sweetest sounds I know.",
    category: "ordinary-magic",
    iconName: "sparkles",
  },
  {
    id: "obs-3",
    title: "Your Quiet Determination",
    description: "One of the things I respect most about you is how resolute you are. When you set your mind on a goal, you carry yourself with quiet perseverance. It's a strength that belongs entirely to you, and I admire it deeply.",
    category: "character",
    iconName: "compass",
  },
  {
    id: "obs-4",
    title: "The Way You Listen and Care",
    description: "You treat me with a gentle kindness that I never take for granted. You listen to me with real attention and patience, creating a space where I always feel heard, understood, and at peace.",
    category: "character",
    iconName: "heart",
  },
  {
    id: "obs-5",
    title: "The Trust Behind Your Softness",
    description: "When we first began, you were shy and kept your thoughts guarded. Watching our connection grow into a place where you feel safe enough to share what's on your mind when you feel off is something I cherish with my whole heart.",
    category: "trust",
    iconName: "book-heart",
  },
  {
    id: "obs-6",
    title: "The Medical Student in Her White Coat",
    description: "Seeing you on our first Community Medicine village trip in your white coat and stethoscope filled me with immense pride. Watching you dedicate yourself to your medical studies and work toward healing others is inspiring to witness.",
    category: "milestone",
    iconName: "rose",
  },
  {
    id: "obs-7",
    title: "The Little Girl Holding a Flower",
    description: "In that school photograph of you holding a flower, long before our paths crossed, I see the thoughtful little girl who lived a whole life before meeting me. Learning about that girl and loving who she grew into is a quiet wonder.",
    category: "ordinary-magic",
    iconName: "camera",
  },
  {
    id: "obs-8",
    title: "The Unfiltered Moments You Share",
    description: "The simple, unposed home selfies you send me without any makeup or pretense are some of my favourites. They represent the quiet intimacy of ordinary days—the comfort of letting someone see you just as you are.",
    category: "admiration",
    iconName: "coffee",
  },
  {
    id: "obs-9",
    title: "A Hope of Growing Old Together",
    description: "My greatest hope for the future is simple and heartfelt: to build a home with you, share quiet years together, have children one day, and hold your hand as we grow old. In this life, and in every life, that is the tomorrow I wish for.",
    category: "future",
    iconName: "cloud",
  },
];

export type IntroStoryState =
  | "entering"
  | "meeting"
  | "following"
  | "discovering"
  | "presenting"
  | "opening"
  | "transitioning";

export interface StoryStateConfig {
  id: IntroStoryState;
  ambientLine?: string;
  kittenDialogue: string[];
  actionLabel?: string;
  bgImage: string;
  kittenPose: "greeting" | "curious" | "presenting";
  cameraEffect: "slow-zoom" | "pan-right" | "push-in" | "center-focus";
}

export const INTRO_STORY_STEPS: Record<IntroStoryState, StoryStateConfig> = {
  entering: {
    id: "entering",
    ambientLine: "Somewhere in a little garden full of roses...",
    kittenDialogue: [
      "Meow? You're the girl I've been waiting for!",
    ],
    actionLabel: "Step into the garden 🌸",
    bgImage: "/images/intro/garden_bg.jpg",
    kittenPose: "greeting",
    cameraEffect: "slow-zoom",
  },
  meeting: {
    id: "meeting",
    kittenDialogue: [
      "Hi, Gargi! I've been looking for you all morning!",
      "Will you come with me? I have something very special to show you.",
    ],
    actionLabel: "Follow the kitten 🐾",
    bgImage: "/images/intro/garden_bg.jpg",
    kittenPose: "greeting",
    cameraEffect: "center-focus",
  },
  following: {
    id: "following",
    kittenDialogue: [
      "This way, Gargi! Careful... the roses are a little ticklish!",
      "Look at the petals dancing in the sunlight just for you.",
    ],
    actionLabel: "Wander deeper along the path ✨",
    bgImage: "/images/intro/garden_path_bg.jpg",
    kittenPose: "greeting",
    cameraEffect: "pan-right",
  },
  discovering: {
    id: "discovering",
    kittenDialogue: [
      "Oh! What's this tucked beneath the rose blossoms?",
      "Wait... I think this is for you, Gargi!",
    ],
    actionLabel: "See what kitten found 💌",
    bgImage: "/images/intro/garden_path_bg.jpg",
    kittenPose: "curious",
    cameraEffect: "push-in",
  },
  presenting: {
    id: "presenting",
    kittenDialogue: [
      "Someone very special wanted you to have this.",
      "He sealed it with all his love.",
    ],
    actionLabel: "Touch the heart seal to open 💌",
    bgImage: "/images/intro/garden_path_bg.jpg",
    kittenPose: "presenting",
    cameraEffect: "center-focus",
  },
  opening: {
    id: "opening",
    kittenDialogue: [
      "*Purrrrr!* Open it, Baby! It's your personal fairytale.",
    ],
    actionLabel: "Enter our little universe together 💖",
    bgImage: "/images/intro/garden_path_bg.jpg",
    kittenPose: "presenting",
    cameraEffect: "center-focus",
  },
  transitioning: {
    id: "transitioning",
    kittenDialogue: [],
    bgImage: "/images/intro/garden_path_bg.jpg",
    kittenPose: "presenting",
    cameraEffect: "center-focus",
  },
};

export const KITTEN_PURR_REACTIONS = [
  "*Softly boops nose against your hand* Meow! 🌸",
  "Purrrrr! Gargi is the most adored girl in the world! 💕",
  "*Happy tail swish* You're here with me! ✨",
  "Warm cuddles and pink rose petals for you! 🐾",
];

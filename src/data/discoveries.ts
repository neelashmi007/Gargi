export interface DiscoveryItem {
  id: string;
  name: string;
  hint: string;
  location: string;
  revealedMessage: string;
  rewardType: "badge" | "note" | "secret-letter" | "compliment";
  icon: "cat" | "rose" | "star" | "heart" | "envelope" | "sparkles";
}

export const DISCOVERIES_LIST: DiscoveryItem[] = [
  {
    id: "disc-sleeping-cat",
    name: "The Sleeping Garden Kitten",
    hint: "Look for a sleepy kitten resting near the garden path or navigation bar.",
    location: "World Map & Garden",
    revealedMessage: "You gently petted the sleeping kitten! It purred and nudged a note into your hand: 'Princess Gargi is the sweetest soul in the galaxy.'",
    rewardType: "compliment",
    icon: "cat"
  },
  {
    id: "disc-golden-rose",
    name: "The Velvet Rose Bloom",
    hint: "Water or bloom enough roses in the interactive garden.",
    location: "Rose Garden",
    revealedMessage: "The golden rose burst into full bloom, revealing a secret love note: 'My love for you will never fade.'",
    rewardType: "note",
    icon: "rose"
  },
  {
    id: "disc-hidden-star",
    name: "The Wishing Constellation",
    hint: "Click on the shining star in the sky or observatory.",
    location: "Starry Sky / Dreams",
    revealedMessage: "You connected the stars! The constellation spelled out: 'G A R G I' with a crown above it.",
    rewardType: "badge",
    icon: "star"
  },
  {
    id: "disc-footer-heart",
    name: "The Secret Heart in the Margin",
    hint: "Check the very bottom corner of the world footer.",
    location: "Footer",
    revealedMessage: "You tapped the tiny secret heart! A bonus kiss was delivered to your forehead: 'Mwah! Caught you exploring!'",
    rewardType: "compliment",
    icon: "heart"
  },
  {
    id: "disc-scrapbook-stamp",
    name: "The Vintage Postage Stamp",
    hint: "Inspect the delicate postage stamp on the scrapbook spread.",
    location: "Scrapbook & Memories",
    revealedMessage: "Underneath the vintage stamp, you found: 'Official postage: Paid in full with unlimited cuddles.'",
    rewardType: "note",
    icon: "envelope"
  },
  {
    id: "disc-secret-letter",
    name: "The Hidden Rose Letter",
    hint: "Unlock the secret letter tucked between velvet petals in the Letters Library.",
    location: "Love Letters",
    revealedMessage: "Unlocked 'A Letter Hidden Among the Roses' in your Library!",
    rewardType: "secret-letter",
    icon: "sparkles"
  }
];

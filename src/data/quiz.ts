export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    id: string;
    text: string;
    isCorrect?: boolean; // In our sweet quiz, all tender answers are celebrated or one is especially cute
    sweetReaction: string;
  }[];
  boyfriendNote: string;
}

export const LOVE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is Gargi's official, undisputed title in this little universe?",
    subtitle: "Just for fun, no wrong feelings!",
    options: [
      { id: "a", text: "Baby", isCorrect: true, sweetReaction: "My sweet baby, always and forever!" },
      { id: "b", text: "Pretty Princess", isCorrect: true, sweetReaction: "The one and only Princess of my heart!" },
      { id: "c", text: "Cute Kitten", isCorrect: true, sweetReaction: "The most adorable kitten to ever purr!" },
      { id: "d", text: "All of the above & more!", isCorrect: true, sweetReaction: "Correct! You hold every precious royal title!" }
    ],
    boyfriendNote: "Every one of those names was picked because you are so tender and special to me."
  },
  {
    id: 2,
    question: "What is the certified remedy when Princess is having a difficult, tiring day?",
    subtitle: "What does the boyfriend protocol prescribe?",
    options: [
      { id: "a", text: "A super fluffy warm blanket & zero demands", isCorrect: true, sweetReaction: "Total sanctuary mode activated!" },
      { id: "b", text: "A warm drink and gentle head pats", isCorrect: true, sweetReaction: "Soft soothing cuddles on the way!" },
      { id: "c", text: "Quiet company without having to explain anything", isCorrect: true, sweetReaction: "You never have to justify resting." },
      { id: "d", text: "A massive bundle of cozy love and sweet reassurance", isCorrect: true, sweetReaction: "The grand combination treatment!" }
    ],
    boyfriendNote: "You are allowed to have bad days, Baby. You never have to earn my gentleness."
  },
  {
    id: 3,
    question: "Which flower will forever bloom in this digital universe for you?",
    subtitle: "Your all-time favourite!",
    options: [
      { id: "a", text: "A gentle blush pink rose", isCorrect: true, sweetReaction: "Soft, delicate, and glowing!" },
      { id: "b", text: "A deep velvet magenta rose", isCorrect: true, sweetReaction: "Rich and passionate!" },
      { id: "c", text: "A sparkling fairy rose", isCorrect: true, sweetReaction: "Full of magic and starlight!" },
      { id: "d", text: "An entire garden of blooming roses just for Gargi", isCorrect: true, sweetReaction: "A whole enchanted garden, just as you deserve!" }
    ],
    boyfriendNote: "Roses will never wither here, just like my feelings for you."
  },
  {
    id: 4,
    question: "When you let me take the lead and decide things, what is the best part?",
    subtitle: "Celebrating our dynamic of mutual trust",
    options: [
      { id: "a", text: "Not having to make decisions when your brain is tired", isCorrect: true, sweetReaction: "Sit back and let me handle it!" },
      { id: "b", text: "Feeling looked after, protected, and spoiled", isCorrect: true, sweetReaction: "You deserve total pampering." },
      { id: "c", text: "Knowing your trust is handled with care and respect", isCorrect: true, sweetReaction: "Your trust is sacred to me." },
      { id: "d", text: "All of the cozy relief that comes with it", isCorrect: true, sweetReaction: "Pure comfort and mutual affection!" }
    ],
    boyfriendNote: "I love taking care of the details so you can simply relax and feel safe."
  },
  {
    id: 5,
    question: "What is the true measure of how much you are loved?",
    subtitle: "The final question of our playful quiz",
    options: [
      { id: "a", text: "To the furthest stars and back", isCorrect: true, sweetReaction: "Past every galaxy!" },
      { id: "b", text: "In every quiet morning and starry night", isCorrect: true, sweetReaction: "In every single heartbeat!" },
      { id: "c", text: "More than any website or letter could ever contain", isCorrect: true, sweetReaction: "Pixels will never be enough!" },
      { id: "d", text: "Infinitely, unconditionally, and proudly", isCorrect: true, sweetReaction: "A 100% perfect truth, Gargi." }
    ],
    boyfriendNote: "You scored 100% on being the most loved girl in this universe! (Not that it was ever in doubt!)"
  }
];

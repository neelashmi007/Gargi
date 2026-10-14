export type MessageCategory =
  | "miss-me"
  | "reassurance"
  | "hard-day"
  | "want-to-smile"
  | "confidence"
  | "feel-adored"
  | "future"
  | "cute";

export interface DailyMessage {
  id: string;
  category: MessageCategory;
  categoryLabel: string;
  text: string;
  signoff: string;
}

export const MESSAGE_CATEGORIES: { id: MessageCategory; label: string; icon: string }[] = [
  { id: "miss-me", label: "When You Miss Me", icon: "cloud" },
  { id: "reassurance", label: "Need Reassurance", icon: "shield-heart" },
  { id: "hard-day", label: "Heavy or Tired Days", icon: "umbrella" },
  { id: "want-to-smile", label: "Want to Smile", icon: "sun" },
  { id: "confidence", label: "Studies & Focus", icon: "sparkles" },
  { id: "feel-adored", label: "My Pretty Kitten", icon: "crown" },
  { id: "future", label: "Quiet Tomorrow", icon: "stars" },
  { id: "cute", label: "Silly & Playful", icon: "cat" },
];

export const DAILY_MESSAGES: DailyMessage[] = [
  // ==========================================
  // 1. WHEN YOU MISS ME
  // ==========================================
  {
    id: "dm-1",
    category: "miss-me",
    categoryLabel: "When You Miss Me",
    text: "Whenever distance feels a little too wide today, take a slow breath. I am thinking of you right now, holding you in my thoughts just as gently as always.",
    signoff: "Close to your heart.",
  },
  {
    id: "dm-2",
    category: "miss-me",
    categoryLabel: "When You Miss Me",
    text: "I was looking at one of the quiet home selfies you sent me earlier. Seeing your soft, sleepy face always makes whatever room I am in feel calmer.",
    signoff: "Carrying you with me.",
  },
  {
    id: "dm-3",
    category: "miss-me",
    categoryLabel: "When You Miss Me",
    text: "You don't have to wait for something big to happen before reaching out. Even a silent presence or a single word is enough for me.",
    signoff: "Always right here.",
  },
  {
    id: "dm-4",
    category: "miss-me",
    categoryLabel: "When You Miss Me",
    text: "On days when we can't be in the same room, I catch myself smiling at the little things—like that Attack on Titan keychain or the memory of you laughing.",
    signoff: "Thinking of your smile.",
  },
  {
    id: "dm-5",
    category: "miss-me",
    categoryLabel: "When You Miss Me",
    text: "Whenever you feel alone today, imagine my hand slipping into yours. That gentle warmth between our fingers is always real.",
    signoff: "Holding your hand in spirit.",
  },

  // ==========================================
  // 2. NEED REASSURANCE
  // ==========================================
  {
    id: "dm-6",
    category: "reassurance",
    categoryLabel: "Need Reassurance",
    text: "My care for you is completely unconditional. You don't have to be in a good mood, you don't have to be energetic, and you never have to earn my love.",
    signoff: "Here without conditions.",
  },
  {
    id: "dm-7",
    category: "reassurance",
    categoryLabel: "Need Reassurance",
    text: "It took time for us to build the trust we have now, and I treasure it deeply. Whenever something feels off, you can always tell me. No judgment, no rush.",
    signoff: "Your safe space.",
  },
  {
    id: "dm-8",
    category: "reassurance",
    categoryLabel: "Need Reassurance",
    text: "You are allowed to take your time to process things. If you feel quiet or overwhelmed, you don't have to force an explanation. I will be here when you are ready.",
    signoff: "Patiently by your side.",
  },
  {
    id: "dm-9",
    category: "reassurance",
    categoryLabel: "Need Reassurance",
    text: "You never have to pretend everything is fine around me. Being vulnerable with each other is one of the most precious things we share.",
    signoff: "Always a soft landing.",
  },
  {
    id: "dm-10",
    category: "reassurance",
    categoryLabel: "Need Reassurance",
    text: "Whenever your mind tries to convince you of doubts or worries, let this be steady: I choose you, I believe in you, and I am not going anywhere.",
    signoff: "Steady and true.",
  },
  {
    id: "dm-11",
    category: "reassurance",
    categoryLabel: "Need Reassurance",
    text: "I remember when you used to be shy and keep everything inside. Now, seeing you open up to me when you're troubled is a gift I will protect forever.",
    signoff: "Grateful for your trust.",
  },

  // ==========================================
  // 3. HEAVY OR TIRED DAYS
  // ==========================================
  {
    id: "dm-12",
    category: "hard-day",
    categoryLabel: "Heavy or Tired Days",
    text: "If today was exhausting, let the weight drop from your shoulders for a moment. You survived the day, and that is more than enough.",
    signoff: "Rest gently tonight.",
  },
  {
    id: "dm-13",
    category: "hard-day",
    categoryLabel: "Heavy or Tired Days",
    text: "Medical postings and long hours can take so much out of you. Put your feet up, wrap yourself in your softest blanket, and just exhale.",
    signoff: "Giving you space to rest.",
  },
  {
    id: "dm-14",
    category: "hard-day",
    categoryLabel: "Heavy or Tired Days",
    text: "Crumbling into a little ball when you're overwhelmed is completely okay. You don't have to be resilient every single minute.",
    signoff: "Your quiet haven.",
  },
  {
    id: "dm-15",
    category: "hard-day",
    categoryLabel: "Heavy or Tired Days",
    text: "You don't need to put on a cheerful face for me. If today was hard, tell me it was hard. I'm right here to listen, or just to sit with you in silence.",
    signoff: "Ready to listen whenever.",
  },
  {
    id: "dm-16",
    category: "hard-day",
    categoryLabel: "Heavy or Tired Days",
    text: "Close your eyes for sixty seconds, loosen your jaw, and let the noise of the world fade out. You are safe, you are loved, and tomorrow is a fresh page.",
    signoff: "Softly cheering for you.",
  },

  // ==========================================
  // 4. WANT TO SMILE
  // ==========================================
  {
    id: "dm-17",
    category: "want-to-smile",
    categoryLabel: "Want to Smile",
    text: "Thinking about that crinkly-eyed laugh of yours makes me smile no matter what kind of day I am having. That laugh is pure sunshine.",
    signoff: "Smiling thinking of you.",
  },
  {
    id: "dm-18",
    category: "want-to-smile",
    categoryLabel: "Want to Smile",
    text: "A friendly reminder that somewhere in this city, a boyfriend is endlessly proud to call you his girlfriend.",
    signoff: "Your biggest admirer.",
  },
  {
    id: "dm-19",
    category: "want-to-smile",
    categoryLabel: "Want to Smile",
    text: "I still remember how you patiently tied that knot for me because I was completely clueless. It still brings the warmest smile to my face.",
    signoff: "Grateful for your care.",
  },
  {
    id: "dm-20",
    category: "want-to-smile",
    categoryLabel: "Want to Smile",
    text: "Here is your daily delivery of virtual forehead kisses, warm cuddles, and an imaginary cup of sweet tea.",
    signoff: "Special delivery just for you.",
  },
  {
    id: "dm-21",
    category: "want-to-smile",
    categoryLabel: "Want to Smile",
    text: "Seeing that school picture of you holding a flower always makes me wish I could travel back in time just to see the sweet girl you've always been.",
    signoff: "Adoring every chapter of you.",
  },

  // ==========================================
  // 5. STUDIES & FOCUS (Medical College Life)
  // ==========================================
  {
    id: "dm-22",
    category: "confidence",
    categoryLabel: "Studies & Focus",
    text: "Seeing you in your white coat on our village trip showed me just how noble and determined you are. Trust your preparation—you are building something wonderful.",
    signoff: "Endlessly proud of you.",
  },
  {
    id: "dm-23",
    category: "confidence",
    categoryLabel: "Studies & Focus",
    text: "Medicine is demanding, but your mind is sharp and your heart is caring. Take it one topic, one page, and one hour at a time.",
    signoff: "Cheering you on.",
  },
  {
    id: "dm-24",
    category: "confidence",
    categoryLabel: "Studies & Focus",
    text: "When the syllabus feels endless, remember: you have already navigated so many tough exams and postings. You have the grit to handle this too.",
    signoff: "Believing in your strength.",
  },
  {
    id: "dm-25",
    category: "confidence",
    categoryLabel: "Studies & Focus",
    text: "Don't forget to hydrate, eat on time, and take breaks between study blocks. Your wellbeing matters far more than cramming an extra chapter.",
    signoff: "Looking out for you.",
  },
  {
    id: "dm-26",
    category: "confidence",
    categoryLabel: "Studies & Focus",
    text: "I love your quiet determination. Watching you pursue what you care about inspires me every single day.",
    signoff: "Always in your corner.",
  },

  // ==========================================
  // 6. MY PRETTY KITTEN (Everyday Affection)
  // ==========================================
  {
    id: "dm-27",
    category: "feel-adored",
    categoryLabel: "My Pretty Kitten",
    text: "Good morning, my pretty little kitten. Just sending a soft reminder that you are deeply loved and cherished today.",
    signoff: "All my warmth, always.",
  },
  {
    id: "dm-28",
    category: "feel-adored",
    categoryLabel: "My Pretty Kitten",
    text: "You don't need makeup, fancy clothes, or polished hair for me to look at you with total adoration. You, just as you are, is my favourite sight in the universe.",
    signoff: "Completely smitten.",
  },
  {
    id: "dm-29",
    category: "feel-adored",
    categoryLabel: "My Pretty Kitten",
    text: "Thank you for the quiet, honest ways you show you care—for listening when I talk and making me feel like my thoughts truly matter to you.",
    signoff: "Thankful for you.",
  },
  {
    id: "dm-30",
    category: "feel-adored",
    categoryLabel: "My Pretty Kitten",
    text: "You bring so much gentleness into my world. Having you as my partner makes every ordinary day feel ten times brighter.",
    signoff: "Forever grateful.",
  },
  {
    id: "dm-31",
    category: "feel-adored",
    categoryLabel: "My Pretty Kitten",
    text: "If you looked at yourself through my eyes for just ten seconds, you would see a girl with breathtaking grace, a brave mind, and the sweetest soul.",
    signoff: "Seeing the best in you.",
  },

  // ==========================================
  // 7. QUIET TOMORROW (Our Future)
  // ==========================================
  {
    id: "dm-32",
    category: "future",
    categoryLabel: "Quiet Tomorrow",
    text: "One day, we will have our own little kitchen, soft morning sunlight, and nowhere we have to rush to. That's the tomorrow I look forward to.",
    signoff: "Holding that hope close.",
  },
  {
    id: "dm-33",
    category: "future",
    categoryLabel: "Quiet Tomorrow",
    text: "Building a life with you—marrying you, creating a warm home, and holding your hand through every stage of life—is my greatest wish.",
    signoff: "In this life and every life.",
  },
  {
    id: "dm-34",
    category: "future",
    categoryLabel: "Quiet Tomorrow",
    text: "I love imagining us years from now, still sharing cozy blankets and smiling at how sweetly our journey started.",
    signoff: "Looking toward forever.",
  },
  {
    id: "dm-35",
    category: "future",
    categoryLabel: "Quiet Tomorrow",
    text: "Whatever changes the future brings, having you by my side to weather it together is the only anchor I need.",
    signoff: "Beside you, always.",
  },
  {
    id: "dm-36",
    category: "future",
    categoryLabel: "Quiet Tomorrow",
    text: "A home filled with warmth, endless books, your soft laughter, and unconditional respect. That is the world I want to build with you.",
    signoff: "Our shared tomorrow.",
  },

  // ==========================================
  // 8. SILLY & PLAYFUL (Inside Jokes & Cute Moments)
  // ==========================================
  {
    id: "dm-37",
    category: "cute",
    categoryLabel: "Silly & Playful",
    text: "Those puppy-eye emojis 🥺 you send are an unfair advantage and you know it. (They still work every single time, though.)",
    signoff: "Totally powerless against them.",
  },
  {
    id: "dm-38",
    category: "cute",
    categoryLabel: "Silly & Playful",
    text: "Even when you cross your arms and declare 'naaaa ami kotha bobbona', you are still the cutest girl on this planet.",
    signoff: "Trying not to giggle.",
  },
  {
    id: "dm-39",
    category: "cute",
    categoryLabel: "Silly & Playful",
    text: "Sending a big, warm Dudu-Bubu cuddle your way right now. Consider yourself officially bear-hugged.",
    signoff: "From your Bubu.",
  },
  {
    id: "dm-40",
    category: "cute",
    categoryLabel: "Silly & Playful",
    text: "Emergency protocol: if today gets too serious, please review the video of you giggling at the Attack on Titan keychain immediately.",
    signoff: "Doctor's orders.",
  },
  {
    id: "dm-41",
    category: "cute",
    categoryLabel: "Silly & Playful",
    text: "I hope you know you are legally obligated to let me pamper you with snacks, treats, and head pats whenever you feel grumpy.",
    signoff: "It's the official rule.",
  },
  {
    id: "dm-42",
    category: "cute",
    categoryLabel: "Silly & Playful",
    text: "No matter how dramatic or silly you get, you will always be my favourite person to tease, adore, and cuddle.",
    signoff: "Your partner in crime.",
  },
];

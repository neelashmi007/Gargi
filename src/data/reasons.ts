export interface ReasonCard {
  id: number;
  title: string;
  summary: string;
  detail: string;
  tag: "personality" | "tenderness" | "individuality" | "growth" | "comfort" | "playful" | "secret";
  iconName?: string;
  isSecret?: boolean;
}

export const REASONS_I_LOVE_YOU: ReasonCard[] = [
  {
    id: 1,
    title: "Your Authentic Heart",
    summary: "You are genuinely yourself, without any pretension.",
    detail: "In a world where people wear masks, your sincerity and realness shine like a beacon. You don't perform; you simply exist with an honest, rare grace that I admire endlessly.",
    tag: "individuality"
  },
  {
    id: 2,
    title: "The Gentle Light in Your Smile",
    summary: "The way warmth spreads across your face when something delights you.",
    detail: "Watching you smile is one of my absolute favourite things in this life. It lights up everything around you and turns an ordinary moment into something soft and memorable.",
    tag: "tenderness"
  },
  {
    id: 3,
    title: "How Safe I Feel With You",
    summary: "With you, I never have to hide who I am.",
    detail: "There is an unspoken comfort between us where silence is peaceful, laughter is easy, and being vulnerable feels completely natural and protected.",
    tag: "comfort"
  },
  {
    id: 4,
    title: "Your Fierce Resilience",
    summary: "How you pick yourself up, even when things are difficult.",
    detail: "I have seen how hard you try and how quietly brave you are. Even on days when you feel overwhelmed, your courage to keep going inspires me more than you realize.",
    tag: "growth"
  },
  {
    id: 5,
    title: "The Way You Let Me Pamper You",
    summary: "Your sweet trust when you let your guard down.",
    detail: "I love when you let me take care of you—tucking you in, making choices when you're tired, and looking after you like the precious princess you are.",
    tag: "playful"
  },
  {
    id: 6,
    title: "Your Inquisitive Mind",
    summary: "The curious, thoughtful way you look at the world.",
    detail: "I love hearing your thoughts, your opinions, and the little observations you make. Learning how your mind works is an ongoing joy that never gets old.",
    tag: "personality"
  },
  {
    id: 7,
    title: "You Give Me Room to Be Imperfect",
    summary: "Your patience and understanding towards me.",
    detail: "You don't demand perfection from me, and in return, I want you to know you never have to be perfect for me either. We give each other room to be human.",
    tag: "comfort"
  },
  {
    id: 8,
    title: "Your Adorable Playfulness",
    summary: "The cute kitten side of you that comes out when we're silly.",
    detail: "Your playful teasing, your funny reactions, and your adorable giggles make my heart do flips. You bring pure sunshine into my days.",
    tag: "playful"
  },
  {
    id: 9,
    title: "The Depth of Your Compassion",
    summary: "How deeply you care about the people and things you love.",
    detail: "You have a heart that feels things deeply. That sensitivity isn't a flaw—it is a superpower that makes you an extraordinarily caring partner.",
    tag: "personality"
  },
  {
    id: 10,
    title: "Your Dreams and Ambitions",
    summary: "The quiet fire within you to build a meaningful life.",
    detail: "I love hearing about what you hope to achieve. Standing behind you, cheering for your goals, and watching you blossom is one of my greatest joys.",
    tag: "growth"
  },
  {
    id: 11,
    title: "The Softness of Your Voice",
    summary: "The melody that immediately calms my racing mind.",
    detail: "No matter how chaotic the day has been, hearing your voice instantly anchors me. You have a soothing quality that makes everything feel manageable.",
    tag: "comfort"
  },
  {
    id: 12,
    title: "The Way You Appreciate Small Joys",
    summary: "How a tiny flower or sweet message can brighten your mood.",
    detail: "You don't need extravagant things to find happiness. Your ability to find sweetness in the simplest moments makes living life beside you so refreshing.",
    tag: "individuality"
  },
  {
    id: 13,
    title: "You Are My Favourite Conversation",
    summary: "Hours feel like minutes whenever we talk.",
    detail: "We can talk about the most random topics or the deepest existential thoughts, and I never want the conversation to end.",
    tag: "personality"
  },
  {
    id: 14,
    title: "Your Right to Have Bad Days",
    summary: "I love you even when you're grumpy, tired, or quiet.",
    detail: "I don't just love you when you're radiant and cheerful; I love the girl who needs a blanket and quiet cuddles when the world has been unkind.",
    tag: "tenderness"
  },
  {
    id: 15,
    title: "How You Inspire Me to Be Better",
    summary: "Being with you makes me want to grow into the best man I can be.",
    detail: "Not because of pressure, but because loving someone as wonderful as Gargi makes me want to show up with dedication, patience, and integrity every day.",
    tag: "growth"
  },
  {
    id: 16,
    title: "Your Unique Sense of Humour",
    summary: "The inside jokes that only you and I truly understand.",
    detail: "The little glances we exchange across a room, the memes, and the silly expressions that reduce us to uncontrollable giggles.",
    tag: "playful"
  },
  {
    id: 17,
    title: "Your Love for Pink and Pretty Things",
    summary: "The aesthetic, fairytale joy you embrace with such charm.",
    detail: "Your love for delicate roses, pastel pinks, bows, and sweet things reflects your soft, romantic spirit. It makes the world look softer and more magical.",
    tag: "individuality"
  },
  {
    id: 18,
    title: "The Trust You Place in My Hands",
    summary: "A sacred gift that I promise to protect always.",
    detail: "When you share your fears, your hopes, and your vulnerability with me, I hold it with immense reverence. Your trust means everything to me.",
    tag: "tenderness"
  },
  {
    id: 19,
    title: "The Way You Listen",
    summary: "When I talk, I know you truly hear me.",
    detail: "You give your undivided attention and empathy. Knowing that my thoughts matter to you is something I never take for granted.",
    tag: "comfort"
  },
  {
    id: 20,
    title: "How Beautiful You Look in Ordinary Moments",
    summary: "Without any makeup or fancy clothes, you take my breath away.",
    detail: "In casual clothes, hair tied up, wrapped in a blanket, just being cozy—that is when you look the most breathtaking to me.",
    tag: "tenderness"
  },
  {
    id: 21,
    title: "Your Willingness to Communicate",
    summary: "Working through things with kindness and patience.",
    detail: "Relationships thrive when two people choose honesty over pride. I love that we can talk things through and always come out closer on the other side.",
    tag: "growth"
  },
  {
    id: 22,
    title: "The Sparkle in Your Eyes",
    summary: "The curious, sweet look you get when you're intrigued.",
    detail: "There is a lively, dreamy spark in your eyes that always draws me in. It's like looking into a warm constellation.",
    tag: "tenderness"
  },
  {
    id: 23,
    title: "Your Independent Spirit",
    summary: "Your strength, your thoughts, and your own identity.",
    detail: "I love that you are your own woman with your own dreams, thoughts, and path. I don't want to complete you; I want to walk alongside you as your partner.",
    tag: "individuality"
  },
  {
    id: 24,
    title: "How Cozy You Make Every Place Feel",
    summary: "Wherever you are feels like a warm fireplace on a rainy night.",
    detail: "You turn an empty room into a home simply by stepping into it and sharing your warmth.",
    tag: "comfort"
  },
  {
    id: 25,
    title: "Your Cute Reactions When Complimented",
    summary: "The way you blush and act shy when I tell you how pretty you are.",
    detail: "Even if you try to brush it off, seeing that sweet little blush appear on your cheeks is the highlight of my day.",
    tag: "playful"
  },
  {
    id: 26,
    title: "How You Show Kindness to Others",
    summary: "Your innate empathy and consideration for people around you.",
    detail: "You treat people with respect and gentle manners. Having such a sweet-natured partner fills me with pride.",
    tag: "personality"
  },
  {
    id: 27,
    title: "The Fun of Planning Our Tomorrow",
    summary: "Talking about future cafes, cozy apartments, and adventures.",
    detail: "Every dream about the future feels bright and exciting because you are right in the center of it.",
    tag: "growth"
  },
  {
    id: 28,
    title: "The Warmth of Your Hugs",
    summary: "A place where all the world's worries melt into nothing.",
    detail: "Pressing close to you and feeling your arms wrap around me is the purest medicine for my soul.",
    tag: "comfort"
  },
  {
    id: 29,
    title: "You Are Completely Irreplaceable",
    summary: "No one else in this universe could ever hold your place.",
    detail: "In an endless cosmos of stars and souls, you are the one that captured my heart completely. There is only one Gargi, and she is mine to cherish.",
    tag: "individuality"
  },
  {
    id: 30,
    title: "Because You Are You",
    summary: "Simply existing as Gargi is more than enough reason.",
    detail: "At the end of the day, I don't need a list of thirty reasons. I love you because you are you—in your totality, your sweetness, your quirks, and your heart.",
    tag: "tenderness"
  },
  {
    id: 31,
    title: "The Secret Reason",
    summary: "A hidden truth unlocked just for you, Princess.",
    detail: "You unlocked the secret reason! Here it is: I fell in love not just with who you are, but with the quiet peace that fills my chest every time I think of your future with me. You make tomorrow feel like a promise worth living for.",
    tag: "secret",
    isSecret: true
  }
];

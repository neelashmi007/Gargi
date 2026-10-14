export interface LoveLetter {
  id: string;
  title: string;
  subtitle: string;
  category: "reassurance" | "sweet" | "tender" | "promises" | "playful" | "secret";
  datePrompt: string; // e.g. "To open on quiet evenings"
  preview: string;
  content: string[];
  signature: string;
  sealedWith: "rose" | "heart" | "bow" | "kitten" | "sparkle";
  isSecret?: boolean;
}

export const LOVE_LETTERS: LoveLetter[] = [
  {
    id: "letter-for-my-baby",
    title: "A Letter for My Baby",
    subtitle: "Because one message could never hold everything I feel",
    category: "tender",
    datePrompt: "To open whenever you need a soft place to land",
    preview: "Baby, if I could tuck one feeling into your pocket and make sure you carried it everywhere...",
    content: [
      "Hi, Baby.",
      "If I could tuck one feeling into your pocket and make sure you carried it everywhere, it would be the feeling of being loved without having to earn it. You do not have to be at your happiest, prettiest, strongest, or most cheerful to deserve tenderness from me. I want you to have room to be every version of yourself, and I want you to know that the person you are matters to me.",
      "I love that you listen to me so much. I love the warmth, the patience, and the gentle care you treat me with every single day. In a world where people are often in a rush to be heard, you make room for my thoughts and make me feel so deeply valued.",
      "Sometimes life asks you to hold yourself together so tightly. With me, you never have to put on a performance. When you are tired, rest. When you are overwhelmed, let me sit quietly beside you and hold your hand. You don't have to carry the whole world on your shoulders.",
      "I built this little corner of the universe just for you because my affection for you isn't something that fits into a single conversation. It is in every quiet moment I think of you, every time your name brings an unbidden smile to my face, and every rose I wish I could place right into your hands.",
      "You are my favourite person, Gargi. Never forget that."
    ],
    signature: "Always yours, with all my love",
    sealedWith: "rose"
  },
  {
    id: "to-my-pretty-princess",
    title: "To My Pretty Princess",
    subtitle: "A reminder of the royalty you are to me",
    category: "playful",
    datePrompt: "For when you need to be spoiled with gentle affection",
    preview: "Princess, you carry yourself with so much grace, even on days when you feel clumsy...",
    content: [
      "My sweet Princess,",
      "You carry yourself with so much grace, even on days when you feel clumsy or unsure. In my eyes, you have this natural, gentle majesty—not because of crowns or grandeur, but because of your soft heart and the sweet light you bring wherever you walk.",
      "I love that you let me treat you like royalty. I love pulling out chairs for you, making sure you are cozy, wrapping a blanket around your shoulders when the room gets chilly, and looking after all the little details so you can simply breathe and be adored.",
      "You deserve to be treated with absolute care, Princess. Don't ever let anyone, including your own self-criticism, tell you that you are anything less than a treasure.",
      "Wear your invisible tiara today, Baby. I'll be right here making sure no one disturbs your peace."
    ],
    signature: "Your devoted boyfriend",
    sealedWith: "bow"
  },
  {
    id: "when-you-need-to-feel-loved",
    title: "When You Need to Feel Loved",
    subtitle: "A blanket of reassurance for weary hearts",
    category: "reassurance",
    datePrompt: "Open when loneliness whispers lies to your mind",
    preview: "If today feels heavy and the silence in your room feels a little too loud...",
    content: [
      "Gargi,",
      "If today feels heavy and the silence in your room feels a little too loud, close your eyes for a moment. Take a deep, gentle breath, and imagine my arms wrapping completely around you, holding you close against my chest.",
      "You are loved. Not conditionally, not temporarily, and not only when things are easy. I love the quiet warmth of your presence, the way you think, and the tender soul you carry inside you.",
      "There is nothing you could fail at, no mistake you could make, and no bad day you could endure that would make me take a single step away from you. My heart chose you, and it keeps choosing you with steady, calm certainty.",
      "You are deeply cherished, Baby. Rest your heart here."
    ],
    signature: "Holding you tight, even across the distance",
    sealedWith: "heart"
  },
  {
    id: "when-you-miss-me",
    title: "When You Miss Me",
    subtitle: "Bridge the distance between our hearts",
    category: "sweet",
    datePrompt: "When you wish I was sitting right beside you",
    preview: "I know the distance can feel frustrating when all you want is a hug...",
    content: [
      "My sweet girl,",
      "I know the distance can feel frustrating when all you want is a warm hug or to lean your head against my shoulder. I feel it too, more often than I can put into simple words.",
      "Whenever you miss me, look at the sky or glance at a rose and remember: the very same stars shining over you are shining over me. Every beat of my heart has your name etched gently into it.",
      "Until I can wrap my arms around you in person, let this little universe be our rendezvous point. Imagine me kissing your forehead, brushing a stray lock of hair behind your ear, and telling you that everything will be okay.",
      "We are getting closer to each other every single day."
    ],
    signature: "Counting down the moments till I see you",
    sealedWith: "sparkle"
  },
  {
    id: "for-the-days-you-doubt-yourself",
    title: "For the Days You Doubt Yourself",
    subtitle: "Truths for when your inner critic is being unkind",
    category: "reassurance",
    datePrompt: "For the moments when you question your worth or abilities",
    preview: "Baby, I wish I could give you my eyes for just five minutes...",
    content: [
      "Baby,",
      "I wish I could lend you my eyes for just five minutes on days like this. If you could see yourself through my perspective, you would see someone extraordinarily capable, resilient, and beautifully kind.",
      "One of the things I admire most about you is your determination. When you set your mind to something, you carry this quiet strength and resolve that inspires me so much. Even when things feel heavy or uncertain, you keep pushing forward.",
      "You are so hard on yourself sometimes. You expect perfection from yourself when all the world actually needs is your sincere, brave presence. It is completely okay to stumble. It is completely okay not to have every single answer figured out.",
      "Growth doesn't happen in straight leaps; it happens in quiet, trembling steps forward. And you have taken so many brave steps already. I am so ridiculously proud of you—not just for your accomplishments, but for your heart and your determination.",
      "Take a breath, Princess. You are doing so much better than you give yourself credit for."
    ],
    signature: "Your biggest fan and proudest supporter",
    sealedWith: "bow"
  },
  {
    id: "the-little-things-i-notice-about-you",
    title: "The Little Things I Notice About You",
    subtitle: "The quiet details that make you unforgettable",
    category: "sweet",
    datePrompt: "To read when you wonder if anyone truly sees you",
    preview: "It is never just the big things that make me fall in love with you...",
    content: [
      "My dearest Gargi,",
      "It is never just the big things that make me fall in love with you; it is the kaleidoscope of tiny, delicate details that you probably don't even realize you share.",
      "I love your smile so much. It is my favourite sight in the whole world. I still remember when I gave you that Attack on Titan keychain—you giggled so much, and your reaction was the cutest, most precious thing. Seeing you light up over something small and hearing your genuine laughter is a memory I keep tucked safely in my heart.",
      "I notice the soft cadence in your voice when you get excited about something you love. I notice how you pause to think, the sweet expressions that flicker across your eyes, and the gentleness you instinctively show.",
      "I notice how deeply you care, and how your determination carries you through long days. Every quiet, tender nuance of who you are is safe and cherished with me."
    ],
    signature: "Loving every single little detail of you",
    sealedWith: "rose"
  },
  {
    id: "when-the-world-feels-too-loud",
    title: "When the World Feels Too Loud",
    subtitle: "A sanctuary of quiet peace made just for you",
    category: "reassurance",
    datePrompt: "For sensory overload, endless noise, and exhausting demands",
    preview: "Step inside here, Baby. Close the door behind you. Breathe.",
    content: [
      "Step inside here, Baby. Close the door softly behind you.",
      "The world outside can be so demanding, so noisy, and so unyielding. Everyone wants something, everyone talks too loudly, and your battery is running on empty. But right here, in our little pink garden, nobody can ask anything of you.",
      "You don't have to reply to messages right now. You don't have to solve any puzzles today. You don't have to explain why you are exhausted.",
      "Just pull up the softest blanket, listen to the gentle rustle of roses in the breeze, and let your mind float. I will stand guard by the entrance and keep all the noise away while you rest.",
      "You are safe here, Kitten. Always."
    ],
    signature: "Your quiet harbor",
    sealedWith: "kitten"
  },
  {
    id: "you-can-let-your-guard-down-with-me",
    title: "You Can Let Your Guard Down With Me",
    subtitle: "On trust, vulnerability, and being fully held",
    category: "promises",
    datePrompt: "When you feel like you have to be strong all the time",
    preview: "I know you are independent and capable. But you don't always have to be.",
    content: [
      "Princess,",
      "I know how capable and independent you are. But one of the greatest privileges you give me is when you allow yourself to drop your armor and lean into me.",
      "When we first got together, you were so shy and it was hard for you to express what you were feeling. There were times earlier on when you would shut me out when something felt wrong, not because you didn't care, but because opening up felt so difficult and vulnerable.",
      "I wanted so badly for you to know that you were safe with me. Over time, as we kept talking and learning each other, you slowly began to let me in. Now, when you come and talk to me whenever you feel off or need reassurance, it means more to me than words can ever describe.",
      "Thank you for trusting me with your quiet thoughts and your softer side. You never have to hide your feelings from me. Whatever is on your mind, I am here to listen with absolute patience, love, and respect.",
      "You are always safe in my hands, Baby."
    ],
    signature: "With deep respect and endless tenderness",
    sealedWith: "bow"
  },
  {
    id: "my-promise-is-in-how-i-treat-you",
    title: "My Promise Is in How I Treat You",
    subtitle: "Real love is made of actions, not empty words",
    category: "promises",
    datePrompt: "For when you need certainty in a world of fickle promises",
    preview: "Anyone can write flowery poetry, Gargi. But I want my love to be solid.",
    content: [
      "My darling Gargi,",
      "Anyone can type flowery lines or make grand cinematic declarations. But real, lasting love isn't proven by high drama; it is proven in how someone treats you on a regular Tuesday morning when both of you are tired.",
      "My promise to you isn't a fantasy where we never disagree or where life is effortless. My promise is that I will listen to your words. I will respect your boundaries. I will apologize sincerely when I am wrong. I will champion your happiness and do the daily work to be a partner who adds peace to your life, never anxiety.",
      "I want to love you in ways you can physically feel: through patience, consistency, laughter, and unwavering support for your dreams.",
      "You deserve nothing less than that kind of love."
    ],
    signature: "Steadfastly by your side",
    sealedWith: "heart"
  },
  {
    id: "a-letter-about-us",
    title: "A Letter About Us",
    subtitle: "The sweetness of what we are building together",
    category: "sweet",
    datePrompt: "To reflect on the beauty of our connection",
    preview: "What I love most about us is how natural it feels to be together...",
    content: [
      "Hi Baby,",
      "What I love most about us is that being with you feels like coming home. In a world full of strangers, finding someone whose presence makes your heartbeat settle into a gentle rhythm is rare magic.",
      "I love our playful banter. I love the moments where we laugh until our ribs ache, and I love the quiet lulls where we don't even need words to understand one another.",
      "Every day I discover another facet of who you are, and it makes our connection feel richer and deeper. We are weaving something really special, thread by thread, with kindness and patience.",
      "Thank you for being my partner in this journey. I wouldn't trade our story for anything."
    ],
    signature: "Yours and only yours",
    sealedWith: "rose"
  },
  {
    id: "for-the-girl-behind-that-smile",
    title: "For the Girl Behind That Smile",
    subtitle: "Seeing the human beneath the sunshine",
    category: "tender",
    datePrompt: "When you smile so others don't worry, but hurt inside",
    preview: "You have such a radiant smile, Baby. But you don't always have to wear it for me.",
    content: [
      "Gargi,",
      "You have such a radiant smile. It can brighten an entire room in a fraction of a second. But I also want you to know: you never have to put that smile on as a mask for me.",
      "If you are sad, you can frown. If you are angry, you can vent. If you are exhausted, you can simply collapse into my arms. I don't love you only for the sunshine; I love the girl who weathers the thunderstorms too.",
      "You don't owe anyone constant cheerfulness, least of all me. Your real emotions are valid and worthy of compassion. Come as you are, Baby. That is who I love."
    ],
    signature: "Always here for all your seasons",
    sealedWith: "heart"
  },
  {
    id: "a-little-promise-from-me-to-you",
    title: "A Little Promise From Me to You",
    subtitle: "A quiet vow whispered into the rose garden",
    category: "promises",
    datePrompt: "To seal our bond under the stars",
    preview: "I promise to always make room for your voice and your feelings...",
    content: [
      "My little Princess,",
      "Here is my promise to you, written under the virtual stars of this universe I built for you:",
      "I promise to never dismiss what matters to you, even if it seems small to someone else. I promise to encourage you when your dreams feel daunting. I promise to hold your hand through the scary corridors of life.",
      "And whenever you feel playful and want to be looked after, I promise to take your hand, guide our steps, and keep you safe from harm. You will never walk alone again as long as I draw breath.",
      "Keep this promise close to your heart. It is yours forever."
    ],
    signature: "With an eternal vow",
    sealedWith: "sparkle"
  },
  {
    id: "one-day-when-we-look-back",
    title: "One Day, When We Look Back",
    subtitle: "Glimpses of the memories we will cherish in years to come",
    category: "tender",
    datePrompt: "To read while daydreaming about the future",
    preview: "One day, we will be sitting side by side with mugs of warm tea...",
    content: [
      "Baby,",
      "One day, years from now, I picture us sitting side by side on a comfortable sofa, warm mugs in our hands, maybe wrapped in a big fluffy blanket while rain taps softly against the window glass.",
      "We will look back on these days—the little messages, the late-night talks, the times we counted down the minutes to see each other—and we will smile, knowing that every single seed of love we planted grew into a sturdy, blossoming garden.",
      "I look forward to that future so much. Not just for the milestones, but for all the cozy, unremarkable ordinary mornings in between.",
      "Thank you for being the person I want to build that future with."
    ],
    signature: "Looking forward to every tomorrow with you",
    sealedWith: "rose"
  },
  {
    id: "a-letter-hidden-among-the-roses",
    title: "A Letter Hidden Among the Roses",
    subtitle: "A secret love note tucked between velvet petals",
    category: "secret",
    datePrompt: "Found tucked within the bloom of your favourite flower",
    preview: "You found my secret rose letter, Princess. Some quiet memories between us belong in a sacred corner...",
    content: [
      "You found my secret rose letter, Princess.",
      "I hid this one here because there are quiet memories between us that belong in a sacred, private corner—moments that only you and I truly understand.",
      "4 October is one of those dates for me. It was our first makeout, and the first time we explored that kind of closeness and tried something sexual together. What made that day stay with me so deeply wasn't just the physical intimacy, but the tender trust and vulnerability beneath it all.",
      "To be close to you like that, to feel your warmth and know that we were sharing something so honest and sweet, meant the world to me. It was a meaningful step into deeper closeness, taken with genuine care, respect, and mutual affection.",
      "Thank you for sharing your heart, your trust, and your closeness with me, Gargi. You are my most cherished secret and my greatest joy."
    ],
    signature: "Your secret gardener",
    sealedWith: "rose",
    isSecret: true
  },
  {
    id: "for-my-favourite-kitten",
    title: "For My Favourite Kitten",
    subtitle: "Playful purrs, puppy-eye emojis, and warm cuddles",
    category: "playful",
    datePrompt: "When you want to feel cute, pampered, and cozy",
    preview: "Meow! Someone needs gentle chin scratches, a warm blanket, and lots of cuddles...",
    content: [
      "To my pretty little kitten,",
      "You are so ridiculously adorable, and you know it. Our little world with Dudu-Bubu cuddles and sweet moments makes even the longest, hardest days feel light.",
      "When you send me those cute puppy-eye emojis, my heart completely melts on the spot. And when you get all dramatic and pretend to be angry with me, saying 'naaaa ami kotha bobbona'—you think you're being so stern, but you are just the sweetest, most lovable girl alive.",
      "Like a precious little kitten who deserves only the softest pillows, warm treats, and endless affection, you deserve to be spoiled and protected every day.",
      "Whenever life gets too noisy or prickly, just curl right into my arms. I will keep you warm, keep all the cold away, and make sure you feel how adored you are.",
      "*Pats your head gently* You're my favourite girl, Baby."
    ],
    signature: "Your protector and personal head-scratcher",
    sealedWith: "kitten"
  },
  {
    id: "the-things-i-cannot-always-say-out-loud",
    title: "The Things I Cannot Always Say Out Loud",
    subtitle: "Thoughts that flood my mind when I look at you",
    category: "tender",
    datePrompt: "When you want to know what goes through my mind in silence",
    preview: "Sometimes, when you are talking, I lose my train of thought...",
    content: [
      "Baby,",
      "Sometimes when you are talking to me, I catch myself getting quiet. It isn't because I'm not listening—it's because in that exact second, I am overwhelmed by how fortunate I am to have you in my life.",
      "I look at you and think: how did I end up so lucky? How did this incredible, beautiful, warm-hearted girl choose to share her world with me?",
      "Words don't always catch up to how much love I hold for you in those moments. So if I ever just look at you with a soft smile and say nothing, that's what is happening. My soul is just quietly admiring yours.",
      "I love you more than my voice could ever say."
    ],
    signature: "Always gazing at you with adoration",
    sealedWith: "heart"
  },
  {
    id: "my-favourite-place-is-with-you",
    title: "My Favourite Place Is With You",
    subtitle: "Home is not a location; it is your hand in mine",
    category: "sweet",
    datePrompt: "To remind you where my heart belongs",
    preview: "People search their whole lives for a place where they feel completely at peace...",
    content: [
      "My dearest Gargi,",
      "People spend their entire lives searching for a place where they feel completely at ease. They look for serenity in distant mountains or oceans.",
      "For me, that serenity was found the first time I hugged you. That hug felt so comforting, like my heart finally found the rhythm it had been searching for all along.",
      "I still think about that day in GLT when I was going through such a tough time. I hugged you so tightly because I needed comfort, and kissing your cheeks felt so natural and healing. In that moment, you weren't just the girl I had feelings for; you were becoming someone I could turn to for peace, comfort, and warmth when the world felt overwhelming.",
      "Wherever life takes us, as long as I have you by my side, I am home. Thank you for being my comfort, Baby."
    ],
    signature: "Forever home with you",
    sealedWith: "rose"
  },
  {
    id: "a-letter-for-our-future-selves",
    title: "A Letter for Our Future Selves",
    subtitle: "A time capsule to open years down the line",
    category: "promises",
    datePrompt: "To be re-read after many shared adventures",
    preview: "If future-us is reading this years down the road, look at where we started...",
    content: [
      "To future Gargi and me,",
      "If you are reading this years from now, I hope you are still smiling the exact same way you smile today. I hope our home is filled with warmth, pink flowers, gentle laughter, and the quiet comfort of two people who chose each other every single day.",
      "Remember this little website. Remember the young love that poured its heart into building every page, every petal, and every letter. Everything that was dreamed about back then was done with total sincerity.",
      "Keep holding hands. Keep being silly together. And never stop letting me pamper you, Princess.",
      "The best chapters are still being written."
    ],
    signature: "From the boy who loved you then, loves you now, and will love you always",
    sealedWith: "sparkle"
  },
  {
    id: "the-night-you-said-yes",
    title: "The Night You Said Yes",
    subtitle: "19 February 2026, and the beginning of us",
    category: "sweet",
    datePrompt: "To read on the 19th of any month, or whenever you want to remember our beginning",
    preview: "On the night of 18 February, I sent you a message asking you to be mine...",
    content: [
      "Hi, Baby.",
      "On the night of 18 February 2026, I gathered all my courage and proposed to you over text. My heart was racing, waiting and hoping for an answer from the girl I couldn't stop thinking about.",
      "Then midnight struck. On 19 February, right at the start of that new day, your reply came through: 'i love you too'.",
      "Those four simple words changed my entire world. That was the moment 19 February 2026 became our relationship date, and the moment our story officially began.",
      "Back then, you were so shy and quiet, and finding the words to express your feelings didn't come easily. Knowing that you took that step with me, and seeing how much comfort, laughter, and trust we have built between us since that midnight, makes me fall in love with you all over again.",
      "Thank you for saying yes to me, Gargi. It was the best thing that ever happened to me."
    ],
    signature: "Yours since 19 February 2026, and forever after",
    sealedWith: "heart"
  },
  {
    id: "the-home-i-dream-of-building-with-you",
    title: "The Home I Dream of Building With You",
    subtitle: "Growing old together in every life",
    category: "promises",
    datePrompt: "For quiet evenings when you look forward to our future",
    preview: "When I think about the years ahead, there is only one dream that truly matters...",
    content: [
      "My sweet Gargi,",
      "When I think about the years ahead of us, there is only one vision that anchors my heart. I want to marry you. I want us to have our own home, to build a warm life together, to have children, and to watch the years unfold side by side.",
      "I don't need our future to be extravagant or effortless. What I care about is the life we build together—waking up next to you on quiet mornings, making sure you are taken care of, and coming home to your smile at the end of long days.",
      "I want to be there for every chapter of your life: through all the changes, the milestones, the ordinary routines, and the gray hairs that will eventually find us.",
      "More than anything else in this world: I want to grow old with you in every life.",
      "No matter how many lifetimes I am given, I would still look for you, and I would still choose you every single time."
    ],
    signature: "Yours in this life, and in every life to come",
    sealedWith: "sparkle"
  }
];

export interface ShortLoveNote {
  id: string;
  location: string;
  note: string;
  author: string;
}

export const SHORT_LOVE_NOTES: ShortLoveNote[] = [
  { id: "note-1", location: "Garden Gate", note: "You are the prettiest rose in this entire world, Baby.", author: "Your boyfriend" },
  { id: "note-2", location: "Map Compass", note: "No matter which direction you wander, my heart points straight to you.", author: "Always yours" },
  { id: "note-3", location: "Music Player", note: "Every sweet melody sounds a little bit like your laughter.", author: "With love" },
  { id: "note-4", location: "Quiz Corner", note: "Whatever the question is, the answer is always: I adore you.", author: "Your quiz buddy" },
  { id: "note-5", location: "Bouquet Ribbon", note: "Tied with all my love and wrapped in pink ribbons for Princess Gargi.", author: "For you" },
  { id: "note-6", location: "Sleeping Kitten", note: "Sleep tight, sweet kitten. No nightmares allowed in this universe.", author: "Soft headpats" },
  { id: "note-7", location: "Cloud Swing", note: "Let's leave all heavy thoughts down below and swing among pink clouds.", author: "Holding your hand" },
  { id: "note-8", location: "Scrapbook Tape", note: "Pasted here forever: how wonderful it is to love you.", author: "Your boy" },
  { id: "note-9", location: "Starry Telescope", note: "I searched all the galaxies and didn't find anyone as lovely as Gargi.", author: "Stargazer" },
  { id: "note-10", location: "Watering Can", note: "Poured with pure devotion so your smile blooms every day.", author: "Your gardener" },
  { id: "note-11", location: "Memory Chest", note: "Every second with you is a golden keepsake I lock in my heart.", author: "Cherishing you" },
  { id: "note-12", location: "Pink Teacup", note: "Warm sips and sweet hugs for my favourite girl.", author: "Cozy vibes" },
  { id: "note-13", location: "Bookmark", note: "My favourite chapter of life began when you walked into it.", author: "Forever" },
  { id: "note-14", location: "Mirror Frame", note: "Look here: you are looking at someone who is deeply, passionately loved.", author: "Truth" },
  { id: "note-15", location: "Envelope Stamp", note: "Delivered with unlimited kisses directly to Gargi's heart.", author: "Priority Mail" },
  { id: "note-16", location: "Cat Cafe Door", note: "Welcome, Princess! Order whatever you like—it's on me forever.", author: "Your waiter" },
  { id: "note-17", location: "Heart Locket", note: "Inside this locket: your name, surrounded by rose petals.", author: "Safely kept" },
  { id: "note-18", location: "Night Sky", note: "Count the stars tonight, Baby. That's only a fraction of how much I care.", author: "Moonlight" },
  { id: "note-19", location: "Flower Pot", note: "Water me with your smile, Gargi!", author: "Blooming flower" },
  { id: "note-20", location: "Dream Journal", note: "My biggest dream? Seeing you happy every single day.", author: "Yours always" }
];

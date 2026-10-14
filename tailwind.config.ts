import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#FFF0F5",
        "cotton-candy": "#FFD6E7",
        "rose-pink": "#F4A7C5",
        "deep-rose": "#D85A88",
        berry: "#873D62",
        "warm-ivory": "#FFFCF8",
        lavender: "#E9DDFB",
        sage: "#A8C5A5",
        champagne: "#F8E7D8",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-gentle": "floatGentle 4s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "sparkle-spin": "sparkleSpin 8s linear infinite",
        "bloom-in": "bloomIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(2deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
        sparkleSpin: {
          "0%": { transform: "rotate(0deg) scale(0.9)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
          "100%": { transform: "rotate(360deg) scale(0.9)" },
        },
        bloomIn: {
          "0%": { opacity: "0", transform: "scale(0.85) translateY(10px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      boxShadow: {
        romantic: "0 10px 30px -10px rgba(216, 90, 136, 0.25)",
        "romantic-lg": "0 20px 40px -15px rgba(216, 90, 136, 0.35)",
        "glow-pink": "0 0 25px rgba(244, 167, 197, 0.6)",
        "glow-rose": "0 0 35px rgba(216, 90, 136, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;

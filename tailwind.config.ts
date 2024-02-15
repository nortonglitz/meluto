import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { transform: "translateY(2%)", opacity: "0", },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "slide-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-from-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-from-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-from-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
      },
      animation: {
        "fade-in": "fade-in 500ms linear",
        "slide-from-left": "slide-from-left 500ms linear",
        "slide-from-right": "slide-from-right 500ms linear",
        "slide-from-bottom": "slide-from-bottom 500ms linear",
        "slide-from-top": "slide-from-top 500ms linear"
      },
      fontFamily: {
        "murecho": ["var(--font-murecho)"],
        "exo": ["var(--font-exo)"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "trinidad": {
          "50": "#fef5ee",
          "100": "#fce7d8",
          "200": "#f8ccb0",
          "300": "#f4a87d",
          "400": "#ee7949",
          "500": "#e9511d",
          "600": "#db3f1b",
          "700": "#b62e18",
          "800": "#91271b",
          "900": "#752219",
          "950": "#3f0e0b",
        },
        "scooter": {
          "50": "#edfcfe",
          "100": "#d2f5fb",
          "200": "#abeaf6",
          "300": "#72d9ee",
          "400": "#25badd",
          "500": "#15a1c5",
          "600": "#1581a5",
          "700": "#186986",
          "800": "#1c556e",
          "900": "#1c475d",
          "950": "#0c2e40",
        }
      }
    },
  },
  plugins: [],
}
export default config

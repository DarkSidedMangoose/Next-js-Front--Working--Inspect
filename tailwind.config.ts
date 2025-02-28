import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        null: "0px",
        xs: "360px", // Custom breakpoint for extra-small devices
        xsToMedium: "510px",
      },
      boxShadow: {
        "left-top": "-5px -5px 15px rgba(0, 0, 0, 0.3)",
        "bottom-right": "5px 5px 15px rgba(0, 0, 0, 0.3)",
        "all-directions": "0 0 10px 10px rgba(0, 0, 0, 0.5)",
        "custom-shadow": "0 5px 2px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        background: "#bead9f5c",
        colorLightGreen: "#C1C08E",
        colorBrown: "#281B0D",
        mainTextCol: "#734646",
        blueGray: "#607D8B",
        brown: "#8A6D3B",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    aspectRatio,
    // ...
  ], // ...
} satisfies Config;

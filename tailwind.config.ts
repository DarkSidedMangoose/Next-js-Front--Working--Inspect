import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px", // Custom breakpoint for extra-small devices
      },
      boxShadow: {
        "left-top": "-5px -5px 15px rgba(0, 0, 0, 0.3)",
        "bottom-right": "5px 5px 15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

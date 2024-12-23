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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#41B6E6",
        secondary: "#d6ab82",
        altSec: "#623412",
      },
      screens: {
        lg: "1025px", // To account for tablets with 1024px screens
      },
    },
  },
  plugins: [],
};
export default config;

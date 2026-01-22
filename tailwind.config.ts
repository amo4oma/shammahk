
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
        primary: "#a43a3a",
        accent: "#d38d7c",
        highlight: "#e3a200",
        neutral: "#7c9a7c",
      },
      fontFamily: {
        beiruti: ["Beiruti", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

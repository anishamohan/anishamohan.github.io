import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "black": "#222222",
      "white": "#FDFFFC",
      "teal": "#548687",
      "light-teal": "#B4D0D0",
      "dark-teal": "#375858",
      "purple": "#B295A6",
      "light-purple": "#CCB8C4",
      "dark-purple": "#6A4D5E",
      "orange": "#E08E45",
      "light-orange": "#F0CAA8",
      "dark-orange": "#8C4E18",
      "light-grey": "#EBEBEB",
      "dark-grey": "#333333"
    }
  },
  plugins: [],
  darkMode: "class"
};
export default config;

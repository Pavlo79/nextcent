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
      borderRadius: {
        'sm': '0.17rem', // 2px
      },
      boxShadow: { 
        'sm': '0 1.5px 3px rgb(171, 190, 209, 0.2)',
        'DEFAULT': '0 3px 6px rgb(171, 190, 209, 0.4)',
        'md': '0 6px 11px rgb(171, 190, 209, 0.4)',
      },
      maxWidth: {
        '800': '800px',
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};
export default config;
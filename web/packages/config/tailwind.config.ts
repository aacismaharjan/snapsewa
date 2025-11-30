import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../apps/web/**/*.{js,ts,jsx,tsx}",
    "../../apps/admin/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
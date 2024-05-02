import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner|table|input).js",
  ],
  theme: {
    extend: {
      colors: {
        "malamini-primary": "#0013BA",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;

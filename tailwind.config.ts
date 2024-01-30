import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(1, 90%, 64%)",
          blue: "hsl(219, 85%, 26%)",
        },
        neutral: {
          "very-light-grayish-blue": "hsl(210, 60%, 98%)",
          "light-grayish-blue-1": "hsl(211, 68%, 94%)",
          "light-grayish-blue-2": "hsl(205, 33%, 90%)",
          "grayish-blue": "hsl(219, 14%, 63%)",
          "dark-grayish-blue": "hsl(219, 12%, 42%)",
          "very-dark-blue": "hsl(224, 21%, 14%)",
          light: "hsl(225, 50%, 98%)",
        },
      },
    },
  },
  plugins: [],
}
export default config

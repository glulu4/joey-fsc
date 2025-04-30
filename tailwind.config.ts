import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        'fill': 'fill-available',
        'webkit-fill': '-webkit-fill-available',
        'moz-fill': '-moz-available',
      },
      height: {
        'fill': 'fill-available',
        'webkit-fill': '-webkit-fill-available',
        'moz-fill': '-moz-available',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // background: "#FFF4EC",
        // background: "#eeeee4",
        background: "#f8f8f8",
        // background: "#ede7e1",
        foreground: "hsl(var(--foreground))",

        primary:"#a3d43f"

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },

      fontSize: {
        // Body
        'body-regular-14': ['14px', '19px'], // regular 14
        'body-bold-14': ['14px', '19px'],    // bold 14
        'body-regular-13': ['13px', '19px'], // regular 13

        // Titles
        'card-title-24': ['24px', '33px'],   // 24pt card title
        'inner-card-title-18': ['18px', '24px'], // inner 18pt title
        'card-title-30': ['30px', '36px'],   // 30px extrabold

        // Other
        'medium-16': ['16px', '24px'],       // 16px medium
        'bold-22': ['22px', '30px'],         // 22px bold
      },

    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;

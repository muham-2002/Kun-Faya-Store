import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        "2xl": "1400px",
      },
      backgroundColor: {
        // "red-1": "#FF0000",
        "red-1": "#EF7422",
        "grey-1": "#F7F7F7",
        "grey-2": "#8A8A8A",
      },
      fontSize: {
        "heading1-bold": [
          "50px",
          {
            lineHeight: "100%",
            fontWeight: "700",
          },
        ],
        "heading2-bold": [
          "40px",
          {
            lineHeight: "100%",
            fontWeight: "700",
          },
        ],
        "heading3-bold": [
          "30px",
          {
            lineHeight: "100%",
            fontWeight: "700",
          },
        ],
        "heading4-bold": [
          "24px",
          {
            lineHeight: "100%",
            fontWeight: "700",
          },
        ],
        "heading5-bold": [
          "20px",
          {
            lineHeight: "100%",
            fontWeight: "700",
          },
        ],
        "body-bold": [
          "18px",
          {
            lineHeight: "100%",
            fontWeight: "700",
          },
        ],
        "body-semibold": [
          "18px",
          {
            lineHeight: "100%",
            fontWeight: "600",
          },
        ],
        "body-medium": [
          "18px",
          {
            lineHeight: "100%",
            fontWeight: "500",
          },
        ],
        "base-bold": [
          "16px",
          {
            lineHeight: "100%",
            fontWeight: "600",
          },
        ],
        "base-medium": [
          "16px",
          {
            lineHeight: "100%",
            fontWeight: "500",
          },
        ],
        "small-bold": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "700",
          },
        ],
        "small-medium": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        // "red-1": "#FF0000",
        "red-1": "#EF7422",
        solid: "hsl(var(--solid))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
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
        gradient: "gradient 3s linear infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide"), require('daisyui'),],
} satisfies Config

export default config
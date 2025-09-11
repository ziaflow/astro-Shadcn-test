/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        snes: {
          nature: "var(--snes-nature)",
          natureShade: "var(--snes-nature-shade)",
          plumber: "var(--snes-plumber)",
          plumberShade: "var(--snes-plumber-shade)",
          sunshine: "var(--snes-sunshine)",
          sunshineShade: "var(--snes-sunshine-shade)",
          ocean: "var(--snes-ocean)",
          oceanShade: "var(--snes-ocean-shade)",
          turquoise: "var(--snes-turquoise)",
          turquoiseShade: "var(--snes-turquoise-shade)",
          phantom: "var(--snes-phantom)",
          phantomShade: "var(--snes-phantom-shade)",
          rose: "var(--snes-rose)",
          roseShade: "var(--snes-rose-shade)",
          galaxy: "var(--snes-galaxy)",
          galaxyShade: "var(--snes-galaxy-shade)",
          ember: "var(--snes-ember)",
          emberShade: "var(--snes-ember-shade)",
          grey: "var(--snes-grey)",
          greyShade: "var(--snes-grey-shade)",
          dark: "var(--dark-grey)",
          darkShade: "var(--snes-dark-shade)",
          themeDropdown: "var(--snes-theme-dropdown)",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

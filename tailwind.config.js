/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html,js}",
    "./src/_includes/**/*.{njk,md,html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f2f2f2", // Light text
        secondary: "#a0a0a0", // Muted light gray
        background: "#222222", // Dark background
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
      spacing: {
        xs: "clamp(8px, 1vw, 12px)",
        sm: "clamp(16px, 2vw, 24px)",
        md: "clamp(24px, 3vw, 32px)",
        lg: "clamp(48px, 5vw, 64px)",
        xl: "clamp(64px, 8vw, 96px)",
        "2xl": "clamp(96px, 10vw, 128px)",
        "3xl": "clamp(128px, 15vw, 192px)",
      },
      container: {
        center: true,
        screens: {
          sm: "clamp(640px, 90vw, 640px)",
          md: "clamp(640px, 90vw, 768px)",
          lg: "clamp(768px, 85vw, 1024px)",
          xl: "clamp(1024px, 80vw, 1280px)",
          "2xl": "clamp(1280px, 75vw, 1536px)",
        },
        padding: {
          DEFAULT: "clamp(1rem, 2vw, 2rem)",
          sm: "clamp(2rem, 3vw, 4rem)",
          md: "clamp(3rem, 4vw, 6rem)",
          lg: "clamp(4rem, 6vw, 8rem)",
          xl: "clamp(6rem, 8vw, 10rem)",
        },
      },
      gap: {
        sm: "clamp(12px, 1.5vw, 16px)",
        md: "clamp(24px, 2.5vw, 32px)",
        lg: "clamp(32px, 3.5vw, 48px)",
      },
      typography: {
        light: {
          css: {
            '--tw-prose-body': '#f2f2f2',
            '--tw-prose-headings': '#f2f2f2',
            '--tw-prose-links': '#f2f2f2',
            '--tw-prose-bold': '#f2f2f2',
            '--tw-prose-counters': '#a0a0a0',
            '--tw-prose-bullets': '#a0a0a0',
            '--tw-prose-hr': '#a0a0a0',
            '--tw-prose-quotes': '#f2f2f2',
            '--tw-prose-quote-borders': '#a0a0a0',
            '--tw-prose-captions': '#a0a0a0',
            '--tw-prose-code': '#f2f2f2',
            '--tw-prose-pre-code': '#f2f2f2',
            '--tw-prose-pre-bg': '#222222',
            '--tw-prose-th-borders': '#a0a0a0',
            '--tw-prose-td-borders': '#a0a0a0',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
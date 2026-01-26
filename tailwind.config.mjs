/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        'on-accent': 'var(--color-on-accent)',
        fg: 'var(--color-fg)',
        muted: 'var(--color-muted)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
      },
    },
  },
  plugins: [],
}

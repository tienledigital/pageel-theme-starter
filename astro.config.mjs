// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import createPageelTheme from '@pageel/theme-core';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    createPageelTheme({
      features: {
        darkMode: true,
        cssLayers: true,
        validation: true,
      },
    }),
  ],
});

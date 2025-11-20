// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://vibery-studio.github.io',
  base: '/astroria',
  vite: {
    plugins: [tailwindcss()]
  }
});
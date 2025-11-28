// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const defaultSite = "https://vibery-studio.github.io/astroria";
const rawBase = process.env.SITE_BASE ?? "/astroria/";
const baseWithLeading = rawBase.startsWith("/") ? rawBase : `/${rawBase}`;
const normalizedBase = baseWithLeading.endsWith("/") ? baseWithLeading : `${baseWithLeading}/`;

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? defaultSite,
  base: normalizedBase,
  vite: {
    plugins: [tailwindcss()]
  }
});

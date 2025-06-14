// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://screenlite.org',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
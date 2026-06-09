import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages project site. Swap `site` to a custom domain and set base: ''
  // (plus add public/CNAME) when a real domain is connected.
  site: 'https://simontheteemo.github.io',
  base: '/csfire',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

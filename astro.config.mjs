import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://riverkolpa.si',
  integrations: [sitemap(), react(), sentry(), spotlightjs()],
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    },
  },
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
    },
  },
});
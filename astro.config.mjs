import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const isDev = process.env.NODE_ENV !== 'production';

const integrations = [sitemap(), react()];

// Only enable Spotlight in development (dev-only debug UI).
if (isDev) {
  const spotlightjs = (await import('@spotlightjs/astro')).default;
  integrations.push(spotlightjs());
}

// Only enable Sentry when a DSN is configured.
if (process.env.SENTRY_DSN) {
  const sentry = (await import('@sentry/astro')).default;
  integrations.push(
    sentry({
      dsn: process.env.SENTRY_DSN,
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    })
  );
}

// https://astro.build/config
export default defineConfig({
  site: 'https://riverkolpa.si',
  integrations,
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

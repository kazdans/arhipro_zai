// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Vietne ir pilnībā statiska — tāpēc nav vajadzīgs SSR adapteris.
// Cloudflare Pages (caur Git integrāciju) apkalpo statiskos failus ātri un vienkārši.
// Ja nākotnē vajadzīga servera loģika (forma, API), var pievienot @astrojs/cloudflare adapteri.
export default defineConfig({
  site: 'https://arhiprozai.lazdans.workers.dev',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'lv',
        locales: { lv: 'lv-LV' },
      },
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    responsiveStyles: true,
  },
});

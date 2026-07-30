// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://radiofedex.github.io',
  base: '/manuelamameliwebsite',
  integrations: [sitemap()]
});
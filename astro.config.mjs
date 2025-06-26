import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://kfu-district.ru',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
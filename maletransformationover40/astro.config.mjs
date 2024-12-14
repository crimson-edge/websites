import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://maletransformation.me',
  output: 'server',
  adapter: netlify(),
  build: {
    format: 'directory',
  },
  vite: {
    logLevel: 'info',
    build: {
      sourcemap: true
    }
  }
});
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
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [{
      protocol: 'https'
    }]
  },
  vite: {
    logLevel: 'info',
    build: {
      sourcemap: true
    }
  }
});
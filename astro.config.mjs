import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://okaynils.github.io', 
  base: 'based.health',
  vite: {
    plugins: [tailwindcss()],
  },
});
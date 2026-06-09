import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const base = process.env.GITHUB_ACTIONS ? 'alloy-docs' : undefined;

export default defineConfig({
  integrations: [mdx()],
  site: 'https://timdosealloy.github.io',
  base,
});
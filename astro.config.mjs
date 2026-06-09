import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import relativeLinks from 'astro-relative-links';

const base = process.env.GITHUB_ACTIONS ? 'alloy-docs' : undefined;

export default defineConfig({
  integrations: [mdx(), relativeLinks()],
  site: 'https://timdosealloy.github.io',
  base,
});
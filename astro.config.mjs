import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import relativeLinks from 'astro-relative-links';

export default defineConfig({
  integrations: [mdx(), relativeLinks()],
  site: 'https://timdosealloy.github.io',
  base: 'alloy-docs',
});
// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.mwbradylaw.com',
	integrations: [
		mdx(),
		react(),
		tailwind(),
		sitemap()
	],
	output: 'server',
	build: {
		assets: 'assets'
	},
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp'
		}
	},
	vite: {
	    define: {
	      'process.env.TINA_PUBLIC_IS_LOCAL': '"true"'
	    }
	}
});


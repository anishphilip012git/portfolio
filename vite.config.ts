import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: UserConfig = {
	plugins: [UnoCSS(), sveltekit()],
	build: {
		outDir: 'build',
		rollupOptions: {
			// Ensure proper handling of assets
		},
	},
	server: {
		// Ensure server settings are correct
	},
};

export default config;

//import adapter from '@sveltejs/adapter-auto';
import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],
	kit: {
		adapter: vercel(),
		alias: {
			$atoms: path.resolve("./src/lib/components/atoms"),
			$components: path.resolve("./src/lib/components"),
			$functions: path.resolve("./src/lib/functions"),
			$molecules: path.resolve("./src/lib/components/molecules"),
			$organisms: path.resolve("./src/lib/components/organisms"),
			$settings: path.resolve("./src/lib/settings"),
			$stores: path.resolve("./src/lib/stores"),
			$types: path.resolve("./src/lib/types"),
			$utils: path.resolve("./src/lib/utils"),
		},
	},
};

export default config;

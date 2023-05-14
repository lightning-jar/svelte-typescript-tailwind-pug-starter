import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			$atoms: "./src/lib/components/atoms",
			$components: "./src/lib/components",
			$molecules: "./src/lib/components/molecules",
			$organisms: "./src/lib/components/organisms",
			$stores: "./src/lib/stores",
			$types: "./src/lib/types",
			$utils: "./src/lib/utils",
		},
	},
};

export default config;

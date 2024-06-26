// import adapter from "@sveltejs/adapter-auto";
import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],
	kit: {
		adapter: vercel(),
		alias: {
			$atoms: "./src/lib/components/atoms",
			$assets: "./src/lib/assets",
			$components: "./src/lib/components",
			$data: "./src/lib/data",
			$molecules: "./src/lib/components/molecules",
			$organisms: "./src/lib/components/organisms",
			$queries: "./src/lib/queries",
			$settings: "./src/lib/settings",
			$stores: "./src/lib/stores",
			$tools: "./src/lib/components/tools",
			$types: "./src/lib/types",
			$utils: "./src/lib/utils",
		},
	},
};

export default config;

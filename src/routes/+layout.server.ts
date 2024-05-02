// example +layout.server.ts file
// +layout.server.ts files only run on the server
// they can be used to load data on the server for pre-rendered pages
// which is what this file is doing

// set pages to prerender
// see https://kit.svelte.dev/docs#prerendering
export const prerender = true;

// types
import type { LayoutServerLoad } from "./$types";

// load function
export const load: LayoutServerLoad = async function ({ url, locals }) {
	// get pathname
	const { pathname } = url;

	// unpack locals
	const { content, settings, siteMeta, utils } = locals;

	// example of how to execute a redirect pattern
	// process the redirects
	const { redirects } = settings;
	redirects.forEach((item: string[]) => {
		if (pathname == item[0] || pathname.slice(0, -1) == item[0]) {
			throw utils.redirect(301, item[1]);
		}
	});

	// unpack site meta
	const { dev, version } = siteMeta;

	// unpack footer content store
	const footer = utils.get(content.footerContentStore);

	// returning footer data
	return {
		dev,
		footer,
		version,
	};
};

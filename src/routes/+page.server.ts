// types
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async function ({ locals }) {
	// get content and utils from locals
	const { content, utils } = locals;

	// use get util to unpack home content store
	const home = utils.get(content.homeContentStore);
	// unpack home content buckets
	const { cta, headline, text, brands, meta } = home;

	return {
		cta,
		headline,
		text,
		brands,
		meta,
	};
};

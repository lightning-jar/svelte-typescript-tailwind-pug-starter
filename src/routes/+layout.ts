// set pages to prerender
export const prerender = true;

// data
import { brands } from "$data/brands";

// types
import type { LayoutLoadEvent } from "./$types";

// load function
export async function load(event: LayoutLoadEvent) {
	return {
		brands,
	};
}

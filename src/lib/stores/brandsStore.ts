import { writable } from "svelte/store";

export interface Brand {
	name: string;
	url: string;
}

const brandsData: Brand[] = [];
export const brands = writable(brandsData);

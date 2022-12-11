import { readable } from 'svelte/store';

export interface Brand {
	name: string;
	url: string;
}

const brandsData: Brand[] = [
	{ name: 'Svelte', url: 'https://svelte.dev/' },
	{ name: 'Typescript', url: 'https://www.typescriptlang.org/' },
	{ name: 'TailwindCSS', url: 'https://tailwindcss.com/' },
	{ name: 'Pug', url: 'https://pugjs.org/api/getting-started.html' }
];
export const brands = readable(brandsData);

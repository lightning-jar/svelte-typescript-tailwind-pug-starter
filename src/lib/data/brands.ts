// you can use the data folder to store local static data, like json files
// if it is data that can change, use a store instead

// import logos
import pugLogo from "$assets/pug.svg";
import svelteLogo from "$assets/svelte.svg";
import tailwindLogo from "$assets/tailwindcss.svg";
import typescriptLogo from "$assets/typescript.svg";

export interface Brand {
	name: string;
	logo: string;
	url: string;
}
export const brands: Brand[] = [
	{ name: "Svelte", logo: svelteLogo, url: "https://svelte.dev/" },
	{
		name: "Typescript",
		logo: typescriptLogo,
		url: "https://www.typescriptlang.org/",
	},
	{ name: "TailwindCSS", logo: tailwindLogo, url: "https://tailwindcss.com/" },
	{
		name: "Pug",
		logo: pugLogo,
		url: "https://pugjs.org/api/getting-started.html",
	},
];

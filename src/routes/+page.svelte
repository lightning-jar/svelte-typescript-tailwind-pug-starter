<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// Components
	import LogoBlock from '$atoms/LogoBlock.svelte';

	// Date utility
	const today = new Date();
	const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

	// Data
	const logos: string[][] = [
		['Svelte', 'https://svelte.dev/'],
		['Typescript', 'https://www.typescriptlang.org/'],
		['TailwindCSS', 'https://tailwindcss.com/'],
		['Pug', 'https://pugjs.org/api/getting-started.html']
	];
</script>

<template lang="pug">
//- Pug Syntax
.flex.justify-center.min-h-screen.items-center.text-white.p-4.relative(class="bg-[#142239] pb-48")
	div(class="sm:max-w-lg lg:max-w-xl xl:max-w-2xl")

		//- Logo grid
		.mt-6.mb-8.grid.grid-cols-2.gap-8.mx-auto(class="max-w-[12rem] sm:m-0 sm:grid-cols-7 sm:gap-0 sm:max-w-none sm:mb-12")
			+each('logos as logo, index')
				+const('name = (logo[0]) ? logo[0] : ""')
				+const('href = logo[1]')
				+const('isLast = (index == (logos.length - 1))')
				LogoBlock(
					"{name}"
					"{href}"
					"{isLast}")

		.text-center(class="sm:text-left")
			//- Headline
			h1.mb-3.text-xl.font-semibold.text-accent
				| Svelte Typescript TailwindCSS & Pug Starter.

			//- Body Copy
			p.mb-10.text-lg.opacity-90(class="sm:mb-8")
				| An open source starter template for Node projects using SvelteKit, Typescript, TailwindCSS, and Pug. Designed to help get you up and running quickly, without all the headaches.

			//- Call-to-action
			.mb-16.w-full(class="sm:mb-24")
				a.inline-block.px-4.py-2.text-light.bg-transparent.outline.outline-white.outline-1.rounded.transition-all(
					class="hover:bg-accent hover:outline-transparent hover:text-primary"
					href="https://github.com/lightning-jar/lj-sveltekit-ts-tailwind-pug-starter"
					title="View project on Github"
					) Clone from Github

//- Prefooter
.bottom-0.left-0.text-white.text-sm.pb-6.px-4.w-full.bg-primary(class="sm:absolute sm:px-8")

	//- Cink to Pugify HTML to Pug Converter
	.text-sm.text-center.px-4.py-4.rounded-md.mb-0(class="bg-white/5")
		a.italic.inline-block.text-white.underline-offset-4.opacity-90.transtion-colors(
			class="hover:text-accent hover:underline hover:opacity-90",
			href="https://pugify.dev"
			title="convert HTML to pug"
			)
			span Also check out my ad-free, tracker-free HTML to Pug converter @ https://pugify.dev

//- Footer
footer.bg-primary.text-white.text-xs.pb-24.px-4
	//- Attribution
	.opacity-70.text-center
		.mb-1.inline-block Created by Kevin Peckham for
			a.inline-block.ml-1.underline-offset-4.transition-colors(
				href="https://lightningjar.com"
				class="hover:text-accent") Lightning Jar.
		div(class="sm:inline-block sm:ml-2") Last updated: {date}
</template>

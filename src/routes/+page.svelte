<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// Components
	import LogoBlock from '$molecules/LogoBlock.svelte';
	import PlusSpacer from '$atoms/PlusSpacer.svelte';

	// Date utility
	const today = new Date();
	const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

	// Logos
	interface LogoData {
		[key: string]: string | undefined;
		title?: string;
		href?: string;
		name: string;
	}
	const logos: LogoData[] = [
		{
			title: 'Learn about Svelte',
			href: 'https://svelte.dev/',
			name: 'Svelte'
		},
		{
			name: 'spacer'
		},
		{
			title: 'Learn about Typescript',
			href: 'https://www.typescriptlang.org/',
			name: 'Typescript'
		},
		{
			name: 'spacer'
		},
		{
			title: 'Learn about TailwindCSS',
			href: 'https://tailwindcss.com/',
			name: 'TailwindCSS'
		},
		{
			name: 'spacer'
		},
		{
			title: 'Learn about Pug',
			href: 'https://pugjs.org/api/getting-started.html',
			name: 'Pug'
		}
	];
</script>

<template lang="pug">
//- Pug Syntax
.flex.justify-center.min-h-screen.items-center.text-white.p-4.relative(class="bg-[#142239] pb-48")
	div(class="sm:max-w-lg lg:max-w-xl xl:max-w-2xl")

		//- logo grid
		.mt-6.mb-8.grid.grid-cols-2.gap-8.mx-auto(class="max-w-[12rem] sm:m-0 sm:grid-cols-7 sm:gap-0 sm:max-w-none sm:mb-12")
			+each('logos as logo')
				+const('name = logo.name')
				+if('name != "spacer"')
					+const('href = logo.href')
					+const('title = logo.title')
					a.flex.flex-col.h-full.justify-between.group("{href}" "{title}")
						LogoBlock("{name}")
					+elseif('name == "spacer"')
						.hidden.place-content-center(class="sm:grid")
							PlusSpacer

		.text-center(class="sm:text-left")
			//- Headline
			h1.mb-3.text-xl.font-semibold.text-accent
				| A Starter Template for the Svelte Preprocessed Stack.

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

//- Footer
.bottom-0.left-0.text-white.text-sm.pb-6.px-4.w-full.bg-primary(class="sm:absolute sm:px-8")

	//- Cink to Pugify HTML to Pug Converter
	.text-sm.text-center.px-4.py-4.rounded-md.mb-8(class="bg-white/5")
		a.inline-block.underline.underline-offset-4.opacity-90.transtion-colors(
			class="hover:text-accent hover:opacity-90",
			href="https://pugify.dev"
			title="convert HTML to pug"
			) Also check out the Pugify | HTML to Pug converter

	//- Attribution
	.opacity-70.text-sm.text-center
		.inline-block Created by Kevin Peckham for
		a.inline-block.ml-1.underline.underline-offset-4.transition-colors(
			href="https://lightningjar.com"
			class="hover:text-accent") Lightning Jar.
		span(class="sm:inline-block sm:ml-2") Last updated: {date}
</template>

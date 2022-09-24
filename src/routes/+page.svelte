<script lang="ts">
	// components
	import LogoBlock from '$molecules/LogoBlock.svelte';
	import PlusSpacer from '$atoms/PlusSpacer.svelte';

	const today = new Date();
	// get today's date in MM/DD/YYYY format
	const date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

	interface Logo {
		[key: string]: string | undefined;
		title?: string;
		href?: string;
		name: string;
	}
	const logos: Logo[] = [
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
.w-full.flex.justify-center.h-screen.items-center.text-white.p-4.relative(class="bg-[#142239]")
	.max-w-lg.text-white(class="lg:max-w-xl xl:max-w-2xl")
		.mb-12.grid.grid-cols-2.gap-16(class="max-w-sm sm:grid-cols-7 sm:gap-0 sm:max-w-none")

			//- Logos
			+each('logos as logo')
				+if('logo.name != "spacer"')
					+const('href = logo.href')
					+const('title = logo.title')
					a.flex.flex-col.h-full.justify-between.group(
						"{href}"
						"{title}"
						)
						//- Logo Image
						figure(class="h-3/4 p-0")
							LogoBlock(
							name!="{logo.name}"
							)
						//- Logo Caption
						figcaption.hidden.text-center.text-sm.border-t.border-white.pt-4.border-opacity-40.mt-2.font-light(
							class="lg:text-base xl:text-lg tracking-wider group-hover:text-accent transition-colors sm:block"
							)
							| {logo.name}
					+elseif('logo.name == "spacer"')
						.hidden.h-full(class="sm:flex items-center justify-center")
							PlusSpacer

		h1.mb-3.text-xl.font-semibold(class="text-accent")
			| A Starter Template for the Svelte Preprocessed Stack.

		p.text-lg.mb-8.opacity-90
			| An open source starter template for Node projects using SvelteKit, Typescript, TailwindCSS, and Pug. Designed to help get you up and running quickly, without all the headaches.

		a.inline-block.px-4.py-2.text-light(
			class="bg-transparent outline outline-white outline-1 rounded hover:bg-accent hover:outline-transparent hover:text-primary transition-all",
			href="https://github.com/lightning-jar/lj-sveltekit-ts-tailwind-pug-starter" title="View project on Github"
			) Clone from Github

//- footer
.absolute.bottom-0.left-0.text-white.text-sm.pb-6.pl-4.opacity-80(class="sm:pl-8")
	span Created by Kevin Peckham for
	a.inline-block.ml-1.underline.underline-offset-4(href="https://lightningjar.com" class="hover:text-accent transition-colors") Lightning Jar.
	span.inline-block.ml-2 Last updated: {date}
</template>

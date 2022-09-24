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
.w-full.flex.justify-center.min-h-screen.items-center.text-white.p-4.relative(class="bg-[#142239] pb-48")
	.text-white(class="w-full sm:max-w-lg lg:max-w-xl xl:max-w-2xl")

		//- logo grid
		.mt-6.mb-8.grid.grid-cols-2.gap-8.mx-auto(class="max-w-[12rem] sm:m-0 sm:grid-cols-7 sm:gap-0 sm:max-w-none sm:mb-12")
			+each('logos as logo')
				+if('logo.name != "spacer"')
					+const('href = logo.href')
					+const('title = logo.title')
					a.flex.flex-col.h-full.justify-between.group(
						"{href}"
						"{title}"
						)
						//- logo figure
						figure(class="h-full p-0 block")
							div(class="h-3/4")
								LogoBlock(
								name!="{logo.name}"
								)
							//- caption
							figcaption.hidden.text-center.text-sm.border-t.border-white.pt-4.border-opacity-40.mt-1.font-light(
								class="lg:text-base xl:text-lg tracking-wider group-hover:text-blue-300 transition-colors sm:block"
								)
								| {logo.name}
					+elseif('logo.name == "spacer"')
						.hidden.h-full(class="sm:flex items-center justify-center")
							PlusSpacer
		//- headline
		h1.mb-3.text-xl.font-semibold.text-center(class="text-accent sm:text-left")
			| A Starter Template for the Svelte Preprocessed Stack.
		//- body copy
		p.text-lg.mb-10.opacity-90.text-center(class="sm:text-left sm:mb-8")
			| An open source starter template for Node projects using SvelteKit, Typescript, TailwindCSS, and Pug. Designed to help get you up and running quickly, without all the headaches.
		//- cta
		.mb-16.w-full.text-center(class="sm:text-left sm:mb-24")
			a.inline-block.px-4.py-2.text-light(
				class="bg-transparent outline outline-white outline-1 rounded hover:bg-accent hover:outline-transparent hover:text-primary transition-all",
				href="https://github.com/lightning-jar/lj-sveltekit-ts-tailwind-pug-starter" title="View project on Github"
				) Clone from Github
		//- .text-sm.text-center.px-4.py-4.rounded-md(class="bg-white/5 sm:text-left")
		//- 	span Also check out the
		//- 	a.inline-block.ml-1.underline.underline-offset-4(
		//- 		class="hover:text-accent transition-colors",
		//- 		href="https://pugify.dev"
		//- 		title="convert HTML to pug"
		//- 		) HTML to Pug converter

//- footer
.bottom-0.left-0.text-white.text-sm.pb-6.px-4.w-full.bg-primary(class="sm:absolute sm:px-8")
	.text-sm.text-center.px-4.py-4.rounded-md.mb-8(class="bg-white/5")
		a.inline-block.underline.underline-offset-4.opacity-90(
			class="hover:text-accent hover:opacity-90 transition-colors",
			href="https://pugify.dev"
			title="convert HTML to pug"
			) Also check out the HTML to Pug converter
	.opacity-70.text-sm.text-center
		.inline-block Created by Kevin Peckham for
		a.inline-block.ml-1.underline.underline-offset-4(href="https://lightningjar.com" class="hover:text-accent transition-colors") Lightning Jar.
		span(class="sm:inline-block sm:ml-2") Last updated: {date}
</template>

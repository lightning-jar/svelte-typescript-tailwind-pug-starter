<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// Components
	import LogoBlock from '$components/molecules/LogoBlock.svelte';

	// Store
	import { brands } from '$lib/store/brandsStore';
</script>

<template lang="pug">
.grid.place-content-center.min-h-screen.text-white.p-4.relative.pb-48.bg-primary
	div(class="sm:max-w-lg lg:max-w-xl xl:max-w-2xl")
		//- Brand Grid
		.mt-6.mb-8.grid.grid-cols-2.gap-8.mx-auto(class="max-w-[12rem] sm:m-0 sm:grid-cols-7 sm:gap-0 sm:max-w-none sm:mb-12 md:mb-8")
			+each('$brands as brand, index')
				+const('name = brand.name')
				+const('href = brand.url')
				+const('src = "/images/" + name.toLowerCase() + ".svg"')
				+const('hidePlus = $brands.length == index + 1')
				LogoBlock(
					"{name}"
					"{href}"
					"{hidePlus}"
					"{src}")

		.text-center(class="sm:text-left")
			//- Headline
			h1.mb-3.font-semibold.text-accent(class="prose-xl")
				| Hit the ground running with Sveltekit, Typescript, TailwindCSS & Pug.

			//- Body Copy
			p.mb-10.text-md.opacity-90(class="prose-base sm:mb-8")
				| This project is an open source starter template for Node projects using SvelteKit, Typescript, TailwindCSS, and Pug. Designed to help get you up and running quickly with the SkinnyPug Stack.

			//- Call-to-action
			.mb-16.w-full(class="sm:mb-24")
				a.inline-block.px-4.py-2.text-light.bg-transparent.outline.outline-white.outline-1.rounded.transition-all(
					class="hover:bg-accent hover:outline-transparent hover:text-primary"
					href="https://github.com/lightning-jar/lj-sveltekit-ts-tailwind-pug-starter"
					title="View project on Github"
					) Clone from Github

//- Prefooter
.bottom-0.left-0.text-white.text-sm.pb-6.px-4.w-full.bg-primary(class="sm:absolute sm:px-8")

	//- Cross link
	.text-sm.text-center.px-4.py-4.rounded-md.mb-0.group(class="bg-white/5")
		a.italic.inline-block.text-white.opacity-90.transition-all(
			class="group-hover:text-accent hover:opacity-100",
			href="https://pugify.dev"
			title="convert HTML to pug"
			) Also check out the ad-free HTML to Pug converter @ https://pugify.dev

//- Footer
footer.bg-primary.text-white.text-xs.pb-24.px-4
	.text-center
		.mb-1.inline-block
			span.opacity-70  Created by Kevin Peckham for
			a.opacity-70.inline-block.ml-1.underline-offset-4.transition-all(
				href="https://lightningjar.com"
				class="hover:text-accent hover:opacity-100 hover:underline") Lightning Jar.
</template>

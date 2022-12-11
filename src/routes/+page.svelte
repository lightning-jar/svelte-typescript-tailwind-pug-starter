<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// components
	import LogoBlock from '$components/molecules/LogoBlock.svelte';
	import ButtonLink from '$atoms/ButtonLink.svelte';
	import Footer from '$atoms/Footer.svelte';
	import LogosGrid from '$molecules/LogosGrid.svelte';
	import PreFooter from '$atoms/PreFooter.svelte';

	// store
	import { brands } from '$stores/brandsStore';
</script>

<template lang="pug">

//- head
svelte:head
	title Svelte Pug Tailwind Typescript | Starter Template
	meta(name="description" content="A node starter template for the Svelte Preprocessed stack.")

//- body
main.grid.place-content-center.min-h-screen.text-white.p-4.relative.pb-48.bg-primary
	div(class="sm:max-w-lg lg:max-w-xl xl:max-w-2xl")
		//- logos grid
		LogosGrid

		.text-center(class="sm:text-left")
			//- headline
			h1.mb-3.font-semibold.text-accent(class="prose-xl")
				| Hit the ground running with Sveltekit, Typescript, TailwindCSS &amp; Pug.

			//- text
			p.mb-10.text-md.opacity-90(class="prose-base sm:mb-8")
				| This project is an open source starter template for Node projects using SvelteKit, Typescript, TailwindCSS, and Pug. Designed to help get you up and running quickly with the SkinnyPug Stack.

			//- cta
			ButtonLink(
				url!="https://github.com/lightning-jar/lj-sveltekit-ts-tailwind-pug-starter"
				title!="View project on Github"
				) Clone from Github

//- pre-footer
PreFooter(
	targetUrl!="https://pugify.dev"
	title!="convert HTML to pug"
	)
	svelte:fragment(slot="default") Also check out the ad-free HTML to Pug converter @ https://pugify.dev

//- footer
Footer(
	authorLink!="https://fosstodon.org/@kevinpeckham"
	orgLink!="https://lightningjar.com"
	)
	svelte:fragment(slot="author") Kevin Peckham
	svelte:fragment(slot="org") Lightning Jar
</template>

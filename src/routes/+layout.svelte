<script lang="ts">
	import "../app.css";

	// import components
	import Footer from "$components/Footer.svelte";

	// import child page data
	import { page } from "$app/stores";

	// import data type for layout data
	import type { LayoutData } from "./$types";

	// catch data
	export let data: LayoutData;
</script>

<template lang="pug">
	//- head metadata, inserted using data from +layout.ts
	//- a useful pattern for a multi-page site
	svelte:head
		+if('$page.data?.meta?.title')
			title { $page.data.meta.title }
		+if('$page.data?.meta?.description')
			meta(
				content!="{ $page.data.meta.description }",
				name="description"
			)
		+if('!data.dev && $page?.data?.meta?.robotsFollow')
	div(
		class=`
			bg-primary
			grid
			grid-cols-1
			grid-rows-[auto,1fr,auto]
			justify-start
			max-w-screen
			min-h-screen
			overflow-hidden`
	)
		//- page container
		.text-neutral-50.bg-primary.w-full
			slot

		//- prefooter
		aside
			a(
				class=`
					bg-white/5
					bottom-0
					left-0
					right-0
					flex
					italic
					justify-center
					opacity-90
					p-4
					m-[0_16px_24px]
					rounded
					text-center
					text-[.825rem]
					transition-all
					sm:absolute`,
				href="https://pugify.dev",
				rel="external",
				title!="convert html to pug"
			) Also check out the ad-free HTML to Pug converter @ https://pugify.dev

		Footer(
			author!="{ data.footer.author }",
			org!="{ data.footer.org }"
		)

	|</template>

<style lang="postcss">
	/* Example global style rule */

	:global(html) {
		@apply text-neutral-50;
	}
</style>

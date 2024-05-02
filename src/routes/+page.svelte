<script lang="ts">
	// set context api
	import { setContext } from "svelte";

	// components
	import ButtonLink from "$components/ButtonLink.svelte";
	import Brand from "$components/Brand.svelte";

	// types
	import type { PageData } from "./$types";

	// catch data from layout function in +layout.ts
	export let data: PageData;
</script>

<template lang="pug">
	//- outer container
	main(
		class=`
			gap-y-2
			grid
			grid-cols-1
			min-h-screen
			place-content-start
			justify-items-center
			text-center
			sm:text-left
			sm:pt-[4.5em]
			md:pt-24`
	)
		//- inner container
		div(class=`
				p-[18px_36px_216px]
				sm:p-0
				sm:max-w-sm
				md:max-w-md
				`)
			//- brands
			+if('data?.brands')
				header(
					class=`
						mb-[2ch]
						px-8
						gap-x-8
						grid
						grid-cols-2
						sm:gap-x-0
						sm:gap-y-[1ch]
						sm:grid-cols-7
						sm:px-0`
				)
					+each('data.brands as brand, index')
						//- logo
						Brand(brand!="{ brand }")

						//- plus sign
						svelte:element(
							class="hidden place-content-center sm:grid",
							this!="{ index != (data?.brands?.length ?? 0) - 1 ? 'div' : null }"
						) +

			//- headline
			+if('data?.headline')
				h1 { data.headline }

			//- text
			+if('data?.text')
				p(class="leading-relaxed opacity-90 mb-8")
					//- use html to render rich text
					+html('data.text')

			//- button link
			+if('data?.cta')
				ButtonLink(link!="{ data.cta }")

	|</template>

<style lang="postcss">
	/* examples of how Tailwind may be used within the style section of a Svelte component */

	h1 {
		@apply font-semibold
			leading-snug
			mb-[.75ch]
			text-[1.425em]
			text-accent;
	}
</style>

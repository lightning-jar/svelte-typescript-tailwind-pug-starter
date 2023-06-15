<!--
@component
Displays a grid of logos.
-->
<script lang="ts">
	// components
	import LogoBlock from "$molecules/LogoBlock.svelte";

	// props
	export let brands: Brand[] = [];

	// types
	import type { Brand } from "$data/brands";

	// variable declarations with types for variables used in template
	let showPlus: boolean;
	let brand: Brand;
</script>

<template lang="pug">
	.mx-auto.mt-6.mb-8.grid.grid-cols-2.gap-8(
		class="max-w-[12rem] sm:m-0 sm:mb-12 sm:max-w-none sm:grid-cols-7 sm:gap-0 md:mb-8"
	)
		+each('brands as brand, index')
			+const('showPlus = brands.length != index + 1')
			LogoBlock(
				href!="{ brand.url }",
				index!="{ index }",
				name!="{ brand.name }",
				showPlus!="{ showPlus }",
				src!="{ brand.logo }"
			)
</template>

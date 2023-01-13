<!--
@component
Displays a grid of logos.
-->
<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import LogoBlock from "$molecules/LogoBlock.svelte";
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { brands } from "$stores/brandsStore";

	// declarations for variables used in template
	let hidePlus: boolean;
	let href = "";
	let src = "";
</script>

<template lang="pug">
	.mx-auto.mt-6.mb-8.grid.grid-cols-2.gap-8(
		class="max-w-[12rem] sm:m-0 sm:mb-12 sm:max-w-none sm:grid-cols-7 sm:gap-0 md:mb-8"
	)
		+each('$brands as brand, index')
			+const('name = brand.name')
			+const('href = brand.href')
			+const('hidePlus = $brands.length == index + 1')
			+const('src = "/images/" + name.toLowerCase() + ".svg" ')
			LogoBlock(
				{hidePlus},
				{href},
				{name},
				{src}
			)
</template>

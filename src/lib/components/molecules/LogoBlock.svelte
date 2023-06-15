<!--
@component
A figure with svg image and caption.
* prop name: string -- name of the logo
* prop href: string -- link target url
* prop hidePlus: boolean -- hide plus icon
* prop src: string -- image source
-->
<script lang="ts">
	// components
	import PlusBlock from "$atoms/PlusBlock.svelte";

	// props
	export let name = "";
	export let href = "";
	export let showPlus = true;
	export let index = 0;
	export let src = "";

	// reactive declarations
	let title: string;
	$: title = `Learn more about ${name}`;
</script>

<template lang="pug">
	a.group.rounded-lg(
		aria-labelledby!="logo-{ index }-caption",
		href!="{ href }",
		title!="{ title }"
	)
		figure.grid.grid-cols-1.place-items-center
			//- caption
			figcaption.tracking-wider.transition-opacity.text-15.mb-1(
				class="opacity-100",
				id!="logo-{ index }-caption"
			) { name }

			//- image
			.relative.flex
				//- shaded background
				.absolute.inset-0.bg-neutral-50.opacity-0.transition-opacity.rounded-md(
					class="group-hover:opacity-5 -z-10",
					id!="logo-{ index }-background"
				)
				img(
					alt!="{ name + ' logo' }",
					height="160",
					src!="{ src }",
					width="160"
				)

	+if('showPlus')
		PlusBlock
</template>

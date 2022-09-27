<!--
	@component
	A figure with svg image and caption.
	- takes a name prop to determine the image and caption text
-->
<script lang="ts">
	// components
	import PlusBlock from '$atoms/PlusBlock.svelte';

	// props
	export let name: string = '';
	export let href: string = '';
	export let hidePlus: boolean = false;
	export let src: string = '';

	// reactive declarations
	$: title = `Learn more about ${name}`;
</script>

<template lang="pug">
a.rounded-lg.transition-all(
	class="group hover:bg-white/5"
	"{href}"
	"{title}")

	figure.text-center.text-sm.relative
		img.block.h-auto(
			alt!="{name + ' logo'}"
			height="160"
			src!="{src}"
			width="160"
			)
		figcaption.pointer-events-none.absolute.top-0.left-0.w-full.opacity-0.transition-opacity.text-center.font-light.tracking-wider(
			class="group-hover:sm:opacity-100 -translate-y-7")
			| {name}

+if('!hidePlus')
	PlusBlock

</template>

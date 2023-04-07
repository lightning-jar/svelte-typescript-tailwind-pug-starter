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
	export let hidePlus = false;
	export let src = "";

	// reactive declarations
	$: title = `Learn more about ${name}`;
	$: showPlus = !hidePlus;
</script>

<template lang="pug">
	a.group.rounded-lg.transition-all(
		class="hover:bg-white/5",
		{href},
		{title}
	)
		figure.relative.text-center.text-sm
			img.block.h-auto(
				alt!="{ name + ' logo' }",
				height="160",
				src!="{ src }",
				width="160"
			)
			figcaption.pointer-events-none.absolute.top-0.left-0.w-full.-translate-y-7.text-center.font-light.tracking-wider.opacity-0.transition-opacity(
				class="group-hover:sm:opacity-100"
			)
				| { name }

	+if('showPlus')
		PlusBlock
</template>

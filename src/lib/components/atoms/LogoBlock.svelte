<!--
	@component
	A figure with svg image and caption.
	- takes a name prop to determine the image and caption text
-->
<script lang="ts">
	//props
	export let name: string = '';
	export let href: string = '';
	export let isLast: boolean = false;

	$: title = `Learn more about ${name}`;
</script>

<template lang="pug">
a("{href}" "{title}")
	figure.text-center.text-sm
		img.block.w-full.h-auto(
			alt!="{name + ' logo'}"
			height="160"
			src!="{'/images/' + name.toLowerCase() + '.svg'}"
			width="160"
			)
		figcaption.hidden.border-t.border-white.pt-4.border-opacity-40.mt-1.font-light.transition-colors.tracking-wider(
			class="sm:block lg:text-base xl:text-lg group-hover:text-blue-300")
			| {name}

+if('!isLast')
	.hidden.place-content-center(class="sm:grid")
		.flex.place-content-center
			span +

</template>

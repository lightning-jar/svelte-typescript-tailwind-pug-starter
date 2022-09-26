<!--
	@component
	A figure with svg image and caption.
	- takes a name prop to determine the image and caption text
-->
<script lang="ts">
	//props
	export let name: string = '';
</script>

<template lang="pug">
figure.text-center.text-sm
	img.block.w-full.h-auto(
		alt!="{name + 'logo'}"
		height="160" width="160"
		src!="{'/images/' + name.toLowerCase() + '.svg'}")
	figcaption.hidden.border-t.border-white.pt-4.border-opacity-40.mt-1.font-light(
		class="sm:block lg:text-base xl:text-lg tracking-wider group-hover:text-blue-300 transition-colors"
		)
		| {name}

</template>

<script lang="ts">
	//components
	import LogoSvelte from '$atoms/LogoSvelte.svelte';
	import LogoTypescript from '$atoms/LogoTypescript.svelte';
	import LogoTailwindCSS from '$atoms/LogoTailwindCSS.svelte';
	import LogoPug from '$atoms/LogoPug.svelte';

	//props
	export let name: string = '';
</script>

<template lang="pug">
.flex.justify-center.items-center.outline.outline-white.outline-0.rounded(
	class="group-hover:text-accent transition-colors h-full pointer-events-none"
)
	+if('name.toLowerCase() == "svelte"')
		LogoSvelte
	+if('name.toLowerCase()  == "typescript"')
		LogoTypescript
	+if('name.toLowerCase()  == "tailwindcss"')
		LogoTailwindCSS
	+if('name.toLowerCase()  == "pug"')
		LogoPug

</template>

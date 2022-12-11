<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// components
	import LogoBlock from '$molecules/LogoBlock.svelte';

	// stores
	import { brands } from '$stores/brandsStore';
</script>

<template lang="pug">
.mt-6.mb-8.grid.grid-cols-2.gap-8.mx-auto(class="max-w-[12rem] sm:m-0 sm:grid-cols-7 sm:gap-0 sm:max-w-none sm:mb-12 md:mb-8")
  +each('$brands as brand, index')
    +const('name = brand.name')
    +const('href = brand.url')
    +const('src = "/images/" + name.toLowerCase() + ".svg"')
    +const('hidePlus = $brands.length == index + 1')
    LogoBlock(
      "{name}"
      "{href}"
      "{hidePlus}"
      "{src}")
</template>

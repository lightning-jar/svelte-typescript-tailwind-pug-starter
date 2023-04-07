<!--
@component
An <a> styled to look like a button.
* prop url: string  -- link target url
* prop title: string -- link title
* slot (default) -- link text
-->
<script lang="ts">
	export let targetUrl = "#";
	export let title = "";
</script>

<template lang="pug">
	.mb-16.w-full(class="sm:mb-24")
		a.text-light.inline-block.rounded.bg-transparent.px-4.py-2.outline.outline-1.outline-white.transition-all(
			class="hover:bg-accent hover:text-primary hover:outline-transparent",
			href!="{ targetUrl }",
			title!="{ title }"
		)
			slot
</template>

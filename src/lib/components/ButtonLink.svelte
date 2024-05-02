<!--
@component
An <a> styled to look like a button.
* prop classes: string; (optional) -- additional classes;
* prop link: Link;
* link.label: string | undefined;
* link.rel: string | undefined;
* link.target: string | undefined ;
* link.href: string | undefined;
* slot (optional) -- link text
-->
<script lang="ts">
	// props
	export let classes = "";
	export let link: Link;
</script>

<template lang="pug">
	a(
		class!=`
			bg-transparent
			block
			hover:bg-accent
			hover:outline-transparent
			hover:text-primary
			max-w-fit
			outline-current
			outline
			px-5
			py-[.75ch]
			rounded
			text-[.85em]
			transition-all
			{ classes }`,
		href!="{ link?.url ?? '' }",
		rel!="{ link?.rel ?? null }",
		target!="{ link?.target ?? null }",
		title!="{ link?.title ?? null }"
	) { link?.label ?? "" }
		//- slot
		slot

	|</template>

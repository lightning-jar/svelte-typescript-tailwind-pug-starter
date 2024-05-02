<!--
@component
Web footer component
* prop author: Link -- link to author's website
* prop org: Link -- link to organization's website
-->
<script lang="ts">
	// types
	export let author: Link | null = null;
	export let org: Link | null = null;

	// helper function to create a link
	function createLink(link: Link) {
		return `
		<a
			${link?.url || link.href ? `href="${link.url ?? link.href}"` : ``}",
			${link?.rel ? `rel="${link.rel}"` : ``}",
			${link?.target ? `target="${link.target}"` : ``}",
			${link?.title ? `title="${link.title}"` : ``}>${link?.label ?? ""}</a>`.trim();
	}
</script>

<template lang="pug">
	footer.flex.justify-center.pb-24
		+html('`<span>Created by&nbsp;</span>` + createLink(author)')
		+html('`<span>&nbsp;@&nbsp;</span>` + createLink(org)')

	|</template>

<style lang="postcss">
	/* styles need to be globally scoped when using the '+html' mixin */
	:global(footer span),
	:global(footer a) {
		@apply opacity-70 text-[0.75rem];
	}
	:global(footer a) {
		@apply underline-offset-4 transition-opacity;
	}
	:global(footer a:hover) {
		@apply text-accent underline opacity-90;
	}
</style>

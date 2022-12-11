<!--
@component
Web footer component
* prop authorLink: string -- link to author's website
* prop orgLink: string -- link to organization's website
* slot author -- author's name
* slot org -- organization's name
-->
<script lang="ts">
	export let authorLink = '#';
	export let orgLink = '#';
</script>

<template lang="pug">
footer.bg-primary.text-white.text-xs.pb-24.px-4
	.text-center
		.mb-1.inline-block

			// author
			span.opacity-70 Created by&nbsp;
			a.opacity-80(
				class="hover:text-accent hover:opacity-100 hover:underline"
				rel="me"
				href!="{authorLink}"
				)
				slot(name="author")

			// org
			span.opacity-70 &nbsp;@&nbsp;
			a.opacity-80.inline-block.underline-offset-4.transition-all(
				href!="{orgLink}"
				class="hover:text-accent hover:opacity-100 hover:underline"
				)
				slot(name="org")
</template>

<!--
@component
Web footer component
* prop authorLink: string -- link to author's website
* prop orgLink: string -- link to organization's website
* slot author -- author's name
* slot org -- organization's name
-->
<script lang="ts">
	export let authorLink = "#";
	export let orgLink = "#";
</script>

<template lang="pug">
	footer.bg-primary.px-4.pb-24.text-xs.text-white
		.text-center
			.mb-1.inline-block
				// author
				span.opacity-70 Created by&nbsp;
				a.opacity-80(
					class="hover:text-accent hover:underline hover:opacity-100",
					href!="{ authorLink }",
					rel="me"
				)
					slot(name="author")

				// org
				span.opacity-70 &nbsp;@&nbsp;
				a.inline-block.underline-offset-4.opacity-80.transition-all(
					class="hover:text-accent hover:underline hover:opacity-100",
					href!="{ orgLink }"
				)
					slot(name="org")
</template>

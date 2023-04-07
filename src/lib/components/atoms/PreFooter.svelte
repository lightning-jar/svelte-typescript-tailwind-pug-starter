<!--
@component
Prefooter contains a single linked call to action.
* prop targetUrl: string -- link target url
* prop title: string -- link title
* slot (default) -- link text
-->
<script lang="ts">
	export let targetUrl = "#";
	export let title = "";
</script>

<template lang="pug">
	.bottom-0.left-0.w-full.bg-primary.px-4.pb-6.text-sm.text-white(
		class="sm:absolute sm:px-8"
	)
		.group.mb-0.rounded-md.px-4.py-4.text-center.text-sm(class="bg-white/5")
			a.inline-block.italic.text-white.opacity-90.transition-all(
				class="hover:opacity-100 group-hover:text-accent",
				href!="{ targetUrl }",
				title!="{ title }"
			)
				slot
</template>

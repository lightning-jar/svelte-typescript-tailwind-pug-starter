<!--
@component
Prefooter contains a single linked call to action.
* prop targetUrl: string -- link target url
* prop title: string -- link title
* slot (default) -- link text
-->
<script lang="ts">
	export let targetUrl = '#';
	export let title = '';
</script>

<template lang="pug">
.bottom-0.left-0.text-white.text-sm.pb-6.px-4.w-full.bg-primary(class="sm:absolute sm:px-8")
	.text-sm.text-center.px-4.py-4.rounded-md.mb-0.group(class="bg-white/5")
		a.italic.inline-block.text-white.opacity-90.transition-all(
			class="group-hover:text-accent hover:opacity-100",
			href="{targetUrl}"
			title="{title}"
			)
			slot
</template>

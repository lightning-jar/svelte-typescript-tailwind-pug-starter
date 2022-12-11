<!--
@component
An <a> styled to look like a button.
* prop url: string  -- link target url
* prop label: string -- link label
* prop title: string -- link title
-->
<script lang="ts">
	export let url = '#';
	export let label = '';
	export let title = '';
</script>

<template lang="pug">
.mb-16.w-full(class="sm:mb-24")
  a.inline-block.px-4.py-2.text-light.bg-transparent.outline.outline-white.outline-1.rounded.transition-all(
    class="hover:bg-accent hover:outline-transparent hover:text-primary"
    href="{url}"
    title="{title}"
    ) {label}
</template>

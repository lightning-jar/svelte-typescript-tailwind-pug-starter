<!--
@component
An <a> styled to look like a button.
* prop url: string  -- link target url
* prop title: string -- link title
* slot (default) -- link text
-->
<script lang="ts">
	export let targetUrl = '#';
	export let title = '';
</script>

<template lang="pug">
.mb-16.w-full(class="sm:mb-24")
  a.inline-block.px-4.py-2.text-light.bg-transparent.outline.outline-white.outline-1.rounded.transition-all(
    class="hover:bg-accent hover:outline-transparent hover:text-primary"
    href="{targetUrl}"
    title="{title}"
    )
    slot
</template>

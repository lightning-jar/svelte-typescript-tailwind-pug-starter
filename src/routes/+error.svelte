<script lang="ts">
	// sveltekit error page documentation here:
	// https://kit.svelte.dev/docs/routing#error

	// import from svelte
	import { page } from "$app/stores";
	import ButtonLink from "$atoms/ButtonLink.svelte";
</script>

<template lang="pug">
	.grid.h-screen.w-screen.grid-cols-1.place-content-center.place-items-center.bg-primary.text-neutral-100
		.text-36.mb-2.text-accent
			span { $page.status }
			span :&nbsp;
			span { $page.error.message }
		.mb-24 Looks like you hit a dead end. Sorry about that.

		div
			ButtonLink(
				targetUrl="/",
				title="Go Home"
			)
				| Go Home
</template>

<script lang="ts">
	// sveltekit error page documentation here:
	// https://kit.svelte.dev/docs/routing#error

	// import from svelte
	import { page } from "$app/stores";
	import ButtonLink from "$components/ButtonLink.svelte";
</script>

<template lang="pug">
	//- metadata
	svelte:head
		title { $page.status } : { $page.error.message }

	//- page container
	div(
		class=`
		bg-primary
		grid
		grid-cols-1
		h-screen
		place-content-center
		place-items-center
		text-neutral-100
		w-screen
		`
	)
		//- heading
		h1.text-36.mb-2.text-accent { $page.status } :&nbsp; { $page.error.message }

		//- text
		.mb-24 Looks like you hit a dead end. Sorry about that.

		//- link
		ButtonLink(link!="{ {url: '/', label: 'Go Home', title: 'Go Home'} }")
	|</template>

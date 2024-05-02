<!--
@component
A tile with a background svg image and a link to a brand's website.
* prop brand: Link -- link object
* brand.href: string -- link url
* brand.rel: string -- link rel
* brand.target: string -- link target
* brand.title: string -- link title
-->
<script lang="ts">
	// props
	export let brand: Link | null = null;
</script>

<template lang="pug">
	+if('brand?.link')
		a(
			class=`
				grid
				grid-cols-1
				place-content-center
				w-full
				rounded-lg`,
			data-logo!="{ brand.link?.label ?? '' }",
			href!="{ brand.link?.url ?? null }",
			rel!="external",
			title!="{ brand.link?.title ?? null }"
		)
			//- image
			+if('brand?.image?.url')
				img.block.w-full.h-auto(
					alt!="{ brand.image?.alt }",
					loading="lazy",
					src!="{ brand.image.url }"
				)
			//- label
			.text-center.text-slate-100.w-full(class="text-[0.65em]") { brand.link?.label ?? "" }

	|</template>

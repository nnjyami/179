<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let data;
	let rootElement: HTMLElement;

	onMount(() => {
		document.body.classList.add(data.meta.colorTheme);
		return () => {
			document.body.classList.remove(data.meta.colorTheme);
		};
	});
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="theme-color" content="#75675f" />
</svelte:head>

<article class={`article-${data.meta.colorTheme}`}>
	<div class="article_img">
		<img src={data.meta.photo} alt={data.meta.photoDec} />
	</div>

	<hgroup class="hg">
		<div class="hg_m">
			<p class="hg_e">{data.meta.titleEnglish}</p>
			<h1 class="hg_t">{data.meta.title}</h1>
			<p class="hg_l">{data.meta.lead.join('\n')}</p>
		</div>
		<ul class="hg_c neueHaas-mid">
			<li class="hg_u">https://ponya.xyz/{data.slug}</li>
			<li class="hg_u">by {data.meta.author}</li>
		</ul>
	</hgroup>

	<!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	:root {
		--bkg-color: inherit;
	}
</style>

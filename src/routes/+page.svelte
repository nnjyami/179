<script>
	export let data;

	import { onMount } from 'svelte';
	import PhotoArticle from '../components/PhotoArticle.svelte';

	let y = 0;
	let page = 0;
	let articles = [];
	let newBatch = [];
	let container;

	$: articles = [...articles, ...newBatch];

	async function fetchData() {
		console.log('fetching data', page, data.posts[page]);
		const slug = data.posts[page].slug;
		const response = await fetch(`/api/post/${slug}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});
		newBatch = await response.json();
		console.log('newBatch', newBatch);
	}

	onMount(() => {
		// load first batch onMount
		fetchData();
	});

	const handleScroll = () => {
		console.log('scroll');
		if (data.posts.length === page) return;
		page++;
		fetchData();
	};
</script>

<svelte:window on:scroll={handleScroll} />

<svelte:head>
	<title>179</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="wrap">
	<div class="container">
		{#each articles as article}
			<PhotoArticle
				title={article.title}
				text={article.content.html}
				img={article.photo}
				layout={article.layout}
				isBg={article.isBg}
			/>
		{/each}
	</div>
</div>

<style>
	.wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		min-height: 200svh;
	}
	.container {
		min-height: 200svh;
		width: 100%;
	}
</style>

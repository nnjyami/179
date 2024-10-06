<script>
	export let data;

	import { onMount } from 'svelte';
	import InfiniteScroll from '../components/InfiniteScroll.svelte';

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

<section>
	<ul class="container">
		{#each articles as article}
			<li class="post">
				<a href={`/posts/${article.slug}`}>
					<img src={article.photo} alt={article.title} />
					<div class="post_content">{@html article.content.html}</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		min-height: 200svh;
	}
	section ul {
		min-height: 200svh;
		width: 100%;
	}

	.post {
		width: 100%;
		height: 90svh;
		padding: 5svh 0;
		margin: 0 0 10svh;
		position: relative;
	}
	.post img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.post_content {
		position: absolute;
		bottom: 5svh;
		left: 5vw;
		width: 18vw;
		font-size: 12px;
		text-align: justify;
	}
</style>

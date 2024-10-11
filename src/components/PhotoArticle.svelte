<script lang="ts">
	export let title = '';
	export let text;
	export let img;
	export let layout = 'l-vLower';
	export let isBg = false;
</script>

<article>
	<section class={layout}>
		<div class="inner ja-serif {isBg ? 'bg-blur' : ''}">
			{@html text}
		</div>
	</section>
	<div class="article_img">
		<img src={img} alt="" />
	</div>
</article>

<style>
	article {
		width: 100vw;
		height: 110vh;
		position: relative;
	}
	.article_img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	section {
		width: 100%;
		height: 100svh;
	}
	.l-vLower,
	.l-vUpper {
		padding: 48svh 0 2.5svh;
		overflow-x: auto;
		writing-mode: vertical-rl;
	}
	.l-vUpper {
		padding: 10svh 0 38svh;
	}
	.l-flat {
		padding: 10svh 0 0;
		width: 60vw;
	}
	.l-flatRightBottom {
		box-sizing: content-box;
		padding: 70svh 0 0 40vw;
		width: 60vw;
	}
	section .inner {
		font-size: 25px;
		font-feature-settings: 'vpal';
		letter-spacing: 0.1em;
		line-height: 1.9;
		color: #e6e1e1;
		mix-blend-mode: difference;
		text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

		padding: 0 6em 0 2em;
	}
	section .inner a {
		text-decoration: underline;
	}
	.l-flat .inner,
	.l-flatRightBottom .inner {
		font-size: 12px;
		font-feature-settings: 'palt';
		text-align: justify;
		padding: 0 2em;
	}
	section .bg-blur {
		padding: 0.5em 6em 1.5em 2em;
		mix-blend-mode: normal;
		position: relative;
	}
	section .bg-blur::before {
		content: '';
		display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			rgba(0, 0, 0, 0) 5%,
			rgba(0, 0, 0, 0.35) 15%,
			rgba(0, 0, 0, 0.35) 75%,
			rgba(0, 0, 0, 0) 95%
		);
		backdrop-filter: blur(1.5px);
	}
</style>

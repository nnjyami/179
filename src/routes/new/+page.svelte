<article>
	<section class="l-upper">
		<div class="inner ja-serif bg-blur">
			<p>
				N家と宝ヶ池公園を散歩。<br />
				途中大きなカマキリを捕まえたら、子どもたちはすっかり夢中になり、動かなくなってしまった。<br
				/>
				通りすがりの別の兄妹も加わり、ワイワイ眺めていた。このファミリーは英語ではない言葉を話していたけど「カマキリ」だけは日本語で、カマキリはいないのかなと気になった。<br
				/>
				気になったもののものの、「あなたの国にはカマキリいないの？」とは聞けなかった。
			</p>
		</div>
	</section>
	<div class="article_img">
		<img src="/photo/L1016433.jpg" alt="" />
	</div>
</article>
<article>
	<section class="l-lower">
		<div class="inner ja-serif">
			<p>
				初めての競馬。パドックでぐるぐる歩く馬を見て、気に入った馬の馬券を買う。<br />
				パドックを見て、馬券を買う施設内に行き、外でレースを見る一連のルーティーンは忙しい。<br />
				見込んだリッチブラックは一番人気の怒涛の追い上げに2位だった。
			</p>
		</div>
	</section>
	<div class="article_img">
		<img src="/photo/L1016342.jpg" alt="" />
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
		padding: 48svh 0 2.5svh;
		overflow-x: auto;
		writing-mode: vertical-rl;
	}
	.l-upper {
		padding: 6svh 0 42svh;
	}
	section .inner {
		font-size: 25px;
		font-feature-settings: 'vpal';
		letter-spacing: 0.1em;
		line-height: 1.9;
		color: #e6e1e1;
		mix-blend-mode: difference;
		text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

		padding: 0 1.5em;
	}
	section .bg-blur {
		padding: 0.5em 1.5em;
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
			rgba(0, 0, 0, 0.25) 15%,
			rgba(0, 0, 0, 0.25) 75%,
			rgba(0, 0, 0, 0) 95%
		);
		backdrop-filter: blur(1px);
	}
</style>

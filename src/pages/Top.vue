<template>
	<div id="top" @mousewheel="next">
		<responsive-navi />
		<div v-for="(card, index) in cards" :key="card.image" :id="index" class="card">
			<img :src="card.image" :key="card.image" />
			<div class="msg">
				<span class="title">{{ card.title }}</span>
				<markdown-view :md="card.text" />
				<template v-if="index + 1 !== cards.length">
					<text-arrow :href="`#${index + 1}`" pos="bottom">
						NEXT
					</text-arrow>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
import Meltoria2 from "../assets/meltoria_2.jpg";
import Ashvy1 from "../assets/ashvy_1.jpg";
import Ashvy2 from "../assets/ashvy_2.jpg";
import Bellfort1 from "../assets/bellfort_1.jpg";
import ValleySoma from "../assets/valley_soma.jpg";
import AileDore from "../assets/aile_dore.jpg";

import MarkdownView from "../components/MarkdownView.vue";
import TextArrow from "../components/TextArrow.vue";
import ResponsiveNavi from "../components/ResponsiveNavi.vue";

export default {
	components: { MarkdownView, TextArrow, ResponsiveNavi },
	setup() {
		const cards = [
			{
				image: Meltoria2,
				title: "What is TheLow？",
				text: `Minecraft JE - 1.8.8と1.8.9でプレイできる、(自称)MMORPGサーバーです。`,
			},
			{
				image: Ashvy1,
				title: "武器",
				text: `剣、弓、魔法の三つの武器のタイプがあります。
				武器タイプごとに経験値が分かれています。
				敵を倒すと、倒した武器タイプの経験値を得られます。`,
			},
			{
				image: Bellfort1,
				title: "クエスト",
				text: `近くの村人が何か困っているみたいです。話しかけてみましょう。
				**優しいあなた**ならきっと見過ごせないはず。
				クエストを完了すると報酬が貰えます。`,
			},
			{
				image: ValleySoma,
				title: "ダンジョン",
				text: `現在、100以上のダンジョンが存在します。難易度が上昇するにつれ報酬も価値の高いものになります。
				装備が整ってきたらチャレンジしてみましょう。さらにビルダー達の努力により、どんどん新しいダンジョンがリリースされます。
				*ﾎﾗﾎﾗ、ﾊﾀﾗｹ､ﾊﾀﾗｹ*
				`,
			},
			{
				image: AileDore,
				title: "厳選する",
				text: `### 装備の厳選
ダンジョンの報酬や、集めた素材でクラフトできる武器や防具はそれぞれ強さが違います。
何度もダンジョンにトライしたり、素材を集めてクラフトすることでより強い装備を得ることができます。
### 馬の厳選
TheLowの馬は卵生だ。卵から孵化するのだ！馬ごとに「速さ」と「ジャンプ力」などのステータスが違う。沢山孵化させ、より速く走り、より高く飛ぶ馬を選ぼう。
成長するとステータスが上昇する。Tier 5からTier 6になるとき2%の確立で空を飛べる「**骨馬**」になる。移動が各段に楽になる。
				`,
			},
			{
				image: Ashvy2,
				title: "転生",
				text: `武器だけでなく、経験値を消費することで自分自身を強化することもできます。
				転生を繰り返すと自分をさらに強化できます。しかし、転生をすると次の転生に必要な経験値が増加します。`,
			},
		];

		const next = (e) => {
			e.preventDefault();

			const i = parseInt(e.pageY / window.innerHeight);
			const target = document.getElementById(`${i + Math.sign(e.deltaY)}`);

			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		};

		return {
			cards,
			next,
		};
	},
};
</script>

<style scoped>
.navi {
	background: #fffc;
	position: absolute;
	top: 0;
}

.card {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
}

.title {
	font-weight: 600;
	font-size: 36pt;
}

.msg {
	max-width: 600px;
	padding: 1em;
}

.card img {
	object-fit: cover;
	height: 100vh;
	width: 100%;
	z-index: -1;
	overflow: hidden;
	position: absolute;
}
</style>

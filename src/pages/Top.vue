<template>
	<div id="top">
		<h1>TheLowとは？</h1>
		<p class="center">
			Minecraft JE - 1.8.8と1.8.9でプレイできる、(自称)RPGサーバーです。
		</p>
		<div v-for="card in cards" :key="card.image">
			<introduce-card :src="card.image">
				<template v-slot:title>{{ card.title }}</template>
				<template v-slot:text><markdown-view :md="card.text"/></template>
				<template v-slot:icon>
					<img class="job-icon" :src="card.icon" />
				</template>
			</introduce-card>
		</div>
	</div>
</template>
<script>
import { markdownToHtml } from "@/mixins";

import IntroduceCard from "../components/IntroduceCard.vue";
import Ashvy1 from "../assets/ashvy_1.jpg";
import Ashvy2 from "../assets/ashvy_2.jpg";
import Bellfort1 from "../assets/bellfort_1.jpg";
import ValleySoma from "../assets/valley_soma.jpg";
import AileDore from "../assets/aile_dore.jpg";

import PlayStyle from "../assets/top/playstyle.svg";
import Craft from "../assets/top/craft.svg";
import Quest from "../assets/top/quest.svg";
import MarkdownView from "../components/MarkdownView.vue";

export default {
	components: { IntroduceCard, MarkdownView },
	setup() {
		const cards = [
			{
				image: Ashvy1,
				title: "武器",
				text: `「剣」、「弓」、「魔法」の3つの武器があります。
				種類ごとに経験値が分かれています。
				剣には剣、弓には弓、魔法には魔法の経験値があります。
				敵を倒すと、倒した種類の経験値を得られます。`,
				icon: PlayStyle,
			},
			{
				image: Bellfort1,
				title: "クエスト",
				text: `何か困っているみたいです。近くの村人に話しかけてみましょう。
				**優しいあなた**ならきっと見過ごせないはず。
				クエストを完了すると報酬が貰えます。`,
				icon: Quest,
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
				---
				### 馬の厳選
				TheLowの馬は卵から孵化します。馬ごとに「速さ」と「ジャンプ力」などのステータスが違います。沢山孵化させ、より速く走り、より高く飛ぶ馬を選べます。
				馬は成長するとステータスが上昇します。Tier 5からTier 6になるとき2%の確立で「**骨馬**」になります。
				「**骨馬**」は空を飛ぶことができます。
				---
				`,
				icon: Craft,
			},
			{
				image: Ashvy2,
				title: "転生",
				text: `武器だけでなく自分自身を強化することもできます。
				転生を繰り返しどんどん強化できますが、転生をすると次の転生に必要な経験値が増加します。`,
			},
		];

		cards.forEach((card) => {
			card.text = markdownToHtml(card.text);
		});

		return {
			cards,
		};
	},
};
</script>
<style scoped>
#top {
	min-height: 1000px;
}

.job-icon {
	max-width: 50%;
}
</style>

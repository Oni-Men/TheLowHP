<template>
	<div id="faq">
		<h2>よくある質問</h2>
		<div class="questionList">
			<p>
				<span>もしかしたら<a href="https://wikiwiki.jp/thelow/">TheLow攻略Wiki</a></span>
				<span>でも、あなたの疑問が解決できるかもしれませんよ。</span>
				<span>ぜひご活用ください!</span>
			</p>
			<div v-for="item in items" :key="item.question">
				<div class="question">
					<h3>Q. {{ item.question }}</h3>
					<markdown-view :md="item.answer" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { markdownToHtml } from "@/mixins";
import MarkdownView from "../components/MarkdownView.vue";

export default {
	components: { MarkdownView },
	setup() {
		const items = [
			{
				question: "MODは必要ですか？",
				answer: `いいえ、必要ありません。しかしより快適にプレイしたいときは、[許可されているMOD](/rules)を導入するとよいでしょう。`,
			},
			{
				question: "何をしたらいいですか？",
				answer:
					"/guideコマンドを実行してみたり、[公式Discord](https://discord.gg/kVyPVky)で質問してみると良いでしょう。",
			},
			{
				question: "許可されているMODが知りたいです。",
				answer: `
- Optifine
- StatusEffectHUD
- ArmorStatusHUD
- GammaBright
- Toggle Sneak
- Damage Indicators

これらが許可されています。
				`,
			},
			{
				question: "スタッフは募集していますか？",
				answer:
					"現在はビルダーのみ募集しています。興味がある人は[こちら](https://forms.gle/awRAZbf7FJ22tSxu7)から応募お願いします",
			},
			{
				question: "誤字は仕様ですか？",
				answer: "はい。TheLowの誤字は使用です。",
			},
		];

		items.forEach((item) => {
			item.answer = markdownToHtml(item.answer);
		});

		return {
			items,
		};
	},
};
</script>
<style scoped>
@media screen and (max-width: 40em) {
	.questionList {
		width: 100%;
	}
}

@media screen and (min-width: 40.01em) {
	.questionList {
		max-width: 1000px;
		margin: auto;
	}
}

h3 {
	margin: 0;
}

p {
	margin: 0;
	text-align: left;
}

.question {
	margin: 1em 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
}

ul {
	padding: 0;
}

li {
	list-style: none;
}
</style>

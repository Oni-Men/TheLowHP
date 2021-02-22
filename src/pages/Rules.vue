<template>
	<div id="rules">
		<h2>ルール</h2>
		<div class="rules">
			<markdown-view :md="message" />
		</div>
	</div>
</template>
<script>
import MarkdownView from "../components/MarkdownView.vue";
export default {
	components: { MarkdownView },
	name: "Rules",
	setup() {
		const message = `サーバーに接続する前に以下に記載する事項をよく読み、
サーバー内ではそれらをしっかり順守してください。

- [EXR-Network共通ルール](https://portal.eximradar.jp/?p=1136)
- [サーバールール(TheLowの項)](https://portal.eximradar.jp/?page_id=24)
- [EXR-Network利用規約](https://portal.eximradar.jp/?page_id=47)

## 許可されているMOD

- Optifine
- StatusEffectHUD
- ArmorStatusHUD
- GammaBright
- Toggke Sneak
- Damage Indicators

## 許可されていないMOD、ツールなど

- Fly、killauraなどが導入されているチートMOD,
- Xray MOD,
- ミニマップMOD（レーダー機能の有無に関わらず許可されません。）,
- ToggleSneakの文字を[Fly]や[Killaura]に変える（紛らわしいのでやめてください。）,
- ワールドダウンローダー,
- その他連打ツール等のツールやダンジョン攻略やその他の制限が有利になるマクロ類も許可していません。,

`;

		return {
			message,
		};
	},
};
</script>
<style scoped>
#rules ul li {
	text-align: left;
}
</style>

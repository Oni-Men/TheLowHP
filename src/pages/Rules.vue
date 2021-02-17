<template>
	<div id="rules">
		<div class="rules">
			<p>
				<span>サーバーに接続する前に以下に記載する事項をよく読み、</span>
				<span>サーバー内ではそれらをしっかり順守してください。</span>
				<ul>
					<li>
						<a href="https://portal.eximradar.jp/?p=1136">EXR-Network共通ルール</a>
					</li>
					<li>
						<a href="https://portal.eximradar.jp/?page_id=24">サーバールール(TheLowの項)</a>
					</li>
					<li>
						<a href="https://portal.eximradar.jp/?page_id=47">EXR-Network利用規約</a>
					</li>
				</ul>
			</p>
		</div>
		<div class="allowed-mods">
			<h2>許可されているMOD</h2>
			<ul>
				<li v-for="mod in allowedMod" :key="mod">
					{{ mod }}
				</li>
			</ul>
		</div>
		<div class="not-allowed-mods">
			<h2>許可されていないMODやプログラム</h2>
			<ul>
				<li v-for="mod in notAllowed" :key="mod">
					{{ mod }}
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: "Rules",
	setup() {
		const allowedMod = [
			"Optifine",
			"StatusEffectHUD",
			"ArmorStatusHUD",
			"GammaBright",
			"Toggle Sneak",
			"Damage Indicators",
		];

		const notAllowed = [
			"Fly、killauraなどが導入されているチートMOD",
			"Xray MOD",
			"ミニマップMOD（レーダー機能の有無に関わらず許可されません。）",
			"ToggleSneakの文字を[Fly]や[Killaura]に変える（紛らわしいのでやめてください。）",
			"ワールドダウンローダー",
			"その他連打ツール等のツールやダンジョン攻略やその他の制限が有利になるマクロ類も許可していません。",
		];

		return {
			allowedMod,
			notAllowed,
		};
	},
};
</script>
<style scoped>
#rules ul li {
	text-align: left;
}
</style>

<template>
	<div id="join">
		<h2>サーバーに参加する</h2>
		<image-card :src="MainMenu">
			<h3>1. Minecraftを起動</h3>
			<p>
				<span>マインクラフトを起動します。</span>
				<span>バージョンは「1.8.8」か「1.8.9」です。</span>
				<span>「マルチプレイ/Multiplayer」</span>
				<span>をクリックします。</span>
			</p>
		</image-card>
		<image-card :src="AddServer" :inverted="true">
			<h3>2. サーバーを追加</h3>
			<p>
				<span>次に画面右下の方にある</span>
				<span>「サーバー追加/Add Server」</span>
				<span>をクリックします</span>
			</p>
		</image-card>
		<image-card :src="TypeAddress">
			<h3>3. アドレスを入力</h3>
			<p>
				<span>「サーバーアドレス/Server Address」に</span>
				<copy-field :text="'mc.eximradar.jp'" />
				<span>と入力し、「Done/完了」をクリックします</span>
			</p>
		</image-card>
		<image-card :src="JoinServer" :inverted="true">
			<h3>4. サーバーに接続</h3>
			<p>
				<span>さっき追加した「EXR-Network」を選択して</span>
				<span>「サーバーに接続/Join Server」</span>
				<span>をクリックします</span>
			</p>
		</image-card>
		<image-card :src="TheLowGate">
			<h3>5. The Lowに参加</h3>
			<p>
				<span>ワールド読み込みが完了したら「TheLow」</span>
				<span>のゲートに入ってください。</span>
				<span>人数制限により入れない場合は</span>
				<span>時間を開けてから、もう一度参加してみてください</span>
			</p>
		</image-card>
	</div>
</template>
<script>
import { markdownToHtml } from "@/mixins";

import MainMenu from "../assets/join/main-menu.png";
import AddServer from "../assets/join/add-server.png";
import TypeAddress from "../assets/join/type-address.png";
import JoinServer from "../assets/join/join-server.png";
import TheLowGate from "../assets/join/the-low-gate.png";

import CopyField from "../components/CopyField.vue";
import ImageCard from "../components/ImageCard.vue";

export default {
	name: "join",
	components: { CopyField, ImageCard },
	setup() {
		const items = [];

		items.forEach((item) => {
			item.text = markdownToHtml(item.text);
		});

		return {
			MainMenu,
			AddServer,
			TypeAddress,
			JoinServer,
			TheLowGate,
		};
	},
};
</script>
<style scoped>
@media screen and (min-width: 40.01em) {
	.zoom-image {
		width: 100%;
	}
}

@media screen and (max-width: 40em) {
	.zoom-image {
		width: auto;
	}
}
</style>

<template>
	<div class="main">
		<back-arrow class="desktop back-to-portal" :href="'https://portal.eximradar.jp/'">
			EXRポータルに戻る
		</back-arrow>
		<router-link class="logo" :to="'/thelow/'">
			<img src="../assets/TheLow-Logo-Set/logo.svg" alt="THE LOW" />
		</router-link>
		<div class="server-info" :class="{ offline: !online }">
			<span v-if="online">{{ players }} Players Online</span>
			<span v-else>SERVER IS OFFLINE</span>
		</div>
	</div>
</template>

<script>
import BackArrow from "./TextArrow.vue";

import { fetchServerInformation } from "@/mixins";
import { ref } from "vue";

export default {
	components: { BackArrow },
	name: "HeaderNavi",
	setup() {
		const players = ref(0);
		const online = ref(true);
		fetchServerInformation().then(() => {
			const serverInfo = JSON.parse(localStorage.getItem("server-info"));
			if (serverInfo) {
				online.value = serverInfo.online;
				players.value = serverInfo.players.now;
			}
		});

		return {
			online,
			players,
		};
	},
};
</script>

<style scoped>
.main {
	width: 100%;
	height: 30vh;
	background: url("../assets/venemia.jpg") center center no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: white;
}

.logo {
	max-width: 50%;
	max-height: 30%;
	width: 65mm;
	height: auto;
}

.server-info {
	font-weight: lighter;
	padding: 0.1em 0.5em;
}

.offline {
	color: #fff;
	background-color: #f33;
}

.back-to-portal {
	position: absolute;
	top: 2em;
	left: 2em;
}
</style>

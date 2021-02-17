<template>
	<div class="main">
		<div class="visual">
			<span class="logo">
				<img src="../assets/logo.svg" alt="THE LOW" />
			</span>
			<span v-if="online">{{ players }} Players Online</span>
			<span v-else style="color: #f66;">SERVER IS OFFLINE</span>
		</div>
		<div class="panel">
			<div class="mobile"></div>
			<div class="desktop"></div>
		</div>
	</div>
	<div class="naviWrap">
		<div id="navi">
			<Separator class="separator" />
			<div id="naviComp">
				<div class="mobile">
					<Navigator :show="navigatorStatus" @open="openMenu()" @close="closeMenu()" />
				</div>
				<div class="desktop">
					<Navigator />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navigator from "./Navigator.vue";
import Separator from "./Separator.vue";
import { fetchServerInformation } from "@/mixins";
import { ref } from "vue";

export default {
	components: { Navigator, Separator },
	name: "HeaderNavi",
	setup() {
		const players = ref(0);
		const online = ref(true);
		const navigatorStatus = ref(false);
		fetchServerInformation().then(() => {
			const serverInfo = JSON.parse(localStorage.getItem("server-info"));
			if (serverInfo) {
				online.value = serverInfo.online;
				players.value = serverInfo.players.now;
			}
		});

		const openMenu = () => {
			navigatorStatus.value = true;
		};

		const closeMenu = () => {
			navigatorStatus.value = false;
		};

		return {
			navigatorStatus,
			openMenu,
			closeMenu,
			online,
			players,
		};
	},
};
</script>

<style scoped>
@media screen and (max-width: 40em) {
	.desktop {
		display: none;
	}

	.panel .desktop {
		display: none;
	}
}

@media screen and (min-width: 40.01em) {
	.mobile {
		display: none;
	}

	.panel .mobile {
		display: none;
	}
}

.main {
	position: fixed;
	width: 100%;
	max-height: 43vh;
	z-index: -900;
}

.visual {
	position: absolute;
	width: 100%;
	height: 43vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: white;
}

.naviWrap {
	width: 100%;
	height: 50vh;
	position: relative;
	z-index: 100;
}

#navi {
	width: 100%;
	position: absolute;
	bottom: 0;
}

.panel {
	height: 50vh;
	overflow: hidden;
	background-size: cover;
}

.panel .desktop {
	width: 100%;
	height: 100%;
	background: url("../assets/bellfort_1.jpg") center center no-repeat fixed;
	background-size: cover;
}

.panel .mobile {
	width: 100%;
	height: 100%;
	background: url("../assets/venemia.jpg") center center no-repeat fixed;
	background-size: cover;
}

#naviComp {
	background: white;
	margin: 0;
}

.separator {
	position: relative;
	bottom: -1px;
}
</style>

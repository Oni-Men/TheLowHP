<template>
	<div v-if="route.name != 'article'">
		<top />
	</div>
	<div v-else>
		<address-popout style="z-index:900;" />
		<discord-logo />
		<header-navi />
		<responsive-navi />
		<div class="background">
			<div v-if="route.name !== '404'" class="content">
				<router-view class="view" />
				<div class="side">
					<side-bar />
				</div>
			</div>
			<div v-else>
				<router-view class="view" />
			</div>
		</div>
		<div class="footer">
			<p>COPYRIGHT &copy;2021 TheLow ALL RIGHT RESERVED.</p>
		</div>
	</div>
</template>

<script>
import AddressPopout from "./components/AddressPopout.vue";
import DiscordLogo from "./components/DiscordLogo.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import HeaderNavi from "./components/HeaderNavi.vue";
import SideBar from "./components/SideBar.vue";
import Top from "./pages/Top.vue";
import ResponsiveNavi from "./components/ResponsiveNavi.vue";

export default {
	name: "App",
	components: {
		AddressPopout,
		DiscordLogo,
		HeaderNavi,
		SideBar,
		Top,
		ResponsiveNavi,
	},
	setup() {
		const router = useRouter();
		const searchParams = new URLSearchParams(window.location.search);
		if (searchParams.get("a")) {
			router.push({ name: "article", params: { id: searchParams.get("a") } });
		}

		const isNaviVisible = ref(false);
		const openMenu = () => {
			isNaviVisible.value = true;
		};

		const closeMenu = () => {
			isNaviVisible.value = false;
		};

		return {
			router,
			route: router.currentRoute,
			isNaviVisible,
			openMenu,
			closeMenu,
		};
	},
};
</script>

<style>
html {
	scroll-behavior: smooth;
}

::-webkit-scrollbar {
	position: absolute;
	width: 10px;
}

::-webkit-scrollbar-thumb {
	background-color: #ddd;
	border-radius: 5px;
}

::-webkit-scrollbar-track {
	background-color: #353535;
}

body {
	margin: 0;
	overflow-y: scroll;
}

@media screen and (max-width: 40em) {
	.desktop {
		display: none;
	}
}

@media screen and (min-width: 40.01em) {
	.mobile {
		display: none;
	}
}

pre {
	padding: 0.4em 0.6em;
	background: #eee;
	display: inline-block;
	border-radius: 0.4em;
	font-family: "Roboto Mono", monospace;
}

#app {
	font-family: "Alata", Verdana, "游ゴシック", "ヒラギノ", sans-serif;
	font-weight: 600;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	min-height: 100vh;
	color: #353535;
}

::selection {
	background: #7e9fc5;
	color: white;
}

#app h2 {
	border-bottom: 2px solid #7e9fc5;
	margin-top: 1.5em;
	margin-bottom: 0;
}

#app h3 {
	margin-top: 1em;
	margin-bottom: 0;
}

#app p {
	padding: 0 1em;
}

#app span {
	display: inline-block;
}

#app i {
	color: #327a9b;
}

#app a {
	color: #327a9b;
	text-decoration: none;
}

#app hr {
	height: 0;
	border: none;
	border-top: 4px dotted #327a9b;
}

#app .router-link-active {
	color: #7e9fc5;
}

#app .center {
	text-align: center;
}

.background {
	background: white;
	min-height: calc(70vh - 98px);
}

.navi {
	background: white;
	width: 100%;
	position: sticky;
	top: 0;
}

.content {
	margin: auto;
	max-width: 900px;
	display: flex;
}

.view {
	flex-basis: 600px;
	padding: 1em;
}

@media screen and (max-width: 40em) {
	.side {
		display: none;
	}
}

.side {
	flex-grow: 1;
	flex-basis: 250px;
	padding: 2em 1em;
}

.footer {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	box-sizing: content-box;
	height: 32px;
	background: #353535;
}
.footer p {
	margin: 0;
	padding: 0;
	color: #89b0ae;
	font-size: 13px;
	text-align: center;
}
</style>

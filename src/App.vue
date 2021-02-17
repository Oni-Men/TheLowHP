<template>
	<address-popout style="z-index:900;" />
	<discord-logo />
	<HeaderNavi />
	<div class="background">
		<div class="content article">
			<router-view />
		</div>
	</div>
	<div class="footer">
		<p>COPYRIGHT &copy;2021 THE-LOW ALL RIGHT RESERVED.</p>
	</div>
</template>

<script>
import HeaderNavi from "./components/HeaderNavi.vue";
import AddressPopout from "./components/AddressPopout.vue";
import DiscordLogo from "./components/DiscordLogo.vue";

export default {
	name: "App",
	components: {
		HeaderNavi,
		AddressPopout,
		DiscordLogo,
	},
};
</script>

<style>
body {
	margin: 0;
}

pre {
	padding: 0.4em 0.6em;
	background: #eee;
	display: inline-block;
	border-radius: 0.4em;
	font-family: "Roboto Mono", monospace;
}

#app {
	font-family: "Sawarabi Gothic", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #353535;
}

#app h1 {
	text-align: center;
}

#app h2 {
	text-align: center;
}

#app h3 {
	text-align: center;
}

#app span {
	display: inline-block;
}

#app i {
	color: #89b0ae;
}

#app a {
	color: #89b0ae;
	text-decoration: none;
}

#app hr {
	height: 0;
	border: none;
	border-top: 4px dotted #89b0ae;
}

#app .router-link-active {
	color: #555b6e;
	border-color: darkslategray;
}

.background {
	background: white;
	min-height: calc(50vh - 24px);
}

.content {
	margin: auto;
	padding-top: 2em;
	max-width: 800px;
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

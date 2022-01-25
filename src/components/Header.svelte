<script>
	import BackArrow from "./TextArrow.svelte";
	import { onMount } from "svelte";
	import { fetchServerInformation } from "../mixins";

	let online = false;
	let players = 0;

	onMount(() => {
		fetchServerInformation().then(() => {
			const serverInfo = JSON.parse(localStorage.getItem("server-info"));
			if (serverInfo) {
				online = serverInfo.online;
				players = serverInfo.players.now;
			}
		});
	});
</script>

<div class="main">
	<div class="desktop-only back-to-portal">
		<BackArrow href={"https://portal.eximradar.jp/"}>EXRポータルに戻る</BackArrow>
	</div>
	<a class="logo" href="/thelow/">
		<img src="../assets/TheLow-Logo-Set/logo.svg" alt="THE LOW" />
	</a>
	<div class="server-info" class:offline={!online}>
		{#if online}
			<span>{players} Players Online</span>
		{:else}
			<span>SERVER IS OFFLINE</span>
		{/if}
	</div>
</div>

<style>
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

	.logo img {
		width: 100%;
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

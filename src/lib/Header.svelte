<script>
	import ArrowButton from './TextArrow.svelte';
	import { onMount } from 'svelte';
	import { fetchServerInformation } from '../mixins';

	let online = false;
	let players = 0;

	onMount(() => {
		fetchServerInformation().then(() => {
			const serverInfo = JSON.parse(localStorage.getItem('server-info'));
			if (serverInfo) {
				online = serverInfo.online;
				players = serverInfo.players.now;
			}
		});
	});
</script>

<header>
	<div class="desktop-only back-to-portal">
		<ArrowButton href={'https://portal.eximradar.jp/'}>EXRポータルに戻る</ArrowButton>
	</div>
	<a class="logo" href="/thelow/">
		<img src="/thelow/TheLow-Logo-Set/logo.svg" alt="THE LOW" />
	</a>
	<div class="server-info" class:offline={!online}>
		{#if online}
			<span>{players} Players Online</span>
		{:else}
			<span>SERVER IS OFFLINE</span>
		{/if}
	</div>
</header>

<style>
	header {
		width: 100%;
		height: 30vh;
		background: url('/thelow/venemia.jpg') center center no-repeat;
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

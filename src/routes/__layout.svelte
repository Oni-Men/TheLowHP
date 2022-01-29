<script context="module">
	export const prerender = true;
</script>

<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import Header from '$lib/Header.svelte';
	import CopyField from '$lib/CopyField.svelte';
	import Navigator from '$lib/Navigator.svelte';
	import '../app.css';

	let index = true;
	$: {
		index = $page.url.pathname === '/thelow';
	}
</script>

{#if !index}
	<Header />
{/if}

<div class={`${index ? 'fixed' : 'sticky'} desktop-only`}>
	<Navigator showAlways={true} />
</div>
<div class="mobile-only">
	<Navigator />
</div>

<div class="address desktop-only">
	<CopyField text="mc.eximradar.jp" shadow="true" />
</div>
<div class="discord desktop-only">
	<a href="https://discord.gg/kVyPVky" target="_blank" rel="noopener noreferrer">
		<img src="/thelow/icons/Discord-Logo-Color.svg" alt="Discord Logo" />
	</a>
</div>
<main>
	<slot />
</main>
<footer>
	<p>COPYRIGHT &copy;2021 TheLow ALL RIGHT RESERVED.</p>
</footer>

<style>
	.discord {
		height: 0;
		position: fixed;
		z-index: 900;
		bottom: 6em;
		left: 2em;
		width: 4em;
		height: 4em;
		filter: drop-shadow(1px 1px 0.5px #333);
	}

	.address {
		position: fixed;
		z-index: 900;
		right: 16px;
		top: 10px;
	}

	.fixed {
		width: 100%;
		position: fixed;
	}

	.sticky {
		position: sticky;
		top: 0;
	}

	main {
		min-height: calc(70vh - 7.5em);
		padding: 0 0.5em;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		width: 100%;
		height: 32px;
		background: #353535;
		color: #89b0ae;
		font-size: 13px;
		text-align: center;
	}
</style>

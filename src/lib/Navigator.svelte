<script>
	import { page } from '$app/stores';
	import { fade, scale } from 'svelte/transition';

	export let showAlways = false;
	export let hide = true;

	function openMenu() {
		hide = false;
	}

	function closeMenu() {
		hide = true;
	}

	let items = [
		{
			id: '/thelow/about',
			display: 'TheLowとは'
		},
		{
			id: '/thelow/join',
			display: '参加する'
		},
		{
			id: '/thelow/rules',
			display: 'ルール'
		},
		{
			id: '/thelow/faq',
			display: 'よくある質問'
		}
	];
</script>

{#if !showAlways && hide}
	<img
		class="openMenu mobile-only"
		on:click={openMenu}
		src="/thelow/icons/menu.svg"
		alt="Open button"
		transition:scale
	/>
{:else}
	<div class="navigator" class:hide on:click={closeMenu} transition:fade>
		<nav>
			<ul>
				{#each items as item}
					<a class:active={$page.url.pathname === item.id} href={item.id}>
						<li>
							{item.display}
						</li>
					</a>
				{/each}
			</ul>
		</nav>
	</div>
{/if}

<style>
	@media screen and (max-width: 40em) {
		.navigator {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background: #fffe;
			z-index: 999;
		}

		nav {
			width: 100%;
		}

		ul {
			width: 100%;
			display: block;
			flex-direction: column;
		}

		a {
			margin: 0;
			width: 50%;
		}

		ul li {
			width: 100%;
			margin: 0.2em 0;
			padding: 1em 0;
			border: 2px solid #353535;
			border-radius: 0.2em;
		}

		.hide {
			display: none;
		}
	}

	@media screen and (min-width: 40em) {
		.navigator {
			width: 100%;
			padding: 1em 0;
			background: white;
		}

		ul {
			max-width: 1000px;
			flex-direction: row;
		}

		li {
			padding: 0.2em 1em;
			width: 120px;
			height: 1.2em;
		}

		.openMenu {
			display: none;
		}

		a::after {
			content: '';
			display: block;
			position: relative;
			top: 4px;
			left: 10%;
			width: 80%;
			height: 2px;
			color: #7e9fc5;
			background-color: #7e9fc5;
			transform: scale(0, 1);
		}

		a:hover::after {
			transition: transform 0.2s ease-out;
			transform: scale(1, 1);
		}

		.active {
			color: #7e9fc5;
		}

		a.active::after {
			transform: scale(1, 1);
		}
	}

	.openMenu {
		position: fixed;
		right: 1em;
		bottom: 1em;
		width: 2.5em;
		height: 2.5em;
		z-index: 9999;
	}

	ul {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0 auto;
	}

	ul li {
		list-style: none;
		font-size: 20px;
		text-align: center;
	}
</style>

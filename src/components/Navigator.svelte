<script>
import { fade } from "svelte/transition";
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function openMenu() {
	dispatch("open");
}

function closeMenu() {
	dispatch("close");
}

export let show = true;
let items = [
			{
				name: "article",
				params: {
					id: "about",
				},
				display: "TheLowとは",
			},
			{
				name: "article",
				params: {
					id: "join",
				},
				display: "参加する",
			},
			{
				name: "article",
				params: {
					id: "rules",
				},
				display: "ルール",
			},
			{
				name: "article",
				params: {
					id: "faq",
				},
				display: "よくある質問",
			},
		];
</script>

{#if show}
	<div class="navigator" v-if="show" on:click={closeMenu} transition:fade>
		<nav>
			<ul>
				{#each items as item}
					<!-- <router-link v-for="item of items" :key="item.url" :to="item"> -->
					<li>{item.display}</li>
					<!-- </router-link> -->
				{/each}
			</ul>
		</nav>
	</div>
{:else}
	<img class="openMenu" on:click={openMenu} src="../assets/icons/menu.svg" alt="Open button" />
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

		/* a {
			margin: 0;
			width: 50%;
		} */

		ul li {
			width: 100%;
			margin: 0.2em 0;
			padding: 1em 0;
			border: 2px solid #353535;
			border-radius: 0.2em;
		}

		.openMenu {
			position: fixed;
			right: 1em;
			bottom: 1em;
			width: 4em;
			height: 4em;
			z-index: 9999;
		}
	}

	@media screen and (min-width: 40.01em) {
		.navigator {
			width: 100%;
			padding: 1em 0;
		}

		ul {
			max-width: 1000px;
			flex-direction: row;
		}
		ul li {
			padding: 0.2em 1em;
			width: 120px;
			height: 1.2em;
		}

		.openMenu {
			display: none;
		}

		/* a::after {
			content: "";
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
		} */
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

<script>
	import { fade, scale } from "svelte/transition";

	export let text;
	export let shadow = false;

	let lock = false;
	let dummy;

	function copyText() {
		if (!dummy) return;
		dummy.select();
		document.execCommand("copy");
	}
</script>

<div id="copy-field">
	<span class="field" class:shadow>
		<span>{text}</span>
		<span class="icons">
			{#if !lock}
				<img transition:fade on:click={copyText} class="icon copy" src="./assets/icons/copy.svg" alt="" />
			{:else}
				<img transition:scale class="icon ok" src="./assets/icons/ok.svg" alt="" />
			{/if}
		</span>
	</span>
	<textarea style="display: none;" bind:this={dummy}>{text}</textarea>
</div>

<style>
	.field {
		margin: 0.5em 0;
		padding: 0.4em 0.6em;
		background: #eee;
		display: inline-block;
		border-radius: 0.4em;
		font-family: "Roboto Mono", monospace;
		font-size: 16px;
	}

	.icons {
		display: inline-block;
		width: 1em;
		height: 1em;
		position: relative;
		vertical-align: bottom;
	}

	.icon {
		width: 1em;
		height: 1em;
		position: absolute;
		left: 0;
		bottom: 0;
		margin: 0 0.2em;
	}

	.copy {
		cursor: pointer;
	}

	.ok {
		cursor: none;
	}

	.shadow {
		box-shadow: 0 0.1em 0.1em #0066;
	}

	@keyframes pop {
		0% {
			transform: scale(0, 0) rotate(-45deg);
		}

		25% {
			transform: scale(1, 1);
		}

		100% {
			transform: scale(1, 1);
		}
	}
</style>

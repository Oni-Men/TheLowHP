<script>
	import {fade} from "svelte/transition";
	export let src;
	export let alt;
	let zoom = false;
</script>

<div id="zoom-image" on:click={(zoom = !zoom)}>
	<img {src} {alt} />
	<transition name="fade">
		{#if zoom}
			<div class="zoom" transition:fade>
				<img v-if="zoom" {src} {alt} />
			</div>
		{/if}
	</transition>
</div>

<style scoped>
	.zoom {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 900;
		width: 100%;
		height: 100%;
		background: #fffa;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.zoom img {
		cursor: zoom-out;
	}

	#zoom-image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		max-width: 90%;
		max-height: 90%;
		cursor: zoom-in;
	}
</style>

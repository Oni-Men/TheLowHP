<script>
	import Navigator from './Navigator.svelte';
	import { fade } from 'svelte/transition';

	let showNavi = false;
</script>

<div class="navi">
	<div class="mobile" transition:fade>
		{#if showNavi}
			<Navigator
				on:openMenu={() => {
					showNavi = true;
				}}
				on:closeMenu={() => {
					showNavi = false;
				}}
			/>
		{/if}
	</div>
	<div class="desktop">
		<Navigator />
	</div>
</div>

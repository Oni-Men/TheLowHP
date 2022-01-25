<script>
import Navigator from "./Navigator.svelte";

let showNavi = false;
</script>

<div class="navi">
	<div class="mobile">
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

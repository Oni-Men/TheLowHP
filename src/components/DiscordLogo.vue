<template>
	<div class="discord-logo">
		<a href="https://discord.gg/kVyPVky" target="_blank" rel="noopener noreferrer">
			<img src="../assets/icons/Discord-Logo-Color.svg" />
		</a>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
@media screen and (max-width: 40em) {
	.discord-logo {
		display: none;
	}
}

@media screen and (min-width: 40em) {
	.discord-logo {
		height: 0;

		position: fixed;
		z-index: 900;
		bottom: 6em;
		left: 2em;
	}

	.discord-logo img {
		width: 4em;
		height: 4em;
	}
}
</style>

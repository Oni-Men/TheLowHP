<script>
	import CopyField from "./components/CopyField.svelte";
	import Header from "./components/Header.svelte";
	import ResponsiveNavi from "./components/ResponsiveNavi.svelte";
</script>

<main>
	<div class="address desktop-only">
		<CopyField text="mc.eximradar.jp" shadow="true" />
	</div>
	<div class="discord desktop-only">
		<a href="https://discord.gg/kVyPVky" target="_blank" rel="noopener noreferrer">
			<img src="../assets/icons/Discord-Logo-Color.svg" alt="Discord Logo" />
		</a>
	</div>
	<Header />
	<ResponsiveNavi />
	<div class="background">
		<div class="content">
			<router-view class="view" />
			<div class="side">
				<side-bar />
			</div>
		</div>
		<div v-else>
			<router-view class="view" />
		</div>
	</div>
	<div class="footer">
		<p>COPYRIGHT &copy;2021 TheLow ALL RIGHT RESERVED.</p>
	</div>
</main>

<style>
	.discord {
		height: 0;
		position: fixed;
		z-index: 900;
		bottom: 6em;
		left: 2em;
		width: 4em;
		height: 4em;
	}

	.address {
		position: fixed;
		z-index: 900;
		right: 2em;
		top: 1em;
	}

	.background {
		background: white;
		min-height: calc(70vh - 98px);
	}

	.navi {
		background: white;
		width: 100%;
		position: sticky;
		top: 0;
	}

	.content {
		margin: auto;
		max-width: 900px;
		display: flex;
	}

	.view {
		flex-basis: 600px;
		padding: 1em;
	}

	@media screen and (max-width: 40em) {
		.side {
			display: none;
		}
	}

	.side {
		flex-grow: 1;
		flex-basis: 250px;
		padding: 2em 1em;
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		box-sizing: content-box;
		height: 32px;
		background: #353535;
	}
	.footer p {
		margin: 0;
		padding: 0;
		color: #89b0ae;
		font-size: 13px;
		text-align: center;
	}
</style>

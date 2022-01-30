<script>
	export let href = '';
	export let up = false;
	export let down = false;
	export let left = false;
	export let right = false;
</script>

<a {href}>
	<div class="arrow" class:up class:down class:left class:right>
		<svg
			xmlns:svg="http://www.w3.org/2000/svg"
			xmlns="http://www.w3.org/2000/svg"
			width="1024"
			height="1024"
			viewBox="0 0 270.93333 270.93334"
			version="1.1"
			id="svg8"
		>
			<g>
				<path
					d="M 188.52083,17.579369 A 21.164388,21.164388 0 0 0 174.2754,23.103802 L 68.142547,119.82512 a 21.166506,21.166506 0 0 0 0,31.2843 L 174.2754,247.83074 a 21.164388,21.164388 0 0 0 29.90006,-1.38736 21.164388,21.164388 0 0 0 -1.38735,-29.89693 l -88.96899,-81.07917 88.96899,-81.079189 a 21.164388,21.164388 0 0 0 1.38735,-29.900056 21.164388,21.164388 0 0 0 -15.65463,-6.908666 z"
					id="path1410"
				/>
			</g>
		</svg>
		<span><slot /></span>
	</div>
</a>

<style>
	.arrow {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}

	.arrow svg {
		padding-right: 0.25em;
		width: 1em;
		height: 1em;
		fill: currentColor;
	}

	.up {
		flex-direction: column;
	}

	.up svg {
		transform: rotateZ(90deg);
	}

	.down {
		flex-direction: column-reverse;
	}

	.down svg {
		transform: rotateZ(-90deg);
	}

	.left {
		flex-direction: row;
	}

	.right {
		flex-direction: row-reverse;
	}

	.right svg {
		transform: rotateZ(180deg);
	}
</style>

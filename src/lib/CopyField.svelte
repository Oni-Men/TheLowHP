<script>
	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const [send, recieve] = crossfade({
		duration: 1500,
		easing: quintOut
	});

	export let text;
	export let shadow = false;

	let lock = false;
	let field;

	function copyText() {
		const dummy = document.createElement('textarea');
		dummy.value = text;
		field.append(dummy);
		dummy.select();
		document.execCommand('copy');
		dummy.remove();
	}
</script>

<span class="field" class:shadow bind:this={field}>
	<span class="mono">{text}</span>
	<span class="icon">
		{#if !lock}
			<img
				in:send
				out:recieve
				class="copy"
				src="/thelow/icons/copy.svg"
				alt=""
				on:click={() => {
					lock = true;
					copyText();
				}}
				on:outroend={() => {
					lock = false;
				}}
			/>
		{:else}
			<img in:send out:recieve class="ok" src="/thelow/icons/ok.svg" alt="" />
		{/if}
	</span>
</span>

<style>
	.field {
		margin: 0.5em 0;
		padding: 0.4em 0.6em;
		background: #eee;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.4em;
		font-size: 14px;
	}

	.icon {
		width: 16px;
		height: 16px;
	}

	.icon img {
		width: 16px;
		height: 16px;
		position: absolute;
	}

	.copy {
		cursor: pointer;
	}

	.ok {
		cursor: none;
	}

	.shadow {
		filter: drop-shadow(1px 1px 1.5px #333);
	}
</style>

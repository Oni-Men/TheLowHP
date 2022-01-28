<script context="module">
	import { browser } from '$app/env';
	export const router = browser;
	export const prerender = true;

	export const load = async ({ params, fetch }) => {
		const url = `https://raw.githubusercontent.com/Oni-Men/TheLowHP/master/docs/ja_JP/${params.article}.md`;
		const res = await fetch(url);
		// const res = await fetch(`/articles/${page}.json`);

		if (res.ok) {
			const source = await res.text();

			return {
				props: { source }
			};
		}

		const { message } = await res.text();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let source;
</script>

<svelte:head>
	<title>About - TheLow HP</title>
</svelte:head>

<div class="content">
	<SvelteMarkdown {source} />
</div>

<style>
	.content {
		max-width: 600px;
		margin: 0 auto;
	}
</style>

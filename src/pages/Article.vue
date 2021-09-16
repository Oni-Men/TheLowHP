<template>
	<div id="article">
		<div v-html="md" />
	</div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import marked from "marked";
import sanitizeHtml from "sanitize-html";

export default {
	setup() {
		const route = useRoute();
		const router = useRouter();

		const md = ref("");
		const download = async (url) => {
			const res = await fetch(url);
			if (res.ok) {
				md.value = await res.text();
			} else {
				router.push({ name: "404", params: { catchAll: `?a=${route.params.id}` } });
			}
		};

		const init = () => {
			if (!route.params.id) {
				return;
			}
			const url = `https://raw.githubusercontent.com/Oni-Men/TheLowHP/master/docs/ja_JP/${route.params.id}.md`;
			download(url);
		};

		watch(route, () => {
			init();
		});

		init();
		return {
			md: computed(() => {
				return marked(sanitizeHtml(md.value));
			}),
		};
	},
};
</script>

<style>
img {
	width: 100%;
}

code {
	display: inline;
	padding: 0.4em;
	margin: 0 1em;
	background: #eee;
	border-radius: 1em;
}
</style>

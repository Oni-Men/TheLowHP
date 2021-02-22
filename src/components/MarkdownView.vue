<template>
	<div id="markdown">
		<div v-html="html" />
	</div>
</template>

<script>
import { markdownToHtml } from "@/mixins";

export default {
	name: "MarkdownView",
	props: ["md"],
	setup(props) {
		const html = markdownToHtml(props.md);
		return {
			html,
		};
	},
};
</script>

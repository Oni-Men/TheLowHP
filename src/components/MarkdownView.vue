<template>
	<div id="markdown">
		<div v-html="html" />
	</div>
</template>

<script>
import marked from "marked";

export default {
	name: "MarkdownView",
	props: ["md"],
	setup(props) {
		return {
			html: marked(props.md),
		};
	},
};
</script>

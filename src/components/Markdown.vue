<template>
	<div id="markdown">
		<div v-html="src" />
	</div>
</template>

<script>
export default {
	name: "Markdown",
	props: ["src"],
	setup() {
		return {};
	},
};
</script>

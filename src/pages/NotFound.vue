<template>
	<div id="not-found">
		<h1>404 - Not Found</h1>
		<p>お目当てのものは、ここにはないようだ。</p>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
#not-found {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 50vh;
}

h1 {
	margin: 0 auto;
}

p {
	margin: 0 auto;
}
</style>

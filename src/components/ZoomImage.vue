<template>
	<div id="zoom-image" @click="zoom = !zoom">
		<img :src="src" :alt="alt" />
		<transition name="fade">
			<div v-if="zoom" class="zoom">
				<img v-if="zoom" :src="src" :alt="alt" />
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "ZoomImage",
	props: ["src", "alt"],
	data() {
		return {
			zoom: false,
		};
	},
};
</script>
<style scoped>
.zoom {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 200;
	width: 100%;
	height: 100%;
	background: #fffa;
	display: flex;
	justify-content: center;
	align-items: center;
}

.zoom img {
	cursor: zoom-out;
}

#zoom-image {
	display: flex;
	justify-content: center;
	align-items: center;
}

img {
	max-width: 90%;
	max-height: 90%;
	cursor: zoom-in;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

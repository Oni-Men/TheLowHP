<template>
	<div class="image-card" :class="{ inverted }">
		<section class="text" :class="[inverted ? 'text-left' : 'text-right']">
			<slot> </slot>
		</section>
		<zoom-image :src="src" />
	</div>
</template>
<script>
import ZoomImage from "./ZoomImage.vue";

export default {
	name: "ImageCard",
	components: { ZoomImage },
	props: {
		src: {
			type: String,
			required: true,
		},
		inverted: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
};
</script>
<style scoped>
@media screen and (min-width: 40.01em) {
	.image-card {
		display: flex;
		justify-content: center;
		margin: 5em 0;
	}

	.text {
		flex-basis: 100%;
	}

	.inverted {
		flex-direction: row-reverse;
	}

	.text-left {
		text-align: left;
	}

	.text-right {
		text-align: right;
	}
}
</style>

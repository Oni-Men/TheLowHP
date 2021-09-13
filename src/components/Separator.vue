<template>
	<div class="separator">
		<img class="wave" :class="style" src="../assets/wave.svg" />
	</div>
</template>
<script>
export default {
	name: "Separator",
	props: {
		fill: {
			type: String,
			required: false,
			default: "#ffffff",
		},
		flipx: {
			type: Boolean,
			required: false,
			default: false,
		},
		flipy: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	setup(props) {
		const style = [];
		if (props.flipx && props.flipy) {
			style.push("flip-both");
		} else {
			if (props.flipx) {
				style.push("flipx");
			} else if (props.flipy) {
				style.push("flipy");
			}
		}

		return {
			style,
		};
	},
};
</script>

<style scoped>
.separator {
	padding: 0;
	overflow: hidden;
	padding: 0;
}

.wave {
	width: 110%;
	position: relative;
	left: -5%;
	height: auto;
	display: block;
}

.flipx {
	transform: scale(-1, 1);
}

.flipy {
	transform: scale(1, -1);
}

.flip-both {
	transform: scale(-1, -1);
}
</style>

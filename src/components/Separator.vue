<template>
	<div class="separator">
		<img class="wave" :class="style" src="../assets/wave.svg" />
		<!-- <svg class="wave" :class="style" width="210mm" height="7mm" viewBox="0 0 210 7.0000001">
			<g transform="translate(0,-290)">
				<path
					:style="{ fill }"
					style="opacity:1;fill-opacity:1;stroke:none;stroke-width:11.90625;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:2.64566922;stroke-opacity:1;paint-order:markers
				stroke fill"
					d="m -0.1837478,291.57065 c 0,0 44.1473758,-3.53396 90.4142898,0 54.031208,4.12702 120.571268,0 120.571268,0 V 297 H -0.1837478 Z"
					id="rect815"
					sodipodi:nodetypes="cscccc"
				/>
			</g>
		</svg> -->
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

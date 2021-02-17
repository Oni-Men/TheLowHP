<template>
	<div class="introduce-card">
		<h1><slot name="title"></slot></h1>
		<p><slot name="text"></slot></p>
		<p></p>
		<div class="wave-panel">
			<div class="waveWrap">
				<separator class="wave-top" :flipx="flip" :flipy="true" />
				<img class="image" :src="src" />
				<div class="icons">
					<slot name="icon"></slot>
				</div>
				<separator class="wave-bot" :flipx="!flip" :flipy="false" />
			</div>
		</div>
	</div>
</template>
<script>
import Separator from "./Separator.vue";
export default {
	components: { Separator },
	props: ["flip", "src"],
};
</script>
<style scoped>
#introduce-card {
	width: 100%;
}

.wave-panel {
	width: 100%;
	height: auto;
}

.waveWrap {
	position: relative;
	left: 0;
	top: 0;
	z-index: 0;
	width: 100%;
	height: 100%;
}

.wave-top {
	position: absolute;
	top: -1px;
	left: 0;
	right: 0;
}

.wave-bot {
	position: absolute;
	bottom: -1px;
	left: 0;
	right: 0;
}

.image {
	background-size: cover;
	width: 100%;
	height: auto;
}

.icons {
	position: absolute;
	top: 0;
	left: 10%;
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
}
</style>

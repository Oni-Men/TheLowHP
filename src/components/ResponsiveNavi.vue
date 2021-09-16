<template>
	<div class="navi">
		<div class="mobile">
			<navigator :show="isNaviVisible" @open="openMenu()" @close="closeMenu()" />
		</div>
		<div class="desktop">
			<navigator />
		</div>
	</div>
</template>
<script>
import { ref } from "vue";
import Navigator from "./Navigator.vue";

export default {
	components: { Navigator },
	setup() {
		const isNaviVisible = ref(false);
		const openMenu = () => {
			isNaviVisible.value = true;
		};

		const closeMenu = () => {
			isNaviVisible.value = false;
		};

		return {
			isNaviVisible,
			openMenu,
			closeMenu,
		};
	},
};
</script>

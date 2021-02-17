<template>
	<div id="address-popout">
		<copy-field :text="'mc.eximradar.jp'" :shadow="true" />
	</div>
</template>
<script>
import CopyField from "./CopyField.vue";

export default {
	name: "AddressPopout",
	components: { CopyField },
};
</script>
<style scoped>
@media screen and (min-width: 480px) {
	#address-popout {
		position: fixed;
		z-index: 100;
		right: 2em;
		top: 1em;
	}
}

@media screen and (max-width: 480px) {
	#address-popout {
		display: none;
	}
}
</style>

<template>
	<div id="copy-field">
		<span class="field" :class="{ shadow }">
			<span>{{ address }}</span>
			<span class="icons">
				<transition name="fade">
					<img v-if="!lock" @click="copyAddress()" class="icon copy" src="../assets/icons/copy.svg" />
				</transition>
				<transition name="pop" @after-enter="unlock()">
					<img v-if="lock" class="icon ok" src="../assets/icons/ok.svg" />
				</transition>
			</span>
		</span>
	</div>
</template>
<script>
import { copyText } from "vue3-clipboard";
import { ref } from "vue";

export default {
	name: "CopyField",
	props: {
		text: {
			type: String,
			required: true,
		},
		shadow: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	setup(props) {
		const address = ref(props.text);
		const lock = ref(false);
		const copyAddress = () => {
			lock.value = true;
			copyText(props.text, address.value, () => {});
		};

		const unlock = () => {
			lock.value = false;
		};

		return {
			copyAddress,
			address,
			lock,
			unlock,
		};
	},
};
</script>
<style scoped>
.field {
	margin: 0.5em 0;
	padding: 0.4em 0.6em;
	background: #eee;
	display: inline-block;
	border-radius: 0.4em;
	font-family: "Roboto Mono", monospace;
	font-size: 16px;
}

.icons {
	display: inline-block;
	width: 1em;
	height: 1em;
	position: relative;
	vertical-align: bottom;
}

.icon {
	width: 1em;
	height: 1em;
	position: absolute;
	left: 0;
	bottom: 0;
	margin: 0 0.2em;
}

.copy {
	cursor: pointer;
}

.ok {
	cursor: none;
}

.shadow {
	box-shadow: 0 0.1em 0.1em #0066;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease, transform 1s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scale(1.5, 1.5);
}

.pop-enter-active {
	animation: pop 2s;
}
.pop-leave-active {
	animation: pop 0.5s reverse;
}

@keyframes pop {
	0% {
		transform: scale(0, 0) rotate(-45deg);
	}

	25% {
		transform: scale(1, 1);
	}

	100% {
		transform: scale(1, 1);
	}
}
</style>

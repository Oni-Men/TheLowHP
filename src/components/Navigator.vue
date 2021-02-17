<template>
	<div>
		<transition name="fade">
			<div class="navigator" v-if="show" @click="closeMenu()">
				<nav>
					<ul>
						<router-link v-for="(item, index) of items" :key="item.url" :to="{ name: item.name }">
							<li :class="{ separate: index !== 0 && index !== items.length }">
								{{ item.display }}
							</li>
						</router-link>
					</ul>
				</nav>
			</div>
			<img class="openMenu" v-else @click="openMenu()" src="../assets/icons/menu.svg" />
		</transition>
	</div>
</template>
<script>
export default {
	name: "Navigator",
	emits: ["open", "close"],
	props: {
		show: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
	setup(_, context) {
		const items = [
			{
				url: "/",
				name: "index",
				display: "トップ",
			},
			{
				url: "/join",
				name: "join",
				display: "参加する",
			},
			{
				url: "/rules",
				name: "rules",
				display: "ルール",
			},
			{
				url: "/faq",
				name: "faq",
				display: "よくある質問",
			},
		];

		const openMenu = () => {
			context.emit("open");
		};

		const closeMenu = () => {
			context.emit("close");
		};

		return {
			items,
			openMenu,
			closeMenu,
		};
	},
};
</script>
<style scoped>
@media screen and (max-width: 40em) {
	.navigator {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100vw;
		height: 100vh;
		background: #fffe;
	}

	nav {
		width: 100%;
	}

	ul {
		width: 100%;
		display: block;
		flex-direction: column;
	}

	a {
		margin: auto;
		width: 50%;
	}

	ul li {
		width: 100%;
		margin: 0.2em 0;
		padding: 1em 0;
		border: 2px solid #353535;
		border-radius: 0.2em;
	}

	.openMenu {
		position: fixed;
		right: 1em;
		bottom: 1em;
		width: 4em;
		height: 4em;
		z-index: 9999;
	}
}

@media screen and (min-width: 40.01em) {
	.navigator {
		width: 100%;
		background: white;
		z-index: 200;
	}

	ul {
		max-width: 1000px;
		flex-direction: row;
	}
	.separate {
		border-left: 2px solid #353535;
	}

	ul li {
		padding: 0.2em 1em;
		width: 120px;
		height: 1.2em;
	}

	.openMenu {
		display: none;
	}
}

ul {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 0 auto;
}

ul li {
	list-style: none;
	font-size: 20px;
	text-align: center;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scale(1.2, 1.2);
}
</style>

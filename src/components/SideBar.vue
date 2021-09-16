<template>
	<div class="side-bar">
		<h3>ページ</h3>
		<div v-for="c in contents" :key="c.name">
			<router-link :to="{ name: 'article', params: { id: c.name } }">
				<p>{{ c.name }}</p>
			</router-link>
		</div>
	</div>
</template>
<script>
import { ref } from "vue";

export default {
	name: "SideBar",
	setup() {
		const contents = ref([]);
		const endpoint = new URL("https://api.github.com/repos/Oni-Men/TheLowHP/contents/docs/ja_JP");

		const fetchFileInfo = async (url) => {
			const res = await fetch(url);
			const datas = await res.json();

			for (const data of datas) {
				if (data.type == "dir") {
					fetchFileInfo(new URL(data.path, url));
				} else {
					contents.value.push({
						name: data.name.replace(/\.md$/, ""),
					});
				}
			}
		};

		fetchFileInfo(endpoint);
		return {
			contents,
		};
	},
};
</script>

<style scoped>
.side-bar {
	position: sticky;
	top: 68px;
}

.side-bar h3 {
	text-align: center;
}
</style>

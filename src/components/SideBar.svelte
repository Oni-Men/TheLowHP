<script>
const endpoint = new URL("https://api.github.com/repos/Oni-Men/TheLowHP/contents/docs/ja_JP");

let contents = [];

async function fetchFileInfo(url) {
	const res = await fetch(url);
			const datas = await res.json();

			for (const data of datas) {
				if (data.type == "dir") {
					fetchFileInfo(new URL(data.path, url));
				} else {
					contents.push({
						name: data.name.replace(/\.md$/, ""),
					});
				}
			}
}
</script>

<div class="side-bar">
	<h3>ページ</h3>
	{#each contents as content}
		<!-- <router-link :to="{ name: 'article', params: { id: c.name } }"> -->
		<p>{content.name}</p>
		<!-- </router-link> -->
	{/each}
</div>

<style>
	.side-bar {
		position: sticky;
		top: 68px;
	}

	.side-bar h3 {
		text-align: center;
	}
</style>

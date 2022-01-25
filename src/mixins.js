export function setTitle(title) {
	return (window.document.title = !title ? "TheLow" : title + " - " + "TheLow");
}

export async function fetchServerInformation() {
	const lastFetched = parseInt(localStorage.getItem("last-fetch"));
	const serverInfo = localStorage.getItem("server-info");

	//最新のフェッチから1分以内
	if (serverInfo !== undefined && Date.now() - lastFetched < 60000) {
		console.info("[The Low] Found server information");
		return;
	}

	const request = new Request("https://mcapi.us/server/status?ip=mc.eximradar.jp", {
		mode: "cors",
	});
	return fetch(request)
		.then((response) => response.json())
		.then((json) => {
			delete json.favicon;
			localStorage.setItem("last-fetch", Date.now());
			localStorage.setItem("server-info", JSON.stringify(json));
			console.info("[The Low] fetch server information.");
		});
}

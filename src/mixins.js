export const globalMixins = {
	methods: {
		setTitle,
		fetchServerInformation,
		markdownToHtml,
	},
};

export function setTitle(title) {
	return (window.document.title = !title ? "The Low HP" : title + " - " + "The Low");
}

export async function fetchServerInformation() {
	const lastFetched = parseInt(localStorage.getItem("last-fetch"));
	const serverInfo = localStorage.getItem("server-info");

	//最新のフェッチから1分以内
	if (serverInfo !== undefined && Date.now() - lastFetched < 60000) {
		console.info("[The Low] Found server information");
		return;
	}

	const request = new Request("https://mcapi.us/server/status?ip=mc.eximradar.jp");
	return fetch(request)
		.then((response) => response.json())
		.then((json) => {
			delete json.favicon;
			localStorage.setItem("last-fetch", Date.now());
			localStorage.setItem("server-info", JSON.stringify(json));
			console.info("[The Low] fetch server information.");
		});
}

const replacers = {
	h1(text) {
		return text.replace(/^# (.+)$/u, "<h1>$1</h1>");
	},
	h2(text) {
		return text.replace(/^#{2} (.+)$/u, "<h2>$1</h2>");
	},
	h3(text) {
		return text.replace(/^#{3} (.+)$/u, "<h3>$1</h3>");
	},
	bold(text) {
		return text.replace(/\*{2}(.+)\*{2}/u, `<b>$1</b>`);
	},
	italic(text) {
		return text.replace(/\*(.+)\*/u, `<i>$1</i>`);
	},
	url(text) {
		//相対パスも使用するためURLの正規表現は特に縛らない
		return text.replace(/\[(.+)\]\((.+)\)/u, `<a href="$2">$1</a>`);
	},
	hr(text) {
		return text.replace(/-{3,}/u, "<hr />");
	},
	reset(text) {
		return text.replace(/^\s*$/u, "<br />");
	},
};

export function markdownToHtml(input) {
	const parsed = [];
	const lines = input.trim().split("\n");

	while (lines.length) {
		let line = lines.shift().trim();
		for (const replace of Object.values(replacers)) {
			line = replace(line);
		}
		parsed.push(line);
	}
	return parsed.join("\n");
}

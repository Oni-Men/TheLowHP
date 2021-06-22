export const globalMixins = {
	methods: {
		setTitle,
		fetchServerInformation,
		markdownToHtml,
	},
};

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
	ul(text, context) {
		if (text.match(/^- (.+)$/u) == null) {
			return text;
		}
		const replaced = text.replace(/^- (.+)$/u, "<li>$1</li>");
		if (context.currentTag == "ul") {
			return replaced;
		} else {
			context.tags.push("ul");
			return `<ul>${replaced}`;
		}
	},
	bold(text) {
		return text.replace(/\*{2}(.+)\*{2}/u, `<b>$1</b>`);
	},
	strikeThrough(text) {
		return text.replace(/~{2}(.+)~{2}/u, `<s>$1</s>`);
	},
	italic(text) {
		return text.replace(/\*(.+)\*/u, `<i>$1</i>`);
	},
	blockCode(text) {
		// if (text.match(/^`{3}(.+)?$/u) == null) {
		// 	return text;
		// }
		// const replaced = text.replace(/^`{3}(.+)?$/u, `<code class="$1"><pre>`);
		// if (context.currentTag == "code") {
		// 	return "</pre></code>";
		// } else {
		// 	context.tags.push("code");
		// 	return replaced;
		// }
		return text;
	},
	inlineCode(text) {
		return text.replace(/`(.+)`/, "<pre>$1</pre>");
	},
	url(text) {
		//相対パスも使用するためURLの正規表現は特に縛らない
		return text.replace(/\[(.+)\]\((.+)\)/u, `<a href="$2">$1</a>`);
	},
	hr(text) {
		return text.replace(/-{3,}/u, "<hr />");
	},
	reset(text, context) {
		if (text.match(/^\s*$/) == null) {
			return text;
		}
		context.tags.forEach((tag) => {
			text = `${text}</${tag}>`;
		});
		return text;
	},
};

export function markdownToHtml(input) {
	if (!input) {
		return "";
	}

	const parsed = [];
	const lines = input.trim().split("\n");

	const getIndentSize = (text) => {
		const firstOfNotBlank = text.replace(/\t/, "  ").search(/\S/);
		return parseInt(text.substring(0, firstOfNotBlank).length / 2);
	};

	const context = {
		indent: 0,
		tags: [],
		get currentTag() {
			return this.tags[this.tags.length - 1];
		},
		peekTag(i) {
			return this.tags[this.tags.length - 1 - i];
		},
	};

	while (lines.length) {
		context.indent = getIndentSize(lines[0]);
		let line = lines.shift().trim();
		for (const replace of Object.values(replacers)) {
			line = replace(line, context);
		}
		parsed.push(line);
	}
	return parsed.join("\n");
}

export function setTitle(title) {
	return (window.document.title = !title ? 'TheLow' : title + ' - ' + 'TheLow');
}

export function getMarkdownMeta(md) {
	const meta = {};
	if (!md.startsWith('---\n')) {
		return meta;
	}

	const lines = md.split('\n');
	for (let i = 0; i < lines.length; i++) {
		if (lines[i] === '---') {
			break;
		}

		const entry = lines[i].split(':', 1);
		if (entry.length == 2) {
			meta[entry[0]] = entry[1];
		}
	}

	return meta;
}

export function getMarkdownTitle(md) {
	const meta = getMarkdownMeta(md);

	if (meta.title) {
		return meta.title;
	}

	const lines = md.split('\n');
	for (let i = 0; i < lines.length; i++) {
		if (lines[0].startsWith('# ')) {
			return lines[0].substring(2);
		}
	}

	return '';
}

export async function fetchServerInformation() {
	const lastFetched = parseInt(localStorage.getItem('last-fetch'));
	const serverInfo = localStorage.getItem('server-info');

	//最新のフェッチから1分以内
	if (serverInfo !== undefined && Date.now() - lastFetched < 60000) {
		console.info('[The Low] Found server information');
		return;
	}

	const request = new Request('https://mcapi.us/server/status?ip=mc.eximradar.jp', {
		mode: 'cors'
	});
	return fetch(request)
		.then((response) => response.json())
		.then((json) => {
			delete json.favicon;
			localStorage.setItem('last-fetch', Date.now());
			localStorage.setItem('server-info', JSON.stringify(json));
			console.info('[The Low] fetch server information.');
		});
}

// https://stackoverflow.com/a/61511955
function waitForElement(selector) {
	return new Promise(resolve => {
		if (document.querySelector(selector)) {
			resolve(document.querySelectorAll(selector));
		}

		const observer = new MutationObserver(_mutations => {
			if (document.querySelector(selector)) {
				resolve(document.querySelectorAll(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	});
}

waitForElement('.jwplayer .jw-state-playing').then(elements => {
	for (const video of elements) {
		video.focus();
		video.dispatchEvent(new KeyboardEvent('keydown', {code: "Space", keyCode: 32, which: 32}));
		console.log('Pinkbike Video paused');
	}
});

Hooks.on('init', () => {
	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'dungeonworld-ko',
			lang: 'ko',
			dir: 'compendium'
		});
	}
});

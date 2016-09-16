(function() {
	Macy.init({
		container: '#macy-container',
		waitForImages: false,
		columns: 2,
		margin: 30,
	});

	videojs(document.getElementsByClassName('grid-post-video')[0], {
		"controls": true,
		"autoplay": false,
		"controlBar": {
			"VolumeControl": false,
			"fullscreenToggle": false
		}
	}, function() {
		// You can grab an element by class if you'd like, just make sure
		// if it's an array that you pick one (here we chose the first)
	});

	
})();
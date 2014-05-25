(function() {
	'use strict';

	define([
		'marionette',
		'routers/appRouter',
		'controllers/appController'
	],
	function( Marionette, AppRouter, AppController) {
		var App = new Marionette.Application();

		App.addRegions({
			side: '#side',
			tweet: '#tweet'
		});

		// 初期化
		App.addInitializer(function() {
			// route設定
			App.appRouter = new AppRouter({
				controller: new AppController({
					sideRegion: this.side,
					tweetRegion: this.tweet
				})
			});
			Backbone.history.start({pushState: false});
		});

		return App;
	});
})();
(function() {
	'use strict';

	define([
		'marionette',
		'routers/appRouter',
		'controllers/appController'
	],
	function( Marionette, AppRouter, AppController, NavigationCompositeView) {
		var App = new Marionette.Application();

		App.addRegions({
		});

		// 初期化
		App.addInitializer(function() {
			// route設定
			// App.appRouter = new AppRouter({});
			Backbone.history.start({pushState: false});
		});

		return App;
	});
})();
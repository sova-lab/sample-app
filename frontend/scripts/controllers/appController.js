(function() {
	'use strict';

	define([
		'marionette',
		'views/items/sideItemView'
	],
	function( Marionette, SideItemView ) {

		return Marionette.Controller.extend({

			initialize: function( options ) {
				this.sizeRegion = options.sideRegion;
				this.tweetRegion = options.tweetRegion;
			},

			index: function() {
				this.sizeRegion.show(new SideItemView());
			}
		});
	});
})();

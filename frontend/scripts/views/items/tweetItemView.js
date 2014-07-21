(function() {
	'use strict';

	define([
		'marionette',
		'templates'
	],
	function( Marionette, JST ) {

		return Marionette.ItemView.extend({
			initialize: function() {
			},

			attributes: function() {
			},

			template: JST['tweet/item']
		});
	});
})();
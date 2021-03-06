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

			ui: {
				tweetBtn: '#tweetBtn',
				tweetText: '#tweetText'
			},

			events: {
				'click @ui.tweetBtn': 'doTweet'
			},

			template: JST['side/side'],

			doTweet: function() {
				document.href = '#hoge';
			}
		});
	});
})();
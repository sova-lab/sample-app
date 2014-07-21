(function() {
	'use strict';

	define([
		'marionette',
		'views/items/tweetItemView',
		'templates'
	],
	function( Marionette, TweetItemView, JST ) {

		return Marionette.CompositeView.extend({
			initialize: function() {
				// var collection = new Backbone.Collection({url: '/hoge'});
				// collection.fetch();
			},

			attributes: function() {
			},

			template: JST['tweet/container'],
			itemView: TweetItemView,
			itemViewContainer: '#tweetList',

			ui: {
			},

			events: {
			}
		});
	});
})();
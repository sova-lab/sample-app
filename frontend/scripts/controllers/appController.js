(function() {
	'use strict';

	define([
		'marionette',
		'views/items/sideItemView',
		'views/composites/tweetCompositeView',
		'models/tweet'
	],
	function( Marionette, SideItemView, TweetCompositeView, Tweet ) {

		return Marionette.Controller.extend({

			initialize: function( options ) {
				this.sizeRegion = options.sideRegion;
				this.tweetRegion = options.tweetRegion;
			},

			index: function() {
				this.sizeRegion.show(new SideItemView());

				var tweet = new Tweet();
				tweet.set('tweet', 'テストツイート！');

				var tweetCollection = new Backbone.Collection([
					tweet, tweet.clone()
				]);

				this.tweetRegion.show(new TweetCompositeView({
					collection: tweetCollection
				}));
			}
		});
	});
})();

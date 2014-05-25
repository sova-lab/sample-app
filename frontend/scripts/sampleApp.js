(function() {
  "use strict";

  // グローバル設定
  window.Sova = {
    baseUrl: 'http://localhost:3000',
    App: null
  };

  require.config({
    // 読み込みのベースUrlを設定する。
    baseUrl: "scripts",

    // JavaScriptライブラリーのパス設定
    paths: {
      "jquery": "lib/jquery.min",
      "underscore": "lib/lodash.min",
      "handlebars": "lib/handlebars.min",
      "backbone": "lib/backbone",
      "backbone.stickit": "lib/backbone.stickit",
      "backbone.wreqr" : "lib/backbone.wreqr.min",
      "backbone.babysitter" : "lib/backbone.babysitter.min",
      "marionette": "lib/backbone.marionette",
      "bootstrap": "lib/bootstrap.min"
    },

    // shimオプションの設定。モジュール間の依存関係を定義。
    shim: {
      "underscore": {
        exports: "_"
      },
      "handlebars": {
        exports: "Handlebars"
      },
      "backbone": {
        deps: ["jquery", "underscore"],
        exports: 'Backbone'
      },
      "marionette": ['backbone.stickit'],
      "bootstrap": ["jquery"]
    }
  });

  require(['application', 'bootstrap'], function(App) {
    App.start();
    window.Sova.App = App;
  });

})();
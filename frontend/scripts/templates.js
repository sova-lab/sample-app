define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["side/side"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form role=\"form\">\n	<div class=\"form-group tweet-btn\">\n		<button type=\"button\" id=\"tweetBtn\" class=\"btn btn-primary btn-lg\">Tweet</button>\n	</div>\n	<div class=\"form-group\">\n		<textarea name=\"tweetText\" id=\"tweetText\" class=\"form-control\" placeholder=\"ツイート内容を入力してね！\"></textarea>\n	</div>\n</form>";
  });

this["JST"]["tweet/container"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>あなたのツイート一覧</h1>\n<section id=\"tweetList\"></section>";
  });

this["JST"]["tweet/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert alert-info\">\n	"
    + escapeExpression(((stack1 = (depth0 && depth0.tweet)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n	<button class=\"btn btn-default btn-xs\">編集</button>\n	<button class=\"btn btn-danger btn-xs\">削除</button>\n</div>";
  return buffer;
  });

return this["JST"];

});
var request = require('request'),
    htmlDec = require('htmldec'),
    cheerio = require('cheerio');

module.exports = function(callback){
  function processTweets (e, r, b){
    var tweets = [];
    cheerio.load(b)('p.tweet-text').each(function(i, e){
      if (e.children && e.children[0] && e.children[0].data) {
        tweets.push(htmlDec(e.children[0].data));
      }
    });
    callback(tweets);
  }
  request('https://twitter.com/JavaScriptizzle', processTweets);
};

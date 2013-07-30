var request = require('request'),
    htmlDec = require('htmldec'),
    cheerio = require('cheerio');

module.exports = function(callback){
  function processTweets (e, r, b){
    var tweets = [];
    cheerio.load(b)('p.tweet-text').each(function(i, e){
      if (e.children) {
        var tweet = [];
        e.children.forEach(function (child) {
          if (child.type === 'text') {
            tweet.push(child.data);
          } else if (child.type === 'tag' && child.name === 'a' && child.children) {
            var link = [];
            child.children.forEach(function(c){
              if (c.children) {
                c.children.forEach(function(cc){
                  if (cc.data) {
                    link.push(cc.data);
                  }
                });
              }
            });
            tweet.push(link.join(''));
          }
        });
        tweets.push(htmlDec(tweet.join(' ')));
      }
    });
    callback(tweets);
  }
  request('https://twitter.com/JavaScriptizzle', processTweets);
};

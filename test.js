var spawn = require('child_process').spawn,
    api = require('./'),
    should = require('should');

describe('jsizzle', function(){
  describe('API', function(){
    it('should return a tweet list', function(done){
      api(function(tweets){
        tweets.should.be.an.instanceOf(Array);
        done();
      });
    });
  });
});

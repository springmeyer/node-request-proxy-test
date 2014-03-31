var assert = require('assert')
  , request = require('request')
  , url = require('url')
  ;

var port = 6768
  , download = 'http://mapbox-geodata.s3.amazonaws.com/natural-earth-1.4.0/cultural/10m-populated-places-simple.zip'
  , proxiedHost = url.parse(download).host
  ;

request({
  url: download,
  proxy: process.env.HTTP_PROXY || 'http://localhost:'+port
}, function (err, res, body) {
  if (err) throw err;
  assert.equal(res.statusCode,200);
  assert.equal(body.length,703934);
  assert.equal(res.headers['content-length'],'733279')
  console.log('test passed successfully!')
})

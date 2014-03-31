var assert = require('assert')
  , request = require('request')
  , url = require('url')
  , http = require('http')
  ;

var port = 6768
  , download = 'http://mapbox-geodata.s3.amazonaws.com/natural-earth-1.4.0/cultural/10m-populated-places-simple.zip'
  ;

var s = http.createServer(function(req, res) {
  request(req.url).pipe(res);
}).listen(port);
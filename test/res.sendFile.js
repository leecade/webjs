var web = require('../');
var Tester = require('./require/test');
var assert = require("assert");

describe('res.sendFile', function () {
  it('should return some data in the request url', function () {
    var app = web.create();
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/static/plain.txt');
    });

    var test = new Tester(app);
    test.get('http://127.0.0.1/', function (msg) {
      assert.equal('foobar', msg);
    });
  });
});
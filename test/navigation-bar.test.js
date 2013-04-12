'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.navigationbar = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  stylus: function(test) {
    test.expect(1);

    var actual = grunt.file.read('release/css/navigation-bar.css');
    var expected = grunt.file.read('test/expected/navigation-bar.css');
    test.equal(actual, expected, 'should generate correct css');

    test.done();
  }
};

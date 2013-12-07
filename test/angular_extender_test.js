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

exports.angular_extender = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  
  single_dest: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/single_dest/test1.js');
    var expected = grunt.file.read('test/expected/set1/test1.js');
    test.equal(actual, expected, 'Extend single source file');

    test.done();
  },

  whole_dir: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/whole_dir/test1.js');
    var expected = grunt.file.read('test/expected/set1/test1.js');
    test.equal(actual, expected, 'Extend all files in a dir (with copy)');

    test.done();
  },
  
  in_place_extend: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/in_place_extend/test1.js');
    var expected = grunt.file.read('test/expected/set1/test1.js');
    test.equal(actual, expected, 'Extend all files in a dir (with copy)');

    test.done();
  }
};

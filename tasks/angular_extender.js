/*
 * grunt-angular-extender
 * https://github.com/mariocasciaro/grunt-angular-extender
 *
 * Copyright (c) 2013 Mario Casciaro
 * Licensed under the MIT license.
 */

'use strict';

var angularExtender = require('angular-extender'),
  path = require('path'),
  fs = require('fs');

module.exports = function(grunt) {
  grunt.registerMultiTask('angular_extender', 
    'Extend AngularJS applications by injecting module dependencies at build time', function() {
      // Merge task-specific and/or target-specific options with these defaults.
      var options = this.options({
        modules: {}
      });
  
      // Iterate over all specified file groups.
      this.files.forEach(function(filePair) {
        var isExpandedPair = filePair.orig.expand || false;
        var dest;
        
        filePair.src.forEach(function(src) {
          if (detectDestType(filePair.dest) === 'directory') {
            dest = (isExpandedPair) ? filePair.dest : unixifyPath(path.join(filePair.dest, src));
          } else {
            dest = filePair.dest;
          }

          var transformed = angularExtender(grunt.file.read(src), options.modules);
          
          if(dest) {
            if(transformed.changed) {
              grunt.verbose.writeln('Transformed ' + src.cyan + ' -> ' + dest.cyan);
              grunt.file.write(dest, transformed.out);
            } else {
              grunt.file.copy(src, dest);
              grunt.verbose.writeln('Copied ' + src.cyan + ' -> ' + dest.cyan);
            }
            
            if(options.mode !== false) {
              fs.chmodSync(dest, fs.lstatSync(src).mode);
            }
          } else {
            //override source
            grunt.verbose.writeln('Transformed ' + src.cyan);
            grunt.file.write(src, transformed.out);
          }
        });
      });

      function detectDestType(dest) {
        if (grunt.util._.endsWith(dest, '/')) {
          return 'directory';
        } else {
          return 'file';
        }
      }
      
      function unixifyPath(filepath) {
        if (process.platform === 'win32') {
          return filepath.replace(/\\/g, '/');
        } else {
          return filepath;
        }
      }
    }
  );
};

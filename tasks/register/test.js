module.exports = function(grunt) {
  grunt.registerTask('test', [
    'mocha_istanbul:coverage'
  ]);
};/**
 * Created by Aleksandr on 10.12.2016.
 */

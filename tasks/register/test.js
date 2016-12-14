module.exports = function(grunt) {
  grunt.registerTask('test', [
    'mochaTest',
    'mocha_istanbul:coverage'
  ]);
};/**
 * Created by Aleksandr on 10.12.2016.
 */

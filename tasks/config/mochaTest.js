/**
 * Created by Aleksandr on 13.12.2016.
 */
module.exports = function(grunt) {

  grunt.config.set('mochaTest', {
    test: {
      options: {
        reporter: 'spec'
      },
      src: ['test/**/*.spec.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
};

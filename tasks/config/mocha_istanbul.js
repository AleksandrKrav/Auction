/**
 * Created by Aleksandr on 10.12.2016.
 */
module.exports = function(grunt) {

  grunt.config.set('mocha_istanbul', {
      coverage: {
        src: 'test', // the folder, not the files
        options: {
          coverageFolder: 'coverage',
          mask: '**/*.spec.js',
          root: 'api/'
        }
      }
  });

  grunt.loadNpmTasks('grunt-mocha-istanbul');
};



module.exports = function(grunt) {

  grunt.config.set('jshint', {

      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: ['api/**/*.js', "assets/js/**/*.js", "!assets/js/dependencies/*.js"]
      }

  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
};

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.config('browserify', {
    options: {
      transform:  [ require('grunt-react').browserify ]
    },
    app: {
      src: ['views/**/*.jsx'],
      dest: 'public/templates/index.js'
    }
  });

  grunt.registerTask('build', ['browserify']);
};
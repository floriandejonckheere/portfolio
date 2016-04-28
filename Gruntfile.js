module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    sass: {
      options: {
        sourcemap: "auto",
        trace: true,
        style: "expanded",
        lineNumbers: false
      },
      dist: {
        files: {
          'dist/css/fonts.css': 'src/scss/fonts.scss',
          'dist/css/application.css': 'src/scss/application.scss',
          'dist/css/reset.css': 'src/scss/reset.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['src/scss/**/*.scss', 'src/html/**/*', 'src/files/**/*', 'src/js/**/*'],
        tasks: ['build']
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, flatten: true, src: 'src/robots.txt', dest: 'dist/' },
          { expand: true, cwd: 'src/files/', src: '**', dest: 'dist/files/' },
          { expand: true, cwd: 'src/js/', src: '**', dest: 'dist/js/' },
          { expand: true, cwd: 'src/html/', src: '**', dest: 'dist/' },
          { expand: true, cwd: 'bower_components/font-awesome/fonts/', src: '**', dest: 'dist/assets/fonts/' },

          { expand: true, cwd: 'bower_components/oswald-googlefont/', src: '*.ttf', dest: 'dist/assets/fonts/' },
          { expand: true, cwd: 'bower_components/source-sans-pro/fonts/source-sans-pro/', src: '*', dest: 'dist/assets/fonts/' },
          { expand: true, cwd: 'bower_components/lato/font/', src: '**', dest: 'dist/assets/fonts/' },

          { expand: true, flatten: true, src: 'bower_components/jquery/dist/jquery.min.js', dest: 'dist/assets/js/' },
          { expand: true, flatten: true, src: 'bower_components/angular/angular.min.js', dest: 'dist/assets/js' },
          { expand: true, flatten: true, src: 'bower_components/angular-route/angular-route.min.js', dest: 'dist/assets/js' },
          { expand: true, flatten: true, src: 'bower_components/angular-animate/angular-animate.min.js', dest: 'dist/assets/js' }
        ]
      }
    },
    environments: {
      production: {
        options: {
          host: 'thalarion.be',
          username: 'florian',
          agent: process.env.SSH_AUTH_SOCK,

          local_path: 'dist',
          deploy_path: '/srv/http/florian.dejonckhee.re/',
          releases_to_keep: 3
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-ssh-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['sass', 'copy']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('deploy_ftp', ['build', 'ftp-deploy:build']);
  grunt.registerTask('deploy_ssh', ['build', 'ssh_deploy:production']);
}

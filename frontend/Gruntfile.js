(function(){
  'use strict';

  module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev(['grunt-*']).forEach(grunt.loadNpmTasks);
    // show elapsed time at the end
    require('time-grunt')(grunt);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Compass
      compass: {
        dist: {
          options: {
            config: 'config.rb'
          }
        }
      },

      copy: {
        // bowerでインストールしたファイルのコピー
        bower: {
          files: [
            {
              expand: true,
              cwd: 'bower_components/backbone.wreqr/lib/',
              src:[ 'backbone.wreqr.min.js', 'backbone.wreqr.map' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/backbone.babysitter/lib/amd/',
              src:[ 'backbone.babysitter.min.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/marionette/lib/core/amd/',
              src:[ 'backbone.marionette.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/jquery/dist/',
              src:[ 'jquery.min.js', 'jquery.min.map' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/lodash/dist/',
              src:[ 'lodash.min.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/handlebars/',
              src:[ 'handlebars.min.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/jquery.validation/dist/',
              src:[ 'jquery.validate.min.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/bootstrap/dist/js/',
              src:[ 'bootstrap.min.js' ],
              dest: 'scripts/lib/'
            }
          ]
        }
      },

      // handlebars
      // hoge/fuga_tmpl.hbsというファイルをJST['hoge/fuga']()で取り出せるように定義
      handlebars: {
        compile: {
          options: {
            amd: true,
            processName: function(filepath) {
              return filepath.replace('templates/' , '').replace(/_tmpl.hbs$/ , '');
            },
            processPartialName: function(filepath) {
              var pieces = filepath.split('/');
              return pieces[pieces.length - 1].replace(/_tmpl.hbs$/ , '');
            }
          },
          files: {
            'scripts/templates.js': ['templates/**/*.hbs'],
          }
        }
      },

      // Watch
      watch: {
        // options
        options: {
          livereload: true,
          nospawn: true
        },
        // html
        html: {
          files: ['html/.*/*.html', 'index.html'],
          tasks: []
        },
        // scss
        sass: {
          files: 'scss/*.scss',
          tasks: ['compass', 'cmq', 'csscomb']
        },
        // JavaScript
        jslib: {
          files: ['scripts/**/*.js', 'test/spec/**/*.js', 'Gruntfile.js'],
          tasks: ['jshint', 'jasmine']
        },
        // Template
        templates: {
          files: ['templates/**/*.hbs'],
          tasks: ['handlebars', 'jasmine']
        }
      },
      // Live Reload
      connect: {
        livereload: {
          options: {
            port: 9001
          }
        }
      },
      // gruntコマンド実行時にページをブラウザで開く
      open: {
        server: {
          path: 'http://localhost:<%= connect.livereload.options.port %>'
        }
      }
    });

    // 初期設定タスク
    grunt.registerTask('init', ['copy:bower']);

    // gruntコマンドで実行するタスクの設定
    grunt.registerTask('default', ['connect','open:server','compass','watch']);
  };
})();

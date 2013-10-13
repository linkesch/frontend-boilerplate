module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['src/js/*.js', 'src/js/**/*.js', 'test/*.js', 'test/**/*.js'],
      options: {
        ignores: ['src/js/lib/modernizr-custom.js', 'src/js/templates/templates.js']
      }
    },
    requirejs: {
      compile: {
        options: {
          appDir: "src",
          baseUrl: "./js",
          dir: "build",
          optimizeCss: "none", // standard
          fileExclusionRegExp: /^\.|\.scss/,
          modules: [
            { name: "main" }
          ],
          paths: {
            'jquery': '../../bower_components/jquery/jquery.min',
            'underscore': '../../bower_components/underscore/underscore-min',
            'backbone': '../../bower_components/backbone/backbone-min',
            'localstorage': '../../bower_components/backbone.localstorage/backbone.localStorage-min',
            'handlebars': '../../bower_components/handlebars.js/dist/handlebars',
            'modernizr': 'lib/modernizr-custom'
          },
          shim: {
            'backbone': {
              deps: ['underscore', 'jquery'],
              exports: 'Backbone'
            },
            'underscore': {
              exports: '_'
            },
            'handlebars': {
              exports: 'Handlebars'
            },
            'modernizr': {
              exports: 'Modernizr'
            }    
          }
        }
      }
    },
    qunit: {
      unit: 'test.html'
    },
    modernizr: {
      // [REQUIRED] Path to the build you're using for development.
      "devFile" : "bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js",
  
      // [REQUIRED] Path to save out the built file.
      "outputFile" : "src/js/lib/modernizr-custom.js",
  
      // Based on default settings on http://modernizr.com/download/
      "extra" : {
          "shiv" : true,
          "printshiv" : false,
          "load" : true,
          "mq" : false,
          "cssclasses" : true
      },
  
      // Based on default settings on http://modernizr.com/download/
      "extensibility" : {
          "addtest" : false,
          "prefixed" : false,
          "teststyles" : false,
          "testprops" : false,
          "testallprops" : false,
          "hasevents" : false,
          "prefixes" : false,
          "domprefixes" : false
      },
  
      // By default, source is uglified before saving
      "uglify" : true,
  
      // Define any tests you want to implicitly include.
      "tests" : [],
  
      // By default, this task will crawl your project for references to Modernizr tests.
      // Set to false to disable.
      "parseFiles" : true,
  
      // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
      // You can override this by defining a "files" array below.
      "files" : ["src/js/*.js", "src/css/*.css", "src/sass/*.scss"],
  
      // When parseFiles = true, matchCommunityTests = true will attempt to
      // match user-contributed tests.
      "matchCommunityTests" : false,
  
      // Have custom Modernizr tests? Add paths to their location here.
      "customTests" : []
    },
    compass: {                 
      dist: {                   
        options: {              
          sassDir: 'src/sass',
          cssDir: 'src/css',
          environment: 'production',
          outputStyle: 'compressed'
        }
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "JST",
          amd: true,
          wrapped: false
        },
        files: {
          "src/js/templates/templates.js": "src/js/templates/*/*.hbs"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks("grunt-modernizr");
  
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'modernizr', 'compass', 'requirejs']);
  
};
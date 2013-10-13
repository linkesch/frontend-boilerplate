require.config({
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
});

require([
  'app',
], function(App){
  App.initialize();
});
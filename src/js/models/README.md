Folder for models
=================

This is a folder for Backbone Models, that might look like this:

```javascript
define([
  'jquery',     
  'underscore', 
  'backbone'
], function($, _, Backbone){
  var DefaultModel = Backbone.Model.extend({

  });
  
  return DefaultModel;
});
```
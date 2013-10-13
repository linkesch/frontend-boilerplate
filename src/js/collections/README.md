Folder for collections
======================

This is a folder for Backbone Collections, that might look like this:

```javascript
define([
  'jquery',     
  'underscore', 
  'backbone'
], function($, _, Backbone){
  var DefaultCollection = Backbone.Collection.extend({

  });
  
  return DefaultCollection;
});
```
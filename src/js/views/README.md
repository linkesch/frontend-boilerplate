Folder for views
===============

This is a folder for Backbone Views, that might look like this:

```javascript
define([
  'jquery',     
  'underscore', 
  'backbone',
  'handlebars',
  'templates/templates'  
], function($, _, Backbone, Handlebars, Templates){
  var DefaultView = Backbone.View.extend({
    render: function () {
      var template = Handlebars.template(Templates['src/js/templates/template.hbs']);
      this.$el.html(template(this.model.toJSON()));
      return this;
    }
  });
  
  return DefaultView;
});
```

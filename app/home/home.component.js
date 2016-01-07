;(function () {
  'use strict'

  var HomeComponent = ng.core
  .Component({
    template: '<h1>Welcome Home!</h1>',
    selector: 'the-app'
  })
  .Class({
    constructor: function () {}
  })
  window.app.HomeComponent = HomeComponent
}());

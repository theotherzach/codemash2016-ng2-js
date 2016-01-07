;(function () {
  'use strict'

  var app = window.app

  app.HelloGoodbyeComponent = ng.core
  .Component({
    templateUrl: '/app/hello-goodbye/hello-goodbye.html'
  })
  .Class({
    constructor: function () {
      this.message = 'Hi there, world.'

      this.actuallyGoodbye = function () {
        this.message = 'Bye bye, world.'
      }
    }
  })
}());


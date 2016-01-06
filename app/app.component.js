;(function () {
  'use strict'

  window.app = {}

  app.AppComponent = ng.core.
    Component({
      selector: 'the-app',
      templateUrl: '/app/app.html'
    }).
    Class({
      constructor: function () {
        this.message = 'Hi there, world.'

        this.actuallyGoodbye = function () {
          this.message = 'Bye bye, world.'
        }
      }
    })
}());

;(function () {
  'use strict'

  var AppComponent = ng.core
  .Component({
    selector: 'the-app',
    templateUrl: '/app/app.html',
    directives: [
      ng.router.ROUTER_DIRECTIVES
    ]
  })
  .Class({
    constructor: function () {}
  })

  var decorateWithRouteConfig = ng.router.RouteConfig([{
    path: '/',
    component: app.HomeComponent,
    as: 'Home'
  }, {
    path: '/sortable-grid-example',
    component: app.SortableGridExampleComponent,
    as: 'SortableGridExample'
  }, {
    path: '/hello-goodbye',
    component: app.HelloGoodbyeComponent,
    as: 'HelloGoodbye'
  }])

  AppComponent = decorateWithRouteConfig(AppComponent)
  window.app.AppComponent = AppComponent
}());

;(function () {
  'use strict'

  document.addEventListener('DOMContentLoaded', function () {
    ng.platform.browser.bootstrap(app.AppComponent, [
      ng.router.ROUTER_PROVIDERS,
      ng.core.bind(ng.router.LocationStrategy).toClass(ng.router.HashLocationStrategy),
      ng.http.HTTP_PROVIDERS
    ])
  })
}());

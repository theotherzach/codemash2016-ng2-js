;(function () {
  'use strict'

  var SortableGridExampleComponent = ng.core
  .Component({
    templateUrl: '/app/sortable-grid-example/sortable-grid-example.html',
    viewProviders: [app.CountriesService]
  })
  .Class({
    constructor: [app.CountriesService, function (countriesService) {
      var self = this

      self.setSort = function(header) {
        self.sortBy = header
      }

      self.sortedCountries = function(list, key) {
        if (!list) { return }

        if (!key) { return list }

        return list.sort(function(a, b) {
          if (a[key] > b[key]) {
            return -1
          }

          if (a[key] < b[key]) {
            return 1
          }

          return 0
        })
      }

      countriesService.fetchAll()
      .subscribe(function(countries) {
        self.countries = countries
      })
    }]
  })

  window.app.SortableGridExampleComponent = SortableGridExampleComponent
}());

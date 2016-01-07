;(function () {
  'use strict'

  var CountriesService = ng.core
  .Class({
    constructor: [ng.http.Http, function (http) {
      this.fetchAll = function () {
        var url = 'https://restcountries.eu/rest/v1/all'
        return http.request(url, {
          method: 'GET'
        })
        .map(function (res) {
          return JSON.parse(res._body)
        })
      }
    }]
  })

  window.app.CountriesService = CountriesService
}());

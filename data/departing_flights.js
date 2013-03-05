'use strict';

define(

  [
    '../components/flight/lib/component',
    '../components/mustache/mustache',
    '../data',
    '../views/templates'
  ],

  function(defineComponent, Mustache, dataStore, templates) {
    return defineComponent(flights);

    function flights() {

      this.serveFlightItems = function(event, data) {
        this.trigger("dataFlightsServed", {markup: this.render(this.getFlights)})
      };

      this.getFlights = function(folder) {
        return dataStore.flights;
      };

      this.render = function(flightRows) {
        return Mustache.render(templates.flightRow, {flightRows: flightRows});
      };

      this.after("initialize", function() {
        this.on("flightsRequested", this.serveFlightItems);
        //this.on("flightsUpdated", this.update);
      });
    }
  }
);

'use strict';

define(
  [
    'data/departing_flights',
    'ui/departing_flights'
  ],

  function(DepartingFlightsData, DepartingFlightsUI) {

    function initialize() {
      DepartingFlightsData.attachTo(document);
      DepartingFlightsUI.attachTo('#flights');
    }

    return initialize;
  }
);

'use strict';

define(
  [
    'components/flight/lib/component'
  ],

  function(defineComponent)  {

    return defineComponent(DepartingFlights);

    function DepartingFlights() {

      this.renderFlights = function(event, data) {
        console.log("render flights!", event, data)
        this.$node.html(data.markup)
        this.trigger("flightsRendered")
      }

      this.bookFlight = function(){
        console.log("flight booked!")
      }

      // now initialize the component
      this.after('initialize', function() {
        this.on(document, 'dataFlightsServed', this.renderFlights);
        //this.on(this.bookFlightSelector, 'click', this.bookFlight)
        this.trigger(document, 'flightsRequested')
      });
    }
  }
);
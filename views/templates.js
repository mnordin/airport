'use strict';

define(
  function() {
    var flightRow =
      '{{#flightRows}}\
        <tr id="{{id}}">\
          <td>{{flight_number}}</td>\
          <td>\
            {{departing_time}}\
            {{#delayed}}\
              <span class="label label-important">Delayed</span>\
            {{/delayed}}\
            </td>\
          <td>book it!</td>\
        </tr>\
      {{/flightRows}}';

    return {
      flightRow: flightRow
    }
  }

);

var SHEET_EVENT_MAPPINGS = "Event Mappings";

var EventMappings = (function() {
  // Public members
  var eventMappings = {};
  eventMappings = getEventMappings();
  return eventMappings;

  // Gets config values from spreadsheet
  function getEventMappings() {
    var sheeter = new Sheeter(SHEET_EVENT_MAPPINGS);
    var values = sheeter.getValues(2);
    var cfg = [];
    values.forEach(function(value) {
      cfg[value[0]] = value[1];
    });
    return cfg;
  }
})()

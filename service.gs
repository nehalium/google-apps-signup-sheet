function onFormSubmit(e) {
  let email = getEmail(e);
  Logger.log(email);
  let timeslot = getTimeslot(e);
  Logger.log(timeslot);
  let event = getEventByTimeslot(timeslot);
  if (Config["debug"]) {
    event.addGuest(Config["debug.email"]);
  }
  else {
    event.addGuest(email);
  }
}

function getEmail(e) {
  return e.namedValues["Email Address"];
}

function getTimeslot(e) {
  return e.namedValues["Timeslot"];
}

function getEventByTimeslot(timeslot) {
  let eventId = EventMappings[timeslot];
  return getEvent(eventId);
}

function getEvent(eventId) {
  let calendar =  CalendarApp.getCalendarById(Config["calendar.id"]);
  return calendar.getEventById(eventId);
}

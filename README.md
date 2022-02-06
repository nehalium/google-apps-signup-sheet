# Google Apps script for sign up sheet for events that automatically adds attendees to a calendar event

## Installation

1. Create Google Form with a Multiple Choice question named "Timeslot" with text values of each event time available
1. Create a Google Sheet by going to the Responses tab and clicking the "View Responses in Sheets" icon
1. Create second tab and name it "Config"
1. Use the first column as your config keys and the second column for config values. Add calendar.id, debug, and debug.email and their respective values.
1. Create third tab and name it "Event Mappings"
1. Use the first column for the "Timeslot" text values and the second column for the corresponding event id (the event id can be found by taking the eventid from the URL of the calendar event, base64 decoding it, and taking the value before the underscore)

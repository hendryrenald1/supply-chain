/**
 * Employee model events
 */

'use strict';

import {EventEmitter} from 'events';
var EmployeeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EmployeeEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Employee) {
  for(var e in events) {
    let event = events[e];
    Employee.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    EmployeeEvents.emit(event + ':' + doc._id, doc);
    EmployeeEvents.emit(event, doc);
  };
}

export {registerEvents};
export default EmployeeEvents;

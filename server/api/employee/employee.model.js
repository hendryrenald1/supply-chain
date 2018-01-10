'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './employee.events';

var EmployeeSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(EmployeeSchema);
export default mongoose.model('Employee', EmployeeSchema);

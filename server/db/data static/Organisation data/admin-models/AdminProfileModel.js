const mongoose = require("mongoose");

// make changes as task access are repeated and add other important details
// like working attendence // delivery successful // dishes prepared // support call taken etc.

// business process. - operations / business developement / zonal mgmt / admin controls

// profit center operations process control area - pc , delivery , support , orders
// zonal operations process control area - delivery, support , orders , finance , hr
// business developers control area - feedbacks , marketing , events, R&D
// admin management control area - application maintainence

// Admin Profile Schema

const AdminProfileSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    WorkProfile: {
      DOJ: { type: Date },
      Profile: { type: String },
      AllottedMentor: { type: String, required: true },
      Designation: { type: String, required: true },
    },
    AdminProcess: {
      OperationsProcess: {
        Access: { type: Boolean },
        ProcessID: { type: String },
      },
      BusinessDevelopementProcess: {
        Access: { type: Boolean },
        ProcessID: { type: String },
      },
      ZonalProcess: {
        Access: { type: Boolean },
        ProcessID: { type: String },
      },
      AdminManagementProcess: {
        Access: { type: Boolean },
        ProcessID: { type: String },
      },
    },
  });
  
  module.exports = mongoose.model("admin.profiles", AdminProfileSchema);
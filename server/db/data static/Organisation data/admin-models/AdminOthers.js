const mongoose = require("mongoose");

// profit center operations process control area - pc , delivery , support , orders
// zonal operations process control area - delivery, support , orders , finance , hr
// business developers control area - feedbacks , marketing , events, R&D
// admin management control area - application maintainence

// busiess developement process

const BusinessDeveloperProcessSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    ProcessID: { type: String },
    BusinessDevelopementProcess: {
      FeedbackManagement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
      EventManagement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
      MarketingManagement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
      ResearchandDevelopement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
    },
  });
  
  module.exports = mongoose.model(
    "admin.businessdevelopers",
    BusinessDeveloperProcessSchema
  );
  
  // zonal management process
  
  const ZonalOperationsProcessSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    ProcessID: { type: String },
    ZonalOperationsProcess: {
      OrderManagement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
      DeliveryManagement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
      SupportManagement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
      FinanceManagement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
      HRManagement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
    },
  });
  
  module.exports = mongoose.model(
    "admin.zonaloperations",
    ZonalOperationsProcessSchema
  );
  
  // admin control process
  
  const AdminControlProcessSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    ProcessID: { type: String },
    AdminControlsProcess: {
      AdminFunctions: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
      EmployeeFunctions: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
    },
  });
  
  module.exports = mongoose.model(
    "admin.admincontrols",
    AdminControlProcessSchema
  );
  
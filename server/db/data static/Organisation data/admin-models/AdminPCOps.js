const mongoose = require("mongoose");

// profit center operations process control area - pc , delivery , support , orders

// pc operations process

const PCOperationProcessSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    ProcessID: { type: String },
    ProfitCenterOperationsProcess: {
      ConfigurationManagement: {
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
      OrderManagement: {
        Access: { type: Boolean },
        TaskID: { type: String },
      },
    },
  });
  
  module.exports = mongoose.model("admin.pcoperations", PCOperationProcessSchema);
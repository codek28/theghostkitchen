const mongoose = require("mongoose");

// Admin Schema

const AdminSchema = new mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    DOB: { type: Date },
    PersonalEmail: { type: String },
    PersonalContactNo: { type: Number, required: true, unique: true },
    WorkIdentity: {
      WorkContactNo: { type: Number, unique: true },
      WorkEmail: { type: String },
      WorkPassword: { type: String }, // Use hashing to secure
    },
    WorkLocation: {
      OfficeID: { type: String, required: true },
      RemoteWorking: { type: Boolean },
      WorkZone: [String],
      WorkZonalArea: [String],
      WorkProfitCenter: [String],
    },
    Documents: {
      AADHAR: {},
      PAN: {},
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("admins", AdminSchema);

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

// operations process

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

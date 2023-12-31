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




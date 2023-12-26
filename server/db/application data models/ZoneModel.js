const mongoose = require("mongoose");

// Zone Schema

const ZoneSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true },
  Pincode: { type: [Number], required: true },
  Name: { type: String, required: true },
  State: { type: String, required: true },
  ZonalAreas: { type: [String], required: true },
  ZonalTeamID:{type: String},
  ProfitCenters: { type: [String], required: true },
  ZoneTagline: { type: String, required: true },
  ZoneDiscount: { type: String },
  ZoneEvents: {
    UpcomingEventID: [String],
    CurrentEventID: [String],
  },
  ZoneFoodCulture: { type: String },
  ZoneImages: {},
});

module.exports = mongoose.model("zones", ZoneSchema);

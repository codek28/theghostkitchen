const mongoose = require("mongoose");

//location Schema for profit center

const CenterGeoSchema = new mongoose.Schema({
  GeoID:{type: String},
  TaggedToProfitCenter: {
    CenterID: { type: String },
    CenterContact: { type: Number },
  },
  Address: {
    Line1Name: { type: String },
    Line2Street: { type: String },
    Line3Locality: { type: String },
  },
  Coordinates: {
    Latitude: { type: Number },
    Longitude: { type: Number },
  },
  Zone: {
    Zone: { type: String },
    ZonalArea: { type: String },
    Pincode: { type: Number },
  },
  Accuracy: { type: Number },
});

module.exports = mongoose.model("geo.centers", CenterGeoSchema);
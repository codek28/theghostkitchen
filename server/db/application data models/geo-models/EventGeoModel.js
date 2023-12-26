const mongoose = require("mongoose");

// location Schema for Event

const EventGeoSchema = new mongoose.Schema({
  GeoID:{type: String},
  EventID: { type: String },
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

module.exports = mongoose.model("geo.events", EventGeoSchema);
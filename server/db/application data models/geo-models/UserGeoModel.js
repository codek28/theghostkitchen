const mongoose = require("mongoose");

//location Schema for user

const UserGeoSchema = new mongoose.Schema({
  GeoID:{type: String},
  TaggedToUserID: {
    UserID: { type: String },
    ContactNo: { type: Number },
  },
  Label: { type: String },
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

module.exports = mongoose.model("geo.users", UserGeoSchema);
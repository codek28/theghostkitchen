const mongoose = require("mongoose");

// Order Type >>> Provider basis
// this will including providing options - delivery/serve/takeaway/event etc.
// Order Type >>> Payment basis
// this will include payment options - online/cod/subscription/loyalty-points etc.
// profit center plan type >>> (standard/golden/platinum/ghost)

// profit center schema

const ProfitCenterSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true },
  Name: { type: String, required: true },
  Tagline: { type: String },
  ProfitCenterDetails: {
    BusinessLine: { type: [String], required: true },
    MerchantID: { type: String, required: true },
    MembershipID: { type: String, required: true },
    Plan: { type: String, required: true },
  },
  Address: { type: String },
  LocationDetails: {
    Zone: { type: String, required: true },
    ZonalArea: { type: String },
    GeolocationID: { type: String, required: true },
  },
  ServiceArea: {
    DeliveryZones: { type: [String] },
    DeliveryZonalAreas: { type: [String] },
    DeliveryDisturbanceAlert:{
      Status:{type:Boolean},
      AlertText:{type: String}
     }
  },
  OrderType: {
    ProviderBasis: { type: [String], required: true },
    PaymentBasis: { type: [String], required: true },
  },
  FoodDetails: {
    FoodType: { type: [String], required: true },
    ProfitCenterAccredition: { type: [String] },
  },
  CenterTimings: {
    OpeningTime: { type: Date },
    ClosingTime: { type: Date },
    CenterOpen: { type: Boolean },
  },
  AverageRating: { type: Number }, // By Last Business Month end
  Illustration: {},
});

module.exports = mongoose.model("profitcenters", ProfitCenterSchema);
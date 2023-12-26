const mongoose = require("mongoose");

// Brand Schema

const BrandSchema = new mongoose.Schema({
  BrandID: { type: String, required: true, unique: true },
  BrandName: { type: String, required: true },
  MerchantID: { type: String, required: true, unique: true },
  BusinessChart: {
    ProfitCenter: {
      Name: { type: String, required: true },
      ProfitCenterID: { type: String, required: true, unique: true },
      BusinessLine: { type: String, required: true },
      GeolocationID: { type: String },
    },
  },
  SellerList: {
    SignatureCategory: {
      CategoryName:{type: String},
      CategoryID:{type: String},
      Products:[String]
    }
  },
  BrandLogo: {},
});

module.exports = mongoose.model("Brand", BrandSchema);

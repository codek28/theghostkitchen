const mongoose = require("mongoose");

// Merchant Schema (Owner OF Profit center/centers)

const MerchantSchema = new mongoose.Schema({
  MerchantID: { type: String, required: true, unique: true },
  MerchantName: { type: String, required: true },
  MerchantPersonalEmailID: { type: String, required: true },
  MerchantContact: { type: Number, required: true },
  Memberships:[String],
  ProfitCenters: [String],
  AdminID: { type: String },
  PaymentID: { type: String }, // Payment Credentials, Use hashing to secure  
  MerchantStory: { type: String },
  MerchantJoiningDate: { type: Date },
});

module.exports = mongoose.model("merchants", MerchantSchema);

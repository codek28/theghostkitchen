const mongoose = require("mongoose");

//User Schema
// Mailer is for email promotions and email logger (email-logging to be added later)
// after filling city only then events will unlock
// Allergen keywords if matched with order, they will be warnedbefore ordering ( to-be-added-later )
// GhostPrime is the prime account subscription ( to-be-added-later )
// Wallet is for the wallet payment order feature merged with dob ( to-be-added-later )
// AccountStatus will mention active/blacklist/inactive(6-month)
// active, completed and cancelled subscription will be updated with subscription implementation ( to-be-added-later )

const userSchema = new mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    ContactNo: { type: Number, required: true, unique: true },
    Name: { type: String, required: true },
    DOB: { type: Date },
    City: { type: String },
    Mailer: {
      Email: { type: String },
      GhostPassword: { type: String }, // Use hashing to secure
      MarketingMail: { type: Boolean, default: true },
    },
    AllergenKeywords: [String],
    Profile: {
      GhostPrime: {
        Active: { type: Boolean, default: false },
        DateofExpiry: { type: Date },
        PlanDurationInMonths: { type: Number },
      },
      WalletMoney: { type: Number },
      LoyaltyPoints: { type: Number },
    },
    Orders: {
      ActiveOrders: [String],
      CancelledOrders: [String],
      CompletedOrders: [String],
      ActiveSubscription: [String],
      CancelledSubscription: [String],
      CompletedSubscription: [String],
    },
    SavedGeoLocations: [String],
    AccountStatus: { type: String, default: "ACTIVE" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

const mongoose = require("mongoose");

// profit center billing system

const ProfitCenterBillingSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true },
  DiscountandBenefits: {
    PriceCutDiscount: {
      MerchantToAll: { type: String },
      MerchantToMenu: [
        {
          MenuID: { type: String },
          DiscountID: { type: String },
        },
      ],
      MerchantToCategory: [
        {
          CategoryID: { type: String },
          DiscountID: { type: String },
        },
      ],
      MerchantToProduct: [
        {
          ProductID: { type: String },
          DiscountID: { type: String },
        },
      ],
    },
  },
  Rewards: {
    LoyaltyGeneration: { type: String },
    EventCheckInPoint: { type: String },
    FineDineCheckInPoint: { type: String }, // only applicable for Fine Dine
  },
  AdditionalCosts: {
    GiftCard: [String],
    PackagingCost: [String],
    AmbienceCost: { type: String },
    DonationChannel: [String],
  },
});

module.exports = mongoose.model(
  "profitcenter.billings",
  ProfitCenterBillingSchema
);

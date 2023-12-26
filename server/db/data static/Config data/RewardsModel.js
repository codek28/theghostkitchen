const mongoose = require("mongoose");

// Loyalty Point generated would be redeemable after a certain limit

// order Loyalty Point generation would have conversion rate
// Events check-in would add some loyalty points to user, 
// Fine dine check-in would add some loyalty points to user
// loyalty point redemption would be added to ghost wallet for any food purchase

// Order Loyalty Points generation Schema

const OrderLoyaltyGenerationSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Code: { type: String, required: true, unique: true },
  ConversionRate: { type: Number, required: true },
  Description: { type: String, required: true },
  Illustration: {},
});

module.exports = mongoose.model("reward.orderloyaltygenerationmodels", OrderLoyaltyGenerationSchema);

// Event Check in Points Schema

const EventCheckInPointsSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Code: { type: String, required: true, unique: true },
  PointTransfer: { type: Number, required: true },
  Description: { type: String, required: true },
  Illustration: {},
});

module.exports = mongoose.model("reward.eventcheckinpointmodels", EventCheckInPointsSchema);

// Fine-Dine Check in Points Schema

const FineDineCheckInPointsSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Code: { type: String, required: true, unique: true },
  PointTransfer: { type: Number, required: true },
  Description: { type: String, required: true },
  Illustration: {},
});

module.exports = mongoose.model(
  "reward.finedinecheckinpointmodels",
  FineDineCheckInPointsSchema
);

// Redemption Points Schema

const LoyaltyRedemptionSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Code: { type: String, required: true, unique: true },
  PointRedeem: { type: Number, required: true }, // Subtract From User
  RewardedWalletMoney: { type: Number, required: true }, // Add to User Wallet
  Description: { type: String, required: true },
  Illustration: {},
});

module.exports = mongoose.model("reward.loyaltyredemptionmodels", LoyaltyRedemptionSchema);

const mongoose = require("mongoose");

// profit center plan type - (standard/golden/platinum/ghost)
// A membership is a link between a single person who is owner of profit center and its single profit center
// Any merchant having multiple profit center will have membership id for each profit center
// Type - GhostAllottedMembership / BrandMembership / ProfitcenterMembership, etc. (check documentation and write correctly)
// Only one membership ID for one profit center

// Merchant General Membership Schema

const MembershipSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true },
  Name: { type: String, required: true },
  Type:{type: String},
  Plan:{type: String},
  DateOfJoin: { type: Date },
  MerchantID: { type: String, required: true, unique: true },
  ProfitCenterID: { type: String, required: true },
  FSSAIcertificate: {
    RegistrationID: { type: String, required: true, unique: true },
    ValidUpto: { type: Date },
  },
  Documents: {},
});

module.exports = mongoose.model("memberships", MembershipSchema);

const mongoose = require("mongoose");

// could also create script to calculate billing
// not completed yet

const GlobalConfigSchema = new mongoose.Schema(
  {
    TaxRate: { type: Number },
    DeliveryRatePerKM: { type: Number },
    DeliveryZoneRadiumKM: { type: Number },
    PlatformFeePerOrder: { type: Number },
    BillingComponents: {
      CartAmount: { type: Number },
      DeliveryCharge: { type: Number },
      PlatformFee: { type: Number },
      AdditionalCost: { type: Number },
      TaxCost: { type: Number },
      CartDiscountAmount: { type: Number },
      SuperDiscountAmount: { type: Number },
      TotalBill: { type: Number },
    },
    SafetyIncidentContact: { type: Number },
    CustomerCare: { type: Number },
    ApplicationVersion: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GlobalConfig", GlobalConfigSchema);

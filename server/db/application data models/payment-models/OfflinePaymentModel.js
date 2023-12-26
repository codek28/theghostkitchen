const mongoose = require("mongoose");

// Offline Order Schema
// Offline Order will have - additional charge , payment components and super discounts, platform fee.

const OfflinePaymentSchema = new mongoose.Schema(
  {
    PaymentID: { type: String }, // generated
    PaymentToken: { type: String, required: true, unique: true },
    OrderID: { type: String }, // generated
    PaymentComponents: {
      CartAmount: { type: Number },
      CartDiscount: { type: Number }, // admin coupon only for offline orders
      DeliveryCharge: { type: Number }, // admin can enter manually, must be within correct price range set by ghost kitchen
      PlatformFee: { type: Number }, // same as online ordering because PoS software part of platform
      TaxAmount: { type: Number }
    },
    PayableAmount: { type: Number },
    PaymentStatus: { type: String },
    PaymentUser: {
      Name: { type: String },
      Contact: { type: Number },
      ID: { type: String }
    },
    PaymentTo: { type: String } //PC ID
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Payment.OfflinePayments",
  OfflinePaymentSchema
);

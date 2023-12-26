const mongoose = require("mongoose");

// Purchase Order Schema
// As part of special request - profit center can ask for

const PurchaseOrderSchema = new mongoose.Schema(
    {
      PaymentID: { type: String, required: true, unique: true }, // generated
      PurchaseOrderID: { type: String },
      PayableAmount: { type: Number },
      PaymentStatus: { type: String },
      PaymentUser: { type: String }, // User ID
      PaymentTo: { type: String }, //Merchant ID
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("PurchaseOrder", PurchaseOrderSchema);
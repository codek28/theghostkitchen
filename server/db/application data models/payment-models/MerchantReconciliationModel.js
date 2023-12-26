const mongoose = require("mongoose");

// Merchant Reconiliation
// In payment management for finance team - creating and fulfilling payment/reconciliation order functionality would be provided
// Reconciliation request will be created after each period.

const MerchantReconciliationSchema = new mongoose.Schema(
    {
      PaymentID: { type: String, required: true, unique: true }, // generated
      ReconciliationType: { type: String, required: true }, // type could be - automated, manual(notified),
      ReconciliationPeriod: { type: Number, required: true }, // Number of working days, after which payment is processed.
      ExtensionPeriod: { type: Number }, // Number of working days, from first reconciliation creation date the payment is pending.
      PayableAmount: { type: Number },
      ReconciliationStatus: { type: String }, // It would be Provided/Pending/
      PaymentMerchantID: { type: String },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model(
    "MerchantReconciliation",
    MerchantReconciliationSchema
  );
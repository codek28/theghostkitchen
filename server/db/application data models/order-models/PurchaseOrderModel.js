const mongoose = require("mongoose");

// incomplete

const PurchaseOrderSchema = new mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    InternalSupportTicketID: { type: String, required: true }, // only Internal Support ticket creation would start purchase order initiation
    PaymentID: { type: String }, // if any
    RequestType: { type: String, required: true },
    RequestList: { type: String },
    RequestingMerchantID: { type: String },
    FulfillmentTime: {
      RequestPlaced: { type: Date },
      RequestConfirmed: { type: Date },
      RequestFulfilled: { type: Date },
    },
    MerchantApproval: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PurchaseOrder", PurchaseOrderSchema);
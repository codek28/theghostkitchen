const mongoose = require("mongoose");

// incomplete

// needs more work - wallet transfer

// Online Payment-
// Payment Components are as follows:-
// + Cart Amount (After Price-cut Discounts Applied)
// - Cart Coupon Discount
// + Delivery Amount
// + Platform Fee (Applicable to Online placed Order)
// + Additional Charge (Gift Card/ Donation channel/ Packaginging/ ambience charge)
// - Super Discount
// + Tax Amount
// Net Payable Charge

const OnlinePaymentSchema = new mongoose.Schema(
  {
    PaymentID: { type: String, required: true, unique: true }, // from razorpay
    OrderID: { type: String },
    PaymentComponents: {
      CartAmount: { type: Number },
      CartDiscount: { type: Number },
      DeliveryCharge: { type: Number },
      PlatformFee: { type: Number },
      AdditionalCharge: {
        GiftCard: { type: Number },
        DonationChannel: { type: Number },
        SpecialPacking: { type: Number },
        PriorityDelivery: { type: Number },
      },
      SuperDiscount: { type: Number },
      TaxAmount: { type: Number },
    },
    PayableAmount: { type: Number },
    PaymentStatus: { type: String },
    PaymentUser: { type: String }, // User ID
    PaymentTo: { type: String }, //Merchant ID
  },
  { timestamps: true }
);

module.exports = mongoose.model("OnlinePayment", OnlinePaymentSchema);

// Offline Order Schema
// Offline Order will have - additional charge , payment components and super discounts, platform fee.

const OfflinePaymentSchema = new mongoose.Schema(
  {
    PaymentID: { type: String, required: true, unique: true }, // generated
    OrderID: { type: String }, // generated
    PaymentComponents: {
      CartAmount: { type: Number },
      CartDiscount: { type: Number }, // admin coupon only for offline orders
      DeliveryCharge: { type: Number }, // admin can enter manually, must be within correct price range set by ghost kitchen
      PlatformFee: { type: Number }, // same as online ordering because PoS software part of platform
      TaxAmount: { type: Number },
    },
    PayableAmount: { type: Number },
    PaymentStatus: { type: String },
    PaymentUser: {
      Name: { type: String },
      Contact: { type: Number },
    }, // User ID
    PaymentTo: { type: String }, //Merchant ID
  },
  { timestamps: true }
);

module.exports = mongoose.model("OfflinePayment", OfflinePaymentSchema);

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

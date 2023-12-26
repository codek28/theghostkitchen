const mongoose = require("mongoose");

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

//required field to be added
const OnlinePaymentSchema = new mongoose.Schema(
  {
    PaymentID: { type: String }, // from razorpay, required true
    PaymentToken: { type: String, required: true, unique: true },
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
        PriorityDelivery: { type: Number }
      },
      SuperDiscount: { type: Number },
      TaxAmount: { type: Number }
    },
    PayableAmount: { type: Number },
    PaymentStatus: { type: String },
    PaymentUser: {
      Name: { type: String },
      Contact: { type: Number },
      ID: { type: String }
    }, // User ID
    PaymentTo: { type: String } //PC ID
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment.onlinepayments", OnlinePaymentSchema);

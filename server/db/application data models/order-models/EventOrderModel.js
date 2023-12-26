const mongoose = require("mongoose");

// Event Order Schema

const EventOrderSchema = new mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Contents: [String], // all products within a order
    EventID: { type: String },
    OrderDetails: {
      ETA: { type: Number }, // minutes for order delivery
      Preparation: {
        PreparationStatus: { type: String, required: true },
        PreparationAlert: { type: String }, // Order Delay
      },
    },
    OrderPayment: {
      PaymentAmount: { type: Number },
      PaymentMode: { type: String }, // Could be Razorpay/QR/Cash/etc.
      PaymentStatus: { type: String }, // Payment Status
      PaymentID: { type: String },
    },
    OrderUser: {
      ID: { type: String }, // User ID
      Contact: { type: Number },
      Name: { type: String },
    },
    OrderTime: {
      OrderPlaced: { type: Date },
      OrderConfirmed: { type: Date },
      OrderHandover: { type: Date },
      OrderDelivered: { type: Date },
    },
    OrderFeedback: {
      FoodRating: { type: Number, max: 5, min: 0, default: 5 },
      DeliveryRating: { type: Number, max: 5, min: 0, default: 5 },
      WrittenFeedback: { type: String },
      CustomerSupportID: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order.events", EventOrderSchema);

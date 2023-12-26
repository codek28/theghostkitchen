const mongoose = require("mongoose");

// Subscription Order Schema

const SubscriptionOrderSchema = new mongoose.Schema(
  {
    ID: { type: String, required: true, unique: true },
    Contents: [String], // all products within a order
    SubscriptionDetails: {
      SubscriptionDuration: { type: Number }, // Number of days of Subscription
      SubscriptionFirstDate: { type: Date },
      SubscriptionFrequency: {
        DropDetail: {
          MealType: { type: String }, // It could be Breakfast,Brunch,Lunch,Supper,Dinner
          PreferredTime: { type: Date },
        },
      },
    },
    OrderLocation: {
      DispatchedFrom: { type: String }, // GeoLocation ID Profit Center Location
      DispatchedTo: { type: String }, // GeoLocation ID wouldn't be generated for offline orders
    },
    OrderPayment: {
      PaymentAmount: { type: Number },
      PaymentMode: { type: String }, // Could be Razorpay/QR/Cash/etc.
      PaymentStatus: { type: String }, // Payment Status
      PaymentID: { type: String },
    },
    OrderUser: {
      ID: { type: String }, // After Account creating, previous order loyalty points can be claimed
      Contact: { type: Number },
      Name: { type: String },
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

module.exports = mongoose.model("SubscriptionOrder", SubscriptionOrderSchema);
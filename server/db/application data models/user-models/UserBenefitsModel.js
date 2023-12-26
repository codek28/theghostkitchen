const mongoose = require("mongoose");

// User Benefits Schema

const UserBenefitSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true },
  Discount: {
    UserDiscountCoupons: {
      type: [
        {
          CouponCode: { type: String },
          CouponExpiry: { type: Date },
          CouponLeft: { type: Number },
        },
      ],
      default: [
        {
          CouponCode: "USER5",
          CouponExpiry: new Date("2024-12-31T12:05:45"),
          CouponLeft: 1,
        },
        {
          CouponCode: "USER8",
          CouponExpiry: new Date("2024-12-31T12:05:45"),
          CouponLeft: 1,
        },
        {
          CouponCode: "USER15",
          CouponExpiry: new Date("2024-12-31T12:05:45"),
          CouponLeft: 1,
        },
      ],
    },
    SuperCoupons: {
      type: [
        {
          CouponCode: { type: String },
          CouponExpiry: { type: Date },
          CouponLeft: { type: Number },
        },
      ],
      default: [
        {
          CouponCode: "SUPERDELIVERY",
          CouponExpiry: new Date("2024-12-31T12:05:45"),
          CouponLeft: 1,
        },
      ],
    },
  },
});

module.exports = mongoose.model("user.benefits", UserBenefitSchema);

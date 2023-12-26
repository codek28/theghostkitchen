const mongoose = require("mongoose");

// Following system is applied for discount applicability:
// price-cut discounts - these are set by merchant on their respective profit centers which will show as reduced price
// cart discount - these are available discounts coupon as coupon dropdown is checked, applicable on cart amount only
// super discount - these are extra offers applicable on addition to coupon discount

// cart discount - decided by organisation
// global discount coupon (global-festival/marketing requirement)
// zone discount coupon (zone-festival/marketing requirement)
// Checkin discount coupon (event or fine-dine special requirements)
// admin discount coupon (profit-center-admin would have some discount coupon with him to facilitate offline orders )
// user discount coupon (user-experience and benefit) ["NEWUSER15", "NEWUSER10", "NEWUSER10"]

const GlobalCartDiscountSchema = new mongoose.Schema({
    Code:{type: String, required:true, unique:true},
    DiscountType:{type: String, required:true, default:"GLOBAL-COUPON"}, // Includes - Global-Coupon/Zone-Coupon/CheckIn-Coupon/User-Coupon/Admin-Applied
    Description:{type: String, required:true},
    DiscountApplicability:{
        MaxDiscountedAmount:{type:Number},
        MinimumOrderValue:{type:Number},
        UseLimit:{type:Number}
    },
    Percentage:{type: Number, required:true},
    DiscountActive:{type:Boolean}
});

module.exports = mongoose.model("discount.cartdiscount.globaldiscounts",GlobalCartDiscountSchema);
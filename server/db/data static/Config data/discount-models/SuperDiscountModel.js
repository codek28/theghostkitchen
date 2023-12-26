const mongoose = require("mongoose");

// Following system is applied for discount applicability:
// price-cut discounts - these are set by merchant on their respective profit centers which will show as reduced price
// cart discount - these are available discounts coupon as coupon dropdown is checked, applicable on cart amount only
// super discount - these are extra offers applicable on addition to coupon discount

// super Discount - decided by organisation
// Delivery cut Discount
// Quest Coupon

const SuperDiscountSchema = new mongoose.Schema({
    Code:{type: String, required:true, unique:true},
    DiscountType:{type: String, required:true}, // Includes - Delivery-Cut/Side-Quest-Coupon
    Description:{type: String, required:true},
    DiscountApplicability:{
        ApplicabilityComponent:{type:String}, // Applicable to CartAmount/DeliveryCharge/etc.
        MaxDiscountedAmount:{type:Number},
        MinimumOrderValue:{type:Number},
    },
    Percentage:{type: Number, required:true},
    DiscountActive:{type:Boolean}
});

module.exports = mongoose.model("discount.superdiscounts",SuperDiscountSchema);
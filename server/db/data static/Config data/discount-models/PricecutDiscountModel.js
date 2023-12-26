const mongoose = require("mongoose");

// Following system is applied for discount applicability:
// price-cut discounts - these are set by merchant on their respective profit centers which will show as reduced price
// cart discount - these are available discounts coupon as coupon dropdown is checked, applicable on cart amount only
// super discount - these are extra offers applicable on addition to coupon discount

// Price cut discount - decided by merchant
// profit center discount code schema (cut to all)
// Merchant to Product Discount code schema
// Merchant to Category Discount code schema
// Merchant to Menu Discount schema

const PriceCutDiscountSchema = new mongoose.Schema({
    Code:{type: String, required:true, unique:true},
    DiscountType:{type: String, required:true}, // Includes - Profit-Center-All/Profit-Center-Category/Profit-Center-Product
    Description:{type: String, required:true},
    DiscountApplicability:{
        MaxDiscountedAmount:{type:Number},
        MinimumOrderValue:{type:Number},
    },
    Percentage:{type: Number, required:true},
});

module.exports = mongoose.model("discount.pricecuts",PriceCutDiscountSchema);

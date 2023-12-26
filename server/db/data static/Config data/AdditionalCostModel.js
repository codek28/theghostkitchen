const mongoose = require("mongoose");

// Any kind of extra cost to be added on bill shall use this format
// The types could be - general, gift card, packaging cost, ambience cost, donation channel

// Gift card Schema

const GiftCardSchema = new mongoose.Schema({
    Name:{type: String, required:true},
    Code:{type: String, required:true, unique:true},
    AmountToBill:{type:Number, required:true},
    Description:{type: String, required:true},
    Illustration:{}
});

module.exports = mongoose.model("additionalcost.giftcardmodels",GiftCardSchema);

// Additional Packaging Cost Schema

const AdditionalPackagingCostSchema = new mongoose.Schema({
    Name:{type: String, required:true},
    Code:{type: String, required:true, unique:true},
    AmountToBill:{type:Number, required:true},
    Description:{type: String, required:true},
    Illustration:{}
});

module.exports = mongoose.model("additionalcost.packagingcostmodels",AdditionalPackagingCostSchema);

// Ambience Additional Cost Schema

const AdditionalAmbienceCostSchema = new mongoose.Schema({
    Name:{type: String, required:true},
    Code:{type: String, required:true, unique:true},
    AmountToBill:{type:Number, required:true},
    Description:{type: String, required:true},
    Illustration:{}
});

module.exports = mongoose.model("additionalcost.ambiencechargemodels",AdditionalAmbienceCostSchema);

// Donation channel Schema

const DonationChannelSchema = new mongoose.Schema({
    Name:{type: String, required:true},
    Code:{type: String, required:true, unique:true},
    AvailableDenomination:[Number],
    Description:{type: String, required:true},
    Illustration:{}
});

module.exports = mongoose.model("additionalcost.donationchannelmodels",DonationChannelSchema);
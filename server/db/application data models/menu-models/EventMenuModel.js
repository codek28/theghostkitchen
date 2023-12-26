const mongoose = require("mongoose");

// LisetedCollectionType - MULTIPLE-FOOD-PRODUCTS / MULTIPLE-FOOD-CATEGORIES / SINGLE-FOOD-CATEGORY / FINE-DINE-PRODUCTS / EVENT-UNLOCK-PRODUCTS / STORE-PRODUCTS / MESS-SUBSCRIPTION-PRODUCTS

// ownership type
// GHOST-SIGNATURE-MENU - It is not available to vendor and partnership, these can used by Ghost Kitchen and Franchise only for multiple profit-centers.
// BRAND-SIGNATURE-MENU - It is not available to Ghost-Kitchen and Franchise, these can used by Ghost Vendor and Partner only for multiple profit-centers.
// PROFIT-CENTER-MENU - It is by each profit-center, these will be available to singular assigned profit-center only.
// THIRD-PARTY-MENU - It is by other eshtablished organisation available for sale on our platform (store/speciality-store only).
// EVENT-MENU - It is by event team for sales on our platform on selected events.

// Event Menu Schema

const EventMenuSchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    ListedCollectionType: { type: String, required: true },
    Contents: [String],
    MenuOwnership: {
      OwnershipType: { type: String },
      EventID: { type: String },
    },
    MenuType: {
      FoodType: { type: String },
      MenuAccreditions: [String],
    },
    MenuVisibilityStatus: { type: Boolean },
    Illustration: {},
  });
  
  module.exports = mongoose.model("eventmenus", EventMenuSchema);
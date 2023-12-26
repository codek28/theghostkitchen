const mongoose = require("mongoose");

// CategoryOwnership >>>>> OwnershipType
// ghost-signature-category - It is not available to vendor and partnership, these can used by Ghost Kitchen and Franchise only for multiple profit-centers.
// brand-signature-category - It is not available to Ghost-Kitchen and Franchise, these can used by Ghost Vendor and Partner only for multiple profit-centers.
// profit-center-category - It is by each profit-center, these will be available to singular assigned profit-center only.
// third-party-category - It is by other eshtablished organisation available for sale on our platform (store/speciality-store only).
// fine-dine-category - It is by fine-dine profit-centers.
// mess-food-category - It is by mess profit-centers.
// event-food-category - It would be for event-dishes partcipated by ghost kitchen.

// CategoryOwnership >>>>> MerchantID
// if category by brand-signature/profit-center/third-party/fine-dine/mess-food then ID of merchant who registered it.

// CategoryAccredition - It could be similar to menu name, or some adjective/addition to category as tag.
// It could take values like combo/main-course/chinese/continental/drinks/snacks

// Event Category Schema is for dishes available only from event unlock

const EventCategorySchema = new mongoose.Schema({
    ID: { type: String, required: true, unique: true },
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Contents: [String],
    CategoryOwnership: {
      OwnershipType: { type: String }, //
      MerchantID: { type: String },
    },
    SubClassification: {
      Basis: {
        Superclass: { type: String },
        ProductsIncluded: [String],
        Availibility: { type: Boolean },
      },
    },
    CategoryType: {
      FoodType: { type: String },
      CategoryAccreditions: [String],
      Instructions: { type: String },
    },
    ServingStatus: { type: Boolean },
    CategoryKeywords: [String],
    Illustration: {},
  });
  
  module.exports = mongoose.model("eventcategories", EventCategorySchema);
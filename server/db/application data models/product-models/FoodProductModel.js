const mongoose = require("mongoose");

// ProviderBasis >>>>>
// Provider Mode : DELIVERY - means available online on application and deliverable as well.
// Provider Mode : TAKEAWAY - means order online/offline but no seating.
// Provider Mode : CHECK-IN - CheckIn means not available unless checked-in via ghost platform and checkin will unlock special deals only for loggers at specific events.
// Provider Mode : SERVING - Serving means menu for scanable dishes generally not available for delivery. serving includes products like sizzlers/thali etc. which could be only served at fine-dine.
// Provider Mode : DAILY-DROP - daily drop is for mess delivery on regular basis.

// schema for online selling food

const FoodProductSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true },
  Name: { type: String, required: true },
  Description: { type: String, required: true, maxLength: 140 },
  CategoryID: { type: String, required: true },
  FoodCategory: {
    FoodType: { type: String, required: true, default: "VEG" },
    FoodAccredition: { type: [String] },
    FoodInstructions: { type: String },
  },
  ProviderBasis: {
    type: [String],
    required: true,
  },
  ProductCustomization: {
    Variant: [
      {
        VariantSubject: { type: String },
        VariantConfig: [
          {
            ProductDefault: { type: Boolean },
            VariantName: { type: String },
            VariantPrice: { type: Number },
          },
        ],
      },
    ],
    AddOn: [{ AddOnName: { type: String }, AddOnPrice: { type: Number } }],
  },
  PriceOriginal: { type: Number, required: true },
  PreparationTime: { type: Number }, // preparation time in minutes
  ProductVisibilityStatus: { type: Boolean },
  ProductKeywords: [String],
  ProductAdditionalDetails: {
    NutritionalValue: {},
    Indegredients: {},
  },
  ProductImage: {},
});

module.exports = mongoose.model("foodproducts", FoodProductSchema);

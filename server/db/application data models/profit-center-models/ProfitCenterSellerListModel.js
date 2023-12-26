const mongoose = require("mongoose");

// profit center seller list system

const ProfitCenterSellerListSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true },
  SellerList: {
    Menu: [
      {
        // put array of objects
        MenuName: { type: String },
        MenuID: { type: String },
      },
    ],
    SpecialCategory: [
      {
        CategoryName: { type: String },
        CategoryID: { type: String },
      },
    ],
    AddOnMenu: [
      {
        AddonClassSubject: { type: String },
        Contents: [String], // Includes Add On Products
      },
    ],
  },
});

module.exports = mongoose.model(
  "profitcenter.sellerlists",
  ProfitCenterSellerListSchema
);

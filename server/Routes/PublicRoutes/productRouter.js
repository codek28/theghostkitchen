const mongoose = require("mongoose");

const express = require("express");
const productRouter = express.Router();
const FoodProduct = require("../../db/application data models/product-models/FoodProductModel");

//

productRouter.get("/get-food-products", async (req, res) => {
  try {
    const productsobj = await FoodProduct.find();
    res.status(200).send({ productsobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

// product by category

productRouter.get("/products-by-categories", async (req, res) => {
  try {
    const productsbycat = await FoodProduct.aggregate([
      { $match: {} },
      {
        $group: {
          _id: "$CategoryID",
          products: { $push: "$$ROOT" },
        },
      },
      { $project: { categorycode: "$_id", products: 1, _id: 0 } },
    ]);
    res.status(200).send({ data: productsbycat });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});


module.exports = productRouter;


const mongoose = require("mongoose");

const express = require("express");
const categoryRouter = express.Router();
const FoodMenu = require("../../db/application data models/menu-models/FoodMenuModel");
const FoodCategory = require("../../db/application data models/category-models/FoodCategoryModel");
const FoodProduct = require("../../db/application data models/product-models/FoodProductModel");

//

categoryRouter.get("/get-food-categories", async (req, res) => {
  try {
    const categoriesobj = await FoodCategory.find();
    res.status(200).send({ categoriesobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

//

categoryRouter.post("/get-category-story", async (req, res) => {
  try {
    const catid = req.body.catid;
    const categorystory = await FoodCategory.findOne({ ID: catid })
    res.status(200).send({ categorystory });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

// category by menu

categoryRouter.post("/category-from-menu", async (req, res) => {
  try {
    const menuid = req.body.menuid;
    const menuobj = await FoodMenu.findOne({ ID: menuid });
    const categoryarray = menuobj.Contents;
    const catmatchobj = await Promise.all(
      categoryarray.map((catid) => {
        return FoodCategory.find({ ID: catid });
      })
    );
    res.status(200).send(catmatchobj);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// category subclassification as an api

categoryRouter.post("/subcategory-from-category", async (req, res) => {
  try {
    const catid = req.body.catid;
    const catobj = await FoodCategory.find({ ID: catid });
    const classname = catobj[0].Name;
    const subclassarr = catobj[0].SubClassification.Basis;

    // if subclassification is there for category then following object will return result with format
    const subclassmatchobj = await Promise.all(
      subclassarr.map(async (subclassobj) => {
        const classname = subclassobj.Superclass;
        const classresult = await Promise.all(
          subclassobj.ProductsIncluded.map((prodid) => {
            return FoodProduct.findOne({ ID: prodid });
          })
        );
        return { classname, classresult };
      })
    );
    // if subclassification is not there for category then following object will return result
    const classresult = await Promise.all(
      catobj[0].Contents.map((prodid) => {
        return FoodProduct.findOne({ ID: prodid });
      })
    );
    // if subclassification is not there for category then following object will return result with format
    const classmatchobj = await Promise.all(
      [classresult].map(() => {
        return { classname, classresult };
      })
    );
      // following will select and send correct format
    const matchobj = subclassarr.length > 0 ? subclassmatchobj : classmatchobj;
    res.status(200).send(matchobj);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

//

categoryRouter.post("/product-from-subcategory", async (req, res) => {
  try {
    const catid = req.body.catid;
    const catobj = await FoodCategory.find({ ID: catid });
    res.status(200).send(catobj);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = categoryRouter;

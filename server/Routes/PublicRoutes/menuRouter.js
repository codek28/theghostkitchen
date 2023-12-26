const mongoose = require("mongoose");

// needs work

const express = require("express");
const menuRouter = express.Router();

const FoodMenu = require("../../db/application data models/menu-models/FoodMenuModel");
const StoreMenu = require("../../db/application data models/menu-models/StoreMenuModel");
const EventMenu = require("../../db/application data models/menu-models/EventMenuModel");

menuRouter.get("/get-food-menu", async (req, res) => {
  try {
    const foodmenuobj = await FoodMenu.find({});
    res.status(200).json({ foodmenudata: foodmenuobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

//

menuRouter.post("/get-menu-story", async (req, res) => {
  try {
    const menuid = req.body.menuid;
    const menustory = await FoodMenu.find({ ID: menuid });
    res.status(200).send({ menustory });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

//

menuRouter.get("/menu-by-pc", async (req, res) => {
  try {
    const menusbypc = await FoodMenu.aggregate([
      { $match: {} },
      {
        $group: {
          _id: "$MenuOwnership.ProfitCenterID",
          foodmenus: { $push: "$$ROOT" },
        },
      },
      { $project: { pccode: "$_id", foodmenus: 1, _id: 0 } },
    ]);
    res.status(200).send({ data: menusbypc });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// menu by profit center

menuRouter.get("/get-store-menu", async (req, res) => {
  try {
    const storemenuobj = await StoreMenu.find();
    res.status(200).json({ storemenudata: storemenuobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

menuRouter.get("/get-event-menu", async (req, res) => {
  try {
    const eventmenuobj = await EventMenu.find();
    res.status(200).json({ eventmenudata: eventmenuobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

module.exports = menuRouter;

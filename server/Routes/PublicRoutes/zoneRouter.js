const mongoose = require("mongoose");

const express = require("express");
const zoneRouter = express.Router();
const Zone = require("../../db/application data models/ZoneModel");

const ProfitCenter = require("../../db/application data models/profit-center-models/ProfitCenterModel");
const pcSellerList = require("../../db/application data models/profit-center-models/ProfitCenterSellerListModel")

// zones get route

zoneRouter.get("/get-zone", async (req, res) => {
  try {
    const zoneobj = await Zone.find();
    res.status(200).json({ zonedata: zoneobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

//

zoneRouter.post("/get-zone-story", async (req, res) => {
  try {
    const zoneid = req.body.zoneid;
    const zonestory = await Zone.findOne({ ID: zoneid })
    res.status(200).send({ zonestory });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

// post zoneid to get all profit centers

zoneRouter.post("/get-profit-center", async (req, res) => {
  try {
    const zoneid = req.body.zoneid;
    const zoneobj = await Zone.find({ ID: zoneid });
    const pcarray = zoneobj[0].ProfitCenters;
    const pcmatchobj = await Promise.all(
      pcarray.map((pcid) => {
        return ProfitCenter.find({ ID: pcid });
      })
    );
    res.status(200).send(pcmatchobj[0]);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

zoneRouter.post("/get-pc-sellerlist", async (req, res) => {
  try {
    const zoneid = req.body.zoneid;
    const zoneobj = await Zone.find({ ID: zoneid });
    const pcarray = zoneobj[0].ProfitCenters;
    const pcmatchobj = await Promise.all(
      pcarray.map((pcid) => {
        return pcSellerList.find({ ID: pcid });
      })
    );
    res.status(200).send(pcmatchobj[0]);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

//

zoneRouter.get("/pc-by-zone", async (req, res) => {
  try {
    const zoneobj = await Zone.aggregate([
      { $match: {} },
      {
        $group: {
          _id: "$categoryID",
          products: { $push: "$$ROOT" },
        },
      },
      { $project: { categorycode: "$_id", products: 1, _id: 0 } },
    ]);
    res.status(200).json({ zonedata: zoneobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

module.exports = zoneRouter;

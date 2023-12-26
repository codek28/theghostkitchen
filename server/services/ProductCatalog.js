// profit center once selected show products tagged to it in database returned via api
// a second filter on frontend layer could be applied to dull products not available that time or include indegredients which user has mentioned as allergic

const express = require("express");
const zoneRouter = express.Router();
const Zone = require('../db/data static/Operation data/ZoneModel');

// Zone selected will redirect to list of available profit center in that zone.

zoneRouter.post("/get-zone", async (req, res) => {
  try {
    const userzone = req.body.zone;
    const zoneobj = await Zone.find({ ID: userzone });
    res.status(200).json(zoneobj);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});
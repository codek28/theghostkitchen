const mongoose = require('mongoose')

const express = require("express");
const merchantRouter = express.Router();
const MerchantSchema = require("../../db/data static/Organisation data/MerchantModel")

merchantRouter.get("/get-merchant", async (req, res) => {
  try {
    const merchantsobj = await MerchantSchema.find();
    res.status(200).json({merchantdata:merchantsobj});
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err)
  }
});

module.exports = merchantRouter;
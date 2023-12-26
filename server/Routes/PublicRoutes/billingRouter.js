const mongoose = require('mongoose')

const express = require("express");
const billingRouter = express.Router();
const PricecutDiscount = require("../../db/data static/Config data/discount-models/PricecutDiscountModel")
const UserCartDiscount = require("../../db/data static/Config data/discount-models/cart-discount-models/UserCartDiscountModel")
const SuperDiscount = require("../../db/data static/Config data/discount-models/SuperDiscountModel")

//

billingRouter.post("/get-pricecut-discount", async (req, res) => {
  try {
    const discountcode = req.body.pricecutcode;
    const discountobj = await PricecutDiscount.findOne({ Code: discountcode })
    res.status(200).send({ discountobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

//

billingRouter.post("/get-cart-user-discount", async (req, res) => {
  try {
    const cartuserdiscountcode = req.body.userdiscountcode;
    const cartdiscountobj = await UserCartDiscount.findOne({ Code: cartuserdiscountcode })
    res.status(200).send({ cartdiscountobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

//

billingRouter.post("/get-super-discount", async (req, res) => {
  try {
    const superdiscountcode = req.body.superdiscountcode;
    const superdiscountobj = await SuperDiscount.findOne({ Code: superdiscountcode })
    res.status(200).send({ superdiscountobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

module.exports = billingRouter;
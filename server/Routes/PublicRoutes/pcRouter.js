const mongoose = require("mongoose");

const express = require("express");
const pcRouter = express.Router();

const ProfitCenter = require("../../db/application data models/profit-center-models/ProfitCenterModel");

const pcSellerList = require("../../db/application data models/profit-center-models/ProfitCenterSellerListModel");
const FoodMenu = require("../../db/application data models/menu-models/FoodMenuModel");
const pcBilling = require("../../db/application data models/profit-center-models/ProfitCenterBillingModel");

//

pcRouter.post("/get-pc", async (req, res) => {
  try {
    const pcid = req.body.pcid;
    const pcobj = await ProfitCenter.find({ ID: pcid });
    res.status(200).send(pcobj);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

//

pcRouter.post("/get-pc-sellerlist", async (req, res) => {
  try {
    const profitcenterid = req.body.pcid;
    const sellerlistobj = await pcSellerList.find({ ID: profitcenterid });
    const sellerlistmenu = sellerlistobj[0].SellerList.Menu;
    const menumatchobj = await Promise.all(
      sellerlistmenu.map((menuobj) => {
        return FoodMenu.findOne({ ID: menuobj.MenuID });
      })
    );
    res.status(200).send(menumatchobj);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

//

pcRouter.post("/get-pc-billings", async (req, res) => {
  try {
    const profitcenterid = req.body.pcid;
    const billingobj = await pcBilling.findOne({ ID: profitcenterid });
    res.status(200).send({ billingobj });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// pc seller list

pcRouter.get("/pc-sellerlist", async (req, res) => {
  try {
    const sellerlistobj = await pcSellerList.find();
    res.status(200).send({ sellerlistobj });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

module.exports = pcRouter;

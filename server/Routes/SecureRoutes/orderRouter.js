const express = require("express");
const orderRouter = express.Router();
const OnlineOrder = require("../../db/application data models/order-models/OnlineOrderModel");
const {
  createOnlineOrderID,
  getDocTotal
} = require("../../Scripts/IDGenerator");

orderRouter.post("/create-online-order", async (req, res) => {
  const orderdata = req.body;
  const OrderToken = await createOnlineOrderID("order.onlines", "ONLNORDR-");
  const onlineorder = new OnlineOrder({ OrderToken, ...orderdata });
  onlineorder.save((err) => {
    if (err) {
      res.status(400).send({ error: err });
    } else {
      res.status(200).send({ data: onlineorder });
    }
  });
});

// testing left

orderRouter.post("/get-pc-active-orders", async (req, res) => {
  try {
    const pcid = req.body.pcid;
    const orderarr = await OnlineOrder.find({
      $and: [{ OrderStatus: "ACTIVE" }, { OrderForPC: pcid }]
    });
    res.status(200).json(orderarr);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

orderRouter.post("/get-pc-completed-orders", async (req, res) => {
  try {
    const pcid = req.body.pcid;
    const orderarr = await OnlineOrder.find({
      $and: [{ OrderStatus: "COMPLETED" }, { OrderForPC: pcid }]
    });
    res.status(200).json(orderarr);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// update active order to completed

orderRouter.post("/update-active-order", async (req, res) => {
  try {
    const ordertoken = req.body.OrderToken;
    const orderobj = await OnlineOrder.updateOne(
      { OrderToken: ordertoken },
      { $set: { OrderStatus: "COMPLETED" } }
    );
    res.status(200).json(orderobj);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// get order details

orderRouter.post("/get-order", async (req, res) => {
  try {
    const ordertoken = req.body.ordertoken;
    const orderobj = await OnlineOrder.findOne({ ID: ordertoken });
    res.status(200).json(orderobj);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// get order details

orderRouter.post("/get-user-active-orders", async (req, res) => {
  try {
    const userid = req.body.userid;
    const orderobj = await OnlineOrder.find({  "OrderUser.ID": userid, OrderStatus: 'ACTIVE'  });
    res.status(200).json(orderobj);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = orderRouter;

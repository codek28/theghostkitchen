const mongoose = require("mongoose");

const express = require("express");
const adminRouter = express.Router();
const AdminSchema = require("../../db/data static/Organisation data/admin-models/AdminModel");

adminRouter.get("/get-merchant", async (req, res) => {
  try {
    const adminsarray = await AdminSchema.find();
    res.status(200).json({ data: adminsarray });
  } catch (err) {
    res.status(400).send({ error: err });
    console.log(err);
  }
});

module.exports = adminRouter;

const express = require("express");
const Razorpay = require("razorpay");
const payRouter = express.Router();
const crypto = require("crypto");
const OnlinePayment = require("../../db/application data models/payment-models/OnlinePaymentModel");
const { createPaymentID } = require("../../Scripts/IDGenerator");

const paymentVerification = async (req, res) => {
  const orderid = sessionStorage.getItem("orderid");
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
  const body = orderid + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.Razorpay_API_SECRET2)
    .update(body.toString())
    .digest("hex");
  console.log("sig received ", razorpay_signature);
  console.log("sig generated ", expectedSignature);

  const isAuthenticPayment = expectedSignature === razorpay_signature;

  if (isAuthenticPayment) {
    res.redirect(`http://localhost:3000/order/${razorpay_order_id}`);
  } else {
    res.status(400).json({
      success: false
    });
  }
};

payRouter.post("/payment-verification", paymentVerification);

const payInstance = new Razorpay({
  key_id: process.env.Razorpay_API_KEY,
  key_secret: process.env.Razorpay_API_SECRET
});

payRouter.post("/create-payment-intent", async (req, res) => {
  const options = {
    amount: req.body.Amount,
    currency: "INR"
  };
  try {
    const order = await payInstance.orders.create(options);
    console.log(order);
    res.status(200).json({
      success: true,
      order
    });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

payRouter.post("/create-online-payment", async (req, res) => {
  const paydata = req.body;
  const PaymentToken = await createPaymentID(
    "payment.onlinepayments",
    "ONLNPYMT-"
  );
  const onlinepayment = new OnlinePayment({ PaymentToken, ...paydata });
  onlinepayment.save((err) => {
    if (err) {
      res.status(400).send({ error: err });
    } else {
      res.status(200).send({ data: onlinepayment });
    }
  });
});

module.exports = payRouter;

const express = require("express");
const userRouter = express.Router();
const User = require("../../db/application data models/user-models/UserModel");
const UserBenefits = require("../../db/application data models/user-models/UserBenefitsModel");

userRouter.post("/get-user", async (req, res) => {
  try {
    const useruid = req.body.uid;
    const loginuserobj = await User.findOne({ ID: useruid });
    res.status(200).json({data:loginuserobj});
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

userRouter.post("/get-user-benefits", async (req, res) => {
  try {
    const useruid = req.body.uid;
    const loginuserbenefitsobj = await UserBenefits.findOne({ ID: useruid });
    res.status(200).json({data:loginuserbenefitsobj});
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

userRouter.post("/create-user", async (req, res) => {
  const { ContactNo, ID, Name } = req.body;
  const user = new User({
    ID,
    ContactNo,
    Name
  });
  user.save((err, user) => {
    if (err) {
      res.status(400).send({ error: err });
    } else {
      res.status(200).send({ data: user });
    }
  });
});

userRouter.post("/create-user-benefits", async (req, res) => {
  const { ID } = req.body;
  const userbenefits = new UserBenefits({
    ID
  });
  userbenefits.save((err, user) => {
    if (err) {
      res.status(400).send({ error: err });
    } else {
      res.status(200).send({ data: user });
    }
  });
});

// when order gets competed

function completeUserOrder(userId, nestedArrayPull, nestedArrayPush, orderToken) {
  User.updateOne(
    { ID: userId },
    { $pull: { [nestedArrayPull]: orderToken } },
    { $push: { [nestedArrayPush]: orderToken } }
  ).then(() => {
    return "executed";
  });
}

userRouter.post("/complete-user-order", async (req, res) => {
  const { ID, OrderToken } = req.body;

  try {
    const updateduser = completeUserOrder(
      ID,
      "Orders.ActiveOrders",
      "Orders.CompletedOrders",
      OrderToken
    );
    res.status(200).json({
      success: true
    });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// to update user benefits

function removeNestedDiscountObject(userId, nestedArrayName, couponCode) {
  UserBenefits.updateOne(
    { ID: userId },
    { $pull: { [nestedArrayName]: { ["CouponCode"]: couponCode } } }
  ).then(() => {
    return "executed";
  });
}

userRouter.post("/update-user-cart-benefits", async (req, res) => {
  const { ID, CouponCode } = req.body;

  try {
    const updateduser = removeNestedDiscountObject(
      ID,
      "Discount.UserDiscountCoupons",
      CouponCode
    );
    res.status(200).json({
      success: true
    });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

userRouter.post("/update-user-super-benefits", async (req, res) => {
  const { ID, CouponCode } = req.body;

  try {
    const updateduser = removeNestedDiscountObject(
      ID,
      "Discount.SuperCoupons",
      CouponCode
    );
    res.status(200).json({
      success: true
    });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// to update user db with order

function addActiveOrderObject(userId, nestedArrayName, orderToken) {
  User.updateOne(
    { ID: userId },
    { $push: { [nestedArrayName]: orderToken } }
  ).then(() => {
    return "executed";
  });
}

userRouter.post("/add-active-order", async (req, res) => {
  const { userID, OrderToken } = req.body;

  try {
    const updateduser = addActiveOrderObject(
      userID,
      "Orders.ActiveOrders",
      OrderToken
    );
    res.status(200).json({
      success: true
    });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// to update user db with geo

function addActiveGeoObject(userId, nestedArrayName, geoid) {
  User.updateOne({ ID: userId }, { $push: { [nestedArrayName]: geoid } }).then(
    () => {
      return "executed";
    }
  );
}

userRouter.post("/add-geo-loc", async (req, res) => {
  const { ID, GeoID } = req.body;

  try {
    const updateduser = addActiveGeoObject(ID, "SavedGeoLocations", GeoID);
    res.status(200).json({
      success: true
    });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = userRouter;

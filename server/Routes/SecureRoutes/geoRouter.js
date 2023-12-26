const express = require("express");
const geoRouter = express.Router();
const UserGeo = require("../../db/application data models/geo-models/UserGeoModel");
const { createUserGeoID, getDocTotal } = require("../../Scripts/IDGenerator");

geoRouter.post("/find-geoid", async (req, res) => {
  try {
    const geoid = req.body.geoid;
    const geoobj = await UserGeo.find({ GeoID: geoid  });
    res.status(200).json({data:geoobj});
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

geoRouter.post("/get-user-geo", async (req, res) => {
  try {
    const userid = req.body.userid;
    const geoobj = await UserGeo.find({ "TaggedToUserID.UserID": userid  });
    res.status(200).json({data:geoobj});
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

geoRouter.post("/create-user-geo", async (req, res) => {
  const geoinfo = req.body;
  const GeoID = await createUserGeoID("geo.users", "RJ06BHL", "-GEOUS-");
  const usergeo = new UserGeo({ GeoID, ...geoinfo });
  usergeo.save((err, user) => {
    if (err) {
      res.status(400).send({ error: err });
    } else {
      res.status(200).send({ data: usergeo });
    }
  });
});

module.exports = geoRouter;

import { useState, useEffect } from "react";
import { mappls } from "mappls-web-maps";
import { getAdminZone } from "../../../stores/admin/adminSlice";
import { useSelector } from "react-redux";

export const DeliveryPartnerMap = ({ ordertoken, geoid }) => {
  const [geostate, setGeoState] = useState([]);
  const adminzone = useSelector(getAdminZone);

  useEffect(() => {
    fetch("http://localhost:3001/api/geo/find-geoid", {
      method: "POST",
      body: JSON.stringify({
        geoid: geoid
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => setGeoState(data))
      .catch((e) => console.log(e));
  }, [geoid]);

  const styleMap = { width: "99%", height: "99vh", display: "inline-block" };
  const mapProps = {
    center: [25.325116, 74.648691],
    traffic: false,
    zoom: 14,
    geolocation: false,
    clickableIcons: false
  };
  var locstatebhl = { lng: 74.64869, lat: 25.325116 };
  var locstatekot = { lng: 75.828804, lat: 25.200249 };
  let locstate = adminzone === "RJ06BHL" ? locstatebhl : locstatekot;
  var mapObject, storeMarker, userMarker;
  var mapplsClassObject = new mappls();

  mapplsClassObject.initialize("74e70799480ca8ec5c169db770a51e7a", () => {
    mapObject = mapplsClassObject.Map({ id: "map", properties: mapProps });

    //load map layers/components after map load, inside this callback (Recommended)
    mapObject.on("load", () => {
      // Activites after mapload
      try {
        storeMarker = mapplsClassObject.Marker({
          map: mapObject,
          position: locstate
        });
        userMarker = mapplsClassObject.Marker({
          map: mapObject,
          position: {
            lng: geostate?.Coordinates.Longitude,
            lat: geostate?.Coordinates.Latitude
          }
        });
      } catch (e) {
        console.log(e);
      }
    });
  });

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div id="map" style={styleMap}></div>
        <div className="card-body">
          <h2 className="card-title">
            Order Token - {ordertoken}
            <div className="badge badge-secondary">Active</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

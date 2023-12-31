import { useState, useEffect } from "react";
import { getAdminZone } from "../../../stores/admin/adminSlice";
import { useSelector } from "react-redux";
import { Map } from "./Map";

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

  var locstatebhl = { lng: 74.64869, lat: 25.325116 };
  var locstatekot = { lng: 75.828804, lat: 25.200249 };
  let locstate = adminzone === "RJ06BHL" ? locstatebhl : locstatekot;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Order Token - {ordertoken}
            <div className="badge badge-secondary">Active</div>
          </h2>
          <h2>Address</h2>
          {geostate.data?.length > 0 && (
            <div>
              <h2>{geostate.data[0].Address.Line1Name}</h2>
              <h2>{geostate.data[0].Address.Line2Street}</h2>
              <h2>{geostate.data[0].Address.Line3Locality}</h2>
            </div>
          )}
          {(geostate.data?.length > 0) && (
            <Map locstate={locstate} geoobj={geostate.data[0]} />
          )}
        </div>
      </div>
    </div>
  );
};

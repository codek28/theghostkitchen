import { mappls } from "mappls-web-maps";

export const Map = ({ geoobj, locstate }) => {
  var mapObject;
  var mapplsClassObject = new mappls();

  const styleMap = { width: "99%", height: "99vh", display: "inline-block" };
  const mapProps = {
    center: [locstate.lat, locstate.lng],
    traffic: false,
    zoom: 14,
    geolocation: false,
    clickableIcons: false
  };

  var geoData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          htmlPopup: "user"
        },
        geometry: {
          type: "Point",
          coordinates: [locstate.lat, locstate.lng]
        }
      },
      {
        type: "Feature",
        properties: {
          htmlPopup: "store"
        },
        geometry: {
          type: "Point",
          coordinates: [
            geoobj.Coordinates.Latitude,
            geoobj.Coordinates.Longitude
          ]
        }
      }
    ]
  };

  mapplsClassObject.initialize("74e70799480ca8ec5c169db770a51e7a", () => {
    mapObject = mapplsClassObject.Map({ id: "map", properties: mapProps });

    //load map layers/components after map load, inside this callback (Recommended)
    mapObject.on("load", () => {
      // Activites after mapload
      try {
        const orderMarker = mapplsClassObject.Marker({
          map: mapObject,
          position: geoData
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
          <h2 className="card-title">Order Location are marked</h2>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { useEffect } from "react";

// see if google map api could be more accurate or almost same
const useGeoLocation = () => {
  const [loc, setLoc] = useState({});

  const onSuccess = (location) => {
    setLoc({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
      error: null,
    });
  };

  const onError = (err) => {
    setLoc({
      loaded: true,
      coordinates: {
        lat: "",
        lng: "",
      },
      error: err,
    });
  };

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  useEffect(() => {
    try {
      if (!("geolocation" in navigator)) {
        setLoc({
          loaded: true,
          coordinates: { lat: "", lng: "" },
          error: {
            code: 0,
            message: "Geolocation not supported",
          },
        });
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return loc;
};

export default useGeoLocation;

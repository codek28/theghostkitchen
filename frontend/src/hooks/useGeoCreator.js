import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getPhoneNumber,
  getUid,
  getUserLogin,
  getUserZone
} from "../stores/user/userSlice";
import {
  selectAddressLabel,
  selectAddressLine1,
  selectAddressLine2,
  selectAddressLine3,
  selectLocationLat,
  selectLocationLng,
  selectLocationStatus,
  selectSaveGeoSelection
} from "../stores/location/geoSlice";

export const useGeoCreator = () => {
  const [geocreatoralert, setGeoCreatorAlert] = useState("not initialised");

  const userloginstatus = useSelector(getUserLogin);
  const userid = useSelector(getUid);
  const usercontact = useSelector(getPhoneNumber);
  const userzone = useSelector(getUserZone);

  const savedetails = useSelector(selectSaveGeoSelection);
  const locationlat = useSelector(selectLocationLat);
  const locationlng = useSelector(selectLocationLng);
  const userlocationstatus = useSelector(selectLocationStatus);
  const label = useSelector(selectAddressLabel);
  const addressline1 = useSelector(selectAddressLine1);
  const addressline2 = useSelector(selectAddressLine2);
  const addressline3 = useSelector(selectAddressLine3);

  const [geoinfo, setGeoInfo] = useState({
    TaggedToUserID: {
      UserID: "",
      ContactNo: 0
    },
    Label: "",
    Address: {
      Line1Name: "",
      Line2Street: "",
      Line3Locality: ""
    },
    Coordinates: {
      Latitude: { type: Number },
      Longitude: { type: Number }
    },
    Zone: {
      Zone: ""
    },
    Accuracy: { type: Number }
  });

  useEffect(() => {
    const stateCheck = async () => {
      try {
        if (userloginstatus & userlocationstatus) {
          setGeoInfo({
            TaggedToUserID: {
              UserID: userid,
              ContactNo: usercontact
            },
            Label: label,
            Address: {
              Line1Name: addressline1,
              Line2Street: addressline2,
              Line3Locality: addressline3
            },
            Coordinates: {
              Latitude: locationlat,
              Longitude: locationlng
            },
            Zone: {
              Zone: userzone
            },
            Accuracy: 5
          });
          setGeoCreatorAlert("created geo Info");
          console.log(geocreatoralert);
        } else {
          setGeoCreatorAlert("geo info not complete") &&
            console.log(geocreatoralert);
        }
      } catch (e) {
        setGeoCreatorAlert("Some Problem Occured to create geo Info");
        console.log(e);
      }
    };

    stateCheck();
  }, [userlocationstatus, savedetails]);

  return geoinfo;
};

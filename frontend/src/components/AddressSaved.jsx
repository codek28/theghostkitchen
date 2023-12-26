import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { AddressListCard } from "./AddressListCard";
import { getUid } from "../stores/user/userSlice";

export const AddressSaved = () => {
  const [savedaddress, setSavedAddress] = useState([]);
  const userid = useSelector(getUid);

  useEffect(() => {
    fetch("http://localhost:3001/api/geo/get-user-geo", {
      method: "POST",
      body: JSON.stringify({
        userid: userid
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => setSavedAddress(data))
      .catch((e) => console.log(e));
  }, [userid]);

  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <div className="collapse-title text-xl font-medium">
          Select From Saved Addresses
        </div>
        <div className="gap-2">
          {savedaddress?.data &&
            savedaddress.data.map((geoobj, index) => {
              return <AddressListCard geoobj={geoobj} key={index}/>;
            })}
        </div>
      </div>
    </div>
  );
};

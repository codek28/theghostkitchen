import { useSelector } from "react-redux";
import { ProfitCenterListCard } from "./ProfitCenterListCard";
import { useState, useEffect } from "react";
import { getUserZone } from "../../stores/user/userSlice";

// here we are using state to render list , rather use useParams

export const PCList = () => {
  const [zoneprofitcenters, setZoneProfitCenters] = useState([]);
  const activeZone = useSelector(getUserZone);
  const ipaddrpc = process.env.REACT_APP_IPADDR + "/api/zone/get-profit-center";

  useEffect(() => {
    fetch(ipaddrpc, {
      method: "POST",
      body: JSON.stringify({
        zoneid: activeZone
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => setZoneProfitCenters(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {zoneprofitcenters.length > 0 ? (
        zoneprofitcenters.map((profitcenter, index) => {
          return (
            <ProfitCenterListCard profitcenter={profitcenter} key={index} />
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

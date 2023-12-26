import { useSelector } from "react-redux";
import { ProfitCenterListCard } from "./ProfitCenterListCard";
import { useState, useEffect } from "react";
import { getUserZone } from "../../stores/user/userSlice";

// here we are using state to render list , rather use useParams

export const PCList = () => {
  const [zoneprofitcenters, setZoneProfitCenters] = useState([]);
  const activeZone = useSelector(getUserZone);

  useEffect(() => {
    fetch("http://localhost:3001/api/zone/get-profit-center", {
      method: "POST",
      body: JSON.stringify({
        zoneid: activeZone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setZoneProfitCenters(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="">
      {zoneprofitcenters.length > 0 &&
        zoneprofitcenters.map((profitcenter, index) => {
          return (
            <ProfitCenterListCard profitcenter={profitcenter} key={index} />
          );
        })}
    </div>
  );
};

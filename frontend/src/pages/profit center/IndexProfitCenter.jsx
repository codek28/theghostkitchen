import { ProfitCenterStoryCard } from "./ProfitCenterStoryCard";
import { MenuToCategoryCard } from "./MenuToCategoryCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CenterDiscountAlertCard } from "./CenterDiscountAlertCard";

export const IndexProfitCenter = ({ profitcenter }) => {
  const [profitcenterobj, setProfitCenterObj] = useState([]);

  const referencePC = useParams();
  const profitcenterid = referencePC.pcid;

  useEffect(() => {
    fetch("http://localhost:3001/api/profitcenter/get-pc", {
      method: "POST",
      body: JSON.stringify({
        pcid: profitcenterid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfitCenterObj(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className=" flex flex-col bg-primary text-primary-content p-4 gap-4">
      <div className="card card-side">
      <div className="card-body ">
        {profitcenterobj.length > 0 &&
          profitcenterobj.map((profitcenter, index) => {
            return (
              <ProfitCenterStoryCard profitcenter={profitcenter} key={index} />
            );
          })}
      </div>
      </div>
      <MenuToCategoryCard />
      <CenterDiscountAlertCard />
    </div>
  );
};

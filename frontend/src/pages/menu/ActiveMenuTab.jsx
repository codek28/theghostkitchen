import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuButtonExtended from "../../components/MenuButtonExtended";

export const ActiveMenuTab = () => {
  const referenceurlparams = useParams();
  const [profitcentermenu, setProfitCenterMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/profitcenter/get-pc-sellerlist", {
      method: "POST",
      body: JSON.stringify({
        pcid: referenceurlparams.pcid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfitCenterMenu(data))
      .catch((e) => console.log(e));
  }, [referenceurlparams.pcid]);

  return (
    <div className="flex flex-row">
      <div className="tabs tabs-boxed gap-2">
        {profitcentermenu.length > 0 &&
          profitcentermenu.map((menuobj, index) => {
            return <MenuButtonExtended menu={menuobj} key={index} />;
          })}
      </div>
    </div>
  );
};

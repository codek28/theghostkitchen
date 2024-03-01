import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuButtonExtended from "../../components/MenuButtonExtended";

export const ActiveMenuTab = () => {
  const referenceurlparams = useParams();
  const [profitcentermenu, setProfitCenterMenu] = useState([]);
  const ipaddrpcsellerlist =
    process.env.REACT_APP_IPADDR + "/api/profitcenter/get-pc-sellerlist";

  useEffect(() => {
    fetch(ipaddrpcsellerlist, {
      method: "POST",
      body: JSON.stringify({
        pcid: referenceurlparams.pcid
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((data) => setProfitCenterMenu(data))
      .catch((e) => console.log(e));
  }, [referenceurlparams.pcid]);

  return (
    <div className="flex flex-row">
      <div className="tabs tabs-boxed gap-2">
        {profitcentermenu.length > 0 ? (
          profitcentermenu.map((menuobj, index) => {
            return <MenuButtonExtended menu={menuobj} key={index} />;
          })
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};
